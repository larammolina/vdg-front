import './result.css'

const Result = (props) => (
    <>
    <ul className="grid">
      <li>{props.fecha}</li>
      <li>{props.servicio}</li>
      <li>{props.tipoDeError}</li>
      <li>{props.descripcionError}</li>
      <li>{props.detalleError}</li>
      <li>{props.cantidadError}</li>
    </ul>
    <div>
        exportar a Excel
    </div>
    </>
  );
  
  export default Result;