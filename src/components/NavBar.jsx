import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-govermen.png";

const NavBar = () => {
const [isOpen, setIsOpen] = useState(false);
const location = useLocation();

const NavItems = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/Servicios" },
    { name: "Nosotros", path: "/Nosotros" },
    { name: "Contacto", path: "/Contacto" },
];

return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div className="flex items-center justify-between px-4 h-16 w-full max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to="/">
        <img
            src={logo}
            className="h-[2.5rem] md:h-[3rem] cursor-pointer"
            alt="Logo"
        />
        </Link>

        {/* Botón Menú Mobile */}
        <div className="md:hidden">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
        >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium font-gabarito">
        {NavItems.map((item) => (
            <Link
            key={item.name}
            to={item.path}
            className={`hover:text-tojo ${
                location.pathname === item.path ? "text-rojo" : ""
            }`}
            >
            {item.name}
            </Link>
        ))}
        </nav>
    </div>

    {/* Menú Mobile */}
    {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white space-y-2 shadow-md">
        {NavItems.map((item) => (
            <Link
            key={item.name}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={`block text-gray-700 hover:text-rojo font-medium ${
                location.pathname === item.path ? "text-rojo" : ""
            }`}
            >
            {item.name}
            </Link>
        ))}
        </div>
    )}
    </header>
);
};

export default NavBar;
