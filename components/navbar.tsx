"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Mail, Phone, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Administration", href: "/about#administration" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "UG Programmes (B.Tech)", href: "/academics#btech" },
      { label: "PG Programmes (MBA)", href: "/academics#mba" },
      { label: "Fee Structure", href: "/academics#fee-structure" },
      { label: "Exam Cell", href: "/academics#exam-cell" },
      { label: "Syllabus", href: "/academics#syllabus" },
    ],
  },
  {
    label: "Departments",
    href: "/academics",
    children: [
      { label: "Computer Science & Engineering", href: "/academics#cse" },
      { label: "CSE (AI & Machine Learning)", href: "/academics#cse-aiml" },
      { label: "CSE (Artificial Intelligence)", href: "/academics#cse-ai" },
      { label: "Computer Science & Design", href: "/academics#csd" },
      { label: "Electronics & Communication", href: "/academics#ece" },
      { label: "Electrical & Electronics", href: "/academics#eee" },
      { label: "Mechanical Engineering", href: "/academics#mechanical" },
      { label: "Civil Engineering", href: "/academics#civil" },
      { label: "Agriculture Engineering", href: "/academics#agriculture" },
      { label: "Automobile Engineering", href: "/academics#automobile" },
      { label: "Science & Humanities", href: "/academics#sh" },
      { label: "MBA", href: "/academics#mba" },
    ],
  },
  {
    label: "Campus",
    href: "/campus",
    children: [
      { label: "Infrastructure", href: "/campus" },
      { label: "Library", href: "/campus#library" },
      { label: "Laboratories", href: "/campus#labs" },
      { label: "Sports & Physical Education", href: "/campus#sports" },
      { label: "Transport", href: "/campus#transport" },
      { label: "NSS", href: "/campus#nss" },
      { label: "Medical Facility", href: "/campus#medical" },
      { label: "Canteen", href: "/campus#canteen" },
      { label: "Gymnasium", href: "/campus#gymnasium" },
    ],
  },
  {
    label: "NAAC",
    href: "/naac",
    children: [
      { label: "IQAC", href: "/naac#iqac" },
      { label: "Strategic Plan", href: "/naac#strategic-plan" },
      { label: "Best Practices", href: "/naac#best-practices" },
      { label: "SSR", href: "/naac#ssr" },
      { label: "DVV Clarifications", href: "/naac#dvv" },
    ],
  },
  { label: "NIRF", href: "/nirf" },
  {
    label: "Placements",
    href: "/placements",
    children: [
      { label: "Student Registration", href: "/placements#registration" },
      { label: "Mentoring Cell", href: "/placements#mentoring" },
      { label: "Companies Visited", href: "/placements#companies" },
      { label: "Placement Gallery", href: "/placements#gallery" },
    ],
  },
  {
    label: "Alumni",
    href: "/alumni",
    children: [
      { label: "Alumni Functions", href: "/alumni#functions" },
      { label: "Alumni Committee", href: "/alumni#committee" },
      { label: "Alumni Gallery", href: "/alumni#gallery" },
      { label: "Alumni Registration", href: "/alumni#registration" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

const quickLinks = [
  { label: "Results", href: "/results" },
  { label: "Anti-Ragging", href: "/anti-ragging" },
  { label: "Grievance", href: "/grievance" },
  { label: "Alumni", href: "/alumni" },
  { label: "RTI", href: "/rti" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:principal@eswarcollegeofengg.org" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              principal@eswarcollegeofengg.org
            </a>
            <a href="tel:+919885578652" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              +91 98855 78652
            </a>
          </div>
          <div className="flex items-center gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 text-accent" />
              </div>
              <div className="hidden sm:block">
                <h1 className={cn(
                  "font-serif font-bold text-lg lg:text-xl tracking-tight",
                  isScrolled ? "text-primary" : "text-primary"
                )}>
                  ESWAR
                </h1>
                <p className={cn(
                  "text-xs lg:text-sm -mt-1",
                  isScrolled ? "text-muted-foreground" : "text-muted-foreground"
                )}>
                  College of Engineering
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <button className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        isScrolled 
                          ? "text-foreground hover:bg-muted" 
                          : "text-foreground hover:bg-muted/50"
                      )}>
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.label} asChild>
                          <Link href={child.href} className="cursor-pointer">
                            {child.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isScrolled 
                        ? "text-foreground hover:bg-muted" 
                        : "text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-3">
              <Button 
                asChild 
                className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                <Link href="/contact">Apply Now</Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-background border-t",
            isMobileMenuOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md cursor-pointer hover:bg-muted">
                      {item.label}
                      <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pl-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-muted"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t">
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
