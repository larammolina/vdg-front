import {Link} from 'react-router-dom';
import './nav.css'

const NavBar = () => {
    return (
        <nav>
            <Link to='/' className='link' ></Link>
            <Link to='/pronostico' className='link' ></Link>
            <Link to='/servicios' className='link' ></Link>
            
        </nav>
    )
}

export default NavBar;