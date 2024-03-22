/* eslint-disable react/prop-types */
import style from "./task.module.css";
import { LuTrash2 } from "react-icons/lu";
import { BsFillCheckCircleFill } from "react-icons/bs";

export function Task({ task, onComplete, onDelete }) {
  return (
    <div className={style.task}>
      <button
        className={style.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted ? style.textCompleted : ""}>
        {task.title}
      </p>
      <button className={style.deleteButton} onClick={() => onDelete(task.id)}>
        <LuTrash2 size={20} />
      </button>
    </div>
  );
}
