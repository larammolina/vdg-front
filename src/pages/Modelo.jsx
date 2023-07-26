import Titulo from "../components/Titulo/Titulo";
import { getServicioById } from '../services/getServicioById';
import { useState, useEffect } from 'react';
import GraficoLineas from '../components/Graficos/GraficoLineas';

const Modelo = () => {
		const [datos, setDatos] = useState();

		useEffect(() => {
			getServicioById('contratacion-prod').then(data => setDatos(data))
		}, [])

    return (
              
			<div className="h-full grid grid-rows-6">
			<Titulo titulo={`Pronóstico - Contratacion-prod`}/>
			<div className="grid grid-cols-3 row-span-5 content-start">
				<div className='col-span-3'>
					{datos && <GraficoLineas data={datos.data}/>}
				</div>
			</div>

		</div>
              
       
    )
    
  };
  
export default Modelo;
  

