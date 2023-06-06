import { baseURL } from "../constantes/baseURL";
import axios from 'axios';

export const getServicios = async () => {
    try {
        const respuesta = await axios.get(baseURL+'circuitos')
        return respuesta.data
    } catch (error) {
        return error
    }
        
} 