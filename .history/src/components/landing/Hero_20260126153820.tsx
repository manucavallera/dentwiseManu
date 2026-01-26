import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 lg:pt-20 lg:pb-0'>
      {/* GRID BG  */}
      <div className='absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20'></div>
      </div>

      {/* GRADIENT ORBS */}
      <div className='absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl' />
      <div className='absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl' />

      <div className='relative z-10 w-full px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* LEFT CONTENT */}
            <div className='space-y-8 lg:space-y-10 text-center lg:text-left'>
              <div className='space-y-6'>
                {/* BADGE */}
                <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm'>
                  <div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
                  <span className='text-xs md:text-sm font-medium text-primary'>
                    Asistencia Dental + IA
                  </span>
                </div>

                {/* MAIN HEADING */}
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight'>
                  <span className='bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent'>
                    Tus preguntas
                  </span>
                  <br />
                  <span className='bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
                    sobre salud dental
                  </span>
                  <br />
                  <span className='bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent'>
                    al instante
                  </span>
                </h1>

                {/* SUBTITLE */}
                <p className='text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium'>
                  Chatea con nuestro asistente dental con IA para obtener
                  consejos instantáneos, agendar citas inteligentes y obtener
                  recomendaciones. Disponible 24/7.
                </p>
              </div>

              {/* CTA BUTTONS */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <SignUpButton mode='modal'>
                  <Button
                    size={"lg"}
                    className='w-full sm:w-auto h-12 text-base'
                  >
                    <MicIcon className='mr-2 size-5' />
                    Prueba el agente de voz
                  </Button>
                </SignUpButton>

                <SignUpButton mode='modal'>
                  <Button
                    size={"lg"}
                    variant={"outline"}
                    className='w-full sm:w-auto h-12 text-base'
                  >
                    <CalendarIcon className='mr-2 size-5' />
                    Reservar cita
                  </Button>
                </SignUpButton>
              </div>

              {/* USER TESTIMONIALS */}
              <div className='pt-4 lg:pt-8 flex justify-center lg:justify-start'>
                <div className='flex items-center gap-4 sm:gap-6'>
                  {/* USER AVATARS */}
                  <div className='flex -space-x-3'>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-background bg-muted overflow-hidden relative'
                      >
                        <Image
                          src={`https://avatar.iran.liara.run/public/${i + 10}`}
                          alt={`User ${i}`}
                          fill
                          className='object-cover'
                        />
                      </div>
                    ))}
                  </div>

                  <div className='space-y-1 text-left'>
                    <div className='flex items-center gap-2'>
                      <div className='flex items-center gap-1'>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className='h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400'
                          />
                        ))}
                      </div>
                      <span className='text-sm font-bold text-foreground'>
                        4.9/5
                      </span>
                    </div>
                    {/* 🔥 TRADUCIDO AQUÍ */}
                    <p className='text-xs sm:text-sm text-muted-foreground'>
                      Confían en nosotros{" "}
                      <span className='font-semibold text-foreground'>
                        +1,200 pacientes
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT - HERO IMAGE */}
            <div className='relative lg:pl-8 mt-10 lg:mt-0'>
              <Image
                src={"/hero.png"}
                alt='DentWise AI'
                width={600}
                height={600}
                className='w-full h-auto drop-shadow-2xl'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
