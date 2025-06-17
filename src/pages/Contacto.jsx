import React from 'react';
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";


import img1 from '../assets/img-Contacto.jpg';

const center = {
    lat: -11.99992, // Ejemplo: Lima, Perú
    lng: -77.05826,
};


const Contacto =()=>{
    return(
        <div className='bg-black mt-10'>
                <div className='flex  justify-center  '>
                    <div className='grid grid-cols-1 md:grid-cols-[60%_20%] py-[5rem] w-full justify-items-center w-[80%]'>
                        <div className='bg-white rounded-br-[35px] rounded-tl-[35px] '>
                                <div className='p-[2rem] max-w-[600px]'>
                                    <h2 className='text-rojo text-[2rem] pb-[1rem] font-bold'>Contactanos</h2>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
                                        <input type='text' placeholder='Nombres' className='border p-1'/>
                                        <input type='text' placeholder='Apellidos' className='border p-1'/>
                                        <input type='text' placeholder='RUC' className='border p-1'/>
                                        <input type='text' placeholder='Empresa' className='border p-1'/>
                                        <input type='text' placeholder='Dirección/Pais' className='border p-1'/>
                                        <input type='text' placeholder='Telefono' className='border p-1'/>
                                        <input type='text' placeholder='Correo' className='border p-1'/>
                                        <input type='text' placeholder='Servicio' className='border p-1'/>
                                    </div>

                                    <textarea type="text" placeholder='Asunto' className='border text-start w-full p-2 mt-4'></textarea>
                                    
                                    <div className='text-[8px] flex justify-around mt-1'>
                                        <input type="checkbox" />
                                        <p className='-ml-4'>He leído y acepto los términos y condiciones de la{" "}<a href='#' className='text-blue-500 underline'>"Politica de privacidad y protección de datos"</a> </p>
                                    </div>
                                    <button className='mt-4 p-2 text-white bg-rojo rounded-[10px] w-[30%]'>Enviar</button>
                                </div>
                        </div>

                        <div className='bg-white w-full h-full rounded-tl-[35px] rounded-br-[35px] '>
                            <img src={img1} className='h-full object-cover object-left rounded-tl-[35px] rounded-br-[35px]'/>
                        </div>
                    </div>
                </div>

                
            <div className='h-[40rem] flex flex-col items-center'>
                <h2 className='text-white p-[1rem] tracking-wider text-[20px]'>Ubicacion: Av. Industrial N° 3233 - Urb. Industrial Panameric. Norte - Independencia, Lima.</h2>
                <div className='h-[30rem] w-[80%] rounded-[40px] border-4 border-rojo overflow-hidden '>
                    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE}>
                        <GoogleMap mapContainerClassName="w-full h-full "
                            center={center}
                            zoom={15}
                        ><Marker position={center}/>
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    )
}
export default Contacto