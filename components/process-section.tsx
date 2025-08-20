import { FileText, Calendar, Wrench, CheckCircle } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: FileText,
      title: "Devis et prise en charge assurance",
      description: "Nous contactons votre assureur et gérons l'administratif pour vous",
      details: ["Devis gratuit", "Gestion assurance", "Zéro paperasse"],
    },
    {
      icon: Calendar,
      title: "Rendez-vous en atelier ou à domicile",
      description: "Choisissez le lieu et l'heure qui vous conviennent le mieux",
      details: ["À domicile", "En atelier", "Horaires flexibles"],
    },
    {
      icon: Wrench,
      title: "Intervention et calibrage ADAS",
      description: "Remplacement professionnel avec calibrage des systèmes de sécurité",
      details: ["Technicien certifié", "Calibrage ADAS", "Contrôle qualité"],
    },
    {
      icon: CheckCircle,
      title: "Véhicule rendu, garantie à vie",
      description: "Votre véhicule est prêt avec une garantie à vie sur la pose",
      details: ["Garantie à vie", "Véhicule propre", "Satisfaction client"],
    },
  ]

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.008]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/crack-pattern-overlay.png')`,
            backgroundSize: "600px 600px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Notre processus</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un service simple et efficace en 4 étapes pour votre tranquillité d'esprit
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="relative">
                  {/* Timeline connector for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-6 top-16 w-0.5 h-16 bg-primary/20"></div>
                  )}

                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border relative z-10">
                    {/* Step number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>

                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{step.title}</h3>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{step.description}</p>

                    <ul className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
