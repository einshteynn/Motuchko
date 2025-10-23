import { Button } from "@/components/ui/button"
import { VideoThumbnail } from "@/components/video-thumbnail"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Motucko Cargo - Elektryczny wózek transportowy | Motucko Polska",
  description: "Motucko Cargo - największa ładowność 600 kg. Moc 3,0 kW, opcja napędu 4x4. Cena: 23 900 zł z dostawą.",
}

const specs = [
  "Ładowność: 600 kg",
  "Moc silnika: 3,0 kW",
  "Napęd: tylni / opcja 4x4",
  "Bateria: litowo-jonowa",
  "Czas ładowania: 5-7 godzin",
  "Zasięg: do 12 godzin pracy",
  "Prędkość maksymalna: 6 km/h",
  "Waga własna: 115 kg",
  "Wymiary skrzyni: 140 x 80 x 40 cm",
  "Gwarancja: 24 miesiące",
]

const images = [
  "/motucko-cargo-front-view.jpg",
  "/placeholder.svg?height=500&width=600",
  "/placeholder.svg?height=500&width=600",
]

export default function MotuckoCargoPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`Motucko Cargo - zdjęcie ${index + 1}`}
                className="w-full rounded-lg shadow-lg"
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Motucko Cargo</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Największa ładowność i moc dla profesjonalistów
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold motucko-green mb-2">23 900 zł</p>
              <p className="text-sm text-muted-foreground">(cena zawiera dostawę do Polski i 24% VAT)</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Specyfikacja techniczna</h2>
              <ul className="space-y-2">
                {specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-motucko-green mt-1">•</span>
                    <span className="text-pretty">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild size="lg" className="w-full bg-motucko-orange hover:bg-motucko-orange/90">
              <Link href="/kontakt">Zapytaj o ten produkt</Link>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <VideoThumbnail
            videoId="ofvjtEs-3Ck"
            title="Zobacz, jak wózek pracuje"
            subtitle="Wideo: Motucko Cargo w akcji"
          />
        </div>
      </div>
    </div>
  )
}
