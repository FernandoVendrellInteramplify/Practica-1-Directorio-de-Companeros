"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  const handleClick = () => {
    setLeaving(true);

    setTimeout(() => {
      router.push("/companeros");
    }, 400);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center px-6 text-center transition-all duration-500 ${
        leaving
          ? "scale-110 opacity-0 blur-sm"
          : "scale-100 opacity-100"
      }`}
    >
      <div className="max-w-2xl space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Directorio del equipo
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Consulta la información de los compañeros del equipo y
          descubre sus tecnologías favoritas.
        </p>

        <button
          onClick={handleClick}
          className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-400 dark:bg-blue-400 dark:text-zinc-950 dark:hover:bg-blue-300"
        >
          Ver compañeros
        </button>
      </div>
    </main>
  );
}