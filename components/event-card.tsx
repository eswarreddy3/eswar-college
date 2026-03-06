import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface EventCardProps {
  title: string
  date: string
  description?: string
  image: string
  href?: string
  className?: string
}

export function EventCard({
  title,
  date,
  description,
  image,
  href = "#",
  className,
}: EventCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif font-semibold text-lg text-card-foreground group-hover:text-secondary transition-colors line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
        <div className="mt-4 flex items-center gap-2 text-secondary font-medium text-sm">
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
