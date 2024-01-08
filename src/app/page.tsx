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
    <nav className="bg-gray-800 p-4 flex justify-between rt-nav flex-col md:flex-row">
      <div className="flex w-full md:w-2/12">
      </div>
      <div className="flex w-full md:w-8/12 justify-center flex-wrap">
        <a href="#inicio" className="text-white px-3 text-xs md:text-[26px] font-medium border-r-2">Inicio</a>
        <a href="#quienes-somos" className="text-white px-3 text-xs md:text-[26px] font-medium border-r-2">Quiénes Somos</a>
        <a href="#soluciones" className="text-white px-3 text-xs md:text-[26px] font-medium border-r-2">Soluciones</a>
        <a href="#contacto" className="text-white px-3 text-xs md:text-[26px] font-medium">Contacto</a>
      </div>
      <div className="hidden md:flex md:w-1/12">
        <a href="#en" className="text-white px-3  md:text-[26px] font-medium border-r-2">EN</a>
        <a href="#es" className="text-white px-3  md:text-[26px] font-medium">ES</a>
      </div>
    </nav>

    <Image src={logoRebel} alt="Logo" className="mx-auto w-3/6 md:w-2/4 mt-16" />
    <div className='flex flex-col md:flex-row mt-20'>
      <div className='w-full md:w-1/2 px-4 md:px-16 md:ml-52'>
        <p className=' lg:text-[28px] lg:w1/1 lg:mx-8 font-semibold'>¿Cómo asegurarás la excelencia 
        operativa en un mundo digital que evoluciona constantemente?</p>
        <p className='lg:text-[20px] mt-8 text-left'>En RebelTech Solutions, fusionamos desarrollo de software ágil, ciberseguridad proactiva y análisis de datos avanzados para ofrecer soluciones integrales. Nuestros métodos de desarrollo robustos mantienen la funcionalidad crítica, nuestra ciberseguridad con ZeroDwell de Xcitium detiene daños cibernéticos antes de que sucedan y nuestras innovaciones en Data Science transforman grandes datos en decisiones estratégicas. Superamos los desafíos tecnológicos, incluso cuando las estrategias tradicionales no son suficientes</p>
      </div>
      <div className='w-full md:flex md:w-1/2'>
        <Image src={robotImg} alt="Robot" className="w-1/2 md:w-1/2 mx-auto md:mx-0 mt-20 md:mt-0" />
      </div>
    </div>

    <div className='flex flex-col md:flex-row mt-12 mx-4 md:mx-12 capsule-rt'>
      <div className=' md:w-1/3 m-4'>
        <Image src={square1} alt="Logo" className="mx-auto w-1/2 lg:w-2/4 mt-16" />
        <div className='-mt-28 bg-violet-700 rounded-[50px] min-h-[400px] pt-24 p-8 md:p-16'>
          <p className='mt-6 md:text-[26px] md:mt-12 font-semibold'>
            Desarrollo de Software
          </p>
          <p className=' md:text-[19px] mt-4'>"Innovación en cada línea de código. Desarrollo de software a la medida de tus necesidades empresariales. RebelTech Solutions Donde las ideas se convierten en realidad."</p>
        </div>
      </div>
      <div className=' md:w-1/3 m-4'>
        <Image src={square2} alt="Logo" className="mx-auto w-1/2 lg:w-2/4 mt-16" />
        <div className='-mt-28 bg-violet-700 rounded-[50px] min-h-[400px] pt-24 p-8 md:p-16'>
          <p className='mt-6 md:text-[26px] md:mt-12 font-semibold'>
            Servicio de Ciberseguridad
          </p>
          <p className=' md:text-[19px] mt-6'>"Blindaje digital con Xcitium. Explora la ciberseguridad que protege y empodera tu empresa. En RebelTech Solutions, la seguridad es nuestra prioridad."</p>
        </div>
      </div>
      <div className=' md:w-1/3 m-4'>
        <Image src={square3} alt="Logo" className="mx-auto w-1/2 lg:w-2/4 mt-16" />
        <div className='-mt-28 bg-violet-700 rounded-[50px] min-h-[400px] pt-24 p-8 md:p-16'>
          <p className=' md:text-[26px] font-semibold m-6 md:mt-12'>Soluciones de Data</p>
          <p className='mt-6 md:text-[19px]'>Inteligencia de datos, estrategias inteligentes. Expertos en Data Science desbloqueando insights para el éxito de tu negocio. RebelTech Solutions Impulsando la innovación basada en datos."</p>
        </div>
      </div>
    </div>

    <h1 className="text-yellow-400 pt-36 text-xs md:text-3xl w-full">
      PARTNERS
    </h1>
    <div className='mt-24 mb-16'>
      <Image src={logoExc} alt="Logo" className="mx-auto w-1/2 md:w-1/4 mt-16" />
      <Image src={logoSendm} alt="Logo" className="mx-auto w-1/2 md:w-1/4 mt-24" />
    </div>
  </div>
  <footer className="w-full bg-brightRed text-white p-4 md:p-12">
  <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className='col-span-1 md:col-span-3'>
      <Image src={logoRebelBl} alt="Logo" className="w-1/2 md:w-1/5 mb-5 mx-auto" />
    </div>
    <div className="flex flex-col space-y-2 px-4 md:px-10">
      {/* Columna izquierda */}
      <p className="text-xs md:text-base">LOS MILITARES 5620 Depto 905, </p>
      <p className="text-xs md:text-base">LAS CONDES SANTIAGO</p>
      <p className="text-xs md:text-base">Sales (cl): +56 9 7518 0082</p>
      <p className="text-xs md:text-base">Sales (Uk): +380 96 356 1245</p>
      <p className="text-xs md:text-base">Operaciones (Int): +56 9 6122 9110</p>
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

export default Page;
