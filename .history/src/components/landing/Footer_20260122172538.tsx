import Image from "next/image";

function Footer() {
  return (
    <footer className='px-6 py-12 border-t bg-muted/30'>
      <div className='max-w-6xl mx-auto'>
        {/* Cambiado a grid-cols-2 para móvil, y grid-cols-4 para desktop */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12'>
          {/* Logo Section - Ocupa 2 columnas en móvil para que se vea bien */}
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
            <p className='text-sm text-muted-foreground max-w-xs'>
              Asistencia dental con IA que realmente te ayuda. Disponible 24/7.
            </p>
          </div>

          <div>
            <h4 className='font-bold mb-4 text-foreground'>Producto</h4>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Precios
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Preguntas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold mb-4 text-foreground'>Soporte</h4>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Ayuda
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Contacto
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Estado
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-bold mb-4 text-foreground'>Legal</h4>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Privacidad
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Términos
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  Seguridad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t mt-12 pt-8 text-center text-sm text-muted-foreground'>
          <p>
            &copy; {new Date().getFullYear()} DentWise. Hecho con ❤️ para tu
            sonrisa.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
