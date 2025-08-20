"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, X } from "lucide-react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryItems = [
    {
      before: "/images/windshield-impact-before.png",
      after: "/images/windshield-impact-after.png",
      title: "Réparation d'impact pare-brise",
      description: "Impact de 2cm réparé par injection de résine",
    },
    {
      before: "/images/windshield-crack-before.png",
      after: "/images/windshield-crack-after.png",
      title: "Remplacement pare-brise fissuré",
      description: "Pare-brise entièrement remplacé avec calibrage ADAS",
    },
    {
      before: "/images/stone-chip-before.png",
      after: "/images/stone-chip-after.png",
      title: "Réparation éclat de pierre",
      description: "Éclat de pierre réparé, résultat invisible",
    },
    {
      before: "/images/side-window-before.png",
      after: "/images/side-window-after.png",
      title: "Remplacement vitrage latéral",
      description: "Vitre latérale remplacée, étanchéité parfaite",
    },
    {
      before: "/images/scratch-repair-before.png",
      after: "/images/scratch-repair-after.png",
      title: "Polissage rayures légères",
      description: "Rayures superficielles polies, transparence restaurée",
    },
    {
      before: "/images/rear-window-before.png",
      after: "/images/rear-window-after.png",
      title: "Remplacement lunette arrière",
      description: "Lunette arrière chauffante remplacée",
    },
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.012]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/glass-texture-bg.png')`,
            backgroundSize: "400px 400px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Galerie avant/après</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez la qualité de nos interventions à travers nos réalisations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(index)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={item.before || "/placeholder.svg"}
                        alt={`Avant - ${item.title}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Avant</div>
                    </div>
                    <div className="relative">
                      <img
                        src={item.after || "/placeholder.svg"}
                        alt={`Après - ${item.title}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Après
                      </div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg">
                        <Eye className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-border">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  {galleryItems[selectedImage].title}
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="relative">
                      <img
                        src={galleryItems[selectedImage].before || "/placeholder.svg"}
                        alt={`Avant - ${galleryItems[selectedImage].title}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-3 py-1 rounded">Avant</div>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <img
                        src={galleryItems[selectedImage].after || "/placeholder.svg"}
                        alt={`Après - ${galleryItems[selectedImage].title}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-sm px-3 py-1 rounded">
                        Après
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{galleryItems[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
