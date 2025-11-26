import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../assets/img-carrusel-1.jpg';
import fondo1 from '../assets/fondo-carrusel-1.png';
import fondo2 from '../assets/fondo-carrusel-2.png';

const tituloCarrusel =" text-rojo w-full  mt-2 text-base md:text-5xl font-bold font-geist 2xl:text-8xl [text-shadow:_1px_1px_0_white,_-1px_-1px_0_white,_-1px_1px_0_white,_1px_-1px_0_white]";
const botonContacto ="bg-rojo text-xs md:text-lg h-6 hover:bg-red-950 text-white border border-white md:h-[2.5rem] 2xl:h-14 2xl:rounded-xl 2xl:text-2xl rounded-[8px] w-[50%] md:w-[40%] flex items-center justify-center mx-auto mt-4 md:mt-[2rem] font-gabarito";
const textoCarrusel ="mt-2 md:mt-8 text-[8px] md:text-2xl font-gabarito text-start 2xl:text-3xl";
const contenedorTexto ="text-white w-full h-[80%] md:w-[90%] md:h-[90%] md:text-left bg-black/80 rounded-xl md:pl-7 md:pt-7 md:pr-7 2xl:h-[90%] 2xl:p-20 2xl:pt-10";

const Carrusel = () => {
    const slides = [
        {
            titulo: "Protección y Vigilancia Eficiente",
            texto: 'Con Govermen, garantizamos la seguridad de tu empresa con nuestros servicios profesionales de guardias de seguridad y vigilancia, asegurando un entorno seguro y protegido para tus operaciones diarias.',
            imagen: img1,
            fondo: null,
        },
        {
            titulo: "Servicio de Vigilancia Privada",
            texto: "En Govermen, brindamos servicios de vigilancia privada con personal altamente capacitado, protocolos rigurosos y tecnología de punta para garantizar la seguridad integral de personas, instalaciones y bienes.",
            img: null,
            fondo: fondo1,
        },
        {
            titulo: "Protección personal o Resguardo",
            texto: "Ofrecemos servicios de protección y resguardo personal con agentes especializados, entrenados en evaluación de riesgos y respuesta táctica, garantizando la seguridad y tranquilidad de nuestros clientes en todo momento.",
            img: null,
            fondo: fondo2,
        }
    ]

    return (
        <div className="relative md:h-screen w-auto items-center text-center">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                speed={1500}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet custom-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
                }}
                modules={[Pagination, Autoplay]}
                className=' w-full h-1/3 md:h-5/6'
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-[50%_50%] px-6 md:px-20 w-full h-[15rem] md:h-full md:pt-10 items-center" style={{
                            backgroundImage: slide.fondo ? `url(${slide.fondo})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                        }}>
                            {index ===1 ?(
                                <>
                                <div>
                                    <div className={`w-full h-[90%] ${!slide.imagen ? 'hidden' : ''}`}>
                                        {slide.imagen && (
                                            <img src={slide.imagen} className="w-full h-full rounded-3xl center" />
                                        )}
                                    </div>
                                </div>
                                
                                <div className={contenedorTexto}>
                                    <h2 className={tituloCarrusel}>{slide.titulo}</h2>
                                    <p className={textoCarrusel}>{slide.texto}</p>
                                    <Link to='/contacto'>
                                        <button className={botonContacto}>Contáctanos</button>
                                    </Link>
                                </div>
                                </>
                            ):(
                                <>
                                <div className={contenedorTexto}>
                                    <h2 className={tituloCarrusel}>
                                        {slide.titulo}</h2>
                                    <p className={textoCarrusel}>{slide.texto}</p>
                                    <Link to='/contacto'>
                                        <button className={botonContacto}>Contáctanos</button>
                                    </Link>
                                </div>
                                
                                <div className={`w-full md:h-[90%] ${!slide.imagen ? 'hidden' : ''}`}>
                                    {slide.imagen && (
                                        <img src={slide.imagen} className="w-full h-full rounded-3xl object-cover border-none"/>
                                    )}
                                </div>
                                </>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            
        </div>
    )
}

export default Carrusel;