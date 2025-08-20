"use client"

import { Button } from "@/components/ui/button"
import { Phone, Star, Shield, Clock } from "lucide-react"

export function HeroSection() {
  const handleCTAClick = (targetId: string) => {
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerHeight = 80
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="accueil"
      className="relative bg-gradient-to-br from-muted to-background py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.01] sm:opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/crack-pattern-overlay.png')`,
            backgroundSize: "200px 200px sm:300px 300px md:400px 400px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%232563eb' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
            Remplacement et réparation de <span className="text-primary">pare-brise</span> à domicile ou en atelier
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Prise en charge par votre assurance • Franchise offerte selon conditions • Véhicule de prêt • Calibrage ADAS
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2 sm:px-0">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              onClick={() => handleCTAClick("contact")}
            >
              Obtenir un devis instantané
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              onClick={() => window.open("tel:0123456789")}
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Appeler maintenant
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto px-2 sm:px-0">
            <div className="flex items-center justify-center space-x-2 bg-card/80 backdrop-blur rounded-lg p-3 sm:p-4 shadow-sm">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-card-foreground">
                <div>4,9/5</div>
                <div className="text-xs text-muted-foreground">Avis Google</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-card/80 backdrop-blur rounded-lg p-3 sm:p-4 shadow-sm">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <div className="text-xs sm:text-sm font-semibold text-card-foreground">
                <div>+10 000</div>
                <div className="text-xs text-muted-foreground">interventions</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-card/80 backdrop-blur rounded-lg p-3 sm:p-4 shadow-sm sm:col-span-2 md:col-span-1">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <div className="text-xs sm:text-sm font-semibold text-card-foreground">
                <div>Garantie à vie</div>
                <div className="text-xs text-muted-foreground">sur la pose</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 md:mt-16 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
            <img
              src="/placeholder-yessa.png"
              alt="Technicien professionnel remplaçant un pare-brise"
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
