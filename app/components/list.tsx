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

interface Campaign {
  id: string;
  title: string;
  description: string;
  created_at: string;
  completed: boolean;
}

const TaskList = () => {
  const [task, setTask] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) return <p>Cargando campañas...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Fecha de Creación</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {task.length > 0 ? (
          task.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.id}</TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>
                {new Date(task.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>{task.completed}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              No hay tareas disponibles
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TaskList;
