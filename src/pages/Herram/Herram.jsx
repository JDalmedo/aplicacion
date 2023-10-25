import { NavLink } from 'react-router-dom';
import './Herram.css';

const Herram = () => {
    return (
        <>
                <div className='container'>
                    <div className='sp500'>
                        <img src="/sp500.png" alt="sp500" />
                            <a href="https://www.google.com/finance/?sca_esv=576600514&rlz=1C1UEAD_esES1065ES1069&output=search&source=lnms&sa=X&ved=2ahUKEwie9va9-5GCAxVDT6QEHdY8BysQ0pQJegQIRBAB">Trader</a>
                    </div>
                    <div className='code'>
                        <img src="/code.gif" alt="code" />
                            <a href="https://www.w3schools.com/html/html_scripts.asp">Código</a>
                    </div>
                    <div className='key'>
                        <img src="/key.gif" alt="key" />
                            <a href="https://www.online-iso-calculator.com/Calculo_par_de_Apriete/index.php">Pares de Apriete</a>
                    </div>
                    <div className='motor'>
                        <img src="/Motor-4-tiempos.gif" alt="motor" />
                            <NavLink to ="/motores">Motores</NavLink>
                    </div>

                </div>
        </>
    );    
};


    
export default Herram;