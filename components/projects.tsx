"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, MapPin, Building2, Heart, FileDown } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "3 BHK Apartment in Andheri West",
    category: "Residential",
    location: "Mumbai, Maharashtra",
    bank: "State Bank of India",
    reservePrice: "₹1.85 Cr",
    emd: "₹18.5 Lakhs",
    auctionDate: "24 Aug 2026",
    possession: "Physical Possession",
    image: "/images/hously-1.png", 
  },
  {
    id: 2,
    title: "Commercial Office Space",
    category: "Commercial",
    location: "Connaught Place, Delhi",
    bank: "HDFC Bank",
    reservePrice: "₹4.20 Cr",
    emd: "₹42 Lakhs",
    auctionDate: "30 Aug 2026",
    possession: "Symbolic Possession",
    image: "/images/hously-2.png", 
  },
  {
    id: 3,
    title: "Independent House",
    category: "Residential",
    location: "Koramangala, Bangalore",
    bank: "Punjab National Bank",
    reservePrice: "₹3.15 Cr",
    emd: "₹31.5 Lakhs",
    auctionDate: "05 Sep 2026",
    possession: "Physical Possession",
    image: "/images/hously-3.png", 
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            } else if (!entry.isIntersecting) {
              setRevealedImages((prev) => {
                const next = new Set(prev)
                next.delete(projects[index].id)
                return next
              })
            }
          }
        })
      },
      { threshold: [0, 0.15, 0.2] },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Live Listings</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Featured Auctions</h2>
          </div>
          <a
            href="#search"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-orange-400 transition-colors group pb-1 border-b border-foreground hover:border-orange-400"
          >
            View all properties
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer border border-border bg-background transition-shadow hover:shadow-lg flex flex-col md:flex-row overflow-hidden"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Left Section: Image Area */}
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                
                {/* Overlay Tags */}
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground text-xs font-semibold px-3 py-1 shadow-sm uppercase tracking-wider z-10">
                  {project.category}
                </span>

                <div
                  className="absolute inset-0 bg-primary origin-top z-20 pointer-events-none"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)", 
                  }}
                />
              </div>

              {/* Right Section: Content Area */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                {/* Top Row: Bank & Save Button */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                    <Building2 className="w-4 h-4 text-foreground/70" />
                    <span>{project.bank}</span>
                  </div>
                  <button className="text-muted-foreground hover:text-orange-500 transition-colors" aria-label="Save Property">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Middle Area: Title, Location, Data Grid */}
                <div className="mb-6">
                  <h3 className="text-2xl font-medium mb-2 group-hover:text-orange-400 transition-colors line-clamp-1">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  
                  {/* 2x2 Data Grid */}
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Reserve Price</p>
                      <p className="text-xl font-bold text-foreground">{project.reservePrice}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">EMD</p>
                      <p className="text-xl font-bold text-foreground/80">{project.emd}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Auction Date</p>
                      <p className="text-base text-foreground font-medium">{project.auctionDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Possession Type</p>
                      <p className="text-base text-foreground font-medium">{project.possession}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Action Buttons */}
                <div className="flex gap-4 mt-auto pt-6 border-t border-border">
                  <button className="flex-1 border border-border text-foreground py-3 px-4 text-sm font-medium hover:bg-secondary transition-colors flex items-center justify-center gap-2">
                    <FileDown className="w-4 h-4" /> Download Notice
                  </button>
                  <button className="flex-1 bg-foreground text-background py-3 px-4 text-sm font-medium hover:bg-foreground/90 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
