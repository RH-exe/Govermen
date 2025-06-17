import React, { useState } from "react";
import {Link, useLocation} from "react-router-dom";
import {Menu, X} from 'lucide-react';
import logo from '../assets/logo-govermen.png';

const NavBar = ()=>{
    
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();


    const navItems =[
        {name:"Inicio", path:"/"},
        {name:"Servicios", path:"/Servicios"},
        {name:"Nosotros", path:"/Nosotros"},
        {name:"Contacto", path:"/Contacto"}
    ];

    return(
        <header className="fixed top-0 left-0 right-0 shadow-md z-50 bg-white shadow-md ">
            <div className="flex justify-between h-16 items-center px-4 ">
                <Link to="/">
                    <img src={logo} className="h-[3rem] cursor-pointer" alt="Logo"/>
                </Link>
                
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                        {isOpen ?< X size={24} /> : <Menu size={24}/>}
                    </button>
                </div>
                
                {/* Menu */}
                <nav className="hidden md:flex space-x-10 text-gray-700 font-medium font-gabarito">
                    {navItems.map((item) =>(
                        <Link key={item.name}
                        to={item.path}
                        className={`hover:text-tojo ${
                            location.pathname === item.path ? 'text-rojo' : ""
                        }`}>
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
            
            {isOpen && (
                <div className="md:hidden px-4 pb-4 pt-2 bg-white space-y-2 shadow-md">
                    {navItems.map((item)=>(
                        <Link key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block text-gray-700 hover:text-rojo font-medium ${
                            location.pathname=== item.path ? "text-rojo" : ""
                        }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}
export default NavBar;