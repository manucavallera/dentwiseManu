"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "../prisma";
import { AppointmentStatus } from "@prisma/client";
import { APPOINTMENT_TYPES } from "@/lib/utils";
import resend from "@/lib/resend"; // Importamos Resend
import AppointmentConfirmationEmail from "@/components/emails/AppointmentConfirmationEmail"; // El template del email
import { format } from "date-fns"; // Para formatear la fecha

// Helper para convertir "09:00" -> minutos desde medianoche
const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// Helper para convertir minutos -> "09:30"
const minutesToTime = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
};

function transformAppointment(appointment: any) {
  return {
    ...appointment,
    patientName:
      `${appointment.user.firstName || ""} ${appointment.user.lastName || ""}`.trim(),
    patientEmail: appointment.user.email,
    doctorName: appointment.doctor.name,
    doctorImageUrl: appointment.doctor.imageUrl || "",
    date: appointment.date.toISOString().split("T")[0],
  };
}

export async function getAppointments() {
  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        user: { select: { firstName: true, lastName: true, email: true } },
        doctor: { select: { name: true, imageUrl: true } },
      },
      orderBy: { createdAt: "desc" },
    });
    return appointments.map(transformAppointment);
  } catch (error) {
    console.log("Error fetching appointments:", error);
    throw new Error("Failed to fetch appointments");
  }
}

export async function getUserAppointments() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("You must be logged in to view appointments");

    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    if (!user) throw new Error("User not found");

    const appointments = await prisma.appointment.findMany({
      where: { userId: user.id },
      include: {
        user: { select: { firstName: true, lastName: true, email: true } },
        doctor: { select: { name: true, imageUrl: true } },
      },
      orderBy: [{ date: "asc" }, { time: "asc" }],
    });
    return appointments.map(transformAppointment);
  } catch (error) {
    console.error("Error fetching user appointments:", error);
    throw new Error("Failed to fetch user appointments");
  }
}

export async function getUserAppointmentStats() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("You must be authenticated");

    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    if (!user) throw new Error("User not found");

    const [totalCount, completedCount] = await Promise.all([
      prisma.appointment.count({ where: { userId: user.id } }),
      prisma.appointment.count({
        where: { userId: user.id, status: "COMPLETED" },
      }),
    ]);

    return {
      totalAppointments: totalCount,
      completedAppointments: completedCount,
    };
  } catch (error) {
    console.error("Error fetching stats:", error);
    return { totalAppointments: 0, completedAppointments: 0 };
  }
}

export async function getBookedTimeSlots(doctorId: string, date: string) {
  try {
    const appointments = await prisma.appointment.findMany({
      where: {
        doctorId,
        date: new Date(date),
        status: { in: ["CONFIRMED", "COMPLETED"] },
      },
      select: { time: true, reason: true },
    });

    const bookedSlots = new Set<string>();

    appointments.forEach((appt) => {
      const type = APPOINTMENT_TYPES.find((t) => t.name === appt.reason);
      const durationString = type?.duration || "30 min";
      const durationMinutes = parseInt(durationString);

      const startMinutes = timeToMinutes(appt.time);
      const slotsCount = Math.ceil(durationMinutes / 30);

      for (let i = 0; i < slotsCount; i++) {
        const currentSlotTime = minutesToTime(startMinutes + i * 30);
        bookedSlots.add(currentSlotTime);
      }
    });

    return Array.from(bookedSlots);
  } catch (error) {
    console.error("Error fetching booked time slots:", error);
    return [];
  }
}

interface BookAppointmentInput {
  doctorId: string;
  date: string;
  time: string;
  reason?: string;
}

export async function bookAppointment(input: BookAppointmentInput) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    if (!input.doctorId || !input.date || !input.time) {
      throw new Error("Missing fields");
    }

    // 1. Doble check de seguridad (Evita doble reserva)
    const bookedSlots = await getBookedTimeSlots(input.doctorId, input.date);
    if (bookedSlots.includes(input.time)) {
      throw new Error("This time slot was just taken. Please choose another.");
    }

    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    if (!user) throw new Error("User not found");

    // 2. Crear la cita en la Base de Datos
    const appointment = await prisma.appointment.create({
      data: {
        userId: user.id,
        doctorId: input.doctorId,
        date: new Date(input.date),
        time: input.time,
        reason: input.reason || "General consultation",
        status: "CONFIRMED",
      },
      include: {
        user: { select: { firstName: true, lastName: true, email: true } },
        doctor: { select: { name: true, imageUrl: true } },
      },
    });

    // 3. ENVIAR EMAIL AUTOMÁTICAMENTE 📧
    // Esto ocurre en el servidor, así que es seguro.
    try {
      const appointmentType = APPOINTMENT_TYPES.find(
        (t) => t.name === appointment.reason,
      );

      await resend.emails.send({
        from: "DentWise <no-reply@resend.dev>", // Cambia esto si tienes dominio propio
        to: [user.email],
        subject: "Appointment Confirmation - DentWise",
        react: AppointmentConfirmationEmail({
          doctorName: appointment.doctor.name,
          appointmentDate: format(appointment.date, "EEEE, MMMM d, yyyy"),
          appointmentTime: appointment.time,
          appointmentType: appointment.reason || "General Consultation",

          duration: appointmentTypeDetails?.duration || "30 min",
          price: appointmentTypeDetails?.price || "$0",
        }),
      });
      console.log("Confirmation email sent to:", user.email);
    } catch (emailError) {
      // Si el email falla, la cita SÍ se guardó, pero avisamos en consola.
      console.error("Failed to send confirmation email:", emailError);
    }

    return transformAppointment(appointment);
  } catch (error: any) {
    console.error("Error booking appointment:", error);
    throw new Error(error.message || "Failed to book appointment");
  }
}

export async function updateAppointmentStatus(input: {
  id: string;
  status: AppointmentStatus;
}) {
  try {
    const appointment = await prisma.appointment.update({
      where: { id: input.id },
      data: { status: input.status },
    });
    return appointment;
  } catch (error) {
    console.error("Error updating appointment:", error);
    throw new Error("Failed to update appointment");
  }
}
