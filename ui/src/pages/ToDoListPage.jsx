import { useEffect, useState } from "react";
import api from "../api";

const ToDoListPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks')
      .then(response => setTasks(response.data))
  }, [])

  return (
    <>
      <h1>To Do List</h1>
      <ul>
        {tasks.map(task => (
          <li>{task.id}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDoListPage;
