import Link from "next/link";
import { coworkers } from "@/lib/data";
import MemberCard from "@/components/MemberCard";

export default function CompanerosPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Compañeros del equipo
          </h1>

          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Listado interno de miembros del equipo.
          </p>
        </div>

        <Link
          href="/"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Volver al inicio
        </Link>
      </div>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coworkers.map((coworker) => (
          <MemberCard
            key={coworker.id}
            coworker={coworker}
          />
        ))}
      </section>
    </main>
  );
}