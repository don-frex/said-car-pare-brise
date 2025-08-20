"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqItems = [
    {
      question: "Quels sont les délais d'intervention ?",
      answer:
        "Nos délais d'intervention varient selon le type de service : réparation d'impact sous 24h, remplacement de pare-brise sous 24-48h, et vitres latérales sous 48-72h. Nous nous efforçons de respecter ces délais et vous proposons souvent des créneaux plus rapides selon la disponibilité.",
    },
    {
      question: "Comment se passe la prise en charge par l'assurance ?",
      answer:
        "Nous gérons directement avec votre assureur. Il vous suffit de nous fournir vos coordonnées d'assurance et nous nous occupons de toutes les démarches administratives. Dans la plupart des cas, vous n'avez aucune avance de frais à faire.",
    },
    {
      question: "Dans quelles conditions la franchise est-elle offerte ?",
      answer:
        "La franchise peut être offerte selon les conditions de votre contrat d'assurance et le type d'intervention. Pour une réparation d'impact, la franchise est souvent prise en charge. Pour un remplacement, cela dépend de votre contrat. Nous vérifions systématiquement avec votre assureur.",
    },
    {
      question: "Quels types de véhicules prenez-vous en charge ?",
      answer:
        "Nous intervenons sur tous types de véhicules : voitures particulières, utilitaires, poids lourds, camping-cars, et véhicules de collection. Nos techniciens sont formés pour travailler sur toutes les marques et tous les modèles, y compris les véhicules récents avec systèmes ADAS.",
    },
    {
      question: "Le calibrage ADAS est-il obligatoire ?",
      answer:
        "Oui, le calibrage ADAS est obligatoire après le remplacement d'un pare-brise équipé de capteurs ou caméras. C'est une obligation légale pour votre sécurité et celle des autres usagers. Nos techniciens sont certifiés pour effectuer ces calibrages selon les normes constructeurs.",
    },
    {
      question: "Quelle est la durée et la couverture de votre garantie ?",
      answer:
        "Nous offrons une garantie à vie sur la pose de tous nos vitrages. Cette garantie couvre les défauts de pose, l'étanchéité et la tenue du vitrage. Elle ne couvre pas les nouveaux bris de glace ou impacts. La garantie est valable tant que vous possédez le véhicule.",
    },
    {
      question: "Que faire en cas de bris de glace sans assurance ?",
      answer:
        "Si vous n'avez pas d'assurance bris de glace, nous vous proposons des tarifs préférentiels et des facilités de paiement. Nous établissons un devis gratuit et transparent. Dans certains cas, une réparation d'impact peut être une alternative économique au remplacement complet.",
    },
    {
      question: "Que faites-vous pour l'écologie et le recyclage des vitrages ?",
      answer:
        "Nous sommes engagés dans une démarche éco-responsable. Tous les anciens vitrages sont collectés et recyclés dans des filières spécialisées. Le verre est recyclé à 100% et réutilisé dans l'industrie. Nous privilégions également les vitrages reconditionnés quand c'est possible et sûr.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Questions fréquentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos services de vitrage automobile
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="shadow-sm border-border hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-heading font-semibold text-foreground pr-4">{item.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto shadow-sm border border-border">
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Notre équipe de conseillers est à votre disposition pour répondre à toutes vos questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                  Nous contacter
                </button>
              </Link>
              <a href="tel:0123456789">
                <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors bg-transparent">
                  01 23 45 67 89
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
