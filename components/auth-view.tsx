"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface AuthViewProps {
  defaultTab?: "login" | "signup"
}

export function AuthView({ defaultTab = "login" }: AuthViewProps) {
  const [activeTab, setActiveTab] = useState<"login" | "signup">(defaultTab)
  const router = useRouter()

  const handleAuthAction = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault()
    router.push('/profile')
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      
      {/* LEFT SIDE - VISUAL (Hidden on smaller screens) */}
      <div className="hidden md:flex md:w-1/2 lg:w-[45%] bg-[#0A0F1C] relative flex-col justify-between p-12 lg:p-20 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(27,79,216,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 group mb-16">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shrink-0 font-display text-xl">B</div>
            <div className="flex flex-col">
              <div className="text-2xl font-extrabold text-white tracking-tight leading-none font-display">
                Boli<span className="text-blue-500">wala</span>
              </div>
              <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-0.5">
                We Know Auctions!
              </div>
            </div>
          </Link>

          <div>
            <span className="text-white/45 text-xs font-bold tracking-[1.2px] uppercase mb-4 inline-block">
              India's Bank Auction Platform
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-display">
              Bank Auction Properties.<br />
              <em className="text-amber-300 not-italic">Found, Bid & Won.</em>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Join thousands of buyers finding verified SARFAESI & NPA listings from 40+ banks at 20-40% below market value.
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-16">
          <div className="flex gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="font-display text-2xl font-extrabold text-white">12,400+</div>
              <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-1">Live Listings</div>
            </div>
            <div>
              <div className="font-display text-2xl font-extrabold text-white">₹2.1K Cr</div>
              <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-1">Properties Won</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="w-full md:w-1/2 lg:w-[55%] flex items-center justify-center p-6 sm:p-12 lg:p-20 relative">
        
        {/* Mobile Logo (Only visible on small screens) */}
        <div className="absolute top-6 left-6 md:hidden">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center font-bold text-white shrink-0 font-display">B</div>
            <div className="flex flex-col">
              <div className="text-xl font-extrabold text-foreground tracking-tight leading-none font-display">
                Boli<span className="text-blue-600">wala</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full max-w-[440px] mt-12 md:mt-0">
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2 font-display">
              {activeTab === "login" ? "Welcome back" : "Create an account"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {activeTab === "login" 
                ? "Enter your details to access your account." 
                : "Sign up to start browsing auction properties."}
            </p>
          </div>

          {/* Custom Tabs */}
          <div className="flex p-1 bg-secondary/50 rounded-xl mb-8">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                activeTab === "login" 
                  ? "bg-background text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                activeTab === "signup" 
                  ? "bg-background text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign Up
            </button>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleAuthAction}>
            
            {activeTab === "signup" && (
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="h-12 px-4 rounded-xl border border-border bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm"
                />
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
              <input 
                type="email" 
                placeholder="you@email.com" 
                className="h-12 px-4 rounded-xl border border-border bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Password</label>
                {activeTab === "login" && (
                  <Link href="#" className="text-[11px] font-bold text-blue-600 hover:text-blue-700">Forgot password?</Link>
                )}
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="h-12 px-4 rounded-xl border border-border bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm tracking-widest"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-xl mt-2 transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:-translate-y-0.5">
              {activeTab === "login" ? "Log In" : "Create Account"}
            </button>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-border"></div>
              <span className="flex-shrink-0 mx-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Or continue with</span>
              <div className="flex-grow border-t border-border"></div>
            </div>

            <button type="button" onClick={handleAuthAction} className="w-full flex items-center justify-center gap-3 bg-background border border-border hover:bg-secondary/50 text-foreground font-semibold h-12 rounded-xl transition-colors text-sm">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                <path d="M1 1h22v22H1z" fill="none"/>
              </svg>
              Google
            </button>
            
            <button type="button" onClick={() => router.push('/partner/dashboard')} className="w-full flex items-center justify-center gap-3 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 text-amber-600 font-semibold h-12 rounded-xl transition-colors text-sm mt-2">
              Login as Channel Partner
            </button>
            <button type="button" onClick={() => router.push('/admin')} className="w-full flex items-center justify-center gap-3 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-600 font-semibold h-12 rounded-xl transition-colors text-sm mt-2">
              Login as Admin
            </button>
            
          </form>

        </div>
      </div>
      
    </div>
  )
}
