import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">MJ Consultoria</h3>
            <p className="text-sm text-muted-foreground">
              Soluções em marketing e direito para empresas e pessoas físicas.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                Serviços
              </Link>
              <Link href="/register" className="text-sm text-muted-foreground hover:text-foreground">
                Cadastro
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span>Maracanã, 1000, Rio de Janeiro - RJ</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0" />
                <span>(21) 9999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0" />
                <span>contato@mjconsultoria.com.br</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MJ Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
