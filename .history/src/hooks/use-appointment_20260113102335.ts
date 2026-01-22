"use client";

import {
  bookAppointment,
  getAppointments,
  getBookedTimeSlots,
  getUserAppointments,
  updateAppointmentStatus,
} from "@/lib/actions/appointments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetAppointments() {
  const result = useQuery({
    queryKey: ["getAppointments"],
    queryFn: getAppointments,
  });

  return result;
}

// 🔥 ESTA ES LA FUNCIÓN MODIFICADA
export function useBookedTimeSlots(doctorId: string, date: string) {
  return useQuery({
    // 1. CLAVE ÚNICA: Agregamos doctorId y date para que al cambiar de día refresque sí o sí
    queryKey: ["getBookedTimeSlots", doctorId, date],

    queryFn: () => getBookedTimeSlots(doctorId!, date),

    enabled: !!doctorId && !!date, // solo corre si hay doctor y fecha

    // 2. POLLING (AUTO-REFRESCO):
    // Pregunta cada 2000ms (2 segundos) si hay nuevos horarios ocupados.
    // Esto hace que si alguien reserva, se bloquee en tu pantalla casi al instante.
    refetchInterval: 2000,
  });
}

export function useBookAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: bookAppointment,
    onSuccess: () => {
      // Al reservar, invalidamos la caché para forzar una recarga inmediata
      queryClient.invalidateQueries({ queryKey: ["getUserAppointments"] });
      // También invalidamos los slots para que se actualice la vista de calendario
      queryClient.invalidateQueries({ queryKey: ["getBookedTimeSlots"] });
    },
    onError: (error) => console.error("Failed to book appointment:", error),
  });
}

// Get user-specific appointments
export function useUserAppointments() {
  const result = useQuery({
    queryKey: ["getUserAppointments"],
    queryFn: getUserAppointments,
  });

  return result;
}

export function useUpdateAppointmentStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAppointmentStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAppointments"] });
      queryClient.invalidateQueries({ queryKey: ["getBookedTimeSlots"] });
    },
    onError: (error) => console.error("Failed to update appointment:", error),
  });
}
