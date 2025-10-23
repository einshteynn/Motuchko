"use client"

import { Play } from "lucide-react"
import { useState } from "react"
import { VideoModal } from "./video-modal"
import Image from "next/image"

interface VideoThumbnailProps {
  videoId: string
  title: string
  subtitle?: string
}

export function VideoThumbnail({ videoId, title, subtitle }: VideoThumbnailProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-balance mb-2">{title}</h3>
          {subtitle && <p className="text-muted-foreground text-pretty">{subtitle}</p>}
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative group w-full max-w-2xl mx-auto block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Play video"
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
            alt={title}
            width={640}
            height={360}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
            <div className="bg-motucko-orange rounded-full p-4 group-hover:scale-110 transition-transform">
              <Play className="h-12 w-12 text-white fill-white" />
            </div>
          </div>
        </button>
      </div>
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoId={videoId} />
    </>
  )
}
