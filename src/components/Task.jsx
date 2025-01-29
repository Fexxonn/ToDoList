import React from "react";

const Task = (props) => {
  return (
    <div className="taretita">
      <div className="NameText">
        <input type="checkbox" />
        <p>{props.tarea}</p>
      </div>
      <div id="imagen" onClick={() => props.Eliminar(props.index)}></div>
      
    </div>
  );
};

export default Task;
