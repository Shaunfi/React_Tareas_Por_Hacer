import React from 'react';
import '../Hojas-De-Estilo/Tarea.css';
import { AiFillStop } from 'react-icons/ai';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={ completada ? 'completada contenedor' : 'contenedor'}>
      <div className='texto' onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className='contenedor-icono' onClick={() => eliminarTarea(id)}>
        <AiFillStop className='icono'/>
      </div>
    </div>
  );
};


export default Tarea;