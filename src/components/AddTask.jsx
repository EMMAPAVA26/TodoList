import React, { useState } from "react";
import { TodoList } from "./TodoList";
import './AddTask.css'; 
import { TextType } from "./TextType";
 

export const AddTask = () => {
  // Estado para alamacenar  el valor del campo de entrada
  const [newTask, setNewTask] = useState("");
  // estado para manejar el  formukario
  const [tasks, setTasks] = useState([]);

  // Estado para manejar el cambio de en el campo de entrada
  const handleInputChange = (event) => {
    setNewTask(event.target.value); // Actualiza el estado con el nuevo valor
  };

  // Funcion para manejar el envio del formulario
  const handleFormSubmit = (event) => {
    event.preventDefault(); // evita que el formulario se actaulice por defecto
    if (newTask.trim() !== "") {
      // se quita los espacios de entrada y salda, que tenga un valor significativo que sea diferente de vacio para que se realice el
      const newTaskObject = {
        // se crea un nuevo objeto de tareas con tres propiedades
        id: new Date().getTime(), // Genera un identificador unico
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]); // |
      setNewTask(""); // limpia el campo de entrada  depués de enviar el formulario
    }
  };

  // Función para eliminar una tarea

  const handleDeleteTask = (taskToDelete) => {
    const deletedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(deletedTasks);
  };

  // función para completar una tarea
  const toggleTaskCompletion = (taskId) => {
    const completedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(completedTasks);
  };

  // // Función para contar todas las tareas
  // const todoApp = () => {
  //   return tasks.length;
  // };

  // función para contar las tareas pendientes
  const earringsApp = () => {
    return tasks.filter((task) => !task.completed).length;
  };

  return (
    <div className="container">
      <header >
        <TextType tagName="h1">Todo App: <span>{ tasks.length}</span> </TextType>
        <TextType tagName="h2">Pendientes:{earringsApp()}</TextType>
        <TextType tagName="p" textContent={'App de Tareas Emma Pava'}/>
      </header>
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Agregar una tarea"
        />
        <button type="submit"  className= "add-button ">Agregar</button>
      </form>
      <TodoList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};
