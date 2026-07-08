"use client"

import { useState } from "react"
import { ClipboardCheck, Target, Key, Building2, Check, ChevronDown, MessageCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "When exactly do I pay the 1% success fee?",
    answer: "The 1% success fee is charged only after you win the auction and the bank confirms your bid. If you don't win — for any reason — you pay nothing beyond the ₹9,999 engagement fee. The success fee is calculated on your final winning bid amount, not the reserve price.",
  },
  {
    question: "What does the ₹9,999 fee cover?",
    answer: "The ₹9,999 is your engagement fee that activates the full end-to-end service — due diligence, bid management, possession support, and loan assistance. It covers our team's time, legal costs for document verification, and operational coordination throughout the process.",
  },
  {
    question: "What if the due diligence reveals a problem and I decide not to bid?",
    answer: "You keep the due diligence report and we help you find an alternative property. The ₹9,999 fee has been earned by our legal team's work. Think of it as the cost of avoiding a potentially bad investment — and we can redirect our efforts to another property for you at a discounted re-engagement fee.",
  },
  {
    question: "Are there any other charges I should know about?",
    answer: "No hidden charges. The EMD (Earnest Money Deposit) is your own money paid to the bank — it is fully refundable if you don't win. Stamp duty and registration charges at possession are statutory government fees paid directly by you. Everything else — our team's work across all four services — is covered by the ₹9,999 + 1% structure.",
  },
  {
    question: "Can I use only one service, like just due diligence?",
    answer: "Our package is designed as an end-to-end service for the best outcome. However, if you've already handled due diligence yourself and just need bid management or possession support, speak to our team — we can discuss what makes sense for your specific situation.",
  },
]

export function ServicesView() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="w-full flex flex-col pt-32 pb-0 bg-background">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0A0F1C] py-20 md:py-32 rounded-3xl mx-4 md:mx-6 mb-8 mt-4 shadow-2xl">
        {/* Glow effects */}
        <div className="absolute top-[-40%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(27,79,216,0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.15)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <span className="text-[10px] font-bold bg-white text-[#0A0F1C] px-1.5 py-0.5 rounded-sm">INCLUDED</span>
            <span className="text-xs tracking-[0.15em] uppercase text-white font-semibold">End-to-End Auction Services</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance text-white mb-6 tracking-tight leading-[1.1] drop-shadow-lg">
            We Know Auctions.<br />
            We Handle <span className="text-orange-300">Yours.</span>
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-2xl font-light leading-relaxed drop-shadow-md">
            One package. Everything included. From due diligence to possession — starting at ₹9,999 + 1% success fee only if you win.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED STRIP */}
      <div className="bg-secondary/30 border-y border-border py-5 px-6">
        <div className="container mx-auto flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center overflow-x-auto gap-4 md:gap-0 pb-2 md:pb-0 hide-scrollbar">
          <div className="flex items-center gap-2 px-6 border-r border-border/50 shrink-0 text-sm font-medium text-foreground">
            <ClipboardCheck className="w-5 h-5 text-emerald-400" /> Due Diligence & Legal Search
          </div>
          <div className="flex items-center gap-2 px-6 border-r border-border/50 shrink-0 text-sm font-medium text-foreground">
            <Target className="w-5 h-5 text-blue-400" /> Auction Bid Management
          </div>
          <div className="flex items-center gap-2 px-6 border-r border-border/50 shrink-0 text-sm font-medium text-foreground">
            <Key className="w-5 h-5 text-purple-400" /> Possession Support
          </div>
          <div className="flex items-center gap-2 px-6 shrink-0 text-sm font-medium text-foreground">
            <Building2 className="w-5 h-5 text-yellow-500" /> Loan & Funding Assistance
          </div>
        </div>
      </div>

      {/* MAIN PRICING SECTION */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          
          {/* Pricing Hero Card */}
          <div className="bg-background border border-border rounded-xl shadow-lg p-8 md:p-16 mb-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-300 to-orange-500" />
            
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 block">
              One Package. Everything Included.
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-balance text-foreground">
              Simple, Transparent Pricing.<br />No Hidden Fees. No Surprises.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light text-balance">
              All four services — due diligence, bid management, possession support, and loan assistance — are bundled into one end-to-end package. You pay one flat fee to start, and a success fee only when you win.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground block mb-2">Starting at</span>
                <span className="text-5xl md:text-7xl font-bold text-foreground tracking-tighter block leading-none">₹9,999</span>
                <span className="text-base font-medium text-muted-foreground block mt-3">flat fee to engage</span>
              </div>
              
              <div className="text-4xl font-light text-muted-foreground/30 py-4 md:py-0">+</div>
              
              <div className="text-center bg-orange-400/5 border border-orange-400/20 rounded-2xl p-6 min-w-[200px]">
                <span className="text-xs font-semibold uppercase tracking-[1px] text-orange-400 block mb-2">Success Fee</span>
                <span className="text-4xl md:text-5xl font-bold text-orange-400 block leading-none">1%</span>
                <span className="text-xs font-medium text-orange-400/70 block mt-2">of winning bid amount</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-10">
              <Check className="w-4 h-4" /> Success fee is charged only if you win — zero risk
            </div>

            <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-6 block text-left md:text-center">
              Everything included in your package
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto mb-10">
              <div className="flex items-start gap-4 p-5 bg-secondary/30 rounded-xl border border-border">
                <ClipboardCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm font-medium text-foreground mb-1">Due Diligence & Legal Search</strong>
                  <span className="text-xs text-muted-foreground font-light">Full title chain, EC, SARFAESI check, written report</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-secondary/30 rounded-xl border border-border">
                <Target className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm font-medium text-foreground mb-1">Auction Bid Management</strong>
                  <span className="text-xs text-muted-foreground font-light">Registration, EMD, live bidding, real-time updates</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-secondary/30 rounded-xl border border-border">
                <Key className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm font-medium text-foreground mb-1">Possession Support</strong>
                  <span className="text-xs text-muted-foreground font-light">Sale certificate, registration, mutation, physical possession</span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-secondary/30 rounded-xl border border-border">
                <Building2 className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm font-medium text-foreground mb-1">Loan & Funding Assistance</strong>
                  <span className="text-xs text-muted-foreground font-light">12+ bank partners, vacant & occupied properties</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-foreground text-background font-medium px-8 py-4 rounded-md hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto bg-transparent border border-border text-foreground font-medium px-8 py-4 rounded-md hover:bg-secondary transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </button>
            </div>
          </div>

          {/* Details Intro */}
          <div className="mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">What's Included</p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-balance">
              Four Services. One Package.<br />Complete Auction Support.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl font-light">
              Here's exactly what our team does for you, from the moment you shortlist a property to the day you take possession.
            </p>
          </div>

          {/* Service Detail Cards */}
          <div className="flex flex-col gap-8">
            
            {/* S1 */}
            <div className="bg-background border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row group">
              <div className="p-8 md:w-[320px] md:border-r border-border flex flex-col justify-center gap-4 bg-secondary/20">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Included — Step 1</span>
                <div className="w-12 h-12 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-2xl font-medium leading-tight group-hover:text-emerald-400 transition-colors">Due Diligence & Legal Search</h4>
                <div className="inline-flex self-start items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.8px] bg-emerald-400/10 text-emerald-500 px-2.5 py-1 rounded-md border border-emerald-400/20">
                  <Check className="w-3 h-3" /> Included
                </div>
              </div>
              <div className="p-8 md:flex-1">
                <p className="text-base text-muted-foreground font-light leading-relaxed mb-8">
                  Before you bid a single rupee, know exactly what you're buying. Our legal team conducts a thorough investigation of the property and hands you a written clearance report with a clear Go / No-Go recommendation. We surface every risk — so you bid with total confidence.
                </p>
                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    "Full title chain verification — 30 year history",
                    "Encumbrance certificate (EC) check",
                    "SARFAESI notice validity & timeline check",
                    "Legal heir & ownership verification",
                    "Pending dues — society, property tax, utilities",
                    "DRT & litigation search",
                    "Written Due Diligence Report (PDF)",
                    "Clear Go / No-Go recommendation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 py-1 font-light">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* S2 */}
            <div className="bg-background border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row group">
              <div className="p-8 md:w-[320px] md:border-r border-border flex flex-col justify-center gap-4 bg-secondary/20">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Included — Step 2</span>
                <div className="w-12 h-12 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-2xl font-medium leading-tight group-hover:text-blue-400 transition-colors">Auction Bid Management</h4>
                <div className="inline-flex self-start items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.8px] bg-emerald-400/10 text-emerald-500 px-2.5 py-1 rounded-md border border-emerald-400/20">
                  <Check className="w-3 h-3" /> Included
                </div>
              </div>
              <div className="p-8 md:flex-1">
                <p className="text-base text-muted-foreground font-light leading-relaxed mb-8">
                  You set your ceiling price. We handle everything else. Our team registers on the bank's e-auction portal on your behalf, submits the EMD, and bids strategically on auction day — you don't need to be present or monitor anything.
                </p>
                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    "Bank portal registration on your behalf",
                    "EMD submission & all pre-auction docs",
                    "KYC coordination with the bank",
                    "Live auction representation on auction day",
                    "Strategic bidding within your approved limit",
                    "Real-time WhatsApp updates during the auction",
                    "Post-auction payment coordination"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 py-1 font-light">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* S3 */}
            <div className="bg-background border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row group">
              <div className="p-8 md:w-[320px] md:border-r border-border flex flex-col justify-center gap-4 bg-secondary/20">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Included — Step 3</span>
                <div className="w-12 h-12 rounded-lg bg-purple-400/10 border border-purple-400/20 flex items-center justify-center">
                  <Key className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-2xl font-medium leading-tight group-hover:text-purple-400 transition-colors">Possession & Post-Auction Support</h4>
                <div className="inline-flex self-start items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.8px] bg-emerald-400/10 text-emerald-500 px-2.5 py-1 rounded-md border border-emerald-400/20">
                  <Check className="w-3 h-3" /> Included
                </div>
              </div>
              <div className="p-8 md:flex-1">
                <p className="text-base text-muted-foreground font-light leading-relaxed mb-8">
                  Winning the auction is just the beginning. The post-auction process involves complex bank paperwork, registration, and often dealing with occupancy situations. We manage all of it so you actually get the keys to the property you won.
                </p>
                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    "Sale certificate processing with the bank",
                    "Registration & stamp duty coordination",
                    "Mutation & title transfer assistance",
                    "Physical possession support",
                    "Handling occupancy situations",
                    "Utility transfers — electricity, water, society"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 py-1 font-light">
                      <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* S4 */}
            <div className="bg-background border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row group">
              <div className="p-8 md:w-[320px] md:border-r border-border flex flex-col justify-center gap-4 bg-secondary/20">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Included — Step 4</span>
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-yellow-500" />
                </div>
                <h4 className="text-2xl font-medium leading-tight group-hover:text-yellow-500 transition-colors">Funding & Loan Assistance</h4>
                <div className="inline-flex self-start items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.8px] bg-emerald-400/10 text-emerald-500 px-2.5 py-1 rounded-md border border-emerald-400/20">
                  <Check className="w-3 h-3" /> Included
                </div>
              </div>
              <div className="p-8 md:flex-1">
                <p className="text-base text-muted-foreground font-light leading-relaxed mb-8">
                  Auction property financing is complicated — most banks have tight timelines and strict conditions. We work with 12+ partner banks and NBFCs who understand auction properties and can move fast. We handle the entire loan process on your behalf.
                </p>
                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    "Loan eligibility check before you bid",
                    "Access to 12+ partner banks & NBFCs",
                    "Funding for vacant & occupied properties",
                    "EMD financing where available",
                    "Full loan application & document coordination",
                    "Lender follow-up until disbursement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 py-1 font-light">
                      <Check className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-32 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 text-center">Pricing FAQs</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-12 text-center text-balance">Common Questions</h2>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-background border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-medium text-lg text-foreground">{faq.question}</span>
                  <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0", openFaqIndex === index ? "rotate-180 text-orange-400" : "")} />
                </button>
                <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", openFaqIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
                  <div className="px-6 pb-6 pt-0 text-base text-muted-foreground font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-[#0A0F1C] py-24 md:py-32 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.15)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs tracking-[0.2em] uppercase text-orange-300 font-semibold mb-4 block">Ready to Get Started?</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-white text-balance">Book Your Free Consultation</h2>
              <p className="text-white/70 text-lg font-light max-w-lg mx-auto md:mx-0 leading-relaxed">
                30 minutes with our auction experts. We'll walk you through properties matching your criteria and explain exactly how we work.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <button className="bg-white text-[#0A0F1C] font-medium px-8 py-4 rounded-md hover:bg-white/90 transition-colors flex justify-center items-center">
                Book Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="bg-transparent border border-white/20 text-white font-medium px-8 py-4 rounded-md hover:bg-white/10 transition-colors flex justify-center items-center">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
