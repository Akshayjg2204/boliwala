"use client"

import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./highlighted-text"

const philosophyItems = [
  {
    title: "Browse & Shortlist",
    description: "Filter 12,400+ verified properties by city, bank, type and budget. Free forever, no signup.",
    tag: "FREE",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
  },
  {
    title: "Due Diligence",
    description: "Our legal team checks title, encumbrance and dues. You get a written clearance report.",
    tag: "MANAGED BY US",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20"
  },
  {
    title: "We Bid For You",
    description: "We register, pay EMD, and bid strategically within your ceiling. You just sit back.",
    tag: "MANAGED BY US",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20"
  },
  {
    title: "Possession Support",
    description: "Sale certificate, registration, mutation and physical possession — all handled post-win.",
    tag: "MANAGED BY US",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20"
  },
  {
    title: "Loan Arranged",
    description: "Post-auction financing via our NBFC & bank partners. Even for occupied properties.",
    tag: "MANAGED BY US",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20"
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          } else if (!entry.isIntersecting) {
            setVisibleItems((prev) => prev.filter((i) => i !== index))
          }
        })
      },
      { threshold: [0, 0.2, 0.3] },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start mb-12 lg:mb-0">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Our Process</p>
            <h2 className="text-5xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-12 text-balance lg:text-7xl">
              You Browse.
              <br />
              We Handle <HighlightedText>Everything.</HighlightedText>
            </h2>

            <div className="relative hidden lg:block mt-8">
              <img
                src="/images/exterior.png"
                alt="Architectural sketch of home office workspace"
                className="opacity-90 relative z-10 w-full max-w-md"
              />
            </div>
          </div>

          {/* Right column - Description and Philosophy items */}
          <div className="space-y-8 lg:pt-40">
            <p className="text-muted-foreground text-xl leading-relaxed max-w-md mb-16 font-light">
              From finding the property to handing you the keys — Boliwala manages every step so you don't navigate the auction maze alone.
            </p>

            <div className="space-y-12">
              {philosophyItems.map((item, index) => (
                <div
                  key={item.title}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  data-index={index}
                >
                  <div
                    className={`transition-all duration-700 ${
                      visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex gap-6 group">
                      <span className="text-muted-foreground/30 text-lg font-bold group-hover:text-orange-300 transition-colors">0{index + 1}</span>
                      <div>
                        <h3 className="text-2xl font-medium mb-3 flex items-center flex-wrap gap-4 group-hover:text-foreground transition-colors">
                          {item.title}
                          {item.tag && (
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-sm border uppercase tracking-wider ${item.tagColor}`}>
                              {item.tag}
                            </span>
                          )}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
