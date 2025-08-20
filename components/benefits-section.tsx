import { CreditCard, DollarSign, Clock, Car, Award, Shield } from "lucide-react"
import Link from "next/link"

export function BenefitsSection() {
  const benefits = [
    {
      icon: CreditCard,
      title: "Franchise offerte",
      description: "Selon conditions de votre contrat d'assurance",
      highlight: "Économies",
    },
    {
      icon: DollarSign,
      title: "Zéro avance de frais",
      description: "Nous gérons directement avec votre assurance",
      highlight: "Simplicité",
    },
    {
      icon: Clock,
      title: "Intervention sous 24/48h",
      description: "Service rapide pour votre mobilité",
      highlight: "Rapidité",
    },
    {
      icon: Car,
      title: "Véhicule de prêt",
      description: "Restez mobile pendant l'intervention",
      highlight: "Mobilité",
    },
    {
      icon: Award,
      title: "Techniciens certifiés",
      description: "Professionnels formés et expérimentés",
      highlight: "Expertise",
    },
    {
      icon: Shield,
      title: "Garantie à vie sur la pose",
      description: "Tranquillité d'esprit assurée",
      highlight: "Sérénité",
    },
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.01]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/windshield-pattern-bg.png')`,
            backgroundSize: "500px 500px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nos avantages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pourquoi choisir notre service pour vos réparations de vitrage automobile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-card to-muted/30 rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-heading font-semibold text-foreground mr-2">{benefit.title}</h3>
                      <span className="text-xs bg-secondary/20 text-foreground px-2 py-1 rounded-full font-medium">
                        {benefit.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted/50 backdrop-blur rounded-2xl p-8 max-w-4xl mx-auto border border-border">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Une question sur nos services ?</h3>
            <p className="text-muted-foreground mb-6">
              Nos conseillers sont à votre disposition pour vous accompagner dans vos démarches
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                  Nous contacter
                </button>
              </Link>
              <Link href="/#faq">
                <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors bg-transparent">
                  Voir la FAQ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
