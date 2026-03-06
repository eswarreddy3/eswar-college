"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface Stat {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

interface StatsCounterProps {
  stats: Stat[]
  className?: string
}

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration, start])

  return count
}

function StatItem({ stat, isVisible }: { stat: Stat; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000, isVisible)

  return (
    <div className="text-center">
      <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
    </div>
  )
}

export function StatsCounter({ stats, className }: StatsCounterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",
        className
      )}
    >
      {stats.map((stat, index) => (
        <StatItem key={index} stat={stat} isVisible={isVisible} />
      ))}
    </div>
  )
}
