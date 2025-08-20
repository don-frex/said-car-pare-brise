"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Clock, Navigation, Search, Home } from "lucide-react"

export function LocationsSection() {
  const [showHomeService, setShowHomeService] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const agencies = [
    {
      name: "Agence Paris Centre",
      address: "123 Rue de Rivoli, 75001 Paris",
      phone: "01 23 45 67 89",
      hours: "Lun-Ven: 8h-18h, Sam: 9h-17h",
      city: "Paris",
      postal: "75001",
    },
    {
      name: "Agence Lyon Villeurbanne",
      address: "456 Avenue Henri Barbusse, 69100 Villeurbanne",
      phone: "04 78 90 12 34",
      hours: "Lun-Ven: 8h-18h, Sam: 9h-16h",
      city: "Lyon",
      postal: "69100",
    },
    {
      name: "Agence Marseille Nord",
      address: "789 Boulevard National, 13003 Marseille",
      phone: "04 91 23 45 67",
      hours: "Lun-Ven: 8h-18h, Sam: 9h-17h",
      city: "Marseille",
      postal: "13003",
    },
    {
      name: "Agence Toulouse Blagnac",
      address: "321 Route de Grenade, 31700 Blagnac",
      phone: "05 61 78 90 12",
      hours: "Lun-Ven: 8h-18h, Sam: 9h-16h",
      city: "Toulouse",
      postal: "31700",
    },
    {
      name: "Agence Nice Côte d'Azur",
      address: "654 Promenade des Anglais, 06000 Nice",
      phone: "04 93 45 67 89",
      hours: "Lun-Ven: 8h-18h, Sam: 9h-17h",
      city: "Nice",
      postal: "06000",
    },
    {
      name: "Agence Bordeaux Mérignac",
      address: "987 Avenue de la Libération, 33700 Mérignac",
      phone: "05 56 12 34 56",
      hours: "Lun-Ven: 8h-18h, Sam: 9h-16h",
      city: "Bordeaux",
      postal: "33700",
    },
  ]

  const homeServiceZones = [
    "Paris et petite couronne (75, 92, 93, 94)",
    "Lyon et agglomération (69)",
    "Marseille et Aix-en-Provence (13)",
    "Toulouse et périphérie (31)",
    "Nice et Côte d'Azur (06)",
    "Bordeaux et CUB (33)",
  ]

  const filteredAgencies = agencies.filter(
    (agency) =>
      agency.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.postal.includes(searchTerm) ||
      agency.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section id="agences" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Nos agences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez l'agence la plus proche de chez vous ou optez pour une intervention à domicile
          </p>
        </div>

        {/* Service Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-card rounded-lg p-1 shadow-sm border border-border">
            <button
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                !showHomeService
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-primary"
              }`}
              onClick={() => setShowHomeService(false)}
            >
              <MapPin className="h-4 w-4 mr-2 inline" />
              Nos agences
            </button>
            <button
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                showHomeService
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-primary"
              }`}
              onClick={() => setShowHomeService(true)}
            >
              <Home className="h-4 w-4 mr-2 inline" />
              Intervention à domicile
            </button>
          </div>
        </div>

        {!showHomeService ? (
          <>
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Rechercher par ville ou code postal..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background border-border focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Placeholder */}
              <div className="order-2 lg:order-1">
                <div className="bg-card rounded-xl shadow-sm border border-border p-4 h-96">
                  <img
                    src="/images/paris-map.png"
                    alt="Carte de Paris avec nos agences"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Agencies List */}
              <div className="order-1 lg:order-2">
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {filteredAgencies.map((agency, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-heading font-semibold text-foreground">{agency.name}</h3>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {agency.postal}
                          </span>
                        </div>

                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground flex-shrink-0" />
                            <span>{agency.address}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{agency.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{agency.hours}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                            Prendre RDV
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                          >
                            <Navigation className="h-4 w-4 mr-1" />
                            Itinéraire
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card shadow-sm border border-border">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Home className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Intervention à domicile</h3>
                  <p className="text-muted-foreground">Nous nous déplaçons chez vous ou sur votre lieu de travail</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-4">Zones desservies</h4>
                    <ul className="space-y-2">
                      {homeServiceZones.map((zone, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {zone}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-4">Avantages</h4>
                    <ul className="space-y-2">
                      {[
                        "Pas de déplacement nécessaire",
                        "Intervention sur votre lieu de travail",
                        "Même tarif qu'en atelier",
                        "Équipement mobile professionnel",
                      ].map((advantage, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Demander une intervention à domicile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
