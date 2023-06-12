const ErrorOptions = (props) => {
    return (

      <>
        <label htmlFor='servicios'></label>
        <select placeholder='Servicio' name="Servicios" onChange={(e)=> props.handFilter(e.target.value)}>
          <option key={1} value="Errores">Errores Tecnicos</option>
          <option key={2} value="ErroresFuncionales" >Errores Funcionales</option>
          <option key={3} value="Avisos">Avisos</option>
    
        </select>
      </>
      
      
    )
}

export default ErrorOptions;