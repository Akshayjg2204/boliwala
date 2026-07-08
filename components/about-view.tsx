"use client"

import Link from "next/link"
import { Search, Scale, Handshake, MapPin } from "lucide-react"
import { FAQ } from "@/components/faq"

export function AboutView() {
  return (
    <div className="w-full flex flex-col pt-32 pb-0 bg-background">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0A0F1C] py-20 md:py-32 rounded-3xl mx-4 md:mx-6 mb-8 mt-4 shadow-2xl">
        {/* Glow effects */}
        <div className="absolute top-[-40%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(27,79,216,0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col items-center md:items-start">
            <span className="text-white/45 text-xs font-bold tracking-[1.2px] uppercase mb-4 inline-block">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-display">
              We Saw How Hard It Was.<br />
              <em className="text-amber-300 not-italic">So We Fixed It.</em>
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-0">
              Bank auction properties sell at 20–40% below market. Most buyers miss out because the process is opaque, risky and complex. Boliwala exists to change that.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT & VALUES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
            <div>
              <span className="text-[rgb(251,146,60)] text-xs font-bold tracking-[1.2px] uppercase mb-4 inline-block">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-display">
                Built by People Who Live<br className="hidden md:block" /> and Breathe Auctions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Boliwala was founded by a team with deep roots in real estate, banking, and property law. We watched buyers lose incredible deals because the auction process was too complex to navigate without expert help.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We built what we wished existed — a single platform combining verified auction data with a full-service team that handles everything from due diligence to possession.
              </p>
              <p className="text-[rgb(251,146,60)] text-xl font-bold italic font-display">
                "We Know Auctions!" — it's what we do every single day.
              </p>
            </div>
            
            <div className="bg-[#0A0F1C] rounded-3xl h-[400px] flex items-center justify-center text-8xl relative overflow-hidden shadow-xl border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(27,79,216,0.25)_0%,transparent_60%)]" />
              🏛️
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 font-display">Radical Transparency</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every listing shows reserve price, EMD, auction date, possession status and bank notice download. No gatekeeping.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 font-display">Legal-First Approach</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We never recommend a property without due diligence. Our team has seen every title dispute — we catch them before you bid.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4 text-amber-600">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 font-display">Aligned Interests</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our 1% success fee means we only win when you win. Your success is literally our business model.
              </p>
            </div>
            
            <div className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4 text-purple-600">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 font-display">Built for India</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                SARFAESI, DRT, NPA — we understand the Indian bank auction ecosystem deeply. Not a US model copy-pasted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <span className="text-[rgb(251,146,60)] text-xs font-bold tracking-[1.2px] uppercase mb-4 inline-block">
              Impact So Far
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
              What Boliwala Has Done
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-2xl p-8 text-center border border-border shadow-sm hover:-translate-y-1 transition-transform">
              <span className="font-display text-4xl font-extrabold text-blue-600 block mb-3">₹2,100Cr</span>
              <span className="text-sm text-muted-foreground leading-relaxed block">Total value of properties won for clients</span>
            </div>
            <div className="bg-background rounded-2xl p-8 text-center border border-border shadow-sm hover:-translate-y-1 transition-transform">
              <span className="font-display text-4xl font-extrabold text-emerald-600 block mb-3">840+</span>
              <span className="text-sm text-muted-foreground leading-relaxed block">Auctions bid and won on behalf of clients</span>
            </div>
            <div className="bg-background rounded-2xl p-8 text-center border border-border shadow-sm hover:-translate-y-1 transition-transform">
              <span className="font-display text-4xl font-extrabold text-amber-500 block mb-3">40+</span>
              <span className="text-sm text-muted-foreground leading-relaxed block">Banks & NBFCs whose auctions we track daily</span>
            </div>
            <div className="bg-background rounded-2xl p-8 text-center border border-border shadow-sm hover:-translate-y-1 transition-transform">
              <span className="font-display text-4xl font-extrabold text-purple-600 block mb-3">28%</span>
              <span className="text-sm text-muted-foreground leading-relaxed block">Average saving vs market price for clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <div className="bg-background">
        <FAQ />
      </div>

      {/* CTA STRIP */}
      <section className="bg-[rgb(251,146,60)] py-24 mx-4 md:mx-6 rounded-3xl mb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <div className="flex-1 min-w-[260px] text-center lg:text-left">
              <span className="text-white/70 text-xs font-bold tracking-[1.2px] uppercase mb-4 inline-block">
                Ready?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 font-display tracking-tight">
                Find Your Auction Property Today
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-0">
                Browse free. Hire us when you're ready. We handle everything from there.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[300px] w-full lg:w-auto">
              <Link 
                href="/search" 
                className="bg-white text-[rgb(251,146,60)] text-center text-base font-bold py-4 px-8 rounded-xl hover:bg-white/90 transition-colors shadow-sm"
              >
                Browse Properties &rarr;
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white/40 text-white text-center text-base font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
