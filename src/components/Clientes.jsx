import React from 'react';
import {motion} from 'framer-motion'

import img_eil from '../assets/eil.png';
import img_ecore from '../assets/ecore.png';
import img_sol from '../assets/Solandra.png';

const Img ="h-12 md:h-16 w-auto max-w-full my-4";

const clientes =()=>{
    return (
    <div className='bg-black md:h-[20rem] flex flex-col justify-center'>
        <div>
            <p className='font-bold text-white text-center text-[1.5rem] my-[2rem] text-figtree'>NUESTROS CLIENTES EMPRESARIALES</p>
        </div>
        <div className='flex flex-col lg:flex-row md:justify-between gap-y-10 md:gap-y-0 md:gap-x-4 md:mx-[8rem] items-center align-center'>
            <motion.img src={img_ecore} className={Img} initial={{scale:0.8, opacity:0}} whileInView={{scale:1, opacity:1 }} transition={{duration:1, ease:'easeOut', delay:0}} viewport={{once: true, amount:0.8}} ></motion.img>
            <motion.img src={img_eil} className={Img} initial={{scale:0.8, opacity:0}} whileInView={{scale:1, opacity:1 }} transition={{duration:1, ease:'easeOut', delay:0.5}} viewport={{once: true, amount:0.8}} ></motion.img>
            <motion.img src={img_sol} className={Img} initial={{scale:0.8, opacity:0}} whileInView={{scale:1, opacity:1 }} transition={{duration:1, ease:'easeOut', delay:1}} viewport={{once: true, amount:0.8}} ></motion.img>
        </div>
    </div>
    )
}

export default clientes;