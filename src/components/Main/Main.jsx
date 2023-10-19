import './Main.css'


const Main = () => {

    return(
        <>
          <div className='container'>
            <div className='sp500'>
                        <img src="/sp500.png" alt="sp500" />
                          <p>Trading</p>
                            <a href="null" />
            </div>
            <div className='code'>
                        <img src="/code.gif" alt="code" />
                          <p>Código</p>
                            <a href="null" />
            </div>
            <div className='key'>
                        <img src="/key.gif" alt="key" />
                          <p>Calculadora de Par de Apriete</p>
                            <a href="null" />
            </div>
            <div className='motor'>
                        <img src="/Motor-4-tiempos.gif" alt="motor" />
                          <p>Ciclo de motor de cuatro tiempos</p>
                            <a href="null" />
            </div>

          </div>
        </>
    );

}

export default Main