import React, { useState } from "react";
import './fileupload.css';
import XLSX from 'xlsx/dist/xlsx.full.min.js';

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

    const handleExportToExcel = () => {
        const errorItems = files.elementos.flatMap((outerElement) =>
          outerElement.errores.map((error) => ({
            Servicio: outerElement.elemento,
            Error: error.codigoError,
            Ocurrencia: error.cantidadOcurrencia,
            Detalle: error.detalleError,
            Fecha: error.fechaUltimaOcurrencia,
          }))
        );
      
        const worksheet = XLSX.utils.json_to_sheet(errorItems);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Errores por Servicio');
        XLSX.writeFile(workbook, 'resultados_mapeos.xlsx');
    };



    return (

        <>
        
        
        <input  type="file" id="docpicker" className="examinar_"
                accept=".doc,.docx,.xml,.json,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                multiple="multiple" onChange={handleChange}
                placeholder="lalala"
        />
 
        <br />
        <button className='botonExportar_' onClick={handleExportToExcel}>Exportar a Excel</button>
        <br />
        <br />
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



