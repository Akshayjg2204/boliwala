"use client"

import { useState } from "react"
import { 
  LayoutGrid, Users, UserPlus, Image as ImageIcon, Wallet, 
  Copy, Plus, Check, ChevronDown, Share, Download, Info, CheckCircle2, CircleDashed, CheckCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

export function PartnerDashboardView() {
  const [activeView, setActiveView] = useState("dashboard")
  const [toastMessage, setToastMessage] = useState("")
  const [showToast, setShowToast] = useState(false)
  const [refFilter, setRefFilter] = useState("all")
  const [fmtFilter, setFmtFilter] = useState("all")

  const showNotification = (msg: string) => {
    setToastMessage(msg)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2200)
  }

  const copyRefLink = () => {
    navigator.clipboard.writeText('boliwala.com/join?ref=CP_rahul_m8x3')
    showNotification('Referral link copied!')
  }

  const handleInvite = () => {
    showNotification('Invites sent! Track them below.')
  }

  const pageTitles: Record<string, { title: string, sub: string }> = {
    dashboard: { title: 'Dashboard', sub: 'Your referral network at a glance' },
    referrals: { title: 'My Referrals', sub: 'Everyone you\'ve brought to Boliwala' },
    invite: { title: 'Invite People', sub: 'Grow your network — no limit on invites' },
    creatives: { title: 'Marketing Creatives', sub: 'Auto-branded with your details, ready to share' },
    earnings: { title: 'Earnings & Payouts', sub: 'Commissions and monthly settlements' }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row text-slate-900 font-sans">
      
      {/* SIDEBAR */}
      <aside className="hidden md:flex flex-col w-[250px] bg-white border-r border-slate-200 sticky top-0 h-screen p-5 gap-1.5 shrink-0 z-30">
        <div className="flex items-center gap-2.5 pb-5">
          <div className="w-[34px] h-[34px] rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg font-['Plus_Jakarta_Sans']">B</div>
          <div>
            <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[18px] leading-tight">Boliwala</div>
            <div className="text-[11px] text-slate-500 font-medium">Partner Portal</div>
          </div>
        </div>

        <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold px-2.5 pt-3.5 pb-1.5">Main</div>
        
        <button 
          onClick={() => setActiveView("dashboard")}
          className={cn("flex items-center gap-2.5 p-[10px_11px] rounded-[10px] text-[14.5px] font-medium w-full text-left transition-colors", activeView === "dashboard" ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50 hover:text-blue-600 group")}
        >
          <LayoutGrid className={cn("w-[19px] h-[19px] shrink-0", activeView === "dashboard" ? "text-white" : "text-slate-500 group-hover:text-blue-600")} /> Dashboard
        </button>
        <button 
          onClick={() => setActiveView("referrals")}
          className={cn("flex items-center gap-2.5 p-[10px_11px] rounded-[10px] text-[14.5px] font-medium w-full text-left transition-colors", activeView === "referrals" ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50 hover:text-blue-600 group")}
        >
          <Users className={cn("w-[19px] h-[19px] shrink-0", activeView === "referrals" ? "text-white" : "text-slate-500 group-hover:text-blue-600")} /> My Referrals
        </button>
        <button 
          onClick={() => setActiveView("invite")}
          className={cn("flex items-center gap-2.5 p-[10px_11px] rounded-[10px] text-[14.5px] font-medium w-full text-left transition-colors", activeView === "invite" ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50 hover:text-blue-600 group")}
        >
          <UserPlus className={cn("w-[19px] h-[19px] shrink-0", activeView === "invite" ? "text-white" : "text-slate-500 group-hover:text-blue-600")} /> Invite People
        </button>
        <button 
          onClick={() => setActiveView("creatives")}
          className={cn("flex items-center gap-2.5 p-[10px_11px] rounded-[10px] text-[14.5px] font-medium w-full text-left transition-colors", activeView === "creatives" ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50 hover:text-blue-600 group")}
        >
          <ImageIcon className={cn("w-[19px] h-[19px] shrink-0", activeView === "creatives" ? "text-white" : "text-slate-500 group-hover:text-blue-600")} /> Marketing Creatives
        </button>
        <button 
          onClick={() => setActiveView("earnings")}
          className={cn("flex items-center gap-2.5 p-[10px_11px] rounded-[10px] text-[14.5px] font-medium w-full text-left transition-colors", activeView === "earnings" ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-blue-50 hover:text-blue-600 group")}
        >
          <Wallet className={cn("w-[19px] h-[19px] shrink-0", activeView === "earnings" ? "text-white" : "text-slate-500 group-hover:text-blue-600")} /> Earnings & Payouts
        </button>

        <div className="mt-auto border-t border-slate-200 pt-3.5">
          <div className="flex items-center gap-2.5 p-2 rounded-[10px]">
            <div className="w-9 h-9 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-sm font-['Plus_Jakarta_Sans'] shrink-0">RM</div>
            <div>
              <div className="font-semibold text-[13.5px] text-slate-900 leading-tight">Rahul Mehta</div>
              <div className="text-[11.5px] text-amber-600 font-semibold">● Gold Partner</div>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE NAV (Bottom Bar) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-2 z-50">
        <button onClick={() => setActiveView("dashboard")} className={cn("flex flex-col items-center p-2 rounded-lg", activeView === "dashboard" ? "text-blue-600 bg-blue-50" : "text-slate-500")}>
          <LayoutGrid className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-semibold">Dash</span>
        </button>
        <button onClick={() => setActiveView("referrals")} className={cn("flex flex-col items-center p-2 rounded-lg", activeView === "referrals" ? "text-blue-600 bg-blue-50" : "text-slate-500")}>
          <Users className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-semibold">Refs</span>
        </button>
        <button onClick={() => setActiveView("invite")} className={cn("flex flex-col items-center p-2 rounded-lg", activeView === "invite" ? "text-blue-600 bg-blue-50" : "text-slate-500")}>
          <UserPlus className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-semibold">Invite</span>
        </button>
        <button onClick={() => setActiveView("creatives")} className={cn("flex flex-col items-center p-2 rounded-lg", activeView === "creatives" ? "text-blue-600 bg-blue-50" : "text-slate-500")}>
          <ImageIcon className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-semibold">Media</span>
        </button>
        <button onClick={() => setActiveView("earnings")} className={cn("flex flex-col items-center p-2 rounded-lg", activeView === "earnings" ? "text-blue-600 bg-blue-50" : "text-slate-500")}>
          <Wallet className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-semibold">Earn</span>
        </button>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col pb-20 md:pb-14 min-w-0">
        
        {/* TOPBAR */}
        <header className="bg-white border-b border-slate-200 px-5 md:px-8 py-4 flex items-center justify-between sticky top-0 z-20">
          <div>
            <h1 className="text-[21px] font-extrabold font-['Plus_Jakarta_Sans']">{pageTitles[activeView].title}</h1>
            <div className="text-[13px] text-slate-500 mt-0.5">{pageTitles[activeView].sub}</div>
          </div>
          <div className="hidden md:flex items-center gap-2.5">
            <button onClick={() => setActiveView('invite')} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-[14px] bg-white text-slate-700 border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-colors">
              <UserPlus className="w-4 h-4" /> Invite People
            </button>
            <button onClick={copyRefLink} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-[14px] bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <Copy className="w-4 h-4" /> Copy Referral Link
            </button>
          </div>
        </header>

        <div className="p-5 md:p-8 max-w-[1180px] w-full mx-auto flex-1">
          
          {/* DASHBOARD VIEW */}
          {activeView === "dashboard" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 mb-8">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm relative overflow-hidden">
                  <div className="w-[34px] h-[34px] rounded-lg bg-blue-50 flex items-center justify-center mb-3 text-blue-600">
                    <Users className="w-[18px] h-[18px]" />
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[25px] leading-none">45</div>
                  <div className="text-[12.5px] text-slate-500 font-medium mt-1.5">Total Referrals</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm relative overflow-hidden">
                  <div className="w-[34px] h-[34px] rounded-lg bg-emerald-50 flex items-center justify-center mb-3 text-emerald-600">
                    <CheckCircle2 className="w-[18px] h-[18px]" />
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[25px] leading-none">32</div>
                  <div className="text-[12.5px] text-slate-500 font-medium mt-1.5">Active Users</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm relative overflow-hidden">
                  <div className="w-[34px] h-[34px] rounded-lg bg-amber-50 flex items-center justify-center mb-3 text-amber-600">
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"/></svg>
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[25px] leading-none">8</div>
                  <div className="text-[12.5px] text-slate-500 font-medium mt-1.5">₹999 Subscribers</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm relative overflow-hidden">
                  <div className="w-[34px] h-[34px] rounded-lg bg-blue-50 flex items-center justify-center mb-3 text-blue-600">
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"/></svg>
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[25px] leading-none">12</div>
                  <div className="text-[12.5px] text-slate-500 font-medium mt-1.5">₹9,999 Packages</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm relative overflow-hidden">
                  <div className="w-[34px] h-[34px] rounded-lg bg-amber-50 flex items-center justify-center mb-3 text-amber-600">
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"/></svg>
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[25px] leading-none">5</div>
                  <div className="text-[12.5px] text-slate-500 font-medium mt-1.5">Auction Wins</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 mt-2">
                <div>
                  <h2 className="text-[16px] font-bold font-['Plus_Jakarta_Sans']">Your referral link</h2>
                  <div className="text-[12.5px] text-slate-500">Share anywhere — every signup tracks back to you</div>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-3 items-stretch">
                  <div className="flex-1 flex items-center gap-2.5 bg-blue-50 border-[1.5px] border-dashed border-blue-200 rounded-xl px-4 py-3">
                    <Copy className="w-[18px] h-[18px] text-blue-600 shrink-0" />
                    <span className="font-semibold text-blue-800 text-[14.5px] break-all">boliwala.com/join?ref=CP_rahul_m8x3</span>
                  </div>
                  <button onClick={copyRefLink} className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-[14px] bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    Copy Link
                  </button>
                  <button onClick={() => setActiveView('invite')} className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-[14px] bg-white text-slate-700 border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-colors">
                    Invite by Email / Phone
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-[16px] font-bold font-['Plus_Jakarta_Sans']">Earnings breakdown</h2>
                  <div className="text-[12.5px] text-slate-500">This month · updates as referrals convert</div>
                </div>
              </div>
              <div className="grid md:grid-cols-[1.5fr_1fr] gap-4.5">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex flex-col gap-1 mt-1">
                    <div className="flex items-center justify-between p-[14px_4px] border-b border-dashed border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                        <div>
                          <div className="font-semibold text-[14.5px]">₹999 Subscriptions</div>
                          <div className="text-[12px] text-slate-500">8 subscribers × ₹999 × 10%</div>
                        </div>
                      </div>
                      <div className="font-['Plus_Jakarta_Sans'] font-bold text-[16px]">₹799</div>
                    </div>
                    <div className="flex items-center justify-between p-[14px_4px] border-b border-dashed border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                        <div>
                          <div className="font-semibold text-[14.5px]">₹9,999 Packages</div>
                          <div className="text-[12px] text-slate-500">12 packages × ₹9,999 × 15%</div>
                        </div>
                      </div>
                      <div className="font-['Plus_Jakarta_Sans'] font-bold text-[16px]">₹17,998</div>
                    </div>
                    <div className="flex items-center justify-between p-[14px_4px]">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        <div>
                          <div className="font-semibold text-[14.5px]">Success Fees</div>
                          <div className="text-[12px] text-slate-500">5 wins × ₹50L avg × 1% × 5%</div>
                        </div>
                      </div>
                      <div className="font-['Plus_Jakarta_Sans'] font-bold text-[16px]">₹12,500</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="text-[13px] text-white/85 font-medium">Total earnings this month</div>
                    <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[38px] tracking-[-0.02em] mt-1.5 mb-1">₹31,297</div>
                    <div className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded-full text-[12px] font-semibold mt-3">
                      <Wallet className="w-3.5 h-3.5" /> Next payout: 1 Aug 2026
                    </div>
                  </div>
                  <div className="text-[12.5px] text-white/80 mt-6 pt-4 border-t border-white/20 flex items-start gap-2">
                    <Info className="w-[18px] h-[18px] shrink-0" />
                    Payouts are processed monthly to your registered account.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* REFERRALS VIEW */}
          {activeView === "referrals" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { id: 'all', label: 'All Referrals' },
                  { id: 'active', label: 'Active' },
                  { id: 'inactive', label: 'Inactive' },
                  { id: '999', label: '₹999 Subscribers' },
                  { id: '9999', label: '₹9,999 Buyers' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setRefFilter(tab.id)}
                    className={cn("px-4 py-2 rounded-xl text-[13.5px] font-semibold border transition-colors", 
                      refFilter === tab.id 
                        ? "bg-blue-600 text-white border-blue-600" 
                        : "bg-white text-slate-700 border-slate-200 hover:border-blue-600"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-x-auto">
                <table className="w-full text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-[11.5px] uppercase tracking-wider text-slate-500">
                      <th className="p-3 px-4 font-bold">Name</th>
                      <th className="p-3 px-4 font-bold">Status</th>
                      <th className="p-3 px-4 font-bold">Package</th>
                      <th className="p-3 px-4 font-bold">Your Earnings</th>
                      <th className="p-3 px-4 font-bold">Date Joined</th>
                    </tr>
                  </thead>
                  <tbody className="[&>tr:hover]:bg-blue-50/50">
                    {[
                      { name: "Priya Verma", email: "priya.v@email.com", status: "Active", pkg: "₹9,999 Package", pkgId: "9999", earn: "₹1,499.85", date: "1 Jul 2026" },
                      { name: "Rajesh Sharma", email: "raj.sharma@email.com", status: "Active", pkg: "₹999 Annual", pkgId: "999", earn: "₹99.90", date: "2 Jul 2026" },
                      { name: "Amit Patel", email: "amit.p@email.com", status: "Inactive", pkg: "— None yet", pkgId: "none", earn: "₹0", date: "28 Jun 2026" },
                      { name: "Kavya Reddy", email: "kavya.r@email.com", status: "Active", pkg: "₹999 Annual", pkgId: "999", earn: "₹99.90", date: "25 Jun 2026" },
                    ].map((row, i) => {
                      const isMatch = refFilter === 'all' || 
                        (refFilter === 'active' && row.status === 'Active') || 
                        (refFilter === 'inactive' && row.status === 'Inactive') || 
                        (refFilter === '999' && row.pkgId === '999') || 
                        (refFilter === '9999' && row.pkgId === '9999');
                      
                      if (!isMatch) return null;

                      return (
                        <tr key={i} className="border-b border-slate-100 last:border-none">
                          <td className="p-3 px-4 py-3.5">
                            <div className="font-semibold text-slate-900">{row.name}</div>
                            <div className="text-[12.5px] text-slate-500">{row.email}</div>
                          </td>
                          <td className="p-3 px-4">
                            {row.status === 'Active' 
                              ? <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold bg-emerald-50 text-emerald-600">● Active</span>
                              : <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold bg-slate-100 text-slate-500">● Inactive</span>
                            }
                          </td>
                          <td className="p-3 px-4">
                            {row.pkgId === '9999' && <span className="inline-block px-2.5 py-1 rounded-md text-[12px] font-semibold bg-blue-50 text-blue-600">{row.pkg}</span>}
                            {row.pkgId === '999' && <span className="inline-block px-2.5 py-1 rounded-md text-[12px] font-semibold bg-amber-50 text-amber-600">{row.pkg}</span>}
                            {row.pkgId === 'none' && <span className="text-[13px] text-slate-500">{row.pkg}</span>}
                          </td>
                          <td className="p-3 px-4 font-['Plus_Jakarta_Sans'] font-bold text-slate-900">{row.earn}</td>
                          <td className="p-3 px-4 text-slate-600">{row.date}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* INVITE VIEW */}
          {activeView === "invite" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-[16px] font-bold font-['Plus_Jakarta_Sans']">Your referral link</h2>
                    <div className="text-[12.5px] text-slate-500">No limit — invite as many people as you like</div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 items-stretch">
                  <div className="flex-1 flex items-center gap-2.5 bg-blue-50 border-[1.5px] border-dashed border-blue-200 rounded-xl px-4 py-3">
                    <Copy className="w-[18px] h-[18px] text-blue-600 shrink-0" />
                    <span className="font-semibold text-blue-800 text-[14.5px] break-all">boliwala.com/join?ref=CP_rahul_m8x3</span>
                  </div>
                  <button onClick={copyRefLink} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-[14px] bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4.5">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h2 className="text-[16px] font-bold font-['Plus_Jakarta_Sans'] mb-4">Invite by email or phone</h2>
                  
                  <label className="block text-[13px] font-semibold mb-2 text-slate-700">Email addresses</label>
                  <textarea rows={3} placeholder="priya@email.com, rajesh@email.com, ..." className="w-full border border-slate-200 rounded-xl p-3.5 text-[14px] resize-y focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all"></textarea>
                  <div className="text-[12px] text-slate-500 mt-1.5 mb-4">Separate multiple emails with commas.</div>
                  
                  <label className="block text-[13px] font-semibold mb-2 text-slate-700">Phone numbers (SMS invite)</label>
                  <textarea rows={2} placeholder="+91 98765 43210, ..." className="w-full border border-slate-200 rounded-xl p-3.5 text-[14px] resize-y focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all"></textarea>
                  <div className="text-[12px] text-slate-500 mt-1.5 mb-5">Indian mobile numbers. Separate with commas.</div>

                  <button onClick={handleInvite} className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-[14px] bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <UserPlus className="w-[18px] h-[18px]" /> Send Invites
                  </button>
                </div>

                <div className="flex flex-col gap-4.5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <h2 className="text-[16px] font-bold font-['Plus_Jakarta_Sans'] mb-4">How you earn</h2>
                    <div className="flex flex-col gap-3">
                      <div className="border border-slate-200 rounded-xl p-4">
                        <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] text-blue-600">10%</div>
                        <div className="text-[13px] font-semibold mt-1">On ₹999 subscriptions</div>
                        <div className="text-[12px] text-slate-500 mt-1">Each annual subscriber you refer</div>
                      </div>
                      <div className="border border-slate-200 rounded-xl p-4">
                        <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] text-blue-600">15%</div>
                        <div className="text-[13px] font-semibold mt-1">On ₹9,999 packages</div>
                        <div className="text-[12px] text-slate-500 mt-1">Each BidReady package purchased</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CREATIVES VIEW */}
          {activeView === "creatives" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                <Info className="w-[19px] h-[19px] text-amber-600 shrink-0 mt-0.5" />
                <div className="text-[13.5px] text-amber-900 font-medium">
                  Every creative is <b>automatically branded with your name, phone number, and referral link</b>. Just download and share — leads track straight back to you. No design work needed.
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  { id: 'all', label: 'All Formats' },
                  { id: 'wa', label: 'WhatsApp' },
                  { id: 'ig', label: 'Instagram Post' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setFmtFilter(tab.id)}
                    className={cn("px-4 py-2 rounded-xl text-[13.5px] font-semibold border transition-colors", 
                      fmtFilter === tab.id 
                        ? "bg-blue-600 text-white border-blue-600" 
                        : "bg-white text-slate-700 border-slate-200 hover:border-blue-600"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
                {/* Creative 1 */}
                {(fmtFilter === 'all' || fmtFilter === 'wa') && (
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                    <div className="relative aspect-square bg-gradient-to-br from-blue-600 to-blue-900 p-5 flex flex-col justify-between text-white">
                      <span className="absolute top-3 right-3 bg-slate-900/50 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">1080 × 1080</span>
                      <div className="flex justify-between items-start">
                        <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[15px]">Boliwala</span>
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-semibold">WhatsApp</span>
                      </div>
                      <div>
                        <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[19px] leading-[1.15] tracking-tight">Bank Auction Flats up to 40% below market</div>
                        <div className="text-[11.5px] text-white/90 mt-1.5">Verified SARFAESI listings across India</div>
                        <div className="border-t border-white/25 pt-3 mt-3">
                          <div className="font-bold text-[13px] font-['Plus_Jakarta_Sans']">Rahul Mehta</div>
                          <div className="text-[11.5px] text-white/90 mt-0.5">📞 +91 98200 11223</div>
                          <div className="text-[10.5px] text-white/90 mt-1.5 bg-white/20 px-2 py-1 rounded-md inline-block">boliwala.com/join?ref=CP_rahul_m8x3</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3.5 flex items-center justify-between gap-2">
                      <div>
                        <div className="font-semibold text-[13.5px] text-slate-900">Below-Market Deals</div>
                        <div className="text-[11.5px] text-slate-500">WhatsApp · Square</div>
                      </div>
                      <div className="flex gap-1.5">
                        <button onClick={() => showNotification('Opening share sheet...')} className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors"><Share className="w-4 h-4" /></button>
                        <button onClick={() => showNotification('Downloading personalized image...')} className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors"><Download className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Creative 2 */}
                {(fmtFilter === 'all' || fmtFilter === 'ig') && (
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                    <div className="relative aspect-square bg-gradient-to-br from-amber-600 to-amber-900 p-5 flex flex-col justify-between text-white">
                      <span className="absolute top-3 right-3 bg-slate-900/50 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">1080 × 1080</span>
                      <div className="flex justify-between items-start">
                        <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[15px]">Boliwala</span>
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-semibold">Instagram</span>
                      </div>
                      <div>
                        <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[19px] leading-[1.15] tracking-tight">Your dream home at a bank auction price</div>
                        <div className="text-[11.5px] text-white/90 mt-1.5">Free listings · Expert bid support</div>
                        <div className="border-t border-white/25 pt-3 mt-3">
                          <div className="font-bold text-[13px] font-['Plus_Jakarta_Sans']">Rahul Mehta</div>
                          <div className="text-[11.5px] text-white/90 mt-0.5">📞 +91 98200 11223</div>
                          <div className="text-[10.5px] text-white/90 mt-1.5 bg-white/20 px-2 py-1 rounded-md inline-block">boliwala.com/join?ref=CP_rahul_m8x3</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3.5 flex items-center justify-between gap-2">
                      <div>
                        <div className="font-semibold text-[13.5px] text-slate-900">Dream Home Deal</div>
                        <div className="text-[11.5px] text-slate-500">Instagram · Post</div>
                      </div>
                      <div className="flex gap-1.5">
                        <button onClick={() => showNotification('Opening share sheet...')} className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors"><Share className="w-4 h-4" /></button>
                        <button onClick={() => showNotification('Downloading personalized image...')} className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors"><Download className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* EARNINGS VIEW */}
          {activeView === "earnings" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid md:grid-cols-[1.5fr_1fr] gap-4.5 mb-8">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h2 className="text-[16px] font-bold font-['Plus_Jakarta_Sans'] mb-4">Commission structure</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div className="border border-slate-200 rounded-xl p-4">
                      <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] text-blue-600">10%</div>
                      <div className="text-[13px] font-semibold mt-1 text-slate-900">₹999 Subscription</div>
                      <div className="text-[12px] text-slate-500 mt-1">Per annual subscriber</div>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-4">
                      <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] text-blue-600">15%</div>
                      <div className="text-[13px] font-semibold mt-1 text-slate-900">₹9,999 Package</div>
                      <div className="text-[12px] text-slate-500 mt-1">Per BidReady package</div>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-4">
                      <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] text-blue-600">5%</div>
                      <div className="text-[13px] font-semibold mt-1 text-slate-900">Success Fee</div>
                      <div className="text-[12px] text-slate-500 mt-1">Of our 1% winning-bid fee</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="text-[13px] text-white/85 font-medium">Lifetime earnings</div>
                    <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[38px] tracking-[-0.02em] mt-1.5 mb-1">₹1,84,620</div>
                    <div className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-1.5 rounded-full text-[12px] font-semibold mt-3">
                      <Wallet className="w-3.5 h-3.5" /> Monthly payout cycle
                    </div>
                  </div>
                  <div className="text-[12.5px] text-white/80 mt-6 pt-4 border-t border-white/20">
                    Paid on the 1st of every month.
                  </div>
                </div>
              </div>

              <h2 className="text-[16px] font-bold font-['Plus_Jakarta_Sans'] mb-1">Payout history</h2>
              <div className="text-[12.5px] text-slate-500 mb-4">Monthly settlements to your account</div>
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-x-auto">
                <table className="w-full text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-[11.5px] uppercase tracking-wider text-slate-500">
                      <th className="p-3 px-4 font-bold">Period</th>
                      <th className="p-3 px-4 font-bold">Subscriptions</th>
                      <th className="p-3 px-4 font-bold">Packages</th>
                      <th className="p-3 px-4 font-bold">Success Fees</th>
                      <th className="p-3 px-4 font-bold">Total</th>
                      <th className="p-3 px-4 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="[&>tr:hover]:bg-blue-50/50">
                    <tr className="border-b border-slate-100">
                      <td className="p-3 px-4 font-semibold text-slate-900">July 2026</td>
                      <td className="p-3 px-4">₹799</td>
                      <td className="p-3 px-4">₹17,998</td>
                      <td className="p-3 px-4">₹12,500</td>
                      <td className="p-3 px-4 font-['Plus_Jakarta_Sans'] font-bold">₹31,297</td>
                      <td className="p-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold bg-amber-50 text-amber-600">● Pending</span></td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="p-3 px-4 font-semibold text-slate-900">June 2026</td>
                      <td className="p-3 px-4">₹1,299</td>
                      <td className="p-3 px-4">₹22,497</td>
                      <td className="p-3 px-4">₹15,000</td>
                      <td className="p-3 px-4 font-['Plus_Jakarta_Sans'] font-bold">₹38,796</td>
                      <td className="p-3 px-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold bg-emerald-50 text-emerald-600">✓ Paid</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* TOAST */}
      <div className={cn("fixed bottom-[80px] md:bottom-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold text-[14px] shadow-xl flex items-center gap-2.5 transition-all duration-300 z-50", showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none")}>
        <CheckCircle className="w-[18px] h-[18px] text-emerald-400" />
        {toastMessage}
      </div>

    </div>
  )
}
