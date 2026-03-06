"use client"

import { cn } from "@/lib/utils"
import { Bell } from "lucide-react"

interface MarqueeTickerProps {
  items: string[]
  className?: string
}

export function MarqueeTicker({ items, className }: MarqueeTickerProps) {
  const duplicatedItems = [...items, ...items]

  return (
    <div className={cn("bg-accent overflow-hidden py-3", className)}>
      <div className="container mx-auto px-4 flex items-center gap-4">
        <div className="flex items-center gap-2 text-accent-foreground font-semibold text-sm whitespace-nowrap shrink-0">
          <Bell className="w-4 h-4" />
          <span>Latest News</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedItems.map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center text-sm text-accent-foreground mx-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground/60 mr-4" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
