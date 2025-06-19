import React from "react"
import {Link, useLocation} from "react-router-dom";

const Footer =() =>{

    const navItems =[
        {name:"Inicio", path:"/"},
        {name:"Servicios", path:"/Servicios"},
        {name:"Nosotros", path:"/Nosotros"},
        {name:"Contacto", path:"/Contacto"}
    ];

    const location = useLocation();

    return(
        <div className="bg-[#D9D9D9] h-[14rem] ">
            <div className=" flex justify-center space-x-[5rem] text-rojo align-center mb-6 py-[2rem] md:flex md:justify-center ">
                <div >
                    <footer className="hidden md:flex space-x-[6rem] text-gray-700 font-medium font-gabarito px-[6rem] ">
                        {navItems.map((item)=>(
                            <p key={item.name} className="hover:text-rojo cursor-default">
                                <Link to={item.path}
                                className={location.pathname === item.path ? 'active' : ''}>
                                {item.name}
                                </Link>
                            </p>
                        ))}
                    </footer>
                </div>
            </div>
            <p className="text-center py-[2rem]" >© All rights reserved.</p>
        </div>
    )
}

export default Footer;