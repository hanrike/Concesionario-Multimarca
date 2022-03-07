import React,{ useEffect,useState } from 'react';

const Vehiculos = () => {

  const [nombreVehiculo,setNombreVehiculo]=useState('');

  useEffect(()=>{
    console.log(
      'Hola soy un use effect que se ejecuta solo una vez cuandola pagina se renderiza,porque tiene el array de dependencias vacio '
    );
    //paso2
    //paso3
    //paso4
  },[]);

    useEffect(()=>{
      console.log('esto es una funcion que se ejecuta cada que cambia el valor de nombreVehiculo');
      console.log('el valor de la variable es',nombreVehiculo);
    },[nombreVehiculo]);

    const enviarDatosAlBackend=()=>{
      console.log('El valor de la variable nombreVehiculo es',nombreVehiculo);
    }

  return (
    <form className='flex flex-col'>
      <h2>Formulario de creacion de vehiculos</h2>
      <input 
      onChange={(e)=>{
        setNombreVehiculo(e.target.value);
        }} 
        type='text' 
        placeholder='Nombre del vehiculo'/>
      <input 
      onChange={(e)=>{
        console.log(e.target.value);
      }}
      type='text'
      placeholder='Marca del vehiculo'/>
      <input type='text' placeholder='Modelo del vehiculo'/>
      <button type='button' onClick={enviarDatosAlBackend} className='bg-indigo-500 text-white'>Enviar Datos</button>
    </form>
  )
};

export default Vehiculos;
