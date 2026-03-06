"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { CTABanner } from "@/components/cta-banner"
import { X, Calendar, ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "workshops", label: "Workshops" },
  { id: "hackathons", label: "Hackathons" },
  { id: "campus", label: "Campus Life" },
]

const galleryItems = [
  {
    id: 1,
    title: "Mega Job Mela 2025",
    date: "29 Oct 2025",
    category: "events",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/10/MEGA-JOB-MELA-e1761366529370.jpeg",
    description: "Annual campus recruitment drive with 50+ companies participating.",
  },
  {
    id: 2,
    title: "National Innovation Day Hackathon",
    date: "13-15 Oct 2025",
    category: "hackathons",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/09/HACKATHON.jpeg",
    description: "3-day hackathon celebrating innovation and entrepreneurship.",
  },
  {
    id: 3,
    title: "AWS Cloud Computing Workshop",
    date: "14-16 Oct 2025",
    category: "workshops",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-09-at-8.03.17-PM.jpeg",
    description: "Hands-on workshop on AWS services and cloud architecture.",
  },
  {
    id: 4,
    title: "Engineers' Day Project Expo",
    date: "15 Sep 2025",
    category: "events",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/09/PROJECT-EXPO.jpeg",
    description: "Annual project exhibition showcasing student innovations.",
  },
  {
    id: 5,
    title: "MOU with VIGNAN TBI",
    date: "29 Aug 2025",
    category: "events",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-11.36.32-AM-e1756534956876.jpeg",
    description: "Strategic partnership for innovation ecosystem development.",
  },
  {
    id: 6,
    title: "Python Data Science Workshop",
    date: "14-18 Oct 2025",
    category: "workshops",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-10-at-12.11.14-PM.jpeg",
    description: "5-day workshop on Matplotlib, NumPy, and Pandas.",
  },
  {
    id: 7,
    title: "SQL & Data Analytics Workshop",
    date: "Oct 2025",
    category: "workshops",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-10-at-12.08.50-PM.jpeg",
    description: "Workshop on SQL, data analytics and business intelligence.",
  },
  {
    id: 8,
    title: "Tech Sketch Competition",
    date: "Sep 2025",
    category: "events",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/09/TECH-SKETCH.jpeg",
    description: "Creative technical drawing competition for students.",
  },
  {
    id: 9,
    title: "KIA India Campus Drive",
    date: "Apr 2025",
    category: "events",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/04/kia.jpg",
    description: "KIA India Pvt Ltd campus recruitment drive.",
  },
  {
    id: 10,
    title: "NAAC Accreditation",
    date: "Jan 2025",
    category: "events",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/01/naac.jpg",
    description: "Eswar College achieves NAAC B++ accreditation.",
  },
  {
    id: 11,
    title: "MOU Signing Ceremony",
    date: "Jan 2025",
    category: "events",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/01/mou.jpg",
    description: "Strategic MOU signed with industry partners.",
  },
  {
    id: 12,
    title: "Campus Overview",
    date: "",
    category: "campus",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/about-1.jpg",
    description: "Eswar College of Engineering campus.",
  },
  {
    id: 13,
    title: "Academic Departments",
    date: "",
    category: "campus",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/departments-521x300.jpg",
    description: "State-of-the-art department facilities.",
  },
  {
    id: 14,
    title: "UG Programme Highlight",
    date: "",
    category: "campus",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/ug-521x300.jpg",
    description: "B.Tech undergraduate engineering programmes.",
  },
  {
    id: 15,
    title: "MBA Programme",
    date: "",
    category: "campus",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/pg-521x300.jpg",
    description: "Postgraduate MBA programme at Eswar College.",
  },
  {
    id: 16,
    title: "Eswar Innovation Galaxy",
    date: "Sep 2025",
    category: "events",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-04-at-5.39.08-PM.jpeg",
    description: "Engineers' Day — Eswar Innovation Galaxy Foundation Launch.",
  },
  {
    id: 17,
    title: "Campus Event",
    date: "Jul 2025",
    category: "events",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-26-at-8.05.51-AM.jpeg",
    description: "Campus event and student activities.",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  )

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroBanner
        title="News, Events & Gallery"
        subtitle="Capturing moments of excellence and innovation at Eswar College"
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
        backgroundImage="https://eswarcollegeofengg.org/wp-content/uploads/2019/08/Web-copy.jpg"
      />

      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2.5 rounded-lg font-medium transition-all",
                  activeCategory === category.id
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted text-left"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {item.date && (
                    <div className="flex items-center gap-2 text-accent text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                  )}
                  <h3 className="font-serif text-lg font-bold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            aria-label="Previous image"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            aria-label="Next image"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="max-w-5xl w-full px-16">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={filteredItems[currentIndex].image}
                alt={filteredItems[currentIndex].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">
                {filteredItems[currentIndex].title}
              </h3>
              {filteredItems[currentIndex].date && (
                <p className="text-accent mb-2">{filteredItems[currentIndex].date}</p>
              )}
              <p className="text-primary-foreground/80">
                {filteredItems[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      <CTABanner
        title="Be Part of Our Story"
        subtitle="Join Eswar College and create your own memorable moments"
        primaryButton={{ label: "Apply Now", href: "/contact" }}
        secondaryButton={{ label: "Contact Us", href: "/contact" }}
      />

      <Footer />
    </main>
  )
}
