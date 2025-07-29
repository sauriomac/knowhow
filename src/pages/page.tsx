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
        <p className="lg:text-[33px] font-bold text-red-700 mt-12 text-center md:text-left">
¿Cómo asegurarás la excelencia operativa en un mundo digital en constante evolución?        </p>
        <p className="lg:text-[23px] mt-8 text-left text-sm md:text-base lg:leading-relaxed text-white">
          En <label className="font-semibold text-[#EFCE40]">RebelTech Solutions</label>, integramos desarrollo ágil de software, ciberseguridad avanzada y análisis de datos para ofrecer soluciones tecnológicas de alto impacto. Nuestra arquitectura robusta asegura la continuidad operativa y la escalabilidad, mientras que nuestras prácticas de ciberseguridad protegen proactivamente tus sistemas en tiempo real. A través de la ciencia de datos, transformamos información compleja en decisiones estratégicas que impulsan el negocio.

Además, llevamos la innovación más allá con experiencias inmersivas en realidad aumentada, realidad virtual y videojuegos, aplicando estas tecnologías a proyectos educativos, empresariales y de entretenimiento.

Superamos los desafíos tecnológicos donde las estrategias tradicionales ya no bastan, conectando futuro y eficiencia en cada línea de código..
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <Image src={robotImg} alt="Robot" className="w-2/3 md:w-2/3 mx-auto md:ml-8 mt-20 md:mt-0" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row mt-96 mb-[50rem] mx-4 md:mx-12 capsule-rt text-center">
      <div className="md:w-1/3 m-4 mt-1">
        <div className="md:-mt-28 bg-custom-gradient  min-h-[476px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
          <Image src={square1} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
          <p className="mt-3 md:text-[30px] md:mt-6 font-bold text-[#EFCE40]">Desarrollo de Software</p>
          <p className="md:text-[24px] mt-6 lg:leading-relaxed text-white">
            Innovación en cada línea de código.
Desarrollo de software a la medida de tus necesidades empresariales.
RebelTech Solutions. Donde las ideas se convierten en realidad.
Impulsamos tu transformación digital con soluciones ágiles, seguras y basadas en datos. Desde plataformas inteligentes hasta experiencias inmersivas en realidad aumentada y virtual, construimos tecnología que conecta personas, optimiza procesos y acelera resultados.
          </p>
        </div>
      </div>
      <div className="md:w-1/3 m-4 mt-1">
        <div className="md:-mt-28 bg-custom-gradient min-h-[476px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
          <Image src={square2} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
          <p className="mt-3 md:text-[30px] md:mt-6 font-bold text-[#EFCE40]">Servicio de Ciberseguridad</p>
          <p className="md:text-[24px] mt-6 lg:leading-relaxed text-white">
            Blindaje digital para tu empresa.
Explora soluciones de ciberseguridad que no solo protegen, sino que empoderan tu operación digital.
Implementamos defensas proactivas, monitoreo continuo y prácticas avanzadas para mantener tu infraestructura segura, disponible y confiable.
La seguridad es nuestra prioridad.<br/>
          </p>
        </div>
      </div>
      <div className="md:w-1/3 m-4 mt-1">
        <div className="md:-mt-28 bg-custom-gradient min-h-[476px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
          <Image src={square3} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
          <p className="md:text-[30px] font-bold m-6 md:mt-6 text-[#EFCE40]">Soluciones de Data</p>
          <p className="mt-3 md:text-[24px] lg:leading-relaxed text-white">
            Inteligencia de datos, estrategias inteligentes. Expertos en Data Science desbloqueando insights para el
            éxito de tu negocio. RebelTech Solutions. Impulsando la innovación basada en datos.
          </p>
        </div>
      </div>
    </div>
  </div>
</>
  );
};

export default Page;
