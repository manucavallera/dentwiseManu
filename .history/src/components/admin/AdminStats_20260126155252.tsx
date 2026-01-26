import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, UserCheck, Clock, DollarSign } from "lucide-react";

interface AdminStatsProps {
  totalDoctors: number;
  activeDoctors: number;
  totalAppointments: number;
  completedAppointments: number;
  totalRevenue: number;
}

const formatMoney = (amount: number) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

function AdminStats({
  activeDoctors,
  totalDoctors,
  completedAppointments,
  totalAppointments,
  totalRevenue,
}: AdminStatsProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8'>
      {/* 1. REVENUE */}
      <Card className='border-2 border-green-100 hover:border-green-500/50 transition-all duration-300 shadow-sm'>
        <CardContent className='p-6 flex items-center gap-4'>
          <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0'>
            <DollarSign className='size-6' />
          </div>
          <div>
            <div className='text-2xl font-bold text-green-700'>
              {formatMoney(totalRevenue)}
            </div>
            <div className='text-sm text-muted-foreground'>
              Ingresos Totales
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. TOTAL DOCTORS */}
      <Card className='border-2 hover:border-primary/30 transition-all duration-300'>
        <CardContent className='p-6 flex items-center gap-4'>
          <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center shrink-0'>
            <Users className='size-6' />
          </div>
          <div>
            <div className='text-2xl font-bold'>{totalDoctors}</div>
            <div className='text-sm text-muted-foreground'>Total Doctores</div>
          </div>
        </CardContent>
      </Card>

      {/* 3. ACTIVE DOCTORS */}
      <Card className='border-2 hover:border-primary/30 transition-all duration-300'>
        <CardContent className='p-6 flex items-center gap-4'>
          <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center shrink-0'>
            <UserCheck className='size-6' />
          </div>
          <div>
            <div className='text-2xl font-bold'>{activeDoctors}</div>
            <div className='text-sm text-muted-foreground'>
              Doctores Activos
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 4. TOTAL APPOINTMENTS */}
      <Card className='border-2 hover:border-primary/30 transition-all duration-300'>
        <CardContent className='p-6 flex items-center gap-4'>
          <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center shrink-0'>
            <Calendar className='size-6' />
          </div>
          <div>
            <div className='text-2xl font-bold'>{totalAppointments}</div>
            <div className='text-sm text-muted-foreground'>Total Turnos</div>
          </div>
        </CardContent>
      </Card>

      {/* 5. COMPLETED */}
      <Card className='border-2 hover:border-primary/30 transition-all duration-300'>
        <CardContent className='p-6 flex items-center gap-4'>
          <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center shrink-0'>
            <Clock className='size-6' />
          </div>
          <div>
            <div className='text-2xl font-bold'>{completedAppointments}</div>
            <div className='text-sm text-muted-foreground'>Completados</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default AdminStats;
