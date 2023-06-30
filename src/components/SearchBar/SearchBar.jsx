import { useEffect, useState } from 'react';
import Filtros from '../Filtros/Filtros';
import ServiceOptions from '../ServiceOptions/ServiceOptions';
import ErrorOptions from '../ErrorOptions/ErrorOptions';
import FileUpload from '../FileUpload/FileUpload';
import Result from '../Result/Result';

import './searchbar.css'



const SearchBar = () => {
    const [value, setValue] = useState(''); 
    const [service, setService] = useState('');
    const [errorType, setErrorType] = useState('');
    const [date, setDate] = useState('');
    const [ocurrencia, setOcurrencia] = useState('');
    const [descripcionError, setDescripcionError] = useState('');
    const [detalleError, setDetalleError] = useState('');
    
  
    return (
      <>
        <div className="">
           
          <input
            type="text"
            className="searchBar_"
            placeholder="Buscar errores..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <div className='filtros_'>
            <ServiceOptions className="item_" handleService={service => setService(service)}/>
            <ErrorOptions  className="item_" handleFilter={errorType => setErrorType(errorType)}/>
            <input className="item_" name="fecha" type='date' min="2020-01-01" />
          </div>
          <FileUpload />
          <Filtros tipoDeErrores={errorType} servicio={service} />
        </div>
        <div>
          <Result tipoDeError={errorType} servicio={service} fecha={date} descripcionError={descripcionError} detalleError={detalleError} cantidadError={ocurrencia}/>
        </div>
       
      </>
    );
  };
  
  export default SearchBar;