import './Motores.css'

const Motores = () => {
    return (
        <>
            <div className='engine'>
                <video controls autoPlay>
                    <source src='/video/Funcionamiento.mp4' type='video/mp4'/>
                    <source src='/video/Funcionamiento.ogg' type='video/ogg'/>
                </video>   
            </div>
        </>
    );    
};

export default Motores;