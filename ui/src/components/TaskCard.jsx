import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { deleteTask } from "../api/tasks";

function TaskCard({ task, onDelete }) {
  const navigate = useNavigate();

  async function destroyTask() {
    const acepted = window.confirm("Tem certeza?");
    if (acepted) {
      await deleteTask(task.id);
      toast.success("Aula deletada com sucesso");
      onDelete(task.id);
    }
  }

  return (
    <div className="d-flex justify-content-between">
      <div>
        <h2>{task.title}</h2>
        {task.description && <p className="mt-3">Descrição: {task.description}</p>}
      </div>
      <div>
        <button onClick={() => navigate(`task-show/${task.id}`)} className="btn btn-custom rounded-3 me-2 fw-bold">
          Editar
        </button>
        <button onClick={destroyTask} className="btn btn-custom-danger rounded-3 fw-bold text-light">
          Excluir
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
