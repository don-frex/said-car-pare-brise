"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Marie L.",
      city: "Paris",
      rating: 5,
      comment:
        "Service impeccable ! Intervention rapide à domicile, technicien très professionnel. Mon pare-brise a été remplacé en moins d'une heure. Je recommande vivement !",
      date: "Il y a 2 semaines",
    },
    {
      name: "Pierre D.",
      city: "Lyon",
      rating: 5,
      comment:
        "Excellent service client. Prise en charge complète par l'assurance, aucune avance de frais. Le calibrage ADAS a été fait parfaitement. Très satisfait !",
      date: "Il y a 1 mois",
    },
    {
      name: "Sophie M.",
      city: "Marseille",
      rating: 5,
      comment:
        "Réparation d'impact réussie, on ne voit plus rien ! Prix très correct et intervention rapide. L'équipe est à l'écoute et professionnelle.",
      date: "Il y a 3 semaines",
    },
    {
      name: "Jean-Claude R.",
      city: "Toulouse",
      rating: 5,
      comment:
        "Service de qualité, respect des délais. Le véhicule de prêt m'a permis de continuer à travailler. Garantie à vie sur la pose, c'est rassurant !",
      date: "Il y a 1 semaine",
    },
    {
      name: "Isabelle T.",
      city: "Nice",
      rating: 5,
      comment:
        "Intervention à domicile parfaite. Technicien ponctuel et soigneux. Travail de qualité, je n'hésiterai pas à refaire appel à leurs services.",
      date: "Il y a 2 mois",
    },
    {
      name: "Michel B.",
      city: "Bordeaux",
      rating: 5,
      comment:
        "Très bonne expérience ! Devis clair, intervention rapide, résultat parfait. L'équipe administrative a géré tous les papiers avec l'assurance.",
      date: "Il y a 3 semaines",
    },
    {
      name: "Catherine V.",
      city: "Nantes",
      rating: 5,
      comment:
        "Service client exceptionnel. Problème résolu rapidement, technicien compétent. Je recommande cette entreprise les yeux fermés !",
      date: "Il y a 1 mois",
    },
    {
      name: "François L.",
      city: "Strasbourg",
      rating: 5,
      comment:
        "Remplacement de pare-brise impeccable. Matériel de qualité, pose soignée. Très content du service et du suivi client.",
      date: "Il y a 2 semaines",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section id="avis" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-card rounded-lg px-4 py-2 shadow-sm border border-border flex items-center space-x-2">
              <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <span className="text-sm font-medium text-foreground">Avis Google</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ce que disent nos clients
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4,9/5</span>
            <span className="text-muted-foreground">• Plus de 2 500 avis</span>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-card rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-card rounded-full shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card key={`${currentIndex}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{testimonial.comment}"</p>

                  <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
