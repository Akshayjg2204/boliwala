"use client"

import { useState } from "react"
import Link from "next/link"
import { Bookmark, Bell, Briefcase, User, LogOut, Search, MapPin, Scale, MessageCircle, FileText, CheckCircle2, CircleDashed } from "lucide-react"

type Tab = "saved" | "alerts" | "services" | "info"

export function ProfileView() {
  const [activeTab, setActiveTab] = useState<Tab>("saved")

  return (
    <div className="w-full flex flex-col pt-32 pb-20 bg-background min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-secondary/30 py-12 mb-8 border-b border-border">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight font-display">
            Welcome back, <span className="text-blue-600">Rajesh!</span>
          </h1>
        </div>
      </section>

      {/* DASHBOARD LAYOUT */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* SIDEBAR */}
          <div className="w-full lg:w-[280px] bg-background border border-border rounded-2xl shadow-sm overflow-hidden shrink-0">
            {/* User Info Header */}
            <div className="p-6 border-b border-border flex items-center gap-4 bg-secondary/20">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold font-display shrink-0">
                R
              </div>
              <div className="overflow-hidden">
                <div className="font-bold text-foreground truncate">Rajesh Kumar</div>
                <div className="text-xs text-muted-foreground truncate">rajesh.k@gmail.com</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="p-2 flex flex-col gap-1">
              <button 
                onClick={() => setActiveTab("saved")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === "saved" 
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400" 
                    : "text-foreground/80 hover:bg-secondary/50"
                }`}
              >
                <Bookmark className="w-4 h-4" />
                Saved Properties (4)
              </button>
              
              <button 
                onClick={() => setActiveTab("alerts")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === "alerts" 
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400" 
                    : "text-foreground/80 hover:bg-secondary/50"
                }`}
              >
                <Bell className="w-4 h-4" />
                My Alerts (2)
              </button>

              <button 
                onClick={() => setActiveTab("services")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === "services" 
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400" 
                    : "text-foreground/80 hover:bg-secondary/50"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Service Requests (1)
              </button>

              <button 
                onClick={() => setActiveTab("info")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === "info" 
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400" 
                    : "text-foreground/80 hover:bg-secondary/50"
                }`}
              >
                <User className="w-4 h-4" />
                Account Info
              </button>
            </div>

            <div className="p-4 border-t border-border mt-2">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors">
                <LogOut className="w-4 h-4" />
                Log Out
              </button>
            </div>
          </div>

          {/* MAIN AREA */}
          <div className="flex-1 w-full min-w-0">
            
            {/* SAVED PROPERTIES TAB */}
            {activeTab === "saved" && (
              <div className="animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground font-display">Saved Properties</h2>
                    <p className="text-sm text-muted-foreground mt-1">Properties you're tracking for auction.</p>
                  </div>
                  <Link href="/search" className="text-sm font-bold text-blue-600 hover:text-blue-700 hidden sm:block">
                    Browse More &rarr;
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mock Property Card 1 */}
                  <div className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                    <div className="relative h-48 bg-secondary/50">
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-lg text-slate-800 shadow-sm flex items-center gap-2">
                        <span>SBI</span>
                      </div>
                      <div className="absolute top-3 right-3 bg-red-100 text-red-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                        07 Jul 2026
                      </div>
                      <div className="absolute bottom-3 right-3 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                        Physical Possession
                      </div>
                      <div className="w-full h-full flex items-center justify-center text-4xl">🏢</div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Reserve Price</div>
                      <div className="text-2xl font-bold text-blue-600 font-display mb-3">₹1,42,03,540</div>
                      <div className="font-bold text-foreground text-sm line-clamp-1 mb-1">Flat No. 401, Vithai Apartment, Airoli</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1.5 mb-4">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">Sector-9, Airoli, Navi Mumbai</span>
                      </div>
                      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          EMD: <strong className="text-foreground">₹14,20,354</strong>
                        </div>
                        <div className="flex gap-2">
                          <Link href="/listing" className="bg-secondary hover:bg-secondary/80 text-foreground text-xs font-bold py-2 px-4 rounded-lg transition-colors">
                            View
                          </Link>
                          <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 p-2 rounded-lg transition-colors" title="Remove">
                            <Bookmark className="w-4 h-4 fill-current" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mock Property Card 2 */}
                  <div className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                    <div className="relative h-48 bg-secondary/50">
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-lg text-slate-800 shadow-sm flex items-center gap-2">
                        <span>PNB</span>
                      </div>
                      <div className="absolute top-3 right-3 bg-red-100 text-red-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                        18 Jul 2026
                      </div>
                      <div className="absolute bottom-3 right-3 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                        Symbolic Possession
                      </div>
                      <div className="w-full h-full flex items-center justify-center text-4xl">🏠</div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Reserve Price</div>
                      <div className="text-2xl font-bold text-blue-600 font-display mb-3">₹1,78,00,000</div>
                      <div className="font-bold text-foreground text-sm line-clamp-1 mb-1">3 BHK Apartment, Andheri West</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1.5 mb-4">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">Mumbai, Maharashtra</span>
                      </div>
                      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          EMD: <strong className="text-foreground">₹17,80,000</strong>
                        </div>
                        <div className="flex gap-2">
                          <Link href="/listing" className="bg-secondary hover:bg-secondary/80 text-foreground text-xs font-bold py-2 px-4 rounded-lg transition-colors">
                            View
                          </Link>
                          <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 p-2 rounded-lg transition-colors" title="Remove">
                            <Bookmark className="w-4 h-4 fill-current" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ALERTS TAB */}
            {activeTab === "alerts" && (
              <div className="animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground font-display">Your Property Alerts</h2>
                    <p className="text-sm text-muted-foreground mt-1">You'll be emailed when new matching properties are listed.</p>
                  </div>
                  <button className="text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-colors hidden sm:block">
                    + Create Alert
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Alert 1 */}
                  <div className="bg-background rounded-2xl border border-border p-6 shadow-sm flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                        <Bell className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-base mb-1">Mumbai • Residential • Physical</h3>
                        <p className="text-sm text-muted-foreground mb-3">Budget: ₹1.4Cr — ₹11.2Cr • Any bank</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary/50 px-2 py-1 rounded text-muted-foreground">Mumbai</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary/50 px-2 py-1 rounded text-muted-foreground">Residential</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary/50 px-2 py-1 rounded text-muted-foreground">Physical</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 w-full sm:w-auto border-t border-border sm:border-0 pt-4 sm:pt-0">
                      <div className="text-center">
                        <div className="text-xl font-display font-extrabold text-foreground">24</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Matched</div>
                      </div>
                      <div className="flex flex-col gap-2 w-full sm:w-auto">
                        <button className="text-xs font-bold border border-border px-4 py-2 rounded-lg hover:bg-secondary/50 transition-colors">Edit</button>
                        <button className="text-xs font-bold text-red-600 border border-red-200 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">Delete</button>
                      </div>
                    </div>
                  </div>

                  {/* Alert 2 */}
                  <div className="bg-background rounded-2xl border border-border p-6 shadow-sm flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                        <Bell className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-base mb-1">Navi Mumbai • Airoli • Bank of Baroda</h3>
                        <p className="text-sm text-muted-foreground mb-3">Budget: Any • Physical Possession only</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary/50 px-2 py-1 rounded text-muted-foreground">Airoli</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary/50 px-2 py-1 rounded text-muted-foreground">BOB</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary/50 px-2 py-1 rounded text-muted-foreground">Instant Email</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 w-full sm:w-auto border-t border-border sm:border-0 pt-4 sm:pt-0">
                      <div className="text-center">
                        <div className="text-xl font-display font-extrabold text-foreground">3</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Matched</div>
                      </div>
                      <div className="flex flex-col gap-2 w-full sm:w-auto">
                        <button className="text-xs font-bold border border-border px-4 py-2 rounded-lg hover:bg-secondary/50 transition-colors">Edit</button>
                        <button className="text-xs font-bold text-red-600 border border-red-200 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SERVICES TAB */}
            {activeTab === "services" && (
              <div className="animate-in fade-in duration-300">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground font-display">My Service Requests</h2>
                  <p className="text-sm text-muted-foreground mt-1">Track the progress of your purchased Boliwala packages.</p>
                </div>

                <div className="bg-background rounded-2xl border border-border shadow-sm p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">End-to-End Package — Flat 303, Vithai Apt, Airoli</h3>
                      <p className="text-sm text-muted-foreground mt-1">Purchased 30 Jun 2026 • ₹19,999 paid (Razorpay)</p>
                    </div>
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shrink-0">
                      In Progress
                    </span>
                  </div>

                  {/* Progress Tracker */}
                  <div className="flex flex-col sm:flex-row border border-border rounded-xl overflow-hidden mb-8">
                    <div className="flex-1 p-4 text-center border-b sm:border-b-0 sm:border-r border-border bg-emerald-50 dark:bg-emerald-900/10">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                      <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Due Diligence</div>
                      <div className="text-xs text-muted-foreground mt-1">Completed</div>
                    </div>
                    <div className="flex-1 p-4 text-center border-b sm:border-b-0 sm:border-r border-border bg-amber-50 dark:bg-amber-900/10">
                      <Scale className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                      <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Bid Mgmt</div>
                      <div className="text-xs text-muted-foreground mt-1">In Progress</div>
                    </div>
                    <div className="flex-1 p-4 text-center border-b sm:border-b-0 sm:border-r border-border">
                      <CircleDashed className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                      <div className="text-[11px] font-bold text-foreground uppercase tracking-wider">Possession</div>
                      <div className="text-xs text-muted-foreground mt-1">Pending</div>
                    </div>
                    <div className="flex-1 p-4 text-center">
                      <CircleDashed className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                      <div className="text-[11px] font-bold text-foreground uppercase tracking-wider">Loan</div>
                      <div className="text-xs text-muted-foreground mt-1">Pending</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold py-2.5 px-6 rounded-xl transition-colors shadow-sm">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Team
                    </button>
                    <button className="flex items-center gap-2 bg-secondary/50 hover:bg-secondary text-foreground text-sm font-bold py-2.5 px-6 rounded-xl transition-colors border border-border">
                      <FileText className="w-4 h-4" />
                      View Due Diligence Report
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ACCOUNT INFO TAB */}
            {activeTab === "info" && (
              <div className="animate-in fade-in duration-300">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground font-display">Account Information</h2>
                  <p className="text-sm text-muted-foreground mt-1">Manage your personal details and settings.</p>
                </div>

                <div className="bg-background rounded-2xl border border-border shadow-sm p-6 sm:p-8">
                  <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                        <input type="text" defaultValue="Rajesh Kumar" className="h-12 px-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                        <input type="email" defaultValue="rajesh.k@gmail.com" disabled className="h-12 px-4 rounded-xl border border-border bg-secondary/10 text-muted-foreground outline-none text-sm cursor-not-allowed" />
                        <span className="text-xs text-muted-foreground">Contact support to change email.</span>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                        <input type="tel" defaultValue="+91 98765 43210" className="h-12 px-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">City</label>
                        <input type="text" defaultValue="Mumbai" className="h-12 px-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                      </div>
                    </div>
                    
                    <div className="border-t border-border pt-6 mt-2">
                      <h3 className="font-bold text-foreground mb-4">KYC Details (Optional)</h3>
                      <p className="text-sm text-muted-foreground mb-6">Providing these helps speed up your service onboarding.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">PAN Number</label>
                          <input type="text" placeholder="ABCDE1234F" className="h-12 px-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm uppercase" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Aadhaar Number</label>
                          <input type="text" placeholder="1234 5678 9012" className="h-12 px-4 rounded-xl border border-border bg-secondary/30 focus:bg-background focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all text-sm" />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6 mt-2 flex justify-end">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-8 rounded-xl transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:-translate-y-0.5">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
      
    </div>
  )
}
