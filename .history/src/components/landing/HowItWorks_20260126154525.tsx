import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

function HowItWorks() {
  return (
    <section id='how-it-works' className='relative py-32 px-6 outline-hidden z-10 max-w-7xl mx-auto'></section>
    <section className='relative py-32 px-6 outline-hidden z-10 max-w-7xl mx-auto'>
      {/* HEADER */}
      <div className='text-center mb-20'>
        <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6'>
          <ZapIcon className='size-4 text-primary' />
          <span className='text-sm font-medium text-primary'>
            Proceso Simple
          </span>
        </div>

        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight'>
          <span className='bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent'>
            Tres pasos para
          </span>
          <br />
          <span className='bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
            una mejor salud dental
          </span>
        </h2>

        <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
          Nuestro proceso simplificado hace que el cuidado dental sea accesible,
          conveniente y libre de estrés para todos.
        </p>
      </div>

      {/* STEPS */}
      <div className='relative'>
        {/* CONNECTION LINE */}
        <div className='absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block'></div>

        <div className='grid lg:grid-cols-3 gap-12 lg:gap-8'>
          {/* STEP 1 */}
          <div className='relative group'>
            <div className='relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10'>
              {/* Step Number */}
              <div className='absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg'>
                1
              </div>

              {/* Icon */}
              <div className='w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6'>
                <Image
                  src='/audio.png'
                  alt='Chat por voz'
                  width={40}
                  height={40}
                  className='w-14'
                />
              </div>

              <h3 className='text-2xl font-bold mb-4 text-center'>
                Hacé tus preguntas
              </h3>
              <p className='text-muted-foreground text-center leading-relaxed mb-6'>
                Conversá con nuestro asistente de IA sobre cualquier inquietud
                dental. Recibí respuestas inmediatas sobre síntomas,
                tratamientos y consejos de salud oral.
              </p>

              {/* Feature Pills */}
              <div className='flex flex-wrap gap-2 justify-center'>
                <span className='px-3 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                  Disponible 24/7
                </span>
                <span className='px-3 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                  Respuesta Instantánea
                </span>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className='relative group'>
            <div className='relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10'>
              {/* Step Number */}
              <div className='absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg'>
                2
              </div>

              {/* Icon */}
              <div className='w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6'>
                <Image
                  src='/brain.png'
                  alt='IA Dental'
                  width={40}
                  height={40}
                  className='w-14'
                />
              </div>

              <h3 className='text-2xl font-bold mb-4 text-center'>
                Recibí asesoramiento experto
              </h3>
              <p className='text-muted-foreground text-center leading-relaxed mb-6'>
                Obtené recomendaciones personalizadas basadas en miles de casos
                dentales. Nuestra IA brinda información precisa de nivel
                profesional.
              </p>

              {/* Feature Pills */}
              <div className='flex flex-wrap gap-2 justify-center'>
                <span className='px-3 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                  Impulsado por IA
                </span>
                <span className='px-3 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                  Personalizado
                </span>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className='relative group'>
            <div className='relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10'>
              {/* Step Number */}
              <div className='absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg'>
                3
              </div>

              {/* Icon */}
              <div className='w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6'>
                <Image
                  src='/calendar.png'
                  alt='Calendario'
                  width={40}
                  height={40}
                  className='w-14'
                />
              </div>

              <h3 className='text-2xl font-bold mb-4 text-center'>
                Reservá y recibí atención
              </h3>
              <p className='text-muted-foreground text-center leading-relaxed mb-6'>
                Agendá con odontólogos verificados y recibí un seguimiento
                completo. Controlá tu progreso fácilmente desde la plataforma.
              </p>

              {/* Feature Pills */}
              <div className='flex flex-wrap gap-2 justify-center'>
                <span className='px-3 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                  Odontólogos Verificados
                </span>
                <span className='px-3 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                  Seguimiento Completo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className='text-center mt-16'>
        <SignUpButton mode='modal'>
          <Button size='lg'>
            <ArrowRightIcon className='mr-2 size-5' />
            Comenzá ahora
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
}

export default HowItWorks;
