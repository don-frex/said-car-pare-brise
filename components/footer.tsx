import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Link href="/">
                <div className="h-10 w-full max-w-xs bg-primary rounded flex items-center justify-center px-3 cursor-pointer hover:bg-primary/90 transition-colors">
                  <span className="text-primary-foreground font-heading font-bold text-lg sm:text-xl whitespace-nowrap">
                    Pare-Brise & Dépannage
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Spécialiste du vitrage automobile depuis plus de 15 ans. Intervention rapide, garantie à vie sur la pose.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <a href="tel:0123456789" className="hover:text-foreground transition-colors">
                  01 23 45 67 89
                </a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <a href="mailto:contact@pare-brise-depannage.fr" className="hover:text-foreground transition-colors">
                  contact@pare-brise-depannage.fr
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Nos services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Remplacement pare-brise
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Réparation d'impact
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Vitres latérales
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Calibrage ADAS
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Intervention à domicile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact & Horaires</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>Siège social</p>
                  <p>123 Avenue de la République</p>
                  <p>75011 Paris</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>Lun-Ven: 8h00-18h00</p>
                  <p>Sam: 9h00-17h00</p>
                  <p>Dim: Urgences uniquement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Zone & Social */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Zone d'intervention</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Île-de-France, Rhône-Alpes, PACA, Occitanie, Nouvelle-Aquitaine, Pays de la Loire
            </p>

            <h4 className="font-semibold mb-3">Suivez-nous</h4>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com/parebrisedepannage"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/parebrisedepannage"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/company/parebrisedepannage"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/parebrisedepannage"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <p>SIRET: 123 456 789 00012</p>
              <p>RCS Paris B 123 456 789</p>
              <p>TVA: FR12345678901</p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-6 text-sm text-muted-foreground">
              <Link href="/mentions-legales" className="hover:text-foreground transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-de-confidentialite" className="hover:text-foreground transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="hover:text-foreground transition-colors">
                CGV
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground mb-2">
              © 2024 Pare-Brise & Dépannage. Tous droits réservés. Marques et logos de tiers appartiennent à leurs
              détenteurs.
            </p>
            <p className="text-xs text-muted-foreground">
              Site développé avec ❤️ pour offrir le meilleur service de vitrage automobile
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
