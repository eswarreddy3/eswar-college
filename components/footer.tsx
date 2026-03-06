import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  about: [
    { label: "About Us", href: "/about" },
    { label: "Vision & Mission", href: "/about#vision" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Administration", href: "/about#administration" },
    { label: "Achievements", href: "/achievements" },
    { label: "Mandatory Disclosures", href: "/mandatory-disclosures" },
  ],
  quickLinks: [
    { label: "UG Programmes", href: "/academics#btech" },
    { label: "PG Programmes", href: "/academics#mba" },
    { label: "Placements", href: "/placements" },
    { label: "Results", href: "/results" },
    { label: "Alumni", href: "/alumni" },
    { label: "Gallery", href: "/gallery" },
    { label: "Careers", href: "/careers" },
    { label: "Anti-Ragging", href: "/anti-ragging" },
  ],
  departments: [
    { label: "Computer Science & Engineering", href: "/academics#cse" },
    { label: "Electronics & Communication", href: "/academics#ece" },
    { label: "Electrical & Electronics", href: "/academics#eee" },
    { label: "Mechanical Engineering", href: "/academics#mechanical" },
    { label: "Civil Engineering", href: "/academics#civil" },
    { label: "Agriculture Engineering", href: "/academics#agriculture" },
    { label: "Automobile Engineering", href: "/academics#automobile" },
    { label: "MBA", href: "/academics#mba" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/eswar_college.jpeg"
                  alt="Eswar College of Engineering"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <h2 className="font-serif font-bold text-xl tracking-tight">ESWAR</h2>
                <p className="text-sm text-primary-foreground/80 -mt-1">College of Engineering</p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Eswar College of Engineering, established in 2008 by Shaik Dada Saheb Charitable Trust, is committed to nurturing world-class engineering graduates who contribute to national growth.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments Column */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Departments</h3>
            <ul className="space-y-3">
              {footerLinks.departments.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Kesanupalli Village, Narasaraopet – 522 601, Guntur District, Andhra Pradesh</span>
                </a>
              </li>
              <li>
                <a href="tel:+919885578652" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+91 98855 78652 / 99636 34414</span>
                </a>
              </li>
              <li>
                <a href="mailto:principal@eswarcollegeofengg.org" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>principal@eswarcollegeofengg.org</span>
                </a>
              </li>
              <li>
                <a href="mailto:eswarcollegeofengg@gmail.com" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>eswarcollegeofengg@gmail.com</span>
                </a>
              </li>
            </ul>

            {/* Accreditation Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="px-3 py-1.5 bg-accent text-accent-foreground text-xs font-semibold rounded">
                UGC Autonomous
              </div>
              <div className="px-3 py-1.5 bg-accent text-accent-foreground text-xs font-semibold rounded">
                NAAC B++
              </div>
              <div className="px-3 py-1.5 bg-primary-foreground/10 text-xs font-medium rounded">
                AICTE Approved
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Eswar College of Engineering. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/policies#privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/policies#terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
              <Link href="/mandatory-disclosures" className="hover:text-accent transition-colors">Mandatory Disclosures</Link>
              <Link href="/quality-assurance" className="hover:text-accent transition-colors">Quality Assurance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
