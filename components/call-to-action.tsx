"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

export function CallToAction() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setIsVisible(true)
        } else if (!entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      { threshold: [0, 0.2, 0.3] },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div 
          ref={sectionRef}
          className={`relative overflow-hidden border border-border bg-secondary/30 px-6 py-20 sm:px-12 sm:py-24 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Subtle center highlight/glow to match the image's light gradient effect */}
          <div 
            className="absolute top-1/2 left-1/2 w-3/4 h-3/4 bg-background/50 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
          />

          <div className="relative z-10 flex flex-col items-center">
            <p className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] font-semibold uppercase mb-6">Get Started</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 tracking-tight text-balance">
              Ready to find your next property?
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Create a free account to shortlist properties, set alerts, and unlock full auction details.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a 
                href="/signup" 
                className="w-full sm:w-auto bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 group shadow-sm"
              >
                Create Free Account
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a 
                href="#projects" 
                className="w-full sm:w-auto border border-border bg-transparent text-foreground px-8 py-4 text-sm font-medium hover:bg-secondary transition-colors shadow-sm"
              >
                Browse Properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
