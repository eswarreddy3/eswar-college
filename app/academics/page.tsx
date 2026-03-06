"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import {
  Cpu,
  CircuitBoard,
  Zap,
  Cog,
  Building2,
  Brain,
  Bot,
  Wheat,
  Car,
  BookOpen,
  Briefcase,
  Palette,
  Download,
  Users,
  Clock,
  GraduationCap,
  Lightbulb,
  FlaskConical,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "btech", label: "B.Tech Programs" },
  { id: "mba", label: "MBA Program" },
  { id: "research", label: "Research & Innovation" },
]

const btechPrograms = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    icon: Cpu,
    intake: 180,
    duration: "4 Years",
    description: "Core computer science curriculum covering algorithms, data structures, software engineering, and more.",
  },
  {
    id: "cse-aiml",
    name: "CSE - AI & Machine Learning",
    icon: Brain,
    intake: 60,
    duration: "4 Years",
    description: "Specialized program in Artificial Intelligence and Machine Learning with hands-on projects.",
  },
  {
    id: "cse-ai",
    name: "CSE - Artificial Intelligence",
    icon: Bot,
    intake: 60,
    duration: "4 Years",
    description: "Focused curriculum on AI technologies, neural networks, and intelligent systems.",
  },
  {
    id: "csd",
    name: "Computer Science & Design",
    icon: Palette,
    intake: 60,
    duration: "4 Years",
    description: "Combining computer science with design thinking and user experience principles.",
  },
  {
    id: "ece",
    name: "Electronics & Communication Engineering",
    icon: CircuitBoard,
    intake: 120,
    duration: "4 Years",
    description: "Study of electronic systems, communication technologies, and signal processing.",
  },
  {
    id: "eee",
    name: "Electrical & Electronics Engineering",
    icon: Zap,
    intake: 60,
    duration: "4 Years",
    description: "Electrical systems, power generation, and electronic circuit design.",
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    icon: Cog,
    intake: 120,
    duration: "4 Years",
    description: "Design, analysis, and manufacturing of mechanical systems and machines.",
  },
  {
    id: "civil",
    name: "Civil Engineering",
    icon: Building2,
    intake: 60,
    duration: "4 Years",
    description: "Infrastructure development, structural engineering, and construction management.",
  },
  {
    id: "agriculture",
    name: "Agriculture Engineering",
    icon: Wheat,
    intake: 60,
    duration: "4 Years",
    description: "Agricultural technology, farm machinery, and sustainable farming practices.",
  },
  {
    id: "automobile",
    name: "Automobile Engineering",
    icon: Car,
    intake: 60,
    duration: "4 Years",
    description: "Vehicle design, automotive systems, and emerging mobility technologies.",
  },
]

const researchInitiatives = [
  {
    title: "R&D Cell",
    icon: FlaskConical,
    description: "Promoting research activities across all departments with funded projects and publications.",
  },
  {
    title: "Entrepreneurship Cell",
    icon: Lightbulb,
    description: "Fostering startup culture and providing mentorship for student entrepreneurs.",
  },
  {
    title: "Innovation Hub",
    icon: Brain,
    description: "State-of-the-art facility for prototyping and developing innovative solutions.",
  },
  {
    title: "Industry Collaboration",
    icon: Briefcase,
    description: "Partnerships with leading companies for research projects and internships.",
  },
]

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState("btech")

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroBanner
        title="Academic Programs & Departments"
        subtitle="Comprehensive engineering education designed for the future"
        breadcrumbs={[{ label: "Academics", href: "/academics" }]}
        backgroundImage="https://eswarcollegeofengg.org/wp-content/uploads/2024/04/departments-521x300.jpg"
      />

      {/* Program Tabs */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-3 rounded-lg font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* B.Tech Programs */}
          {activeTab === "btech" && (
            <div id="btech">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  B.Tech Programs (4 Years)
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choose from 10 cutting-edge engineering disciplines designed to prepare you for industry success.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {btechPrograms.map((program) => (
                  <div
                    key={program.id}
                    id={program.id}
                    className="group p-6 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                        <program.icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                          {program.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {program.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>Intake: {program.intake}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{program.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MBA Program */}
          {activeTab === "mba" && (
            <div id="mba">
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 lg:p-12 text-primary-foreground">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h2 className="font-serif text-3xl font-bold">Master of Business Administration</h2>
                      <p className="text-primary-foreground/80">2 Year Full-Time Program</p>
                    </div>
                  </div>

                  <p className="text-primary-foreground/80 leading-relaxed mb-8">
                    Our MBA program is designed to develop future business leaders with a strong foundation in management principles, strategic thinking, and practical skills. The curriculum combines theoretical knowledge with real-world case studies and industry interactions.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-primary-foreground/10 rounded-lg p-4">
                      <div className="font-semibold mb-2">Specializations</div>
                      <ul className="text-sm text-primary-foreground/80 space-y-1">
                        <li>Finance</li>
                        <li>Marketing</li>
                        <li>Human Resource Management</li>
                        <li>Operations Management</li>
                      </ul>
                    </div>
                    <div className="bg-primary-foreground/10 rounded-lg p-4">
                      <div className="font-semibold mb-2">Program Highlights</div>
                      <ul className="text-sm text-primary-foreground/80 space-y-1">
                        <li>Industry Expert Lectures</li>
                        <li>Live Projects & Internships</li>
                        <li>Case Study Methodology</li>
                        <li>Placement Assistance</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Intake: 120</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Duration: 2 Years</span>
                    </div>
                    <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
                      <GraduationCap className="w-4 h-4" />
                      <span className="text-sm">AICTE Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Research & Innovation */}
          {activeTab === "research" && (
            <div id="research">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Research & Innovation
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Fostering a culture of innovation and research excellence across all disciplines.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {researchInitiatives.map((initiative, index) => (
                  <div
                    key={index}
                    className="p-6 bg-card rounded-xl border border-border hover:border-secondary/50 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                      <initiative.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground">{initiative.description}</p>
                  </div>
                ))}
              </div>

              {/* Recent Activities */}
              <div className="bg-muted rounded-2xl p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6 text-center">
                  Recent Research Activities
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="font-serif text-4xl font-bold text-secondary mb-2">25+</div>
                    <div className="text-muted-foreground">Research Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-4xl font-bold text-secondary mb-2">15</div>
                    <div className="text-muted-foreground">Funded Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-4xl font-bold text-secondary mb-2">8</div>
                    <div className="text-muted-foreground">Patents Filed</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Academic Resources */}
      <section id="calendar" className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Resources
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Academic Resources
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download important academic documents and resources.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Academic Calendar", icon: BookOpen },
              { label: "Syllabus Books", icon: BookOpen },
              { label: "Examination Schedule", icon: BookOpen },
              { label: "Fee Structure", icon: BookOpen },
            ].map((resource, index) => (
              <Link
                key={index}
                href="#"
                className="flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Download className="w-6 h-6" />
                </div>
                <span className="font-medium text-foreground text-center">{resource.label}</span>
                <span className="text-sm text-secondary mt-2 flex items-center gap-1">
                  Download <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Start Your Engineering Journey"
        subtitle="Apply now and become part of our academic excellence"
        primaryButton={{ label: "Apply Now", href: "/contact" }}
        secondaryButton={{ label: "Contact Admissions", href: "/contact" }}
      />

      <Footer />
    </main>
  )
}
