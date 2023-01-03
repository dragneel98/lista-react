import React from 'react';

const ContactComponent = ( {contact, remove, state} ) => {

        function contactStateIcon() {
            if (contact.state) {
                return (<i onClick={()=> state(contact)} className='bi-toggle-on contact-action' style={{color:'green'}}></i>)
            }
            else{
                return (<i onClick={()=> state(contact)} className='bi-toggle-off contact-action' style={{color:'grey'}}></i>)
            }
        }

    return (
        <div>
            <h1>  {contact.name} </h1>
            <h2>  {contactStateIcon()} </h2>
            <i onClick={()=> remove(contact)} className='bi-trash task-action' style={{color:'red'}}></i>
        </div>
    );
}

export default ContactComponent;
