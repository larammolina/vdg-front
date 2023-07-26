import { useEffect, useState } from 'react';
import ServiceOptions from '../ServiceOptions/ServiceOptions';
import ErrorOptions from '../ErrorOptions/ErrorOptions';
import './searchbar.css'
import XLSX from 'xlsx/dist/xlsx.full.min.js';
import data from './../../data/Monitor/OM-2023-06-15T-235800.json';

const SearchBar = () => {
  const [value, setValue] = useState(''); 
  const [service, setService] = useState('');
  const [errorType, setErrorType] = useState('');
  const [date, setDate] = useState('');
  const [ocurrencia, setOcurrencia] = useState('');
  const [descripcionError, setDescripcionError] = useState('');
  const [detalleError, setDetalleError] = useState('');

    
    
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const filteredData = data.elementos.filter(item => {
      if (item.descripcion && item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())) {
        if (service) {
          return (
            (errorType === 'erroresFuncionales' && item.erroresFuncionales) ||
            (errorType === 'erroresFuncionalesAux' && item.erroresFuncionalesAux) ||
            (errorType === 'errores' && item.errores)
          );
        } else {
          return true;
        }
      }
      return false;
    });

    let searchResults = [];

    if (errorType === 'erroresFuncionales') {
      searchResults = filteredData.flatMap(item => item.erroresFuncionales || []);
    } else if (errorType === 'erroresFuncionalesAux') {
      searchResults = filteredData.flatMap(item => item.erroresFuncionalesAux || []);
    } else if (errorType === 'errores') {
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

  const handleExportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(searchResults);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `_${service}`);

    let fileName = 'data';

    if (service) {
      fileName += `_${service}`;
    }

    if (errorType === 'errores') {
      fileName += '_errores';
    } else if (errorType === 'erroresFuncionales') {
      fileName += '_erroresFuncionales';
    } else if (errorType === 'erroresFuncionalesAux') {
      fileName += '_erroresFuncionalesAux';
    }

    fileName += '.xlsx';

    XLSX.writeFile(workbook, fileName);
  };
    
  
    return (
      
      <div>
        <br />
        
        <div>
           
          {/* <input
            type="text"
            className="searchBar_"
            placeholder="Buscar por término"
            value={searchTerm}
            onChange={handleSearchTerm}
          />  */}
          <div className='filtros_'>
            <button className='botonExportar_' onClick={handleExportToExcel}>Exportar a Excel</button>
            <ServiceOptions className="item_" handleService={service => setService(service)}/>
            <ErrorOptions  className="item_" handleFilter={errorType => setErrorType(errorType)}/>
            <button className='botonBuscar_ bg-dark-purple'  onClick={handleSearch}>Buscar</button>
            {/* <input className="item_" name="fecha" type='date' min="2020-01-01" /> */}
            
          </div>
        </div>
        <div className=''>
          {searchResults.length > 0 && (
            <ul>
              {searchResults.map((item, index) => (
								<div className='p-10 rounded-lg shadow-lg w-2/5 mb-2'>
									<li key={index}>
										{errorType === 'errores' ? (
											<>
												<p><span className='font-bold'>Código de error:</span> {item.codigoError}</p>
												<p><span className='font-bold'>Descripción de error:</span> {item.descripcionError}</p>
												<p>{item.detalleError}</p>
												<p><span className='font-bold'>Ocurrencias:</span> {item.cantidadOcurrencia}</p>
												<p><span className='font-bold'>Fecha última ocurrencia:</span> {item.fechaUltimaOcurrencia}</p>
											</>
										) : (
											<>
												<h4>{item.date}</h4>
												<p>{item.request}</p>
												<p>{item.response ? item.response.join(', ') : ''}</p>
											</>
										)}
									</li>
								</div>
              ))}
            </ul>
              )}
        </div>


      </div>
    );
  };
  
export default SearchBar;