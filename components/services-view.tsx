"use client"

import { useState, useEffect, useRef } from "react"
import { Check, X, Search, Gavel, Key, Landmark, ArrowRight, ArrowDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HighlightedText } from "./highlighted-text"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Due Diligence & Legal Search",
    description: "Our legal team checks the title, verifies ownership, and identifies any encumbrances or dues. You receive a written clearance report before deciding to bid.",
    icon: Search,
  },
  {
    title: "Bid Management",
    description: "We handle the entire auction process. We register you on the portal, deposit the EMD on your behalf, and bid strategically within your agreed ceiling price.",
    icon: Gavel,
  },
  {
    title: "Possession Support",
    description: "Winning is only half the battle. We assist with obtaining the sale certificate, property registration, mutation, and taking physical possession of the asset.",
    icon: Key,
  },
  {
    title: "Loan Assistance",
    description: "Need funding? We arrange post-auction financing through our network of NBFC and bank partners, even for occupied properties.",
    icon: Landmark,
  },
]

export function ServicesView() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full flex flex-col pt-32 pb-0 bg-background min-h-screen">

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 md:px-12 text-center mb-24 md:mb-32">
        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-500 font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
          <Check className="w-3.5 h-3.5" />
          Simple, transparent pricing
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          Browse for free. <br />
          <span className="inline-block">Pay only when <HighlightedText>you're serious.</HighlightedText></span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Start with unlimited free listings. Upgrade to unlock every detail, or hand the whole auction to our experts — you only pay a success fee if you win.
        </p>
        <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-500 flex flex-wrap justify-center gap-2 items-center">
          <span>✓ No signup needed to browse</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ Full address always visible</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ ₹0 to start</span>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {/* FREE */}
          <div ref={(el) => { itemRefs.current[10] = el }} data-index={10}>
            <Card className={cn(
              "flex flex-col h-full relative transition-all duration-700 hover:shadow-xl hover:-translate-y-2 border border-border/50 bg-card",
              visibleItems.includes(10) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )} style={{ transitionDelay: "100ms" }}>
              <CardHeader className="pt-8 px-8">
                <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground font-bold">Free Account</CardTitle>
                <CardDescription className="min-h-[3rem] text-[15px] mt-2 leading-relaxed">
                  Everything you need to discover and shortlist auction properties.
                </CardDescription>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-2xl font-bold">₹</span>
                  <span className="text-6xl font-medium tracking-tight">0</span>
                  <span className="text-muted-foreground font-medium ml-2 text-sm">forever</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3 font-medium">5 free credits on signup</p>
              </CardHeader>
              <CardContent className="px-8 pb-8 flex-1 flex flex-col">
                <Button variant="outline" size="lg" className="w-full mb-8 h-12 font-medium">Create Free Account</Button>
                <ul className="space-y-4 mb-4 flex-1">
                  {[
                    { text: "Unlimited property listings & search", included: true },
                    { text: "Full property address always visible", included: true },
                    { text: "Reserve price, EMD & auction dates", included: true },
                    { text: "Property alerts by email", included: true },
                    { text: <span className="font-semibold text-foreground">5 credits</span>, suffix: " to unlock hidden details", included: true },
                    { text: "Unlimited detail unlocking", included: false },
                    { text: "Expert auction support", included: false },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-[14.5px]">
                      {item.included ? (
                        <Check className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 shrink-0 text-muted-foreground/30 mt-0.5" />
                      )}
                      <span className={item.included ? "text-foreground/90" : "text-muted-foreground/60"}>
                        {item.text}{item.suffix}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* ANNUAL MEMBER */}
          <div ref={(el) => { itemRefs.current[11] = el }} data-index={11}>
            <Card className={cn(
              "flex flex-col h-full relative border-2 border-primary shadow-xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 bg-card",
              visibleItems.includes(11) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )} style={{ transitionDelay: "200ms" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap tracking-wide uppercase">
                Most Popular
              </div>
              <CardHeader className="pt-8 px-8">
                <CardTitle className="text-sm uppercase tracking-wider text-primary font-bold">Annual Member</CardTitle>
                <CardDescription className="min-h-[3rem] text-[15px] mt-2 leading-relaxed text-foreground/70">
                  Unlock every detail on every property, as many as you like.
                </CardDescription>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-2xl font-bold">₹</span>
                  <span className="text-6xl font-medium tracking-tight">999</span>
                  <span className="text-muted-foreground font-medium ml-2 text-sm">/ year</span>
                </div>
                <p className="text-sm text-primary mt-3 font-medium">Less than ₹3 a day</p>
              </CardHeader>
              <CardContent className="px-8 pb-8 flex-1 flex flex-col">
                <Button size="lg" className="w-full mb-8 h-12 font-medium">Get Annual Membership</Button>
                <ul className="space-y-4 mb-4 flex-1">
                  {[
                    { text: "Everything in Free, plus:", included: true, bold: true },
                    { text: <span className="font-semibold text-foreground">Unlimited</span>, suffix: " unlocking of all hidden fields", included: true },
                    { text: "Flat number, floor & inspection details", included: true },
                    { text: "Authorised officer & bank contact info", included: true },
                    { text: "Priority email & WhatsApp alerts", included: true },
                    { text: "Save unlimited shortlists", included: true },
                    { text: "Hands-on auction management", included: false },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-[14.5px]">
                      {item.included ? (
                        <Check className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 shrink-0 text-muted-foreground/30 mt-0.5" />
                      )}
                      <span className={item.included ? (item.bold ? "font-semibold text-foreground" : "text-foreground/90") : "text-muted-foreground/60"}>
                        {item.text}{item.suffix}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* FULL SERVICE */}
          <div ref={(el) => { itemRefs.current[12] = el }} data-index={12}>
            <div className={cn(
              "flex flex-col h-full relative transition-all duration-700 hover:-translate-y-2",
              visibleItems.includes(12) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )} style={{ transitionDelay: "300ms" }}>
              
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap tracking-wide uppercase z-20 shadow-sm">
                Won only if you win
              </div>

              <Card className="flex flex-col h-full relative bg-foreground text-background shadow-xl hover:shadow-2xl border-transparent overflow-hidden z-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                
                <CardHeader className="pt-8 px-8 relative z-10">
                <CardTitle className="text-sm uppercase tracking-wider text-background/60 font-bold">Full Service</CardTitle>
                <CardDescription className="min-h-[3rem] text-[15px] mt-2 leading-relaxed text-background/80">
                  Found the one? Our experts handle the entire auction, end to end.
                </CardDescription>
                <div className="mt-6 flex items-baseline gap-1 text-background">
                  <span className="text-2xl font-bold text-background/80">₹</span>
                  <span className="text-6xl font-medium tracking-tight">9,999</span>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-amber-600/20 text-amber-500 font-bold text-xs px-3 py-1.5 rounded-lg mt-3 w-fit">
                  + 1% success fee — only if you win
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 flex-1 flex flex-col relative z-10">
                <Button size="lg" className="w-full mb-8 h-12 font-medium bg-amber-600 hover:bg-amber-700 text-white">Hire Boliwala</Button>
                <ul className="space-y-4 mb-4 flex-1">
                  {[
                    { text: "Everything in Annual, plus:", included: true, bold: true },
                    { text: <span className="font-semibold text-background">Title Search & Verification</span>, suffix: " report", included: true },
                    { text: <span className="font-semibold text-background">Auction Management</span>, suffix: " — bidding handled for you", included: true },
                    { text: <span className="font-semibold text-background">Possession Support</span>, suffix: " after you win", included: true },
                    { text: "Loan & funding assistance", included: true },
                    { text: "Dedicated relationship manager", included: true },
                    { text: <span className="font-semibold text-amber-500">1% success fee</span>, suffix: " — pay nothing extra unless you win", included: true },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-[14.5px]">
                      <Check className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                      <span className={item.bold ? "font-semibold text-background" : "text-background/80"}>
                        {item.text}{item.suffix}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED IN FULL SERVICE (The 4-step process) */}
      <section className="container mx-auto px-6 md:px-12 mb-32 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Inside Full Service</p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">What does the experts handle?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">When you opt for our Full Service package, we manage every step of the journey.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  data-index={index}
                >
                  <div
                    className={`flex flex-col gap-4 group transition-all duration-700 ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
                      <Icon className="w-6 h-6 text-muted-foreground group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium mb-3 group-hover:text-foreground transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-[17px]">{service.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="container mx-auto px-6 md:px-12 mb-32 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Compare every plan</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From free browsing to a fully managed auction win — see exactly what's included.</p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[800px] border border-border/50 rounded-2xl bg-card shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 border-b border-border/50 bg-secondary/30 text-xs font-bold uppercase tracking-widest text-muted-foreground w-1/3">Feature</th>
                  <th className="p-6 border-b border-border/50 bg-secondary/30 w-[22%] text-center">
                    <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Free</div>
                    <div className="text-xl font-medium text-foreground mt-2">₹0</div>
                  </th>
                  <th className="p-6 border-b border-border/50 bg-secondary/30 w-[22%] text-center">
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">Annual Member</div>
                    <div className="text-xl font-medium text-primary mt-2">₹999 <span className="text-sm font-normal text-muted-foreground">/ year</span></div>
                  </th>
                  <th className="p-6 border-b border-border/50 bg-secondary/30 w-[22%] text-center">
                    <div className="text-sm font-bold uppercase tracking-wider text-amber-600">Full Service</div>
                    <div className="text-xl font-medium text-amber-600 mt-2">₹9,999 <span className="text-sm font-normal text-muted-foreground">+ 1%</span></div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                <tr className="bg-secondary/10">
                  <td colSpan={4} className="p-4 px-6 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Browsing & Discovery</td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Property listings & search</div>
                    <div className="text-[13px] text-muted-foreground mt-1">Across 140+ cities</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center font-medium">Unlimited</td>
                  <td className="p-6 border-b border-border/50 text-center font-medium text-primary">Unlimited</td>
                  <td className="p-6 border-b border-border/50 text-center font-medium text-amber-600">Unlimited</td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Full property address</div>
                    <div className="text-[13px] text-muted-foreground mt-1">Never paywalled</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Reserve price, EMD & dates</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Property alerts</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center font-medium text-muted-foreground">Email</td>
                  <td className="p-6 border-b border-border/50 text-center font-medium text-primary">Email + WhatsApp</td>
                  <td className="p-6 border-b border-border/50 text-center font-medium text-amber-600">Priority</td>
                </tr>

                <tr className="bg-secondary/10">
                  <td colSpan={4} className="p-4 px-6 text-[11px] font-bold uppercase tracking-widest text-muted-foreground border-t border-border/50">Unlocking Hidden Details</td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Credits to unlock details</div>
                    <div className="text-[13px] text-muted-foreground mt-1">Flat no., floor, inspection, officer contact</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center font-medium">5 credits</td>
                  <td className="p-6 border-b border-border/50 text-center font-medium text-primary">Unlimited</td>
                  <td className="p-6 border-b border-border/50 text-center font-medium text-amber-600">Unlimited</td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Flat number & floor</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center font-medium text-muted-foreground">1 credit each</td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Inspection date & time</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center font-medium text-muted-foreground">1 credit</td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Authorised officer & bank contact</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center font-medium text-muted-foreground">1 credit</td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>

                <tr className="bg-secondary/10">
                  <td colSpan={4} className="p-4 px-6 text-[11px] font-bold uppercase tracking-widest text-muted-foreground border-t border-border/50">Expert Auction Service</td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Title Search & Verification</div>
                    <div className="text-[13px] text-muted-foreground mt-1">Legal check on ownership & encumbrances</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/20" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/20" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Auction Management</div>
                    <div className="text-[13px] text-muted-foreground mt-1">We register, deposit EMD & bid for you</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/20" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/20" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Possession Support</div>
                    <div className="text-[13px] text-muted-foreground mt-1">Help taking physical possession after winning</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/20" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/20" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Loan & funding assistance</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/20" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/20" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Dedicated relationship manager</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/20" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/20" /></td>
                  <td className="p-6 border-b border-border/50 text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/20 transition-colors">
                  <td className="p-6 border-b border-border/50">
                    <div className="font-medium text-foreground">Success fee</div>
                    <div className="text-[13px] text-muted-foreground mt-1">Charged only on a winning bid</div>
                  </td>
                  <td className="p-6 border-b border-border/50 text-center text-muted-foreground">—</td>
                  <td className="p-6 border-b border-border/50 text-center text-muted-foreground">—</td>
                  <td className="p-6 border-b border-border/50 text-center font-medium text-amber-600">1% of winning bid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="container mx-auto px-6 md:px-12 max-w-3xl mb-32">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Common Questions</h2>
        </div>
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-border/50 rounded-2xl bg-card px-6 py-2 data-[state=open]:shadow-sm transition-all">
            <AccordionTrigger className="text-[17px] font-medium hover:no-underline">Is the ₹9,999 package for all my auctions?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-[16px] leading-relaxed pt-2 pb-4">
              No — the Full Service package covers <span className="font-semibold text-foreground">one specific auction property</span>. It includes the title search, auction management, and possession support for that single property. If you want us to handle a second property, you would need a separate package.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border border-border/50 rounded-2xl bg-card px-6 py-2 data-[state=open]:shadow-sm transition-all">
            <AccordionTrigger className="text-[17px] font-medium hover:no-underline">When is the 1% success fee charged?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-[16px] leading-relaxed pt-2 pb-4">
              Only if you actually win the auction. The 1% is calculated on your final winning bid amount. If you don't win, you pay nothing beyond the initial ₹9,999 package fee.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border border-border/50 rounded-2xl bg-card px-6 py-2 data-[state=open]:shadow-sm transition-all">
            <AccordionTrigger className="text-[17px] font-medium hover:no-underline">What's the difference between credits and the annual membership?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-[16px] leading-relaxed pt-2 pb-4">
              Every free account gets 5 credits, and each credit unlocks the hidden fields on one property. The ₹999 annual membership removes the limit entirely — unlock as many properties as you want for a full year.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border border-border/50 rounded-2xl bg-card px-6 py-2 data-[state=open]:shadow-sm transition-all">
            <AccordionTrigger className="text-[17px] font-medium hover:no-underline">Do I need to pay anything just to browse?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-[16px] leading-relaxed pt-2 pb-4">
              Never. Browsing listings, searching, viewing the full address, and requesting a callback are all completely free and don't even require an account.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-6 md:px-12 max-w-5xl mb-32">
        <div className="bg-foreground rounded-[2rem] p-12 md:p-20 text-center text-background shadow-2xl relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 relative z-10 text-balance">Ready to bid with confidence?</h2>
          <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light relative z-10">
            Let our experts handle the complexities of bank auctions while you secure the best property deals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-[17px] h-14 px-8 font-medium rounded-xl" asChild>
              <Link href="/signup">Start with a Free Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-background/20 text-background hover:bg-background/10 hover:text-background text-[17px] h-14 px-8 font-medium rounded-xl" asChild>
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
