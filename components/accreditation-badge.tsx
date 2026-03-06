import { Award, Shield, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type BadgeType = "naac" | "ugc" | "aicte" | "nirf"

interface AccreditationBadgeProps {
  type: BadgeType
  className?: string
  size?: "sm" | "md" | "lg"
}

const badgeConfig = {
  naac: {
    icon: Award,
    title: "NAAC B++",
    subtitle: "Accredited",
    score: "Score: 3/4",
    color: "bg-accent text-accent-foreground",
  },
  ugc: {
    icon: Shield,
    title: "UGC",
    subtitle: "Autonomous",
    score: null,
    color: "bg-secondary text-secondary-foreground",
  },
  aicte: {
    icon: CheckCircle,
    title: "AICTE",
    subtitle: "Approved",
    score: null,
    color: "bg-primary text-primary-foreground",
  },
  nirf: {
    icon: Award,
    title: "NIRF",
    subtitle: "Participating",
    score: null,
    color: "bg-muted text-muted-foreground",
  },
}

const sizeClasses = {
  sm: "p-3 text-xs",
  md: "p-4 text-sm",
  lg: "p-6 text-base",
}

const iconSizes = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
}

export function AccreditationBadge({
  type,
  className,
  size = "md",
}: AccreditationBadgeProps) {
  const config = badgeConfig[type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        "rounded-xl flex items-center gap-3",
        config.color,
        sizeClasses[size],
        className
      )}
    >
      <Icon className={iconSizes[size]} />
      <div>
        <div className="font-bold">{config.title}</div>
        <div className="opacity-80">{config.subtitle}</div>
        {config.score && (
          <div className="text-xs opacity-70 mt-0.5">{config.score}</div>
        )}
      </div>
    </div>
  )
}
