"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

export function HighlightedText({ children }: { children: React.ReactNode }) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          setIsVisible(true)
        } else if (!entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      { threshold: [0, 0.4, 0.5] },
    )

    if (spanRef.current) {
      observer.observe(spanRef.current)
    }

    return () => observer.disconnect()
  }, [])
  // </CHANGE>

  return (
    <span ref={spanRef} className="relative inline-block">
      {children}
      <svg
        className="absolute -bottom-1 left-0 w-full h-4 overflow-visible"
        viewBox="0 0 200 12"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8 Q50 2, 100 6 T200 8"
          stroke="rgb(251 146 60)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="transition-all duration-800"
          style={{
            strokeDasharray: 200,
            strokeDashoffset: isVisible ? 0 : 200,
            transition: "stroke-dashoffset 0.8s ease-out",
          }}
        />
      </svg>
      {/* </CHANGE> */}
    </span>
  )
}
