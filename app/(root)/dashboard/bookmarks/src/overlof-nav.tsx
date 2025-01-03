"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface OverflowNavProps {
  items: {
    label: string
    href: string
  }[]
}

export default function OverflowNav({ items }: OverflowNavProps) {
  const [showLeftArrow, setShowLeftArrow] = React.useState(false)
  const [showRightArrow, setShowRightArrow] = React.useState(false)
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  const checkScroll = React.useCallback(() => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth)
  }, [])

  React.useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [checkScroll])

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const scrollAmount = 200
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative  flex items-center text-white">

      <div
        ref={scrollContainerRef}
        className="flex  overflow-y-auto w-full"
        onScroll={checkScroll}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="whitespace-nowrap px-4 py-3 text-sm font-medium hover:bg-white/10"
          >
            {item.label}
          </a>
        ))}
      </div>
 
    </div>
  )
}

