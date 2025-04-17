import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marketing & Jurídico | Consultoria Especializada",
  description: "Serviços de consultoria em marketing e jurídico para empresas e pessoas físicas",
    generator: 'v0.dev',
    icons: {
      icon: [
        { url: '/logo.MJ.svg', type: 'image/svg+xml' },
        { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon.png', sizes: '36x36', type: 'image/png' },
        // Adicione outros tamanhos de PNG conforme necessário
      ],
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR"
    className="light"
    >

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
import { Images } from "lucide-react"
