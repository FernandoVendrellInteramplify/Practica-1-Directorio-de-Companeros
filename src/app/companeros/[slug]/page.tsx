import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { slugify } from "@/lib/slugify";

import { coworkers } from "@/lib/data";

interface PageProps {
  params: {
    slug: string;
  };
}


export async function generateStaticParams() {
  return coworkers.map((coworker) => ({
    slug: slugify(coworker.nombre),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const coworker = coworkers.find(
    (item) => slugify(item.nombre) === slug
  );

  if (!coworker) {
    return {
      title: "Compañero no encontrado",
    };
  }

  return {
    title: coworker.nombre,
    description: coworker.bio,
  };
}

export default async function CompaneroDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const coworker = coworkers.find(
    (item) =>
      slugify(item.nombre) === slug
  );

  if (!coworker) {
    notFound();
  }


  return (
    <main className="animate-fade-up mx-auto min-h-screen max-w-3xl px-6 py-12">
      <Link
        href="/companeros"
        className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-all hover:gap-3 hover:text-blue-700 dark:text-blue-400"
      >
        <span className="transition-transform group-hover:-translate-x-1">
        ←</span>
        Volver al listado
      </Link>

      <article className="animate-fade-up animation-delay-100 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="space-y-10">
          <div>
            <h1 className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-4xl font-extrabold text-transparent">
              {coworker.nombre}
            </h1>

            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              {coworker.rol}
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="mb-2 text-xl font-semibold">
              Biografía
            </h2>

            <p className="leading-8 text-zinc-700 tracking-wide dark:text-zinc-300">
              {coworker.bio}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="mb-3 text-xl font-semibold">
              Tecnologías favoritas
            </h2>

            <div className="flex flex-wrap gap-2">
              {coworker.tecnologias.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 hover:scale-105 hover:ring-2 hover:ring-blue-600/60 dark:hover:ring-blue-400/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}