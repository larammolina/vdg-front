const ErrorOptions = (props) => {
    return (

      <>
        <label htmlFor='errores'></label>
        <select className="item_" name="tipoDeErrores" onChange={(e)=> props.handleFilter(e.target.value)}>
          <option key={1} value="errores">Errores Tecnicos</option>
          <option key={2} value="erroresFuncionales" >Errores Funcionales</option>
          <option key={3} value="erroresFuncionalesAux">Errores Funcionales Aux</option>
    
        </select>
      </>
      
      
    )
}

export default ErrorOptions;