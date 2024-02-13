import React, { useState } from "react";
import cls from "./ChangeTaskForm.module.scss";
import { useChangeTaskMutation } from "redux/tasksApi";

interface ChangeTaskFormProps {
  id: number;
  description: string;
  closeModal: (status: boolean) => void;
}

export const ChangeTaskForm = ({
  id,
  description,
  closeModal,
}: ChangeTaskFormProps) => {
  const [newTask, setNewTask] = useState(description);
  const [changeTask] = useChangeTaskMutation();

  const handleChangeTask = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newTask) {
      await changeTask({ id, description: newTask });
      closeModal(false);
    }
  };

  return (
    <>
      <h2 className={cls.title}>Окно изменения задачи</h2>
      <form className={cls.content}>
        <input
          className={cls.form_input}
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <div className={cls.btn_wrapper}>
          <button className={cls.btn} onClick={(e) => handleChangeTask(e)}>
            <p>Изменить</p>
          </button>
        </div>
      </form>
    </>
  );
};
