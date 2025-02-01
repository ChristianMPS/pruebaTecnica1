"use client";

import { useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Button from "./button";

interface Task {
  id?: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskFormProps {
  task?: Task;
  onClose?: () => void;
  isDelete?: boolean;
}

const TaskForm = ({ task, onClose, isDelete }: TaskFormProps) => {
  const [formData, setFormData] = useState<Task>({
    title: "",
    description: "",
    completed: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [deleteTask, setDeleteTask] = useState(false);

  useEffect(() => {
    if (task) {
      setFormData(task);
    }
  }, [task]);

  useEffect(() => {
    if (isDelete === true) {
      setDeleteTask(true);
    }
  }, [isDelete]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, checked, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlerCreateTask = async () => {
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
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

    const response = await fetch(`/api/tasks/${task?.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setMessage("✅ Tarea editada correctamente");
    } else {
      setMessage("❌ Error al editar la tarea");
    }

    setLoading(false);
  };

  const handlerDeleteTask = async () => {
    setLoading(true);
    setMessage("");

    const response = await fetch(`/api/tasks/${task?.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setMessage("✅ Tarea editada correctamente");
    } else {
      setMessage("❌ Error al editar la tarea");
    }

    setLoading(false);
  };

  return (
    <form className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Ejemplo: Jugar tennis"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción</Label>
        <Input
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Ejemplo: Ir a jugar tennis con un amigo"
        />
      </div>
      {!task && !deleteTask ? (
        <Button onClick={() => handlerCreateTask()} disabled={loading}>
          {loading ? "Creando..." : "Crear Tarea"}
        </Button>
      ) : (
        ""
      )}

      {task && !deleteTask ? (
        <>
          <div className="space-y-2">
            <Label htmlFor="completada">Completada</Label>
            <Input
              id="completada"
              name="completed"
              type="checkbox"
              checked={formData.completed}
              onChange={handleChange}
            />
          </div>
          <Button onClick={handlerEditTask} disabled={loading} colors="edit">
            {loading ? "Editando..." : "Editar Tarea"}
          </Button>
          <Button onClick={onClose} disabled={loading} colors="edit">
            Volver
          </Button>
        </>
      ) : (
        ""
      )}

      {task && deleteTask ? (
        <>
          <div className="space-y-2">
            <Label htmlFor="completada">Completada</Label>
            <Input
              id="completada"
              name="completed"
              type="checkbox"
              checked={formData.completed}
              onChange={handleChange}
            />
          </div>
          <Label>¿Esta seguro de borrar esta tarea?</Label>
          <Button
            onClick={handlerDeleteTask}
            disabled={loading}
            colors="delete"
          >
            {loading ? "Borrando..." : "Borrar Tarea"}
          </Button>
          <Button onClick={onClose} disabled={loading} colors="edit">
            Volver
          </Button>
        </>
      ) : (
        ""
      )}

      {message && <p className="mt-2">{message}</p>}
    </form>
  );
};

export default TaskForm;
