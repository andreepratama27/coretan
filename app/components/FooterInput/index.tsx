"use client";
import React, { useRef } from "react";
import { store } from "../../store";

export default function FooterInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = inputRef?.current?.value as string;

    if (e.code === "Enter") {
      store.todos.push({
        id: Date.now(),
        description: inputValue,
        status: "pending",
      });

      inputRef.current.value = "";
    }
  };

  return (
    <footer className="absolute bottom-0 w-full p-4 border-t border-gray-900">
      <div className="w-full max-w-xl mx-auto">
        <input
          ref={inputRef}
          type="text"
          placeholder="Write Here"
          className="w-full p-4 text-gray-400 bg-gray-900 rounded outline-none"
          onKeyDown={onKeyDown}
        />
      </div>
    </footer>
  );
}
