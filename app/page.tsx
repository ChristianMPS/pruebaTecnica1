"use client";

import TaskList from "../components/list";
import TaskForm from "@/components/taskForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-3xl font-bold mb-4">
          Bienvenido a la Web de Tareas
        </h1>
        <div className="p-8 max-w-4xl mx-auto">
          <TaskForm />
        </div>
        <div className="p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Lista de tareas: </h1>
          <TaskList />
        </div>
      </main>
    </div>
  );
}
