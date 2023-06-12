import { useEffect, useState } from 'react';
import Result from '../Result/Result';
import './searchbar.css'


const SearchBar = () => {
    const [value, setValue] = useState(''); // Here we'll store the value of the search bar's text input
    
  
  
    return (
      <>
        <div className="">
          <label>Búsqueda</label>  
          <input
            type="text"
            className=""
            placeholder="Buscar errores..."
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
            <ul>
                
            </ul>
           <Result />
        </div>
       
      </>
    );
  };
  
  export default SearchBar;