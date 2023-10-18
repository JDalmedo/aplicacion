import './Main.css'


const Main = () => {

    return(
        <>
            <div className='main'>
                <ul>
                   <li>
                        <img src="/fondoindexado.png" alt="fondo_indexado" />
                          <p>Trading</p>
                            <a href="null" alt="fondo" />
                    </li>
                    <li>
                        <img src="/code.gif" alt="code" />
                          <p>Código</p>
                            <a href="null" alt="code." />
                    </li>
                    <li>
                        <img src="/key.gif" alt="key" />
                          <p>Calculadora de Par de Apriete</p>
                            <a href="null" alt="key." />
                    </li>
                    <li>
                        <img src="/Motor-4-tiempos.gif" alt="motor" />
                          <p>Ciclo de motor de cuatro tiempos</p>
                            <a href="null" alt="motor." />
                    </li>
                </ul>
            </div>
        </>
    );

}

export default Main