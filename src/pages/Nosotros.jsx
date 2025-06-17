import React from "react"

import {Link} from 'react-router-dom';

import Clientes from "../components/Clientes.jsx";
import imagen from "../assets/img-Nosotros.jpg";
import logo from "../assets/logoSucamec.jpg";
import img1 from '../assets/img-Valores.jpg';
import img2 from '../assets/img-Proposito.jpg';
import '../styles/Nosotros.css';


const boton="bg-rojo text-white h-[2.5rem] rounded-[8px] w-[50%] md:w-[23%] flex items-center justify-center mx-auto mt-[2rem] font-gabarito";
const titulo ="text-center text-white text-[3rem] md:text-[4rem] font-bold font-geist py-8";

const Nosotros =() =>{
    return (
        <div className="bg-black">
            <div className="h-[20rem] w-auto md:h-[45rem] flex justify-center items-center">
                <img src={imagen} className="h-full w-full object-cover object-top" />
            </div>

            <div className=" p-[4rem] px-[25%]">
                <h2 className={titulo}>¿Quiénes Somos?</h2>
                <p className="text-white text-left text-[1rem] leading-loose text-gabarito text-start">En Govermen, somos una empresa especializada en seguridad integral, resguardo y vigilancia, comprometida con la protección de personas, bienes e instalaciones.<br/>
                    Nuestra misión es brindar tranquilidad, confianza y eficiencia, a través de soluciones personalizadas que se adaptan a las necesidades de cada cliente.<br/>
                    Contamos con un equipo altamente capacitado en seguridad preventiva, vigilancia física, control de accesos, monitoreo y patrullaje, preparado para actuar con profesionalismo y rapidez ante cualquier eventualidad.
                </p>
                <Link to="/Contacto">
                    <button className={boton}>Contáctanos</button>
                </Link>
            </div>

            <h2 className={titulo}>Valores Corporativos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 px-[4rem] gap-12">
                <div className="flex items-center ">
                    <ul className="text-white text-start md:text-[2rem] text-[1.5rem] font-bold leading-[5rem] w-[30rem] font-georama">
                        <li>Compromiso</li>
                        <li>Integridad</li>
                        <li>Confidencialidad</li>
                        <li>Adaptabilidad</li>
                        <li>profesionalismo</li>
                    </ul>
                </div>
                <div className="">
                    <div className="md:w-[30rem] md:h-[30rem] w-[20rem] h-[20rem] flex justify-center items-center">
                        <img src={img1} className="  md:w-full md:h-full rounded-[20px]" />
                    </div>
                </div>
            </div>

            <div>
                <h2 className={titulo}>Nuestro Proposito</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 px-[4rem] gap-12">
                    <div className="md:w-[30rem] md:h-[30rem] w-[20rem] h-[20rem]]">
                        <img src={img2} className="w-full h-full object-cover rounded-[20px]"/>
                    </div>

                    <div className="md:w-[30rem] w-[20] w- flex justify-center items-center">
                        <p className="text-white text-start md:text-[20px] text-6 leading-[3rem] font-gabarito">En Govermen, nuestro propósito es proteger los bienes y la tranquilidad de nuestros clientes, ofreciendo servicios de seguridad confiables, profesionales y adaptados a cada necesidad.<br/>
                        Trabajamos día a día para construir entornos más seguros, donde las personas puedan desarrollarse con confianza, sabiendo que cuentan con un equipo vigilante, comprometido y capacitado.
                        </p>
                    </div>

                </div>
            </div>

            <div className="fondo1 py-[2rem]">
                <div className="fondo2 ">
                    <p className="order-2 md:order-none stroke-text md:text-white uppercase font-bold text-rojo text-[3rem] py-4 md:py-[3rem] [word-spacing:10px] ">
                        autorización de sucamec
                    </p>
                    <div className="grid md:grid-cols-[30%_60%] grid-cols-1 md:h-[25rem] gap-[10%] mb-[4rem]">
                        <div className=" bg-white rounded-r-[40px] w-full h-full flex justify-center md:flex-self--end ">
                            <img src={logo} className="rounded-r-[40px]" />
                        </div>
                        <div className="order-3 md:order-none bg-white rounded-l-[40px] relative z-10 w-full h-full flex justify-start items-center">
                                <p className="text-[20px] text-left [word-spacing:6px] font-bold leading-[2rem] p-[2rem] font-gabarito">
                                GOVERMEN S.A.C. cuenta con autorización oficial de<br/> SUCAMEC (Expediente N.º 202300306385) para prestar<br/>
                                servicios de vigilancia privada con armas de fuego en Lima<br/> y Callao, conforme al Decreto Legislativo N.° 1213, con<br/>
                                vigencia hasta el 17 de octubre de 2028.<br/> La empresa cumple con todos los requisitos legales y de<br/> seguridad exigidos por la normativa vigente.
                                </p>
                        </div>
                    </div>
                </div>
            </div>

            <Clientes/>
        </div>
    )
}
export default Nosotros