import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { MediaGallery } from "@/components/media-gallery"

const models = {
  "motucko-1-0": {
    name: "Motucko 1.0",
    subtitle: "Idealny do ogrodu i działki",
    price: "14 900 zł",
    videoId: "saDH9MIl1q0",
    specs: [
      "Ładowność: 300 kg",
      "Moc silnika: 1,5 kW",
      "Napęd: tylni",
      "Bateria: litowo-jonowa 48V",
      "Czas ładowania: 4-6 godzin",
      "Zasięg: do 30 km",
      "Prędkość maksymalna: 6 km/h",
      "Waga: 85 kg",
      "Wymiary: 180 x 70 x 100 cm",
    ],
    images: ["/electric-wheelbarrow-motucko-1-0.jpg", "/motucko-1-0-side-view.jpg", "/motucko-1-0-in-garden.jpg"],
    description:
      "Motucko 1.0 to idealny wybór dla właścicieli ogrodów i działek. Kompaktowy, lekki i łatwy w obsłudze elektryczny wózek transportowy, który ułatwi codzienne prace. Dzięki napędowi elektrycznemu nie musisz się męczyć przy przewożeniu ciężkich ładunków.",
  },
  "motucko-2-0": {
    name: "Motucko 2.0",
    subtitle: "Uniwersalny model do każdego zadania",
    price: "18 500 zł",
    videoId: "6Ds-CMWuDNg",
    specs: [
      "Ładowność: 500 kg",
      "Moc silnika: 2,2 kW",
      "Napęd: tylni",
      "Bateria: litowo-jonowa 48V",
      "Czas ładowania: 5-7 godzin",
      "Zasięg: do 35 km",
      "Prędkość maksymalna: 8 km/h",
      "Waga: 95 kg",
      "Wymiary: 190 x 75 x 105 cm",
    ],
    images: ["/electric-wheelbarrow-motucko-2-0.jpg", "/motucko-2-0-loaded.jpg", "/motucko-2-0-terrain.jpg"],
    description:
      "Motucko 2.0 to najbardziej uniwersalny model w naszej ofercie. Większa ładowność i mocniejszy silnik sprawiają, że poradzi sobie z każdym zadaniem. Idealny do prac budowlanych, ogrodniczych i rolniczych.",
  },
  "motucko-4x4": {
    name: "Motucko 4x4",
    subtitle: "Napęd na 4 koła dla trudnego terenu",
    price: "21 900 zł",
    videoId: "1z0KB21TiRk",
    specs: [
      "Ładowność: 500 kg",
      "Moc silnika: 2,2 kW",
      "Napęd: na 4 koła (4x4)",
      "Bateria: litowo-jonowa 48V",
      "Czas ładowania: 5-7 godzin",
      "Zasięg: do 30 km",
      "Prędkość maksymalna: 8 km/h",
      "Waga: 105 kg",
      "Wymiary: 190 x 75 x 105 cm",
      "Kąt wzniosu: do 30°",
    ],
    images: ["/electric-wheelbarrow-motucko-4x4.jpg", "/motucko-4x4-uphill.jpg", "/motucko-4x4-mud.jpg"],
    description:
      "Motucko 4x4 to model dla wymagających. Napęd na wszystkie cztery koła zapewnia doskonałą przyczepność w trudnym terenie. Poradzi sobie ze stromymi wzniesieniami, błotem i nierównościami. Idealny do prac leśnych i w trudnych warunkach.",
  },
  "motucko-cargo": {
    name: "Motucko Cargo",
    subtitle: "Największa ładowność i moc",
    price: "23 900 zł",
    videoId: "ofvjtEs-3Ck",
    specs: [
      "Ładowność: 600 kg",
      "Moc silnika: 3,0 kW",
      "Napęd: tylni (opcja 4x4)",
      "Bateria: litowo-jonowa 60V",
      "Czas ładowania: 6-8 godzin",
      "Zasięg: do 40 km",
      "Prędkość maksymalna: 10 km/h",
      "Waga: 115 kg",
      "Wymiary: 200 x 80 x 110 cm",
      "Większa skrzynia ładunkowa",
    ],
    images: ["/electric-wheelbarrow-motucko-cargo.jpg", "/motucko-cargo-loaded.jpg", "/motucko-cargo-work.jpg"],
    description:
      "Motucko Cargo to najwydajniejszy model w naszej ofercie. Największa ładowność, najmocniejszy silnik i opcja napędu 4x4 sprawiają, że poradzi sobie z najtrudniejszymi zadaniami. Idealny do profesjonalnych zastosowań w budownictwie i rolnictwie.",
  },
}

export function generateStaticParams() {
  return Object.keys(models).map((slug) => ({
    slug,
  }))
}

export default function ModelPage({ params }: { params: { slug: string } }) {
  const model = models[params.slug as keyof typeof models]

  if (!model) {
    notFound()
  }

  const mediaItems = [
    ...model.images.map((img) => ({
      type: "image" as const,
      src: img,
      alt: `${model.name} - zdjęcie`,
    })),
    {
      type: "video" as const,
      src: "",
      videoId: model.videoId,
      alt: `${model.name} - wideo`,
    },
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <MediaGallery items={mediaItems} />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Product Header */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-balance bg-gradient-to-r from-motucko-green to-motucko-orange bg-clip-text text-transparent">
                {model.name}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">{model.subtitle}</p>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-br from-motucko-green/10 to-motucko-orange/10 p-6 rounded-lg border-2 border-motucko-green/20 shadow-lg">
              <div className="text-sm text-muted-foreground mb-2">Cena z dostawą do Polski</div>
              <div className="text-4xl font-bold text-motucko-green mb-2 drop-shadow-sm">{model.price}</div>
              <div className="text-sm text-muted-foreground">Cena zawiera dostawę i 24% VAT</div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Opis</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">{model.description}</p>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Specyfikacja techniczna</h2>
              <ul className="space-y-2">
                {model.specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-motucko-orange mt-1 font-bold">•</span>
                    <span className="text-muted-foreground">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="w-full bg-motucko-orange hover:bg-motucko-orange/90 text-white shadow-md"
            >
              <Link href="/kontakt">Zapytaj o ten produkt</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
