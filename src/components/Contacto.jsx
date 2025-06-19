import React from 'react';
import {motion} from 'framer-motion'

import { Link } from 'react-router-dom';

import '../styles/Home.css';

const Contacto =()=>{
    return(
    <div className='fondo-opaco h-[30rem] flex items-center justify-center text-center'>
        <motion.div className=" fondo-opaco-contenido" initial={{scale:0.8, opacity:0}} whileInView={{scale:1, opacity:1 }} transition={{duration:1, ease:'easeOut'}} viewport={{once: true, amount:0.8}}>
            <p className='text-white font-semibold text-xl md:text-[3rem] text-center font-georema'> Asegura tu empresa con Govermen</p>
            <div className='flex flex-col md:w-[40rem] '>
                <p className='text-white md:text-regular text-center py-[2rem] font-geologica'>“Govermen es una excelente empresa de seguridad. Recomendaría sus servicios a cualquier empresa que busque mejorar su seguridad.”</p>
            </div>
            <Link to="/Contacto">
                <button className='bg-rojo text-white h-[3rem] rounded-[8px] w-[30%] flex font-gabarito items-center justify-center mx-auto'>Contáctanos</button>
            </Link>
        </motion.div>
    </div>
    )
}

export default Contacto;