"use client"

import type React from "react"

import { useState, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface MediaItem {
  type: "image" | "video"
  src: string
  alt?: string
  videoId?: string
}

interface MediaGalleryProps {
  items: MediaItem[]
}

export function MediaGallery({ items }: MediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const openModal = (index: number) => {
    setSelectedIndex(index)
  }

  const closeModal = () => {
    setSelectedIndex(null)
  }

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    }
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null && selectedIndex < items.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe || isRightSwipe) {
      // Scroll the gallery
      if (galleryRef.current) {
        const scrollAmount = isLeftSwipe ? 300 : -300
        galleryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null

  return (
    <>
      {/* Gallery Grid */}
      <div
        ref={galleryRef}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-x-auto snap-x snap-mandatory md:overflow-visible"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-shadow snap-start"
            onClick={() => openModal(index)}
          >
            {item.type === "image" ? (
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt || `Zdjęcie ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading={index < 3 ? "eager" : "lazy"}
              />
            ) : (
              <>
                <Image
                  src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                  alt={item.alt || `Wideo ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="bg-motucko-orange rounded-full p-3 shadow-lg">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={closeModal}>
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Zamknij"
            >
              <X className="h-8 w-8" />
            </button>

            {selectedIndex !== null && selectedIndex > 0 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all z-10"
                aria-label="Poprzednie"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {selectedIndex !== null && selectedIndex < items.length - 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all z-10"
                aria-label="Następne"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {selectedItem.type === "image" ? (
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={selectedItem.src || "/placeholder.svg"}
                  alt={selectedItem.alt || "Zdjęcie"}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedItem.videoId}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
