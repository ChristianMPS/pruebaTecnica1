'use client'; 
import { useState } from 'react';

export default function TaskPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleCreateTask = async () => {
    setLoading(true);
    setMessage('');

    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Nueva tarea',
        description: 'Detalles de la tarea',
      }),
    });

    if (response.ok) {
      setMessage('✅ Tarea creada correctamente');
    } else {
      setMessage('❌ Error al crear la tarea');
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
      <button
        onClick={handleCreateTask}
        className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? 'Creando...' : 'Crear Tarea'}
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}