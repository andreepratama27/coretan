"use client";

import { useSnapshot } from "valtio";
import { store } from "../../store";
import type { Status } from "../../store";

export default function TodoList() {
  const snap = useSnapshot(store);

  const onDeleteTodo = (index: number) => {
    let filterTodos = snap.todos.filter((item) => item.id !== index);
    store.todos = filterTodos;
  };

  const markAsComplete = (index: number) => {
    let updateTodos = snap.todos.map((item) => {
      if (item.id === index) {
        return {
          ...item,
          status: "completed" as Status,
        };
      }

      return {
        ...item,
      };
    });

    store.todos = updateTodos;
  };

  return (
    <div className="py-8 list">
      <ul>
        {snap.todos.map((item) => (
          <li className="flex items-center gap-6 px-4 py-2" key={item.id}>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <p
              className={`text-white ${
                item.status === "completed" ? "line-through text-gray-500" : ""
              }`}
              role="button"
              onClick={() => markAsComplete(item.id)}
            >
              {item.description}
            </p>

            <button
              onClick={() => onDeleteTodo(item.id)}
              className="px-2 py-0 text-white border border-dashed hover:bg-red-500 hover:border-white"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
