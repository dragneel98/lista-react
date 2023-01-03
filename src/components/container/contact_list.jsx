import React, {useState, useEffect} from 'react';
import { Contact } from '../../models/contact.class';
import {STATE} from '/src/models/state.js';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';


const ContactList = () => {

    const defaultContact = new Contact("gon",true)
    const [contacts, setContacts] = useState([defaultContact]);

     function addContact(contact) {
        console.log("add");
        const index= contacts.indexOf(contact)
        const tempContact= [...contacts]
        tempContact.push(contact)
        setContacts(tempContact)
    }

    function onlineContact(contact){
        console.log('complete this task', contact);
        const index= contacts.indexOf(contact)
        //todas las tareas hasta el momento
        const tempContact= [...contacts]
        tempContact[index].state = !tempContact[index].state
        //actualizamos el estado del componente y actualizamos
        // la iteracion de las tareas
        setContacts(tempContact)

    }
    function contactRemove(contact) {
        const index= contacts.indexOf(contact)
        const tempContact= [...contacts]
        //se usa la funcion slice pasando por parametro el indice y la cantidad que se quiere eliminar
        tempContact.splice(index,1)
        setContacts(tempContact)
    }
    return (
        <div>
            <h1>tus contactos</h1>
            <div>
                {contacts.map((contact, index)=>{
                    return(
                        <ContactComponent
                            key={index}
                            contact={contact}
                            state={onlineContact}
                            remove={contactRemove} 
                            >
                        </ContactComponent>
                    )
                })} 
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

export default ContactList;
