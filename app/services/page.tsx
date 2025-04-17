import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import bgServices from "@/src/images/bg.services1.jpg"
import bgService from "@/src/images/bg.sevice.jpg"

function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Nossos Serviços</h1>
              <p className="max-w-[600px] mx-auto text-white/90 md:text-xl">
                Conheça nossa ampla gama de serviços em marketing e direito para atender todas as suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image
                src={bgServices}
                alt="Equipe de marketing em reunião"
                className="w-full h-full object-cover"
                layout="fill"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-purple-600">Serviços de Marketing</h2>
                <p className="text-muted-foreground">
                  Impulsione sua marca com nossas soluções de marketing estratégico. Nossa equipe liderada por Cláudia
                  Mateus desenvolve estratégias personalizadas para aumentar sua visibilidade e engajamento.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Consultoria Estratégica</h3>
                  <p className="text-muted-foreground">
                    Análise completa do seu negócio e desenvolvimento de estratégias de marketing alinhadas aos seus
                    objetivos.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Produção de Conteúdo</h3>
                  <p className="text-muted-foreground">
                    Criação de conteúdo relevante e de alta qualidade para blogs, redes sociais e materiais
                    promocionais.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Gestão de Mídias Sociais</h3>
                  <p className="text-muted-foreground">
                    Planejamento, criação e gerenciamento de conteúdo para suas redes sociais, aumentando seu alcance e
                    engajamento.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Campanhas Publicitárias</h3>
                  <p className="text-muted-foreground">
                    Desenvolvimento e execução de campanhas publicitárias eficazes em diversos canais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Services */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-600">Serviços Jurídicos</h2>
                <p className="text-muted-foreground">
                  Conte com nossa equipe jurídica liderada por Rodrigo Insuelas para garantir segurança legal em todas
                  as áreas. Oferecemos atendimento personalizado para pessoas físicas e jurídicas.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Direito Civil</h3>
                  <p className="text-muted-foreground">
                    Assessoria em contratos, responsabilidade civil, direito do consumidor e outras questões civis.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Direito Trabalhista</h3>
                  <p className="text-muted-foreground">
                    Representação em processos trabalhistas, consultoria preventiva e compliance trabalhista.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Direito Previdenciário</h3>
                  <p className="text-muted-foreground">
                    Orientação e representação em questões relacionadas a benefícios previdenciários.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Direito de Família e Sucessões</h3>
                  <p className="text-muted-foreground">
                    Assessoria em divórcios, inventários, testamentos e outras questões familiares.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden order-1 lg:order-2">
              <Image
                src={bgService}
                alt="Profissionais jurídicos em reunião"
                className="w-full h-full object-cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para transformar seu negócio?
              </h2>
              <p className="max-w-[600px] mx-auto text-white/90 md:text-xl">
                Cadastre-se agora e agende uma consultoria inicial gratuita com nossos especialistas.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button className="bg-transparent text-white hover:bg-white hover:text-purple-600 hover:border-transparent">
                  Cadastre-se Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ServicesPage;