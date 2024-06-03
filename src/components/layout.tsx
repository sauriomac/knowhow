import Link from 'next/link';
import React, { useState, ReactNode } from 'react';
import logoRebelBl from '../public/logo-blanco.png';
import Image from 'next/image';
import Navbar from '../pages/Navbar';

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
        <Navbar/>
      </div>
      {children}


      <footer className="w-full bg-brighredmobile  text-white p-4 md:p-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className='col-span-1 md:col-span-3'>
            <Image src={logoRebelBl} alt="Logo" className="w-1/2 md:w-1/5 mb-5 mx-auto" />
          </div>
          <div className="flex flex-col space-y-2 px-4 md:px-10">
            {/* Columna izquierda */}
            <p className="text-xs md:text-base">LOS MILITARES 5620 Depto 905, </p>
            <p className="text-xs md:text-base">LAS CONDES SANTIAGO</p>
            <p className="text-xs md:text-base">Sales (CL): +56 9 7518 0082</p>
            <p className="text-xs md:text-base">Sales (UE): +380 96 356 1245</p>
            <p className="text-xs md:text-base">Operaciones (CL): +56 9 6122 9110</p>
          </div>
          <div className="flex flex-col space-y-2 px-4 md:px-20">
            {/* Columna central */}
            <p className="font-bold text-xs md:text-base">Email</p>
            <p className="text-xs md:text-base">Contact: contacto@rebeltechsolutions.cl</p>
            <p className="text-xs md:text-base">Support: soporte@rebeltechsolutions.cl</p>
            <p className="text-xs md:text-base">Sales: sales@rebeltechsolutions.cl</p>
          </div>
          <div className="flex flex-col space-y-2 px-4 md:px-20">
            {/* Columna derecha */}
            <p className="font-bold text-xs md:text-base">Website Terms & Conditions</p>
            <p className="text-xs md:text-base">Privacy</p>
            <p className="text-xs md:text-base">Legal Repository</p>
            <p className="text-xs md:text-base">Cookie Policy</p>
            <p className="text-xs md:text-base">Platform Terms</p>
          </div>
        </div>
        <div className="text-center pt-8">
          <p className="text-xs md:text-base">Copyright © {new Date().getFullYear()} RebelTech Solutions All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
};

export default Layout;
