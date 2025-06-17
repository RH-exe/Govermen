import react from 'react'

import Accordion from '../components/Accordion.jsx'
import Clientes from '../components/Clientes.jsx';
import Contacto from '../components/Contacto.jsx';
import Carrusel from '../components/Carrusel.jsx';

import imagen_1 from '../assets/img-inicio-1.jpg';
import imagen_2 from '../assets/img-inicio-2.jpg';
import imagen_3 from '../assets/img-inicio-3.jpg';
import imagen_4 from '../assets/img-inicio-4.jpg';


const contenedor = "flex flex-grid items-center justify-center gap-[10rem] mb-[4rem]";
const borde_image ="border-4 border-rojo rounded-[15px] w-96";
const contenedor_texto= "flex flex-col w-[28rem] h-60  w-96 space-y-4 justify-center text-start";
const text_titulo ="text-white font-bold text-[35px] font-georema";
const texto ="text-white text-[13px font-geologica]";
const Home = ()=>{
    return (
    <div className=" bg-black max-w-auto">
      {/* body */}
      <div className='flex flex-col items-center justify-center p-10 space-y-4 mt-10'>
        <h1 className="titulo ">Servicios de Seguridad Confiables</h1>
        <p className='subtitulo'>Protección profesional para tu empresa</p>
      </div>
      
      {/* <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 sm:grid-cols 2 px-4'>
            <div>
              <img src={imagen_1} alt='Seguridad' className={borde_image}/>
            </div>
            <div className={contenedor_texto}>
              <p className='text-white font-bold text-[35px]'>Agente de Seguridad Capacitados</p>
              <p className='text-white text-[13px]'>Nuestros guardias de seguridad estan altamente capacitados para manejar cualqquier situación de riesgo. Garantizamos un servicio profesional y eficiente en todo momento.</p>
            </div>
        </div>
      </div> */}

      <div className={contenedor}>
        <div>
          <img src={imagen_1} alt='Seguridad' className={borde_image}/>
        </div>
        <div className={contenedor_texto}>
          <p className={text_titulo}>Agente de Seguridad Capacitados</p>
          <p className={texto}>Nuestros guardias de seguridad estan altamente capacitados para manejar cualqquier situación de riesgo. Garantizamos un servicio profesional y eficiente en todo momento.</p>
        </div>
      </div>
      <div className={contenedor}>
        <div className={contenedor_texto}>
          <p className={text_titulo}>Vigilancia 24/7</p>
          <p className={texto}>Ofrecemos servicios de vigilancia las 24 horas del día, los 7 días de la semana, asegurando que tu empresa esté siempre protegida. Nuestra tecnología avanzada nos permite monitorear eficazmente.</p>
        </div>
        <div>
          <img src={imagen_2} alt='seguridad' className={borde_image}/>
        </div>
      </div>
      <div className={contenedor}>
        <div>
          <img src={imagen_3} alt='seguridad' className={borde_image}/>
        </div>
        <div className={contenedor_texto}>
            <p className={text_titulo}>Respuesta Rápida</p>
            <p className={texto}>En caso de emergencia, nuestro equipo está preparado para responder rápidamente. Nuestra prioridad es la seguridad y tranquilidad de nuestros clientes.</p>
        </div>
      </div>
      <div className={contenedor}>
        <div className={contenedor_texto}>
          <p className={text_titulo}>Tecnología Avanzada</p>
          <p className={texto}>A diferencia de otras empresas, utilizamos tecnología de punta para mejorar la eficacia de nuestros servicios de vigilancia, proporcionando una capa adicional de seguridad.</p>
        </div>
        <div>
          <img src={imagen_4} alt='seguridad' className={borde_image}/>
        </div>
      </div>

      <div className='bg-rojo p-[4.5rem] flex items-center justify-center'>
        <div className='h-[3rem] w-[50rem] '>
          <p className='text-white text-[20px] font-georema text-center'>"Gracias a Govermen, nos sentimos más seguros y protegidos, lo que nos permite concentrarnos en nuestro negocio sin preocupaciones."</p>
        </div>
      </div>

      <div>
        <Contacto/>
      </div>

      <div>
          <Clientes/>
      </div>

      <div className='pb-[2rem]'>
        <Accordion/>
      </div>
    </div>
    )
}
export default Home;