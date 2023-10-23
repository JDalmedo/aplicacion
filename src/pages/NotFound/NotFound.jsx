import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className='error'>
                <img className='notfound' src="/error.png" alt="error" />
                <h2>Not found</h2>
             </div>
        </>
    )
};

export default NotFound;