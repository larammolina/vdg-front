import React from 'react'
import { useParams } from 'react-router-dom'
import Titulo from '../components/Titulo/Titulo';
import GraficoLineas from '../components/Graficos/GraficoLineas';
import GraficoTorta from '../components/Graficos/GraficoTorta';

const Servicio = () => {
	let params = useParams();
	return (
		<div className="h-full grid grid-rows-6">
			<Titulo titulo={params.servicioId}/>
			<div className="grid grid-cols-3 row-span-5 content-start">
				<div className='col-span-2'>
					<GraficoLineas/>
				</div>
				<div>
					<GraficoTorta/>
				</div>
			</div>

		</div>
	)
}

export default Servicio