import React from 'react';

function ContactForm(props) {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')

    console.log(name, email)
    function sendForm(event) {
        event.preventDefault()
        console.log(name, email)
    }
    function changeName(event) {
        setName(event.target.value)
    }

    function changeEmail(event) {
        setEmail(event.target.value)
    }

    return (
        <div className='contact-form'>
            <form onSubmit={sendForm}>
                <div>
                    <input onChange={changeName} type='text' placeholder='Введите ваше имя' name='name'/>
                </div>
                <div>
                    <input onChange={changeEmail} type='text' placeholder='Ваш email' name='email'/>
                </div>
                <div>
                    <input type='submit' value='Отправить'/>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;