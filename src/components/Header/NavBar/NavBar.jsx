import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <Link to='/' >Inicio</Link>
            <Link to='/pronostico' >Pronostico</Link>
            <Link to='/servicios' >Servicios</Link>

        </nav>
    )
}

export default NavBar;