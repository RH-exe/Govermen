import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../assets/img-carrusel-1.jpg';
import img2 from '../assets/img-Contacto.jpg';
import img3 from '../assets/img-serv-3.jpg';

const Carrusel = () => {
    const slides = [
        {
            titulo: "Protección y Vigilancia Eficiente",
            texto: 'Con Govermen, garantizamos la seguridad de tu empresa con nuestros servicios profesionales de guardias de seguridad y vigilancia, asegurando un entorno seguro y protegido para tus operaciones diarias.',
            imagen: img1,
        },
        {
            titulo: "Respuesta Rápida",
            texto: "Nuestro equipo actúa inmediatamente ante emergencias.",
            img: img2,
        },
        {
            titulo: "Tecnología Avanzada",
            texto: "Vigilancia con lo último en tecnología.",
            img: img3,
        }
    ]

    return (
        <div className="relative w-[100%] items-center text-center">
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
                className='w-full lg:h-[30rem]'
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-1 lg:grid-cols-[45%_45%] gap-[10%] px-6 md:px-20 h-full">
                            <div className="text-white max-w-md text-center md:text-left">
                                <h2 className="text-white md:w-[35rem] text-[1.4rem] md:text-7xl font-bold font-geist">{slide.titulo}</h2>
                                <p className="mt-8 text-2xl font-gabarito text-start">{slide.texto}</p>
                            </div>
                            <div className='w-full h-[90%]'>
                                <img src={slide.imagen || slide.img} alt={slide.titulo} className="w-full h-full rounded-3xl object-cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            
        </div>
    )
}

export default Carrusel;