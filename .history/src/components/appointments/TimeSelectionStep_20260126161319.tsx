import { useBookedTimeSlots } from "@/hooks/use-appointment";
import {
  APPOINTMENT_TYPES,
  getAvailableTimeSlots,
  getNext5Days,
} from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ClockIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface TimeSelectionStepProps {
  selectedDentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onTypeChange: (type: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

function TimeSelectionStep({
  onBack,
  onContinue,
  onDateChange,
  onTimeChange,
  onTypeChange,
  selectedDate,
  selectedDentistId,
  selectedTime,
  selectedType,
}: TimeSelectionStepProps) {
  const { data: bookedTimeSlots = [] } = useBookedTimeSlots(
    selectedDentistId,
    selectedDate,
  );

  const availableDates = getNext5Days();
  const availableTimeSlots = getAvailableTimeSlots();

  const handleDateSelect = (date: string) => {
    onDateChange(date);
    // reseteamos la hora cuando cambia la fecha
    onTimeChange("");
  };

  return (
    <div className='space-y-6'>
      {/* Header con botón Volver */}
      <div className='flex items-center gap-4 mb-6'>
        <Button variant='ghost' onClick={onBack}>
          <ChevronLeftIcon className='w-4 h-4 mr-2' />
          Volver
        </Button>

        <h2 className='text-2xl font-semibold'>Elegí Fecha y Hora</h2>
      </div>

      <div className='grid lg:grid-cols-2 gap-8'>
        {/* Selección de Tipo de Turno */}
        <div className='space-y-4'>
          <h3 className='text-lg font-medium'>Tipo de Turno</h3>
          <div className='space-y-3'>
            {APPOINTMENT_TYPES.map((type) => (
              <Card
                key={type.id}
                className={`cursor-pointer transition-all hover:shadow-sm ${
                  selectedType === type.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => onTypeChange(type.id)}
              >
                <CardContent className='p-4'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <h4 className='font-medium'>{type.name}</h4>
                      <p className='text-sm text-muted-foreground'>
                        {type.duration}
                      </p>
                    </div>
                    <span className='font-semibold text-primary'>
                      {type.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Selección de Fecha y Hora */}
        <div className='space-y-4'>
          <h3 className='text-lg font-medium'>Fechas Disponibles</h3>

          {/* Grid de Fechas */}
          <div className='grid grid-cols-2 gap-3'>
            {availableDates.map((date) => (
              <Button
                key={date}
                variant={selectedDate === date ? "default" : "outline"}
                onClick={() => handleDateSelect(date)}
                className='h-auto p-3'
              >
                <div className='text-center'>
                  <div className='font-medium capitalize'>
                    {/* 🔥 Formato de fecha en Español */}
                    {new Date(date).toLocaleDateString("es-AR", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </Button>
            ))}
          </div>

          {/* Selección de Hora (solo si hay fecha elegida) */}
          {selectedDate && (
            <div className='space-y-3'>
              <h4 className='font-medium'>Horarios Disponibles</h4>
              <div className='grid grid-cols-3 gap-2'>
                {availableTimeSlots.map((time) => {
                  const isBooked = bookedTimeSlots.includes(time);
                  return (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => !isBooked && onTimeChange(time)}
                      size='sm'
                      disabled={isBooked}
                      className={
                        isBooked ? "opacity-50 cursor-not-allowed" : ""
                      }
                    >
                      <ClockIcon className='w-3 h-3 mr-1' />
                      {time}
                      {isBooked && " (Ocupado)"}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Botón Continuar */}
      {selectedType && selectedDate && selectedTime && (
        <div className='flex justify-end'>
          <Button onClick={onContinue}>Revisar Reserva</Button>
        </div>
      )}
    </div>
  );
}

export default TimeSelectionStep;
