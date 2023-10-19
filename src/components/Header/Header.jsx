import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return(
        <header>
            <h1>Lo que me gusta y más...</h1>
            <nav>
                <ul>
                    <li>
                         <NavLink to='/' className='homelink'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='contactlink'>Contacto</NavLink>   
                    </li>
                    <li>
                        <NavLink to='/about' className='aboutlink'>Más...</NavLink>  
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header