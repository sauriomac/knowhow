    import logoRebel from '../public/logo.png';
    import robotImg from '../public/11-1.png';
    import Image from 'next/image';
    import square1 from '../public/icon-purple-cloud2.webp';
    import square2 from '../public/icon-cloud.webp';
    import square3 from '../public/icon-purple-hexa.webp';
    import java from '../public/java.png';
    import python from '../public/python.png';
    import cs from '../public/hashtag.png';
    import js from '../public/js.png';
    import msql from '../public/mysql.png';
    import psql from '../public/postgre.png';
    import mdb from '../public/mongodb_compass_macos_bigsur_icon_189933.png';
    import sqls from '../public/pngegg.png';
    import angular from '../public/angular.png';
    import react from '../public/react.png';
    import net from '../public/net.png';
    import django from '../public/djan.png';
    import aws from '../public/aws.png';
    import azure from '../public/azure.png';
    import google from '../public/google.png';
    import block from '../public/block.png';
    import lot from '../public/lot.png';
    import ai from '../public/ai.png';


    import logoRo from '../public/1.png';
    import logoRo2 from '../public/2.png';
    import logoSendm from '../public/logo-sendmarc.png';
        
    const Desarrollo: React.FC = () => {
          return (
            <>
              <div className="w-full pt-12">
                <Image src={logoRebel} alt="Logo" className="mx-auto w-3/6 md:w-2/4 mt-16 md:block hidden" />
                <div className="flex flex-col md:flex-row mt-20">
  <div className="w-full md:w-1/2 md:px-0 md:ml-48 px-4">
    <p className="lg:text-[33px] font-bold text-[#EFCE40] mt-12 text-center md:text-left">
      Soluciones de Desarrollo
    </p>
    <p className="text-white lg:text-[23px] mt-8 text-left text-sm md:text-base lg:leading-relaxed">
      En RebelTech Solutions, ampliamos nuestra pasión por la excelencia y la innovación al campo del desarrollo de software a medida. Somos una empresa especializada que entiende y se adapta a las necesidades únicas de cada negocio. Nuestro equipo de desarrolladores no solo está altamente capacitado, sino también inspirado por una filosofía de trabajo que busca constantemente superar los estándares de calidad y servicio.
    </p>
  </div>
  <div className="w-full md:w-1/2 flex justify-center md:justify-start">
    <Image src={logoRo} alt="Robot" className="w-2/3 md:w-2/3 mx-auto md:ml-8 mt-20 md:mt-0" />
  </div>
</div>

<div className="flex flex-col md:flex-row mt-36 mx-4 md:mx-12 capsule-rt text-center">
  


  
  <div className="md:w-1/3 m-4 mt-1">
    <div className="md:-mt-28 bg-custom-gradient min-h-[360px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
      <Image src={square2} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
      <p className="md:text-[30px] font-bold m-6 md:mt-6 text-[#EFCE40]">Reingeniería</p>
    </div>
  </div>
  <div className="md:w-1/3 m-4 mt-1">
    <div className="md:-mt-28 bg-custom-gradient min-h-[360px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
      <Image src={square3} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
      <p className="md:text-[30px] font-bold m-6 md:mt-6 text-[#EFCE40]">Optimización de Sistemas</p>
    </div>
  </div>
  <div className="md:w-1/3 m-4 mt-1">
    <div className="md:-mt-28 bg-custom-gradient min-h-[360px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
      <Image src={square1} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
      <p className="md:text-[30px] font-bold m-6 md:mt-6 text-[#EFCE40]">Estrategia Digital y Transformación</p>
    </div>
  </div>
  <div className="md:w-1/3 m-4 mt-1">
    <div className="md:-mt-28 bg-custom-gradient min-h-[360px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
      <Image src={square3} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
      <p className="md:text-[30px] font-bold m-6 md:mt-6 text-[#EFCE40]">Seguridad y Cumplimiento Normativo</p>
    </div>
  </div>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
  <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
    Lenguajes de Programación
  </p>
  <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
    Utilizamos lenguajes modernos y versátiles como Java, Python, JavaScript, C#, entre otros, para ofrecer soluciones robustas y eficientes.
  </p>
  <div className="flex justify-start space-x-4 mt-4">
    <Image src={java}  alt="Java" className="w-10 h-10" />
    <Image src={python}  alt="Python" className="w-10 h-10" />
    <Image src={cs}  alt="JavaScript" className="w-10 h-10" />
    <Image src={js}  alt="C#" className="w-10 h-10" />
  </div>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
  <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
    Bases de Datos
  </p>
  <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
    Somos expertos en manejar diversas bases de datos como MySQL, PostgreSQL, MongoDB y SQL Server, asegurando la integridad y seguridad de tus datos.
  </p>
  <div className="flex justify-start space-x-4 mt-4">
    <Image src={msql} alt="MySQL" className="w-10 h-10" />
    <Image src={psql} alt="PostgreSQL" className="w-10 h-10" />
    <Image src={mdb}  alt="MongoDB" className="w-10 h-10" />
    <Image src={sqls}  alt="SQL Server" className="w-10 h-10" />
  </div>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
  <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
    Frameworks
  </p>
  <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
    Implementamos frameworks de alto rendimiento como Angular, React, Django y .NET, que nos permiten desarrollar aplicaciones escalables y de alta calidad.
  </p>
  <div className="flex justify-start space-x-4 mt-4">
    <Image src={angular}  alt="Angular" className="w-10 h-10" />
    <Image src={react}  alt="React" className="w-10 h-10" />
    <Image src={django}  alt="Django" className="w-10 h-10" />
    <Image src={net}  alt=".NET" className="w-10 h-10" />
  </div>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
  <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
    Infraestructura en la Nube
  </p>
  <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
    Nos apoyamos en plataformas de nube líderes como AWS, Azure y Google Cloud para ofrecer soluciones flexibles y seguras.
  </p>
  <div className="flex justify-start space-x-4 mt-4">
    <Image src={aws}  alt="AWS" className="w-10 h-10" />
    <Image src={azure}  alt="Azure" className="w-10 h-10" />
    <Image src={google} alt="Google Cloud" className="w-10 h-10" />
  </div>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
  <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
    Tecnologías Emergentes
  </p>
  <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
    Estamos a la vanguardia en la implementación de tecnologías emergentes como Blockchain, Internet de las Cosas (IoT) y Machine Learning, abriendo un abanico de posibilidades para innovar en tu negocio.
  </p>
  <div className="flex justify-start space-x-4 mt-4">
    <Image src={block}  alt="Blockchain" className="w-10 h-10" />
    <Image src={lot}  alt="IoT" className="w-10 h-10" />
    <Image src={ai}  alt="Machine Learning" className="w-10 h-10" />
  </div>
</div>
        
                <div className="mt-40 mb-32">
                <div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96">
    <p className="lg:text-[24px] mt-8 text-left font-bold text-xl leading-normal text-[#EFCE40]">
        Outsourcing
    </p>
    <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
        Ofrecemos perfiles tecnológicos y de negocio altamente capacitados que ayudan a cumplir las necesidades de nuestros clientes, entregando un servicio de calidad desde el primer día.
    </p>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
    <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
        Levantamiento e Ideación de Soluciones
    </p>
    <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
        Gestionamos y ayudamos a generar ideas para convertirlas en requerimientos técnicos y funcionales, especificando cada funcionalidad, casos de uso, modelos de datos y la arquitectura necesaria.
    </p>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
    <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
        Usabilidad de Sitios Web y Apps
    </p>
    <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
        Diseñamos funcionalidades intuitivas que facilitan la adopción de nuevos módulos para apoyar al negocio. Analizamos la experiencia del usuario para presentar la información de forma que permita interactuar y completar tareas de manera fluida.
    </p>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
    <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
        Construcción y Producción de Sistemas
    </p>
    <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
        Desarrollamos software a medida a partir de requerimientos de sistema, estimando previamente el esfuerzo y planificando detalladamente cada actividad. Acompañamos y apoyamos la puesta en producción y su marcha blanca.
    </p>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
    <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
        Mantenciones Correctivas y Evolutivas
    </p>
    <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
        Tomamos el control funcional y técnico de sistemas desarrollados por terceros, resolviendo problemas o desarrollando nuevas funcionalidades. Establecemos acuerdos de nivel de servicio para cumplir con la calidad y tiempos esperados.
    </p>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
    <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
        Reingeniería
    </p>
    <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
        Documentamos funcionalidades, reglas de negocio y estructuras de sistemas existentes para generar nuevas soluciones, integrándolas con otros sistemas o expandiendo sus capacidades.
    </p>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
    <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
        Optimización de Sistemas
    </p>
    <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
        Identificamos infraestructuras, monitoreamos en escenarios extremos e identificamos cuellos de botella, estableciendo prioridades y definiendo planes de mejora para cumplir métricas de tiempos de respuesta y uso de recursos.
    </p>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
    <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
        Estrategia Digital y Transformación
    </p>
    <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
        Definimos e implementamos estrategias digitales efectivas que mejoran la competitividad y eficiencia operativa, cubriendo desde la consultoría inicial hasta la implementación de soluciones tecnológicas.
    </p>
</div>

<div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
    <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
        Seguridad y Cumplimiento Normativo
    </p>
    <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
        Aseguramos que todas nuestras soluciones cumplan con los más altos estándares de seguridad y normativas vigentes, protegiendo la integridad y confidencialidad de los datos de nuestros clientes.
    </p>
</div>

                </div>
              </div>
            </>
          );
        };
        
export default Desarrollo;