import { Button } from "@/components/ui/button"
import { VideoThumbnail } from "@/components/video-thumbnail"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Motucko 4x4 - Elektryczny wózek transportowy | Motucko Polska",
  description:
    "Motucko 4x4 - napęd na 4 koła dla trudnego terenu. Ładowność 500 kg, moc 2,2 kW. Cena: 21 900 zł z dostawą.",
}

const specs = [
  "Ładowność: 500 kg",
  "Moc silnika: 2,2 kW",
  "Napęd: na 4 koła (4x4)",
  "Bateria: litowo-jonowa",
  "Czas ładowania: 4-6 godzin",
  "Zasięg: do 10 godzin pracy",
  "Prędkość maksymalna: 6 km/h",
  "Waga własna: 105 kg",
  "Wymiary skrzyni: 120 x 70 x 35 cm",
  "Gwarancja: 24 miesiące",
]

const images = ["/motucko-4x4-front-view.jpg", "/motucko-4x4-side-view.jpg", "/motucko-4x4-rough-terrain.jpg"]

export default function Motucko4x4Page() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`Motucko 4x4 - zdjęcie ${index + 1}`}
                className="w-full rounded-lg shadow-lg"
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Motucko 4x4</h1>
              <p className="text-xl text-muted-foreground text-pretty">Napęd na 4 koła dla trudnego terenu</p>
            </div>

            <div>
              <p className="text-3xl font-bold motucko-green mb-2">21 900 zł</p>
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
            videoId="1z0KB21TiRk"
            title="Zobacz, jak wózek pracuje"
            subtitle="Wideo: napęd 4x4 w trudnym terenie"
          />
        </div>
      </div>
    </div>
  )
}
