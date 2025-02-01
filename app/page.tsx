import TaskList from "../components/list";
import TaskForm from "@/components/taskForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 bg-black p-8">
        <header className="w-full p-4">
          <h1 className="text-3xl font-bold text-white mb-4 text-center">
            📋 Editor de tareas Web
          </h1>
        </header>

        <div className="p-8 w-full max-w-4xl mx-auto flex-grow">
          <TaskForm />
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto flex-grow p-8">
        <h1 className="text-3xl font-bold mb-6 mt-4">Lista de tareas: </h1>
        <TaskList />
      </div>
    </div>
  );
}
