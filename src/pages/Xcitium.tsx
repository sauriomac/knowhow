
import Image from 'next/image';
import logoExc from '../public/Xcitium-Logo2.png';
import logoTree from '../public/tree.png';
import logoCircle from '../public/circle.png';

const Xcitium: React.FC = () => {
    return (

        <>
  <div className="container mx-auto px-4">
    <div className="mt-16 w-full md:w-4/5 mx-auto">
      <a href="https://www.xcitium.com/">
        <Image src={logoExc} alt="Logo" className="mx-auto w-3/4 md:w-1/2 lg:w-1/4 mt-32 mb-32" />
      </a>
      <p className="px-4 md:px-20 pt-0 pb-16 text-2xl md:text-3xl font-bold tracking-wider text-center text-[#EFCE40]">
        Soluciones y Servicios de Xcitium Ofrecidos por RebelTech Solutions
      </p>
      <p className="px-4 md:px-40 pt-8 text-base md:text-lg lg:text-xl text-center md:text-left lg:leading-relaxed">
        En <span className="font-semibold text-[#EFCE40]">RebelTech Solutions</span> como socio de Xcitium, proporciona avanzadas soluciones de ciberseguridad aprovechando la tecnología patentada de Xcitium para proteger organizaciones contra amenazas digitales. Esta colaboración incluye productos como Xcitium Advanced (EPP+EDR), Managed (MDR) y Complete (XDR), y servicios como respuesta a incidentes y caza de amenazas, fortaleciendo la seguridad empresarial sin afectar la productividad. Además, RebelTech Solutions recibe formación y soporte técnico continuo de Xcitium, asegurando una implementación eficaz y asesoramiento experto en estrategias de protección para negocios. Este compromiso conjunto garantiza un enfoque integral en la gestión de riesgos de seguridad, ofreciendo a los clientes soluciones de ciberseguridad de primer nivel.
      </p>
    </div>
    <div>
      <Image src={logoTree} alt="Logo" className="mx-auto w-full md:w-3/4 lg:w-1/2 mt-32 mb-32" />
    </div>
    <div className="flex flex-col md:flex-row pb-12">
      <div className="my-8 w-full md:w-1/4 p-5">
        <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 text-[#EFCE40] leading-normal text-center md:text-left">Xcitium Advanced (EPP+EDR)</h2>
        <p className="text-base md:text-lg lg:text-xl mb-4 text-center md:text-left lg:leading-relaxed">
          Solución que combina la protección de endpoints con detección y respuesta avanzadas.
          <br />
          Defensa robusta contra una variedad de amenazas cibernéticas.
        </p>
      </div>
      <div className="my-8 w-full md:w-1/4 p-5">
        <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 text-[#EFCE40] leading-normal text-center md:text-left">Xcitium Managed (MDR)</h2>
        <p className="text-base md:text-lg lg:text-xl mb-4 text-center md:text-left lg:leading-relaxed">
          Servicio de detección y respuesta gestionada para seguridad de red.
          <br />
          Administración y supervisión proactiva de la seguridad cibernética.
        </p>
      </div>
      <div className="my-8 w-full md:w-1/4 p-5">
        <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 text-[#EFCE40] leading-normal text-center md:text-left">Xcitium Complete (XDR)</h2>
        <p className="text-base md:text-lg lg:text-xl mb-4 text-center md:text-left lg:leading-relaxed">
          Solución extendida de detección y respuesta que proporciona un control completo.
          <br />
          Mayor cobertura y protección profunda más allá de los endpoints tradicionales.
        </p>
      </div>
      <div className="my-8 w-full md:w-1/4 p-5">
        <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 text-[#EFCE40] leading-normal text-center md:text-left">ZeroDwell Containment y Zero Trust Architecture</h2>
        <p className="text-base md:text-lg lg:text-xl mb-4 text-center md:text-left lg:leading-relaxed">
          Tecnologías para aislar y neutralizar eficazmente amenazas desconocidas.
          <br />
          Mayor seguridad con contención y análisis de elementos sospechosos.
        </p>
      </div>
    </div>
    <div className="my-8 w-full md:w-4/5 mx-auto pb-3 lg:leading-relaxed">
      <h2 className="py-4 text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-[#EFCE40] text-center md:text-left">Servicios de Respuesta a Incidentes y Caza de Amenazas Gestionadas</h2>
      <p className="text-base md:text-lg lg:text-xl px-2 text-center md:text-left"><span className="font-bold px-4">&#8226;</span>Servicios especializados para la identificación y mitigación de amenazas.</p>
      <p className="text-base md:text-lg lg:text-xl px-2 text-center md:text-left"><span className="font-bold px-4">&#8226;</span>Soporte experto en respuesta a incidentes y caza proactiva de amenazas.</p>
    </div>
    <div className="my-8 w-full md:w-4/5 mx-auto pb-8">
      <h2 className="py-4 text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-[#EFCE40] text-center md:text-left">Servicios Profesionales y de Soporte de Xcitium</h2>
      <p className="text-base md:text-lg lg:text-xl px-2 text-center md:text-left"><span className="font-bold px-4">&#8226;</span>Apoyo técnico y profesional para implementación y mantenimiento.</p>
      <p className="text-base md:text-lg lg:text-xl px-2 text-center md:text-left"><span className="font-bold px-4">&#8226;</span>Implementación efectiva y soporte continuo en soluciones de seguridad.</p>
    </div>
    <div className="my-8 w-full md:w-4/5 mx-auto pb-16">
      <p className="text-base md:text-lg lg:text-xl px-2 text-center md:text-left lg:leading-relaxed">
        Nuestra asociación con Xcitium refuerza nuestro compromiso con la excelencia en ciberseguridad, permitiéndonos ofrecer soluciones de seguridad cibernética de primer nivel y un enfoque integral para la gestión de riesgos. Visite <a className="text-[#EFCE40] font-bold" href="https://www.xcitium.com/">Xcitium</a> para más información.
      </p>
    </div>
    <div>
      <Image src={logoCircle} alt="Logo" className="mx-auto w-3/4 md:w-1/2 lg:w-1/4 mt-32 mb-32" />
    </div>
  </div>
</>

    )
}
export default Xcitium;