"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-4 md:hidden">
      <div className="flex gap-3">
        <Button
          variant="outline"
          size="lg"
          className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
          onClick={() => window.open("tel:0123456789")}
        >
          <Phone className="h-5 w-5 mr-2" />
          Appeler
        </Button>
        <Button
          size="lg"
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200"
          onClick={() => window.open("https://wa.me/33123456789", "_blank")}
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          WhatsApp
        </Button>
      </div>
    </div>
  )
}
