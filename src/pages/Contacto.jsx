import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import img1 from '../assets/img-Contacto.jpg';

const UbiPrincipal = { lat: -11.823387402158415, lng: -77.10523711485514 };
const UbiAdmin = { lat: -11.999923905734665, lng: -77.05825548226619 };

const namePrincipal = "Calle Los Tulipanes Mz P lote 8-B, Puente Piedra 15122";
const nameAdmin = "Av. Industrial N° 3233 - Urb. Industrial Panameric. Norte - Independencia, Lima.";


const Contacto =()=>{
    const form = useRef();
    const [loading, setLoaging] = useState(false);

    const [center, setCenter] = useState(UbiAdmin);
    const [activo, setActivo] = useState("admin");

    const [nombre, setNombre] = useState(nameAdmin);

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE,
    });

    const cambiarMapa = (tipo) => {
        if (tipo === "admin") {
        setCenter(UbiAdmin);
        setActivo("admin");
        } else {
        setCenter(UbiPrincipal);
        setActivo("principal");
        }
    };

    if (loadError) return <p>Error cargando el mapa 🧨</p>;
    if (!isLoaded) return <p>Cargando mapa...</p>;

    const enviarCorreo =(e)=>{
        e.preventDefault();
        setLoaging(true);

        emailjs.sendForm(
            'service_5yt9hg5',
            'template_h8niw3j',
            form.current,
            'QH-b85TXXiB73J7gM'
        )
        .then(() => {
            alert('formulario enviado');
            form.current.reset();
            setLoaging(false);
        })
        .catch((error)=> alert('Error al enviar '+ error.text));
    }

    return(
        <div className='bg-black mt-10'>
                <div className='flex  justify-center  '>
                    <div className='grid grid-cols-1 md:grid-cols-[60%_20%] py-[5rem] w-full justify-items-center '>
                        <div className='bg-white rounded-br-[35px] rounded-tl-[35px] '>
                                <form ref={form} onSubmit={enviarCorreo} className='p-[2rem] max-w-[600px] transition duration-300 ease-in hover:scale-105'>
                                    <h2 className='text-rojo text-[2rem] pb-[1rem] font-bold'>Contactanos</h2>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
                                        <input name='name' type='text' placeholder='Nombres' required className='border p-1'/>
                                        <input name='Lastname' type='text' placeholder='Apellidos' required className='border p-1'/>
                                        <input name='DNI' type='number' onInput={(e) => {e.target.value = e.target.value.slice(0,8);}} maxLength={8} placeholder='DNI' required className='border p-1 '/>
                                        <input name='Company' type='text' placeholder='Empresa' required className='border p-1'/>
                                        <input name='address' type='text' placeholder='Dirección/Pais' required className='border p-1'/>
                                        <input name='Phone' type='number' onInput={(e) => {e.target.value = e.target.value.slice(0,9);}} placeholder='Telefono' required className='border p-1'/>
                                        <input name='Email_id' type='email' placeholder='Correo' required className='border p-1'/>
                                        <input name='Service' type='text' placeholder='Servicio' required className='border p-1'/>
                                    </div>

                                    <textarea name='affair' type="text" placeholder='Asunto' className='border text-start w-full p-2 mt-4'></textarea>
                                    
                                    <div className='text-[8px] flex justify-around mt-1'>
                                        <input type="checkbox" required />
                                        <p className='-ml-4'>He leído y acepto los términos y condiciones de la{" "}<a href='#' className='text-blue-500 hover:underline'>"Politica de privacidad y protección de datos"</a> </p>
                                    </div>
                                    <button type='submit' disabled={loading}  className='mt-4 p-2 text-white bg-rojo rounded-[10px] w-[30%]'>{loading ? '...' : 'enviar'}</button>
                                </form>
                        </div>

                        <div className='bg-white w-full h-full rounded-tl-[35px] rounded-br-[35px] hidden md:block '>
                            <img src={img1} className='h-full object-cover object-left rounded-tl-[35px] rounded-br-[35px]'/>
                        </div>
                    </div>
                </div>

                <div className="relative w-full">
                    {/* Botones por encima del <hr> */}
                    <div className="relative z-10 flex justify-center gap-10">
                        <button
                        onClick={() => {cambiarMapa("admin"); setNombre(nameAdmin)}}
                        className={`text-white bg-black hover:bg-rojo rounded-t-md border-l border-t border-r border-white border-b-0 hover:border-b hover:border-white px-6 py-2 transition-all duration-300 ${
                            activo === "admin" ? "bg-rojo" : ""
                        }`}
                        >
                        OF. Administrativa
                        </button>
                        <button
                        onClick={() => {cambiarMapa("principal"); setNombre(namePrincipal)}}
                        className={`text-white bg-black hover:bg-rojo rounded-t-md border-l border-t border-r border-white border-b-0 hover:border-b hover:border-white px-6 py-2 transition-all duration-300 ${
                            activo === "principal" ? " bg-rojo" : ""
                        }`}
                        >
                        OF. Principal
                        </button>
                    </div>
                    {/* Línea debajo de los botones */}
                    <hr className="absolute top-full left-0 w-full border-t border-white z-0 mt-" />
                </div>



                
            <div className="pb-10 md:h-[40rem] flex flex-col items-center">
                <h2 className="text-white p-[2rem] tracking-wider text-[20px] md:p-8">Ubicación: {nombre}
                </h2>
                <div className="h-[20rem] md:h-[30rem] w-[80%] rounded-[40px] border-4 border-rojo overflow-hidden">
                    <GoogleMap
                    mapContainerClassName="w-full h-full"
                    center={center}
                    zoom={15}
                    >
                    <Marker position={center} />
                    </GoogleMap>
                </div>
            </div>
        </div>
    )
}
export default Contacto