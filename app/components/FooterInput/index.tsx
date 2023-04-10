"use client";
import React, { useRef } from "react";
import Image from 'next/image'
import Icon from 'public/edit.svg'
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
      <div className="w-full max-w-xl mx-auto relative bg-gray-900 rounded flex items-center">
        <Image src={Icon} alt="Write Icon" className="w-6 h-6 absolute left-4" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Write Here"
          className="p-4 ml-10 w-full text-gray-400 bg-transparent rounded outline-none"
          onKeyDown={onKeyDown}
        />
      </div>
    </footer>
  );
}
