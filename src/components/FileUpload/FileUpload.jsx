import React, { useState } from "react";
import './fileupload.css'

const FileUpload = (props) => {


    const [files, setFiles] = useState("");

    const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
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
        <pre>
            {files && (files.elementos.map((item)=> <div>{item.elemento}</div>))  }
            {files && (files.elementos.map((item)=> <div> {item.descripcion}</div> ))  }
            {files && (files.elementos.map((item)=> <div> {item.errores[0].codigoError}</div> ))  }
            {files && (files.elementos.map((item)=> <div> {item.erroresFuncionales[0].response}</div> ))  }
        </pre>
        
        </>
      
    )
}

export default FileUpload;



