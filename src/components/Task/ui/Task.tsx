import { useState } from "react";
import cls from "./Task.module.scss";
import { CustomModal } from "components/CustomModal";
import { ChangeTaskForm } from "components/ChangeTaskForm";
import { useDeleteTaskMutation } from "redux/tasksApi";

interface TaskProps {
  id: number;
  description: string;
}

export const Task = ({ id, description }: TaskProps) => {
  const [modal, setModal] = useState(false);
  const [deleteTask] = useDeleteTaskMutation();

  //Удаление элемента с БД
  const handleDeleteTask = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault();
    await deleteTask(id);
  };

  return (
    <li className={cls.list_item}>
      <CustomModal visible={modal} setVisible={setModal}>
        <ChangeTaskForm
          id={id}
          description={description}
          closeModal={setModal}
        />
      </CustomModal>
      <p>{description}</p>
      <div className={cls.func}>
        <button
          onClick={() => setModal(true)}
          className={`${cls.btn} ${cls.btn_change}`}
        >
          Изменить
        </button>
        <button onClick={(e) => handleDeleteTask(e, id)} className={cls.btn}>
          Удалить
        </button>
      </div>
    </li>
  );
};
