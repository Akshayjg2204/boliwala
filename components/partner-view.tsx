"use client"

import { GraduationCap, Radio, Zap, Palette, Package, IndianRupee, Check, Sprout, Medal, Trophy } from "lucide-react"

export function PartnerView() {
  const scrollToEnrol = () => {
    document.getElementById("enrol")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="w-full flex flex-col pt-32 pb-0 bg-background">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0A0F1C] py-20 md:py-32 rounded-3xl mx-4 md:mx-6 mb-8 mt-4 shadow-2xl">
        <div className="absolute top-[-40%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(27,79,216,0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col items-center md:items-start">
            <span className="text-white/45 text-xs font-bold tracking-[1.2px] uppercase mb-4 inline-block">
              Channel Partner Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-display">
              Become a Certified<br />
              <em className="text-amber-300 not-italic">Boliwala Partner.</em>
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Local knowledge + Boliwala's brand = a powerful business. You bring the ground-level expertise. We give you the tools, training and earnings to build.
            </p>
            <button 
              onClick={scrollToEnrol}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:-translate-y-0.5"
            >
              Apply Now — It's Free
            </button>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center md:text-left mb-16">
            <span className="text-[rgb(251,146,60)] text-xs font-bold tracking-[1.2px] uppercase mb-4 inline-block">
              What You Get
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
              Everything You Need to Win in Your City
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-display">Training & Certification</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Onboarding covering SARFAESI, auction mechanics, legal basics and how to pitch our services. Graduate as a <strong className="text-foreground">Boliwala Certified Partner</strong> with a formal certificate.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-display">Monthly Webinars</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Exclusive monthly live webinars on auction trends, legal updates and market intelligence. Stay ahead of every other agent in your market.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-display">Priority Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dedicated partner helpline, not the general queue. Direct WhatsApp access to our ops team. Faster due diligence turnaround for your referred properties.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-display">Co-Branded Creatives</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional digital banners, social posts and WhatsApp forwards carrying Boliwala's brand alongside your name and number. Ready to share.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-display">Branded Collaterals</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Visiting cards, brochures and area-specific flyers. We design, you distribute — build professional credibility in your locality.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <IndianRupee className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-display">Earn on Every Deal</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Commission on every service sold to your referrals. Bonus for verified inventory submitted. Performance tiers — no cap on earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER TIERS */}
      <section className="py-20 bg-background border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center md:text-left mb-16 max-w-2xl">
            <span className="text-[rgb(251,146,60)] text-xs font-bold tracking-[1.2px] uppercase mb-4 inline-block">
              Partner Tiers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Grow With Boliwala
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Start as Associate, unlock Silver and Gold as you build your referral track record.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Tier 1 */}
            <div className="bg-background rounded-2xl p-8 border-2 border-border text-center relative shadow-sm">
              <div className="flex justify-center mb-4 text-emerald-500">
                <Sprout className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1 font-display">Associate</h3>
              <div className="text-sm text-muted-foreground mb-6">Sign up + complete training</div>
              <ul className="text-left space-y-3">
                <li className="flex items-start gap-3 text-sm text-foreground/80 pb-3 border-b border-border/50">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Boliwala Certified Partner certificate
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80 pb-3 border-b border-border/50">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Co-branded digital creatives
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80 pb-3 border-b border-border/50">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Webinar access
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80 pb-3 border-b border-border/50">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Base commission on referrals
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Partner WhatsApp group
                </li>
              </ul>
            </div>

            {/* Tier 2 (Featured) */}
            <div className="bg-background rounded-2xl p-8 border-2 border-blue-600 text-center relative shadow-[0_8px_32px_rgba(37,99,235,0.12)] transform md:-translate-y-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-full whitespace-nowrap uppercase tracking-wider">
                ⭐ Most Partners Reach This
              </div>
              <div className="flex justify-center mb-4 text-slate-400">
                <Medal className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1 font-display">Silver Partner</h3>
              <div className="text-sm text-muted-foreground mb-6">3 successful client referrals</div>
              <ul className="text-left space-y-3">
                <li className="flex items-start gap-3 text-sm text-foreground/80 pb-3 border-b border-border/50">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Everything in Associate
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80 pb-3 border-b border-border/50">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Priority support helpline
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80 pb-3 border-b border-border/50">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Printed collaterals & brochures
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80 pb-3 border-b border-border/50">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Area exclusivity in your locality
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Higher commission tier
                </li>
              </ul>
            </div>

            {/* Tier 3 */}
            <div className="bg-background rounded-2xl p-8 border-2 border-border text-center relative shadow-sm">
              <div className="flex justify-center mb-4 text-amber-500">
                <Trophy className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1 font-display">Gold Partner</h3>
              <div className="text-sm text-muted-foreground mb-6">10+ successful referrals</div>
              <ul className="text-left space-y-3">
                <li className="flex items-start gap-3 text-sm text-foreground/80 pb-3 border-b border-border/50">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Everything in Silver
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80 pb-3 border-b border-border/50">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Dedicated relationship manager
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80 pb-3 border-b border-border/50">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Premium co-marketing campaigns
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80 pb-3 border-b border-border/50">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> City-level exclusivity
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Top commission rates
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ENROLMENT FORM */}
      <section id="enrol" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Steps Left Side */}
            <div>
              <span className="text-[rgb(251,146,60)] text-xs font-bold tracking-[1.2px] uppercase mb-4 inline-block">
                Join the Program
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
                Enrol as a Boliwala Partner
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Our partner team will reach out within 24 hours to onboard you.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-600/30 flex items-center justify-center text-sm font-extrabold text-blue-600 font-display shrink-0">1</div>
                  <span className="text-base text-foreground/90 font-medium">Fill the enrolment form</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-600/30 flex items-center justify-center text-sm font-extrabold text-blue-600 font-display shrink-0">2</div>
                  <span className="text-base text-foreground/90 font-medium">Our team calls you within 24 hours</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-600/30 flex items-center justify-center text-sm font-extrabold text-blue-600 font-display shrink-0">3</div>
                  <span className="text-base text-foreground/90 font-medium">Complete online training & get certified</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-600/30 flex items-center justify-center text-sm font-extrabold text-blue-600 font-display shrink-0">4</div>
                  <span className="text-base text-foreground/90 font-medium">Start referring clients & earning commissions</span>
                </div>
              </div>
            </div>

            {/* Form Box */}
            <div className="bg-background rounded-3xl border border-border p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2 font-display">Partner Enrolment</h3>
              <p className="text-sm text-muted-foreground mb-8">Free to join. No fees. No commitments.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <input type="text" placeholder="Rajesh Kumar" className="h-12 px-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">WhatsApp Number</label>
                  <input type="tel" placeholder="+91 98765 43210" className="h-12 px-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <input type="email" placeholder="you@email.com" className="h-12 px-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Profession</label>
                  <select className="h-12 px-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_16px_center] pr-10">
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
                  <select className="h-12 px-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_16px_center] pr-10">
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
                  <input type="text" placeholder="e.g. Mumbai, Pune..." className="h-12 px-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Localities to Cover</label>
                  <input type="text" placeholder="e.g. Andheri, Bandra, Malad, Borivali" className="h-12 px-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Tell Us About Yourself (Optional)</label>
                  <textarea placeholder="Your experience, existing network, why Boliwala..." className="min-h-[100px] p-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm resize-y"></textarea>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-xl mt-8 transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:-translate-y-0.5">
                Submit Application &rarr;
              </button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Our team will contact you within 24 hours.
              </p>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  )
}
