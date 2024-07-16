import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Image from "next/image"
import { Button, buttonVariants } from "./ui/button"
import { Project ,projects } from "@/app/data/project"

function Carrousel() {
  return (
    <Carousel className="w-full max-w-4xl flex border py-10 md:ml-20 items-center justify-center pl-16 mt-28 mb-10">
      <CarouselContent>
        {projects.map((project:Project) => (
          <CarouselItem key={project.id}>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-5 mr-5 grid-rows-1">
              <div className="rounded-lg overflow-hidden">
                <Image
                  alt={project.name}
                  className="w-full h-full object-cover"
                  height={400}
                  src={project.image}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                    backgroundBlendMode: "darken",
                    backgroundColor: "#0000",
                  }}
                  width={600}
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                      <Image src={tech.image} width={20} height={20} alt={tech.name} />
                      {tech.name}
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <a href={project.liveDemo} target="_blank">
                    <Button className={buttonVariants({ variant: "secondary" })}>
                      Live Demo
                    </Button>
                  </a>
                  <a href={project.github} target="_blank">
                    <Button className={buttonVariants({ variant: "ghost" })}>
                      Github
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/50 p-2 shadow-md transition-colors hover:bg-white dark:bg-gray-950/50 dark:hover:bg-gray-950">
        <ChevronLeftIcon className="h-6 w-6" />
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/50 p-2 shadow-md transition-colors hover:bg-white dark:bg-gray-950/50 dark:hover:bg-gray-950">
        <ChevronRightIcon className="h-6 w-6" />
      </CarouselNext>
    </Carousel>
  )
}

export default Carrousel
