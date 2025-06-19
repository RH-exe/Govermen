import React from "react"
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

import Clientes from "../components/Clientes.jsx";
import imagen from "../assets/img-Nosotros.jpg";
import logo from "../assets/logoSucamec.jpg";
import img1 from '../assets/img-Valores.jpg';
import img2 from '../assets/img-Proposito.jpg';
import '../styles/Nosotros.css';


const boton="bg-rojo text-white h-[2.5rem] rounded-[8px] w-[50%] md:w-[23%] flex items-center justify-center mx-auto mt-[2rem] font-gabarito";
const titulo ="text-center text-white text-[2.5rem] md:text-[4rem] font-bold font-geist py-8";

const Nosotros =() =>{
    return (
        <div className="bg-black mt-10">
            <div className="h-[20rem] w-auto md:h-[45rem] flex justify-center items-center">
                <img src={imagen} className="h-full w-full object-cover object-top" />
            </div>

            <div className=" p-[4rem] px-[25%]">
                <motion.h2 className={titulo} initial={{y:60, opacity:0}} whileInView={{opacity:1, y:1}} transition={{duration:1, ease:'easeOut'}} viewport={{once:true, amount:1}} >¿Quiénes Somos?</motion.h2>
                <motion.p initial={{x:0.5, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:1.5, ease:'easeOut'}} viewport={{once:true, amount:0.8}}  className=" text-white text-[1rem] leading-loose text-gabarito text-start">En Govermen, somos una empresa especializada en seguridad integral, resguardo y vigilancia, comprometida con la protección de personas, bienes e instalaciones.<br/>
                    Nuestra misión es brindar tranquilidad, confianza y eficiencia, a través de soluciones personalizadas que se adaptan a las necesidades de cada cliente.<br/>
                    Contamos con un equipo altamente capacitado en seguridad preventiva, vigilancia física, control de accesos, monitoreo y patrullaje, preparado para actuar con profesionalismo y rapidez ante cualquier eventualidad.
                </motion.p>
                <Link to="/Contacto">
                    <button className={boton}>Contáctanos</button>
                </Link>
            </div>

            <h2 className={titulo}>Valores Corporativos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 px-[4rem] gap-12">
                <div className="flex items-center ">
                    <ul className="text-white text-center md:text-start md:text-[2rem] text-[1.5rem] font-semibold md:font-bold leading-[5rem] w-[30rem] font-georama">
                        <li>Compromiso</li>
                        <li>Integridad</li>
                        <li>Confidencialidad</li>
                        <li>Adaptabilidad</li>
                        <li>profesionalismo</li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <div className="md:w-[30rem] md:h-[30rem] w-[15rem] h-auto flex justify-center items-center">
                        <img src={img1} className=" w-full h-full rounded-[20px]" />
                    </div>
                </div>
            </div>

            <div>
                <h2 className={titulo}>Nuestro Proposito</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 p-[4rem] gap-12">
                    <div className="flex justify-center">
                        <div className="md:w-[30rem] md:h-[30rem] w-[15rem] h-auto grid grid-flow-row">
                            <img src={img2} className="w-full h-full object-cover rounded-[20px]" />
                        </div>
                    </div>

                    <div className="lg:w-[30rem] w-[20] w- flex justify-center items-center">
                        <span className="text-white text-start md:text-[20px] text-5 leading-[3rem] font-gabarito hidden lg:inline">En Govermen, nuestro propósito es proteger los bienes y la tranquilidad de nuestros clientes, ofreciendo servicios de seguridad confiables, profesionales y adaptados a cada necesidad.<br/>
                        Trabajamos día a día para construir entornos más seguros, donde las personas puedan desarrollarse con confianza, sabiendo que cuentan con un equipo vigilante, comprometido y capacitado.
                        </span>
                        <span className="text-white text-start md:text-[20px] text-5 leading-[3rem] font-gabarito block lg:hidden">En Govermen, nuestro propósito es proteger los bienes y la tranquilidad de nuestros clientes, ofreciendo servicios de seguridad confiables, profesionales y adaptados a cada necesidad.<br/>
                        equipo vigilante, comprometido y capacitado.
                        </span>
                    </div>

                </div>
            </div>

            <div className="fondo1 py-[2rem]">
                <div className="fondo2 ">
                    <p className="order-2 md:order-none stroke-text md:text-white uppercase font-bold text-rojo text-[3rem] py-4 md:py-[3rem] [word-spacing:10px] ">
                        autorización de sucamec
                    </p>
                    <div className="grid md:grid-cols-[30%_60%] grid-cols-1 md:h-[25rem] gap-[10%] mb-[4rem]">
                        <div className="bg-white rounded-r-[40px] w-full h-full flex justify-center md:flex-self--end ">
                            <img src={logo} className="rounded-r-[40px]" />
                        </div>
                        <div className="bg-white rounded-l-[40px] relative z-10 w-full h-full flex justify-start items-center">
                                <p className="text-[20px] text-left [word-spacing:6px] md:font-bold leading-[2rem] p-[2rem] font-gabarito">
                                GOVERMEN S.A.C. cuenta con autorización oficial de SUCAMEC (Expediente N.º 202300306385) para prestar
                                servicios de vigilancia privada con armas de fuego en Lima y Callao, conforme al Decreto Legislativo N.° 1213, con
                                vigencia hasta el 17 de octubre de 2028. La empresa cumple con todos los requisitos legales y de seguridad exigidos por la normativa vigente.
                                </p>
                                <p>

                                </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:h-[30rem] md:pt-20">
                <Clientes/>
            </div>
        </div>
    )
}
export default Nosotros