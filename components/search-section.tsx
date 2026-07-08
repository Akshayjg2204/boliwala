"use client"

import { useState } from "react"
import { Search, MapPin, Building, CreditCard, Key, RotateCcw, Home, Factory, Store, Tractor, LayoutGrid, Building2 } from "lucide-react"

interface SearchSectionProps {
  onSearch?: () => void;
}

export function SearchSection({ onSearch }: SearchSectionProps = {}) {
  const [propertyType, setPropertyType] = useState("all")
  const [possessionType, setPossessionType] = useState("all")

  const propertyTypes = [
    { id: "all", title: "All Types", desc: "Browse everything", icon: <LayoutGrid className="w-4 h-4" /> },
    { id: "residential", title: "Residential", desc: "Flats, Villas, Bungalows", icon: <Home className="w-4 h-4" /> },
    { id: "commercial", title: "Commercial", desc: "Offices, Shops", icon: <Store className="w-4 h-4" /> },
    { id: "industrial", title: "Industrial", desc: "Factories, Warehouses", icon: <Factory className="w-4 h-4" /> },
    { id: "agricultural", title: "Agricultural", desc: "Farms, Plots, Land", icon: <Tractor className="w-4 h-4" /> },
    { id: "mixed", title: "Mixed Use", desc: "Multi-purpose", icon: <Building2 className="w-4 h-4" /> },
  ]

  return (
    <section id="search" className="py-20 bg-secondary/30 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">Find Your Ideal Property</h2>
          </div>

          {/* Search Card */}
          <div className="bg-background border border-border rounded-xl p-6 md:p-8 shadow-lg flex flex-col gap-6">
            
            {/* Row 1: Location & Keyword */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-300" />
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter City, Area, or Locality"
                  className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-orange-300/50 transition-colors placeholder:text-muted-foreground/60"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Search className="w-4 h-4 text-blue-400" />
                  Keyword
                </label>
                <input
                  type="text"
                  placeholder="Building name, Road, or Street"
                  className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-400/50 transition-colors placeholder:text-muted-foreground/60"
                />
              </div>
            </div>

            {/* Row 2: Price Range & Bank */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-yellow-500" />
                  Price Range (₹)
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Min Price"
                    className="w-1/2 bg-secondary/50 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-yellow-500/50 transition-colors placeholder:text-muted-foreground/60"
                  />
                  <input
                    type="text"
                    placeholder="Max Price"
                    className="w-1/2 bg-secondary/50 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-yellow-500/50 transition-colors placeholder:text-muted-foreground/60"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Building className="w-4 h-4 text-purple-400" />
                  Bank Name
                </label>
                <select className="w-full bg-secondary/50 border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-purple-400/50 transition-colors appearance-none text-foreground/90">
                  <option value="">All Banks</option>
                  <option value="sbi">State Bank of India (SBI)</option>
                  <option value="pnb">Punjab National Bank (PNB)</option>
                  <option value="bob">Bank of Baroda</option>
                  <option value="canara">Canara Bank</option>
                </select>
              </div>
            </div>

            {/* Row 3: Property Type */}
            <div className="bg-secondary/20 border border-border rounded-lg p-5 mt-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-4">
                <Home className="w-4 h-4 text-green-400" />
                Property Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {propertyTypes.map((type) => (
                  <label 
                    key={type.id} 
                    className={`flex items-start gap-3 p-3 rounded-md cursor-pointer transition-colors border ${propertyType === type.id ? 'border-orange-300/50 bg-orange-300/5' : 'border-transparent hover:bg-secondary/40'}`}
                    onClick={() => setPropertyType(type.id)}
                  >
                    <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${propertyType === type.id ? 'border-orange-300' : 'border-muted-foreground/50'}`}>
                      {propertyType === type.id && <div className="w-2 h-2 rounded-full bg-orange-300" />}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{type.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{type.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Row 4: Possession Type */}
            <div className="bg-emerald-900/10 border border-emerald-900/30 rounded-lg p-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80 flex items-center gap-2 mb-4">
                <Key className="w-4 h-4 text-emerald-400" />
                Possession Type
              </label>
              <div className="flex flex-wrap gap-8">
                {[
                  { id: "all", label: "All Possession" },
                  { id: "physical", label: "Physical" },
                  { id: "symbolic", label: "Symbolic" },
                ].map((type) => (
                  <label 
                    key={type.id} 
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setPossessionType(type.id)}
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${possessionType === type.id ? 'border-emerald-400' : 'border-muted-foreground/50'}`}>
                      {possessionType === type.id && <div className="w-2 h-2 rounded-full bg-emerald-400" />}
                    </div>
                    <span className={`text-sm ${possessionType === type.id ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                      {type.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bottom Row: Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button 
                onClick={onSearch}
                className="flex-1 bg-foreground hover:bg-foreground/90 text-background font-medium py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <Search className="w-4 h-4" />
                Search Auctions
              </button>
              <button className="sm:w-1/3 bg-transparent border border-border hover:bg-secondary text-foreground font-medium py-3 rounded-md flex items-center justify-center gap-2 transition-colors">
                <RotateCcw className="w-4 h-4" />
                Reset Filters
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
