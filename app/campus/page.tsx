import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { CTABanner } from "@/components/cta-banner"
import {
  BookOpen,
  FlaskConical,
  Monitor,
  Laptop,
  Building,
  Bus,
  Dumbbell,
  Trophy,
  UtensilsCrossed,
  HeartPulse,
  Users,
  ShoppingBag,
} from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Campus & Infrastructure | Eswar College of Engineering",
  description: "Explore our world-class campus facilities including modern labs, library, sports grounds, and more at Eswar College of Engineering.",
}

const facilities = [
  {
    id: "library",
    name: "Library",
    icon: BookOpen,
    description: "Well-stocked library with digital access, Web OPAC, and over 50,000 books covering all engineering disciplines.",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/about-1.jpg",
    size: "large",
  },
  {
    id: "labs",
    name: "Laboratories",
    icon: FlaskConical,
    description: "State-of-the-art laboratories across all departments with modern equipment and safety measures.",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/departments-521x300.jpg",
    size: "medium",
  },
  {
    id: "digital-classrooms",
    name: "Digital Classrooms",
    icon: Monitor,
    description: "Smart classrooms with projectors, AV equipment, and interactive learning tools.",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/ug-521x300.jpg",
    size: "medium",
  },
  {
    id: "computer-centers",
    name: "Computer Centers",
    icon: Laptop,
    description: "Multiple computer labs with high-speed internet and latest software for practical learning.",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/pg-521x300.jpg",
    size: "small",
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    icon: Building,
    description: "Modern buildings with well-ventilated classrooms, seminar halls, and auditorium.",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2019/08/Web-copy.jpg",
    size: "small",
  },
  {
    id: "transport",
    name: "Transport",
    icon: Bus,
    description: "Fleet of buses covering all major routes for safe and convenient commute.",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-26-at-8.05.51-AM.jpeg",
    size: "small",
  },
  {
    id: "gymnasium",
    name: "Gymnasium",
    icon: Dumbbell,
    description: "Fully equipped fitness center with modern exercise machines and trainers.",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/09/PROJECT-EXPO.jpeg",
    size: "medium",
  },
  {
    id: "sports",
    name: "Sports Facilities",
    icon: Trophy,
    description: "Grounds for cricket, football, volleyball, basketball, and athletics with professional coaching.",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/09/HACKATHON.jpeg",
    size: "large",
  },
  {
    id: "canteen",
    name: "Canteen",
    icon: UtensilsCrossed,
    description: "Hygienic multi-cuisine canteen serving nutritious and affordable meals.",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-04-at-5.39.08-PM.jpeg",
    size: "small",
  },
  {
    id: "medical",
    name: "Medical Facility",
    icon: HeartPulse,
    description: "On-campus health center with first aid and emergency medical support.",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/02/a11.jpg",
    size: "small",
  },
  {
    id: "nss",
    name: "NSS Unit",
    icon: Users,
    description: "Active NSS unit for community service, blood donation drives, and social awareness.",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-28-at-12.19.01-PM.jpeg",
    size: "medium",
  },
  {
    id: "store",
    name: "Cooperative Store",
    icon: ShoppingBag,
    description: "On-campus store for stationery, books, and essential student supplies.",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2024/12/ssc.jpg",
    size: "small",
  },
]

export default function CampusPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroBanner
        title="Our Campus & Facilities"
        subtitle="World-class infrastructure spread across a 30+ acre green campus"
        breadcrumbs={[{ label: "Campus", href: "/campus" }]}
        backgroundImage="https://eswarcollegeofengg.org/wp-content/uploads/2019/08/Web-copy.jpg"
      />

      {/* Campus Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Infrastructure
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              State-of-the-Art Facilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our campus is designed to provide an optimal learning environment with modern amenities and facilities.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {facilities.map((facility, index) => (
              <div
                key={facility.id}
                id={facility.id}
                className={cn(
                  "group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-secondary/50 transition-all hover:shadow-lg",
                  facility.size === "large" && "col-span-2 row-span-2",
                  facility.size === "medium" && "col-span-2 md:col-span-1 md:row-span-2",
                  facility.size === "small" && "col-span-1"
                )}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-4 lg:p-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                    <facility.icon className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg lg:text-xl font-bold text-primary-foreground mb-2">
                    {facility.name}
                  </h3>
                  <p
                    className={cn(
                      "text-primary-foreground/80 text-sm leading-relaxed",
                      facility.size === "small" && "hidden sm:block line-clamp-2",
                      facility.size === "medium" && "line-clamp-3",
                      facility.size === "large" && "line-clamp-4"
                    )}
                  >
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Stats */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-serif text-4xl lg:text-5xl font-bold text-accent mb-2">30+</div>
              <div className="text-primary-foreground/70">Acre Campus</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl lg:text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-primary-foreground/70">Modern Labs</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl lg:text-5xl font-bold text-accent mb-2">15</div>
              <div className="text-primary-foreground/70">Smart Classrooms</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl lg:text-5xl font-bold text-accent mb-2">50K+</div>
              <div className="text-primary-foreground/70">Library Books</div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience Our Campus
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take a virtual tour of our beautiful campus and explore the facilities that await you. See where innovation meets infrastructure.
            </p>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://eswarcollegeofengg.org/wp-content/uploads/2024/04/about-1.jpg"
                alt="Campus aerial view"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Visit Our Campus"
        subtitle="Schedule a campus visit and experience our facilities firsthand"
        primaryButton={{ label: "Schedule Visit", href: "/contact" }}
        secondaryButton={{ label: "Contact Us", href: "/contact" }}
      />

      <Footer />
    </main>
  )
}
