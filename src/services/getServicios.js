import { baseURL } from "../constants/baseURL";
import axios from 'axios';

export const getServicios = async () => {
    try {
        const respuesta = await axios.get(baseURL+'servicios')
        return respuesta.data
    } catch (error) {
        return error
    }
        
} 