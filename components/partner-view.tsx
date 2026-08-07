"use client"

import { GraduationCap, Radio, Zap, Palette, Package, IndianRupee, Check, Sprout, Medal, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HighlightedText } from "./highlighted-text"
import { cn } from "@/lib/utils"

export function PartnerView() {
  const scrollToEnrol = () => {
    document.getElementById("enrol")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="w-full flex flex-col pt-32 pb-0 bg-background min-h-screen">
      
      {/* HERO SECTION */}
      <section className="container mx-auto px-6 md:px-12 text-center mb-24 md:mb-32">
        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-500 font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
          Channel Partner Program
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          Become a Certified <br />
          <span className="inline-block whitespace-nowrap"><HighlightedText>Boliwala Partner.</HighlightedText></span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Local knowledge + Boliwala's brand = a powerful business. You bring the ground-level expertise. We give you the tools, training and earnings to build.
        </p>
        <Button size="lg" onClick={scrollToEnrol} className="h-14 px-8 text-[17px] font-medium rounded-xl shadow-lg hover:-translate-y-0.5 transition-all">
          Apply Now — It's Free
        </Button>
      </section>

      {/* BENEFITS SECTION */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">What You Get</p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Everything You Need to Win in Your City</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                title: "Training & Certification",
                description: "Onboarding covering SARFAESI, auction mechanics, legal basics and how to pitch our services. Graduate as a Boliwala Certified Partner.",
                icon: GraduationCap
              },
              {
                title: "Monthly Webinars",
                description: "Exclusive monthly live webinars on auction trends, legal updates and market intelligence. Stay ahead of every other agent in your market.",
                icon: Radio
              },
              {
                title: "Priority Support",
                description: "Dedicated partner helpline, not the general queue. Direct WhatsApp access to our ops team. Faster due diligence turnaround.",
                icon: Zap
              },
              {
                title: "Co-Branded Creatives",
                description: "Professional digital banners, social posts and WhatsApp forwards carrying Boliwala's brand alongside your name and number.",
                icon: Palette
              },
              {
                title: "Branded Collaterals",
                description: "Visiting cards, brochures and area-specific flyers. We design, you distribute — build professional credibility in your locality.",
                icon: Package
              },
              {
                title: "Earn on Every Deal",
                description: "Commission on every service sold to your referrals. Bonus for verified inventory submitted. Performance tiers — no cap on earnings.",
                icon: IndianRupee
              }
            ].map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="flex flex-col gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
                    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 group-hover:text-foreground transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PARTNER TIERS */}
      <section className="bg-secondary/30 py-24 mb-32 border-y border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Partner Tiers</p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Grow With Boliwala</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Start as Associate, unlock Silver and Gold as you build your referral track record.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            
            {/* Tier 1 */}
            <Card className="flex flex-col h-full bg-card hover:shadow-lg transition-all duration-300">
              <CardHeader className="pt-8 px-8 text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Sprout className="w-8 h-8 text-muted-foreground" />
                </div>
                <CardTitle className="text-2xl font-medium tracking-tight mb-2">Associate</CardTitle>
                <CardDescription className="text-[15px]">Sign up + complete training</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8 flex-1 flex flex-col pt-4">
                <ul className="space-y-4 flex-1">
                  {[
                    "Boliwala Certified Partner certificate",
                    "Co-branded digital creatives",
                    "Webinar access",
                    "Base commission on referrals",
                    "Partner WhatsApp group"
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start text-[14.5px]">
                      <Check className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tier 2 */}
            <div className="relative h-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap tracking-wide uppercase z-10 shadow-sm">
                Most Popular
              </div>
              <Card className="flex flex-col h-full bg-card border-2 border-foreground shadow-xl transition-all duration-300 hover:-translate-y-1 relative mt-0">
                <CardHeader className="pt-8 px-8 text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                    <Medal className="w-8 h-8 text-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-medium tracking-tight mb-2 text-foreground">Silver Partner</CardTitle>
                  <CardDescription className="text-[15px]">3 successful client referrals</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8 flex-1 flex flex-col pt-4">
                  <ul className="space-y-4 flex-1">
                    {[
                      "Everything in Associate",
                      "Priority support helpline",
                      "Printed collaterals & brochures",
                      "Area exclusivity in your locality",
                      "Higher commission tier"
                    ].map((feature, i) => (
                      <li key={i} className="flex gap-3 items-start text-[14.5px]">
                        <Check className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5" />
                        <span className="text-foreground/90 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Tier 3 */}
            <Card className="flex flex-col h-full bg-card hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
              <CardHeader className="pt-8 px-8 text-center pb-4 relative z-10">
                <div className="mx-auto w-16 h-16 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Trophy className="w-8 h-8 text-amber-500" />
                </div>
                <CardTitle className="text-2xl font-medium tracking-tight mb-2">Gold Partner</CardTitle>
                <CardDescription className="text-[15px]">10+ successful referrals</CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8 flex-1 flex flex-col pt-4 relative z-10">
                <ul className="space-y-4 flex-1">
                  {[
                    "Everything in Silver",
                    "Dedicated relationship manager",
                    "Premium co-marketing campaigns",
                    "City-level exclusivity",
                    "Top commission rates"
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start text-[14.5px]">
                      <Check className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* ENROLMENT FORM */}
      <section id="enrol" className="container mx-auto px-6 md:px-12 mb-32 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Steps Left Side */}
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Join the Program</p>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Enrol as a Boliwala Partner</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Our partner team will reach out within 24 hours to onboard you.
            </p>
            
            <div className="flex flex-col gap-6">
              {[
                "Fill the enrolment form",
                "Our team calls you within 24 hours",
                "Complete online training & get certified",
                "Start referring clients & earning commissions"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-foreground shrink-0">{i + 1}</div>
                  <span className="text-base text-foreground/90 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Box */}
          <div className="bg-card rounded-[2rem] border border-border p-8 md:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            
            <h3 className="text-2xl font-medium tracking-tight text-foreground mb-2 relative z-10">Partner Enrolment</h3>
            <p className="text-sm text-muted-foreground mb-8 relative z-10">Free to join. No fees. No commitments.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                <input type="text" placeholder="Rajesh Kumar" className="h-12 px-4 rounded-xl border border-border bg-background focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">WhatsApp Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="h-12 px-4 rounded-xl border border-border bg-background focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all text-sm" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                <input type="email" placeholder="you@email.com" className="h-12 px-4 rounded-xl border border-border bg-background focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Profession</label>
                <select className="h-12 px-4 rounded-xl border border-border bg-background focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_16px_center] pr-10">
                  <option>Real Estate Agent / Broker</option>
                  <option>Property Lawyer</option>
                  <option>Home Loan DSA</option>
                  <option>Finance Broker</option>
                  <option>Retired Bank Officer</option>
                  <option>Property Consultant</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">State</label>
                <select className="h-12 px-4 rounded-xl border border-border bg-background focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_16px_center] pr-10">
                  <option>Maharashtra</option>
                  <option>Delhi / NCR</option>
                  <option>Karnataka</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Gujarat</option>
                  <option>Rajasthan</option>
                  <option>Uttar Pradesh</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Preferred City</label>
                <input type="text" placeholder="e.g. Mumbai, Pune..." className="h-12 px-4 rounded-xl border border-border bg-background focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all text-sm" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Localities to Cover</label>
                <input type="text" placeholder="e.g. Andheri, Bandra, Malad, Borivali" className="h-12 px-4 rounded-xl border border-border bg-background focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all text-sm" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Tell Us About Yourself (Optional)</label>
                <textarea placeholder="Your experience, existing network, why Boliwala..." className="min-h-[100px] p-4 rounded-xl border border-border bg-background focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all text-sm resize-y"></textarea>
              </div>
            </div>
            
            <Button size="lg" className="w-full h-14 mt-8 text-[15px] font-medium rounded-xl relative z-10">
              Submit Application &rarr;
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4 relative z-10">
              Our team will contact you within 24 hours.
            </p>
          </div>
          
        </div>
      </section>

    </div>
  )
}
