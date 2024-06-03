import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoRebel from '../public/logo.png';
import hamburgerIcon from '../public/hamburgerIcon.png';
import closeIcon from '../public/closeIcon3.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const [isSecondLevelMenuVisible, setSecondLevelMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSubMenuVisible(false);
    setSecondLevelMenuVisible(false);
  };

  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
    if (isSecondLevelMenuVisible) {
      setSecondLevelMenuVisible(false);
    }
  };

  const toggleSecondLevelMenu = () => {
    setSecondLevelMenuVisible(!isSecondLevelMenuVisible);
  };

  return (
    <nav className="p-10">
      <div className="flex justify-between items-center md:justify-center">
        <Link href="/" className="md:hidden">
          <Image src={logoRebel} alt="Logo" width={180} height={60} />
        </Link>
        <div className="text-white md:hidden" onClick={toggleMenu}>
          <Image src={isMenuOpen ? closeIcon : hamburgerIcon} alt="Menu" width={isMenuOpen ? 24 : 72} height={isMenuOpen ? 24 : 72} />
        </div>
      </div>
      <div className={`md:flex md:justify-center ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-start mt-4 md:flex-row md:mt-0">
          <Link href="/" className="text-white px-3 py-px md:text-[26px] text-xl tracking-widest font-medium md:border-r" onClick={closeMenu}>Inicio</Link>
          <Link href="/#" className="text-white px-3 py-px md:text-[26px] text-xl tracking-widest font-medium md:border-r" onClick={closeMenu}>Quiénes Somos</Link>
          <div className="relative md:block">
            <button onClick={toggleSubMenu} className="text-white px-3 py-px md:text-[26px] text-xl tracking-widest font-medium flex justify-between items-center md:border-r">
              Soluciones
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSubMenuVisible ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}></path>
              </svg>
            </button>
            {isSubMenuVisible && (
              <div className="absolute left-0 mt-2 bg-gray-700 md:top-full md:left-0 md:bg-transparent md:shadow-none">
                <div className="bg-gray-700 md:bg-gray-800">
                  <Link href="/#" className="block text-white px-3 py-2 md:text-sm hover:text-fuchsia-600" onClick={closeMenu}>Data</Link>
                  <Link href="/#" className="block text-white px-3 py-2 md:text-sm hover:text-fuchsia-600" onClick={closeMenu}>Desarrollo</Link>
                  <div className="relative">
                    <button onClick={toggleSecondLevelMenu} className="hover:text-fuchsia-600 text-white px-3 py-2 md:text-sm w-full flex justify-between items-center">
                      Ciberseguridad
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSecondLevelMenuVisible ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}></path>
                      </svg>
                    </button>
                    {isSecondLevelMenuVisible && (
                      <div className="bg-gray-700 md:w-auto">
                        <Link href="/Xcitium" className="block text-white px-3 py-2 md:text-sm hover:text-fuchsia-600" onClick={closeMenu}>Xcitium</Link>
                        <Link href="/Sendmarc" className="block text-white px-3 py-2 md:text-sm hover:text-fuchsia-600" onClick={closeMenu}>Sendmarc</Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/contacto" className="text-white px-3 py-px md:text-[26px] font-medium text-xl tracking-widest" onClick={closeMenu}>Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
