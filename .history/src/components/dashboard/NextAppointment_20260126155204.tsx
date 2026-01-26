import { getUserAppointments } from "@/lib/actions/appointments";
import { format, isAfter, isSameDay, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import NoNextAppointments from "./NoNextAppointments";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";

async function NextAppointment() {
  const appointments = await getUserAppointments();

  const upcomingAppointments =
    appointments?.filter((appointment) => {
      const appointmentDate = parseISO(appointment.date);
      const today = new Date();
      const isUpcoming =
        isSameDay(appointmentDate, today) || isAfter(appointmentDate, today);
      return isUpcoming && appointment.status === "CONFIRMED";
    }) || [];

  const nextAppointment = upcomingAppointments[0];

  if (!nextAppointment) return <NoNextAppointments />;

  const appointmentDate = parseISO(nextAppointment.date);
  // Formato español: "lunes, 25 de enero de 2026"
  const formattedDate = format(appointmentDate, "EEEE, d 'de' MMMM, yyyy", {
    locale: es,
  });
  const isToday = isSameDay(appointmentDate, new Date());

  return (
    <Card className='border-primary/20 bg-gradient-to-br from-primary/5 to-background'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <CalendarIcon className='size-5 text-primary' />
          Próximo Turno
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {/* Status Badge */}
        <div className='flex items-center justify-between'>
          <div className='inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20'>
            <div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
            <span className='text-sm font-medium text-primary'>
              {isToday ? "Hoy" : "Próximo"}
            </span>
          </div>
          <span className='text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded capitalize'>
            {nextAppointment.status === "CONFIRMED"
              ? "Confirmado"
              : nextAppointment.status}
          </span>
        </div>

        {/* Appointment Details */}
        <div className='space-y-3'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center'>
              <UserIcon className='size-4 text-primary' />
            </div>
            <div>
              <p className='font-medium text-sm'>
                {nextAppointment.doctorName}
              </p>
              <p className='text-xs text-muted-foreground'>
                {nextAppointment.reason}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center'>
              <CalendarIcon className='size-4 text-primary' />
            </div>
            <div>
              <p className='font-medium text-sm capitalize'>{formattedDate}</p>
              <p className='text-xs text-muted-foreground'>
                {isToday
                  ? "Hoy"
                  : format(appointmentDate, "EEEE", { locale: es })}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center'>
              <ClockIcon className='size-4 text-primary' />
            </div>
            <div>
              <p className='font-medium text-sm'>{nextAppointment.time}</p>
              <p className='text-xs text-muted-foreground'>Hora local</p>
            </div>
          </div>
        </div>

        {upcomingAppointments.length > 1 && (
          <p className='text-xs text-center text-muted-foreground'>
            +{upcomingAppointments.length - 1} turno(s) más próximamente
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default NextAppointment;
