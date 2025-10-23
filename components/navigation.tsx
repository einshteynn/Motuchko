"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { DeliveryModal } from "./delivery-modal"
import { PaymentModal } from "./payment-modal"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDeliveryModal, setShowDeliveryModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center" onClick={handleLinkClick}>
              <div className="text-xl font-bold text-[#2E8B57]">Elektryczne wózki Motucko</div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/kontakt"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={handleLinkClick}
              >
                Kontakt
              </Link>
              <button
                onClick={() => setShowDeliveryModal(true)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Dostawa
              </button>
              <button
                onClick={() => setShowPaymentModal(true)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Płatność
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md hover:bg-secondary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <Link
                  href="/kontakt"
                  className="text-foreground hover:text-primary transition-colors py-2 font-medium"
                  onClick={handleLinkClick}
                >
                  Kontakt
                </Link>
                <button
                  onClick={() => {
                    setShowDeliveryModal(true)
                    setIsOpen(false)
                  }}
                  className="text-foreground hover:text-primary transition-colors py-2 font-medium text-left"
                >
                  Dostawa
                </button>
                <button
                  onClick={() => {
                    setShowPaymentModal(true)
                    setIsOpen(false)
                  }}
                  className="text-foreground hover:text-primary transition-colors py-2 font-medium text-left"
                >
                  Płatność
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <DeliveryModal isOpen={showDeliveryModal} onClose={() => setShowDeliveryModal(false)} />
      <PaymentModal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} />
    </>
  )
}
