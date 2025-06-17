import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Home.css';

const Contacto =()=>{
    return(
    <div className='fondo-opaco h-[30rem] flex items-center justify-center text-center'>
        <div className=" fondo-opaco-contenido">
            <p className='text-white font-semibold text-[3rem] text-center font-georema'> Asegura tu empresa con Govermen</p>
            <div className='flex flex-col  w-[40rem] '>
                <p className='text-white text-regular text-center py-[2rem] font-geologica'>“Govermen es una excelente empresa de seguridad. Recomendaría sus servicios a cualquier empresa que busque mejorar su seguridad.”</p>
            </div>
            <Link to="/Contacto">
                <button className='bg-rojo text-white h-[3rem] rounded-[8px] w-[20%] flex font-gabarito items-center justify-center mx-auto'>Contáctanos</button>
            </Link>
        </div>
    </div>
    )
}

export default Contacto;