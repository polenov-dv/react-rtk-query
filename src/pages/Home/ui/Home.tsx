import { useState } from "react";
import cls from "./Home.module.scss";
import { useGetTasksQuery, useAddTaskMutation } from "redux/tasksApi";
import { Task } from "components/Task";

export const Home = () => {
  const { data: tasks, isLoading, isError } = useGetTasksQuery("");
  const [addTask] = useAddTaskMutation();
  const [newTask, setNewTask] = useState("");

  //Добавление элемента в БД
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask) {
      await addTask({ description: newTask });
      setNewTask("");
    }
  };

  //Ошибка при загрузке данных
  if (isError) {
    return <h1>Ошибка получения данных от сервера !</h1>;
  }

  return (
    <main className={`${cls.inner} container`}>
      <h1 className={cls.title}>Список задач:</h1>
      <form onSubmit={handleSubmit} className={cls.form_content}>
        <input
          className={cls.form_input}
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <button type="submit" className={`${cls.btn} ${cls.btn_create}`}>
          Создать
        </button>
      </form>
      {!isLoading && (
        <ul className={cls.list}>
          {tasks.map((task) => (
            <Task key={task.id} id={task.id} description={task.description} />
          ))}
        </ul>
      )}
    </main>
  );
};
