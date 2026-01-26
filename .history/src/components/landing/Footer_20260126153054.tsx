import Image from "next/image";

function Footer() {
  return (
    <footer className='px-6 py-12 border-t bg-muted/30'>
      <div className='max-w-6xl mx-auto'>
        {/* 🔥 CAMBIO: grid-cols-2 en móvil, md:grid-cols-4 en PC */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {/* Logo Section - Ocupa 2 columnas en móvil para destacar */}
          <div className='col-span-2 md:col-span-1 space-y-4'>
            <div className='flex items-center gap-2'>
              <Image
                src='/logo.png'
                alt='DentWise Logo'
                width={32}
                height={32}
                className='w-8 h-8'
              />
              <span className='font-semibold text-lg'>DentWise</span>
            </div>
            <p className='text-sm text-muted-foreground'>
              Asistencia dental con IA que realmente te ayuda.
            </p>
          </div>

          <div>
            <h4 className='font-medium mb-3'>Producto</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Precios
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-medium mb-3'>Soporte</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Contáctanos
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Estado del servicio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-medium mb-3'>Legal</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Privacidad
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Términos
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-foreground'>
                  Seguridad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t mt-8 pt-8 text-center text-sm text-muted-foreground'>
          <p>
            &copy; {new Date().getFullYear()} DentWise. Construido para personas
            reales con preguntas reales.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
