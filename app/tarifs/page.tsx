import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileBottomBar } from "@/components/mobile-bottom-bar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tarifs - Pare-Brise & Dépannage",
  description:
    "Découvrez nos tarifs transparents pour le remplacement et la réparation de pare-brise. Devis gratuit en ligne.",
}

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-20">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Tarifs</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Tarifs transparents et compétitifs pour tous vos besoins en vitrage automobile
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Réparation */}
                <Card className="relative">
                  <CardHeader className="text-center">
                    <Badge className="w-fit mx-auto mb-2" variant="secondary">
                      Économique
                    </Badge>
                    <CardTitle className="text-2xl">Réparation d'Impact</CardTitle>
                    <CardDescription>Pour les petits impacts et éclats</CardDescription>
                    <div className="text-4xl font-bold text-primary mt-4">À partir de 89€</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Impact jusqu'à 2cm</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Injection de résine</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Intervention 30 min</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Garantie 1 an</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6">
                      <Link href="/contact">Demander un devis</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Remplacement */}
                <Card className="relative border-primary">
                  <CardHeader className="text-center">
                    <Badge className="w-fit mx-auto mb-2">Populaire</Badge>
                    <CardTitle className="text-2xl">Remplacement Pare-brise</CardTitle>
                    <CardDescription>Remplacement complet avec calibrage</CardDescription>
                    <div className="text-4xl font-bold text-primary mt-4">À partir de 299€</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Pare-brise d'origine</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Calibrage ADAS inclus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Intervention 2h</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Garantie à vie sur la pose</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6">
                      <Link href="/contact">Demander un devis</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Premium */}
                <Card className="relative">
                  <CardHeader className="text-center">
                    <Badge className="w-fit mx-auto mb-2" variant="outline">
                      Premium
                    </Badge>
                    <CardTitle className="text-2xl">Service Premium</CardTitle>
                    <CardDescription>Service complet avec véhicule de prêt</CardDescription>
                    <div className="text-4xl font-bold text-primary mt-4">À partir de 399€</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Tout inclus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Véhicule de prêt</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Prise en charge domicile</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Garantie étendue</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-6">
                      <Link href="/contact">Demander un devis</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Insurance Info */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Prise en charge assurance</h2>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Franchise offerte</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Sous conditions, nous prenons en charge votre franchise pour un remplacement de pare-brise avec
                        la plupart des assurances.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Zéro avance de frais</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Nous nous occupons directement des démarches avec votre assurance. Aucune avance de frais de
                        votre part.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Besoin d'un devis personnalisé ?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour obtenir un devis gratuit adapté à votre véhicule
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  <a href="tel:0123456789">Appeler maintenant</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  <Link href="/contact">Devis en ligne</Link>
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
