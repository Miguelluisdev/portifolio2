"use client"
import { BaseLayout } from "@/components/baselayout"
import { PenTool, Monitor, Search } from "lucide-react"

const Pagina = () => {
  return (
    <>
      <BaseLayout>
      <section className="flex items-center justify-center mt-20" >
          <div>
            <p className="max-w-[400px] md:max-w-[600px] text-x md:text-xl tracking-wide" > 
            Estou estudando Análise e Desenvolvimento de Sistemas na UNISUAM, com o objetivo de me tornar um desenvolvedor Frontend e, eventualmente, Fullstack. Atualmente, estou aprofundando meus conhecimentos em Next.js, design patterns e princípios SOLID. Além disso, tenho planos de aprender sobre GoLang ou Ruby, SQL e React Native. Estou constantemente buscando aprimorar minhas habilidades na resolução de problemas e erros, visando sempre a melhor abordagem possível.
          </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-3 md:px-6">
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <PenTool />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold">Design Criativo de UI/UX</h3>
                <p className="text-gray-500 dark:text-gray-400">
                 interfaces de usuário cativantes e experiências de usuário perfeitas, priorizando a criatividade e a inovação para elevar sua presença digital.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <Search />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold">Otimização de SEO</h3>
                <p className="text-gray-500 dark:text-gray-400">
                   Otimizo websites para mecanismos de busca, garantindo que seu conteúdo seja bem classificado e atraia tráfego orgânico, maximizando sua visibilidade e alcance online.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
              <Monitor />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold">Design Responsivo para Web</h3>
                <p className="text-gray-500 dark:text-gray-400">
                   designs responsivos em todos os dispositivos, garantindo uma experiência consistente e impecável, independentemente do tamanho da tela ou plataforma.
                </p>
              </div>
            </div>
          </div>
        </section>
      </BaseLayout>
    </>
  )
}

export default Pagina
