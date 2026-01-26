"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      {/* 🔥 ENLACES CORREGIDOS AQUÍ */}
      <Link
        href='#how-it-works'
        className='text-muted-foreground hover:text-foreground transition-colors'
        onClick={() => setIsOpen(false)} // Cierra el menú en móvil al hacer clic
      >
        Cómo Funciona
      </Link>
      <Link
        href='#pricing'
        className='text-muted-foreground hover:text-foreground transition-colors'
        onClick={() => setIsOpen(false)}
      >
        Precios
      </Link>
      <Link
        href='#about'
        className='text-muted-foreground hover:text-foreground transition-colors'
        onClick={() => setIsOpen(false)}
      >
        Sobre Nosotros
      </Link>
    </>
  );

  return (
    <nav className='fixed top-0 right-0 left-0 z-50 px-4 md:px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16'>
      <div className='max-w-6xl mx-auto flex justify-between items-center h-full'>
        {/* LOGO */}
        <Link href='/' className='flex items-center gap-2 z-50'>
          <Image
            src={"/logo.png"}
            alt='Logo de DentWise'
            width={32}
            height={32}
            className='w-8 md:w-11'
          />
          <span className='font-semibold text-lg md:text-xl'>DentWise</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className='hidden md:flex items-center gap-8'>
          <NavItems />
        </div>

        {/* DESKTOP AUTH & MOBILE MENU */}
        <div className='flex items-center gap-3'>
          <div className='hidden md:flex gap-3'>
            <SignInButton mode='modal'>
              <Button variant={"ghost"} size={"sm"}>
                Iniciar Sesión
              </Button>
            </SignInButton>
            <SignUpButton mode='modal'>
              <Button size={"sm"}>Crear Cuenta</Button>
            </SignUpButton>
          </div>

          {/* MOBILE MENU */}
          <div className='md:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <Menu className='h-6 w-6' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
                <div className='flex flex-col gap-8 mt-10'>
                  <div className='flex flex-col gap-6 text-lg'>
                    <NavItems />
                  </div>
                  <div className='flex flex-col gap-4 mt-4'>
                    <SignInButton mode='modal'>
                      <Button variant='outline' className='w-full'>
                        Iniciar Sesión
                      </Button>
                    </SignInButton>
                    <SignUpButton mode='modal'>
                      <Button className='w-full'>Crear Cuenta</Button>
                    </SignUpButton>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
