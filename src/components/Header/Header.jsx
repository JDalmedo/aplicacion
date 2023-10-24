import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return(
        <header>
            <h1>Hola a todos.</h1>
            <nav>
                
                <ul>
                        <li>
                            <NavLink to='/' className='homelink'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/herram' className='herramlink'>Tools</NavLink>   
                        </li>
                        <li>
                            <NavLink to='/about' className='aboutlink'>Contact</NavLink>  
                        </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header