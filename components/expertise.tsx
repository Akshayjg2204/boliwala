"use client"

import { useEffect, useRef, useState } from "react"
import { Search, CreditCard, Briefcase, Users } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

const expertiseAreas = [
  {
    title: "Free Browse",
    description: "Access all property listings, filter by location, and see full addresses immediately without creating an account.",
    icon: Search,
  },
  {
    title: "Annual Subscription",
    description: "Unlock all hidden fields, view inspection details, and contact bank officers directly for ₹999/year.",
    icon: CreditCard,
  },
  {
    title: "End-to-End Service",
    description: "Let our experts handle due diligence, bidding, and possession for a flat fee of ₹9,999 + 1% success fee.",
    icon: Briefcase,
  },
  {
    title: "Channel Partner Program",
    description: "Brokers and agents can earn substantial commissions on all revenue streams by referring buyers to our platform.",
    icon: Users,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          } else if (!entry.isIntersecting) {
            setVisibleItems((prev) => prev.filter((i) => i !== index))
          }
        })
      },
      { threshold: [0, 0.15, 0.2] },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Our Services</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Solutions</HighlightedText> for every
            <br />
            type of buyer
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you just want to browse freely or need an expert to guide you through the entire auction, we have you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className="h-full"
              >
                <div
                  className={`relative h-full pl-8 border-l border-border transition-all duration-700 ${
                    visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`transition-all duration-1000 ${
                      visibleItems.includes(index) ? "animate-draw-stroke" : ""
                    }`}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
