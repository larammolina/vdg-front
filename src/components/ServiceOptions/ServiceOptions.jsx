
const ServiceOptions = (props) => {
    return (

      <>
        <label htmlFor='servicios'></label>
        <select placeholder='Servicio' name="Servicios" onChange={(e)=> props.handleService(e.target.value)}>
          <option key={1} value="contratacionCliente">Contratacion Cliente</option>
          <option key={2} value="contratacionProducto" >Contratacion Producto</option>
          <option key={3} value="evaluacionCompleta">Evaluacion de Riesgo Completa</option>
          <option key={4} value="miniContratacion">Mini Contratacion</option>
        </select>
      </>
      
      
    )
}

export default ServiceOptions;

