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
} from "lucide-react"
import { DepartmentCard } from "@/components/department-card"

const departments = [
  { name: "Computer Science & Engineering", icon: Cpu, href: "/academics#cse" },
  { name: "CSE - AI & Machine Learning", icon: Brain, href: "/academics#cse-aiml" },
  { name: "CSE - Artificial Intelligence", icon: Bot, href: "/academics#cse-ai" },
  { name: "Computer Science & Design", icon: Palette, href: "/academics#csd" },
  { name: "Electronics & Communication", icon: CircuitBoard, href: "/academics#ece" },
  { name: "Electrical & Electronics", icon: Zap, href: "/academics#eee" },
  { name: "Mechanical Engineering", icon: Cog, href: "/academics#mechanical" },
  { name: "Civil Engineering", icon: Building2, href: "/academics#civil" },
  { name: "Agriculture Engineering", icon: Wheat, href: "/academics#agriculture" },
  { name: "Automobile Engineering", icon: Car, href: "/academics#automobile" },
  { name: "Science & Humanities", icon: BookOpen, href: "/academics#sh" },
  { name: "MBA Department", icon: Briefcase, href: "/academics#mba" },
]

export function DepartmentsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Our Departments
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            12 Departments of Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of engineering and management departments, each equipped with state-of-the-art facilities.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <DepartmentCard
              key={dept.name}
              name={dept.name}
              icon={dept.icon}
              href={dept.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
