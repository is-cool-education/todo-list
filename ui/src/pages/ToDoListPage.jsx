import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../api/api";

const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    api.get("/tasks").then((response) => setTasks(response.data));
  }, []);

  return (
    <>
      <div>
        <h1>To Do List</h1>
        <button onClick={() => navigate("/task-show")}>Criar tarefa</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoListPage;
