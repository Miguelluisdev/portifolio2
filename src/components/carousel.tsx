import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { AtomIcon, ChevronLeftIcon, ChevronRightIcon, ComponentIcon, DatabaseIcon, FacebookIcon, NetworkIcon } from "lucide-react"
import Image from "next/image"
import { Button, buttonVariants } from "./ui/button"

 function Carrousel() {
  return (
    <Carousel className="w-full max-w-4xl flex items-center justify-center  pl-16 mt-28 mb-10">
      <CarouselContent>
        <CarouselItem>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-5 mr-5 grid-rows-1">
            <div className="rounded-lg overflow-hidden ">
              <Image
                alt="Project 1" 
                className="w-full h-full object-cover"
                height={400}
                src="/arcane-site.png"
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
                <h3 className="text-2xl font-bold">Projeto Arcane</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Feito com sass , html e javascript , está com problemas nas imagens e será refeito em next quando possivel.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                <Image src="html.svg"
                width={20}
                  height={20}
                  alt="Tecnologies"
                />
                  Html
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                <Image src="css.svg"
                width={20}
                  height={20}
                  alt="Tecnologies"
                />
                  Css
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                <Image src="js.svg"
                width={20}
                  height={20}
                  alt="Tecnologies"
                />
                  Javascript
                </div>
              </div>
              <div className="mt-5" >
                <a href="https://projeto-arc.vercel.app" target="_blank"  >
                  <Button className={buttonVariants({variant: "secondary"})}  >
                     Live Demo
                  </Button>
                </a>
                <a href="https://github.com/Miguelluisdev/projeto-arc" target="_blank">
                <Button className={buttonVariants({variant: "ghost"})} >
                  Github
                </Button>
                </a>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-5 mr-5 grid-rows-1">
            <div className="rounded-lg overflow-hidden">
              <Image
                alt="Project 2"
                className="w-full h-full object-cover"
                height={400}
                src="/gym-site.png"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Projeto Academia</h3>
                <p className="text-gray-500 dark:text-gray-400">Site feito para ser hospedado na aws , projeto do 2 periodo da UNISUAM.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                <Image src="html.svg"
                width={20}
                  height={20}
                  alt="Tecnologies"
                />
                  Html
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                  <Image src="css.svg"
                width={20}
                  height={20}
                  alt="Tecnologies"
                />
                  Css
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                  <Image src="js.svg"
                width={20}
                  height={20}
                  alt="Tecnologies"
                />
                  Javascript
                </div>
              </div>
              <div className="mt-5">
                <a href="https://miguelluisdev.github.io/e-commerce-Gym/" target="_blank">
                  <Button className={buttonVariants({variant: "secondary"})} >
                     Live Demo
                  </Button>
                </a>
                <a href="https://github.com/Miguelluisdev/e-commerce-Gym" target="_blank">
                <Button className={buttonVariants({variant: "ghost"})} >
                  Github
                </Button>
                </a>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-5 mr-5 grid-rows-1">
            <div className="rounded-lg overflow-hidden">
              <Image
                alt="Project 3"
                className="w-full h-full object-cover"
                height={400}
                src="/brasa&Sabor.png"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Projeto Utensilios de churrasco</h3>
                <p className="text-gray-500 dark:text-gray-400">Projeto feito com react e tailwind ,teve uma boa contribuição para melhor entendimento do react porem contem defeitos e o problema de imagems.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                <Image src="react.svg"
                width={20}
                  height={20}
                  alt="Tecnologies"
                />
                  React
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                <Image src="tailwind.svg"
                width={20}
                  height={20}
                  alt="Tecnologies"
                />
                  Tailwind
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                <Image src="ts.svg"
                width={20}
                  height={20}
                  alt="Tecnologies"
                />
                  Typescript
                </div>
              </div>
              <div className="mt-5">
                <a href="https://brasa-sabor.vercel.app" target="_blank">
                  <Button className={buttonVariants({variant: "secondary"})} >
                     Live Demo
                  </Button>
                </a>
                <a href="https://github.com/Miguelluisdev/brasa--sabor" target="_blank">
                <Button className={buttonVariants({variant: "ghost"})} >
                  Github
                </Button>
                </a>
              </div>
            </div>
          </div>
          
        </CarouselItem>
        <CarouselItem>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-5 mr-5 grid-rows-1">
            <div className="rounded-lg overflow-hidden">
              <Image
                alt="Project 3"
                className="w-full h-full object-cover"
                height={400}
                src="/vrumdrive.png"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
              <h3 className="text-2xl font-bold">Projeto Locadora de Carros</h3>
                <p className="text-gray-500 dark:text-gray-400">Projeto fullstack(ajudei no front) da faculdade com next e tailwind , feito em grupo, contribuiu muito para o aprendizado. </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                <Image src="next.svg"
                width={20}
                  height={20}
                  alt="Tecnologies"
                />
                  Next
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                <Image src="tailwind.svg"
                width={20}
                  height={20}
                  alt="Tecnologies"
                />
                  Tailwind
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                <Image src="ts.svg"
                width={20}
                  height={20}
                  alt="Tecnologies"
                />
                  Typescript
                </div>
              </div>
              <div className="mt-5" >
                <a href="https://vrum-drive.vercel.app" target="_blank">
                  <Button className={buttonVariants({variant: "secondary"})} >
                     Live Demo
                  </Button>
                </a>
                <a href="https://github.com/cplxx/vrum-drive" target="_blank" >
                  <Button className={buttonVariants({variant: "ghost"})} >
                    Github
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
        </CarouselItem>
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