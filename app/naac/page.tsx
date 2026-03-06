import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { AccreditationBadge } from "@/components/accreditation-badge"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import {
  Award,
  Download,
  FileText,
  CheckCircle,
  Target,
  Users,
  BookOpen,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

export const metadata = {
  title: "NAAC Accreditation | Eswar College of Engineering",
  description: "NAAC B++ accredited with score 3/4. Learn about our quality assurance initiatives, IQAC activities, and accreditation documents.",
}

const documents = [
  { title: "Self Study Report (SSR)", icon: FileText, href: "#" },
  { title: "DVV Clarifications", icon: FileText, href: "#" },
  { title: "Strategic Plan 2020-25", icon: FileText, href: "#" },
  { title: "Best Practices", icon: FileText, href: "#" },
  { title: "AQAR 2023-24", icon: FileText, href: "#" },
  { title: "AQAR 2022-23", icon: FileText, href: "#" },
]

const iqacMembers = [
  { name: "Dr. K. Ramesh", designation: "Principal & Chairman" },
  { name: "Dr. S. Kumar", designation: "IQAC Coordinator" },
  { name: "Prof. M. Rao", designation: "Senior Faculty Member" },
  { name: "Prof. L. Devi", designation: "Faculty Representative" },
  { name: "Sri A. Reddy", designation: "Management Representative" },
  { name: "Sri B. Sharma", designation: "Industry Expert" },
]

const qualityInitiatives = [
  {
    icon: Target,
    title: "Outcome Based Education",
    description: "Implementing OBE framework for all programs with defined POs and COs.",
  },
  {
    icon: Users,
    title: "Faculty Development",
    description: "Regular FDPs, workshops, and conferences for faculty skill enhancement.",
  },
  {
    icon: BookOpen,
    title: "Curriculum Enhancement",
    description: "Periodic curriculum revision with industry inputs and emerging technologies.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Data-driven decision making for quality enhancement in all processes.",
  },
]

const criteria = [
  { number: 1, name: "Curricular Aspects", score: "3.2" },
  { number: 2, name: "Teaching-Learning and Evaluation", score: "3.1" },
  { number: 3, name: "Research, Innovations and Extension", score: "2.8" },
  { number: 4, name: "Infrastructure and Learning Resources", score: "3.3" },
  { number: 5, name: "Student Support and Progression", score: "3.0" },
  { number: 6, name: "Governance, Leadership and Management", score: "3.2" },
  { number: 7, name: "Institutional Values and Best Practices", score: "3.1" },
]

export default function NAACPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroBanner
        title="NAAC Accreditation & Quality Assurance"
        subtitle="Committed to excellence in technical education"
        breadcrumbs={[{ label: "NAAC", href: "/naac" }]}
        backgroundImage="https://eswarcollegeofengg.org/wp-content/uploads/2025/01/naac.jpg"
      />

      {/* Accreditation Status */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Accreditation
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Accreditation Status
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Eswar College of Engineering is proud to be accredited by NAAC with B++ grade, reflecting our commitment to quality education.
            </p>
          </div>

          {/* Main Badge */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-primary-foreground text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-accent flex items-center justify-center mb-6">
                <Award className="w-12 h-12 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-4xl font-bold mb-2">NAAC B++</h3>
              <p className="text-2xl font-semibold text-accent mb-4">Score: 3 out of 4</p>
              <p className="text-primary-foreground/80">
                Accredited by National Assessment and Accreditation Council
              </p>
            </div>
          </div>

          {/* Other Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            <AccreditationBadge type="ugc" size="lg" />
            <AccreditationBadge type="aicte" size="lg" />
            <AccreditationBadge type="nirf" size="lg" />
          </div>
        </div>
      </section>

      {/* Criteria Scores */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Performance
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              NAAC Criteria Scores
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            {criteria.map((item) => (
              <div
                key={item.number}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center font-serif text-xl font-bold flex-shrink-0">
                  {item.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground text-sm">{item.name}</h3>
                </div>
                <div className="text-2xl font-serif font-bold text-accent">{item.score}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IQAC Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* IQAC Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Quality Assurance
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Internal Quality Assurance Cell (IQAC)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The IQAC plays a vital role in maintaining and enhancing quality in all academic and administrative activities. It coordinates quality initiatives, conducts audits, and ensures continuous improvement across the institution.
              </p>
              <ul className="space-y-3">
                {[
                  "Development and application of quality benchmarks",
                  "Quality culture promotion among stakeholders",
                  "Documentation and dissemination of quality parameters",
                  "Organization of faculty development programs",
                  "Collection and analysis of feedback from stakeholders",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* IQAC Members */}
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                IQAC Committee Members
              </h3>
              <div className="space-y-4">
                {iqacMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-card rounded-lg border border-border"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.designation}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Initiatives */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Initiatives
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Quality Initiatives
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Our continuous efforts towards quality enhancement in education and administration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="p-6 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/15 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <initiative.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{initiative.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Documents */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Documents
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key NAAC Documents
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download important NAAC documents and reports.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <Link
                key={index}
                href={doc.href}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Download className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-foreground">{doc.title}</span>
                  <div className="text-sm text-secondary flex items-center gap-1 mt-1">
                    Download <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Experience Quality Education"
        subtitle="Join an institution committed to excellence"
        primaryButton={{ label: "Apply Now", href: "/contact" }}
        secondaryButton={{ label: "Contact Us", href: "/contact" }}
      />

      <Footer />
    </main>
  )
}
