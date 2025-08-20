import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Mentions légales - Pare-Brise & Dépannage",
  description:
    "Mentions légales et informations juridiques de Pare-Brise & Dépannage, spécialiste du vitrage automobile.",
}

export default function MentionsLegalesPage() {
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
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">Mentions légales</h1>
            <p className="text-gray-600">Dernière mise à jour : 20 août 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">1. Informations légales</h2>
              <div className="bg-brand-light rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-brand-navy mb-3">Éditeur du site</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Raison sociale :</strong> Pare-Brise & Dépannage SAS
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Siège social :</strong> 123 Avenue de la République, 75011 Paris
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>SIRET :</strong> 123 456 789 00012
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>RCS :</strong> Paris B 123 456 789
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>TVA intracommunautaire :</strong> FR12345678901
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Capital social :</strong> 50 000 €
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Téléphone :</strong> 01 23 45 67 89
                </p>
                <p className="text-gray-700">
                  <strong>Email :</strong> contact@pare-brise-depannage.fr
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">
                2. Directeur de la publication
              </h2>
              <p className="text-gray-700 mb-4">
                Le directeur de la publication est Monsieur Jean Dupont, Président de Pare-Brise & Dépannage SAS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">3. Hébergement</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Hébergeur :</strong> Vercel Inc.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
                </p>
                <p className="text-gray-700">
                  <strong>Site web :</strong> https://vercel.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">4. Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la
                propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
                téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-700 mb-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
              <p className="text-gray-700">
                Les marques et logos de tiers présents sur ce site appartiennent à leurs détenteurs respectifs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">5. Responsabilité</h2>
              <p className="text-gray-700 mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à
                différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p className="text-gray-700 mb-4">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir
                le signaler par email, à l'adresse contact@pare-brise-depannage.fr, en décrivant le problème de la
                manière la plus précise possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">6. Liens hypertextes</h2>
              <p className="text-gray-700 mb-4">
                Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres
                ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Pare-Brise &
                Dépannage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">
                7. Collecte et traitement des données
              </h2>
              <p className="text-gray-700 mb-4">
                Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 modifiée, vous disposez d'un droit
                d'accès, de modification et de suppression des données qui vous concernent.
              </p>
              <p className="text-gray-700">
                Pour plus d'informations sur la collecte et le traitement de vos données personnelles, consultez notre{" "}
                <Link href="/politique-de-confidentialite" className="text-brand-green hover:underline">
                  politique de confidentialité
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-brand-navy mb-4">8. Droit applicable</h2>
              <p className="text-gray-700">
                Tout litige en relation avec l'utilisation du site www.pare-brise-depannage.fr est soumis au droit
                français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
