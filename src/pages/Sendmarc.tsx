
import logoSendm from '../public/logo-sendmarc.png';
import Image from 'next/image';
import ImageMail from  '../public/mail.png';
const Sendmarc: React.FC = () => {
    return (
        <>
        <div className="container mx-auto px-4">
          <div className="mt-16 w-full md:w-4/5 m-auto">
            <a href="https://www.xcitium.com/">
              <Image src={logoSendm} alt="Logo" className="mx-auto w-2/3 md:w-1/2 mt-32 mb-32" />
            </a>
            <p className="pt-0 pb-16 text-2xl md:text-3xl font-bold tracking-wider text-[#0172EA] text-center">
              Soluciones y Servicios de Sendmarc Ofrecidos por RebelTech Solutions
            </p>
            <p className="text-white pt-8 text-base md:text-lg lg:text-xl text-center md:text-left lg:leading-relaxed">
              Como socio de <b>Sendmarc</b>, <span className="font-semibold text-[#0172EA]">RebelTech Solutions</span> se especializa en protección avanzada de correos electrónicos y dominios, utilizando la tecnología DMARC de Sendmarc. Este programa permite a RebelTech Solutions implementar y manejar eficientemente DMARC, SPF, DKIM, MTA-STS y BIMI, junto con otros productos de seguridad, para una protección más extensa. Las soluciones de Sendmarc están diseñadas para contrarrestar fallos en el diseño del correo electrónico que facilitan la suplantación de identidad y el phishing. Además, RebelTech Solutions recibe capacitación y certificación de Sendmarc, asegurando una implementación y mantenimiento efectivos de estas soluciones. Estos servicios garantizan la autenticidad de los correos electrónicos, protegiendo a empleados, clientes, socios y proveedores de fraudes.
            </p>
          </div>
          <div>
            <Image src={ImageMail} alt="Logo" className="mx-auto w-full md:w-2/3 lg:w-2/4 mt-32 mb-32" />
          </div>
          <div className="w-full md:w-4/5 mt-16 m-auto">
            <p className="text-2xl md:text-3xl font-bold text-[#0172EA] text-center md:text-left lg:leading-relaxed">
              Acabe con la falsificación de correos electrónicos y garantice la confianza en su marca
            </p>
            <p className="text-white  text-base md:text-lg lg:text-xl text-center md:text-left lg:leading-relaxed">
              Un fallo en el modo que el correo electrónico fue diseñado, permite a delincuentes insertar cualquier dirección remitente en un correo electrónico falsificado. Esto es ampliamente explotado por los delincuentes en la actualidad. Sendmarc mitiga este fallo mediante DMARC.
            </p>
          </div>
          <div className="flex flex-col md:flex-row pt-12 pb-12">
            <div className="my-8 w-full md:w-1/4 p-5">
              <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 text-[#0172EA] leading-normal text-center md:text-left">Implementación y Gestión de DMARC</h2>
              <p className="text-white text-base md:text-lg lg:text-xl mb-4 text-center md:text-left">
                Protege los dominios de ataques de suplantación de identidad y phishing.
                <br />
                Beneficios para los Clientes de RebelTech Solutions: Seguridad mejorada para la comunicación por correo electrónico y protección contra el uso indebido del dominio.
              </p>
            </div>
            <div className="my-8 w-full md:w-1/4 p-5">
              <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 text-[#0172EA] leading-normal text-center md:text-left">SPF y DKIM</h2>
              <p className="text-white  text-base md:text-lg lg:text-xl mb-4 text-center md:text-left">
                Configuración y gestión de los protocolos de autenticación de correo electrónico.
                <br />
                Mejora de la autenticidad y la integridad de los correos electrónicos enviados desde su dominio.
              </p>
            </div>
            <div className="my-8 w-full md:w-1/4 p-5">
              <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 text-[#0172EA] leading-normal text-center md:text-left">MTA-STS Y BIMI</h2>
              <p className="text-white text-base md:text-lg lg:text-xl mb-4 text-center md:text-left">
                Estándares para la seguridad del transporte de correo y la mejora de la identidad de marca en los correos electrónicos.
                <br />
                Mayor confianza en la autenticidad de los correos electrónicos y mejor reconocimiento de marca.
              </p>
            </div>
            <div className="my-8 w-full md:w-1/4 p-5">
              <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 text-[#0172EA] leading-normal text-center md:text-left">Informes DMARC</h2>
              <p className="text-white text-base md:text-lg lg:text-xl mb-4 text-center md:text-left">
                Análisis e interpretación de la actividad del correo electrónico en todo el dominio.
                <br />
                Visibilidad completa de las fuentes legítimas y no autorizadas que envían correos electrónicos desde su dominio.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/4 pr-4 mb-8 lg:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0172EA] text-center lg:text-left">PROTEJA EL NOMBRE DE SU MARCA</h2>
                <p className="text-white text-lg md:text-xl lg:text-2xl text-center lg:text-left">
                  Sendmarc se asegura de que todos los correos electrónicos recibidos que llevan su nombre sean reales.
                </p>
              </div>
              <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-[#EFCE40] text-center lg:text-left">96 %</h2>
                <p className="text-white text-lg md:text-xl lg:text-2xl text-center lg:text-left">
                  Los ataques de phishing llegan por correo electrónico.
                </p>
              </div>
              <div className="w-full lg:w-1/4">
                <h2 className="text-white text-2xl md:text-3xl text-center lg:text-left">
                  <span className="font-bold text-[#EFCE40]">3.400</span> millones
                </h2>
                <p className="text-white text-lg md:text-xl lg:text-2xl text-center lg:text-left">
                  Número de correos electrónicos maliciosos enviados cada día.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row mt-4">
              <div className="w-full lg:w-2/4 mb-8 lg:mb-0"></div>
              <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
                <h2 className="text-2xl md:text-3xl text-center lg:text-left">
                  <span className="font-bold text-[#EFCE40]">10,5</span> billones de
                  <span className="font-bold text-[#EFCE40]"> dólares </span>
                </h2>
                <p className="text-white text-lg md:text-xl lg:text-2xl text-center lg:text-left">
                  Número de correos electrónicos maliciosos enviados cada día.
                </p>
              </div>
              <div className="w-full lg:w-1/4"></div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row pt-24">
            <div className="w-full lg:w-1/6 mb-8 lg:mb-0"></div>
            <div className="w-full lg:w-2/6 p-2 mb-8 lg:mb-0">
              <h2 className="font-bold mb-2 text-xl md:text-2xl lg:text-2xl text-[#EFCE40] text-center lg:text-left">Monitoreo Continuo</h2>
              <p className="text-white text-lg md:text-xl lg:text-2xl text-center lg:text-left">
                Vigilancia constante de nuevas fuentes de envío de correos electrónicos y de cualquier otro ataque.
              </p>
            </div>
            <div className="w-full lg:w-2/6 p-2 mb-8 lg:mb-0">
              <h2 className="font-bold mb-2 text-xl md:text-2xl lg:text-2xl text-[#EFCE40] text-center lg:text-left">Aumento de la Capacidad de Entrega</h2>
              <p className="text-white text-lg md:text-xl lg:text-2xl text-center lg:text-left">
                Los servidores receptores confían en la legitimidad de los correos electrónicos, evitando su desviación a spam.
              </p>
            </div>
            <div className="w-full lg:w-1/6"></div>
          </div>
          <div className="flex flex-col lg:flex-row py-8">
            <div className="w-full lg:w-1/6 mb-8 lg:mb-0"></div>
            <div className="w-full lg:w-2/6 p-2 mb-8 lg:mb-0">
              <h2 className="font-bold mb-2 text-xl md:text-2xl lg:text-2xl text-[#EFCE40] text-center lg:text-left">Protección contra la Falsificación de Correos Electrónicos</h2>
              <p className="text-white text-lg md:text-xl lg:text-2xl text-center lg:text-left">
                Bloqueo de correos electrónicos no autorizados, interceptados o modificados.
              </p>
            </div>
            <div className="w-full lg:w-2/6 p-2 mb-8 lg:mb-0">
              <h2 className="font-bold mb-2 text-xl md:text-2xl lg:text-2xl text-[#EFCE40] text-center lg:text-left">Soporte y Capacitación</h2>
              <p className="text-white text-lg md:text-xl lg:text-2xl text-center lg:text-left">
                Entrenamiento y certificación proporcionados por el equipo calificado de Sendmarc.
              </p>
            </div>
            <div className="w-full lg:w-1/6"></div>
          </div>
          <div className="my-8 w-full md:w-4/5 m-auto pb-16">
            <p className="text-white text-base md:text-lg lg:text-xl px-2 pt-16 text-center md:text-left lg:leading-relaxed">
              Estas soluciones de Sendmarc, ofrecidas a través de RebelTech Solutions, brindan una protección integral para el ecosistema de correo electrónico de una organización, asegurando autenticidad, integridad y confiabilidad en la comunicación por correo electrónico. Para obtener más información sobre cómo estas soluciones pueden beneficiar a su negocio, visite la página web de <a className="text-[#EFCE40] font-bold" href="https://sendmarc.com/es/">Sendmarc</a>.
            </p>
          </div>
        </div>
      </>
      
    )
}
export default Sendmarc;