"use client"
import { BaseLayout } from "@/components/baselayout";
import { Icon } from "@/components/icon";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <BaseLayout>
      <div className="flex justify-between gap-12 xl:gap-0">
        <div className=" w-full max-w-screen-2xl flex flex-col md:flex-row md:justify-between items-center py-20 px-8 ">
          <div className="  md:w-[550px] xl:w-[600px] mt-[19px] flex flex-col gap-[29px] md:gap-[42px]">
            <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl" >
             <Typewriter
                options={{
                  strings: ["FrontEnd Developer" , "Futuro Fullstack" , "UI/UX"],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                }}
             /> 
            </h1>
            <p className="max-w-[400px] md:max-w-[600px] text-x md:text-xl tracking-wide">
           Minha jornada na programação é marcada por uma dedicação incansável. 
           Desde o primeiro dia, mergulhei de cabeça nesse universo em constante evolução, buscando incessantemente aprimorar minhas habilidades e conhecimentos. 
           Estou comprometido em aplicar meu conhecimento para solucionar os desafios mais complexos do mercado.
            </p>
            <a href="https://wa.me/5521983179041" target="_blank">
              <Button className={buttonVariants({variant: "secondary"})} >
                  Contato
              </Button>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row  ">
              <div className=" flex  md:flex-col">
                <Image src="/img-portifolio.jpg"
                width={300}
                  height={300}
                  alt="minha imagem"
                  className="rounded-full "
                />
              </div>
            <div className="flex gap-8 md:flex-col">
             <Icon/>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
