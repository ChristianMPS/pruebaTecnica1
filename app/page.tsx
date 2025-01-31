import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">
          Bienvenido a la App de Tareas
        </h1>
        <Link href="/tasks">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            📋 Ver Tareas
          </button>
        </Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a>Prueba tecnica 1 FullStack Junior</a>
      </footer>
    </div>
  );
}
