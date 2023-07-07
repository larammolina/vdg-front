import Card from "../components/Card/Card";
import Titulo from "../components/Titulo/Titulo";
import { servicios } from "../data/data";

const Servicios = () => {
    
    return (
		<>
			<Titulo titulo="Servicios" />
			<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
				{servicios.map( ({index, ...props}) => (<Card key={index} {...props}/>))}
			</div>
		</>
    )
    
  };
  
export default Servicios;