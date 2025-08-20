import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileBottomBar } from "@/components/mobile-bottom-bar"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "À Propos - Pare-Brise & Dépannage",
  description:
    "Découvrez notre entreprise spécialisée dans le remplacement et la réparation de pare-brise depuis plus de 15 ans.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-20">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de Nous</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Votre partenaire de confiance pour tous vos besoins en vitrage automobile
              </p>
            </div>
          </div>

          {/* Company Story */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Notre Histoire</h2>
                    <p className="text-muted-foreground mb-4">
                      Depuis plus de 15 ans, <strong>Pare-Brise & Dépannage</strong> accompagne les automobilistes dans
                      le remplacement et la réparation de leurs vitrages automobiles.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Fondée par des passionnés de l'automobile, notre entreprise s'est développée grâce à notre
                      expertise technique et notre engagement envers la satisfaction client.
                    </p>
                    <p className="text-muted-foreground">
                      Aujourd'hui, nous sommes fiers d'être reconnus comme l'un des leaders du secteur en France, avec
                      plus de 50 000 interventions réalisées.
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      src="/images/technician-work.png"
                      alt="Technicien au travail"
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Années d'expérience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50k+</div>
                  <div className="text-muted-foreground">Interventions</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Clients satisfaits</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24h</div>
                  <div className="text-muted-foreground">Délai moyen</div>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 text-foreground">Nos Valeurs</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Excellence</h3>
                    <p className="text-muted-foreground">
                      Nous nous engageons à fournir un service de qualité supérieure avec des matériaux certifiés et des
                      techniques de pointe.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Proximité</h3>
                    <p className="text-muted-foreground">
                      Notre équipe est à votre écoute pour vous accompagner et vous conseiller tout au long de votre
                      intervention.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Réactivité</h3>
                    <p className="text-muted-foreground">
                      Intervention rapide sous 24/48h pour minimiser la gêne et vous remettre sur la route rapidement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Prêt à nous faire confiance ?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Rejoignez les milliers de clients qui nous font confiance pour leur vitrage automobile
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-primary">
                  Demander un devis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  Nous contacter
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  )
}
