import Link from "next/link"
import { LucideIcon, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface DepartmentCardProps {
  name: string
  icon: LucideIcon
  href?: string
  description?: string
  className?: string
}

export function DepartmentCard({
  name,
  icon: Icon,
  href = "#",
  description,
  className,
}: DepartmentCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block p-6 bg-card rounded-xl border border-border hover:border-secondary/50 shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-serif font-semibold text-card-foreground mb-2 group-hover:text-secondary transition-colors">
        {name}
      </h3>
      {description && (
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
      )}
      <div className="flex items-center gap-1 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Explore</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  )
}
