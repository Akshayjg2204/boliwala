"use client"

import { Bell, Mail, Smartphone, ArrowRight } from "lucide-react"
import { HighlightedText } from "./highlighted-text"

export function AlertsSection() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center justify-center p-3 bg-primary-foreground/10 rounded-full mb-8">
              <Bell className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-6">
              Never miss a <HighlightedText>lucrative</HighlightedText> auction again.
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8 max-w-lg">
              Set up free alerts and be the first to know when a property matching your criteria goes under the hammer.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Instant alerts for new properties in your city.",
                "Updates on price drops or auction cancellations.",
                "Reminders 24 hours before the auction starts.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-primary-foreground/80">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background/5 border border-primary-foreground/10 p-8 md:p-10 backdrop-blur-sm">
            <h3 className="text-2xl font-medium mb-6">Set Up Free Alerts</h3>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-primary-foreground/70 mb-2 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/40" />
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full bg-background/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 pl-11 pr-4 py-3 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-primary-foreground/70 mb-2 uppercase tracking-wider">WhatsApp Number</label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/40" />
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    className="w-full bg-background/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 pl-11 pr-4 py-3 focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button className="w-full bg-orange-500 text-white font-medium py-4 px-6 hover:bg-orange-600 transition-colors flex justify-center items-center gap-2 group">
                  Subscribe to Alerts
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <p className="text-xs text-primary-foreground/50 text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
