import { useEffect, useState } from 'react';
import Filtros from '../Filtros/Filtros';
import ServiceOptions from '../ServiceOptions/ServiceOptions';
import ErrorOptions from '../ErrorOptions/ErrorOptions';

import './searchbar.css'


const SearchBar = () => {
    const [value, setValue] = useState(''); // Here we'll store the value of the search bar's text input
    const [service, setService] = useState('');
    const [errorType, setErrorType] = useState('');
    
  
    return (
      <>
        <div className="">
           
          <input
            type="text"
            className="searchBar"
            placeholder="Buscar errores..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <div className='filtros'>
            <input className="item" name="fecha" type='date' min="2020-01-01" />
            <ServiceOptions className="item" handleService={service => setService(service)}/>
            <ErrorOptions  className="item" handleFilter={errorType => setErrorType(errorType)}/>
          </div>
          
          <Filtros tipoDeErrores={errorType} servicio={service} />
        </div>
       
      </>
    );
  };
  
  export default SearchBar;