import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className='error'>
                <img className='notfound' src="/error.png" alt="error" />
                <h2>¡¡¡¡Uy!!!!, parece que no hay nada.</h2>
             </div>
        </>
    )
};

export default NotFound;