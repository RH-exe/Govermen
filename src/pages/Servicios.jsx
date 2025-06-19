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
const contenedorImg = "flex justify-center items-center w-full max-w-[25rem] aspect-[4/3]";
const Img = "rounded-[20px] w-full h-full object-cover transition duration-300 ease-in hover:scale-110";
const contenedorTexto= "h-[3rem] p-[1rem]";
const texto ="text-center w-[17.5rem] text-[1.5rem] text-white";

const Servicios = () =>{
    return (
        <div className="bg-black mt-10">
            <div className="flex flex-col items-center h-[14rem] pt-[3rem]">
                <h2 className="titulo pb-[1rem]">Somos los mejores en servicios de seguridad</h2>
                <p className="subtitulo
                ">Protección profesional para tu empresa</p>
            </div>
            <div className="flex justify-center w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[8rem] ">
                    <div className={contenedor}>
                        <div className={contenedorImg}>
                            <img src={img1} className={Img}/>
                        </div>
                        <div className={contenedorTexto}>
                            <p className={texto}>Vigilancia privada armada y desarmada</p>
                        </div>
                    </div>
                    <div className={contenedor}>
                        <div className={contenedorImg}>
                            <img src={img2} className={Img}/>
                        </div>
                        <div className={contenedorTexto}>
                            <p className={texto}>Patrullaje Vehicular</p>
                        </div>
                    </div>
                    <div className={contenedor}>
                        <div className={contenedorImg}>
                            <img src={img3} className={Img}/>
                        </div>
                        <div className={contenedorTexto}>
                            <p className={texto}>Escolta y protección privada</p>
                        </div>
                    </div>
                    <div className={contenedor}>
                        <div className={contenedorImg}>
                            <img src={img4} className={Img}/>
                        </div>
                        <div className={contenedorTexto}>
                            <p className={texto}>Instalación y monitoreo de sistemas de CCTV</p>
                        </div>
                    </div>
                    <div className={contenedor}>
                        <div className={contenedorImg}>
                            <img src={img5} className={Img}/>
                        </div>
                        <div className={contenedorTexto}>
                            <p className={texto}>Control de accesos y verificación de identidad</p>
                        </div>
                    </div>
                    <div className={contenedor}>
                        <div className={contenedorImg}>
                            <img src={img6} className={Img}/>
                        </div>
                        <div className={contenedorTexto}>
                            <p className={texto}>Supervisión remota y respuesta rápida</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:h-[30rem] md:pt-20 ">
                <Clientes/>
            </div>
            <Contacto/>
        </div>
    )
}
export default Servicios;