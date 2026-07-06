"use client"

import { ShieldCheck, CalendarClock, EyeOff, Scale } from "lucide-react"

const trustItems = [
  {
    title: "100% Verified",
    description: "Direct bank listings",
    icon: ShieldCheck,
  },
  {
    title: "Daily Updated",
    description: "Real-time auction data",
    icon: CalendarClock,
  },
  {
    title: "Free to Browse",
    description: "Full address visibility",
    icon: EyeOff,
  },
  {
    title: "Due Diligence",
    description: "Legal & physical checks",
    icon: Scale,
  },
]

export function TrustBanner() {
  return (
    <section className="border-b border-border bg-background py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                <div className="bg-secondary p-3">
                  <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
