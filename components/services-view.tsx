"use client"

import { useState } from "react"
import { Check, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const faqs = [
  {
    question: "Is the ₹9,999 package for all my auctions?",
    answer: "No — the Full Service package covers one specific auction property. It includes the title search, auction management, and possession support for that property. If you want us to handle a second property, you'd take a separate package for it.",
  },
  {
    question: "When is the 1% success fee charged?",
    answer: "Only if you actually win the auction. The 1% is calculated on your winning bid amount. If you don't win, you pay nothing beyond the ₹9,999 package fee.",
  },
  {
    question: "What's the difference between credits and the annual membership?",
    answer: "Every free account gets 5 credits, and each credit unlocks the hidden fields on one property. The ₹999 annual membership removes the limit entirely — unlock as many properties as you want for a full year.",
  },
  {
    question: "Do I need to pay anything just to browse?",
    answer: "Never. Browsing listings, searching, viewing the full address, and requesting a callback are all completely free and don't even require an account.",
  },
]

export function ServicesView() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="w-full flex flex-col pt-32 pb-0 bg-[#F6F8FC] min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <header className="max-w-[820px] mx-auto px-7 pt-[60px] pb-5 text-center">
        <div className="inline-flex items-center gap-2 bg-[#FEF6EC] text-[#D97706] font-bold text-[12.5px] px-3.5 py-1.5 rounded-full uppercase tracking-[0.05em] mb-5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
          </svg>
          Simple, transparent pricing
        </div>
        <h1 className="font-['Plus_Jakarta_Sans'] text-[34px] md:text-[44px] font-extrabold leading-[1.08] tracking-[-0.015em] text-[#0F1729]">
          Browse for free.<br />Pay only when you're serious.
        </h1>
        <p className="text-[17px] text-[#6B7385] mt-4 max-w-[600px] mx-auto leading-[1.55]">
          Start with unlimited free listings. Upgrade to unlock every detail, or hand the whole auction to our experts — you only pay a success fee if you win.
        </p>
        <div className="mt-3.5 text-[14.5px] text-[#0F9D58] font-semibold">
          ✓ No signup needed to browse · ✓ Full address always visible · ✓ ₹0 to start
        </div>
      </header>

      {/* PRICING CARDS */}
      <section className="max-w-[1200px] mx-auto px-7 pt-[34px] pb-2.5 grid md:grid-cols-3 gap-5.5 md:gap-5 items-stretch w-full mb-14">
        
        {/* FREE */}
        <div className="bg-white border border-[#E5E9F0] rounded-[16px] p-6 lg:p-[30px_26px] flex flex-col shadow-[0_1px_2px_rgba(15,23,41,0.06)] relative transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_1px_2px_rgba(15,23,41,0.04),0_12px_32px_rgba(15,23,41,0.06)]">
          <div className="text-[14px] font-bold uppercase tracking-[0.06em] text-[#6B7385] font-['Plus_Jakarta_Sans']">Free Account</div>
          <div className="text-[13.5px] text-[#6B7385] mt-1.5 min-h-[38px] leading-[1.55]">Everything you need to discover and shortlist auction properties.</div>
          <div className="mt-4.5 flex items-baseline gap-1 mb-1">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] self-start mt-1.5">₹</span>
            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[46px] leading-none tracking-[-0.02em]">0</span>
            <span className="text-[15px] text-[#6B7385] font-medium">forever</span>
          </div>
          <div className="text-[13px] text-[#6B7385] min-h-[20px]">5 free credits on signup</div>
          <Link href="/signup" className="mt-[22px] inline-flex justify-center items-center gap-2 py-2.5 px-4 rounded-[10px] font-semibold text-[14px] bg-white text-[#3A4256] border border-[#E5E9F0] hover:border-[#1B4FD8] hover:text-[#1B4FD8] transition-colors w-full">
            Create Free Account
          </Link>
          <ul className="mt-6 flex flex-col gap-3 flex-1 list-none">
            {[
              { text: "Unlimited property listings & search", ok: true },
              { text: "Full property address always visible", ok: true },
              { text: "Reserve price, EMD & auction dates", ok: true },
              { text: "Property alerts by email", ok: true },
              { text: <span><b>5 credits</b> to unlock hidden details</span>, ok: true },
              { text: "Unlimited detail unlocking", ok: false },
              { text: "Expert auction support", ok: false },
            ].map((item, i) => (
              <li key={i} className="flex gap-[11px] items-start text-[14px]">
                {item.ok ? (
                  <Check className="w-[19px] h-[19px] text-[#0F9D58] shrink-0 mt-[1px] stroke-[2.2px]" />
                ) : (
                  <X className="w-[19px] h-[19px] text-[#C4CAD6] shrink-0 mt-[1px] stroke-[2.2px]" />
                )}
                <span className={item.ok ? "text-[#0F1729]" : "text-[#6B7385]"}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ANNUAL MEMBER */}
        <div className="bg-white border-2 border-[#1B4FD8] rounded-[16px] p-6 lg:p-[30px_26px] flex flex-col shadow-[0_1px_2px_rgba(15,23,41,0.04),0_12px_32px_rgba(15,23,41,0.06)] relative transition-all duration-200 hover:-translate-y-[3px]">
          <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-[#1B4FD8] text-white text-[12px] font-bold px-[15px] py-[5px] rounded-full tracking-[0.03em] whitespace-nowrap">
            Most Popular
          </div>
          <div className="text-[14px] font-bold uppercase tracking-[0.06em] text-[#6B7385] font-['Plus_Jakarta_Sans']">Annual Member</div>
          <div className="text-[13.5px] text-[#6B7385] mt-1.5 min-h-[38px] leading-[1.55]">Unlock every detail on every property, as many as you like.</div>
          <div className="mt-4.5 flex items-baseline gap-1 mb-1">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] self-start mt-1.5">₹</span>
            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[46px] leading-none tracking-[-0.02em]">999</span>
            <span className="text-[15px] text-[#6B7385] font-medium">/ year</span>
          </div>
          <div className="text-[13px] text-[#6B7385] min-h-[20px]">Less than ₹3 a day</div>
          <Link href="/signup" className="mt-[22px] inline-flex justify-center items-center gap-2 py-2.5 px-4 rounded-[10px] font-semibold text-[14px] bg-[#1B4FD8] text-white hover:bg-[#1740AE] transition-colors w-full">
            Get Annual Membership
          </Link>
          <ul className="mt-6 flex flex-col gap-3 flex-1 list-none">
            {[
              { text: <span className="font-semibold">Everything in Free, plus:</span>, ok: true },
              { text: <span><b>Unlimited</b> unlocking of all hidden fields</span>, ok: true },
              { text: "Flat number, floor & inspection details", ok: true },
              { text: "Authorised officer & bank contact info", ok: true },
              { text: "Priority email & WhatsApp alerts", ok: true },
              { text: "Save unlimited shortlists", ok: true },
              { text: "Hands-on auction management", ok: false },
            ].map((item, i) => (
              <li key={i} className="flex gap-[11px] items-start text-[14px]">
                {item.ok ? (
                  <Check className="w-[19px] h-[19px] text-[#0F9D58] shrink-0 mt-[1px] stroke-[2.2px]" />
                ) : (
                  <X className="w-[19px] h-[19px] text-[#C4CAD6] shrink-0 mt-[1px] stroke-[2.2px]" />
                )}
                <span className={item.ok ? "text-[#0F1729]" : "text-[#6B7385]"}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FULL SERVICE */}
        <div className="bg-gradient-to-br from-[#0F1729] to-[#1B2A4E] text-white rounded-[16px] p-6 lg:p-[30px_26px] flex flex-col shadow-[0_1px_2px_rgba(15,23,41,0.06)] relative transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_1px_2px_rgba(15,23,41,0.04),0_12px_32px_rgba(15,23,41,0.06)]">
          <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-[#D97706] text-white text-[12px] font-bold px-[15px] py-[5px] rounded-full tracking-[0.03em] whitespace-nowrap">
            Won only if you win
          </div>
          <div className="text-[14px] font-bold uppercase tracking-[0.06em] text-[#9DB2E8] font-['Plus_Jakarta_Sans']">Full Service</div>
          <div className="text-[13.5px] text-[#B8C4E0] mt-1.5 min-h-[38px] leading-[1.55]">Found the one? Our experts handle the entire auction, end to end.</div>
          <div className="mt-4.5 flex items-baseline gap-1 mb-1">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] self-start mt-1.5">₹</span>
            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[46px] leading-none tracking-[-0.02em]">9,999</span>
          </div>
          <div className="text-[13px] text-[#9DB2E8] min-h-[20px]">Per auction — one specific property</div>
          <div className="inline-flex items-center gap-1.5 bg-[rgba(217,119,6,0.14)] text-[#D97706] font-bold text-[13px] px-3 py-[5px] rounded-lg mt-3 w-fit">
            + 1% success fee — only if you win
          </div>
          <Link href="/services" className="mt-[22px] inline-flex justify-center items-center gap-2 py-2.5 px-4 rounded-[10px] font-semibold text-[14px] bg-[#D97706] text-white hover:bg-[#BE680A] transition-colors w-full">
            Hire Boliwala
          </Link>
          <ul className="mt-6 flex flex-col gap-3 flex-1 list-none">
            {[
              { text: <span className="font-semibold text-white">Everything in Annual, plus:</span>, ok: true },
              { text: <span><b>Title Search & Verification</b> report</span>, ok: true },
              { text: <span><b>Auction Management</b> — bidding handled for you</span>, ok: true },
              { text: <span><b>Possession Support</b> after you win</span>, ok: true },
              { text: "Loan & funding assistance", ok: true },
              { text: "Dedicated relationship manager", ok: true },
              { text: <span><b>1% success fee</b> — pay nothing extra unless you win</span>, ok: true },
            ].map((item, i) => (
              <li key={i} className="flex gap-[11px] items-start text-[14px]">
                <Check className="w-[19px] h-[19px] text-[#4ADE80] shrink-0 mt-[1px] stroke-[2.2px]" />
                <span className="text-white">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-[1000px] mx-auto mt-14 px-7 w-full overflow-x-auto">
        <div className="text-center mb-7.5">
          <h2 className="text-[30px] font-extrabold font-['Plus_Jakarta_Sans'] text-[#0F1729]">Compare every plan</h2>
          <p className="text-[#6B7385] mt-2 text-[15.5px]">From free browsing to a fully managed auction win — see exactly what's included.</p>
        </div>
        <div className="bg-white border border-[#E5E9F0] rounded-[16px] overflow-hidden shadow-[0_1px_2px_rgba(15,23,41,0.06)] min-w-[680px]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-[15px_18px] text-left border-b border-[#E5E9F0] bg-[#F6F8FC] font-['Plus_Jakarta_Sans'] text-[13px] text-[#6B7385] uppercase tracking-[0.05em] font-bold">Feature</th>
                <th className="p-[15px_18px] text-center border-b border-[#E5E9F0] bg-[#F6F8FC] font-['Plus_Jakarta_Sans'] text-[13.5px] font-bold w-[180px]">Free<span className="block text-[12px] font-medium text-[#6B7385] mt-0.5">₹0</span></th>
                <th className="p-[15px_18px] text-center border-b border-[#E5E9F0] bg-[#F6F8FC] font-['Plus_Jakarta_Sans'] text-[16px] font-extrabold text-[#1B4FD8] w-[180px]">Annual Member<span className="block text-[12px] font-medium text-[#6B7385] mt-0.5">₹999 / year</span></th>
                <th className="p-[15px_18px] text-center border-b border-[#E5E9F0] bg-[#F6F8FC] font-['Plus_Jakarta_Sans'] text-[16px] font-extrabold text-[#D97706] w-[180px]">Full Service<span className="block text-[12px] font-medium text-[#6B7385] mt-0.5">₹9,999 + 1%</span></th>
              </tr>
            </thead>
            <tbody className="[&>tr:not(.grp):hover]:bg-[#EEF3FE]">
              {/* Group 1 */}
              <tr className="grp">
                <td colSpan={4} className="bg-[#F0F3F9] font-['Plus_Jakarta_Sans'] font-bold text-[12.5px] uppercase tracking-[0.05em] text-[#3A4256] p-[10px_18px] border-b border-[#E5E9F0]">Browsing & Discovery</td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]">
                  <div className="font-semibold text-[14.5px]">Property listings & search</div>
                  <div className="text-[12.5px] text-[#6B7385] mt-0.5">Across 140+ cities</div>
                </td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-semibold">Unlimited</span></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-semibold">Unlimited</span></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-semibold">Unlimited</span></td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]">
                  <div className="font-semibold text-[14.5px]">Full property address</div>
                  <div className="text-[12.5px] text-[#6B7385] mt-0.5">Never paywalled</div>
                </td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]"><div className="font-semibold text-[14.5px]">Reserve price, EMD & dates</div></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]"><div className="font-semibold text-[14.5px]">Property alerts</div></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-medium text-[#6B7385]">Email</span></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-bold text-[#1B4FD8]">Email + WhatsApp</span></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-bold text-[#D97706]">Priority</span></td>
              </tr>

              {/* Group 2 */}
              <tr className="grp">
                <td colSpan={4} className="bg-[#F0F3F9] font-['Plus_Jakarta_Sans'] font-bold text-[12.5px] uppercase tracking-[0.05em] text-[#3A4256] p-[10px_18px] border-b border-[#E5E9F0]">Unlocking Hidden Details</td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]">
                  <div className="font-semibold text-[14.5px]">Credits to unlock details</div>
                  <div className="text-[12.5px] text-[#6B7385] mt-0.5">Flat no., floor, inspection, officer contact</div>
                </td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-semibold">5 credits</span></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-bold text-[#1B4FD8]">Unlimited</span></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-bold text-[#D97706]">Unlimited</span></td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]"><div className="font-semibold text-[14.5px]">Flat number & floor</div></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-medium text-[#6B7385]">1 credit each</span></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]"><div className="font-semibold text-[14.5px]">Inspection date & time</div></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-medium text-[#6B7385]">1 credit</span></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]"><div className="font-semibold text-[14.5px]">Authorised officer & bank contact</div></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-medium text-[#6B7385]">1 credit</span></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
              </tr>

              {/* Group 3 */}
              <tr className="grp">
                <td colSpan={4} className="bg-[#F0F3F9] font-['Plus_Jakarta_Sans'] font-bold text-[12.5px] uppercase tracking-[0.05em] text-[#3A4256] p-[10px_18px] border-b border-[#E5E9F0]">Expert Auction Service</td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]">
                  <div className="font-semibold text-[14.5px]">Title Search & Verification</div>
                  <div className="text-[12.5px] text-[#6B7385] mt-0.5">Legal check on ownership & encumbrances</div>
                </td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><X className="w-[21px] h-[21px] inline-block text-[#CBD1DC] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><X className="w-[21px] h-[21px] inline-block text-[#CBD1DC] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]">
                  <div className="font-semibold text-[14.5px]">Auction Management</div>
                  <div className="text-[12.5px] text-[#6B7385] mt-0.5">We register, deposit EMD & bid for you</div>
                </td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><X className="w-[21px] h-[21px] inline-block text-[#CBD1DC] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><X className="w-[21px] h-[21px] inline-block text-[#CBD1DC] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]">
                  <div className="font-semibold text-[14.5px]">Possession Support</div>
                  <div className="text-[12.5px] text-[#6B7385] mt-0.5">Help taking physical possession after winning</div>
                </td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><X className="w-[21px] h-[21px] inline-block text-[#CBD1DC] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><X className="w-[21px] h-[21px] inline-block text-[#CBD1DC] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]"><div className="font-semibold text-[14.5px]">Loan & funding assistance</div></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><X className="w-[21px] h-[21px] inline-block text-[#CBD1DC] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><X className="w-[21px] h-[21px] inline-block text-[#CBD1DC] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]"><div className="font-semibold text-[14.5px]">Dedicated relationship manager</div></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><X className="w-[21px] h-[21px] inline-block text-[#CBD1DC] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><X className="w-[21px] h-[21px] inline-block text-[#CBD1DC] stroke-[2.2px]" /></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><Check className="w-[21px] h-[21px] inline-block text-[#0F9D58] stroke-[2.2px]" /></td>
              </tr>
              <tr>
                <td className="p-[15px_18px] border-b border-[#E5E9F0]">
                  <div className="font-semibold text-[14.5px]">Success fee</div>
                  <div className="text-[12.5px] text-[#6B7385] mt-0.5">Charged only on a winning bid</div>
                </td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-medium text-[#6B7385]">—</span></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-medium text-[#6B7385]">—</span></td>
                <td className="p-[15px_18px] border-b border-[#E5E9F0] text-center"><span className="text-[13.5px] font-bold text-[#D97706]">1% of winning bid</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-[820px] mx-auto mt-[60px] px-7 w-full mb-14">
        <h2 className="text-[28px] font-extrabold font-['Plus_Jakarta_Sans'] text-center mb-[26px] text-[#0F1729]">Pricing questions</h2>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-[#E5E9F0] rounded-[12px] overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-[18px_22px] flex items-center justify-between gap-3.5 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden"
              >
                <span className="font-semibold text-[15.5px] text-[#0F1729]">{faq.question}</span>
                <ChevronDown className={cn("w-5 h-5 text-[#6B7385] transition-transform duration-200 shrink-0", openFaqIndex === index ? "rotate-180" : "")} />
              </button>
              <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", openFaqIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
                <div className="px-[22px] pb-[20px] text-[14.5px] text-[#3A4256] leading-[1.55]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-[1000px] mx-auto mt-4 px-7 w-full mb-[60px]">
        <div className="bg-gradient-to-br from-[#1B4FD8] to-[#2E64F0] rounded-[20px] p-[46px_40px] text-center text-white">
          <h2 className="text-[30px] font-extrabold font-['Plus_Jakarta_Sans']">Start with a free account today</h2>
          <p className="opacity-90 mt-2.5 text-[16px] max-w-[520px] mx-auto">
            Browse thousands of bank auction properties across India. Upgrade only when you find one worth pursuing.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link href="/signup" className="inline-flex justify-center items-center gap-2 py-2.5 px-[18px] rounded-[10px] font-semibold text-[14px] bg-white text-[#1B4FD8] hover:bg-[#EEF3FE] transition-colors">
              Create Free Account
            </Link>
            <Link href="#" className="inline-flex justify-center items-center gap-2 py-2.5 px-[18px] rounded-[10px] font-semibold text-[14px] bg-transparent border border-white/40 text-white hover:bg-white/10 transition-colors">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
