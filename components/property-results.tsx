"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, MapPin, Home, Key, Building, X, SlidersHorizontal, LayoutGrid, List, ChevronLeft, ChevronRight, Bookmark, Building2, Eye } from "lucide-react"

interface Property {
  id: string;
  bank: string;
  type: string;
  date: string;
  possession: "Physical" | "Symbolic";
  reservePrice: string;
  name: string;
  location: string;
  area: string;
  status: string;
  emd: string;
  saved?: boolean;
}

const properties: Property[] = [
  {
    id: "BARBNANDY303",
    bank: "Bank of Baroda",
    type: "Flat",
    date: "07 Jul 2026",
    possession: "Physical",
    reservePrice: "₹60,12,000",
    name: "Flat No. 303, Vithai Apartment, Airoli",
    location: "Sector-9, Airoli, Navi Mumbai",
    area: "~807 sq.ft",
    status: "SARFAESI",
    emd: "₹6,12,000"
  },
  {
    id: "BARBNANDY401",
    bank: "Bank of Baroda",
    type: "Flat",
    date: "07 Jul 2026",
    possession: "Physical",
    reservePrice: "₹42,03,540",
    name: "Flat No. 401, Vithai Apartment, Airoli",
    location: "Sector-9, Airoli, Navi Mumbai",
    area: "~464 sq.ft",
    status: "SARFAESI",
    emd: "₹4,20,354",
    saved: true
  },
  {
    id: "SBI123",
    bank: "SBI",
    type: "Flat",
    date: "18 Jul 2026",
    possession: "Physical",
    reservePrice: "₹78,00,000",
    name: "3 BHK Apartment, Andheri West",
    location: "Andheri West, Mumbai",
    area: "1,240 sq.ft",
    status: "SARFAESI",
    emd: "₹7,80,000"
  },
  {
    id: "PNB456",
    bank: "PNB",
    type: "House",
    date: "28 Jul 2026",
    possession: "Physical",
    reservePrice: "₹1,12,00,000",
    name: "Independent House, Whitefield",
    location: "Whitefield, Bengaluru",
    area: "2,800 sq.ft",
    status: "SARFAESI",
    emd: "₹11,20,000"
  },
  {
    id: "HDFC789",
    bank: "HDFC",
    type: "Commercial",
    date: "22 Jul 2026",
    possession: "Symbolic",
    reservePrice: "₹1,45,00,000",
    name: "Commercial Shop, Connaught Place",
    location: "New Delhi",
    area: "620 sq.ft",
    status: "NPA",
    emd: "₹14,50,000"
  },
  {
    id: "ICICI101",
    bank: "ICICI",
    type: "Flat",
    date: "03 Aug 2026",
    possession: "Physical",
    reservePrice: "₹42,00,000",
    name: "2 BHK Flat, Banjara Hills",
    location: "Hyderabad, Telangana",
    area: "985 sq.ft",
    status: "SARFAESI",
    emd: "₹4,20,000"
  }
]

export function PropertyResults() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set(["BARBNANDY401"]))

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const newSaved = new Set(savedIds)
    if (newSaved.has(id)) {
      newSaved.delete(id)
    } else {
      newSaved.add(id)
    }
    setSavedIds(newSaved)
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      
      {/* Active Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs font-semibold text-muted-foreground mr-1">Active filters:</span>
        <button className="inline-flex items-center gap-1.5 bg-background border border-orange-400/50 rounded-full px-3 py-1 text-xs font-semibold text-orange-400 hover:bg-orange-400/10 transition-colors">
          <MapPin className="w-3 h-3" /> Mumbai <X className="w-3 h-3 opacity-70 hover:opacity-100" />
        </button>
        <button className="inline-flex items-center gap-1.5 bg-background border border-orange-400/50 rounded-full px-3 py-1 text-xs font-semibold text-orange-400 hover:bg-orange-400/10 transition-colors">
          <Home className="w-3 h-3" /> Residential <X className="w-3 h-3 opacity-70 hover:opacity-100" />
        </button>
        <button className="inline-flex items-center gap-1.5 bg-background border border-orange-400/50 rounded-full px-3 py-1 text-xs font-semibold text-orange-400 hover:bg-orange-400/10 transition-colors">
          <Key className="w-3 h-3" /> Physical <X className="w-3 h-3 opacity-70 hover:opacity-100" />
        </button>
        <button className="inline-flex items-center gap-1.5 bg-background border border-orange-400/50 rounded-full px-3 py-1 text-xs font-semibold text-orange-400 hover:bg-orange-400/10 transition-colors">
          <Building className="w-3 h-3" /> Bank of Baroda <X className="w-3 h-3 opacity-70 hover:opacity-100" />
        </button>
        <button className="text-xs font-semibold text-red-400 hover:text-red-500 ml-2">
          Clear all
        </button>
      </div>

      {/* Alert Banner */}
      <div className="bg-background border border-border rounded-xl shadow-sm p-5 md:p-6 mb-8 flex flex-col lg:flex-row items-start lg:items-center gap-5">
        <div className="w-12 h-12 rounded-lg bg-orange-400/10 flex items-center justify-center shrink-0">
          <Bell className="w-6 h-6 text-orange-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-foreground mb-1">Get email alerts for this search</h3>
          <p className="text-sm text-muted-foreground">
            New properties matching Mumbai · Residential · Physical · Bank of Baroda will be emailed to you automatically.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto mt-4 lg:mt-0">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="h-10 px-4 border border-border rounded-md text-sm bg-background w-full sm:w-[220px] focus:outline-none focus:border-orange-400/50 placeholder:text-muted-foreground/60"
          />
          <select className="h-10 px-3 border border-border rounded-md text-sm bg-background w-full sm:w-[130px] focus:outline-none focus:border-orange-400/50 appearance-none text-foreground/90">
            <option>Instant</option>
            <option>Daily digest</option>
            <option>Weekly</option>
          </select>
          <button className="h-10 px-5 bg-orange-400 hover:bg-orange-500 text-white border-none rounded-md text-sm font-semibold whitespace-nowrap w-full sm:w-auto transition-colors shadow-sm">
            Set Alert
          </button>
        </div>
      </div>

      {/* Layout Grid (Sidebar + Main) */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        
        {/* Sidebar */}
        <aside className="hidden lg:block bg-background border border-border rounded-xl shadow-sm overflow-hidden h-fit sticky top-24">
          <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/20">
            <h3 className="font-semibold text-sm flex items-center gap-2"><SlidersHorizontal className="w-4 h-4" /> Refine Filters</h3>
            <button className="text-xs font-semibold text-red-400 hover:text-red-500">Clear all</button>
          </div>

          <div className="p-4 border-b border-border">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Property Type</h4>
            <div className="space-y-2.5">
              {['All Types', 'Residential', 'Commercial', 'Industrial / Land'].map((pt, i) => (
                <label key={pt} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${i === 1 ? 'border-orange-400' : 'border-muted-foreground/50 group-hover:border-foreground/50'}`}>
                    {i === 1 && <div className="w-2 h-2 rounded-full bg-orange-400" />}
                  </div>
                  <span className={`text-sm transition-colors ${i === 1 ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>{pt}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="p-4 border-b border-border">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Bank</h4>
            <div className="space-y-2.5">
              {[
                { name: 'Bank of Baroda', count: 18, checked: true },
                { name: 'SBI', count: 312, checked: false },
                { name: 'HDFC Bank', count: 87, checked: false },
                { name: 'ICICI Bank', count: 64, checked: false },
                { name: 'PNB', count: 41, checked: false }
              ].map((bank) => (
                <label key={bank.name} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${bank.checked ? 'bg-orange-400 border-orange-400' : 'border-muted-foreground/50 group-hover:border-foreground/50'}`}>
                       {bank.checked && <svg viewBox="0 0 14 14" fill="none" className="w-3 h-3 text-white"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{bank.name}</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-full">{bank.count}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="p-4 border-b border-border">
             <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Price Range (₹)</h4>
             <div className="grid grid-cols-2 gap-2 mb-3">
               <input type="text" placeholder="Min" className="h-9 px-3 border border-border rounded-md text-sm bg-background focus:border-orange-400/50 focus:outline-none placeholder:text-muted-foreground/60 text-foreground/90" />
               <input type="text" placeholder="Max" className="h-9 px-3 border border-border rounded-md text-sm bg-background focus:border-orange-400/50 focus:outline-none placeholder:text-muted-foreground/60 text-foreground/90" />
             </div>
             <button className="w-full bg-foreground text-background font-medium h-9 rounded-md text-sm hover:bg-foreground/90 transition-colors">Apply</button>
          </div>

          <div className="p-4 border-b border-border">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Possession</h4>
            <div className="space-y-2.5">
              {['All', 'Physical', 'Symbolic'].map((pt, i) => (
                <label key={pt} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${i === 1 ? 'border-orange-400' : 'border-muted-foreground/50 group-hover:border-foreground/50'}`}>
                    {i === 1 && <div className="w-2 h-2 rounded-full bg-orange-400" />}
                  </div>
                  <span className={`text-sm transition-colors ${i === 1 ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>{pt}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="p-4">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Auction Date</h4>
            <div className="space-y-2.5">
              {['Any Time', 'This Week', 'This Month'].map((pt, i) => (
                <label key={pt} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${i === 0 ? 'border-orange-400' : 'border-muted-foreground/50 group-hover:border-foreground/50'}`}>
                    {i === 0 && <div className="w-2 h-2 rounded-full bg-orange-400" />}
                  </div>
                  <span className={`text-sm transition-colors ${i === 0 ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>{pt}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div>
          {/* Results Top */}
          <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground font-bold">247</strong> properties · Mumbai · Residential · Physical
            </div>
            <div className="flex items-center gap-3">
              <select className="h-9 px-3 border border-border rounded-md text-sm bg-background focus:border-orange-400/50 focus:outline-none appearance-none pr-8 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_8px_center]">
                <option>Auction Date (Soonest)</option>
                <option>Price: Low → High</option>
                <option>Price: High → Low</option>
                <option>Recently Added</option>
              </select>
              <div className="flex bg-background border border-border rounded-md overflow-hidden">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`w-9 h-9 flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-orange-400 text-white' : 'text-muted-foreground hover:bg-secondary'}`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button 
                   onClick={() => setViewMode("list")}
                  className={`w-9 h-9 flex items-center justify-center transition-colors border-l border-border ${viewMode === 'list' ? 'bg-orange-400 text-white' : 'text-muted-foreground hover:bg-secondary'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className={`grid gap-5 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
            {properties.map((p) => (
              <Link href="/listing" key={p.id} className="bg-background border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col overflow-hidden cursor-pointer hover:-translate-y-1">
                {/* Image Placeholder area */}
                <div className="h-44 bg-gradient-to-br from-secondary/80 to-secondary flex items-center justify-center relative shrink-0">
                  <Building2 className="w-16 h-16 text-muted-foreground/30 group-hover:text-orange-400/30 transition-colors" />
                  <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                    {p.bank}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 text-foreground text-[10px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                    {p.type}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                    📅 {p.date}
                  </div>
                  <div className={`absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm ${p.possession === 'Physical' ? 'bg-emerald-100/90 text-emerald-800' : 'bg-purple-100/90 text-purple-800'}`}>
                    {p.possession === 'Physical' ? '🔑' : '📝'} {p.possession}
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Reserve Price</div>
                  <div className="text-xl font-bold text-foreground tracking-tight mb-2">{p.reservePrice}</div>
                  <div className="text-sm font-semibold text-foreground leading-snug mb-1">{p.name}</div>
                  <div className="text-xs text-muted-foreground mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" /> {p.location}
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    <span className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border flex items-center gap-1"><LayoutGrid className="w-3 h-3" /> {p.area}</span>
                    <span className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border">{p.status}</span>
                    <span className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border">ID: {p.id}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between p-3.5 border-t border-border bg-secondary/20 mt-auto">
                  <div className="text-xs text-muted-foreground">
                    EMD: <strong className="text-red-500 font-semibold">{p.emd}</strong>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => toggleSave(p.id, e)}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors border ${savedIds.has(p.id) ? 'bg-orange-400/10 text-orange-400 border-orange-400/30' : 'bg-background text-muted-foreground border-border hover:border-orange-400/50 hover:text-orange-400'}`}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${savedIds.has(p.id) ? 'fill-current' : ''}`} />
                      {savedIds.has(p.id) ? 'Saved' : 'Save'}
                    </button>
                    <div className="px-3 py-1.5 bg-foreground text-background hover:bg-foreground/90 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors">
                      <Eye className="w-3.5 h-3.5" /> View
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1.5 mt-10">
            <button className="w-9 h-9 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground hover:border-orange-400 hover:text-orange-400 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-md border border-orange-400 bg-orange-400 flex items-center justify-center text-white font-bold shadow-sm">1</button>
            <button className="w-9 h-9 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground font-medium hover:border-orange-400 hover:text-orange-400 transition-colors">2</button>
            <button className="w-9 h-9 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground font-medium hover:border-orange-400 hover:text-orange-400 transition-colors">3</button>
            <span className="text-muted-foreground px-1 font-medium">...</span>
            <button className="w-9 h-9 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground font-medium hover:border-orange-400 hover:text-orange-400 transition-colors">21</button>
            <button className="w-9 h-9 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground hover:border-orange-400 hover:text-orange-400 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
