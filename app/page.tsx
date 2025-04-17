import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import bgLayout from "@/src/images/bg.layout.png"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Soluções em Marketing e Direito
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Consultoria especializada em marketing e serviços jurídicos para empresas e pessoas físicas.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services">
                  <Button className="bg-white text-purple-600 hover:bg-white/10 hover:text-white">
                    Nossos Serviços
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white hover:border-transparent">
                    Cadastre-se
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image
                src={bgLayout}
                alt="Imagem de fundo com profissionais em ambiente de negócios"
                className="w-full h-full object-cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Serviços</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Oferecemos soluções completas em marketing e direito para impulsionar seu negócio e garantir segurança
                jurídica.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Marketing Services */}
            <div className="relative group overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Marketing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600 mt-0.5" />
                    <span>Consultoria estratégica de marketing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600 mt-0.5" />
                    <span>Produção de conteúdo especializado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600 mt-0.5" />
                    <span>Gestão de mídias sociais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-600 mt-0.5" />
                    <span>Campanhas publicitárias</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="font-medium">Responsável: Cláudia Mateus</p>
                </div>
              </div>
            </div>

            {/* Legal Services */}
            <div className="relative group overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-teal-100 opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Jurídico</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                    <span>Direito Civil</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                    <span>Direito Trabalhista</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                    <span>Direito Previdenciário</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                    <span>Direito de Família e Sucessões</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="font-medium">Responsável: Rodrigo Insuelas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pronto para começar?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cadastre-se agora e receba uma consultoria inicial gratuita.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button className="bg-transparent text-purple-900 hover:bg-purple-700 hover:text-white hover:border-transparent border-2 border-purple-900">
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
