"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const foregroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrameId: number;

    const renderLoop = () => {
      // With Lenis, window.scrollY is automatically smooth.
      // We calculate progress based on how far we've scrolled down the first 100vh.
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Progress from 0 to 1 over the first 100vh
      const progress = Math.max(0, Math.min(1, scrollY / (windowHeight || 800)));
      
      if (contentRef.current) {
        const translateY = -(progress * 300)
        const opacity = Math.max(0, 1 - progress * 2)
        contentRef.current.style.transform = `translateY(${translateY}px)`
        contentRef.current.style.opacity = opacity.toString()
      }
      
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(0px)`
      }

      if (foregroundRef.current) {
        const translateY = 100 - (progress * 100)
        foregroundRef.current.style.transform = `translateY(${translateY}%)`
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, []) 

  return (
    <div className="h-[200vh] relative w-full" ref={heroRef}>
      <section id="hero" className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0F1C]">
        <div 
          ref={backgroundRef} 
          className="absolute inset-0 z-0 will-change-transform"
          style={{ transform: "translateY(0px)" }}
        >
          <img
            src="/images/hously-background.png"
            alt="Sky Background"
            className="w-full h-full object-cover object-center opacity-80"
          />
        </div>

        <div
          ref={contentRef}
          className="container mx-auto px-6 md:px-12 lg:pt-0 relative z-10 pb-0 pl-1 pr-1 pt-8 md:pt-0"
          style={{
            willChange: "transform, opacity",
            transform: "translateY(0px)",
            opacity: 1,
          }}
        >
          <div className="mb-16 md:mb-20 max-w-5xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="text-[10px] font-bold bg-white text-[#0A0F1C] px-1.5 py-0.5 rounded-sm">IN</span>
              <span className="text-xs tracking-[0.15em] uppercase text-white font-semibold">{"INDIA'S BANK AUCTION PROPERTY PLATFORM"}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance text-center text-white mb-6 tracking-tight leading-[1.1] drop-shadow-lg">
              {"Find Bank Auction Properties at"}
              <span className="text-orange-300">{" 30–40% Below Market"}</span>
            </h1>
            
            <p className="text-base md:text-xl text-white/90 text-center max-w-3xl mb-12 font-light leading-relaxed drop-shadow-md">
              {"India's only dedicated platform for SARFAESI bank auction properties —"}
              <br className="hidden md:block" />
              {"with free listings, alerts, and full end-to-end bidding support."}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-white/90 drop-shadow-md">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-white mb-2">12,400+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/70">Live Auctions</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-white mb-2">140+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/70">Cities</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-white mb-2">18+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/70">Banks</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-white mb-2">₹0</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/70">To Browse</span>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={foregroundRef}
          className="absolute inset-x-0 bottom-0 z-20 pointer-events-none will-change-transform flex items-end justify-center overflow-visible"
          style={{ transform: "translateY(100%)" }}
        >
          <img
            src="/images/hously-foreground.png"
            alt="Building Foreground"
            className="w-full h-auto object-contain object-bottom min-w-full"
          />
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-30 pointer-events-none">
          <ArrowDown className="w-5 h-5 text-white/50" />
        </div>
      </section>
    </div>
  )
}
