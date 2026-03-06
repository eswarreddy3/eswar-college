import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTABannerProps {
  title: string
  subtitle?: string
  primaryButton: {
    label: string
    href: string
  }
  secondaryButton?: {
    label: string
    href: string
  }
  className?: string
}

export function CTABanner({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "relative py-16 md:py-24 overflow-hidden",
        className
      )}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-pretty">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8"
          >
            <Link href={primaryButton.href}>{primaryButton.label}</Link>
          </Button>
          {secondaryButton && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
            >
              <Link href={secondaryButton.href}>{secondaryButton.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
