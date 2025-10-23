"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-border p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Sposoby płatności</h2>
          <button onClick={onClose} className="p-2 hover:bg-secondary rounded-md" aria-label="Zamknij">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-sm leading-relaxed">
          <p>
            Informacja o produkcie i cenie podana przez sprzedawcę jest obowiązująca, z wyjątkiem oczywistych błędów.
            Ceny zawierają wszystkie podatki (np. VAT) i opłaty, z wyjątkiem kosztów dostawy towaru.
          </p>

          <div>
            <h3 className="font-bold text-base mb-2">Sposoby płatności:</h3>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Przelew bankowy</li>
              <li>Płatność kartą online</li>
              <li>Szybki przelew online</li>
              <li>Płatność gotówką przy odbiorze</li>
              <li>Płatność gotówką lub kartą przy odbiorze</li>
            </ul>
          </div>

          <p>
            Sprzedawca nie pobiera prowizji w zależności od metody płatności, poza standardową opłatą za płatność
            gotówkową.
          </p>

          <p>Zdjęcia na stronie odpowiadają sprzedawanym produktom.</p>

          <p>
            Instrukcje zawierają informacje o użytkowaniu, konserwacji i zagrożeniach wynikających z niewłaściwego
            użytkowania. Dostarczane są razem z zamówieniem. Obowiązki te nie dotyczą oczywistych lub ogólnie znanych
            faktów.
          </p>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-border p-6">
          <Button onClick={onClose} className="w-full bg-motucko-orange hover:bg-motucko-orange/90">
            Zamknij
          </Button>
        </div>
      </div>
    </div>
  )
}
