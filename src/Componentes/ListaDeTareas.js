import React, { useState } from 'react';
import '../Hojas-De-Estilo/ListaDeTareas.css';
import Tarea from './Tarea';
import Form from './TareaFormulario';

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas)
    };
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <Form onSubmit={ agregarTarea } />
      <div className='listas-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
            completarTarea={completarTarea}
            eliminarTarea= {eliminarTarea}
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada} />
          )
        }
      </div>
    </>
  );
};

export default ListaDeTareas