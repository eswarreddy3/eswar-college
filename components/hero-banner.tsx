import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeroBannerProps {
  title: string
  subtitle?: string
  breadcrumbs: { label: string; href: string }[]
  backgroundImage?: string
  className?: string
}

export function HeroBanner({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage = "https://eswarcollegeofengg.org/wp-content/uploads/2019/08/Web-copy.jpg",
  className,
}: HeroBannerProps) {
  return (
    <section
      className={cn(
        "relative min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-accent transition-colors">
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.href} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-primary-foreground/60" />
              {index === breadcrumbs.length - 1 ? (
                <span className="text-accent font-medium">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-accent transition-colors">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
