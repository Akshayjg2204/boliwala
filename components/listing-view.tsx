"use client"

import { useState } from "react"
import { Building2, Share2, Download, ChevronLeft, ChevronRight, Check, Search, Scale, Lock, Key, Home, MapPin, Eye, MessageSquare } from "lucide-react"

export function ListingView() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  const goToSlide = (index: number) => setCurrentSlide(index)

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
        <a href="/" className="hover:text-orange-400 transition-colors cursor-pointer">Home</a>
        <span className="text-border">›</span>
        <a href="/search" className="hover:text-orange-400 transition-colors cursor-pointer">Mumbai</a>
        <span className="text-border">›</span>
        <a href="/search" className="hover:text-orange-400 transition-colors cursor-pointer">Airoli</a>
        <span className="text-border">›</span>
        <a href="/search" className="hover:text-orange-400 transition-colors cursor-pointer">Bank of Baroda</a>
        <span className="text-border">›</span>
        <span className="text-foreground font-medium">Flat No. 303, Vithai Apartment</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
        {/* LEFT COLUMN */}
        <div>
          {/* Top meta actions */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="inline-flex items-center gap-1.5 bg-secondary/50 border border-border rounded-full px-3 py-1 text-xs font-semibold text-muted-foreground">
              <Eye className="w-3.5 h-3.5" /> <span className="text-orange-400 font-bold">342</span> people viewed this
            </div>
            <button className="inline-flex items-center gap-1.5 bg-background border border-border hover:border-orange-400 hover:text-orange-400 rounded-full px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
            <button className="inline-flex items-center gap-1.5 bg-background border border-border hover:border-orange-400 hover:text-orange-400 rounded-full px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors">
              <Download className="w-3.5 h-3.5" /> Download Notice
            </button>
          </div>

          {/* Carousel */}
          <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px] mb-6 bg-slate-900 group">
            <div className="absolute top-4 right-4 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm z-10">
              <span>{currentSlide + 1}</span> / {totalSlides}
            </div>
            <div className="absolute bottom-4 left-4 bg-black/55 text-white/90 text-[11px] font-medium px-2.5 py-1 rounded-md backdrop-blur-sm z-10">
              Representative images
            </div>
            
            <div 
              className="flex h-full transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="min-w-full h-full flex items-center justify-center text-7xl md:text-9xl bg-gradient-to-br from-[#0f3d20] to-[#1a6b35]">🏢</div>
              <div className="min-w-full h-full flex items-center justify-center text-7xl md:text-9xl bg-gradient-to-br from-[#2a1a0f] to-[#5c3d1a]">🚪</div>
              <div className="min-w-full h-full flex items-center justify-center text-7xl md:text-9xl bg-gradient-to-br from-[#0f1929] to-[#1a3352]">🛋️</div>
              <div className="min-w-full h-full flex items-center justify-center text-7xl md:text-9xl bg-gradient-to-br from-[#2a0f2a] to-[#5c1a5c]">🏞️</div>
            </div>

            <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 rounded-full bg-white/95 text-foreground flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all z-10 opacity-0 group-hover:opacity-100 focus:opacity-100">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 rounded-full bg-white/95 text-foreground flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all z-10 opacity-0 group-hover:opacity-100 focus:opacity-100">
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => goToSlide(i)}
                  className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                />
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="inline-flex items-center gap-1.5 bg-emerald-100/80 text-emerald-700 border border-emerald-200 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md">
              <Check className="w-3.5 h-3.5" /> Bank of Baroda — SARFAESI
            </span>
            <span className="inline-flex items-center gap-1.5 bg-amber-100/80 text-amber-700 border border-amber-200 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md">
              📅 Auction: 07 Jul 2026
            </span>
            <span className="inline-flex items-center gap-1.5 bg-secondary/80 text-muted-foreground border border-border text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md">
              🔑 Physical Possession
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3 leading-tight">
            Flat No. 303, Vithai Apartment, Airoli, Navi Mumbai
          </h1>
          <div className="text-sm text-muted-foreground flex items-start gap-1.5 mb-8 leading-relaxed">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> 
            Vithai Apartment Co-Op Hsg Soc. Ltd., Plot No. F-33/3, Village Dive (G.E.S.), Sector-9, Airoli, Navi Mumbai – 400708, District Thane
          </div>

          {/* Property Details Table */}
          <div className="bg-background border border-border rounded-xl shadow-sm mb-6 overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-secondary/30">
              <div className="w-9 h-9 rounded-md bg-blue-100 flex items-center justify-center shrink-0 text-blue-600"><Building2 className="w-5 h-5" /></div>
              <h2 className="text-base font-bold text-foreground">Property Details</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground w-[40%] md:w-1/3">Property Type</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">Flat / Apartment</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Flat No. & Floor</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground italic font-normal"><Lock className="w-3.5 h-3.5" /> <a className="text-orange-400 font-semibold cursor-pointer hover:underline not-italic">Sign up to view</a></span>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Building / Society</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">Vithai Apartment Co-Op Hsg Soc. Ltd.</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Plot No.</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">Plot No. F-33/3, Village Dive (G.E.S.)</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Locality</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">Sector-9, Airoli, Navi Mumbai</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">District</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">Thane, Maharashtra – 400708</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Area</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">~807 sq.ft Super Built-Up</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Possession Type</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">Physical Possession</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Property ID</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">BARBNANDY303</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Auction Information */}
          <div className="bg-background border border-border rounded-xl shadow-sm mb-6 overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-secondary/30">
              <div className="w-9 h-9 rounded-md bg-amber-100 flex items-center justify-center shrink-0 text-amber-600"><span className="text-xl">📅</span></div>
              <h2 className="text-base font-bold text-foreground">Auction Information</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground w-[40%] md:w-1/3">Auction Date</td>
                    <td className="px-6 py-3.5 font-bold text-foreground">07 July 2026</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Auction Time</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">02:00 PM – 04:00 PM</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Mode</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">Online e-Auction</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Reserve Price</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">₹60,12,000</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">EMD Amount</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">₹6,12,000</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Bid Increase Amount</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">₹25,000</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Total Outstanding Dues</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">₹98,50,816 (as on 08/04/2026)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Locked Section */}
          <div className="bg-background border border-border rounded-xl shadow-sm mb-6 overflow-hidden relative">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-secondary/30">
              <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center shrink-0 text-muted-foreground"><Search className="w-5 h-5" /></div>
              <h2 className="text-base font-bold text-foreground">Inspection & Bank Contact</h2>
            </div>
            <div className="px-6 py-10 text-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Sign up to view inspection & contact details</h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-8">
                Create a free Boliwala account to unlock the property inspection schedule and the bank's authorised officer contact details.
              </p>
              
              <div className="flex flex-col gap-2 max-w-sm mx-auto mb-8">
                <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/30 border border-border rounded-lg text-sm">
                  <span className="text-muted-foreground flex items-center gap-1.5"><Search className="w-3.5 h-3.5" /> Inspection Date</span>
                  <span className="text-muted-foreground font-semibold blur-sm select-none tracking-wider">01 Jul 2026</span>
                </div>
                <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/30 border border-border rounded-lg text-sm">
                  <span className="text-muted-foreground flex items-center gap-1.5">🕐 Time</span>
                  <span className="text-muted-foreground font-semibold blur-sm select-none tracking-wider">02:00 PM</span>
                </div>
                <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/30 border border-border rounded-lg text-sm">
                  <span className="text-muted-foreground flex items-center gap-1.5">👤 Officer</span>
                  <span className="text-muted-foreground font-semibold blur-sm select-none tracking-wider">98XXXXXXXX</span>
                </div>
              </div>

              <button className="bg-foreground text-background font-semibold px-6 py-3 rounded-md hover:bg-foreground/90 transition-colors shadow-sm inline-flex items-center gap-2">
                <Lock className="w-4 h-4" /> Sign Up Free to Unlock
              </button>
            </div>
          </div>

          {/* Legal Status */}
          <div className="bg-background border border-border rounded-xl shadow-sm mb-6 overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-secondary/30">
              <div className="w-9 h-9 rounded-md bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600"><Scale className="w-5 h-5" /></div>
              <h2 className="text-base font-bold text-foreground">Legal Status</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground w-[40%] md:w-1/3">Sale Under</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">SARFAESI Act 2002 (Rule 6(2) & 8(6))</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Sale Basis</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">"As is where is", "As is what is", "Whatever there is"</td>
                  </tr>
                  <tr className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-3.5 text-muted-foreground">Encumbrance</td>
                    <td className="px-6 py-3.5 font-medium text-foreground">Not Known to Bank / NIL</td>
                  </tr>
                  <tr className="bg-orange-400/10">
                    <td className="px-6 py-3.5 text-foreground font-medium">Our Recommendation</td>
                    <td className="px-6 py-3.5 font-bold text-orange-500">Book Due Diligence before bidding</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-5 text-sm text-amber-900/80 leading-relaxed">
            <strong className="text-amber-600">⚠️ Important:</strong> This property is sold on an <strong>"As is where is", "As is what is"</strong> and <strong>"Whatever there is"</strong> basis. Intending bidders should make their own independent enquiries and verify the property, title, encumbrances, dues and statutory charges before bidding. The successful bidder must deposit 25% of the bid amount (including EMD) immediately and the balance 75% within 15 days. Applicable TDS under Section 194-IA and GST apply. Source: Bank of Baroda E-Auction Sale Notice dated 29 May 2026.
          </div>
        </div>

        {/* RIGHT COLUMN (Action Card) */}
        <div>
          <div className="bg-background border border-border rounded-xl shadow-md p-6 lg:sticky lg:top-24">
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1 block">Reserve Price</span>
            <div className="text-3xl font-extrabold tracking-tight text-foreground mb-3">₹60,12,000</div>
            <div className="text-sm text-muted-foreground pt-3 border-t border-border mb-2">
              EMD Required: <strong className="text-red-500 font-semibold">₹6,12,000</strong>
            </div>
            <div className="text-xs text-muted-foreground mb-5">Bid Increase Amount: ₹25,000</div>
            
            <div className="bg-amber-100/50 border border-amber-200/50 rounded-lg p-3 flex items-center gap-3 mb-3">
              <span className="text-2xl">📅</span>
              <div>
                <strong className="block text-sm font-bold text-amber-600">Auction: 07 July 2026</strong>
                <span className="text-xs text-muted-foreground">02:00 PM – 04:00 PM · Online</span>
              </div>
            </div>

            <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 flex items-center gap-3 mb-6">
              <span className="text-xl text-blue-500"><Search className="w-6 h-6" /></span>
              <div>
                <strong className="block text-sm font-bold text-blue-600">Inspection: 01 July 2026</strong>
                <span className="text-xs text-muted-foreground">02:00 PM – 04:00 PM</span>
              </div>
            </div>

            <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-md mb-2 transition-colors">
              🎯 Hire Boliwala to Bid
            </button>
            <button className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold py-3 rounded-md mb-2 flex items-center justify-center gap-2 transition-colors">
              <MessageSquare className="w-4 h-4" /> WhatsApp Us Now
            </button>
            <button className="w-full bg-transparent border border-border hover:bg-secondary text-foreground font-medium py-3 rounded-md flex items-center justify-center gap-2 transition-colors">
              📄 Download Bank Notice (PDF)
            </button>

            <div className="h-px bg-border my-6"></div>

            <div className="bg-secondary/30 border border-border rounded-xl p-5 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">⭐</span>
                <span className="text-sm font-bold text-foreground">Complete End-to-End Package</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                <span className="text-2xl font-extrabold text-orange-400 tracking-tight">₹9,999</span>
                <span className="text-sm font-semibold text-muted-foreground">+</span>
                <span className="text-lg font-extrabold text-amber-500">1%</span>
                <span className="text-sm font-semibold text-muted-foreground">success fee</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full mb-4">
                ✓ 1% charged only if you win
              </div>
              <ul className="space-y-1.5">
                {[
                  "Due Diligence & Legal Search",
                  "Auction Bid Management",
                  "Possession Support",
                  "Loan & Funding Assistance"
                ].map((item, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full bg-foreground text-background font-semibold py-3 rounded-md hover:bg-foreground/90 transition-colors mb-4">
              Get Started — ₹9,999
            </button>

            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200/50 rounded-md p-3 text-xs text-emerald-700 font-medium mb-4">
              <span className="text-lg">🆓</span> All property details are free on Boliwala — no paywall, no hidden address.
            </div>

            <div className="text-[11px] text-muted-foreground leading-relaxed pt-4 border-t border-border">
              <strong className="text-foreground">Everything included.</strong> One flat fee of ₹9,999 engages our full team, plus a 1% success fee on the winning bid — charged only if you win.
            </div>
          </div>
        </div>
      </div>

      {/* SIMILAR AUCTIONS IN AIROLI */}
      <div className="mt-16 pt-16 border-t border-border">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 block mb-2">Same Area · Same Building</span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Other Auctions in Airoli</h2>
          </div>
          <a className="text-sm font-semibold text-orange-400 cursor-pointer hover:underline">View all Airoli auctions →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-background border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-1 flex flex-col overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-[#0f1929] to-[#1a3352] flex items-center justify-center text-5xl relative">
              🏢
              <div className="absolute top-2.5 left-2.5 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Bank of Baroda</div>
              <div className="absolute bottom-2.5 left-2.5 bg-black/60 text-white text-[10px] font-semibold px-2 py-1 rounded backdrop-blur-sm">📅 07 Jul 2026</div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="text-xl font-bold text-foreground tracking-tight">₹42,03,540</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Reserve Price</div>
              <div className="text-sm font-semibold text-foreground mb-1 leading-snug">Flat No. 401, Vithai Apartment, Airoli</div>
              <div className="text-xs text-muted-foreground mb-3">📍 Sector-9, Airoli, Navi Mumbai</div>
              
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border">🏢 Flat</span>
                <span className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border">📐 ~464 sq.ft</span>
                <span className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border">🔑 Physical</span>
              </div>
              
              <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">EMD: <strong className="text-red-500">₹4,20,354</strong></span>
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-3 py-1.5 rounded-md text-xs transition-colors">View →</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-background border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-1 flex flex-col overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-[#2a1a0f] to-[#5c3d1a] flex items-center justify-center text-5xl relative">
              🏢
              <div className="absolute top-2.5 left-2.5 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">PNB</div>
              <div className="absolute bottom-2.5 left-2.5 bg-black/60 text-white text-[10px] font-semibold px-2 py-1 rounded backdrop-blur-sm">📅 Upcoming</div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="text-xl font-bold text-foreground tracking-tight">₹1,50,00,000</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Reserve Price</div>
              <div className="text-sm font-semibold text-foreground mb-1 leading-snug">Flat in Airoli, Navi Mumbai</div>
              <div className="text-xs text-muted-foreground mb-3">📍 Airoli, Navi Mumbai</div>
              
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border">🏢 Flat</span>
                <span className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border">🔑 Physical</span>
              </div>
              
              <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">EMD on request</span>
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-3 py-1.5 rounded-md text-xs transition-colors">View →</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-background border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-1 flex flex-col overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-[#0f3d20] to-[#1a6b35] flex items-center justify-center text-5xl relative">
              🏢
              <div className="absolute top-2.5 left-2.5 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Kotak</div>
              <div className="absolute bottom-2.5 left-2.5 bg-black/60 text-white text-[10px] font-semibold px-2 py-1 rounded backdrop-blur-sm">📅 Upcoming</div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="text-xl font-bold text-foreground tracking-tight">₹23,50,000</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Reserve Price</div>
              <div className="text-sm font-semibold text-foreground mb-1 leading-snug">Flat in Airoli, Navi Mumbai</div>
              <div className="text-xs text-muted-foreground mb-3">📍 Airoli, Navi Mumbai</div>
              
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border">🏢 Flat</span>
                <span className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-1 rounded border border-border">🔮 Symbolic</span>
              </div>
              
              <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">EMD on request</span>
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-3 py-1.5 rounded-md text-xs transition-colors">View →</button>
              </div>
            </div>
          </div>
        </div>

        {/* Note about Lot 2 */}
        <div className="mt-6 bg-blue-50/50 border border-blue-100 rounded-xl p-5 flex items-start gap-4">
          <span className="text-2xl shrink-0">💡</span>
          <div className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-orange-400 font-semibold">Same auction notice:</strong> Flat No. 401 (the first card above) is from the same Bank of Baroda auction notice as this property. Both properties go to auction on 07 July 2026 at 02:00 PM via baanknet.com. You could bid on either — or both — in the same session. <a className="text-orange-400 font-semibold cursor-pointer hover:underline">Read the full notice →</a>
          </div>
        </div>
      </div>

    </div>
  )
}
