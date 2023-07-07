import { baseURL } from "../constantes/baseURL";
import axios from 'axios';

export const getErrorbyService = async (servicio) => {
    try {
        const respuesta = await axios.get(baseURL+'error/'+ servicio)
        return respuesta.data
    } catch (error) {
        return error
    }
        
} 