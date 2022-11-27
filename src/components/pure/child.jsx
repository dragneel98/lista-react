import React, { useRef } from 'react';


const Child = ({ name, send, update }) => {

    const messageRef= useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value
        alert(`default text ${text}`)
    }
    function pressButtonParams(text){
        alert(`texto ${text}`)
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }
    
    return (
        <div>
            <p onMouseOver={()=>console.log('mouse over')}>
             hola {name}
             </p>
            <button onClick={() => console.log('boton 1 pulsado')}>
                boton 1
            </button>
            <button onClick={pressButton}>
                boton 2
            </button>
            {/* las funciones con parametros se tiene que llamar con una funcion anonima por que si no
            se ejecutan cuando carga la pagina en ves de con el evento  */}
            <button onClick={ ()=> pressButtonParams ('hola')}>
                boton 3
            </button>
            <input 
            placeholder='tu mensaje'
            onFocus={()=> console.log('focus')}
            onChange={(event)=> console.log('change', event.target.value)}
            onCopy={()=> console.log('copy')}
            ref= {messageRef}
            ></input>
            <button onClick={()=> send(messageRef.current.value)}>
                send message
            </button>
            <form onSubmit={submitName}>
                <input ref={nameRef} placeholder='new name'></input>
                <button type='submit'>update name</button>
            </form>
        </div>
    );
}

export default Child;
