import Link from "next/link";
import type { Coworker } from "@/lib/data";
import { slugify } from "@/lib/slugify";

interface MemberCardProps {
  coworker: Coworker;
}


export default function MemberCard({
  coworker,
}: MemberCardProps) {
  return (
    <article className="animate-[fadeUp_0.6s_ease-out_forwards] rounded-xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-blue-600/60 dark:hover:ring-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] dark:border-zinc-800 dark:bg-zinc-950">
      <Link
        href={`/companeros/${slugify(coworker.nombre)}`}
        className="block"
      >
        <div className="space-y-3">
          <div>
            <h2 className="text-xl font-semibold text-center">
              {coworker.nombre}
            </h2>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
              {coworker.rol}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}