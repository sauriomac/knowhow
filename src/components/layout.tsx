
import Link from 'next/link'

import React, { ReactNode } from 'react';


type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
  <main className="flex min-h-screen flex-col items-center justify-between w-full bg-custom-linear">
  <div className="w-full text-center pt-12">
  <nav className="bg-gray-800 p-4 flex justify-between rt-nav flex-col md:flex-row">
    <div className="flex w-full md:w-2/12">
    </div>
    <div className="flex w-full md:w-8/12 justify-center flex-wrap">
      <Link href="/" className="text-white px-3 text-xs md:text-[26px] font-medium border-r-2">Inicio</Link>
      <Link href="/quienes-somos" className="text-white px-3 text-xs md:text-[26px] font-medium border-r-2"> Quiénes Somos</Link>
      <Link href="/soluciones" className="text-white px-3 text-xs md:text-[26px] font-medium border-r-2">Soluciones</Link>
      <Link href="/contacto" className="text-white px-3 text-xs md:text-[26px] font-medium border-r-2">Contacto</Link>
    </div>
    <div className="hidden md:flex md:w-1/12">
      <a href="#en" className="text-white px-3  md:text-[26px] font-medium border-r-2">EN</a>
      <a href="#es" className="text-white px-3  md:text-[26px] font-medium">ES</a>
    </div>
  </nav>
</div>
      {children}
      </main>
  );
};

export default Layout;