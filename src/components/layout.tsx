import Link from 'next/link';
import React, { useState, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // Estado para controlar la visibilidad del submenú
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  // Función para manejar el click y alternar la visibilidad del submenú
  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  const [isSecondLevelMenuVisible, setSecondLevelMenuVisible] = useState(false);

  const showSecondLevelMenu = () => {
    setSecondLevelMenuVisible(true);
  };

  const hideSecondLevelMenu = () => {
    setSecondLevelMenuVisible(false);
  };

  const toggleSecondLevelMenu = () => {
    setSecondLevelMenuVisible(!isSecondLevelMenuVisible);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full bg-custom-linear">
      <div className="w-full text-center pt-12">
        <nav className="bg-gray-800 p-4 flex justify-between rt-nav flex-col md:flex-row">
          <div className="flex w-full md:w-2/12">
          </div>
          <div className="flex w-full md:w-8/12 justify-center flex-wrap">
            <Link href="/" className="text-white px-3 text-xs md:text-[26px] font-medium border-r-2">Inicio</Link>
            <Link href="/quienes-somos" className="text-white px-3 text-xs md:text-[26px] font-medium border-r-2"> Quiénes Somos</Link>
            <div className="relative">
              <button onClick={toggleSubMenu} className="text-white px-3 text-xs md:text-[26px] font-medium border-r-2 cursor-pointer">Soluciones</button>
              {/* Submenú */}
              {isSubMenuVisible && (
                <div className="absolute left-0 mt-2 bg-gray-700 w-40">
                  <Link href="/Data" className="block text-white px-3 py-2 text-xs md:text-sm hover:text-fuchsia-600">Data</Link>
                  <Link href="/Desarrollo" className="block text-white px-3 py-2 text-xs md:text-sm hover:text-fuchsia-600">Desarrollo</Link>
                  <div className="relative">
                    <button onClick={toggleSecondLevelMenu} className="hover:text-fuchsia-600  block text-white px-3 py-2 text-xs md:text-sm w-full">Ciberseguridad</button>
                    {isSecondLevelMenuVisible && (
                      <div className="absolute left-full top-0 bg-gray-700 w-40">
                        <Link href="/Xcitium" className="block text-white px-3 py-2 text-xs md:text-sm hover:text-fuchsia-600 ">Xcitium</Link>
                        <Link href="/Sendmarc" className="block text-white px-3 py-2 text-xs md:text-sm hover:text-fuchsia-600 ">Sendmarc</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <Link href="/contacto" className="text-white px-3 text-xs md:text-[26px] font-medium ">Contacto</Link>
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
