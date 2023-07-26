
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Servicio from "./pages/Servicio";
import Modelo from "./pages/Modelo";
import Layout from "./containers/Layout";
import MapearErrores from "./pages/MapearErrores";
import ErroresPorServicio from "./pages/ErroresPorServicio";

function App() {
  
  return (
    <BrowserRouter>
        <Routes>

			{/* ruta layout con header y footer */}
			<Route element={<Layout />}> 

			<Route exact path="/" element={<Home />}/>s

			<Route exact path="/pronostico" element={<Modelo />} />
							
			<Route exact path="/servicios" element={<Servicios />} />

			<Route exact path="/servicios/:servicioId" element={<Servicio />} />

			<Route exact path="/mapearErrores" element={<MapearErrores />} />

			</Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App ;
