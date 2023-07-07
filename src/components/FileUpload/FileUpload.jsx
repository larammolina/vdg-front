import React, { useState } from "react";
import './fileupload.css';

const FileUpload = () => {
    // const posts = data.elementos;

    const [files, setFiles] = useState("");

    const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
        //console.log("e.target.result", e.target.result);
        setFiles(JSON.parse(e.target.result));
        };
    };
  
    return (

        <>
        <input  type="file" id="docpicker" className="examinar_"
            accept=".doc,.docx,.xml,.json,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
            multiple="multiple" onChange={handleChange}
        />
        <br />
        <h4>Exportar a Excel</h4>
        <br />
        <div className="gridParserJson">
            {files && (files.elementos.map(outerElement => {
                return outerElement.errores.map(innerElement => (
                <ul key={outerElement.elemento}>
                    <li> Servicio: {outerElement.elemento}</li> 
                    <li> Error: {innerElement.codigoError} </li> 
                    <li> Ocurrencia: {innerElement.cantidadOcurrencia} </li>
                    <li> Detalle: {innerElement.detalleError} </li>
                    <li> Fecha: {innerElement.fechaUltimaOcurrencia} </li>
                </ul>
                ))
            }))}
        </div>
        

        
        </>
    )
}

export default FileUpload;



