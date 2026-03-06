import { TestimonialCarousel } from "@/components/testimonial-carousel"

const testimonials = [
  {
    quote:
      "Eswar College provided me with not just technical knowledge but also the soft skills needed to succeed in the corporate world. The placement cell was incredibly supportive throughout my journey.",
    name: "Priya Sharma",
    role: "Software Engineer at TCS, CSE 2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "The faculty at Eswar are exceptional. They go beyond textbooks to prepare us for real-world challenges. The hands-on learning approach and industry exposure made all the difference.",
    name: "Rahul Reddy",
    role: "Data Analyst at Wipro, ECE 2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote:
      "Being part of the innovation cell and participating in hackathons helped me develop an entrepreneurial mindset. Eswar truly nurtures creativity and innovation.",
    name: "Anjali Patel",
    role: "Product Manager at a Startup, CSE-AI 2023",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Student Stories
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Voices of Eswar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our alumni about their transformative journey at Eswar College of Engineering.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  )
}
