import { useEffect, useState } from 'react';
import Filtros from '../Filtros/Filtros';
import ServiceOptions from '../ServiceOptions/ServiceOptions';
import ErrorOptions from '../ErrorOptions/ErrorOptions';
import FileUpload from '../FileUpload/FileUpload';
import Result from '../Result/Result';

import './searchbar.css'

import data from './../../data/Monitor/OM-2023-06-15T-235800.json';

const SearchBar = () => {
    const [value, setValue] = useState(''); 
    const [service, setService] = useState('');
    const [errorType, setErrorType] = useState('');
    const [date, setDate] = useState('');
    const [ocurrencia, setOcurrencia] = useState('');
    const [descripcionError, setDescripcionError] = useState('');
    const [detalleError, setDetalleError] = useState('');

    
    ///
    const [searchTerm, setSearchTerm] = useState('');
  const [searchDescription, setSearchDescription] = useState('');
  const [searchFilter, setSearchFilter] = useState('all');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchDescription = (e) => {
    setSearchDescription(e.target.value);
  };

  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value);
  };

  const handleSearch = () => {
    const filteredData = data.elementos.filter(item => {
      if (item.descripcion && item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())) {
        if (searchDescription) {
          return (
            (searchFilter === 'erroresFuncionales' && item.erroresFuncionales) ||
            (searchFilter === 'erroresFuncionalesAux' && item.erroresFuncionalesAux) ||
            (searchFilter === 'errores' && item.errores)
          );
        } else {
          return true;
        }
      }
      return false;
    });

    let searchResults = [];
    if (searchFilter === 'erroresFuncionales') {
      searchResults = filteredData.flatMap(item => item.erroresFuncionales || []);
    } else if (searchFilter === 'erroresFuncionalesAux') {
      searchResults = filteredData.flatMap(item => item.erroresFuncionalesAux || []);
    } else if (searchFilter === 'errores') {
      searchResults = filteredData.flatMap(item => {
        if (item.errores && Array.isArray(item.errores)) {
          return item.errores.map(error => ({
            codigoError: error.codigoError,
            descripcionError: error.descripcionError,
            detalleError: error.detalleError,
            cantidadOcurrencia: error.cantidadOcurrencia,
            fechaUltimaOcurrencia: error.fechaUltimaOcurrencia
          }));
        }
        return [];
      });
    }

    setSearchResults(searchResults);
  };
    
  
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
        </div>
        <div>
          <Result tipoDeError={errorType} servicio={service} fecha={date} descripcionError={descripcionError} detalleError={detalleError} cantidadError={ocurrencia}/>
        </div>
        
       

        <div>
      <div>
        <input
          type="text"
          placeholder="Buscar por término..."
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </div>
      <div>
        <select value={searchDescription} onChange={handleSearchDescription}>
          <option value="">Todas las descripciones</option>
          <option value="Contratacion cliente">Contratacion cliente</option>
          <option value="Contracion producto">Contracion producto</option>
          <option value="Evaluacion de riesgo">Evaluacion de riesgo</option>
        </select>
      </div>
      <div>
        <select value={searchFilter} onChange={handleSearchFilter}>
          <option value="all">Todos los filtros</option>
          <option value="erroresFuncionales">erroresFuncionales</option>
          <option value="erroresFuncionalesAux">erroresFuncionalesAux</option>
          <option value="errores">errores</option>
        </select>
      </div>
      <div>
        <button onClick={handleSearch}>Buscar</button>
      </div>
      {searchResults.length > 0 && (
  <ul>
    {searchResults.map((item, index) => (
      <li key={index}>
        {searchFilter === 'errores' ? (
          <>
            <p>Código de error: {item.codigoError}</p>
            <p>Descripción de error: {item.descripcionError}</p>
            <p>Detalle de error: {item.detalleError}</p>
            <p>Cantidad de ocurrencias: {item.cantidadOcurrencia}</p>
            <p>Fecha última ocurrencia: {item.fechaUltimaOcurrencia}</p>
          </>
        ) : (
          <>
            <h4>{item.date}</h4>
            <p>Request: {item.request}</p>
            <p>Response: {item.response ? item.response.join(', ') : ''}</p>
          </>
        )}
      </li>
    ))}
  </ul>
)}
    </div>


      </>
    );
  };
  
  export default SearchBar;