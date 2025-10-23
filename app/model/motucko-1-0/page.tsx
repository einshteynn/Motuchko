import { Button } from "@/components/ui/button"
import { VideoThumbnail } from "@/components/video-thumbnail"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Motucko 1.0 - Elektryczny wózek transportowy | Motucko Polska",
  description: "Motucko 1.0 - idealny do ogrodu i działki. Ładowność 300 kg, moc 1,5 kW. Cena: 14 900 zł z dostawą.",
}

const specs = [
  "Ładowność: 300 kg",
  "Moc silnika: 1,5 kW",
  "Napęd: tylni",
  "Bateria: litowo-jonowa",
  "Czas ładowania: 4-6 godzin",
  "Zasięg: do 8 godzin pracy",
  "Prędkość maksymalna: 6 km/h",
  "Waga własna: 85 kg",
  "Wymiary skrzyni: 100 x 60 x 30 cm",
  "Gwarancja: 24 miesiące",
]

const images = ["/motucko-1-0-front-view.jpg", "/motucko-1-0-side-view.jpg", "/motucko-1-0-in-garden.jpg"]

export default function Motucko10Page() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`Motucko 1.0 - zdjęcie ${index + 1}`}
                className="w-full rounded-lg shadow-lg"
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Motucko 1.0</h1>
              <p className="text-xl text-muted-foreground text-pretty">Idealny do ogrodu i działki</p>
            </div>

            <div>
              <p className="text-3xl font-bold motucko-green mb-2">14 900 zł</p>
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

        {/* Video Section */}
        <div className="max-w-4xl mx-auto text-center">
          <VideoThumbnail videoId="saDH9MIl1q0" title="Zobacz, jak wózek pracuje" subtitle="Wideo: praca w ogrodzie" />
        </div>
      </div>
    </div>
  )
}
