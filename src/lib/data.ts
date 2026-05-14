export interface Coworker {
  id: number;
  nombre: string;
  rol: string;
  bio: string;
  tecnologias: string[];
}

export const coworkers: Coworker[] = [
  {
    id: 1,
    nombre: "Ana García",
    rol: "Frontend Developer",
    bio: "Especialista en interfaces accesibles y diseño responsive.",
    tecnologias: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    nombre: "Carlos López",
    rol: "Backend Developer",
    bio: "Apasionado por APIs escalables y arquitectura limpia.",
    tecnologias: ["Node.js", "NestJS", "PostgreSQL"],
  },
  {
    id: 3,
    nombre: "María Pérez",
    rol: "UX/UI Designer",
    bio: "Diseña experiencias simples y centradas en el usuario.",
    tecnologias: ["Figma", "Design Systems", "Accessibility"],
  },
  {
    id: 4,
    nombre: "Javier Ruiz",
    rol: "DevOps Engineer",
    bio: "Automatización e infraestructura cloud.",
    tecnologias: ["Docker", "Kubernetes", "AWS"],
  },
  {
    id: 5,
    nombre: "Lucía Martín",
    rol: "Mobile Developer",
    bio: "Construcción de apps móviles multiplataforma.",
    tecnologias: ["React Native", "Expo", "TypeScript"],
  },
  {
    id: 6,
    nombre: "David Sánchez",
    rol: "QA Engineer",
    bio: "Garantiza la calidad mediante testing automatizado.",
    tecnologias: ["Playwright", "Cypress", "Vitest"],
  },
];