import Image from "next/image";

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
      <h2 className="text-3xl font-bold text-center mb-8">Minhas Habilidades & Conhecimentos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-4 bg-gray-700 rounded-md">
            <Image src={skill.level}
                width={50}
                  height={50}
                  alt="Tecnologies"
                  className="rounded-full "
                />
            <span className="text-xl font-bold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
