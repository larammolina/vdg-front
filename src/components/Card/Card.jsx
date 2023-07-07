import { Link } from "react-router-dom"

const Card = ({title, servicio, path}) => {
	return (
		<div className="p-10 rounded-lg shadow-lg flex flex-col text-center">
			<h3>{title}</h3>
			<span>{servicio}</span>
			<Link to={'/servicios/' + path } className="bg-light-orange py-3 px-8 mt-4 rounded text-black text-sm font-semibold hover:bg-opacity-75 border-none ">
				Ver
			</Link>
		</div>
	)
}

export default Card