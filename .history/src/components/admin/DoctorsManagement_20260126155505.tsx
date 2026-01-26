import { useGetDoctors } from "@/hooks/use-doctors";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  EditIcon,
  MailIcon,
  PhoneIcon,
  PlusIcon,
  StethoscopeIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import AddDoctorDialog from "./AddDoctorDialog";
import EditDoctorDialog from "./EditDoctorDialog";
import { Doctor } from "@prisma/client";

function DoctorsManagement() {
  const { data: doctors = [] } = useGetDoctors();

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleEditDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <>
      <Card className='mb-12'>
        <CardHeader className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
          <div>
            <CardTitle className='flex items-center gap-2'>
              <StethoscopeIcon className='size-5 text-primary' />
              Gestión de Doctores
            </CardTitle>
            <CardDescription>
              Administrá y supervisá todos los doctores de tu consultorio
            </CardDescription>
          </div>

          <Button
            onClick={() => setIsAddDialogOpen(true)}
            className='w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90'
          >
            <PlusIcon className='mr-2 size-4' />
            Agregar Doctor
          </Button>
        </CardHeader>

        <CardContent>
          <div className='space-y-4'>
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className='flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-muted/30 rounded-xl border border-border/50 gap-4'
              >
                <div className='flex items-center gap-4 w-full sm:w-auto'>
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    width={48}
                    height={48}
                    className='size-12 rounded-full object-cover ring-2 ring-background shrink-0'
                  />

                  <div className='flex-1 min-w-0'>
                    <div className='font-semibold truncate'>{doctor.name}</div>
                    <div className='text-sm text-muted-foreground flex flex-wrap gap-2 items-center'>
                      {doctor.speciality}
                      <span className='px-2 py-0.5 bg-muted rounded text-xs hidden sm:inline-block'>
                        {doctor.gender === "MALE" ? "Masculino" : "Femenino"}
                      </span>
                    </div>

                    <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1'>
                      <div className='flex items-center gap-1 text-xs text-muted-foreground truncate'>
                        <MailIcon className='h-3 w-3 shrink-0' />
                        {doctor.email}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-0 pt-3 sm:pt-0 mt-2 sm:mt-0'>
                  <div className='text-center sm:text-right mr-2'>
                    <div className='font-semibold text-primary'>
                      {doctor.appointmentCount}
                    </div>
                    <div className='text-[10px] text-muted-foreground uppercase'>
                      Turnos
                    </div>
                  </div>

                  <div className='flex items-center gap-2'>
                    {doctor.isActive ? (
                      <Badge className='bg-green-100 text-green-800 hover:bg-green-100'>
                        Activo
                      </Badge>
                    ) : (
                      <Badge variant='secondary'>Inactivo</Badge>
                    )}
                    <Button
                      size='sm'
                      variant='outline'
                      className='h-8 px-3'
                      onClick={() => handleEditDoctor(doctor)}
                    >
                      <EditIcon className='size-4 mr-1' />
                      Editar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AddDoctorDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
      />

      <EditDoctorDialog
        key={selectedDoctor?.id}
        isOpen={isEditDialogOpen}
        onClose={handleCloseEditDialog}
        doctor={selectedDoctor}
      />
    </>
  );
}
export default DoctorsManagement;
