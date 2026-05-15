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
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center transition-all duration-500 ${
      leaving
        ? "scale-110 opacity-0 blur-sm"
        : "scale-100 opacity-100"
      }`}>
        
      <div className="max-w-2xl space-y-8 rounded-3xl borderborder-white/20 bg-white/70 p-12
        shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70">
          
        <h1 className="animate-fade-up text-5xl font-bold tracking-tight">
          Directorio del equipo
        </h1>

        <p className="animate-fade-up mx-auto max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Consulta la información de los compañeros del equipo y descubre sus tecnologías favoritas.
        </p>

        <button
  onClick={handleClick}
  className="animate-fade-up group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4
    font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300
    hover:-translate-y-1 hover:scale-105 hover:bg-blue-500 hover:shadow-2xl
    dark:bg-blue-500 dark:hover:bg-blue-400"
  >
  Ver compañeros
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</button>
      </div>
    </main>
  );
}