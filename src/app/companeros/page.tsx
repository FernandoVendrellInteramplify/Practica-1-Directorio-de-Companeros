"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { coworkers } from "@/lib/data";
import MemberCard from "@/components/MemberCard";

export default function CompanerosPage() {
  const [search, setSearch] = useState("");

  const filteredCoworkers = useMemo(() => {
    return coworkers.filter((coworker) =>
      coworker.nombre
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="animate-[fadeLeft_.7s_ease-out] text-4xl font-bold">
            Compañeros del equipo
          </h1>

          <p className="animate-[fadeLeft_.7s_ease-out] mt-2 text-zinc-600 dark:text-zinc-400">
            Listado interno de miembros del equipo.
          </p>
        </div>

        <Link
          href="/"
          className="animate-[fadeRight_.7s_ease-out] group inline-flex items-center gap-2 self-start text-sm font-medium text-blue-600 transition-all hover:gap-3 hover:text-blue-700 dark:text-blue-400"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>

          Volver al listado
        </Link>
      </div>

      <div className="animate-[fadeUp_0.6s_ease-out_forwards] mb-10">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Buscar por nombre"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-zinc-300 bg-zinc-50/70 py-4 pl-12 pr-4 text-zinc-900
              shadow-sm backdrop-blur transition-all duration-300 placeholder:text-zinc-400 focus:border-blue-600
              focus:outline-none focus:ring-4 focus:ring-blue-400/20 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-50"
          />
        </div>
      </div>

      {filteredCoworkers.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCoworkers.map((coworker, index) => (
            <div
              key={`${coworker.id}-${search}`}
              className="animate-[fadeUp_.45s_ease-out]"
              style={{
                animationDelay: `${index * 80}ms`,
                animationFillMode: "both",
              }}
            >
              <MemberCard coworker={coworker} />
            </div>
          ))}
        </section>
      ) : (
        <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700">
          <p className="text-zinc-500 dark:text-zinc-400">
            No se encontraron compañeros.
          </p>
        </div>
      )}
    </main>
  );
}