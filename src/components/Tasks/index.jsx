/* eslint-disable react/prop-types */
import { Task } from "../task";
import style from "./tasks.module.css";

export function Tasks({ tasks , onComplete, onDelete}) {
  const taskQuantity = tasks.length;
  const taskCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={style.tasks}>
      <header className={style.header}>
        <div>
          <p>Created Tasks</p>
          <span>{taskQuantity}</span>
        </div>
        <div>
          <p className={style.textPurple}>Completed</p>
          <span>
            {taskQuantity} of {taskCompleted}
          </span>
        </div>
      </header>

      <div className={style.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
        ))}
      </div>
    </section>
  );
}
