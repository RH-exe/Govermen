import React from "react";

import Clientes from "../components/Clientes.jsx";
import Contacto from "../components/Contacto.jsx";

import img1 from "../assets/img-serv-1.jpg";
import img2 from "../assets/img-serv-2.jpg";
import img3 from "../assets/img-serv-3.jpg";
import img4 from "../assets/img-serv-4.jpg";
import img5 from "../assets/img-serv-5.jpg";
import img6 from "../assets/img-serv-6.jpg";

const contenedor ="flex flex-col items-center justify-center";
const contenedorImg = "flex justify-center items-center w-full w-[30rem] xl:max-w-[50rem] aspect-[4/3]";
const Img = "rounded-[20px] w-full h-full object-cover transition duration-300 ease-in hover:scale-110";
const contenedorTexto= "h-[3rem] 2xl:h-[8rem] p-[1rem] ";
const texto ="text-center 2xl:text-start w-[17.5rem] 2xl:w-auto text-2xl text-white 2xl:text-3xl 2xl:uppercase";

const service = [
    {
        imagen: img1,
        texto:'Vigilancia privada armada y desarmada',
    },
    {
        imagen: img2,
        texto: 'Patrullaje Vehicular',
    },
    {
        imagen: img3,
        texto: 'Escolta y protección privada',
    },
    {
        imagen: img4,
        texto: 'Instalación y monitoreo de sistemas de CCTV',
    },
    {
        imagen: img5,
        texto: 'Control de accesos y verificación de identidad',
    },
    {
        imagen: img6,
        texto: 'Supervisión remota y respuesta rápida',
    },
]
const Servicios=()=>{
    return (
        <div className="bg-black mt-10">
            <div className="flex flex-col items-center md:h-[14rem] pt-[3rem]">
                <h2 className="titulo pb-[1rem]">Somos los mejores en servicios de seguridad</h2>
                <p className="subtitulo
                ">Protección profesional para tu empresa</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-40 px-36 pt-20 place-items-center">
                {service.map((service, index) =>
                    <div className={contenedor} key={index}>
                        <div className={contenedorImg}>
                            <img src={service.imagen} className={Img} />
                        </div>

                        <div className={contenedorTexto}>
                            <p className={texto}>{service.texto}</p>
                        </div>
                    </div>
                )}
            </div>
            

            <div className="pt-20 pb-10 md:h-[30rem] md:pt-20 ">
                <Clientes/>
            </div>
            <Contacto/>
        </div>
    )
}
export default Servicios;