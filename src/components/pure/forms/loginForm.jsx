//componente que contiene formulario login
//autenticacion de usuarios

import React , {useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const LoginForm = () => {
    const initialCredentials =[
        {
            user:"",
            password:""
        }
    ]

    const [credentials, setCredentials] = useState(initialCredentials);
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
