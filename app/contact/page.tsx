import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AppointmentForm } from "@/components/appointment-form"
import { LocationsSection } from "@/components/locations-section"
import { MobileBottomBar } from "@/components/mobile-bottom-bar"

export const metadata: Metadata = {
  title: "Contact - Pare-Brise & Dépannage",
  description: "Contactez-nous pour un devis gratuit ou prenez rendez-vous pour le remplacement de votre pare-brise.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-20">
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Obtenez un devis gratuit ou prenez rendez-vous en quelques clics
              </p>
            </div>
          </div>
          <AppointmentForm />
          <LocationsSection />
        </div>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  )
}
