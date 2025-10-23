"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    const fromProductPage = sessionStorage.getItem("fromProductPage")

    if (pathname === "/" && fromProductPage === "true") {
      // Scroll to catalog section instead of top
      sessionStorage.removeItem("fromProductPage")
      setTimeout(() => {
        const catalogSection = document.getElementById("modele")
        if (catalogSection) {
          catalogSection.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      }, 100)
    } else {
      // Normal scroll to top for other pages
      window.scrollTo(0, 0)
    }

    // Set flag when navigating to product page
    if (pathname.startsWith("/model/")) {
      sessionStorage.setItem("fromProductPage", "true")
    }
  }, [pathname])

  return null
}
