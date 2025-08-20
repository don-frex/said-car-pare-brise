"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Tarifs", href: "/tarifs" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center min-w-0 flex-shrink-0">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="h-8 w-40 sm:h-9 sm:w-48 md:h-10 md:w-56 bg-primary rounded-lg flex items-center justify-center px-2 sm:px-3 cursor-pointer hover:bg-primary/90 transition-colors">
                  <span className="text-primary-foreground font-heading font-bold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                    Pare-Brise & Dépannage
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 text-sm xl:text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <div className="text-xs xl:text-sm text-muted-foreground font-medium whitespace-nowrap">
              <Phone className="inline h-3 w-3 xl:h-4 xl:w-4 mr-1" />
              01 23 45 67 89
            </div>
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent focus:ring-2 focus:ring-primary focus:ring-offset-2 text-xs xl:text-sm"
              onClick={() => window.open("tel:0123456789")}
            >
              <Phone className="h-3 w-3 xl:h-4 xl:w-4 mr-1 xl:mr-2" />
              Appeler
            </Button>
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2 text-xs xl:text-sm whitespace-nowrap"
              >
                Demander un RDV
              </Button>
            </Link>
          </div>

          {/* Tablet CTA Buttons */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent focus:ring-2 focus:ring-primary focus:ring-offset-2 text-xs"
              onClick={() => window.open("tel:0123456789")}
            >
              <Phone className="h-3 w-3" />
            </Button>
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2 text-xs"
              >
                RDV
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="focus:ring-2 focus:ring-primary focus:ring-offset-2 p-1">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-primary font-medium py-2 transition-colors duration-200 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground font-medium mb-4">
                      <Phone className="inline h-4 w-4 mr-1" />
                      01 23 45 67 89
                    </div>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        onClick={() => {
                          setIsOpen(false)
                          window.open("tel:0123456789")
                        }}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Appeler
                      </Button>
                      <Link href="/contact">
                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          onClick={() => setIsOpen(false)}
                        >
                          Demander un RDV
                        </Button>
                      </Link>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
