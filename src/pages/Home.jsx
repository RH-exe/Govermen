import react from 'react';
import {motion} from 'framer-motion';

import Accordion from '../components/Accordion.jsx'
import Clientes from '../components/Clientes.jsx';
import Contacto from '../components/Contacto.jsx';
import Carrusel from '../components/Carrusel.jsx';

import imagen_1 from '../assets/img-inicio-1.jpg';
import imagen_2 from '../assets/img-inicio-2.jpg';
import imagen_3 from '../assets/img-inicio-3.jpg';
import imagen_4 from '../assets/img-inicio-4.jpg';


const contenedor = "grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 place-items-center gap-8 md:gap-16 py-4 md:py-12";
const borde_image ="border-4 border-rojo rounded-[15px] w-72 md:w-96 2xl:w-[35rem]";
const contenedor_texto= "flex flex-col items-center text-center max-w-md space-y-4" ;
const text_titulo ="text-white font-bold text-[1.25rem] md:text-3xl 2xl:text-4xl md:text-3xl leading-tight";
const texto ="text-white text-[13px] leading-relaxed text-start 2xl:text-lg";

const servicio = [
  {
    titulo : 'Guardias de Seguridad Capacitados',
    texto: 'Nuestros guardias de seguridad están altamente capacitados para manejar cualquier situación de riesgo. Garantizamos un servicio profesional y eficiente en todo momento.',
    imagen : imagen_1,
  },

  {
    titulo: 'Vigilancia 24/7',
    texto: 'Ofrecemos servicios de vigilancia las 24 horas del día, los 7 días de la semana, asegurando que tu empresa esté siempre protegida. Nuestra tecnología avanzada nos permite monitorear eficazmente.',
    imagen: imagen_2,
  },

  {
    titulo: 'Respuesta Rápida',
    texto: 'En caso de emergencia, nuestro equipo está preparado para responder rápidamente. Nuestra prioridad es la seguridad y tranquilidad de nuestros clientes.',
    imagen: imagen_3,
  },

  {
    titulo: 'Tecnología Avanzada',
    texto: 'A diferencia de otras empresas, utilizamos tecnología de punta para mejorar la eficacia de nuestros servicios de vigilancia, proporcionando una capa adicional de seguridad.',
    imagen: imagen_4,
  },
]

const Home = ()=>{
    return (

    <div className=" bg-black max-w-auto overflow-hidden">
      <div className='mt-16 '>
        <Carrusel/>
      </div>
      {/* body */}
      <div className='flex flex-col items-center justify-center p-10 space-y-4'>
        <h1 className="text-4 titulo ">Servicios de Seguridad Confiables</h1>
        <p className='subtitulo'>Protección profesional para tu empresa</p>
      </div>


      {servicio.map((servicio, index) =>
      <div key={index}>
        {index %2 ===0 ? (
          <motion.div initial={{x:300, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:2, ease:"easeInOut"}} viewport={{once:true, amount:0.2}} className={contenedor}>
              <div >
                <img src={servicio.imagen} className={borde_image} />
              </div>

              <div className={contenedor_texto}>
                <p className={text_titulo}>{servicio.titulo}</p>
                <p className={texto}>{servicio.texto}</p>
              </div>
          </motion.div>
        ) : (
          <motion.div initial={{x:-300, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:2, ease:"easeOut"}} viewport={{once:true, amount:0.2}} className={contenedor}>
            <div className={contenedor_texto}>
              <p className={text_titulo}>{servicio.titulo}</p>
              <p className={texto}>{servicio.texto}</p>
            </div>

            <div >
              <img src={servicio.imagen} className={borde_image} />
            </div>
            
          </motion.div>
        )}
      </div>

      
      )}

      <div className='bg-rojo md:p-[4.5rem] flex items-center justify-center aling-center'>
        <div className='h-auto p-4 w-[50rem] '>
          <p className='text-white text-[20px] font-georema text-center'>"Gracias a Govermen, nos sentimos más seguros y protegidos, lo que nos permite concentrarnos en nuestro negocio sin preocupaciones."</p>
        </div>
      </div>

      <div >
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