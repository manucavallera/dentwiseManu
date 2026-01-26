import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";

function WhatToAsk() {
  return (
    <section className='relative py-32 px-6 overflow-hidden bg-gradient-to-b from-background to-muted/20'>
      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6'>
            <MessageCircleIcon className='w-4 h-4 text-primary' />
            <span className='text-sm font-medium text-primary'>
              Conversaciones con IA
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight'>
            <span className='bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent'>
              Preguntá sobre
            </span>
            <br />
            <span className='bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
              cualquier tema dental
            </span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Desde dudas simples hasta inquietudes complejas, nuestra IA te
            brinda orientación experta basada en miles de casos reales.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          {/* Left Side - Interactive Chat Examples */}
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h3 className='text-2xl font-bold mb-8'>
                Preguntas frecuentes que responde nuestra IA:
              </h3>

              {/* Chat Bubble 1 */}
              <div className='group relative'>
                <div className='bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0'>
                      <MessageSquareIcon className='h-6 w-6 text-primary' />
                    </div>
                    <div className='space-y-3 flex-1'>
                      <div className='bg-primary/5 rounded-2xl p-4 border border-primary/10'>
                        <p className='font-semibold text-primary'>
                          "Me duele la muela cuando muerdo"
                        </p>
                      </div>
                      <div className='bg-muted/30 rounded-2xl p-4'>
                        <p className='text-sm text-muted-foreground leading-relaxed'>
                          Recibí consejos inmediatos sobre manejo del dolor,
                          posibles causas y cuándo ver a un dentista
                          urgentemente.
                        </p>
                        <div className='flex gap-2 mt-3'>
                          <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                            Respuesta Instantánea
                          </span>
                          <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                            Alivio del Dolor
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Bubble 2 */}
              <div className='group relative'>
                <div className='bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0'>
                      <MessageSquareIcon className='h-6 w-6 text-primary' />
                    </div>
                    <div className='space-y-3 flex-1'>
                      <div className='bg-primary/5 rounded-2xl p-4 border border-primary/10'>
                        <p className='font-semibold text-primary'>
                          "¿Cuánto cuesta un blanqueamiento?"
                        </p>
                      </div>
                      <div className='bg-muted/30 rounded-2xl p-4'>
                        <p className='text-sm text-muted-foreground leading-relaxed'>
                          Compará opciones de tratamiento, rangos de precios y
                          encontrá la mejor solución para tu presupuesto.
                        </p>
                        <div className='flex gap-2 mt-3'>
                          <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                            Análisis de Costos
                          </span>
                          <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                            Tratamientos
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Bubble 3 */}
              <div className='group relative'>
                <div className='bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0'>
                      <MessageSquareIcon className='h-6 w-6 text-primary' />
                    </div>
                    <div className='space-y-3 flex-1'>
                      <div className='bg-primary/5 rounded-2xl p-4 border border-primary/10'>
                        <p className='font-semibold text-primary'>
                          "¿Cuándo debería cambiar mi empaste?"
                        </p>
                      </div>
                      <div className='bg-muted/30 rounded-2xl p-4'>
                        <p className='text-sm text-muted-foreground leading-relaxed'>
                          Aprendé sobre la vida útil de los arreglos, señales de
                          desgaste y cuándo es momento de reemplazarlos.
                        </p>
                        <div className='flex gap-2 mt-3'>
                          <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                            Cuidado Preventivo
                          </span>
                          <span className='px-2 py-1 bg-primary/10 text-primary text-xs rounded-full'>
                            Mantenimiento
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - AI Illustration */}
          <div className='bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500'>
            <div className='flex items-center justify-center h-full'>
              <Image
                src='/confused.png'
                alt='AI Assistant'
                width={500}
                height={500}
                className='w-full h-auto max-w-lg object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhatToAsk;
