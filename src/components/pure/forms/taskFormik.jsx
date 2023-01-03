import React, { useRef } from 'react';
import propTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels';
import { Task } from '../../../models/task.class';

const TaskFormik = ({add, length}) => {

   const initialVal={
        tName: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL,
      }
   const taskSchema = Yup.object().shape(
      {
         tName: Yup.string()
             .max(12, 'name too long')
             .required('name is required'),
         description: Yup.string()
             .required('Email is required'),
         level: Yup.string()
             .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a level: normal urgent blocking')
             .required('level is required')
     }
    )
    
    function addTask(values){
        // e.preventDefault()
        // const newTask = new Task(
        //     tName.value,
        //     description.current.value,
        //     false,
        //     level.current.value
        // )
        // add(newTask)

        console.log(values)
    }
    
    return (
        <div>
    <h1>task form</h1>
    <Formik
      initialValues={ initialVal }
      validationSchema={taskSchema}
      onSubmit= 
      {addTask}
    >

      {({ values,
          touched,
          errors }) => 
      (
        <Form>
        <label htmlFor="tName">Task name</label>
        <Field id="tName" name="tName" placeholder="task name" />

        {
           errors.tName && touched.tName &&
          (<ErrorMessage name="tName" component='div'></ErrorMessage>)
        }

        <label htmlFor="description">description</label>
        <Field id="description" name="description" placeholder="description" />

        <select htmlFor="level" name="level">
                    <option  value={LEVELS.NORMAL}>
                        NORMAL
                    </option>
                    <option  value={LEVELS.URGENT}>
                        URGENT
                    </option>
                    <option  value={LEVELS.BLOCKING}>
                        BLOCKING
                    </option>
        </select>
        <button type="submit">addTask</button>
      </Form>
      )
    }
    </Formik>

  </div>
    );
}

export default TaskFormik;
