"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Button from "./button";
import TaskForm from "./taskForm";

interface Tasks {
  id: string;
  title: string;
  description: string;
  created_at: string;
  completed: boolean;
}

const TaskList = () => {
  const [task, setTask] = useState<Tasks[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteTask, setDeleteTask] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<Tasks | undefined>(
    undefined
  );
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("/api/tasks", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const tasks = await response.json();
        console.log("tasks", tasks);
        if (!response.ok) throw new Error("Error al cargar task");

        setTask(tasks);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const handleEdit = (task: Tasks) => {
    setSelectedTask(task);
    setShowForm(true);
    console.log(task);
  };
  const handleDelete = (task: Tasks) => {
    setSelectedTask(task);
    setShowForm(true);
    setDeleteTask(true);
    console.log(task);
  };

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      {showForm ? (
        <TaskForm task={selectedTask} isDelete={deleteTask} />
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="text-center">
              <TableHead>ID</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Fecha de Creación</TableHead>
              <TableHead>Completada</TableHead>
              <TableHead>Opciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="max-h-8 overflow-y-auto">
            {task.length > 0 ? (
              task.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.id}</TableCell>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>
                    {new Date(task.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{task.completed ? "Sí" : "No"}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleEdit(task)}
                      disabled={loading}
                      colors="edit"
                      className="w-32"
                    >
                      Editar Tarea
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDelete(task)}
                      disabled={loading}
                      colors="delete"
                      className="w-32"
                    >
                      Eliminar Tarea
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No hay tareas disponibles
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default TaskList;
