"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { variant1 } from "./animation";

const skills = [
  { name: 'HTML', level: '/html.svg' },
  { name: 'CSS', level: '/css.svg' },
  { name: 'JavaScript', level: '/js.svg' },
  { name: 'TypeScript', level: '/ts.svg' },
  { name: 'React', level: '/react.svg' },
  { name: 'NextJS', level: '/next.svg' },
  { name: 'TailwindCSS', level: '/tailwind.svg' },
  {name: "Git" , level: "/git.svg"}
]

const Skills = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div variants={variant1(0.5)} initial="hidden" whileInView="show" viewport={{once:false , amount: 0.25}} >
      <h2 className="text-3xl font-bold text-center mb-8">Minhas Habilidades & Conhecimentos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-4 bg-gray-700 rounded-md">
            <Image src={skill.level}
                width={50}
                  height={50}
                  alt="Tecnologies"
                />
            <span className="text-xl font-bold">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
    </section>
  )
}

export default Skills
