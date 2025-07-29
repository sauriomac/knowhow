import logoRebel from '../public/logo.png';
import robotImg from '../public/2.png';
import Image from 'next/image';
import logoExc from '../public/logo-xcitium.001.png';
import logoSendm from '../public/logo-sendmarc.png';

const QuienesSomos: React.FC = () => {
  return (
    <>
      <div className="w-full pt-12">
        <Image src={logoRebel} alt="Logo" className="mx-auto w-3/6 md:w-2/4 mt-16 md:block hidden" />
        <div className="flex flex-col md:flex-row mt-20">
          <div className="w-full md:w-10/12 md:px-0 md:ml-48 px-4">
            <p className="lg:text-[33px] font-bold text-red-700 mt-12 text-center md:text-left">
              QUIÉNES SOMOS
            </p>
            <p className="text-white lg:text-[23px] mt-8 text-left text-sm md:text-base lg:leading-relaxed">
              En RebelTech Solutions, nuestra filosofía se centra en la excelencia y la innovación para abordar los desafíos tecnológicos empresariales. Con más de 10 años de experiencia, ayudamos a construir productos de software a compañías que buscan innovación y crecimiento. Nacemos de la necesidad de brindar un apoyo cercano a nuestros clientes en el desarrollo de su negocio, utilizando Tecnologías de la Información con alta eficacia y desempeño.
            </p>
            <p className="text-white lg:text-[23px] mt-8 text-left text-sm md:text-base lg:leading-relaxed">
              <strong className='text-yellow-300 '>Valores</strong><br/>
              RebelTech Solutions no es solo una compañía, sino un grupo de personas motivadas y de excelencia, a quienes cuidamos como nuestro mayor activo. Trabajamos con calidad, compromiso, entusiasmo e innovación.
            </p>
            <p className="text-white lg:text-[23px] mt-8 text-left text-sm md:text-base lg:leading-relaxed">
            <strong className='text-yellow-300 '>Misión</strong><br/>
              Proveer a nuestros clientes de las mejores soluciones TI personalizadas, buscando constantemente mejoras en los procesos tecnológicos. Nuestro equipo, versátil y comprometido, nos permite formar relaciones duraderas con nuestros clientes.
            </p>
            <p className="text-white lg:text-[23px] mt-8 text-left text- text-sm md:text-base lg:leading-relaxed">
            <strong className='text-yellow-300 '>Visión</strong><br/>
              Destacarnos por nuestra efectividad y robustez, llegando a ser la primera opción para nuestros clientes cuando necesitan apoyo tecnológico y de negocio en sus distintas áreas corporativas.
            </p>
            <p className="text-white lg:text-[23px] mt-8 text-left text-sm md:text-base lg:leading-relaxed">
            <strong className='text-yellow-300 '>Fortalezas</strong><br/>
              <strong>Creatividad:</strong> Somos una empresa con mentalidad creativa, en constante búsqueda de nuevas soluciones.<br/>
              <strong>Experiencia:</strong> Contamos con una experiencia tecnológica clave en cada uno de nuestros integrantes.<br/>
              <strong>Foco en el cliente:</strong> Nuestro principal foco de atención es el cliente y sus necesidades, monitoreando constantemente nuestro rendimiento.<br/>
              <strong>Colaboración:</strong> Adoptamos el negocio de nuestros clientes como propio, colaborando activamente en proponer mejoras tecnológicas que potencien su organización.
            </p>
          </div>
         
        </div>

      </div>
    </>
  );
};

export default QuienesSomos;
