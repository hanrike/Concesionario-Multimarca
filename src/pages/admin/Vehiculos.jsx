
import React, { useEffect, useState,useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
<<<<<<< HEAD
=======
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
>>>>>>> 5c66e6a5f478987a2e1b2cd414836cdbdf8a4b0b
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
// realizar un formulario que le pida al usuario su edad y muestre un mensaje
// que diga si el usuario es mayor de edad o no

const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [vehiculos, setVehiculos] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Crear Nuevo Vehículo');
  const [colorBoton, setColorBoton] = useState('indigo');
  const [ejecutarConsulta,setEjecutarConsulta]=useState(true);

  useEffect(()=>{
    const obtenerVehiculos=async()=>{
      const options={method:'GET',url:'https://vast-waters-45728.herokuapp.com/vehicle/'};

     await axios
      .request(options)
      .then(function(response){
        setVehiculos(response.data);
      })
      .catch(function(error){
        console.error(error);
      });
    }
    if (ejecutarConsulta){
      obtenerVehiculos();
      setEjecutarConsulta(false);
    }
  },[ejecutarConsulta]);

  useEffect(() => {
    


    //obtener lista de vehículos desde el backend
    if (mostrarTabla){
      setEjecutarConsulta(true);
    }
    
      
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Crear Nuevo Vehículo');
      setColorBoton('indigo');
    } else {
      setTextoBoton('Mostrar Todos los vehículos');
      setColorBoton('green');
    }
  }, [mostrarTabla]);
  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col w-full'>
        <h2 className='text-3xl font-extrabold text-gray-900'>
          Página de administración de vehículos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`}
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaVehiculos listaVehiculos={vehiculos} setEjecutarConsulta={setEjecutarConsulta} />
      ) : (
        <FormularioCreacionVehiculos
          setMostrarTabla={setMostrarTabla}
          listaVehiculos={vehiculos}
          setVehiculos={setVehiculos}
        />
      )}
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
  );
};

<<<<<<< HEAD
const TablaVehiculos = ({ listaVehiculos,setEjecutarConsulta }) => {
  const[busqueda,setBusqueda]=useState('');
  const[vehiculosFiltrados,setVehiculosFiltrados]=useState(listaVehiculos);
=======
const TablaVehiculos = ({ listaVehiculos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [vehiculosFiltrados, setVehiculosFiltrados] = useState(listaVehiculos);

  useEffect(() => {
    setVehiculosFiltrados(
      listaVehiculos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaVehiculos]);
>>>>>>> 5c66e6a5f478987a2e1b2cd414836cdbdf8a4b0b

  useEffect(()=>{
    
    setVehiculosFiltrados(
    listaVehiculos.filter(elemento=>{
      console.log('elemento',elemento);
      return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
    })
    );
  },[busqueda,listaVehiculos]);
  
  return (
    <div className='flex flex-col items-center justify-center w-full'>
<<<<<<< HEAD
      <input 
      value={busqueda}
      onChange={(e)=>setBusqueda(e.target.value)}
      placeholder='Buscar'
      className='border-2 border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500'
      />
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehículos</h2>
      
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre del vehículo</th>
            <th>Marca del vehículo</th>
            <th>Modelo del vehículo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehiculosFiltrados.map((vehiculo) => {
            return <FilaVehiculo key={nanoid()} vehiculo={vehiculo} setEjecutarConsulta={setEjecutarConsulta} />;
              
            
          })}
        </tbody>
      </table>
      
      
=======
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
        className='border-2 border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500'
      />
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehículos</h2>
      <div className='hidden md:flex w-full'>
        <table className='tabla'>
          <thead>
            <tr>
              <th>Nombre del vehículo</th>
              <th>Marca del vehículo</th>
              <th>Modelo del vehículo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {vehiculosFiltrados.map((vehiculo) => {
              return (
                <FilaVehiculo
                  key={nanoid()}
                  vehiculo={vehiculo}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='flex flex-col w-full m-2 md:hidden'>
        {vehiculosFiltrados.map((el) => {
          return (
            <div className='bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl'>
              <span>{el.name}</span>
              <span>{el.brand}</span>
              <span>{el.model}</span>
            </div>
          );
        })}
      </div>
>>>>>>> 5c66e6a5f478987a2e1b2cd414836cdbdf8a4b0b
    </div>
  );
};

<<<<<<< HEAD
const FilaVehiculo=([vehiculo,setEjecutarConsulta])=>{
  console.log('vehiculo',vehiculo)
  const[edit,setEdit]=useState(false);
  const[openDialog,setOpenDialog]=useState(false)
  const[infoNuevoVehiculo,setInfoNuevoVehiculo]=useState({
    name:vehiculo.name,
    brand:vehiculo.brand,
    model:vehiculo.model,
=======
const FilaVehiculo = ({ vehiculo, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoVehiculo, setInfoNuevoVehiculo] = useState({
    name: vehiculo.name,
    brand: vehiculo.brand,
    model: vehiculo.model,
>>>>>>> 5c66e6a5f478987a2e1b2cd414836cdbdf8a4b0b
  });

  const actualizarVehiculo= async ()=>{
    console.log(infoNuevoVehiculo);
    //Enviar la informacion al backend
    const options={
      method:'PATCH',
      url:'https://vast-waters-45728.herokuapp.com/vehicle/',
      headers:{'Content-Type':'application/json'},
      data:{...infoNuevoVehiculo,id:vehiculo._id},
    };

    await axios
      .request(options)
      .then(function(response){
        console.log(response.data);
        toast.success('Vehiculo modificado con exito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function(error){
        toast.error('Error modificando el vehiculo');
        console.error(error);
      });

  };
  const eliminarVehiculo=async()=>{

    const options={
      method:'DELETE',
      url:'https://vast-waters-45728.herokuapp.com/vehicle/delete/',
      headers:{'Content-Type':'application/json'},
      data:{id:vehiculo._id},

    };

    await axios
      .request(options)
      .then(function(response){
        console.log(response.data);
        toast.success('vehiculo eliminado con exito')
        setEjecutarConsulta(true);
        
      })
      .catch(function(error){
        console.error(error);
        toast.success('Error eliminando el vehiculo')
      });
<<<<<<< HEAD
      setOpenDialog(false);
=======
    setOpenDialog(false);
>>>>>>> 5c66e6a5f478987a2e1b2cd414836cdbdf8a4b0b
  };
  return(
    <tr >
    {edit ? (
      <>

      
        <td>
          <input 
          className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
          type='text' 
          value={infoNuevoVehiculo.name}
          onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,name:e.target.value})}
          />
          </td>
        <td>
          <input 
          className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
          type='text' 
          value={infoNuevoVehiculo.brand}
          onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,brand:e.target.value})}
          />
          </td>
        <td>
          <input 
          className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
          type='text' 
          value={infoNuevoVehiculo.model}
          onChange={(e)=>setInfoNuevoVehiculo({...infoNuevoVehiculo,model:e.target.value})}
          />
        
          </td>
        </>
<<<<<<< HEAD
      
    ):(
      <>
    <td>{vehiculo.name}</td>
    <td>{vehiculo.brand}</td>
    <td>{vehiculo.model}</td>
    </>
    )}
        <td>
          <div className='flex w-full justify-around'>
            {edit?( 
            
            <Tooltip title='Confirmar Edicion' arrow>
            <i 
            onClick={()=>actualizarVehiculo()}
            className='fas fa-check text-green-700 hover:text-green-500'
            />
            </Tooltip>
              
            
            ):(
             <> 
            <Tooltip title='Editar Vehiculo' arrow>
            <i
              onClick={()=>setEdit(!edit)} 
              className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
              />
            </Tooltip>
            
            <Tooltip title='Eliminar Vehiculo' arrow >
            <i 
              onClick={()=>setOpenDialog(true)} 
              className='fas fa-trash text-red-700 hover:text-red-500'
              />
              </Tooltip>
              </>
              )}

              </div>
              <Dialog open={openDialog}>Hola mundo,soy un dialogo</Dialog>
                <div className='p-8 flex flex-col'>
                  <h1 className='text-gray-900 text-2xl font-bold'>?esta seguro de querer eliminar el vehiculo?</h1>
                  <div className='flex w-full items-center justify-center my-4'>
                  <button 
                  onClick={()=>eliminarVehiculo()}
                  className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'>
                    Si
                    </button>
                  <button 
                  onClick={()=>setOpenDialog(false)}
                  className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-green-700 rounded-md shadow-md'>
                    No
                    </button>
                  </div>
                </div>
              </td>
              </tr>
=======
      ) : (
        <>
          <td>{vehiculo.name}</td>
          <td>{vehiculo.brand}</td>
          <td>{vehiculo.model}</td>
        </>
      )}
      <td>
        <div className='flex w-full justify-around'>
          {edit ? (
            <>
              <Tooltip title='Confirmar Edición' arrow>
                <i
                  onClick={() => actualizarVehiculo()}
                  className='fas fa-check text-green-700 hover:text-green-500'
                />
              </Tooltip>
              <Tooltip title='Cancelar edición' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title='Editar Vehículo' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
                />
              </Tooltip>
              <Tooltip title='Eliminar Vehículo' arrow>
                <i
                  onClick={() => setOpenDialog(true)}
                  className='fas fa-trash text-red-700 hover:text-red-500'
                />
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className='p-8 flex flex-col'>
            <h1 className='text-gray-900 text-2xl font-bold'>
              ¿Está seguro de querer eliminar el vehículo?
            </h1>
            <div className='flex w-full items-center justify-center my-4'>
              <button
                onClick={() => eliminarVehiculo()}
                className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
>>>>>>> 5c66e6a5f478987a2e1b2cd414836cdbdf8a4b0b
  );
};

const FormularioCreacionVehiculos = ({
  setMostrarTabla,
  listaVehiculos,
  setVehiculos,
}) => {
  const form=useRef(null);
  

  const submitForm=async (e)=>{
    e.preventDefault();
    const fd=new FormData(form.current);

    const nuevoVehiculo={};
    fd.forEach((value,key)=>{
      nuevoVehiculo[key]=value;
    
    });

    const options={
      method:'POST',
      url:'https://vast-waters-45728.herokuapp.com/vehicle/create',
      headers:{'Content-Type':'application/json'},
      data:{name:nuevoVehiculo.name, brand:nuevoVehiculo.brand, model:nuevoVehiculo.model},
    };

    await axios
    .request(options)
    .then(function(response){
      console.log(response.data);
      toast.success('Vehiculo agregado con exito');
    })
    .catch(function(error){
      console.error(error);
      toast.error('Error creando un vehiculo');
    });


    setMostrarTabla(true);
    
    //identificar el caso de exito y mostrar el toast de exito
    
    //identificar el caso de error y mostrar un toast de error
    //toast.error('Error creando un vehiculo');
    
    
    
  };
    

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo vehículo</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className='flex flex-col' htmlFor='nombre'>
          Nombre del vehículo
          <input
            name='name'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='text'
            placeholder='Corolla'
            
            required
          />
        </label>
        <label className='flex flex-col' htmlFor='marca'>
          Marca del vehículo
          <select
           
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='brand'
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
              </option>
            <option>Renault</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option>Chevrolet</option>
          </select>
        </label>
        <label className='flex flex-col' htmlFor='modelo'>
          Modelo del vehículo
          <input
            name='model'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            min={1992}
            max={2022}
            placeholder='2014'
            
            required
          />
        </label>

        <button
          type='submit'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
         
        >
          Guardar vehiculo
        </button>
      </form>
    </div>
  );
};

export default Vehiculos;
