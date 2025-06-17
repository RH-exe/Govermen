import React from 'react';

import img_eil from '../assets/eil.png';
import img_ecore from '../assets/ecore.png';
import img_sol from '../assets/Solandra.png';

const clientes =()=>{
    return (
    <div className='bg-black h-[30rem] flex flex-col justify-center '>
        <div>
            <p className='text-white text-center text-[1.5rem] my-[3rem] font-figtree'>NUESTROS CLIENTES EMPRESARIALES</p>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-y-6 md:gap-y-0 md:gap-x-12 mx-4 md:mx-[5rem] items-center align-center'>
            <img src={img_ecore} className='h-16 w-auto max-w-full'></img>
            <img src={img_eil} className='h-16 w-auto max-w-full'></img>
            <img src={img_sol} className='h-16 w-auto max-w-full'></img>
        </div>
    </div>
    )
}

export default clientes;