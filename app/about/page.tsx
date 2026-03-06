import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { AccreditationBadge } from "@/components/accreditation-badge"
import { CTABanner } from "@/components/cta-banner"
import { Eye, Target, Award, Users, Building, BookOpen } from "lucide-react"

export const metadata = {
  title: "About Us | Eswar College of Engineering",
  description: "Learn about Eswar College of Engineering - our history, vision, mission, and leadership. UGC Autonomous, NAAC B++ accredited institution since 2008.",
}

const leadership = [
  {
    name: "Sri Shaik Dada Saheb",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    bio: "Visionary founder who established the institution with a mission to provide quality technical education.",
  },
  {
    name: "Sri Shaik Basha Saheb",
    role: "Chairman",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
    bio: "Leading the institution towards excellence in engineering education and research.",
  },
  {
    name: "Sri Shaik Mastan Saheb",
    role: "Secretary & Correspondent",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
    bio: "Overseeing administrative functions and strategic partnerships.",
  },
  {
    name: "Sri Shaik Baji Saheb",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    bio: "Managing day-to-day operations and ensuring institutional growth.",
  },
  {
    name: "Dr. K. Ramesh",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
    bio: "Guiding academic excellence and fostering a culture of innovation.",
  },
  {
    name: "Sri S. Ahmed",
    role: "Executive Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    bio: "Driving infrastructure development and student welfare initiatives.",
  },
]

const milestones = [
  { year: "2008", event: "College established by Shaik Dada Saheb Charitable Trust" },
  { year: "2012", event: "First batch of B.Tech students graduated" },
  { year: "2015", event: "AICTE approval for additional branches" },
  { year: "2018", event: "NBA accreditation for select programs" },
  { year: "2021", event: "NAAC B++ accreditation achieved" },
  { year: "2023", event: "UGC Autonomous status granted" },
  { year: "2024", event: "Launch of AI & ML specialized programs" },
]

const missions = [
  {
    icon: BookOpen,
    text: "To impart quality technical education with emphasis on practical learning and research.",
  },
  {
    icon: Target,
    text: "To develop industry-ready professionals with strong ethical values and leadership skills.",
  },
  {
    icon: Users,
    text: "To foster innovation and entrepreneurship through collaborative learning environments.",
  },
  {
    icon: Building,
    text: "To contribute to national development through socially responsible engineering solutions.",
  },
]

const administration = [
  { title: "Governing Body", description: "Policy-making and strategic direction" },
  { title: "Academic Council", description: "Curriculum design and academic standards" },
  { title: "Finance Committee", description: "Budget management and financial planning" },
  { title: "Examination Cell", description: "Assessment and evaluation systems" },
  { title: "IQAC", description: "Quality assurance and continuous improvement" },
  { title: "R&D Cell", description: "Research initiatives and innovation" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <HeroBanner
        title="About Eswar College of Engineering"
        subtitle="Nurturing World-Class Engineers Since 2008"
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* History Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Our History
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Established in 2008 by the Shaik Dada Saheb Charitable Trust, Eswar College of Engineering is located at Kesanupalli Village, Narasaraopet – 522 601, Guntur District, Andhra Pradesh. The college was founded with the motive to nurture world-class engineering graduates who contribute to national growth through unique skills.
                </p>
                <p>
                  The administration believes a nation moves forward when Science & Technology flourish. With this philosophy, the college has grown from strength to strength, achieving UGC Autonomous status and NAAC B++ accreditation with a score of 3 out of 4.
                </p>
                <p>
                  Today, with 12 departments and a vibrant campus, we continue our mission of producing globally competent engineers with ethical values through value-based quality education and modern infrastructure.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://eswarcollegeofengg.org/wp-content/uploads/2024/04/about-1.jpg"
                  alt="Eswar College Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <div className="font-serif text-4xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-primary text-primary-foreground p-8 lg:p-12 rounded-2xl">
              <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/80 leading-relaxed text-lg">
                To be a premier institution imparting quality technical education, fostering innovation, and producing globally competent engineers with ethical values who contribute to societal development and national growth.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card p-8 lg:p-12 rounded-2xl border border-border">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-6">Our Mission</h3>
              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <mission.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-muted-foreground">{mission.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Leadership
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Visionary Leaders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated team guiding Eswar College towards excellence in engineering education.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-secondary font-medium text-sm mb-3">{leader.role}</p>
                  <p className="text-muted-foreground text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Recognition
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Accreditation & Recognition
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is recognized by premier accreditation bodies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <AccreditationBadge type="naac" size="lg" />
            <AccreditationBadge type="ugc" size="lg" />
            <AccreditationBadge type="aicte" size="lg" />
            <AccreditationBadge type="nirf" size="lg" />
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-xl font-semibold text-center text-foreground mb-8">
              Our Journey
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-6 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div className="inline-block bg-card p-4 rounded-lg border border-border">
                        <div className="font-serif font-bold text-secondary">{milestone.year}</div>
                        <div className="text-sm text-muted-foreground">{milestone.event}</div>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-secondary border-4 border-background z-10" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administration Section */}
      <section id="administration" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Governance
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Administration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our robust administrative structure ensures smooth functioning and continuous improvement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {administration.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Join Our Legacy of Excellence"
        subtitle="Be part of an institution that shapes future engineers"
        primaryButton={{ label: "Apply Now", href: "/contact" }}
        secondaryButton={{ label: "Contact Us", href: "/contact" }}
      />

      <Footer />
    </main>
  )
}
