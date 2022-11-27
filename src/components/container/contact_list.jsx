import React, {useState, useEffect} from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';

const ContactList = () => {

    const defaultContact = new Contact("gon",false)
    const [contacts, setContacts] = useState([defaultContact]);

     function addContact(contact) {
        console.log("add");
        const index= contacts.indexOf(contact)
        const tempContact= [...contacts]
        tempContact.push(contact)
        setContacts(tempContact)
    }
    // function contactRemove() {
        
    // }
    return (
        <div>
            <h1>tus contactos</h1>
            <div>
                {contacts.map((contact, index)=>{
                    return(
                        <ContactComponent
                            key={index}
                            contact={contact}
                            // {/* remove={contactRemove} */}
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
