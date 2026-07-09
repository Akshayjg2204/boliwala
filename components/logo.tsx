import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  forceWhite?: boolean
  withTagline?: boolean
}

export function Logo({ className, forceWhite = false, withTagline = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5 group", className)}>
      <div className="relative flex items-center justify-center w-[38px] h-[38px] rounded-xl bg-gradient-to-br from-[#FFC981] to-[#D97706] shadow-lg shadow-[#FFC981]/20 overflow-hidden shrink-0">
        <svg 
          width="20" height="20" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
          className="text-[#3E2400] relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
        >
          <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"/>
          <path d="m16 16 6-6"/>
          <path d="m8 8 6-6"/>
          <path d="m9 7 8 8"/>
          <path d="m21 11-8-8"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <div className={cn(
          "text-[22px] font-extrabold tracking-tight leading-none font-display transition-colors",
          forceWhite ? "text-white" : "text-foreground"
        )}>
          Boli<span className="text-[#FFC981]">wala</span>
        </div>
        {withTagline && (
          <div className={cn(
            "text-[9px] font-bold uppercase tracking-[0.2em] mt-1",
            forceWhite ? "text-white/70" : "text-muted-foreground"
          )}>
            We Know Auctions!
          </div>
        )}
      </div>
    </div>
  )
}
