"use client"

import { useEffect, useState } from "react"

export function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const partners = [
    { name: "AXA Assurance", logo: "/images/partners/axa-logo.png" },
    { name: "Allianz France", logo: "/images/partners/allianz-logo.png" },
    { name: "Groupama", logo: "/images/partners/groupama-logo.png" },
    { name: "MAIF", logo: "/images/partners/maif-logo.png" },
    { name: "MMA Assurance", logo: "/images/partners/mma-logo.png" },
    { name: "Matmut", logo: "/images/partners/matmut-logo.png" },
    { name: "GMF", logo: "/images/partners/gmf-logo.png" },
    { name: "MACIF", logo: "/images/partners/macif-logo.png" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(partners.length / 4))
    }, 3000)
    return () => clearInterval(timer)
  }, [partners.length])

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">Partenaires et assurances</h2>
          <p className="text-muted-foreground">Nous travaillons avec la plupart des compagnies d'assurance</p>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {partners.slice(slideIndex * 4, slideIndex * 4 + 4).map((partner, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg p-6 shadow-sm border border-border flex items-center justify-center h-20"
                    >
                      <div className="text-center">
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="w-16 h-8 object-contain mx-auto mb-2"
                        />
                        <span className="text-xs text-muted-foreground font-medium">{partner.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
