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
          
          <Filtros tipoDeErrores={errorType} servicio={service} />
        </div>
       
      </>
    );
  };
  
  export default SearchBar;