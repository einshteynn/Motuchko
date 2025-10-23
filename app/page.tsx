"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Phone, Wrench, X } from "lucide-react"
import Image from "next/image"

const models = [
  {
    name: "Motucko 1.0",
    slug: "motucko-1-0",
    specs: "Ładowność: 300 kg | Moc: 1,5 kW | Napęd: tylni",
    price: "14 900 zł",
    image: "/electric-wheelbarrow-motucko-1-0.jpg",
  },
  {
    name: "Motucko 2.0",
    slug: "motucko-2-0",
    specs: "Ładowność: 500 kg | Moc: 2,2 kW | Napęd: tylni",
    price: "18 500 zł",
    image: "/electric-wheelbarrow-motucko-2-0.jpg",
  },
  {
    name: "Motucko 4x4",
    slug: "motucko-4x4",
    specs: "Ładowność: 500 kg | Moc: 2,2 kW | Napęd: na 4 koła",
    price: "21 900 zł",
    image: "/electric-wheelbarrow-motucko-4x4.jpg",
  },
  {
    name: "Motucko Cargo",
    slug: "motucko-cargo",
    specs: "Ładowność: 600 kg | Moc: 3,0 kW | Napęd: tylni / opcja 4x4",
    price: "23 900 zł",
    image: "/electric-wheelbarrow-motucko-cargo.jpg",
  },
]

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const handleProductClick = () => {
    sessionStorage.setItem("fromProductPage", "true")
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/motucko-2-0-electric-wheelbarrow-in-action.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Button
            asChild
            size="lg"
            className="bg-motucko-orange hover:bg-motucko-orange/90 text-white font-semibold text-lg px-8 py-6 shadow-lg"
          >
            <a href="#modele">Zobacz modele</a>
          </Button>
        </div>
      </section>

      <section id="modele" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-balance">
            Katalog modeli z naszymi wózkami
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 text-pretty">
            Wybierz swój idealny wózek – mocny, cichy, gotowy do pracy
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <Card key={model.slug} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <Link href={`/model/${model.slug}`} className="block" onClick={handleProductClick}>
                    <img
                      src={model.image || "/placeholder.svg"}
                      alt={model.name}
                      className="w-full h-48 object-cover rounded-t-lg hover:opacity-90 transition-opacity cursor-pointer"
                      loading="lazy"
                    />
                  </Link>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <CardTitle className="mb-3 font-bold text-motucko-green">{model.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4 text-pretty">{model.specs}</p>
                  <p className="text-2xl font-bold text-motucko-green">{model.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">(z dostawą)</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-motucko-orange hover:bg-motucko-orange/90">
                    <Link href={`/model/${model.slug}`} onClick={handleProductClick}>
                      Szczegóły produktu
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">Ceny zawierają dostawę do Polski i 24% VAT.</p>
        </div>
      </section>

      {/* Why Choose Us - moved after catalog */}
      <section className="py-16 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-motucko-green rounded-full p-4 shadow-md">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Kontakt po polsku</h3>
              <p className="text-muted-foreground text-pretty">
                Pełna obsługa w języku polskim. Pomożemy dobrać odpowiedni model.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-motucko-orange rounded-full p-4 shadow-md">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Najniższe ceny</h3>
              <p className="text-muted-foreground text-pretty">
                Gwarantujemy najlepsze ceny na rynku polskim z dostawą.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-motucko-green rounded-full p-4 shadow-md">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Wsparcie</h3>
              <p className="text-muted-foreground text-pretty">Pełne wsparcie techniczne i gwarancja producenta.</p>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Zamknij"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
