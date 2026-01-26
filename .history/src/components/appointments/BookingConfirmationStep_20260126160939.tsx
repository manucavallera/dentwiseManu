import { APPOINTMENT_TYPES } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import DoctorInfo from "./DoctorInfo";

interface BookingConfirmationStepProps {
  selectedDentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  isBooking: boolean;
  onBack: () => void;
  onConfirm: () => void;
  onModify: () => void;
}

function BookingConfirmationStep({
  selectedDentistId,
  selectedDate,
  selectedTime,
  selectedType,
  isBooking,
  onBack,
  onConfirm,
  onModify,
}: BookingConfirmationStepProps) {
  const appointmentType = APPOINTMENT_TYPES.find((t) => t.id === selectedType);

  return (
    <div className='space-y-6'>
      {/* Header con botón Volver */}
      <div className='flex items-center gap-4 mb-6'>
        <Button variant='ghost' onClick={onBack} className='pl-0 sm:pl-4'>
          <ChevronLeftIcon className='w-4 h-4 mr-2' />
          Volver
        </Button>
        <h2 className='text-xl sm:text-2xl font-semibold'>Confirmá tu Turno</h2>
      </div>

      <Card className='max-w-2xl'>
        <CardHeader>
          <CardTitle>Resumen del Turno</CardTitle>
        </CardHeader>

        <CardContent className='space-y-4'>
          {/* Información del Doctor */}
          <DoctorInfo doctorId={selectedDentistId} />

          {/* Detalles del Turno */}
          {/* Mantenemos el grid responsive: 1 columna en móvil, 2 en PC */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t'>
            <div>
              <p className='text-sm text-muted-foreground'>Tipo de Turno</p>
              <p className='font-medium'>{appointmentType?.name}</p>
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>Duración</p>
              <p className='font-medium'>{appointmentType?.duration}</p>
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>Fecha</p>
              <p className='font-medium capitalize'>
                {/* 🔥 Formato de fecha en Español */}
                {new Date(selectedDate).toLocaleDateString("es-AR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>Hora</p>
              <p className='font-medium'>{selectedTime}</p>
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>Ubicación</p>
              <p className='font-medium'>Consultorio DentWise</p>
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>Costo</p>
              <p className='font-medium text-primary'>
                {appointmentType?.price}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Botones de Acción - Apilados en móvil */}
      <div className='flex flex-col-reverse sm:flex-row gap-4'>
        <Button
          variant='outline'
          onClick={onModify}
          className='w-full sm:w-auto'
        >
          Modificar Turno
        </Button>
        <Button
          onClick={onConfirm}
          className='bg-primary w-full sm:w-auto'
          disabled={isBooking}
        >
          {isBooking ? "Reservando..." : "Confirmar Reserva"}
        </Button>
      </div>
    </div>
  );
}

export default BookingConfirmationStep;
