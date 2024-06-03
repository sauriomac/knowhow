import logoRebel from '../public/logo.png';
import robotImg from '../public/11-1.png';
import Image from 'next/image';
import square1 from '../public/icon-purple-cloud2.webp';
import square2 from '../public/icon-cloud.webp';
import square3 from '../public/icon-purple-hexa.webp';
import logoExc from '../public/logo-xcitium.001.png';
import logoSendm from '../public/logo-sendmarc.png';



const Page: React.FC = () => {
  return (
    <>
  <div className="w-full pt-12">
    <Image src={logoRebel} alt="Logo" className="mx-auto w-3/6 md:w-2/4 mt-16 md:block hidden" />
    <div className="flex flex-col md:flex-row mt-20">
      <div className="w-full md:w-1/2 md:px-0 md:ml-48 px-4">
        <p className="lg:text-[34px] font-bold text-red-700 mt-12 text-center md:text-left">
          ¿Cómo asegurarás la excelencia operativa en un mundo digital que evoluciona constantemente?
        </p>
        <p className="lg:text-[23px] mt-8 text-left text-sm md:text-base lg:leading-relaxed">
          En <label className="font-semibold text-[#EFCE40]">RebelTech Solutions</label>, fusionamos desarrollo de
          software ágil, ciberseguridad proactiva y análisis de datos avanzados para ofrecer soluciones integrales.
          Nuestros métodos de desarrollo robustos mantienen la funcionalidad crítica, nuestra ciberseguridad con
          ZeroDwell de Xcitium detiene daños cibernéticos antes de que sucedan y nuestras innovaciones en Data
          Science transforman grandes datos en decisiones estratégicas. Superamos los desafíos tecnológicos, incluso
          cuando las estrategias tradicionales no son suficientes.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Image src={robotImg} alt="Robot" className="w-2/3 md:w-2/3 mx-auto md:ml-8 mt-20 md:mt-0" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row mt-36 mx-4 md:mx-12 capsule-rt text-center">
      <div className="md:w-1/3 m-4 mt-1">
        <div className="md:-mt-28 bg-custom-gradient min-h-[460px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
          <Image src={square1} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
          <p className="mt-3 md:text-[30px] md:mt-6 font-bold text-[#EFCE40]">Desarrollo de Software</p>
          <p className="md:text-[24px] mt-6 lg:leading-relaxed">
            Innovación en cada línea de código. Desarrollo de software a la medida de tus necesidades empresariales.
            RebelTech Solutions. Donde las ideas se convierten en realidad.
          </p>
        </div>
      </div>
      <div className="md:w-1/3 m-4 mt-1">
        <div className="md:-mt-28 bg-custom-gradient min-h-[464px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
          <Image src={square2} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
          <p className="mt-3 md:text-[30px] md:mt-6 font-bold text-[#EFCE40]">Servicio de Ciberseguridad</p>
          <p className="md:text-[24px] mt-6 lg:leading-relaxed">
            Blindaje digital con Xcitium y Sendmarc. Explora la ciberseguridad que protege y empodera tu empresa. La
            seguridad es nuestra prioridad.<br/>
          </p>
        </div>
      </div>
      <div className="md:w-1/3 m-4 mt-1">
        <div className="md:-mt-28 bg-custom-gradient min-h-[460px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
          <Image src={square3} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
          <p className="md:text-[30px] font-bold m-6 md:mt-6 text-[#EFCE40]">Soluciones de Data</p>
          <p className="mt-3 md:text-[24px] lg:leading-relaxed">
            Inteligencia de datos, estrategias inteligentes. Expertos en Data Science desbloqueando insights para el
            éxito de tu negocio. RebelTech Solutions. Impulsando la innovación basada en datos.
          </p>
        </div>
      </div>
    </div>

    <div className="mt-40 mb-32">
      <a href="https://www.xcitium.com/">
        <Image src={logoExc} alt="Logo" className="mx-auto w-1/2 md:w-1/4 mt-16 mb-28" />
      </a>
      <div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96">
        <p className="lg:text-[24px] mt-8 text-left font-bold text-xl leading-normal">
          Detectar amenazas cibernéticas frente a detener el daño de las amenazas cibernéticas, dos cosas muy diferentes.
        </p>
        <p className="lg:text-[23px] mt-1 text-left font-bold text-2xl lg:leading-relaxed leading-normal text-[#EFCE40]">
          Los EDR, MDR y XDR con alimentación ZeroDwell de detección de Xcitium derrotan las amenazas indetectables y
          previenen el daño cibernético.
        </p>
      </div>
      <a href="https://sendmarc.com/es/">
        <Image src={logoSendm} alt="Logo" className="mx-auto w-1/2 md:w-1/4 mt-24 mb-28" />
      </a>
      <div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96">
        <p className="lg:text-[24px] mt-8 text-left font-bold text-2xl leading-normal text-[#EFCE40]">PROTEJA EL NOMBRE DE SU MARCA</p>
        <p className="lg:text-[23px] mt-1 text-left font-bold text-2xl leading-normal lg:leading-relaxed">
          Sendmarc se asegura de que todos los correos electrónicos recibidos que llevan su nombre sean reales.
        </p>
      </div>
    </div>
  </div>
</>
  );
};

export default Page;
