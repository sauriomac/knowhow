
import logoSendm from '../public/logo-sendmarc.png';
import Image from 'next/image';
import ImageMail from  '../public/mail.png';
const Sendmarc: React.FC = () => {
    return (
        <div className="container mx-auto px-4">

            <div className='mt-16 w-4/5 m-auto'>
                <a href="https://www.xcitium.com/">
                    <Image src={logoSendm} alt="Logo" className="mx-auto w-1/2 md:w-1/2 mt-32 mb-32" />
                </a>
                <p className='pt-0 pb-16 text-[40px] font-bold tracking-wider text-[#0172EA]'>
                    Soluciones y Servicios de Sendmarc Ofrecidos por RebelTech
                    Solutions
                </p>
                <p className='pt-8 text-[26px]'>
                    Como socio de <b>Sendmarc</b>, <label className='font-semibold text-[#0172EA]'>RebelTech Solutions</label> se especializa en protección avanzada de
                    correos electrónicos y dominios, utilizando la tecnología DMARC de Sendmarc. Este programa
                    permite a RebelTech Solutions implementar y manejar eficientemente DMARC, SPF, DKIM,
                    MTA-STS y BIMI, junto con otros productos de seguridad, para una protección más extensa.
                    Las soluciones de Sendmarc están diseñadas para contrarrestar fallos en el diseño del correo
                    electrónico que facilitan la suplantación de identidad y el phishing. Además, RebelTech
                    Solutions recibe capacitación y certificación de Sendmarc, asegurando una implementación y
                    mantenimiento efectivos de estas soluciones. Estos servicios garantizan la autenticidad de los
                    correos electrónicos, protegiendo a empleados, clientes, socios y proveedores de fraudes.
                </p>
            </div>
            <div>
                <Image src={ImageMail} alt="Logo" className="mx-auto w-2/3 md:w-2/4 mt-32 mb-32" />
            </div>
            <div className='w-4/5 mt-16 m-auto'>
                <p className='text-[40px] font-bold text-[#0172EA]'>
                    Acabe con la falsificación de correos electrónicos
                    y garantice la confianza en su marca
                </p>
                <p className='text-[26px]'>
                    Un fallo en el modo que el correo electrónico fue diseñado, permite a delincuentes insertar
                    cualquier dirección remitente en un correo electrónico falsificado. Esto es ampliamente
                    explotado por los delincuentes en la actualidad. Sendmarc mitiga este fallo mediante DMARC.
                </p>
            </div>
            <div className='flex pt-12 pb-12'>
                <div className="my-8 w-1/4 p-5">
                    <h2 className="text-xl font-bold mb-2 text-[28px] text-[#0172EA] leading-normal">XImplementación y Gestión de
                        DMARC</h2>
                    <p className="mb-4 text-[24px]">Protege los dominios de
                        ataques de suplantación de
                        identidad y phishing.
                        <br /> Beneficios para los Clientes de
                        RebelTech Solutions: Seguridad
                        mejorada para la comunicación
                        por correo electrónico y
                        protección contra el uso
                        indebido del dominio.</p>
                </div>

                <div className="my-8 w-1/4 p-5">
                    <h2 className="text-xl font-bold mb-2 text-[28px] text-[#0172EA] leading-normal">SPF y DKIM</h2>
                    <p className="mb-4 text-[24px]">Configuración y gestión de
                        los protocolos de
                        autenticación de correo
                        electrónico.
                        <br />AMejora de la autenticidad y la
                        integridad de los correos
                        electrónicos enviados desde
                        su dominio.</p>
                </div>

                <div className="my-8 w-1/4 p-5">
                    <h2 className="text-xl font-bold mb-2 text-[28px] text-[#0172EA] leading-normal">MTA-STS Y BIMI</h2>
                    <p className="mb-4 text-[24px]">Estándares para la seguridad
                        del transporte de correo y la
                        mejora de la identidad de
                        marca en los correos
                        electrónicos.
                        <br /> Mayor confianza en la
                        autenticidad de los correos
                        electrónicos y mejor
                        reconocimiento de marca.</p>
                </div>

                <div className="my-8 w-1/4 p-5">
                    <h2 className="text-xl font-bold mb-2 text-[28px] text-[#0172EA] leading-normal">Informes DMARC</h2>
                    <p className="mb-4 text-[24px]">Análisis e interpretación de la
                        actividad del correo
                        electrónico en todo el
                        dominio.
                        <br /> Visibilidad completa de las
                        fuentes legítimas y no
                        autorizadas que envían
                        correos electrónicos desde
                        su dominio.</p>
                </div>
            </div>
            <div>
                <div className=''>
                    <div className='w-full flex'>
                        <div className='w-2/4 pr-4'>
                            <h2 className='text-[30px] font-bold text-[#0172EA]'>PROTEJA EL NOMBRE DE SU MARCA</h2>
                            <p className='text-[28px]'>Sendmarc se asegura de que todos
                                los correos electrónicos recibidos que
                                llevan su nombre sean reales</p>
                        </div>
                        <div className='w-1/4'>
                            <h2 className='text-[28px] font-bold text-[#EFCE40]'>96 %</h2>
                            <p className='text-[24px]'>Los ataques de
                                phishing llegan por
                                correo electrónico</p>
                        </div>
                        <div className='w-1/4'>
                            <h2 className='text-[28px]'><label className='font-bold text-[#EFCE40]'>3.400</label> millones</h2>
                            <p className='text-[24px]'>Número de correos
                                electrónicos
                                maliciosos
                                enviados cada día</p>
                        </div>
                    </div>
                    <div className='w-full flex mt-4'>
                        <div className='w-2/4'></div>
                        <div className='w-1/4'>
                            <h2 className='text-[28px]'>
                                <label className='font-bold text-[#EFCE40]'> 10,5 </label>
                                billones de
                                <label className='font-bold text-[#EFCE40]'> dólares </label></h2>
                            <p className='text-[24px]'>Número de correos
                                electrónicos
                                maliciosos
                                enviados cada día</p></div>
                        <div className='w-1/4'></div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='flex pt-24'>
                    <div className='w-1/6'></div>
                    <div className='w-2/6 p-2'>
                        <h2 className='font-bold mb-2 text-[28px] text-[#EFCE40]'>Monitoreo Continuo</h2>
                        <p className="text-[24px]">Vigilancia constante de nuevas fuentes de envío de
                            correos electrónicos y de cualquier otro ataque.</p>
                    </div>
                    <div className='w-2/6 p-2'>
                        <h2 className='font-bold mb-2 text-[28px] text-[#EFCE40]'>Aumento de la Capacidad de Entrega</h2>
                        <p className="text-[24px]">Los servidores receptores confían en la
                            legitimidad de los correos electrónicos,
                            evitando su desviación a spam.</p>
                    </div>
                    <div className='w-1/6'></div>
                </div>
                <div className='flex py-8'>
                    <div className='w-1/6'></div>
                    <div className='w-2/6 p-2'>
                        <h2 className='font-bold mb-2 text-[28px] text-[#EFCE40]'>Protección contra la Falsificación de Correos
                            Electrónicos</h2>
                        <p className="text-[24px]">Bloqueo de correos electrónicos no autorizados,
                            interceptados o modificados.</p>
                    </div>
                    <div className='w-2/6 p-2'>
                        <h2 className='font-bold mb-2 text-[28px] text-[#EFCE40]'>Soporte y Capacitación</h2>
                        <p className="text-[24px]">Entrenamiento y certificación proporcionados
                            por el equipo calificado de Sendmarc.</p>
                    </div>
                    <div className='w-1/6'></div>
                </div>
            </div>
            <div className="my-8 w-4/5 m-auto pb-16">
                <p className="text-[24px] px-2 pt-16">
                    Estas soluciones de Sendmarc, ofrecidas a través de RebelTech Solutions, brindan una
                    protección integral para el ecosistema de correo electrónico de una organización, asegurando
                    autenticidad, integridad y confiabilidad en la comunicación por correo electrónico. Para obtener
                    más información sobre cómo estas soluciones pueden beneficiar a su negocio, visite la
                    página web de <a className="text-[#EFCE40] font-bold"  href="https://sendmarc.com/es/">Sendmarc</a>.
                </p>
            </div>
        </div>
    )
}
export default Sendmarc;