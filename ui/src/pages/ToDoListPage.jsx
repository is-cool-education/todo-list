import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../api/api";
import TaskCard from "../components/TaskCard";

const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    api.get("/tasks").then((response) => setTasks(response.data));
  }, []);

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="container">
      <h1 className="text-center text-light mb-5">Suas Tarefas</h1>
      <ul className="list-unstyled">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 bg-light mb-3 rounded-4">
            <TaskCard task={task} onDelete={handleDeleteTask} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoListPage;
