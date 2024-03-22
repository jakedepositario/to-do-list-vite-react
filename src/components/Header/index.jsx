/* eslint-disable react/prop-types */
import todoLogo from "../../assets/Logo.svg";
import style from "./header.module.css";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

export function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  return (
    <header className={style.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={style.newTaskForm}>
        <input
          placeholder="add a new task"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Create
          <CiCirclePlus size={25} />
        </button>
      </form>
    </header>
  );
}
