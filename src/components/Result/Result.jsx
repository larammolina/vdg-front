import './result.css'

const Result = (props) => (
    <>
    
    <ul className="grid_">
      <li>{props.fecha}</li>
      <li>{props.servicio}</li>
      <li>{props.tipoDeError}</li>
      <li>{props.descripcionError}</li>
      <li>{props.detalleError}</li>
      <li>{props.cantidadError}</li>
    </ul>
    
    </>
  );
  
  export default Result;