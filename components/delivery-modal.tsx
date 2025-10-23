"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DeliveryModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DeliveryModal({ isOpen, onClose }: DeliveryModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-border p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Warunki dostawy</h2>
          <button onClick={onClose} className="p-2 hover:bg-secondary rounded-md" aria-label="Zamknij">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-sm leading-relaxed">
          <p>
            Sprzedawca dostarcza towar kupującemu w całości, zazwyczaj nie później niż 21 dni roboczych dla Motúček i
            nie później niż 5 dni roboczych dla akcesoriów i części zamiennych od momentu potwierdzenia zamówienia lub
            wykonania warunku płatności w przypadku przelewu bankowego, chyba że dla konkretnego towaru określono inny
            termin dostawy. Jeśli towar jest oznaczony jako „w magazynie", sprzedawca wyśle towar nie później niż 2 dni
            robocze.
          </p>

          <p>Kupujący ma obowiązek odebrania towaru i jego zapłaty.</p>

          <p>
            Jeśli sprzedawca przekroczył termin dostawy, kupujący może się wycofać z umowy, jeśli sprzedawca nie spełni
            swojego zobowiązania nawet w dodatkowym rozumnym terminie, udzielonym przez kupującego. Kupujący może się
            wycofać z umowy bez dodatkowego terminu tylko wtedy, gdy sprzedawca odmówił wykonania lub wykonanie w
            określonym czasie jest niezbędne ze względu na okoliczności istniejące w momencie zawarcia umowy, lub
            kupujący poinformował sprzedawcę przed zawarciem umowy o konieczności dostawy w określonym czasie.
          </p>

          <p>
            Sprzedawca zobowiązuje się zwrócić kupującemu wszystkie płatności pieniężne dokonane w ramach umowy bez
            nieuzasadnionej zwłoki po rezygnacji.
          </p>

          <p>
            Kupujący ma obowiązek sprawdzić towar po otrzymaniu, aby wykryć i zgłosić wady powstałe w wyniku uszkodzeń
            podczas transportu.
          </p>

          <p>
            Na żądanie kupującego sprzedawca pisemnie potwierdzi zakres i czas trwania swoich zobowiązań wynikających z
            nienależytego wykonania, a także sposób realizacji praw przez kupującego.
          </p>

          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="font-bold text-base mb-3">Cena i sposób dostawy:</h3>

            <div className="space-y-3">
              <div>
                <p className="font-semibold">Motúčko:</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Odbiór osobisty – darmowy</li>
                  <li>Najkorzystniejsza dostawa do domu Czechy (GEIS) – 799 koron z VAT</li>
                  <li>Najkorzystniejsza dostawa do domu Słowacja (GEIS) – 42,35 euro z VAT</li>
                  <li>Dostawa do domu w sobotę – Dostawa Motúčko Czechy – 1299 koron z VAT</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Części zamienne i akcesoria:</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                  <li>Zamówienie pocztą Czechy – 57 koron z VAT</li>
                  <li>Zamówienie pocztą Słowacja – 6,35 euro z VAT</li>
                  <li>Odbiór osobisty – darmowy</li>
                  <li>Najkorzystniejsza dostawa do domu Czechy – 110 koron z VAT</li>
                  <li>Najkorzystniejsza dostawa do domu Słowacja – 7,53 euro z VAT</li>
                </ul>
              </div>
            </div>
          </div>
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
