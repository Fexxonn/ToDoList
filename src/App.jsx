import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import "./App.css";

export default function ToDoList() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState(
    JSON.parse(localStorage.getItem("tareas")) || []
  );
  const ActualizarTexto = (e) => setTexto(e.target.value);

  window.onkeydown = (e) => {
    if (e.key === "Enter") {
      AgregarTarea();
    }
  };

  const AgregarTarea = () => {
    if (texto.trim()) {
      const nuevasTareas = [...tareas, texto];
      setTareas([...tareas, texto]);

      localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
      setTexto("");
    }
  };

  const EliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
    localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
  };

  return (
    <div className="container">
      <div className="todo-wrapper">
        <h1>To Do List</h1>
        <div className="input-group">
          <input
            type="text"
            className="task-input"
            onChange={ActualizarTexto}
            value={texto}
            placeholder="Añadir tarea"
          />
          <button className="add-btn" onClick={AgregarTarea}>
            <FaPlus />
          </button>
        </div>
        <div className="task-list">
          {tareas.length === 0 ? (
            <p className="empty-text">No hay tareas pendientes</p>
          ) : (
            tareas.map((tarea, index) => (
              <div key={index} className="task-item">
                <span>{tarea}</span>
                <button
                  className="delete-btn"
                  onClick={() => EliminarTarea(index)}
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
