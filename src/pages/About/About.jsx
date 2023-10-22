import './About.css';

const About = () => {
    return (
    <>
        <div className='formulario'>
            <h2>Desde aquí puede contactarme</h2>
            <form action="/my-handling-form-page" method="post">
                <ul>
                    <li>
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="user_name" />
                    </li>
                    <li>
                        <label for="mail">Correo electrónico:</label>
                        <input type="email" id="mail" name="user_mail" />
                    </li>
                    <li>
                        <label for="msg">Mensaje:</label>
                        <textarea id="msg" name="user_message"></textarea>
                    </li>
                    <li className='button'>
                        <button type='submit'>Enviar</button>
                    </li>
                </ul>
            </form>
        </div>

    </>
    )
};

export default About;