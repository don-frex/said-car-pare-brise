import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PartnersCarousel } from "@/components/partners-carousel"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { BenefitsSection } from "@/components/benefits-section"
import { LocationsSection } from "@/components/locations-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { FAQSection } from "@/components/faq-section"
import { AppointmentForm } from "@/components/appointment-form"
import { Footer } from "@/components/footer"
import { MobileBottomBar } from "@/components/mobile-bottom-bar"
import { CookieBanner } from "@/components/cookie-banner"
import { BackToTop } from "@/components/back-to-top"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PartnersCarousel />
        <ServicesSection />
        <ProcessSection />
        <BenefitsSection />
        <LocationsSection />
        <TestimonialsSection />
        <GallerySection />
        <FAQSection />
        <AppointmentForm />
      </main>
      <Footer />
      <MobileBottomBar />
      <CookieBanner />
      <BackToTop />
    </div>
  )
}
