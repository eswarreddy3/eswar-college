import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Stack */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://eswarcollegeofengg.org/wp-content/uploads/2024/04/about-1.jpg"
                alt="Eswar College Campus"
                fill
                className="object-cover"
              />
            </div>
            {/* Offset Image */}
            <div className="absolute -bottom-8 -right-8 w-48 md:w-64 aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-4 border-background hidden md:block">
              <Image
                src="https://eswarcollegeofengg.org/wp-content/uploads/2024/04/departments-521x300.jpg"
                alt="Students at campus"
                fill
                className="object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg">
              <div className="font-serif font-bold text-2xl">Est. 2008</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              About Us
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              About Eswar College of Engineering
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Eswar College of Engineering was established in 2008 by the Shaik Dada Saheb Charitable Trust with a mission to nurture world-class engineering graduates who contribute to national growth through unique skills.
              </p>
              <p>
                The college believes that a nation advances when Science & Technology flourish and social evils are eradicated through wisdom. Located at Kesanupalli Village, Narasaraopet, Guntur District, the college offers state-of-the-art infrastructure across a lush green campus.
              </p>
              <p>
                With UGC Autonomous status and NAAC B++ accreditation, we are committed to providing quality technical education and producing globally competent engineers with ethical values.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/about#leadership">Meet Our Leadership</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
