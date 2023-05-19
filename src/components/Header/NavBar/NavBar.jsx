import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <Link to='/' >Inicio</Link>
            <Link to='/modelo' >Modelo</Link>

        </nav>
    )
}

export default NavBar;