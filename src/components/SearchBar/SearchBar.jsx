import { useEffect, useState } from 'react';
import Result from '../Result/Result';
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
            className=""
            placeholder="Buscar errores..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          
          <input name="fecha" type='date' min="2020-01-01" />
          <ServiceOptions handleService={service => setService(service)}/>
          <ErrorOptions ErrorOptions={errorType => setErrorType(errorType)}/>

          <Result />
        </div>
       
      </>
    );
  };
  
  export default SearchBar;