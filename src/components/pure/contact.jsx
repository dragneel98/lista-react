import React from 'react';

const ContactComponent = ( {contact, remove} ) => {
    
    return (
        <div>
        <p>gg</p>
            <h1>  {contact.name} </h1>
            <h2>  {contact.state} </h2>
        </div>
    );
}

export default ContactComponent;
