import React , {useState} from 'react';
import PropTypes from 'prop-types';


const Greting = (props) => {
    //use state
    //const [variable, metodo para actualizar] = usestate(estado inicial)
    const [age, setage] = useState(24);
    const birthday = ()=>{
        setage(age+1)
    }
    return (
        <div>
            <h1> hola {props.name} </h1>
            <h2> edad {age} </h2>
            <div>
                <button onClick={birthday}>cumplir años</button>
            </div>
        </div>
    );
};


Greting.propTypes = {
    name: PropTypes.string
};


export default Greting;
