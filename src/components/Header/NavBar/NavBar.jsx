import {Link} from 'react-router-dom';
import './nav.css'

const NavBar = () => {
    return (
        <nav>
            <Link to='/' className='link' >Inicio</Link>
            <Link to='/pronostico' className='link' >Pronóstico</Link>
            <Link to='/servicios' className='link' >Servicios</Link>
            
        </nav>
    )
}

export default NavBar;