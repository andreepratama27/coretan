import Image from 'next/image'
import AddIcon from 'public/add.svg'
import FooterInput from "./components/FooterInput";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <>
      <div className="container max-w-xl mx-auto">
        <div className="w-full flex items-center gap-4 p-4 bg-gray-700 border-2 border-gray-500 border-dashed">
          <Image className="w-6 h-6" src={AddIcon} alt="Folder Icon" />
          <p className="text-gray-400">Create Folder</p>
        </div>
        <TodoList />
      </div>

      <FooterInput />
    </>
  );
}
