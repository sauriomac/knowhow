import logoRebel from '../public/logo.png';
import robotImg from '../public/11-1.png';
import Image from 'next/image';
import square1 from '../public/icon-purple-cloud2.webp';
import square2 from '../public/icon-cloud.webp';
import square3 from '../public/icon-purple-hexa.webp';
import square4 from '../public/icon-net.png';
import logoRo from '../public/1.png';
import logoRo2 from '../public/2.png';
import logoSendm from '../public/logo-sendmarc.png';
    
const Data: React.FC = () =>  {
      return (
        <>
          <div className="w-full pt-12">
            <Image src={logoRebel} alt="Logo" className="mx-auto w-3/6 md:w-2/4 mt-16 md:block hidden" />
            <div className="flex flex-col md:flex-row mt-20">
              <div className="w-full md:w-1/2 md:px-0 md:ml-48 px-4">
                <p className="lg:text-[33px] font-bold text-[#EFCE40] mt-12 text-center md:text-left">
                Soluciones Data                </p>
                <p className="text-white lg:text-[23px] mt-8 text-left text-sm md:text-base lg:leading-relaxed">
                En RebelTech Solutions, ofrecemos una gama integral de servicios especializados en el análisis de datos para impulsar el éxito de tu empresa. Con una combinación única de experiencia académica y práctica en campos avanzados como la astrofísica y la astronomía, nuestros expertos están equipados para abordar cualquier desafío de datos que enfrentes.                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <Image src={logoRo} alt="Robot" className="w-2/3 md:w-2/3 mx-auto md:ml-8 mt-20 md:mt-0" />
              </div>
            </div>
    
            <div className="flex flex-col md:flex-row mt-36 mx-4 md:mx-12 capsule-rt text-center">
              <div className="md:w-1/3 m-4 mt-1">
                <div className="md:-mt-28 bg-custom-gradient min-h-[360px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
                  <Image src={square1} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
                  <p className="mt-3 md:text-[30px] md:mt-6 font-bold text-[#EFCE40]">Data Science 
y Análisis de Datos
</p>
                  
                </div>
              </div>
              <div className="md:w-1/3 m-4 mt-1">
                <div className="md:-mt-28 bg-custom-gradient min-h-[360px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
                  <Image src={square2} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
                  <p className="mt-3 md:text-[30px] md:mt-6 font-bold text-[#EFCE40]">Business Analytics y Decisiones Estratégicas
                  </p>
                  
                </div>
              </div>
              <div className="md:w-1/3 m-4 mt-1">
                <div className="md:-mt-28 bg-custom-gradient min-h-[360px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
                  <Image src={square3} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
                  <p className="md:text-[30px] font-bold m-6 md:mt-6 text-[#EFCE40]">Consultoría en Datos y 
Machine Learning:
</p>
                  
                </div>
              </div>
              <div className="md:w-1/3 m-4 mt-1">
                <div className="md:-mt-28 bg-custom-gradient min-h-[360px] pt-24 p-8 md:p-8 md:pt-4 rounded-md">
                  <Image src={square4} alt="Logo" className="mx-auto w-1/4 lg:w-1/4 mt-4" />
                  <p className="md:text-[30px] font-bold m-6 md:mt-6 text-[#EFCE40]">Análisis de Datos y Visualización: 
                  </p>
                  
                </div>
              </div>
            </div>
    
            <div className="mt-40 mb-32">
          <div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96">
            <div className="p-4">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2">
                  <Image src={logoRo2} alt="Robot" className="md:w-full" />
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <p className="lg:text-[24px] text-left font-bold text-xl leading-normal text-[#EFCE40]">
                    Data Science
                  </p>
                  <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
                    RebelTech Solutions ofrece servicios de Data Science compuestos por profesionales con una profunda experiencia académica y práctica en campos como la astrofísica y la astronomía, complementada con estudios avanzados en data science y análisis de datos. Nos especializamos en:
                    <ul className="list-disc list-inside">
                      <li className="mt-5">Modelado Predictivo: Utilizamos técnicas avanzadas para predecir tendencias y comportamientos futuros.</li>
                      <li className="mt-5">Análisis Descriptivo: Desentrañamos patrones en tus datos históricos para mejorar la toma de decisiones.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
              <div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96">
                <p className="lg:text-[24px] mt-8 text-left font-bold  text-xl leading-normal text-[#EFCE40]">
                Business Analytics y Decisiones Estratégicas
                </p>
                <p className="text-white lg:text-[23px] mt-1 text-left  text-2xl lg:leading-relaxed leading-normal">
                Nuestro servicio de Business Analytics y Decisiones Estratégicas es esencial para ayudar a tu empresa a crecer de manera sostenible. Utilizamos análisis de datos avanzados y técnicas de optimización para:

Pronósticos Precisos: Realizamos pronósticos financieros y de mercado para prever el futuro de tu negocio.
Análisis de Costos y Beneficios: Evaluamos la rentabilidad de proyectos y procesos.
Recomendaciones Estratégicas: Identificamos oportunidades de crecimiento y optimización operativa.

                </p>
              </div>
              <div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
                <p className="lg:text-[24px] mt-8 text-left  text-xl font-bold  leading-normal text-[#EFCE40]">
                Análisis de Datos y Visualización
                </p>
                <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
                Nuestro servicio de Análisis de Datos y Visualización se enfoca en ayudar a tu empresa a desentrañar los insights ocultos en tus datos. Ofrecemos:
Visualizaciones Interactivas: Creamos gráficos y dashboards que permiten comprender mejor los patrones y tendencias.
Identificación de KPIs: Definimos y medimos indicadores clave de rendimiento para tu negocio.
Informes Detallados: Proporcionamos informes que respaldan la toma de decisiones estratégicas.

                </p>
              </div>
              <div className="w-full md:w-3/5 px-10 md:px-10 md:ml-96 mt-20">
                <p className="lg:text-[24px] mt-8 text-left text-xl font-bold leading-normal text-[#EFCE40]">
                Consultoría en Datos y Machine Learning
                </p>
                <p className="text-white lg:text-[23px] mt-1 text-left text-2xl lg:leading-relaxed leading-normal">
                Nuestro servicio de Consultoría en Datos y Machine Learning está diseñado para ayudar a las empresas a sacar el máximo provecho de sus datos. <p className="mt-3 mb-2">Ofrecemos un enfoque integral que incluye:</p>
                </p>
                <p className="text-white lg:text-[23px] mt-5 text-left text-2xl lg:leading-relaxed leading-normal">
                Evaluación de Necesidades: Analizamos las necesidades específicas de tu empresa.

                </p>
                <p className="text-white lg:text-[23px] mt-5 text-left text-2xl lg:leading-relaxed leading-normal">
                Selección de Herramientas y Técnicas: Elegimos las mejores herramientas y técnicas de machine learning para tu caso.

                </p>
                <p className="text-white lg:text-[23px] mt-5 text-left text-2xl lg:leading-relaxed leading-normal">
                Implementación de Modelos: Desarrollamos e implementamos modelos personalizados para mejorar la eficiencia, optimizar procesos y tomar decisiones informadas.
                </p>
              </div>
            </div>
          </div>
        </>
      );
    };
    
export default Data;