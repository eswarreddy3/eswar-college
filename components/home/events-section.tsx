import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EventCard } from "@/components/event-card"

const events = [
  {
    title: "Mega Job Mela 2025",
    date: "29 Oct 2025",
    description: "Annual campus recruitment drive with 50+ companies participating",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/10/MEGA-JOB-MELA-e1761366529370.jpeg",
    href: "/gallery#job-mela",
  },
  {
    title: "National Innovation Day - Idea Hackathon",
    date: "13-15 Oct 2025",
    description: "3-day hackathon celebrating innovation and entrepreneurship",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/09/HACKATHON.jpeg",
    href: "/gallery#hackathon",
  },
  {
    title: "AWS Cloud Computing Workshop",
    date: "14-16 Oct 2025",
    description: "Hands-on workshop on AWS services and cloud architecture",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-09-at-8.03.17-PM.jpeg",
    href: "/gallery#aws-workshop",
  },
  {
    title: "Engineers' Day - Project Expo",
    date: "15 Sep 2025",
    description: "Annual project exhibition showcasing student innovations",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/09/PROJECT-EXPO.jpeg",
    href: "/gallery#project-expo",
  },
  {
    title: "MOU with VIGNAN TBI",
    date: "29 Aug 2025",
    description: "Strategic partnership for innovation ecosystem development",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-11.36.32-AM-e1756534956876.jpeg",
    href: "/gallery#mou-vignan",
  },
  {
    title: "Python Data Science Workshop",
    date: "14-18 Oct 2025",
    description: "5-day workshop on Matplotlib, NumPy, and Pandas",
    image: "https://eswarcollegeofengg.org/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-10-at-12.11.14-PM.jpeg",
    href: "/gallery#python-workshop",
  },
]

export function EventsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              News & Events
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              What&apos;s Happening at Eswar
            </h2>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link href="/gallery">
              View All Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  )
}
