import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileBottomBar } from "@/components/mobile-bottom-bar"

export const metadata: Metadata = {
  title: "Conditions Générales de Vente - Pare-Brise & Dépannage",
  description:
    "Consultez nos conditions générales de vente pour nos services de remplacement et réparation de pare-brise.",
}

export default function CGVPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="pt-20">
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Conditions Générales de Vente</h1>

            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-8">
                Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Objet</h2>
                <p className="text-muted-foreground mb-4">
                  Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre
                  Pare-Brise & Dépannage et ses clients dans le cadre de la vente de services de remplacement et
                  réparation de vitrages automobiles.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Services proposés</h2>
                <p className="text-muted-foreground mb-4">Pare-Brise & Dépannage propose les services suivants :</p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Remplacement de pare-brise</li>
                  <li>Réparation d'impacts par injection de résine</li>
                  <li>Remplacement de vitres latérales</li>
                  <li>Remplacement de lunette arrière</li>
                  <li>Calibrage des systèmes ADAS</li>
                  <li>Intervention à domicile ou en atelier</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Commande et devis</h2>
                <p className="text-muted-foreground mb-4">
                  Toute commande fait l'objet d'un devis préalable gratuit. Le devis est valable 30 jours à compter de
                  sa date d'émission. La commande n'est définitive qu'après acceptation écrite du devis par le client.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Prix et paiement</h2>
                <p className="text-muted-foreground mb-4">
                  Les prix sont exprimés en euros TTC. Le paiement s'effectue :
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>Par carte bancaire</li>
                  <li>Par chèque</li>
                  <li>Par virement bancaire</li>
                  <li>Prise en charge directe par l'assurance (selon conditions)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Exécution des services</h2>
                <p className="text-muted-foreground mb-4">
                  Les délais d'intervention sont communiqués à titre indicatif. Pare-Brise & Dépannage s'engage à
                  respecter les délais convenus sauf cas de force majeure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Garanties</h2>
                <p className="text-muted-foreground mb-4">Pare-Brise & Dépannage garantit :</p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4">
                  <li>La pose : garantie à vie</li>
                  <li>Les pièces : selon garantie constructeur</li>
                  <li>La réparation d'impact : 1 an</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Responsabilité</h2>
                <p className="text-muted-foreground mb-4">
                  La responsabilité de Pare-Brise & Dépannage est limitée au montant de la prestation effectuée.
                  L'entreprise est couverte par une assurance responsabilité civile professionnelle.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Droit de rétractation</h2>
                <p className="text-muted-foreground mb-4">
                  Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être
                  exercé pour les contrats de service pleinement exécutés avant la fin du délai de rétractation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Données personnelles</h2>
                <p className="text-muted-foreground mb-4">
                  Les données personnelles collectées sont traitées conformément à notre politique de confidentialité et
                  au RGPD. Elles sont utilisées uniquement dans le cadre de l'exécution des services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Litiges</h2>
                <p className="text-muted-foreground mb-4">
                  En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux français seront seuls
                  compétents.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Contact</h2>
                <div className="text-muted-foreground">
                  <p>
                    <strong>Pare-Brise & Dépannage</strong>
                  </p>
                  <p>123 Avenue de la République</p>
                  <p>75011 Paris</p>
                  <p>Téléphone : 01 23 45 67 89</p>
                  <p>Email : contact@pare-brise-depannage.fr</p>
                  <p>SIRET : 123 456 789 00012</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  )
}
