import { NavLink } from 'react-router-dom';
import './Herram.css';

const Herram = () => {
    return (
        <>
                <div className='container'>
                    <div className='sp500'>
                        <img src="/sp500.png" alt="sp500" />
                            <a href="https://www.bbvatrader.com/bolsas-y-mercados-indices/indice/s-p-500/SP500/XCME">Trader</a>
                    </div>
                    <div className='code'>
                        <img src="/code.gif" alt="code" />
                            <a href="https://thepower.education/bootcamp-fullstack">Código</a>
                    </div>
                    <div className='key'>
                        <img src="/key.gif" alt="key" />
                            <a href="https://www.online-iso-calculator.com/Calculo_par_de_Apriete/index.php">Pares de Apriete</a>
                    </div>
                    <div className='motor'>
                        <img src="/Motor-4-tiempos.gif" alt="motor" />
                            <NavLink to ="https://youtu.be/7np9rhQmNTU">Motores</NavLink>
                    </div>

                </div>
        </>
    );    
};


    
export default Herram;