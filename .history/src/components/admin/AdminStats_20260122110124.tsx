import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, UserCheck, Clock, DollarSign } from "lucide-react"; // <--- Importamos el icono del dólar

interface AdminStatsProps {
  totalDoctors: number;
  activeDoctors: number;
  totalAppointments: number;
  completedAppointments: number;
  totalRevenue: number; // <--- Nuevo dato que recibimos
}

// Helper para que el dinero se vea bonito ($1,200.00)
const formatMoney = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

function AdminStats({
  activeDoctors,
  totalDoctors,
  completedAppointments,
  totalAppointments,
  totalRevenue, // <--- Lo desestructuramos aquí
}: AdminStatsProps) {
  return (
    <div className='grid md:grid-cols-5 gap-4 mb-12'>
      {" "}
      {/* <--- Cambiamos a 5 columnas */}
      {/* --- NUEVA TARJETA DE REVENUE --- */}
      <Card className='border-2 border-green-100 hover:border-green-500/50 transition-all duration-300 shadow-sm'>
        <CardContent className='p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600'>
              <DollarSign className='size-6' />
            </div>
            <div>
              <div className='text-2xl font-bold text-green-700'>
                {formatMoney(totalRevenue)}
              </div>
              <div className='text-sm text-muted-foreground'>Total Revenue</div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* ------------------------------- */}
      <Card className='border-2 hover:border-primary/30 transition-all duration-300'>
        <CardContent className='p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center'>
              <Users className='size-6' />
            </div>
            <div>
              <div className='text-2xl font-bold'>{totalDoctors}</div>
              <div className='text-sm text-muted-foreground'>Total Doctors</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='border-2 hover:border-primary/30 transition-all duration-300'>
        <CardContent className='p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center'>
              <UserCheck className='size-6' />
            </div>
            <div>
              <div className='text-2xl font-bold'>{activeDoctors}</div>
              <div className='text-sm text-muted-foreground'>
                Active Doctors
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='border-2 hover:border-primary/30 transition-all duration-300'>
        <CardContent className='p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center'>
              <Calendar className='size-6' />
            </div>
            <div>
              <div className='text-2xl font-bold'>{totalAppointments}</div>
              <div className='text-sm text-muted-foreground'>
                Total Appointments
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='border-2 hover:border-primary/30 transition-all duration-300'>
        <CardContent className='p-6'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center'>
              <Clock className='size-6' />
            </div>
            <div>
              <div className='text-2xl font-bold'>{completedAppointments}</div>
              <div className='text-sm text-muted-foreground'>Completed</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default AdminStats;
