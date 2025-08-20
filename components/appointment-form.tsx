"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface FormData {
  // Step 1
  licensePlate: string
  brand: string
  model: string
  year: string

  // Step 2
  glassType: string
  damageDescription: string
  damageImages: File[]

  // Step 3
  serviceLocation: string
  selectedAgency: string
  homeAddress: string

  // Step 4
  preferredDate: string
  preferredTime: string

  // Step 5
  firstName: string
  lastName: string
  phone: string
  email: string
  rgpdConsent: boolean
  marketingConsent: boolean
}

export function AppointmentForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    licensePlate: "",
    brand: "",
    model: "",
    year: "",
    glassType: "",
    damageDescription: "",
    damageImages: [],
    serviceLocation: "",
    selectedAgency: "",
    homeAddress: "",
    preferredDate: "",
    preferredTime: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    rgpdConsent: false,
    marketingConsent: false,
  })

  const totalSteps = 5

  const updateFormData = (field: keyof FormData, value: string | boolean | File[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/rdv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
      } else {
        alert("Erreur lors de l'envoi de votre demande. Veuillez réessayer.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Erreur lors de l'envoi de votre demande. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const agencies = [
    "Agence Paris Centre - 123 Rue de Rivoli, 75001 Paris",
    "Agence Lyon Villeurbanne - 456 Avenue Henri Barbusse, 69100 Villeurbanne",
    "Agence Marseille Nord - 789 Boulevard National, 13003 Marseille",
    "Agence Toulouse Blagnac - 321 Route de Grenade, 31700 Blagnac",
    "Agence Nice Côte d'Azur - 654 Promenade des Anglais, 06000 Nice",
    "Agence Bordeaux Mérignac - 987 Avenue de la Libération, 33700 Mérignac",
  ]

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ]

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    const validFiles = files.filter((file) => {
      const isValidType = file.type.startsWith("image/")
      const isValidSize = file.size <= 5 * 1024 * 1024 // 5MB max
      return isValidType && isValidSize
    })

    if (validFiles.length !== files.length) {
      alert("Certains fichiers ont été ignorés (format non supporté ou taille > 5MB)")
    }

    updateFormData("damageImages", [...formData.damageImages, ...validFiles].slice(0, 3))
  }

  const removeImage = (index: number) => {
    const newImages = formData.damageImages.filter((_, i) => i !== index)
    updateFormData("damageImages", newImages)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Demande de rendez-vous confirmée !
                </h2>
                <p className="text-muted-foreground mb-6">
                  Nous avons bien reçu votre demande. Un conseiller vous contactera dans les plus brefs délais pour
                  confirmer votre rendez-vous.
                </p>

                <div className="bg-muted rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-foreground mb-2">Récapitulatif de votre demande</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      <strong>Véhicule:</strong> {formData.brand} {formData.model} ({formData.year})
                    </p>
                    <p>
                      <strong>Immatriculation:</strong> {formData.licensePlate}
                    </p>
                    <p>
                      <strong>Service:</strong> {formData.glassType}
                    </p>
                    <p>
                      <strong>Lieu:</strong> {formData.serviceLocation === "agency" ? "En agence" : "À domicile"}
                    </p>
                    <p>
                      <strong>Date souhaitée:</strong> {formData.preferredDate} à {formData.preferredTime}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Ajouter au calendrier
                  </Button>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={() => {
                      setIsSubmitted(false)
                      setCurrentStep(1)
                      setFormData({
                        licensePlate: "",
                        brand: "",
                        model: "",
                        year: "",
                        glassType: "",
                        damageDescription: "",
                        damageImages: [],
                        serviceLocation: "",
                        selectedAgency: "",
                        homeAddress: "",
                        preferredDate: "",
                        preferredTime: "",
                        firstName: "",
                        lastName: "",
                        phone: "",
                        email: "",
                        rgpdConsent: false,
                        marketingConsent: false,
                      })
                    }}
                  >
                    Nouvelle demande
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Demander un rendez-vous</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Obtenez un devis personnalisé en quelques minutes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Étape {currentStep} sur {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round((currentStep / totalSteps) * 100)}% complété
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <Card className="shadow-lg border-border">
            <CardHeader className="bg-muted">
              <CardTitle className="text-xl font-heading text-foreground">
                {currentStep === 1 && "Informations du véhicule"}
                {currentStep === 2 && "Type d'intervention"}
                {currentStep === 3 && "Lieu d'intervention"}
                {currentStep === 4 && "Date et heure"}
                {currentStep === 5 && "Vos coordonnées"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* Step 1: Vehicle Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="licensePlate" className="text-sm font-medium text-muted-foreground">
                      Numéro d'immatriculation *
                    </Label>
                    <Input
                      id="licensePlate"
                      placeholder="AB-123-CD"
                      value={formData.licensePlate}
                      onChange={(e) => updateFormData("licensePlate", e.target.value.toUpperCase())}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="brand" className="text-sm font-medium text-muted-foreground">
                        Marque *
                      </Label>
                      <Select value={formData.brand} onValueChange={(value) => updateFormData("brand", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Renault">Renault</SelectItem>
                          <SelectItem value="Peugeot">Peugeot</SelectItem>
                          <SelectItem value="Citroën">Citroën</SelectItem>
                          <SelectItem value="Volkswagen">Volkswagen</SelectItem>
                          <SelectItem value="BMW">BMW</SelectItem>
                          <SelectItem value="Mercedes">Mercedes</SelectItem>
                          <SelectItem value="Audi">Audi</SelectItem>
                          <SelectItem value="Ford">Ford</SelectItem>
                          <SelectItem value="Opel">Opel</SelectItem>
                          <SelectItem value="Autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="model" className="text-sm font-medium text-muted-foreground">
                        Modèle *
                      </Label>
                      <Input
                        id="model"
                        placeholder="ex: Clio, 308..."
                        value={formData.model}
                        onChange={(e) => updateFormData("model", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="year" className="text-sm font-medium text-muted-foreground">
                        Année *
                      </Label>
                      <Select value={formData.year} onValueChange={(value) => updateFormData("year", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Année" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 25 }, (_, i) => 2025 - i).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Astuce :</strong> Une photo de votre carte grise peut accélérer le processus
                      (optionnel).
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2: Glass Type */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground mb-4 block">
                      Type de vitrage concerné *
                    </Label>
                    <RadioGroup
                      value={formData.glassType}
                      onValueChange={(value) => updateFormData("glassType", value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                        <RadioGroupItem value="pare-brise" id="pare-brise" />
                        <Label htmlFor="pare-brise" className="flex-1 cursor-pointer">
                          <div className="font-medium">Pare-brise</div>
                          <div className="text-sm text-muted-foreground">Remplacement ou réparation</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                        <RadioGroupItem value="impact" id="impact" />
                        <Label htmlFor="impact" className="flex-1 cursor-pointer">
                          <div className="font-medium">Impact / Éclat</div>
                          <div className="text-sm text-muted-foreground">Réparation par injection de résine</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                        <RadioGroupItem value="laterale" id="laterale" />
                        <Label htmlFor="laterale" className="flex-1 cursor-pointer">
                          <div className="font-medium">Vitre latérale</div>
                          <div className="text-sm text-muted-foreground">Remplacement vitre avant/arrière</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                        <RadioGroupItem value="lunette" id="lunette" />
                        <Label htmlFor="lunette" className="flex-1 cursor-pointer">
                          <div className="font-medium">Lunette arrière</div>
                          <div className="text-sm text-muted-foreground">Remplacement avec dégivrage</div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="damageDescription" className="text-sm font-medium text-muted-foreground">
                      Description des dégâts (optionnel)
                    </Label>
                    <Textarea
                      id="damageDescription"
                      placeholder="Décrivez brièvement les dégâts (taille, localisation...)"
                      value={formData.damageDescription}
                      onChange={(e) => updateFormData("damageDescription", e.target.value)}
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  {/* Image upload section */}
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Photos des dégâts (optionnel)
                    </Label>
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                        <input
                          type="file"
                          id="damage-images"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <label htmlFor="damage-images" className="cursor-pointer flex flex-col items-center space-y-2">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-muted-foreground"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary">Cliquez pour ajouter</span> ou glissez vos photos
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Maximum 3 photos • JPG, PNG • 5MB max par photo
                          </div>
                        </label>
                      </div>

                      {/* Image preview */}
                      {formData.damageImages.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {formData.damageImages.map((file, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={URL.createObjectURL(file) || "/placeholder.svg"}
                                alt={`Dégât ${index + 1}`}
                                className="w-full h-24 object-cover rounded-lg border border-border"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs hover:bg-destructive/90 transition-colors"
                              >
                                ×
                              </button>
                              <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-1 rounded">
                                {file.name.length > 15 ? file.name.substring(0, 15) + "..." : file.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      💡 Des photos claires nous aident à mieux évaluer les dégâts et préparer l'intervention
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>✓ Zéro avance de frais</strong> avec la plupart des assurances
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3: Service Location */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground mb-4 block">
                      Où souhaitez-vous l'intervention ? *
                    </Label>
                    <RadioGroup
                      value={formData.serviceLocation}
                      onValueChange={(value) => updateFormData("serviceLocation", value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                        <RadioGroupItem value="agency" id="agency" />
                        <Label htmlFor="agency" className="flex-1 cursor-pointer">
                          <div className="font-medium">En agence</div>
                          <div className="text-sm text-muted-foreground">
                            Déposez votre véhicule dans l'une de nos agences
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
                        <RadioGroupItem value="home" id="home" />
                        <Label htmlFor="home" className="flex-1 cursor-pointer">
                          <div className="font-medium">À domicile / Sur site</div>
                          <div className="text-sm text-muted-foreground">Nous nous déplaçons chez vous</div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.serviceLocation === "agency" && (
                    <div>
                      <Label htmlFor="selectedAgency" className="text-sm font-medium text-muted-foreground">
                        Choisissez votre agence *
                      </Label>
                      <Select
                        value={formData.selectedAgency}
                        onValueChange={(value) => updateFormData("selectedAgency", value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionner une agence" />
                        </SelectTrigger>
                        <SelectContent>
                          {agencies.map((agency, index) => (
                            <SelectItem key={index} value={agency}>
                              {agency}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {formData.serviceLocation === "home" && (
                    <div>
                      <Label htmlFor="homeAddress" className="text-sm font-medium text-muted-foreground">
                        Adresse d'intervention *
                      </Label>
                      <Textarea
                        id="homeAddress"
                        placeholder="Adresse complète (rue, ville, code postal)"
                        value={formData.homeAddress}
                        onChange={(e) => updateFormData("homeAddress", e.target.value)}
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Step 4: Date and Time */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate" className="text-sm font-medium text-muted-foreground">
                        Date souhaitée *
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => updateFormData("preferredDate", e.target.value)}
                        className="mt-1"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div>
                      <Label htmlFor="preferredTime" className="text-sm font-medium text-muted-foreground">
                        Créneau horaire *
                      </Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) => updateFormData("preferredTime", value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choisir un horaire" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Délais d'intervention</h4>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Réparation d'impact : sous 24h</li>
                      <li>• Remplacement pare-brise : 24-48h</li>
                      <li>• Vitres latérales : 48-72h</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Step 5: Contact Information */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-muted-foreground">
                        Prénom *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-muted-foreground">
                        Nom *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="rgpd"
                        checked={formData.rgpdConsent}
                        onCheckedChange={(checked) => updateFormData("rgpdConsent", checked as boolean)}
                      />
                      <Label htmlFor="rgpd" className="text-sm text-muted-foreground leading-relaxed">
                        J'accepte que mes données personnelles soient utilisées pour traiter ma demande de rendez-vous.
                        *
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="marketing"
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) => updateFormData("marketingConsent", checked as boolean)}
                      />
                      <Label htmlFor="marketing" className="text-sm text-muted-foreground leading-relaxed">
                        J'accepte de recevoir des offres commerciales par email (optionnel).
                      </Label>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>🔒 Vos données sont protégées</strong> et ne seront jamais transmises à des tiers.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="border-border text-muted-foreground hover:bg-muted bg-transparent focus:ring-2 focus:ring-muted focus:ring-offset-2"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Précédent
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    disabled={
                      (currentStep === 1 &&
                        (!formData.licensePlate || !formData.brand || !formData.model || !formData.year)) ||
                      (currentStep === 2 && !formData.glassType) ||
                      (currentStep === 3 &&
                        (!formData.serviceLocation ||
                          (formData.serviceLocation === "agency" && !formData.selectedAgency) ||
                          (formData.serviceLocation === "home" && !formData.homeAddress))) ||
                      (currentStep === 4 && (!formData.preferredDate || !formData.preferredTime))
                    }
                  >
                    Suivant
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2 min-w-[140px]"
                    disabled={
                      isSubmitting ||
                      !formData.firstName ||
                      !formData.lastName ||
                      !formData.phone ||
                      !formData.email ||
                      !formData.rgpdConsent
                    }
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" />
                        <span className="ml-2">Envoi...</span>
                      </>
                    ) : (
                      <>
                        Confirmer la demande
                        <CheckCircle className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
