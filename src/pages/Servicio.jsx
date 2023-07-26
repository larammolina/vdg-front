import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Titulo from '../components/Titulo/Titulo';
import GraficoLineas from '../components/Graficos/GraficoLineas';
import GraficoTorta from '../components/Graficos/GraficoTorta';
import { getServicioById } from '../services/getServicioById';
import { useState } from 'react';

const Servicio = () => {
	const [datos, setDatos] = useState();
	let params = useParams();

	useEffect(() => {
		getServicioById(params.servicioId).then(data => setDatos(data))
	}, [params])

	return (
		<div className="h-full grid grid-rows-6">
			<Titulo titulo={params.servicioId}/>
			<div className="grid grid-cols-3 row-span-5 content-start">
				<div className='col-span-2'>
					{datos && <GraficoLineas data={datos.data}/>}
				</div>
				<div>
					{datos && <GraficoTorta porcentajes={datos.porcentajes}/>}
				</div>
			</div>

		</div>
	)
}

export default Servicio