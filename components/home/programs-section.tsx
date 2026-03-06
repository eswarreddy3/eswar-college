import Image from "next/image"
import Link from "next/link"
import { GraduationCap, Briefcase, Lightbulb, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const programs = [
  {
    icon: GraduationCap,
    title: "UG Programs (B.Tech)",
    description:
      "10 cutting-edge branches including CSE, CSE-AI, CSE-AIML, CSD, ECE, EEE, Mechanical, Civil, Agriculture, and Automobile Engineering.",
    href: "/academics#btech",
    color: "from-secondary/90 to-secondary/70",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/ug-521x300.jpg",
  },
  {
    icon: Briefcase,
    title: "PG Programs (MBA)",
    description:
      "Master of Business Administration program designed to develop future business leaders with a strong foundation in management principles.",
    href: "/academics#mba",
    color: "from-accent/90 to-accent/70",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/pg-521x300.jpg",
  },
  {
    icon: Lightbulb,
    title: "Departments",
    description:
      "12 specialised departments with state-of-the-art labs, digital classrooms, and industry-aligned curriculum for holistic learning.",
    href: "/academics",
    color: "from-primary/90 to-primary/70",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/departments-521x300.jpg",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Academic Excellence
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Academic Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of undergraduate, postgraduate, and research programs designed to shape future leaders.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <Link
              key={index}
              href={program.href}
              className={cn(
                "group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              )}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={cn("absolute inset-0 bg-gradient-to-br", program.color)} />
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full" />

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
