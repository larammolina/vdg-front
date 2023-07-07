import { baseURL } from "../constants/baseURL";
import axios from 'axios';

export const getServicioById = async (servicio) => {
    try {
        const datos = await axios.get(baseURL+'servicios/'+ servicio)
        return datos.data
    } catch (error) {
        return error
    }
        
} 