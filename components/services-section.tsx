import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Wrench, Shield, Zap, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Car,
      title: "Remplacement de pare-brise",
      description: "Pour tous types de véhicules : voitures, utilitaires, poids lourds",
      features: ["Tous véhicules", "Vitrage d'origine", "Pose garantie"],
    },
    {
      icon: Wrench,
      title: "Réparation d'impact",
      description: "Injection de résine pour réparer les éclats et fissures",
      features: ["Réparation rapide", "Économique", "Discret"],
    },
    {
      icon: Shield,
      title: "Vitres latérales et lunette",
      description: "Remplacement de toutes les vitres de votre véhicule",
      features: ["Vitres teintées", "Vitres chauffantes", "Dégivrage"],
    },
    {
      icon: Zap,
      title: "Calibrage ADAS",
      description: "Calibrage des systèmes d'aide à la conduite après remplacement",
      features: ["Obligatoire", "Sécurité", "Conformité"],
    },
    {
      icon: Eye,
      title: "Optiques et capteurs",
      description: "Remplacement et calibrage des optiques et capteurs intégrés",
      features: ["Caméra", "Capteurs", "Radar"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/glass-texture-bg.png')`,
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nos services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services pour l'entretien et la réparation de vos vitrages automobiles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mr-4 group-hover:bg-muted/80 transition-colors">
                      <IconComponent className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tarifs">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Voir nos tarifs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Demander un RDV
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
