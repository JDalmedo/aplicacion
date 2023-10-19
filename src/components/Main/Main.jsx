import './Main.css'


const Main = () => {

    return(
        <main>
          <div className='container'>
            <div className='sp500'>
                 <img src="/sp500.png" alt="sp500" />
                    <a href="null">Trading</a>
            </div>
            <div className='code'>
                 <img src="/code.gif" alt="code" />
                    <a href="null">Código</a>
            </div>
            <div className='key'>
                  <img src="/key.gif" alt="key" />
                     <a href="null">Pares de Apriete</a>
            </div>
            <div className='motor'>
                  <img src="/Motor-4-tiempos.gif" alt="motor" />
                     <a href="null">Motor de Cuatro Tiempos</a>
            </div>

          </div>
        </main>
    );

}

export default Main