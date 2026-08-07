"use client"

import Link from "next/link"
import { Search, Scale, Handshake, MapPin, ArrowUpRight } from "lucide-react"
import { FAQ } from "@/components/faq"
import { HighlightedText } from "@/components/highlighted-text"
import { Button } from "@/components/ui/button"

export function AboutView() {
  return (
    <div className="w-full flex flex-col pt-32 pb-0 bg-background min-h-screen">
      
      {/* HERO SECTION - Matching PartnerView & rest of site */}
      <section className="container mx-auto px-6 md:px-12 text-center mb-24 md:mb-32">
        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-500 font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
          Our Story
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          We Saw How Hard It Was.<br />
          <span className="inline-block whitespace-nowrap"><HighlightedText>So We Fixed It.</HighlightedText></span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Bank auction properties sell at 20–40% below market. Most buyers miss out because the process is opaque, risky and complex. Boliwala exists to change that.
        </p>
      </section>

      {/* ABOUT CONTENT & VALUES */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Who We Are</p>
          <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-8 tracking-tight text-balance">
            Built by People Who Live and Breathe Auctions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-light">
            Boliwala was founded by a team with deep roots in real estate, banking, and property law. We watched buyers lose incredible deals because the auction process was too complex to navigate without expert help.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-light">
            We built what we wished existed — a single platform combining verified auction data with a full-service team that handles everything from due diligence to possession.
          </p>
          <div className="bg-amber-50 dark:bg-amber-500/10 border-l-4 border-amber-500 p-6 rounded-r-xl inline-block mt-4 shadow-sm">
            <p className="text-foreground text-xl font-medium italic">
              "We Know Auctions!" — it's what we do every single day.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Radical Transparency",
              description: "Every listing shows reserve price, EMD, auction date, possession status and bank notice download. No gatekeeping.",
              icon: Search
            },
            {
              title: "Legal-First Approach",
              description: "We never recommend a property without due diligence. Our team has seen every title dispute — we catch them before you bid.",
              icon: Scale
            },
            {
              title: "Aligned Interests",
              description: "Our 1% success fee means we only win when you win. Your success is literally our business model.",
              icon: Handshake
            },
            {
              title: "Built for India",
              description: "SARFAESI, DRT, NPA — we understand the Indian bank auction ecosystem deeply. Not a US model copy-pasted.",
              icon: MapPin
            }
          ].map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="flex flex-col gap-4 group bg-card border border-border p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-foreground transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px] font-light">
                    {value.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-secondary/30 py-24 mb-32 border-y border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Impact So Far</p>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight text-balance">
              What Boliwala Has Done
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card border border-border p-10 flex flex-col items-center justify-center text-center rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-5xl md:text-6xl font-medium text-amber-600 dark:text-amber-500 mb-4 tracking-tighter">₹2,100Cr</span>
              <span className="text-sm text-muted-foreground leading-relaxed font-light">Total value of properties won</span>
            </div>
            <div className="bg-card border border-border p-10 flex flex-col items-center justify-center text-center rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-5xl md:text-6xl font-medium text-amber-600 dark:text-amber-500 mb-4 tracking-tighter">840+</span>
              <span className="text-sm text-muted-foreground leading-relaxed font-light">Auctions bid and won</span>
            </div>
            <div className="bg-card border border-border p-10 flex flex-col items-center justify-center text-center rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-5xl md:text-6xl font-medium text-amber-600 dark:text-amber-500 mb-4 tracking-tighter">40+</span>
              <span className="text-sm text-muted-foreground leading-relaxed font-light">Banks & NBFCs tracked</span>
            </div>
            <div className="bg-card border border-border p-10 flex flex-col items-center justify-center text-center rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-5xl md:text-6xl font-medium text-amber-600 dark:text-amber-500 mb-4 tracking-tighter">28%</span>
              <span className="text-sm text-muted-foreground leading-relaxed font-light">Avg. saving vs market price</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <div className="container mx-auto mb-32 max-w-4xl px-6">
        <FAQ />
      </div>

      {/* CTA STRIP */}
      <section className="container mx-auto px-6 md:px-12 mb-32 max-w-6xl">
        <div className="relative overflow-hidden bg-card border border-border rounded-[2rem] px-6 py-20 sm:px-12 sm:py-24 text-center shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <p className="text-muted-foreground text-xs md:text-sm tracking-[0.3em] font-bold uppercase mb-6">Ready?</p>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6 tracking-tight text-balance">
              Find Your Auction Property Today
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Browse free. Hire us when you're ready. We handle everything from there.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="h-14 px-8 text-[15px] font-medium rounded-xl w-full sm:w-auto shadow-lg hover:-translate-y-0.5 transition-all">
                <Link href="/search" className="flex items-center justify-center gap-2 group">
                  Browse Properties
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-[15px] font-medium rounded-xl w-full sm:w-auto bg-background">
                <Link href="/contact">
                  Book Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
