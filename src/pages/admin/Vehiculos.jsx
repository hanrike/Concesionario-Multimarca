import React,{ useEffect,useState } from 'react';

//REalizar un formulario que lepida al usuario su edad y mustre un msj
//que diga si el ususario es mayor de edad o no

const vehiculosBackend=[
  {
    nombre:'Corolla',
    marca:'Toyota',
    modelo:'2014',
  },
  {
    nombre:'Sandero',
    marca:'Renault',
    modelo:'2020',
  },
  {
    nombre:'Rav 4',
    marca:'Toyota',
    modelo:'2021',
  },
  {
    nombre:'Fiesta',
    marca:'Ford',
    modelo:'2017',
  },
  {
    nombre:'Mazda 3',
    marca:'Mazda',
    modelo:'2020',
  },
  {
    nombre:'Chevrolet',
    marca:'Onix',
    modelo:'2020',
  },
  
]

const Vehiculos = () => {
  const [mostrarTabla,setMostrarTabla]=useState(true);
  const[vehiculos,setVehiculos]=useState([]);
  const [textoBoton,setTextoBoton]=useState('Crear nuevo vehiculo');

  useEffect(()=>{
    //obtener lista de vehiculos desde el backend
    setVehiculos(vehiculosBackend);

  },[]);

  useEffect(()=>{
    if (mostrarTabla){
      setTextoBoton('Crear Nuevo Vehiculo');
    }else{
      setTextoBoton('Mostrar Todos los Vehiculos');
    }
  },[mostrarTabla]);


  return(
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
      <h2 className='text-3xl font-extrabold text-gray-900'>
        Pagina de administracion de Vehiculos</h2>
      <button onClick={()=>{
      setMostrarTabla(!mostrarTabla);
       }}
      className='text-white bg-indigo-500 p-5 rounded-full m-6 w-28 self-end'
      >
        {textoBoton}
      </button>
      </div>
      {mostrarTabla ?(
         <TablaVehiculos listaVehiculos={vehiculos}/>
       ) :(
       <FormularioCreacionVehiculos />
       )}
    </div>
  );
};

const TablaVehiculos=({ listaVehiculos })=>{
  useEffect(()=>{
    console.log("este es el listado de vehiculos en el componente de tabla",listaVehiculos);
  },[listaVehiculos]);
  
  return(
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'> Todos los Vehiculos </h2>
    <table>
      <thead>
        <tr>
          <th>Nombre del vehiculo</th>
          <th>Marca del vehiculo</th>
          <th>Modelo del vehiculo</th>
        </tr>
      </thead>
      <tbody>

        {listaVehiculos.map((vehiculo)=>{
          return(
          <tr>
            <td>{vehiculo.nombre}</td>
            <td>{vehiculo.marca}</td>
            <td>{vehiculo.modelo}</td>
          </tr>
      
          );
        })}
        </tbody>
      </table>
    </div>
  )
      };

        
      
  

const FormularioCreacionVehiculos=()=>{
  return (
  <div className='flex flex-col items-center justify-center'>
    <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo vehiculo</h2>
    <form className='grid grid-cols-2'>
      <input className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' type='text'/>
      <input className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' type='text'/>
      <input className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' type='text'/>
      <input className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' type='text'/>
      <button className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600'>
        Guardar Vehiculo
      </button>
    </form>
  </div>
  );
};

export default Vehiculos;
