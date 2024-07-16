export interface Project {
  id: number
  name: string
  description: string
  image: string
  liveDemo?: string
  github: string
  technologies: { name: string; image: string }[]
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Elegance",
    description:
      "Este projeto é uma loja de roupas modernas que está atualmente pronto. A Elegance visa oferecer uma experiência de compra elegante e eficiente, utilizando tecnologias de ponta para criar uma plataforma robusta e intuitiva.",
    image: "/elegance.png",
    liveDemo: "sem deploy",
    github: "https://github.com/Miguelluisdev/elegance",
    technologies: [
      { name: "Next", image: "next.svg" },
      { name: "Tailwind", image: "tailwind.svg" },
      { name: "Typescript", image: "ts.svg" },
      { name: "Postgresql", image: "postgresql.svg" },
      { name: "Prisma", image: "prisma.svg" },
    ],
  },
  {
    id: 2,
    name: "Site Academia",
    description:
      "Site feito para ser hospedado na aws, projeto do 2 período da UNISUAM.",
    image: "/gym-site.png",
    liveDemo: "https://miguelluisdev.github.io/e-commerce-Gym/",
    github: "https://github.com/Miguelluisdev/e-commerce-Gym",
    technologies: [
      { name: "Html", image: "html.svg" },
      { name: "Css", image: "css.svg" },
      { name: "Javascript", image: "js.svg" },
    ],
  },
  {
    id: 3,
    name: "Utensilios de churrasco",
    description:
      "Projeto feito com react e tailwind, teve uma boa contribuição para melhor entendimento do react porém contém defeitos e o problema de imagens.",
    image: "/brasa&Sabor.png",
    liveDemo: "https://brasa-sabor.vercel.app",
    github: "https://github.com/Miguelluisdev/brasa--sabor",
    technologies: [
      { name: "React", image: "react.svg" },
      { name: "Tailwind", image: "tailwind.svg" },
      { name: "Typescript", image: "ts.svg" },
    ],
  },
  {
    id: 4,
    name: "Locadora de Carros",
    description:
      "Projeto fullstack (ajudei no front) da faculdade com next e tailwind, feito em grupo, contribuiu muito para o aprendizado.",
    image: "/vrumdrive.png",
    liveDemo: "https://vrum-drive.vercel.app",
    github: "https://github.com/cplxx/vrum-drive",
    technologies: [
      { name: "Next", image: "next.svg" },
      { name: "Tailwind", image: "tailwind.svg" },
      { name: "Typescript", image: "ts.svg" },
    ],
  },
]
