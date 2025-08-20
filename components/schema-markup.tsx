export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pare-Brise & Dépannage",
    description: "Spécialiste du vitrage automobile - Remplacement et réparation de pare-brise",
    url: "https://pare-brise-depannage.fr",
    telephone: "+33123456789",
    email: "contact@pare-brise-depannage.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Avenue de la République",
      addressLocality: "Paris",
      postalCode: "75011",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.8566",
      longitude: "2.3522",
    },
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-17:00"],
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2500",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de vitrage automobile",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Remplacement de pare-brise",
            description: "Remplacement professionnel de pare-brise avec calibrage ADAS",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Réparation d'impact",
            description: "Réparation d'impact par injection de résine",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vitres latérales",
            description: "Remplacement de vitres latérales et lunette arrière",
          },
        },
      ],
    },
    areaServed: [
      {
        "@type": "State",
        name: "Île-de-France",
      },
      {
        "@type": "State",
        name: "Rhône-Alpes",
      },
      {
        "@type": "State",
        name: "PACA",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels sont les délais d'intervention ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos délais d'intervention varient selon le type de service : réparation d'impact sous 24h, remplacement de pare-brise sous 24-48h, et vitres latérales sous 48-72h.",
        },
      },
      {
        "@type": "Question",
        name: "Comment se passe la prise en charge par l'assurance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous gérons directement avec votre assureur. Il vous suffit de nous fournir vos coordonnées d'assurance et nous nous occupons de toutes les démarches administratives.",
        },
      },
      {
        "@type": "Question",
        name: "Le calibrage ADAS est-il obligatoire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, le calibrage ADAS est obligatoire après le remplacement d'un pare-brise équipé de capteurs ou caméras. C'est une obligation légale pour votre sécurité.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
