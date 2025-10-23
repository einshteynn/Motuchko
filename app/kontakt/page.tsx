import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt - Motucko Polska",
  description: "Skontaktuj się z nami w sprawie zakupu elektrycznego wózka Motucko. Pomożemy dobrać odpowiedni model.",
}

export default function KontaktPage() {
  return (
    <div className="py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-balance">Chcesz wózek Motucko? Napisz do nas!</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Pomogę dobrać model, zorganizować zamówienie i dostawę.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Formularz kontaktowy</CardTitle>
          </CardHeader>
          <CardContent>
            <form action="https://submit-form.com/v1_79fyIjpF2zrZdgzLPby0z63x" method="POST" className="space-y-6">
              <input type="hidden" name="_redirect" value="/dziekuje" />

              <div className="space-y-2">
                <Label htmlFor="name">Imię i nazwisko *</Label>
                <Input id="name" name="name" type="text" required placeholder="Jan Kowalski" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon *</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="+48 XXX XXX XXX" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required placeholder="jan.kowalski@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <select
                  id="model"
                  name="model"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Wybierz model</option>
                  <option value="Motucko 1.0">Motucko 1.0</option>
                  <option value="Motucko 2.0">Motucko 2.0</option>
                  <option value="Motucko 4x4">Motucko 4x4</option>
                  <option value="Motucko Cargo">Motucko Cargo</option>
                  <option value="nie wiem">Nie wiem, potrzebuję pomocy</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Wiadomość</Label>
                <Textarea id="message" name="message" rows={5} placeholder="Opisz swoje potrzeby..." />
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" name="terms" required className="mt-1" />
                <Label htmlFor="terms" className="text-sm text-pretty">
                  Akceptuję warunki współpracy i wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu.
                </Label>
              </div>

              <Button type="submit" size="lg" className="w-full bg-motucko-orange hover:bg-motucko-orange/90">
                Wyślij zapytanie
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
