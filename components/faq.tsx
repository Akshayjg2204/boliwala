"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "What is a SARFAESI bank auction property?",
    answer: "When a borrower defaults on their loan, the bank has the legal right under the SARFAESI Act to seize the property and sell it via public auction to recover their dues. These properties are often sold below market value.",
  },
  {
    question: "Why should I use Boliwala instead of searching myself?",
    answer: "Finding genuine bank auctions is difficult because notices are hidden in newspapers or clunky government websites. Boliwala brings all verified listings to one easy-to-use platform, complete with full addresses, filters, and alerts.",
  },
  {
    question: "Is it safe to buy a bank auction property?",
    answer: "Generally, yes, as you are buying directly from a nationalized or private bank. However, you must perform due diligence regarding pending utility bills, society dues, or physical possession status. Our ₹9,999 service package handles all this legal and physical verification for you.",
  },
  {
    question: "What is the ₹9,999 + 1% service package?",
    answer: "This is our premium end-to-end service for serious buyers. For ₹9,999, we perform legal title searches, physical inspection (due diligence), and manage the complex bidding process. We only charge our 1% success fee if you win the property.",
  },
  {
    question: "What is an EMD?",
    answer: "EMD stands for Earnest Money Deposit. It is typically 10% of the reserve price that you must deposit with the bank before the auction to participate as a serious bidder. If you don't win, the bank refunds the EMD.",
  },
  {
    question: "How do I become a Channel Partner?",
    answer: "Brokers and real estate agents can join our Channel Partner program for free. You get a unique referral link and earn commissions every time your clients buy a subscription or our premium service package.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">FAQ</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Questions & Answers
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
