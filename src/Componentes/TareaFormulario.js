import React, { useState } from 'react';
import '../Hojas-De-Estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';


function Form(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value)
  };

  const manejarEnvio = e => {
    e.preventDefault()
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva);
  };

  return (
    <form className='formulario' onSubmit={ manejarEnvio }>
      <input className='input' type='text' placeHolder='Agregar Tarea...' name='123123' onChange={ manejarCambio }/>
      <button className='boton'>Agregar Tarea</button>
    </form>
  );
};



export default Form