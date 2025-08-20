import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { BenefitsSection } from "@/components/benefits-section"
import { MobileBottomBar } from "@/components/mobile-bottom-bar"

export const metadata: Metadata = {
  title: "Nos Services - Pare-Brise & Dépannage",
  description:
    "Découvrez tous nos services de remplacement et réparation de pare-brise, vitres latérales, lunette arrière et calibrage ADAS.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-20">
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Spécialistes du vitrage automobile, nous intervenons sur tous types de véhicules
              </p>
            </div>
          </div>
          <ServicesSection />
          <ProcessSection />
          <BenefitsSection />
        </div>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  )
}
