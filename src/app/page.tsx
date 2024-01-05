import logoRebel from './logo.png';
import logoRebelBl from './logo-blanco.png';
import robotImg from './11-1.png';
import Image from 'next/image';
import square1 from './33.png';
import square2 from './55.png';
import square3 from './44.png';
import logoExc from './logo-xcitium.001.png';
import logoSendm from './logo-sendmarc.png';



const Page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full bg-custom-linear">
      <div className="w-full text-center pt-12">
        <nav className="bg-gray-800 p-4 flex justify-between rt-nav">
          <div className="flex w-2/12">
          </div>
          <div className="flex w-8/12 justify-center">
            <a href="#inicio" className="text-white px-3 text-[26px] font-medium border-r-2">Inicio</a>
            <a href="#quienes-somos" className="text-white px-3  text-[26px] font-medium border-r-2">Quiénes Somos</a>
            <a href="#soluciones" className="text-white px-3 text-[26px] font-medium border-r-2">Soluciones</a>
            <a href="#contacto" className="text-white px-3 text-[26px] font-medium ">Contacto</a>
          </div>
          <div className="flex w-1/12 justify-end">
            <a href="#en" className="text-white px-3 text-[26px] font-medium border-r-2">EN</a>
            <a href="#es" className="text-white px-3 text-[26px] font-medium">ES</a>
          </div>
          <div className="flex w-1/12 justify-end">
          </div>
        </nav>

        <Image src={logoRebel} alt="Logo" className="mx-auto w-2/4 mt-16" />
        <div className='flex mt-20'>
          <div className='w-1/2 m-16 mr-0'>
            <p className='w-1/1 mx-8 text-[28px] font-semibold'>¿Cómo asegurarás la excelencia
              operativa en un mundo digital
              que evoluciona constantemente?
            </p>
            <p className='w-1/1 mt-8 ml-[40px] text-left text-[20px]'>En RebelTech Solutions, fusionamos desarrollo de
              software ágil, ciberseguridad proactiva y análisis
              de datos avanzados para ofrecer soluciones integrales.
              Nuestros métodos de desarrollo robustos mantienen
              la funcionalidad crítica, nuestra ciberseguridad con
              ZeroDwell de Xcitium detiene daños cibernéticos
              antes de que sucedan y nuestras innovaciones en
              Data Science transforman grandes datos en
              decisiones estratégicas. Superamos los desafíos
              tecnológicos, incluso cuando las estrategias
              tradicionales no son suficientes</p>
          </div>
          <div className='flex w-1/2'>
            <Image src={robotImg} alt="Robot" className="w-3/4" />
          </div>
        </div>

        <div className='flex mt-[60px] mx-12 capsule-rt'>
          <div className='w-1/3 m-4'>
            <Image src={square1} alt="Logo" className="mx-auto w-2/4 mt-16" />
            <div className='-mt-28 bg-violet-700 rounded-[50px] min-h-[400px] pt-24 p-16'>
              <p className='text-[26px] font-semibold'>
                Desarrrollo de Software
              </p>
              <p className='mt-4 text-[19px]'>"Innovación en cada línea de
                código. Desarrollo de software a la
                medida de tus necesidades
                empresariales. RebelTech Solutions
                Donde las ideas se convierten en
                realidad."
              </p>
            </div>
          </div>
          <div className='w-1/3 m-4'>
            <Image src={square2} alt="Logo" className="mx-auto w-2/4 mt-16" />
            <div className='-mt-28 bg-violet-700 rounded-[50px] min-h-[400px] pt-24 p-16'>
              <p className='text-[26px] font-semibold'>
                Servicio de Ciberseguridad
              </p>
              <p className='mt-4 text-[19px]'>"Blindaje digital con Xcitium.
                Explora la ciberseguridad que
                protege y empodera tu
                empresa. En RebelTech Solutions,
                la seguridad es nuestra prioridad.
                "
              </p>
            </div>
          </div>
          <div className='w-1/3 m-4'>
            <Image src={square3} alt="Logo" className="mx-auto w-2/4 mt-16" />
            <div className='-mt-28 bg-violet-700 rounded-[50px] min-h-[400px] pt-24 p-16'>
              <p className='text-[26px] font-semibold'>Soluciones de Data</p>
              <p className='mt-4 text-[19px]'>Inteligencia de datos, estrategias
                inteligentes. Expertos en Data
                Science desbloqueando insights
                para el éxito de tu negocio.
                RebelTech Solutions Impulsando la
                innovación basada en datos.
                "</p>
            </div>
          </div>
        </div>

        <h1 className="text-yellow-400 pt-36 text-base md:text-3xl w-full">
          PARTNERS
        </h1>
        <div className='mt-24 mb-16'>
          <Image src={logoExc} alt="Logo" className="mx-auto w-1/4 mt-16" />
          <Image src={logoSendm} alt="Logo" className="mx-auto w-1/4 mt-24" />
        </div>
      </div>
      <footer className="w-full mt-24 bg-brightRed text-white p-12 px-20">
        <div className="mx-auto grid grid-cols-3 gap-4">
          <div className='col-span-3'>
            <Image src={logoRebelBl} alt="Logo" className="w-1/5 mb-5" />
          </div>
          <div className="flex flex-col space-y-2 px-10">
            {/* Columna izquierda */}
            <p>LOS MILITARES 5620 Depto 905, </p>
            <p>LAS CONDES SANTIAGO</p>
            <p>Sales (cl): +56 9 7518 0082</p>
            <p>Sales (Uk): +380 96 356 1245</p>
            <p>Operaciones (Int): +56 9 6122 9110</p>
          </div>
          <div className="flex flex-col space-y-2 px-20">
            {/* Columna central */}
            <p className="font-bold">Email</p>
            <p>Contact: contacto@rebeltechsolutions.cl</p>
            <p>Support: soporte@rebeltechsolutions.cl</p>
            <p>Sales: sales@rebeltechsolutions.cl</p>
          </div>
          <div className="flex flex-col space-y-2 px-20">
            {/* Columna derecha */}
            <p className="font-bold">Website Terms & Conditions</p>
            <p>Privacy</p>
            <p>Legal Repository</p>
            <p>Cookie Policy</p>
            <p>Platform Terms</p>
          </div>
        </div>
        <div className="text-center pt-8">
          <p>Copyright © {new Date().getFullYear()} RebelTech Solutions All Rights Reserved</p>
        </div>

      </footer>
    </main>
  );
};

export default Page;
