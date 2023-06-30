const ErrorOptions = (props) => {
    return (

      <>
        <label htmlFor='errores'></label>
        <select className="item_" name="tipoDeErrores" onChange={(e)=> props.handleFilter(e.target.value)}>
          <option key={1} value="Errores">Errores Tecnicos</option>
          <option key={2} value="Errores Funcionales" >Errores Funcionales</option>
          <option key={3} value="Avisos">Avisos</option>
    
        </select>
      </>
      
      
    )
}

export default ErrorOptions;