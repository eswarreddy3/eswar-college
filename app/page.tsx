import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MarqueeTicker } from "@/components/marquee-ticker"
import { CTABanner } from "@/components/cta-banner"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { ProgramsSection } from "@/components/home/programs-section"
import { DepartmentsSection } from "@/components/home/departments-section"
import { WhyEswarSection } from "@/components/home/why-eswar-section"
import { EventsSection } from "@/components/home/events-section"
import { PlacementsSection } from "@/components/home/placements-section"
import { CampusLifeSection } from "@/components/home/campus-life-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"

const announcements = [
  "Mega Job Mela 29-10-25 — 50+ Companies Participating",
  "MOU signed with VIGNAN TBI for innovation ecosystem",
  "Engineers' Day 2025 — Eswar Innovation Galaxy Foundation Launch",
  "UGC Autonomous Status Declared",
  "NAAC B++ Accredited with Score 3/4",
  "KIA India Pvt Ltd — Campus Drive March 2025",
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeTicker items={announcements} />
      <AboutSection />
      <ProgramsSection />
      <DepartmentsSection />
      <WhyEswarSection />
      <EventsSection />
      <PlacementsSection />
      <CampusLifeSection />
      <TestimonialsSection />
      <CTABanner
        title="Ready to Shape Your Future?"
        subtitle="Join 3000+ students building tomorrow at Eswar College of Engineering"
        primaryButton={{ label: "Apply Now", href: "/contact" }}
        secondaryButton={{ label: "Download Prospectus", href: "#" }}
      />
      <Footer />
    </main>
  )
}
