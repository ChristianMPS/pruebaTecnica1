"use client";
import Button from "./components/button";
import { useState } from "react";
import TaskList from "./components/list";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlerCreateTask = async () => {
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Nueva tarea 3",
        description: "Detalles de la tarea 3",
      }),
    });

    if (response.ok) {
      setMessage("✅ Tarea creada correctamente");
    } else {
      setMessage("❌ Error al crear la tarea");
    }

    setLoading(false);
  };
  const handlerEditTask = async () => {
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Nueva tarea",
        description: "Detalles de la tarea",
      }),
    });

    if (response.ok) {
      setMessage("✅ Tarea creada correctamente");
    } else {
      setMessage("❌ Error al crear la tarea");
    }

    setLoading(false);
  };
  const handleDeleteTask = async () => {
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Nueva tarea",
        description: "Detalles de la tarea",
      }),
    });

    if (response.ok) {
      setMessage("✅ Tarea creada correctamente");
    } else {
      setMessage("❌ Error al crear la tarea");
    }

    setLoading(false);
  };
  return (
    
    <div className="flex flex-col justify-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-3xl font-bold mb-4">
          Bienvenido a la App de Tareas
        </h1>

        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
          <Button onClick={handlerCreateTask} disabled={loading}>
            {loading ? "Creando..." : "Crear Tarea"}
          </Button>
          <Button onClick={handlerEditTask} disabled={loading}>
            {loading ? "Actualizando..." : "Actualizar Tarea"}
          </Button>
          <Button onClick={handleDeleteTask} disabled={loading}>
            {loading ? "Borrando..." : "Borrar Tarea"}
          </Button>
          {message && <p className="mt-2">{message}</p>}
        </div>
        <div className="p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Lista</h1>
          <TaskList />
        </div>
      </main>
    </div>
  );
}
