"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Settings, Cookie } from "lucide-react"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookieConsent", JSON.stringify(consent))
    setShowBanner(false)
    setShowPreferences(false)
  }

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookieConsent", JSON.stringify(consent))
    setShowBanner(false)
    setShowPreferences(false)
  }

  const rejectAll = () => {
    const consent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem("cookieConsent", JSON.stringify(consent))
    setShowBanner(false)
    setShowPreferences(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      {!showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex items-start space-x-3 flex-1">
                <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Gestion des cookies</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et
                    personnaliser le contenu. Vous pouvez accepter tous les cookies ou gérer vos préférences.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreferences(true)}
                  className="border-border text-muted-foreground hover:bg-muted bg-transparent"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Préférences
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={rejectAll}
                  className="border-border text-muted-foreground hover:bg-muted bg-transparent"
                >
                  Refuser
                </Button>
                <Button
                  size="sm"
                  onClick={acceptAll}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Accepter tout
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-bold text-foreground">Préférences des cookies</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowPreferences(false)} className="hover:bg-muted">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nous respectons votre vie privée et vous donnons le contrôle total sur les cookies que nous utilisons.
                  Vous pouvez activer ou désactiver chaque catégorie selon vos préférences.
                </p>

                {/* Essential Cookies */}
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">Cookies essentiels</h3>
                    <Checkbox checked={true} disabled className="opacity-50" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Exemples : authentification, panier, préférences de langue, sécurité
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">Mesure d'audience</h3>
                    <Checkbox
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({ ...prev, analytics: checked as boolean }))
                      }
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Exemples : Google Analytics, statistiques de visite, pages populaires
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">Marketing et publicité</h3>
                    <Checkbox
                      checked={preferences.marketing}
                      onCheckedChange={(checked) =>
                        setPreferences((prev) => ({ ...prev, marketing: checked as boolean }))
                      }
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Ces cookies permettent de vous proposer des publicités personnalisées et pertinentes.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Exemples : Facebook Pixel, Google Ads, remarketing, publicités ciblées
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mt-8">
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="flex-1 border-border text-muted-foreground hover:bg-muted bg-transparent"
                >
                  Refuser tout
                </Button>
                <Button
                  onClick={acceptSelected}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Enregistrer mes préférences
                </Button>
                <Button onClick={acceptAll} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Accepter tout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
