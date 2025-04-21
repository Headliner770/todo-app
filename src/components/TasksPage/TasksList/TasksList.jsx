import { useTasks } from "../../../hooks/useTasks.jsx";
import { useCategories } from "../../../hooks/useCategories.jsx";
import { Modal } from "../../Modal/Modal";
import { PenLine, Trash2 } from "lucide-react";
import { toast } from "react-toastify";

export const TasksList = () => {
  const { tasks, addTask, editTask, deleteTask, toggleComplete, receiveTasks } =
    useTasks();
  const { categories } = useCategories();

  const [modalOpen, setModalOpen] = useState();
  const [editTask, setEditTask] = useState();
  const [taskTitle, setTaskTitle] = useState();

  const OpenAddModal = () => {};

  const OpenEditModal = () => {};

  const CloseModal = () => {};

  return (
    <div>
      <div>
        <h2>Все задачи</h2>
        <button>Добавить</button>
      </div>
      <div>
        <div></div>
      </div>

      <Modal>
        <form onSubmit={handle}></form>
      </Modal>
    </div>
  );
};
