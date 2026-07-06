"use client"

import { useState, useEffect, useRef } from "react"
import { Search, MapPin, ChevronDown } from "lucide-react"

const locations = [
  { state: "Maharashtra", count: 7, cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Thane", "Solapur"] },
  { state: "Delhi NCR", count: 5, cities: ["New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"] },
  { state: "Karnataka", count: 5, cities: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru", "Belagavi"] },
  { state: "Tamil Nadu", count: 5, cities: ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"] },
  { state: "Telangana", count: 4, cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"] },
  { state: "Gujarat", count: 5, cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"] },
  { state: "Rajasthan", count: 5, cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"] },
  { state: "Uttar Pradesh", count: 6, cities: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Prayagraj", "Meerut"] },
  { state: "Punjab", count: 4, cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"] },
  { state: "Madhya Pradesh", count: 5, cities: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"] },
  { state: "West Bengal", count: 5, cities: ["Kolkata", "Howrah", "Siliguri", "Durgapur", "Asansol"] },
  { state: "Kerala", count: 5, cities: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kannur"] },
  { state: "Haryana", count: 5, cities: ["Gurugram", "Faridabad", "Ambala", "Karnal", "Panipat"] },
  { state: "Andhra Pradesh", count: 5, cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Nellore"] },
  { state: "Bihar", count: 4, cities: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"] },
  { state: "Jharkhand", count: 4, cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"] },
]

export function AuctionsByCity() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const filteredLocations = locations.filter((loc) => {
    const matchState = loc.state.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCity = loc.cities.some((city) => city.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchState || matchCity
  })

  // Determine how many to show based on expanded state and search
  const visibleLocations = searchTerm !== "" ? filteredLocations : (isExpanded ? filteredLocations : filteredLocations.slice(0, 8))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          } else if (!entry.isIntersecting) {
            setVisibleItems((prev) => prev.filter((i) => i !== index))
          }
        })
      },
      { threshold: [0, 0.1, 0.2] },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleLocations.length]) // Re-bind observer if number of elements changes

  return (
    <section className="py-32 md:py-29 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Locations</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-balance">
              Auctions by City
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl font-light">
              Find verified bank auction properties in your city. We cover 140+ cities across all 28 states and 8 union territories of India.
            </p>
          </div>
          
          <div className="relative w-full md:w-80 shrink-0 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-orange-400 transition-colors" />
            <input
              type="text"
              placeholder="Search your city or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border-b border-border bg-transparent text-sm focus:outline-none focus:border-orange-400 transition-colors text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {filteredLocations.length === 0 ? (
          <div className="py-12 text-center text-muted-foreground">
            No cities or states found matching "{searchTerm}"
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {visibleLocations.map((loc, index) => (
                <div 
                  key={loc.state} 
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  data-index={index}
                  className="h-full"
                >
                  <div className={`bg-background border border-border p-8 hover:shadow-lg transition-all duration-700 h-full flex flex-col group ${
                    visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${(index % 4) * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-border transition-colors group-hover:border-orange-400/30">
                      <h3 className="font-medium text-foreground text-xl group-hover:text-orange-400 transition-colors">{loc.state}</h3>
                      <span className="w-6 h-6 rounded-full bg-secondary text-muted-foreground flex items-center justify-center text-[10px] font-bold">
                        {loc.count}
                      </span>
                    </div>
                    <ul className="space-y-4 flex-1">
                      {loc.cities.map((city) => (
                        <li key={city} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer group/item">
                          <MapPin className="w-3 h-3 text-muted-foreground/30 group-hover/item:text-orange-400 transition-colors" />
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button if not searching and not expanded */}
            {searchTerm === "" && !isExpanded && filteredLocations.length > 8 && (
              <div className="mt-16 flex justify-center">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-orange-400 transition-colors group pb-1 border-b border-foreground hover:border-orange-400"
                >
                  View All States 
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
