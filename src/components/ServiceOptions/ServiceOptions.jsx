import './serviceOptions.css'
const ServiceOptions = (props) => {
    return (

      <>
        <label htmlFor='servicios'></label>
        <select className='item_'  name="Servicios" onChange={(e)=> props.handleService(e.target.value)}>
          <option key={0} value="all">Seleccione un Servicio</option>
          <option key={1} value="Contratacion Cliente">Contratacion Cliente</option>
          <option key={2} value="Contratacion Producto" >Contratacion Producto</option>
          <option key={3} value="Evaluacion Completa">Evaluacion de Riesgo Completa</option>
          <option key={4} value="Mini Contratacion">Mini Contratacion</option>
        </select>
      </>
      
      
    )
}

export default ServiceOptions;

