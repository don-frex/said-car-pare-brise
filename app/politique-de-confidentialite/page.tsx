import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Eye, Lock, Users } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Politique de confidentialité - Pare-Brise & Dépannage",
  description: "Politique de confidentialité et protection des données personnelles de Pare-Brise & Dépannage.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="mb-4 border-brand-green text-brand-green hover:bg-brand-green hover:text-white bg-transparent"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-gray-600">Dernière mise à jour : 20 août 2025</p>
          </div>

          <div className="bg-brand-light rounded-xl p-6 mb-8">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-brand-green mr-3" />
              <h2 className="text-xl font-heading font-semibold text-brand-navy">Notre engagement</h2>
            </div>
            <p className="text-gray-700">
              Pare-Brise & Dépannage s'engage à protéger et respecter votre vie privée. Cette politique explique comment
              nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4 flex items-center">
                <Eye className="h-6 w-6 text-brand-green mr-3" />
                1. Données collectées
              </h2>

              <h3 className="text-lg font-semibold text-brand-navy mb-3">Données d'identification</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale (pour interventions à domicile)</li>
              </ul>

              <h3 className="text-lg font-semibold text-brand-navy mb-3">Données du véhicule</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Numéro d'immatriculation</li>
                <li>Marque, modèle et année du véhicule</li>
                <li>Type de vitrage concerné</li>
                <li>Description des dégâts</li>
              </ul>

              <h3 className="text-lg font-semibold text-brand-navy mb-3">Données techniques</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Adresse IP</li>
                <li>Données de navigation (cookies)</li>
                <li>Type de navigateur et appareil utilisé</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4 flex items-center">
                <Users className="h-6 w-6 text-brand-green mr-3" />
                2. Finalités du traitement
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-navy mb-2">Services principaux</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Traitement des demandes de rendez-vous</li>
                    <li>• Gestion des interventions</li>
                    <li>• Suivi client et facturation</li>
                    <li>• Support client</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-navy mb-2">Amélioration des services</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Analyse de l'utilisation du site</li>
                    <li>• Amélioration de l'expérience utilisateur</li>
                    <li>• Statistiques et reporting</li>
                    <li>• Prévention de la fraude</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4 flex items-center">
                <Lock className="h-6 w-6 text-brand-green mr-3" />
                3. Base légale et conservation
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-brand-light">
                      <th className="border border-gray-300 p-3 text-left font-semibold text-brand-navy">
                        Type de données
                      </th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-brand-navy">
                        Base légale
                      </th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-brand-navy">
                        Durée de conservation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 text-gray-700">Données client</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Exécution du contrat</td>
                      <td className="border border-gray-300 p-3 text-gray-700">3 ans après dernière intervention</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 text-gray-700">Données de navigation</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Consentement</td>
                      <td className="border border-gray-300 p-3 text-gray-700">13 mois maximum</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 text-gray-700">Marketing</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Consentement</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Jusqu'au retrait du consentement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">4. Partage des données</h2>
              <p className="text-gray-700 mb-4">
                Vos données personnelles ne sont jamais vendues à des tiers. Elles peuvent être partagées uniquement
                dans les cas suivants :
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Partenaires autorisés</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Compagnies d'assurance (pour la prise en charge)</li>
                  <li>• Fournisseurs de vitrages (pour les commandes)</li>
                  <li>• Prestataires techniques (hébergement, maintenance)</li>
                </ul>
              </div>

              <p className="text-gray-700">
                Tous nos partenaires sont tenus par des accords de confidentialité stricts et ne peuvent utiliser vos
                données que dans le cadre des services convenus.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">5. Vos droits</h2>
              <p className="text-gray-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-navy mb-2">Droit d'accès</h3>
                  <p className="text-sm text-gray-700">Obtenir une copie de vos données personnelles</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-navy mb-2">Droit de rectification</h3>
                  <p className="text-sm text-gray-700">Corriger des données inexactes ou incomplètes</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-navy mb-2">Droit à l'effacement</h3>
                  <p className="text-sm text-gray-700">Demander la suppression de vos données</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-brand-navy mb-2">Droit d'opposition</h3>
                  <p className="text-sm text-gray-700">Vous opposer au traitement de vos données</p>
                </div>
              </div>

              <div className="bg-brand-light rounded-lg p-4 mt-4">
                <p className="text-brand-navy font-medium mb-2">Pour exercer vos droits :</p>
                <p className="text-gray-700 text-sm">
                  Contactez-nous à{" "}
                  <a href="mailto:dpo@pare-brise-depannage.fr" className="text-brand-green hover:underline">
                    dpo@pare-brise-depannage.fr
                  </a>
                  ou par courrier à l'adresse de notre siège social. Nous vous répondrons dans un délai de 30 jours.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">6. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences à tout
                moment via le bandeau de cookies ou dans les paramètres de votre navigateur.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">Essentiels</h3>
                  <p className="text-xs text-gray-600">Nécessaires au fonctionnement</p>
                </div>

                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">Analytiques</h3>
                  <p className="text-xs text-gray-600">Mesure d'audience</p>
                </div>

                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-brand-navy mb-2">Marketing</h3>
                  <p className="text-xs text-gray-600">Publicités personnalisées</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">7. Sécurité</h2>
              <p className="text-gray-700 mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
                :
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Chiffrement des données sensibles (SSL/TLS)</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Formation du personnel à la protection des données</li>
                <li>Audits de sécurité réguliers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">8. Contact</h2>
              <div className="bg-brand-light rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données
                  personnelles :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-brand-navy mb-1">Délégué à la Protection des Données</p>
                    <p className="text-gray-700">Email : dpo@pare-brise-depannage.fr</p>
                    <p className="text-gray-700">Téléphone : 01 23 45 67 89</p>
                  </div>

                  <div>
                    <p className="font-semibold text-brand-navy mb-1">Autorité de contrôle</p>
                    <p className="text-gray-700">CNIL - www.cnil.fr</p>
                    <p className="text-gray-700">3 Place de Fontenoy, 75007 Paris</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
