import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, X } from "lucide-react"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-500 font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
          <Check className="w-3.5 h-3.5" />
          Simple, transparent pricing
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Browse for free.<br />Pay only when you're serious.
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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

      {/* Pricing Cards */}
      <section className="px-4 max-w-6xl mx-auto mb-20 grid md:grid-cols-3 gap-6 items-stretch">
        {/* FREE */}
        <Card className="flex flex-col relative transition-all hover:shadow-lg hover:-translate-y-1 duration-200 border">
          <CardHeader>
            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Free Account</CardTitle>
            <CardDescription className="min-h-[3rem]">Everything you need to discover and shortlist auction properties.</CardDescription>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-2xl font-bold">₹</span>
              <span className="text-5xl font-extrabold tracking-tighter">0</span>
              <span className="text-muted-foreground font-medium ml-1">forever</span>
            </div>
            <p className="text-sm text-muted-foreground min-h-[1.5rem] mt-1">5 free credits on signup</p>
          </CardHeader>
          <CardContent className="flex-1">
            <Button variant="outline" className="w-full mb-6">Create Free Account</Button>
            <ul className="space-y-3">
              {[
                { text: "Unlimited property listings & search", included: true },
                { text: "Full property address always visible", included: true },
                { text: "Reserve price, EMD & auction dates", included: true },
                { text: "Property alerts by email", included: true },
                { text: <span className="font-semibold text-foreground">5 credits</span>, suffix: " to unlock hidden details", included: true },
                { text: "Unlimited detail unlocking", included: false },
                { text: "Expert auction support", included: false },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-sm">
                  {item.included ? (
                    <Check className="w-5 h-5 shrink-0 text-emerald-500" />
                  ) : (
                    <X className="w-5 h-5 shrink-0 text-muted-foreground/40" />
                  )}
                  <span className={item.included ? "" : "text-muted-foreground"}>
                    {item.text}{item.suffix}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* ANNUAL MEMBER */}
        <Card className="flex flex-col relative border-2 border-primary shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 duration-200">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap tracking-wide">
            Most Popular
          </div>
          <CardHeader>
            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Annual Member</CardTitle>
            <CardDescription className="min-h-[3rem]">Unlock every detail on every property, as many as you like.</CardDescription>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-2xl font-bold">₹</span>
              <span className="text-5xl font-extrabold tracking-tighter">999</span>
              <span className="text-muted-foreground font-medium ml-1">/ year</span>
            </div>
            <p className="text-sm text-muted-foreground min-h-[1.5rem] mt-1">Less than ₹3 a day</p>
          </CardHeader>
          <CardContent className="flex-1">
            <Button className="w-full mb-6">Get Annual Membership</Button>
            <ul className="space-y-3">
              {[
                { text: "Everything in Free, plus:", included: true, bold: true },
                { text: <span className="font-semibold text-foreground">Unlimited</span>, suffix: " unlocking of all hidden fields", included: true },
                { text: "Flat number, floor & inspection details", included: true },
                { text: "Authorised officer & bank contact info", included: true },
                { text: "Priority email & WhatsApp alerts", included: true },
                { text: "Save unlimited shortlists", included: true },
                { text: "Hands-on auction management", included: false },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-sm">
                  {item.included ? (
                    <Check className="w-5 h-5 shrink-0 text-emerald-500" />
                  ) : (
                    <X className="w-5 h-5 shrink-0 text-muted-foreground/40" />
                  )}
                  <span className={`${item.included ? "" : "text-muted-foreground"} ${item.bold ? "font-semibold" : ""}`}>
                    {item.text}{item.suffix}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* FULL SERVICE */}
        <Card className="flex flex-col relative bg-slate-900 border-transparent text-white transition-all hover:shadow-xl hover:-translate-y-1 duration-200">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap tracking-wide">
            Won only if you win
          </div>
          <CardHeader>
            <CardTitle className="text-sm uppercase tracking-wider text-slate-400">Full Service</CardTitle>
            <CardDescription className="text-slate-300 min-h-[3rem]">Found the one? Our experts handle the entire auction, end to end.</CardDescription>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-2xl font-bold">₹</span>
              <span className="text-5xl font-extrabold tracking-tighter">9,999</span>
            </div>
            <p className="text-sm text-slate-400 min-h-[1.5rem] mt-1">Per auction — one specific property</p>
            <div className="inline-flex items-center gap-1.5 bg-amber-600/20 text-amber-500 font-bold text-xs px-3 py-1.5 rounded-lg mt-3 w-fit">
              + 1% success fee — only if you win
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <Button className="w-full mb-6 bg-amber-600 hover:bg-amber-700 text-white border-0">Hire Boliwala</Button>
            <ul className="space-y-3">
              {[
                { text: "Everything in Annual, plus:", included: true, bold: true },
                { text: <span className="font-semibold text-white">Title Search & Verification</span>, suffix: " report", included: true },
                { text: <span className="font-semibold text-white">Auction Management</span>, suffix: " — bidding handled for you", included: true },
                { text: <span className="font-semibold text-white">Possession Support</span>, suffix: " after you win", included: true },
                { text: "Loan & funding assistance", included: true },
                { text: "Dedicated relationship manager", included: true },
                { text: <span className="font-semibold text-white">1% success fee</span>, suffix: " — pay nothing extra unless you win", included: true },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-sm">
                  <Check className="w-5 h-5 shrink-0 text-emerald-400" />
                  <span className={item.bold ? "font-semibold" : "text-slate-200"}>
                    {item.text}{item.suffix}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Comparison Table */}
      <section className="px-4 max-w-5xl mx-auto mb-20 overflow-hidden">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-3">Compare every plan</h2>
          <p className="text-muted-foreground text-lg">From free browsing to a fully managed auction win — see exactly what's included.</p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="min-w-[700px] border rounded-xl bg-card shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b bg-muted/30 text-xs font-bold uppercase tracking-wider text-muted-foreground w-1/3">Feature</th>
                  <th className="p-4 border-b bg-muted/30 w-[22%] text-center">
                    <div className="text-sm font-bold">Free</div>
                    <div className="text-xs font-medium text-muted-foreground mt-1">₹0</div>
                  </th>
                  <th className="p-4 border-b bg-muted/30 w-[22%] text-center">
                    <div className="text-base font-extrabold text-primary">Annual Member</div>
                    <div className="text-xs font-medium text-muted-foreground mt-1">₹999 / year</div>
                  </th>
                  <th className="p-4 border-b bg-muted/30 w-[22%] text-center">
                    <div className="text-base font-extrabold text-amber-600">Full Service</div>
                    <div className="text-xs font-medium text-muted-foreground mt-1">₹9,999 + 1%</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="bg-muted/10">
                  <td colSpan={4} className="p-3 px-4 text-xs font-bold uppercase tracking-wider text-foreground">Browsing & Discovery</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Property listings & search</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Across 140+ cities</div>
                  </td>
                  <td className="p-4 border-b text-center font-semibold">Unlimited</td>
                  <td className="p-4 border-b text-center font-semibold">Unlimited</td>
                  <td className="p-4 border-b text-center font-semibold">Unlimited</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Full property address</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Never paywalled</div>
                  </td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Reserve price, EMD & dates</div>
                  </td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Property alerts</div>
                  </td>
                  <td className="p-4 border-b text-center font-medium text-muted-foreground">Email</td>
                  <td className="p-4 border-b text-center font-bold text-primary">Email + WhatsApp</td>
                  <td className="p-4 border-b text-center font-bold text-amber-600">Priority</td>
                </tr>

                <tr className="bg-muted/10">
                  <td colSpan={4} className="p-3 px-4 text-xs font-bold uppercase tracking-wider text-foreground border-t">Unlocking Hidden Details</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Credits to unlock details</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Flat no., floor, inspection, officer contact</div>
                  </td>
                  <td className="p-4 border-b text-center font-semibold">5 credits</td>
                  <td className="p-4 border-b text-center font-bold text-primary">Unlimited</td>
                  <td className="p-4 border-b text-center font-bold text-amber-600">Unlimited</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Flat number & floor</div>
                  </td>
                  <td className="p-4 border-b text-center font-medium text-muted-foreground">1 credit each</td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Inspection date & time</div>
                  </td>
                  <td className="p-4 border-b text-center font-medium text-muted-foreground">1 credit</td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Authorised officer & bank contact</div>
                  </td>
                  <td className="p-4 border-b text-center font-medium text-muted-foreground">1 credit</td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>

                <tr className="bg-muted/10">
                  <td colSpan={4} className="p-3 px-4 text-xs font-bold uppercase tracking-wider text-foreground border-t">Expert Auction Service</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Title Search & Verification</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Legal check on ownership & encumbrances</div>
                  </td>
                  <td className="p-4 border-b text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/30" /></td>
                  <td className="p-4 border-b text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/30" /></td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Auction Management</div>
                    <div className="text-xs text-muted-foreground mt-0.5">We register, deposit EMD & bid for you</div>
                  </td>
                  <td className="p-4 border-b text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/30" /></td>
                  <td className="p-4 border-b text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/30" /></td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Possession Support</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Help taking physical possession after winning</div>
                  </td>
                  <td className="p-4 border-b text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/30" /></td>
                  <td className="p-4 border-b text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/30" /></td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Loan & funding assistance</div>
                  </td>
                  <td className="p-4 border-b text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/30" /></td>
                  <td className="p-4 border-b text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/30" /></td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Dedicated relationship manager</div>
                  </td>
                  <td className="p-4 border-b text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/30" /></td>
                  <td className="p-4 border-b text-center"><X className="w-5 h-5 mx-auto text-muted-foreground/30" /></td>
                  <td className="p-4 border-b text-center"><Check className="w-5 h-5 mx-auto text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="p-4 border-b">
                    <div className="font-semibold text-[15px]">Success fee</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Charged only on a winning bid</div>
                  </td>
                  <td className="p-4 border-b text-center text-muted-foreground">—</td>
                  <td className="p-4 border-b text-center text-muted-foreground">—</td>
                  <td className="p-4 border-b text-center font-bold text-amber-600">1% of winning bid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-extrabold text-center mb-8">Pricing questions</h2>
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-3">
          <AccordionItem value="item-1" className="border rounded-lg bg-card px-4">
            <AccordionTrigger className="text-[15px] font-semibold hover:no-underline">Is the ₹9,999 package for all my auctions?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed">
              No — the Full Service package covers <span className="font-bold text-foreground">one specific auction property</span>. It includes the title search, auction management, and possession support for that property. If you want us to handle a second property, you'd take a separate package for it.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border rounded-lg bg-card px-4">
            <AccordionTrigger className="text-[15px] font-semibold hover:no-underline">When is the 1% success fee charged?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed">
              Only if you actually win the auction. The 1% is calculated on your winning bid amount. If you don't win, you pay nothing beyond the ₹9,999 package fee.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border rounded-lg bg-card px-4">
            <AccordionTrigger className="text-[15px] font-semibold hover:no-underline">What's the difference between credits and the annual membership?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed">
              Every free account gets 5 credits, and each credit unlocks the hidden fields on one property. The ₹999 annual membership removes the limit entirely — unlock as many properties as you want for a full year.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border rounded-lg bg-card px-4">
            <AccordionTrigger className="text-[15px] font-semibold hover:no-underline">Do I need to pay anything just to browse?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed">
              Never. Browsing listings, searching, viewing the full address, and requesting a callback are all completely free and don't even require an account.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="px-4 max-w-4xl mx-auto mb-20">
        <div className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-10 md:p-14 text-center text-primary-foreground shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Start with a free account today</h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Browse thousands of bank auction properties across India. Upgrade only when you find one worth pursuing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="font-semibold">
              Create Free Account
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
