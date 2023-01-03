import React,{useState} from 'react';

function LogoutButton({logoutAction}) {
    return(
        <button onClick={logoutAction}>logout</button>
    )
}
function LoginButton({loginAction}) {
    return(
        <button onClick={loginAction}>login</button>
    )
}

// (expresion true) && => se renderiza la expresion
// (expresion false) && => no se renderiza la expresion
const OptionalRender = () => {

    const [access, setAccess] = useState(true);
    const [message, setMessage] = useState(0);
    // function updateAccess() {
    //     setAccess(!access);
    // }

    function loginAction() {
        setAccess(true)
    }
    function logoutAction() {
        setAccess(false)
    }

    let optionalButton;

    // if (access) {
    //     optionalButton = <button onClick={updateAccess}>login</button>
    // }
    // else{
    //     optionalButton = <button onClick={updateAccess}>logout</button>
    // }

    if (access) {
        optionalButton = <LoginButton loginAction={loginAction}></LoginButton>
    }
    else{
        optionalButton = <LogoutButton logoutAction={logoutAction}></LogoutButton>
    }

    //unread messages

    let addMessages = ()=> {
        setMessage(message + 1)
    }
    
    return (
        <div>
        {/* {optional button} */}
            {optionalButton}
            {/* {messages unread} */}
            {/* {message > 0 && message == 1 && <p>you have {message} new message</p>}
            {message > 0 && message < 1 && <p>you have {message} new messages</p>}
            {message == 0 && <p> there are no new messages</p>} */}
            
            {/* {operador ternario} */}
            {message > 0 ?
                <p>you have {message} new message{message > 1 ? "s": null}</p> :
                <p>there are no new messages</p>
            }
            
            <button onClick={addMessages}> {message === 0 ? "add your first message" : "add new message"} add new message</button>
        </div>
    );
}

export default OptionalRender;
