
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Modelo from "./pages/Modelo";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  
  return (
    <div className="App">

      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />}>

          </Route>
          <Route exact path="/modelo" element={<Modelo />} >
            
          </Route>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
      
      
    </div>
    
  )
}

export default App
