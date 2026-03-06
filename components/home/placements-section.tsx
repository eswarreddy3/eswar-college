"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatsCounter } from "@/components/stats-counter"

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
]

export function PlacementsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Career Success
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Placement Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated Training & Placement Cell ensures students are industry-ready and connected with top recruiters.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <StatsCounter stats={stats} />
        </div>

        {/* Recruiters */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <h3 className="font-serif text-xl font-semibold text-center text-foreground mb-8">
            Our Proud Recruiters
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
            {recruiters.map((recruiter, index) => (
              <div
                key={index}
                className="relative h-12 w-32 bg-background rounded-lg border border-border p-2 flex items-center justify-center hover:border-secondary hover:shadow-md transition-all"
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
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/placements">
                View Placement Records
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
