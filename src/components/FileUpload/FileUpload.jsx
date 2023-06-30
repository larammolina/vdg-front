import React, { useState } from "react";
import './fileupload.css'

const FileUpload = () => {


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
            {files && (files.elementos.map((item)=> <h1>{item.elemento}</h1>))  }
        </pre>
        
        </>
      
    )
}

export default FileUpload;



