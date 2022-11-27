import React ,{useState} from 'react';

//estilo para usuario logeado
const loggedStyle = {
    color : 'blue'
}
const unloggedStyle = {
    color : 'tomato',
    fontWeigth : 'bold'
}
const GretingStyle = (props) => {
    //estado del componenete para controlar si el usuario esta logeado o no
    const [logged, setlogged] = useState(false);
    //los operadores tenernarios se pueden usar para devolver un componente html
    return (
        <div style={logged ? loggedStyle : unloggedStyle }>
        
            {logged ? ( <p>hola {props.name} </p>) : ("please login")}
           
            <button onClick={() => {
                console.log(" boton pulsado ")
                setlogged(!logged)
            }}> 
            {logged ? 'logout' : 'login' } 
            </button>
        </div>
    );
}

export default GretingStyle;
