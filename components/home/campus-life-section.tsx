import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/about-1.jpg",
    label: "Campus",
    size: "large",
  },
  {
    src: "https://eswarcollegeofengg.org/wp-content/uploads/2025/09/PROJECT-EXPO.jpeg",
    label: "Project Expo",
    size: "small",
  },
  {
    src: "https://eswarcollegeofengg.org/wp-content/uploads/2025/09/HACKATHON.jpeg",
    label: "Hackathon",
    size: "small",
  },
  {
    src: "https://eswarcollegeofengg.org/wp-content/uploads/2025/10/MEGA-JOB-MELA-e1761366529370.jpeg",
    label: "Job Mela",
    size: "medium",
  },
  {
    src: "https://eswarcollegeofengg.org/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-11.36.32-AM-e1756534956876.jpeg",
    label: "MOU Signing",
    size: "medium",
  },
  {
    src: "https://eswarcollegeofengg.org/wp-content/uploads/2024/04/departments-521x300.jpg",
    label: "Departments",
    size: "small",
  },
]

export function CampusLifeSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Campus Experience
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Life at Eswar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience a vibrant campus life with world-class facilities, sports, cultural events, and more.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <Link
              key={index}
              href="/gallery"
              className={cn(
                "group relative rounded-xl overflow-hidden",
                image.size === "large" && "col-span-2 row-span-2",
                image.size === "medium" && "col-span-1 row-span-2 md:row-span-1",
                image.size === "small" && "col-span-1"
              )}
            >
              <div
                className={cn(
                  "relative w-full",
                  image.size === "large" && "aspect-square md:aspect-[4/3]",
                  image.size === "medium" && "aspect-[3/4] md:aspect-[4/3]",
                  image.size === "small" && "aspect-square"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary-foreground font-semibold">
                    {image.label}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
