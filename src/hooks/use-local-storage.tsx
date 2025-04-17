"use client"

import { useState, useEffect } from "react"

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Estado para armazenar nosso valor
  // Passa a função de estado inicial para useState para que a lógica seja executada apenas uma vez
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue
    }
    try {
      // Obter do armazenamento local por chave
      const item = window.localStorage.getItem(key)
      // Analise o json armazenado ou, se none, retornar initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // Se o erro também retornar initialValue
      console.error("Error reading from localStorage:", error)
      return initialValue
    }
  })

  // Retorna uma versão encapsulada da função setter do useState que
  // persiste o novo valor para localStorage.
  const setValue = (value: T) => {
    try {
      // Permite que o valor seja uma função para que tenhamos a mesma API que useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Salvar estado
      setStoredValue(valueToStore)
      // Salvar no localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // Uma implementação mais avançada lidaria com o caso de erro
      console.error("Error writing to localStorage:", error)
    }
  }

  // Ouça as alterações no localStorage key em outras guias/janelas
  // Isso é útil para sincronizar o estado entre guias/janelas
  // e também para garantir que o valor seja atualizado quando a página for recarregada
  // ou o aplicativo for reiniciado.
  useEffect(() => {
    function handleStorageChange(e: StorageEvent) {
      if (e.key === key && e.newValue) {
        setStoredValue(JSON.parse(e.newValue))
      }
    }

    // Ouvir eventos de armazenamento 
    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorageChange)
      return () => {
        window.removeEventListener("storage", handleStorageChange)
      }
    }
  }, [key])

  return [storedValue, setValue]
}
