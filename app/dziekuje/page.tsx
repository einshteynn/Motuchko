import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dziękujemy - Motucko Polska",
  description: "Dziękujemy za zapytanie. Skontaktujemy się z Tobą w ciągu 24 godzin.",
}

export default function DziekujePage() {
  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-motucko-green rounded-full p-6">
            <CheckCircle className="h-16 w-16 text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-balance">Dziękujemy za zapytanie!</h1>

        <p className="text-xl text-muted-foreground mb-8 text-pretty">
          W ciągu 24 godzin skontaktuję się z Tobą, aby omówić szczegóły zamówienia.
        </p>

        <Button asChild size="lg" className="bg-motucko-orange hover:bg-motucko-orange/90">
          <Link href="/">Wróć na stronę główną</Link>
        </Button>
      </div>
    </div>
  )
}
