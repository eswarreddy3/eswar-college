import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { StatsCounter } from "@/components/stats-counter"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import {
  Users,
  Building2,
  TrendingUp,
  GraduationCap,
  CheckCircle,
  FileText,
  ArrowRight,
  Briefcase,
} from "lucide-react"

export const metadata = {
  title: "Training & Placements | Eswar College of Engineering",
  description: "Explore placement opportunities, training programs, and career guidance at Eswar College of Engineering. 500+ placements with top companies.",
}

const stats = [
  { value: 500, suffix: "+", label: "Students Placed" },
  { value: 100, suffix: "+", label: "Companies Visited" },
  { value: 8, prefix: "₹", suffix: " LPA", label: "Highest Package" },
  { value: 95, suffix: "%", label: "Placement Rate" },
]

const recruiters = [
  { name: "Wipro", logo: "https://eswarcollegeofengg.org/wp-content/uploads/2024/11/6146-wipro-technology.webp" },
  { name: "Infosys", logo: "https://eswarcollegeofengg.org/wp-content/uploads/2024/11/Infosys_logo.svg.png" },
  { name: "Capgemini", logo: "https://eswarcollegeofengg.org/wp-content/uploads/2024/11/Capgemini_201x_logo.svg" },
  { name: "Genpact", logo: "https://eswarcollegeofengg.org/wp-content/uploads/2024/11/1280px-Genpact_logo.svg.png" },
  { name: "Cognizant", logo: "https://eswarcollegeofengg.org/wp-content/uploads/2024/11/Cognizant_logo_2022.svg.png" },
  { name: "HCL Technologies", logo: "https://eswarcollegeofengg.org/wp-content/uploads/2024/11/HCL_Technologies_Logo.png" },
  { name: "Atos", logo: "https://eswarcollegeofengg.org/wp-content/uploads/2024/11/1547717527_Atos_Brand_Logo-Blue-updated.png" },
  { name: "Infosys BPM", logo: "https://eswarcollegeofengg.org/wp-content/uploads/2024/11/1f139d7c-43ba-45d6-a44b-869d3fbe7b9c.jpeg" },
  { name: "57d8d577", logo: "https://eswarcollegeofengg.org/wp-content/uploads/2024/11/57d8d577-2cf1-4127-ac60-629422eff15e.jpeg" },
]

const placementProcess = [
  {
    step: 1,
    title: "Pre-Placement Training",
    description: "Aptitude training, soft skills development, and technical preparation",
  },
  {
    step: 2,
    title: "Aptitude & Technical Tests",
    description: "Online assessments to evaluate analytical and technical abilities",
  },
  {
    step: 3,
    title: "Group Discussion",
    description: "Evaluation of communication skills and teamwork capabilities",
  },
  {
    step: 4,
    title: "Personal Interview",
    description: "Technical and HR interviews with company representatives",
  },
  {
    step: 5,
    title: "Offer Letter",
    description: "Successful candidates receive offer letters from recruiters",
  },
]

const recentPlacements = [
  { name: "Ramesh Kumar", branch: "CSE", company: "TCS", package: "4.5 LPA" },
  { name: "Priya Reddy", branch: "ECE", company: "Wipro", package: "3.8 LPA" },
  { name: "Suresh Babu", branch: "EEE", company: "L&T", package: "5.2 LPA" },
  { name: "Anjali Sharma", branch: "CSE-AI", company: "Infosys", package: "4.8 LPA" },
  { name: "Venkat Rao", branch: "Mechanical", company: "KIA", package: "8.0 LPA" },
  { name: "Lakshmi Devi", branch: "CSE", company: "Cognizant", package: "4.2 LPA" },
]

export default function PlacementsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroBanner
        title="Training & Placements"
        subtitle="Building careers through industry partnerships and skill development"
        breadcrumbs={[{ label: "Placements", href: "/placements" }]}
        backgroundImage="https://eswarcollegeofengg.org/wp-content/uploads/2025/10/MEGA-JOB-MELA-e1761366529370.jpeg"
      />

      {/* Placement Stats */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Placement Excellence
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Placement Track Record
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated Training & Placement Cell ensures students are industry-ready and connected with top recruiters.
            </p>
          </div>

          <StatsCounter stats={stats} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Recruiters */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Partners
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Proud Recruiters
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading companies trust Eswar College for quality engineering talent.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 max-w-4xl mx-auto">
            {recruiters.map((recruiter, index) => (
              <div
                key={index}
                className="relative h-14 w-36 bg-card rounded-xl border border-border p-2 flex items-center justify-center hover:border-secondary hover:shadow-md transition-all"
              >
                <Image
                  src={recruiter.logo}
                  alt={recruiter.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Process
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Placement Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our structured placement process ensures comprehensive preparation and success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-8">
                {placementProcess.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-serif text-2xl font-bold flex-shrink-0 z-10">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentoring Cell */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                Career Guidance
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Mentoring & Career Cell
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Our dedicated Mentoring Cell provides comprehensive career guidance to students throughout their academic journey. From resume building to interview preparation, we ensure every student is well-equipped for their career.
              </p>
              <ul className="space-y-4">
                {[
                  "One-on-one career counseling sessions",
                  "Resume building and review workshops",
                  "Mock interviews with industry experts",
                  "Soft skills and communication training",
                  "Industry interaction and guest lectures",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-foreground/10 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold mb-6">Training Programs</h3>
              <div className="space-y-4">
                {[
                  { icon: Users, label: "Personality Development" },
                  { icon: Briefcase, label: "Corporate Etiquette" },
                  { icon: FileText, label: "Technical Aptitude" },
                  { icon: TrendingUp, label: "Group Discussions" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-primary-foreground/10 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Placements */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Success Stories
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Placements
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-card rounded-xl border border-border overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Student Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Branch</th>
                  <th className="px-6 py-4 text-left font-semibold">Company</th>
                  <th className="px-6 py-4 text-left font-semibold">Package</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentPlacements.map((placement, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{placement.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{placement.branch}</td>
                    <td className="px-6 py-4 text-muted-foreground">{placement.company}</td>
                    <td className="px-6 py-4 text-secondary font-semibold">{placement.package}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/gallery">
                View Placement Gallery
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Launch Your Career?"
        subtitle="Join Eswar College and get access to top recruiters and career opportunities"
        primaryButton={{ label: "Apply Now", href: "/contact" }}
        secondaryButton={{ label: "Contact Placement Cell", href: "/contact" }}
      />

      <Footer />
    </main>
  )
}
