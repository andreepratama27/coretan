import localFont from "next/font/local";
import FooterInput from "./components/FooterInput";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

const virgil = localFont({
  src: "./fonts/Virgil.woff2",
});

export default function Home() {
  return (
    <>
      <div className="container max-w-xl mx-auto">
        <div className="w-full p-4 bg-gray-700 border-2 border-gray-500 border-dashed">
          <p className="text-gray-400">Create Folder</p>
        </div>
        <TodoList />
      </div>

      <FooterInput />
    </>
  );
}
