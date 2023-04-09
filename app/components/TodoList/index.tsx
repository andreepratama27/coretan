"use client";

import { useSnapshot } from "valtio";
import { store } from "../../store";

export default function TodoList() {
  const snap = useSnapshot(store);

  return (
    <div className="list">
      <ul>
        {snap.todos.map((item) => (
          <li className="flex items-center gap-6 p-4" key={item.id}>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <p className="text-white">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
