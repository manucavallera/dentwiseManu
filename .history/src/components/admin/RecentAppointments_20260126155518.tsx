import {
  useGetAppointments,
  useUpdateAppointmentStatus,
} from "@/hooks/use-appointment";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";

function RecentAppointments() {
  const { data: appointments = [] } = useGetAppointments();
  const updateAppointmentMutation = useUpdateAppointmentStatus();

  const handleToggleAppointmentStatus = (appointmentId: string) => {
    const appointment = appointments.find((apt) => apt.id === appointmentId);
    const newStatus =
      appointment?.status === "CONFIRMED" ? "COMPLETED" : "CONFIRMED";
    updateAppointmentMutation.mutate({ id: appointmentId, status: newStatus });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return (
          <Badge className='bg-blue-100 text-blue-800 hover:bg-blue-100'>
            Confirmado
          </Badge>
        );
      case "COMPLETED":
        return (
          <Badge className='bg-green-100 text-green-800 hover:bg-green-100'>
            Completado
          </Badge>
        );
      default:
        return <Badge variant='secondary'>{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Calendar className='h-5 w-5 text-primary' />
          Turnos Recientes
        </CardTitle>
        <CardDescription>
          Monitoreá y gestioná todos los turnos de pacientes
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className='rounded-lg border overflow-x-auto'>
          <Table>
            <TableHeader className='min-w-[600px]'>
              <TableRow>
                <TableHead>Paciente</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Fecha y Hora</TableHead>
                <TableHead>Motivo</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className='text-right'>Acciones</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell className='font-medium'>
                    <div>
                      <div>{appointment.patientName}</div>
                      <div className='text-xs text-muted-foreground'>
                        {appointment.patientEmail}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{appointment.doctorName}</TableCell>
                  <TableCell>
                    <div>
                      <div>
                        {new Date(appointment.date).toLocaleDateString()}
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        {appointment.time}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{appointment.reason}</TableCell>
                  <TableCell>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() =>
                        handleToggleAppointmentStatus(appointment.id)
                      }
                      className='h-6 px-2'
                    >
                      {getStatusBadge(appointment.status)}
                    </Button>
                  </TableCell>
                  <TableCell className='text-right'>
                    <span className='text-xs text-muted-foreground'>
                      Clic para cambiar
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentAppointments;
