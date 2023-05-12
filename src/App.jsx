
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Modelo from "./pages/Modelo";
import Footer from "./components/Footer/Footer";

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>
        
        <Routes>
          <Route exact path="/" element={<Home />}>

          </Route>
          <Route exact path="/modelo" element={<Modelo />} >
            
          </Route>
          
        </Routes>

      </BrowserRouter>
      <Footer/>
      
    </div>
    
  )
}

export default App
