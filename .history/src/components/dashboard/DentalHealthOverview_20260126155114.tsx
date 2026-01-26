import { getUserAppointmentStats } from "@/lib/actions/appointments";
import { currentUser } from "@clerk/nextjs/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BrainIcon, MessageSquareIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale"; // Importamos locale español
import Link from "next/link";
import { Button } from "../ui/button";

async function DentalHealthOverview() {
  const appointmentStats = await getUserAppointmentStats();
  const user = await currentUser();

  return (
    <Card className='lg:col-span-2'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <BrainIcon className='size-5 text-primary' />
          Tu Salud Dental
        </CardTitle>
        <CardDescription>
          Seguí el progreso de tu cuidado dental
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='text-center p-4 bg-muted/30 rounded-xl'>
            <div className='text-2xl font-bold text-primary mb-1'>
              {appointmentStats.completedAppointments}
            </div>
            <div className='text-sm text-muted-foreground'>
              Visitas Completadas
            </div>
          </div>
          <div className='text-center p-4 bg-muted/30 rounded-xl'>
            <div className='text-2xl font-bold text-primary mb-1'>
              {appointmentStats.totalAppointments}
            </div>
            <div className='text-sm text-muted-foreground'>Total de Turnos</div>
          </div>
          <div className='text-center p-4 bg-muted/30 rounded-xl'>
            <div className='text-2xl font-bold text-primary mb-1 capitalize'>
              {user?.createdAt
                ? format(new Date(user.createdAt), "MMM yyyy", { locale: es })
                : "-"}
            </div>
            <div className='text-sm text-muted-foreground'>Miembro Desde</div>
          </div>
        </div>

        <div className='mt-6 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20'>
          <div className='flex items-start gap-3'>
            <div className='size-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0'>
              <MessageSquareIcon className='size-5 text-primary' />
            </div>
            <div>
              <h4 className='font-semibold text-primary mb-1'>
                ¿Listo para empezar?
              </h4>
              <p className='text-sm text-muted-foreground mb-3'>
                Reservá tu primer turno o probá nuestro asistente de voz con IA
                para consejos al instante.
              </p>
              <div className='flex gap-2'>
                <Link href='/voice'>
                  <Button size='sm' className='bg-primary hover:bg-primary/90'>
                    Probar Asistente IA
                  </Button>
                </Link>
                <Link href='/appointments'>
                  <Button size='sm' variant='outline'>
                    Reservar Turno
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DentalHealthOverview;
