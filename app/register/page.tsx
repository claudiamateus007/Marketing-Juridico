"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle, Database } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/src/hooks/use-toast"
import { useLocalStorage } from "@/src/hooks/use-local-storage"

interface FormData {
  name: string
  email: string
  phone: string
  company?: string
  serviceType: "marketing" | "legal" | "both"
  message: string
}

interface StoredClient {
  id: string
  name: string
  email: string
  phone: string
  company?: string
  serviceType: "marketing" | "legal" | "both"
  message: string
  createdAt: string
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "both",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  // Use our custom hook for localStorage
  const [storedClients, setStoredClients] = useLocalStorage<StoredClient[]>("mjconsultoria-clients", [])
  const [notes, setNotes] = useLocalStorage<{ [key: string]: string }>("mjconsultoria-notes", {})
  const [activeTab, setActiveTab] = useState("register")

  // Load form data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("formData")
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setFormData(parsedData)
      } catch (error) {
        console.error("Error parsing saved form data:", error)
      }
    }
  }, [])

  // Save form data to localStorage when form data changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData))
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: "marketing" | "legal" | "both") => {
    setFormData((prev) => ({ ...prev, serviceType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create a new client object
    const newClient: StoredClient = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
    }

    // Add to stored clients
    setStoredClients([...storedClients, newClient])

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Entraremos em contato em breve.",
      })

      // Clear form data from localStorage after successful submission
      setTimeout(() => {
        localStorage.removeItem("formData")
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "both",
          message: "",
        })
        // Switch to stored data tab
        setActiveTab("stored-data")
      }, 1000)
    }, 1500)
  }

  const handleDeleteClient = (id: string) => {
    setStoredClients(storedClients.filter((client) => client.id !== id))
    // Also delete any notes for this client
    const updatedNotes = { ...notes }
    delete updatedNotes[id]
    setNotes(updatedNotes)

    toast({
      title: "Cliente removido",
      description: "Os dados do cliente foram excluídos com sucesso.",
    })
  }

  const handleAddNote = (id: string, note: string) => {
    setNotes({
      ...notes,
      [id]: note,
    })

    toast({
      title: "Nota adicionada",
      description: "A nota foi salva com sucesso.",
    })
  }

  const getServiceTypeLabel = (type: "marketing" | "legal" | "both") => {
    switch (type) {
      case "marketing":
        return "Marketing"
      case "legal":
        return "Jurídico"
      case "both":
        return "Marketing e Jurídico"
      default:
        return "Desconhecido"
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cadastre-se</h1>
              <p className="max-w-[600px] mx-auto text-white/90 md:text-xl">
                Preencha o formulário abaixo para solicitar uma consultoria gratuita com nossos especialistas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[800px]">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="register">Formulário de Cadastro</TabsTrigger>
                <TabsTrigger value="stored-data" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  <span>Dados Armazenados</span>
                  {storedClients.length > 0 && (
                    <span className="ml-1 rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                      {storedClients.length}
                    </span>
                  )}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="register">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold">Cadastro Realizado com Sucesso!</h2>
                    <p className="text-muted-foreground">
                      Obrigado por se cadastrar! Nossa equipe entrará em contato em breve para agendar sua consultoria.
                    </p>
                    <Button onClick={() => setIsSuccess(false)}>Fazer Novo Cadastro</Button>
                  </motion.div>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle>Formulário de Cadastro</CardTitle>
                      <CardDescription>Preencha seus dados para solicitar uma consultoria gratuita.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Nome Completo *</Label>
                            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="email">E-mail *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="phone">Telefone *</Label>
                            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="company">Empresa (opcional)</Label>
                            <Input id="company" name="company" value={formData.company} onChange={handleChange} />
                          </div>
                          <div className="grid gap-2">
                            <Label>Tipo de Serviço *</Label>
                            <RadioGroup
                              value={formData.serviceType}
                              onValueChange={(value: any) => handleRadioChange(value)}
                              className="flex flex-col space-y-1"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="marketing" id="marketing" />
                                <Label htmlFor="marketing">Marketing</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="legal" id="legal" />
                                <Label htmlFor="legal">Jurídico</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="both" id="both" />
                                <Label htmlFor="both">Ambos</Label>
                              </div>
                            </RadioGroup>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="message">Mensagem *</Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={4}
                              required
                            />
                          </div>
                        </div>
                        <CardFooter className="flex justify-end px-0">
                          <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Enviando..." : "Enviar Cadastro"}
                          </Button>
                        </CardFooter>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="stored-data">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      Dados Armazenados no LocalStorage
                    </CardTitle>
                    <CardDescription>
                      Visualize e gerencie os dados armazenados localmente no seu navegador.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {storedClients.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <p>Nenhum cliente cadastrado ainda.</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {storedClients.map((client) => (
                          <Card key={client.id} className="overflow-hidden">
                            <CardHeader className="bg-gray-50 pb-3">
                              <div className="flex justify-between items-start">
                                <div>
                                  <CardTitle className="text-lg">{client.name}</CardTitle>
                                  <CardDescription>
                                    Cadastrado em: {new Date(client.createdAt).toLocaleDateString("pt-BR")}
                                  </CardDescription>
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="destructive" size="sm" onClick={() => handleDeleteClient(client.id)}>
                                    Excluir
                                  </Button>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium mb-2">Informações de Contato</h4>
                                  <div className="space-y-1 text-sm">
                                    <p>
                                      <span className="font-medium">Email:</span> {client.email}
                                    </p>
                                    <p>
                                      <span className="font-medium">Telefone:</span> {client.phone}
                                    </p>
                                    {client.company && (
                                      <p>
                                        <span className="font-medium">Empresa:</span> {client.company}
                                      </p>
                                    )}
                                    <p>
                                      <span className="font-medium">Serviço:</span>{" "}
                                      <span
                                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                          client.serviceType === "marketing"
                                            ? "bg-purple-100 text-purple-800"
                                            : client.serviceType === "legal"
                                              ? "bg-blue-100 text-blue-800"
                                              : "bg-indigo-100 text-indigo-800"
                                        }`}
                                      >
                                        {getServiceTypeLabel(client.serviceType)}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Mensagem</h4>
                                  <p className="text-sm text-muted-foreground">{client.message}</p>
                                </div>
                              </div>

                              <div className="mt-4 pt-4 border-t">
                                <h4 className="font-medium mb-2">Notas</h4>
                                <div className="flex gap-2">
                                  <Textarea
                                    placeholder="Adicione uma nota sobre este cliente..."
                                    defaultValue={notes[client.id] || ""}
                                    className="text-sm"
                                    rows={2}
                                    id={`note-${client.id}`}
                                  />
                                  <Button
                                    size="sm"
                                    className="self-end"
                                    onClick={() => {
                                      const noteElement = document.getElementById(
                                        `note-${client.id}`,
                                      ) as HTMLTextAreaElement
                                      if (noteElement) {
                                        handleAddNote(client.id, noteElement.value)
                                      }
                                    }}
                                  >
                                    Salvar
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => setActiveTab("register")}>
                      Voltar para o Cadastro
                    </Button>
                    {storedClients.length > 0 && (
                      <Button
                        variant="destructive"
                        onClick={() => {
                          if (confirm("Tem certeza que deseja excluir todos os clientes?")) {
                            setStoredClients([])
                            setNotes({})
                            toast({
                              title: "Dados excluídos",
                              description: "Todos os dados foram removidos do armazenamento local.",
                            })
                          }
                        }}
                      >
                        Limpar Todos os Dados
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}
