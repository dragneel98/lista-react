import React, {useRef} from "react"
import { Contact } from "../../../models/contact.class"
import propTypes from 'prop-types';

const ContactForm = ({add}) => {

    const nameRef= useRef('')
    
    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            false
        )
        add(newContact)
    }

    
    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='new contact'></input>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>add</button>
        </form>
    );
}

ContactForm.propTypes= {
    add:propTypes.func.isRequired
}

export default ContactForm;