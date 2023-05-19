import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <Link to='/' >Inicio</Link>
            <Link to='/modelo' >Modelo</Link>
            <Link to='/servicios' >Servicios</Link>

        </nav>
    )
}

export default NavBar;