import { Shield, Award, Building, FlaskConical, Trees, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Shield,
    title: "UGC Autonomous",
    description: "Freedom to design cutting-edge curriculum aligned with industry needs",
  },
  {
    icon: Award,
    title: "NAAC B++",
    description: "Quality assurance with a remarkable score of 3 out of 4",
  },
  {
    icon: Building,
    title: "Industry-Ready",
    description: "Strong partnerships with KIA, TCS, Wipro, Infosys & more",
  },
  {
    icon: FlaskConical,
    title: "Modern Labs",
    description: "State-of-the-art laboratories & digital classrooms",
  },
  {
    icon: Trees,
    title: "Green Campus",
    description: "Lush green 30+ acre campus with world-class infrastructure",
  },
  {
    icon: Users,
    title: "Holistic Growth",
    description: "NSS, Sports, Cultural Events, Hackathons & more",
  },
]

export function WhyEswarSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Our Strengths
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Why Choose Eswar?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Discover what makes Eswar College of Engineering the perfect choice for your engineering journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group p-6 lg:p-8 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
              )}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
