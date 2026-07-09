"use client"

import { useState } from "react"
import Link from "next/link"

const pageMap: Record<string, { title: string; crumb: string }> = {
  'dashboard': { title: 'Dashboard', crumb: 'Boliwala Admin › Overview' },
  'listings': { title: 'All Listings', crumb: 'Boliwala Admin › Listings' },
  'add-listing': { title: 'Add Listing', crumb: 'Boliwala Admin › Listings › Add' },
  'listing-detail': { title: 'Edit Listing + Images', crumb: 'Boliwala Admin › Listings › Flat 303, Airoli' },
  'bulk-upload': { title: 'Bulk Upload Excel', crumb: 'Boliwala Admin › Listings › Bulk Upload' },
  'callbacks': { title: 'Callback Requests', crumb: 'Boliwala Admin › Leads › Callbacks' },
  'packages': { title: 'Package Purchases', crumb: 'Boliwala Admin › Leads › Packages' },
  'requests': { title: 'Service Pipeline', crumb: 'Boliwala Admin › Leads › Pipeline' },
  'payments': { title: 'Payments', crumb: 'Boliwala Admin › Finance › Payments' },
  'success-fees': { title: 'Success Fees', crumb: 'Boliwala Admin › Finance › Success Fees' },
  'users': { title: 'All Users', crumb: 'Boliwala Admin › Users' },
  'partners': { title: 'Channel Partners', crumb: 'Boliwala Admin › Partners' },
  'alerts': { title: 'Alert Subscribers', crumb: 'Boliwala Admin › Engagement › Alert Subscribers' },
  'alert-engine': { title: 'Alert Engine & Log', crumb: 'Boliwala Admin › Engagement › Alert Engine' },
  'email-campaigns': { title: 'Email Campaigns', crumb: 'Boliwala Admin › Engagement › Email Campaigns' },
  'whatsapp': { title: 'WhatsApp Tools', crumb: 'Boliwala Admin › Engagement › WhatsApp Tools' },
  'segments': { title: 'Segments & Export', crumb: 'Boliwala Admin › Engagement › Segments' },
  'engagement': { title: 'Engagement Analytics', crumb: 'Boliwala Admin › Engagement › Analytics' },
  'analytics': { title: 'Site Analytics', crumb: 'Boliwala Admin › Tools › Site Analytics' },
  'settings': { title: 'Settings', crumb: 'Boliwala Admin › Settings' },
}

export function AdminView() {
  const [activePage, setActivePage] = useState('dashboard')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const currentPage = pageMap[activePage] || pageMap['dashboard']

  const NavItem = ({ id, icon, label, badge, badgeColor = "bg-red-500" }: any) => {
    const isActive = activePage === id
    return (
      <div
        onClick={() => { setActivePage(id); setIsSidebarOpen(false); }}
        className={`flex items-center gap-2.5 px-5 py-2.5 cursor-pointer transition-all relative ${isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-white/10 text-white/65 hover:text-white'
          }`}
      >
        {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-300 rounded-r-sm" />}
        <span className="text-[15px] shrink-0 w-5 text-center">{icon}</span>
        <span className={`text-[13px] flex-1 ${isActive ? 'font-semibold' : 'font-medium'}`}>{label}</span>
        {badge && <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-full min-w-[20px] text-center ${badgeColor}`}>{badge}</span>}
      </div>
    )
  }

  const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="text-[10px] font-bold uppercase tracking-[1.2px] text-white/30 px-5 pt-3.5 pb-1.5">{children}</div>
  )

  const StatCard = ({ icon, trend, trendUp = true, trendFlat = false, value, label, iconBg }: any) => (
    <div className="bg-card border border-border rounded-xl p-4.5 shadow-sm">
      <div className="flex items-start justify-between mb-2.5">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-[17px] ${iconBg}`}>{icon}</div>
        {trend && (
          <div className={`flex items-center text-[11px] font-bold px-2 py-0.5 rounded-full ${trendFlat ? 'bg-secondary text-muted-foreground' :
            trendUp ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20' : 'bg-red-100 text-red-600 dark:bg-red-500/20'
            }`}>{trend}</div>
        )}
      </div>
      <div className="font-display text-2xl font-extrabold text-foreground tracking-tight mb-0.5">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )

  const AlertStrip = ({ icon, title, subtitle, linkText, linkAction, type = "warning" }: any) => {
    const styles = {
      warning: "bg-amber-50 border-amber-500/25 dark:bg-amber-500/10 dark:border-amber-500/20",
      danger: "bg-red-50 border-red-500/20 dark:bg-red-500/10 dark:border-red-500/20",
      info: "bg-blue-50 border-blue-500/20 dark:bg-blue-500/10 dark:border-blue-500/20",
    }
    return (
      <div className={`rounded-lg p-3.5 flex items-start gap-3 border mb-3 ${styles[type as keyof typeof styles]}`}>
        <span className="text-[17px] shrink-0 mt-0.5">{icon}</span>
        <div>
          <div className="text-[13px] font-bold text-foreground mb-0.5">{title}</div>
          {subtitle && <div className="text-xs text-muted-foreground leading-relaxed">{subtitle}</div>}
          {linkText && <span onClick={linkAction} className="text-xs font-semibold text-primary cursor-pointer mt-1 inline-block hover:underline">{linkText}</span>}
        </div>
      </div>
    )
  }

  const Th = ({ children }: any) => <th className="p-3 text-[11px] font-bold uppercase tracking-[0.8px] text-muted-foreground text-left">{children}</th>
  const Td = ({ children, className = "" }: any) => <td className={`p-3 text-[13px] text-muted-foreground ${className}`}>{children}</td>
  const Pill = ({ children, type }: any) => {
    const styles = {
      green: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20",
      gold: "bg-amber-100 text-amber-600 dark:bg-amber-500/20",
      red: "bg-red-100 text-red-600 dark:bg-red-500/20",
      purple: "bg-purple-100 text-purple-600 dark:bg-purple-500/20",
      gray: "bg-secondary text-muted-foreground",
      blue: "bg-blue-100 text-blue-600 dark:bg-blue-500/20",
    }
    return <span className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${styles[type as keyof typeof styles]}`}>{children}</span>
  }
  const RaBtn = ({ children, primary = false, danger = false }: any) => (
    <button className={`h-7 px-2.5 rounded-md text-[11px] font-semibold border-2 transition-colors whitespace-nowrap ${primary ? 'bg-primary border-primary text-primary-foreground hover:bg-primary/90' :
      danger ? 'border-border bg-background text-muted-foreground hover:border-destructive hover:text-destructive' :
        'border-border bg-background text-muted-foreground hover:border-primary hover:text-primary'
      }`}>{children}</button>
  )

  const TcHead = ({ title, acts }: any) => (
    <div className="px-5 py-3.5 border-b border-border flex flex-wrap items-center justify-between gap-3">
      <div className="font-display text-[15px] font-bold text-foreground flex items-center gap-2">{title}</div>
      <div className="flex items-center gap-2 flex-wrap">{acts}</div>
    </div>
  )

  const TcActionSelect = ({ options }: any) => (
    <select className="h-8 px-2.5 border-2 border-border rounded-lg text-xs text-muted-foreground bg-background outline-none cursor-pointer">
      {options.map((o: string, i: number) => <option key={i}>{o}</option>)}
    </select>
  )
  const TcActionBtn = ({ children, primary = false }: any) => (
    <button className={`h-8 px-3.5 text-xs font-semibold rounded-lg transition-colors ${primary ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-background border-2 border-border text-muted-foreground hover:border-muted-foreground'}`}>{children}</button>
  )

  const FormSection = ({ title, children, foot }: any) => (
    <div className="bg-card border border-border rounded-xl shadow-sm mb-4">
      <div className="px-5 py-3.5 border-b border-border font-display text-[15px] font-bold text-foreground">{title}</div>
      <div className="p-5">{children}</div>
      {foot && <div className="px-5 py-3.5 border-t border-border bg-muted/50 flex justify-end gap-2">{foot}</div>}
    </div>
  )

  const Flbl = ({ children }: any) => <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">{children}</label>
  const Finp = ({ defaultValue, type = "text", placeholder }: any) => <input type={type} defaultValue={defaultValue} placeholder={placeholder} className="w-full h-9 px-3 border-2 border-border rounded-lg text-[13px] bg-background text-foreground outline-none focus:border-primary" />
  const Fsel = ({ options }: any) => (
    <select className="w-full h-9 px-3 border-2 border-border rounded-lg text-[13px] bg-background text-foreground outline-none focus:border-primary">
      {options.map((o: string, i: number) => <option key={i}>{o}</option>)}
    </select>
  )

  return (
    <div className="flex min-h-screen bg-muted/50 font-sans text-sm text-foreground">
      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-[240px] bg-[#111827] flex flex-col transition-transform duration-300 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4.5 border-b border-white/10 pt-5 pb-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-display text-[15px] font-extrabold text-white shrink-0">B</div>
            <div>
              <div className="font-display text-base font-extrabold text-white tracking-tight leading-none">Boli<span className="text-amber-400">wala</span></div>
              <div className="text-[9px] text-white/35 uppercase tracking-[1px] block mt-0.5 font-bold">Admin Panel</div>
            </div>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-white/50 hover:text-white">✕</button>
        </div>
        <div className="flex-1 overflow-y-auto py-2 scrollbar-hide">
          <SectionLabel>Listings</SectionLabel>
          <NavItem id="dashboard" icon="📊" label="Dashboard" />
          <NavItem id="listings" icon="🏠" label="All Listings" badge="247" badgeColor="bg-amber-500" />
          <NavItem id="add-listing" icon="➕" label="Add Listing" />
          <NavItem id="bulk-upload" icon="📂" label="Bulk Upload Excel" />
          <SectionLabel>Leads & Sales</SectionLabel>
          <NavItem id="callbacks" icon="📞" label="Callback Requests" badge="18" />
          <NavItem id="packages" icon="💼" label="Package Purchases" badge="9" badgeColor="bg-amber-500" />
          <NavItem id="requests" icon="📋" label="Service Pipeline" />
          <SectionLabel>Finance</SectionLabel>
          <NavItem id="payments" icon="💰" label="Payments" />
          <NavItem id="success-fees" icon="🏆" label="Success Fees" badge="4" />
          <SectionLabel>Users & Partners</SectionLabel>
          <NavItem id="users" icon="👥" label="All Users" />
          <NavItem id="partners" icon="🤝" label="Channel Partners" badge="6" badgeColor="bg-amber-500" />
          <SectionLabel>Engagement</SectionLabel>
          <NavItem id="alerts" icon="🔔" label="Alert Subscribers" />
          <NavItem id="alert-engine" icon="⚡" label="Alert Engine & Log" />
          <NavItem id="email-campaigns" icon="📧" label="Email Campaigns" />
          <NavItem id="whatsapp" icon="💬" label="WhatsApp Tools" />
          <NavItem id="segments" icon="🎯" label="Segments & Export" />
          <NavItem id="engagement" icon="📊" label="Engagement Analytics" />
          <SectionLabel>Tools</SectionLabel>
          <NavItem id="analytics" icon="📈" label="Site Analytics" />
          <NavItem id="settings" icon="⚙️" label="Settings" />
        </div>
        <div className="p-3.5 border-t border-white/10 flex items-center gap-2.5 mt-auto shrink-0 bg-[#0A0F1C]">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[13px] font-bold text-white shrink-0">D</div>
          <div><div className="text-[13px] font-semibold text-white leading-tight">Dipak</div><div className="text-[11px] text-white/40">Super Admin</div></div>
        </div>
      </aside>

      {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />}

      <main className="flex-1 flex flex-col min-h-screen md:ml-[240px] overflow-x-hidden relative">
        <header className="bg-card border-b border-border px-4 sm:px-7 h-14 flex items-center justify-between shrink-0 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden text-muted-foreground hover:text-foreground">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <div className="flex items-center">
              <h1 className="font-display text-base font-bold text-foreground">{currentPage.title}</h1>
              <span className="hidden sm:inline text-xs text-muted-foreground ml-3 px-3 border-l border-border">{currentPage.crumb}</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-2 bg-muted border border-border rounded-lg px-3 h-8.5">
              <span>🔍</span><input type="text" placeholder="Search…" className="bg-transparent border-none outline-none text-[13px] text-foreground w-[180px] placeholder:text-muted-foreground" />
            </div>
            <button className="w-8.5 h-8.5 rounded-lg bg-muted border border-border flex items-center justify-center hover:bg-secondary relative text-[15px]">
              🔔<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border-[1.5px] border-card"></span>
            </button>
            <button onClick={() => setActivePage('add-listing')} className="hidden sm:flex h-8.5 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg text-[13px] items-center gap-1.5 transition-colors">➕ Add Listing</button>
            <button onClick={() => setActivePage('bulk-upload')} className="hidden md:flex h-8.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-[13px] items-center gap-1.5 transition-colors">📂 Bulk Upload</button>
          </div>
        </header>

        <div className="p-4 sm:p-7 flex-1">

          {/* DASHBOARD */}
          {activePage === 'dashboard' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon="🏠" iconBg="bg-blue-100 dark:bg-blue-500/20" trend="↑ 12%" value="247" label="Active Listings" />
                <StatCard icon="💰" iconBg="bg-emerald-100 dark:bg-emerald-500/20" trend="↑ 28%" value="₹3,84,000" label="Revenue This Month" />
                <StatCard icon="📞" iconBg="bg-red-100 dark:bg-red-500/20" trend="↑ 5" value="18" label="Callback Requests" />
                <StatCard icon="💼" iconBg="bg-amber-100 dark:bg-amber-500/20" trend="↑ 3" value="9" label="Package Purchases" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon="👥" iconBg="bg-purple-100 dark:bg-purple-500/20" trend="↑ 34%" value="1,842" label="Registered Users" />
                <StatCard icon="🏆" iconBg="bg-emerald-100 dark:bg-emerald-500/20" trend="↑ 2" value="38" label="Auctions Won" />
                <StatCard icon="🔔" iconBg="bg-blue-100 dark:bg-blue-500/20" trend="↑ 18%" value="4,291" label="Alert Subscribers" />
                <StatCard icon="🏆" iconBg="bg-red-100 dark:bg-red-500/20" trend="↑ 4" trendUp={false} value="4" label="Success Fees Pending" />
              </div>

              <div className="space-y-2.5 pt-1">
                <AlertStrip type="danger" icon="📞" title="18 callback requests unread — 6 waiting over 2 hours" subtitle="Users have requested a call from Boliwala. Call them back immediately." linkText="View Callback Requests →" linkAction={() => setActivePage('callbacks')} />
                <AlertStrip type="warning" icon="🏆" title="4 success fees outstanding — ₹1,12,400 due" subtitle="Clients won auctions. Collect 1% success fee." linkText="Collect Fees →" linkAction={() => setActivePage('success-fees')} />
                <AlertStrip type="info" icon="🤝" title="6 new channel partner applications pending" linkText="Review Applications →" linkAction={() => setActivePage('partners')} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-2">
                <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="px-5 py-3.5 border-b border-border"><h3 className="font-display text-[15px] font-bold text-foreground flex items-center gap-2">⚡ Recent Activity</h3></div>
                  <div className="px-5 py-1">
                    {[
                      { icon: "📞", bg: "bg-red-100 dark:bg-red-500/20", text: <><strong className="font-semibold text-foreground">Priya Mehta</strong> requested a callback — Flat 303 Airoli, interested in full package</>, time: "4 minutes ago" },
                      { icon: "💼", bg: "bg-emerald-100 dark:bg-emerald-500/20", text: <><strong className="font-semibold text-foreground">Rajesh Kumar</strong> purchased ₹9,999 package</>, time: "18 minutes ago" },
                      { icon: "🏠", bg: "bg-blue-100 dark:bg-blue-500/20", text: <>New listing added — <strong className="font-semibold text-foreground">Flat 303, Vithai Apt</strong></>, time: "1 hour ago" },
                      { icon: "🏆", bg: "bg-emerald-100 dark:bg-emerald-500/20", text: <><strong className="font-semibold text-foreground">Amit Sharma</strong> won auction — ₹82,00,000.</>, time: "3 hours ago" },
                      { icon: "🔔", bg: "bg-amber-100 dark:bg-amber-500/20", text: <><strong className="font-semibold text-foreground">47 alert emails</strong> sent</>, time: "6 hours ago" },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-start gap-3 py-3 ${i !== 4 ? 'border-b border-border' : ''}`}>
                        <div className={`w-7.5 h-7.5 rounded-full flex items-center justify-center text-[13px] shrink-0 ${item.bg}`}>{item.icon}</div>
                        <div><div className="text-[13px] text-muted-foreground leading-relaxed">{item.text}</div><div className="text-[11px] text-muted-foreground mt-0.5">{item.time}</div></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                    <div className="px-5 py-3.5 border-b border-border"><h3 className="font-display text-[15px] font-bold text-foreground">⚡ Quick Actions</h3></div>
                    <div className="p-4.5"><div className="grid grid-cols-4 gap-2.5">
                      {[{ i: "🏠", l: "Add Listing", id: "add-listing" }, { i: "📂", l: "Bulk Upload", id: "bulk-upload" }, { i: "📞", l: "Callbacks", id: "callbacks" }, { i: "💼", l: "Packages", id: "packages" }, { i: "💰", l: "Payments", id: "payments" }, { i: "👥", l: "Users", id: "users" }, { i: "🔔", l: "Alerts", id: "alerts" }, { i: "📈", l: "Analytics", id: "analytics" }].map((qa, i) => (
                        <div key={i} onClick={() => setActivePage(qa.id)} className="bg-card border border-border rounded-lg p-3 text-center cursor-pointer hover:border-primary hover:-translate-y-0.5 hover:shadow-md transition-all group">
                          <div className="text-[22px] mb-1.5">{qa.i}</div><div className="text-xs font-semibold text-muted-foreground group-hover:text-primary">{qa.l}</div>
                        </div>
                      ))}
                    </div></div>
                  </div>
                  <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
                    <div className="px-5 py-3.5 border-b border-border"><h3 className="font-display text-[15px] font-bold text-foreground">📈 Revenue — Last 8 Months</h3></div>
                    <div className="p-4.5">
                      <div className="flex items-end gap-1.5 h-[52px]">
                        {[35, 50, 42, 65, 58, 72, 80, 100].map((h, i) => <div key={i} className={`flex-1 rounded-t-sm ${i === 7 ? 'bg-primary' : 'bg-blue-100 dark:bg-blue-500/20'}`} style={{ height: `${h}%` }}></div>)}
                      </div>
                      <div className="flex gap-1.5 mt-1">
                        {['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m, i) => <div key={i} className={`flex-1 text-center text-[10px] ${i === 7 ? 'text-primary font-bold' : 'text-muted-foreground'}`}>{m}</div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ALL LISTINGS */}
          {activePage === 'listings' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title={<>🏠 All Listings <span className="text-xs font-normal text-muted-foreground">247 total</span></>} acts={<>
                  <input type="text" placeholder="City, bank, ID…" className="h-8 px-3 border-2 border-border rounded-lg text-[13px] outline-none focus:border-primary bg-background w-[180px]" />
                  <TcActionSelect options={['All Banks', 'Bank of Baroda', 'SBI', 'HDFC']} />
                  <TcActionSelect options={['All Status', 'Active', 'Upcoming', 'Closed', 'Won']} />
                  <TcActionBtn>⬇️ Export CSV</TcActionBtn>
                  <TcActionBtn>📂 Bulk Upload</TcActionBtn>
                  <TcActionBtn primary>➕ Add Listing</TcActionBtn>
                </>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><th className="p-3 w-10 text-center"><input type="checkbox" /></th><Th>Property ID</Th><Th>Property</Th><Th>Bank</Th><Th>Reserve Price</Th><Th>EMD</Th><Th>Auction Date</Th><Th>Views</Th><Th>PDF</Th><Th>Status</Th><Th>Actions</Th></tr></thead>
                  <tbody>
                    {[
                      { id: 'BARBNANDY303', t: 'Flat 303, Vithai Apt, Airoli', sub: 'Navi Mumbai', b: 'Bank of Baroda', r: '₹60,12,000', e: '₹6,12,000', d: '07 Jul 2026', v: '342', pdf: true, s: 'Active', color: 'green' },
                      { id: 'SBI-AND-303', t: '3 BHK Apartment, Andheri West', sub: 'Mumbai', b: 'SBI', r: '₹78,00,000', e: '₹7,80,000', d: '18 Jul 2026', v: '891', pdf: false, s: 'Active', color: 'green' },
                      { id: 'HDFC-DEL-22', t: 'Commercial Shop, Connaught Place', sub: 'New Delhi', b: 'HDFC Bank', r: '₹1,45,00,000', e: '₹14,50,000', d: '05 Jun 2026', v: '104', pdf: true, s: 'Closed', color: 'gray' }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border hover:bg-muted/30">
                        <td className="p-3 text-center"><input type="checkbox" /></td>
                        <Td className="font-mono text-xs">{row.id}</Td>
                        <Td><div className="font-semibold text-foreground">{row.t}</div><div className="text-[11px]">{row.sub}</div></Td>
                        <Td>{row.b}</Td>
                        <Td className="font-semibold text-foreground">{row.r}</Td>
                        <Td>{row.e}</Td><Td>{row.d}</Td>
                        <Td><span className="text-[12px] bg-secondary px-2 py-0.5 rounded-full">👁 {row.v}</span></Td>
                        <Td><span className={row.pdf ? "text-emerald-500" : "text-red-500"}>{row.pdf ? '✅' : '❌'}</span></Td>
                        <Td><Pill type={row.color}>• {row.s}</Pill></Td>
                        <Td><div className="flex gap-1.5"><RaBtn>Edit</RaBtn><RaBtn>📷 Images</RaBtn><RaBtn danger>✕</RaBtn></div></Td>
                      </tr>
                    ))}
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* ADD / EDIT LISTING */}
          {(activePage === 'add-listing' || activePage === 'listing-detail') && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center gap-3 mb-4">
                <button onClick={() => setActivePage('listings')} className="h-9 px-3.5 bg-background border-2 border-border text-muted-foreground text-[13px] rounded-lg">← Back</button>
                <div className="font-display text-base font-bold text-foreground">Flat 303, Vithai Apartment, Airoli — Edit Listing</div>
              </div>
              <div className="flex border-b-2 border-border mb-4 overflow-x-auto">
                {['Property Details', 'Bank & Auction', '📷 Images & PDF', 'Gated Fields'].map((t, i) => (
                  <div key={i} className={`px-4 py-2 text-[13px] cursor-pointer font-medium whitespace-nowrap -mb-[2px] border-b-2 ${i === 2 ? 'text-primary border-primary font-bold' : 'text-muted-foreground border-transparent'}`}>{t}</div>
                ))}
              </div>
              <FormSection title="📷 Property Images" foot={<><button className="h-9 px-3.5 bg-background border-2 border-border text-muted-foreground text-[13px] rounded-lg">Cancel</button><button className="h-9 px-5 bg-primary text-primary-foreground font-semibold text-[13px] rounded-lg">Save Changes</button></>}>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5">
                  <div className="aspect-square bg-blue-900 rounded-lg flex items-center justify-center text-3xl relative border-2 border-transparent hover:border-primary"><div className="absolute top-1 right-1 w-5 h-5 bg-red-600 rounded-full text-white text-[10px] flex items-center justify-center cursor-pointer">✕</div>🏢</div>
                  <div className="aspect-square bg-emerald-900 rounded-lg flex items-center justify-center text-3xl relative border-2 border-transparent hover:border-primary"><div className="absolute top-1 right-1 w-5 h-5 bg-red-600 rounded-full text-white text-[10px] flex items-center justify-center cursor-pointer">✕</div>🚪</div>
                  <div className="aspect-square border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground rounded-lg cursor-pointer hover:bg-muted/50 hover:border-primary hover:text-primary"><span className="text-xl">+</span><span className="text-[11px] mt-1">Add</span></div>
                </div>
              </FormSection>
            </div>
          )}

          {/* BULK UPLOAD */}
          {activePage === 'bulk-upload' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <FormSection title="📂 Bulk Upload Listings via Excel">
                <AlertStrip type="info" icon="💡" title="How bulk upload works" subtitle="Download the template, fill it in, and upload it below. All listings will be created as drafts." />
                <div className="flex gap-3 mb-5 mt-4">
                  <button className="h-10 px-4 bg-primary text-primary-foreground font-semibold rounded-lg text-[13px]">⬇️ Download Excel Template</button>
                  <button className="h-10 px-4 border-2 border-border bg-background text-foreground font-semibold rounded-lg text-[13px]">📄 Download Sample File</button>
                </div>
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:bg-muted/50 hover:border-primary transition-colors">
                  <div className="text-3xl mb-1.5">📊</div>
                  <div className="text-sm font-semibold text-foreground mb-0.5">Click or drag your Excel file here</div>
                  <div className="text-xs text-muted-foreground">.xlsx or .xls · Max 5MB · Up to 500 rows per upload</div>
                  <button className="mt-3 h-8.5 px-4 bg-primary text-primary-foreground font-semibold rounded-lg text-[13px]">Choose File</button>
                </div>
              </FormSection>
            </div>
          )}

          {/* CALLBACKS */}
          {activePage === 'callbacks' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon="📞" iconBg="bg-red-100 dark:bg-red-500/20" value="18" label="Total Callbacks" />
                <StatCard icon="🆕" iconBg="bg-red-100 dark:bg-red-500/20" value={<span className="text-red-600">6</span>} label="Unread — Call Now" />
                <StatCard icon="🕐" iconBg="bg-amber-100 dark:bg-amber-500/20" value="8" label="In Progress" />
                <StatCard icon="✅" iconBg="bg-emerald-100 dark:bg-emerald-500/20" value="4" label="Converted to Package" />
              </div>
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title="📞 Callback Requests" acts={<><input className="h-8 px-3 border-2 border-border rounded-lg text-[13px] bg-background w-[180px]" placeholder="Search name, city…" /><TcActionBtn>⬇️ Export</TcActionBtn></>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><Th>User</Th><Th>Property Interest</Th><Th>City</Th><Th>Budget</Th><Th>Requested</Th><Th>Status</Th><Th>Actions</Th></tr></thead>
                  <tbody>
                    <tr className="bg-red-50/50 dark:bg-red-500/5 border-b border-border">
                      <Td><div className="font-bold text-foreground">Priya Mehta</div><div className="text-[11px]">📞 9765432109</div></Td>
                      <Td>Flat 303, Vithai Apt — Full package interest</Td><Td>Navi Mumbai</Td><Td>₹50L–1Cr</Td>
                      <Td className="text-red-600 font-semibold">4 min ago</Td><Td><Pill type="red">New</Pill></Td>
                      <Td><div className="flex gap-1.5"><RaBtn primary>📞 Call Now</RaBtn><RaBtn>Add Note</RaBtn></div></Td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/30">
                      <Td><div className="font-bold text-foreground">Anita Rao</div><div className="text-[11px]">📞 9543210987</div></Td>
                      <Td>General — First time auction buyer query</Td><Td>Bengaluru</Td><Td>₹30L–60L</Td>
                      <Td>2 hours ago</Td><Td><Pill type="gold">Called</Pill></Td>
                      <Td><div className="flex gap-1.5"><RaBtn>📞 Call Again</RaBtn><RaBtn>Convert</RaBtn></div></Td>
                    </tr>
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* PACKAGES */}
          {activePage === 'packages' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard label="Total Packages Sold" value="47" trend="All time · ₹4,69,953 revenue" trendFlat iconBg="bg-blue-100" />
                <StatCard label="This Month" value="9" trend="₹89,991 · Jun 2026" trendFlat iconBg="bg-blue-100" />
                <StatCard label="Conversion Rate" value="18.4%" trend="Signups → Package" trendFlat iconBg="bg-blue-100" />
              </div>
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title="💼 ₹9,999 Package Purchases" acts={<><input className="h-8 px-3 border-2 border-border rounded-lg text-[13px] bg-background w-[180px]" placeholder="Search name…" /><TcActionBtn>⬇️ Export</TcActionBtn></>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><Th>Client</Th><Th>Property of Interest</Th><Th>Package</Th><Th>Txn ID</Th><Th>Pipeline Status</Th><Th>Actions</Th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/30">
                      <Td><div className="font-bold text-foreground">Rajesh Kumar</div><div className="text-[11px]">rajesh@gmail.com</div></Td>
                      <Td>Flat 303, Vithai Apt, Airoli</Td><Td><Pill type="blue">DD + Bid Mgmt</Pill></Td>
                      <Td className="font-mono text-xs">RZP-98765</Td><Td><Pill type="gold">In Progress</Pill></Td>
                      <Td><div className="flex gap-1.5"><RaBtn>View Pipeline</RaBtn><RaBtn>📄 Invoice</RaBtn></div></Td>
                    </tr>
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* PAYMENTS */}
          {activePage === 'payments' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard label="Total Revenue All Time" value="₹21,44,000" trend="214 transactions" trendFlat />
                <StatCard label="This Month (Jun 2026)" value="₹3,84,000" trend="38 transactions" trendFlat />
                <StatCard label="Outstanding Success Fees" value={<span className="text-red-600">₹1,12,400</span>} trend="4 auctions won" trendFlat />
              </div>
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title="💰 All Transactions" acts={<><TcActionSelect options={['All Types', '₹9,999 Package', '1% Success Fee']} /><TcActionBtn>⬇️ Export CSV</TcActionBtn></>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><Th>Date</Th><Th>Client</Th><Th>Type</Th><Th>Txn ID</Th><Th>Amount</Th><Th>Status</Th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/30">
                      <Td>30 Jun 2026</Td><Td className="font-bold text-foreground">Rajesh Kumar</Td><Td>₹9,999 Package</Td><Td className="font-mono text-xs">RZP-98765</Td>
                      <Td className="font-bold text-foreground">₹9,999</Td><Td><Pill type="green">Received</Pill></Td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/30">
                      <Td>22 Jun 2026</Td><Td className="font-bold text-foreground">Vikram Patel</Td><Td>1% Success Fee</Td><Td className="font-mono text-xs">—</Td>
                      <Td className="font-bold text-foreground">₹60,120</Td><Td><Pill type="red">Outstanding</Pill></Td>
                    </tr>
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* USERS */}
          {activePage === 'users' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon="👥" iconBg="bg-blue-100" trend="↑ 34%" value="1,842" label="Total Users" />
                <StatCard icon="💼" iconBg="bg-emerald-100" trend="↑ 9" value="47" label="Paid Package Users" />
                <StatCard icon="👤" iconBg="bg-purple-100" value="1,795" label="Free Users" />
                <StatCard icon="📞" iconBg="bg-amber-100" trend="↑ 18" value="18" label="Requested Callback" />
              </div>
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title="👥 All Users" acts={<><input className="h-8 px-3 border-2 border-border rounded-lg text-[13px] bg-background w-[180px]" placeholder="Search name, email…" /><TcActionBtn>⬇️ Export CSV</TcActionBtn></>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><Th>User</Th><Th>Phone</Th><Th>Signed Up</Th><Th>Shortlisted</Th><Th>Type</Th><Th>Actions</Th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/30">
                      <Td><div className="font-bold text-foreground">Rajesh Kumar</div><div className="text-[11px]">rajesh@gmail.com</div></Td>
                      <Td>9876543210</Td><Td>30 Jun</Td><Td>3 properties</Td><Td><Pill type="green">Paid</Pill></Td>
                      <Td><RaBtn>View</RaBtn></Td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/30">
                      <Td><div className="font-bold text-foreground">Suresh Rathi</div><div className="text-[11px]">suresh@gmail.com</div></Td>
                      <Td>9654321098</Td><Td>28 Jun</Td><Td>2 properties</Td><Td><Pill type="gray">Free</Pill></Td>
                      <Td><div className="flex gap-1.5"><RaBtn>View</RaBtn><RaBtn>📞 Call</RaBtn></div></Td>
                    </tr>
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* SETTINGS */}
          {activePage === 'settings' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <FormSection title="⚙️ General Settings" foot={<button className="h-9 px-5 bg-primary text-primary-foreground font-semibold text-[13px] rounded-lg">Save Settings</button>}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><Flbl>Site Name</Flbl><Finp defaultValue="Boliwala.com" /></div>
                  <div><Flbl>Base Service Fee (₹)</Flbl><Finp defaultValue="9999" /></div>
                  <div><Flbl>Contact Email</Flbl><Finp defaultValue="hello@boliwala.com" /></div>
                  <div><Flbl>WhatsApp</Flbl><Finp defaultValue="+91 98765 43210" /></div>
                </div>
              </FormSection>
              <FormSection title="🔑 API Keys" foot={<button className="h-9 px-5 bg-primary text-primary-foreground font-semibold text-[13px] rounded-lg">Save Keys</button>}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><Flbl>Razorpay Key ID</Flbl><Finp type="password" placeholder="rzp_live_XXXX" /></div>
                  <div><Flbl>Razorpay Secret</Flbl><Finp type="password" placeholder="••••••••" /></div>
                </div>
              </FormSection>
            </div>
          )}

          {/* REQUESTS */}
          {activePage === 'requests' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex border-b-2 border-border mb-4 overflow-x-auto">
                {['All (47)', 'New (12)', 'In Progress (18)', 'Completed (14)', 'Dropped (3)'].map((t, i) => (
                  <div key={i} className={`px-4 py-2 text-[13px] cursor-pointer font-medium whitespace-nowrap -mb-[2px] border-b-2 ${i === 0 ? 'text-primary border-primary font-bold' : 'text-muted-foreground border-transparent'}`}>{t}</div>
                ))}
              </div>
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title="📋 Service Pipeline" acts={<><input className="h-8 px-3 border-2 border-border rounded-lg text-[13px] bg-background w-[180px]" placeholder="Search…" /><TcActionBtn>⬇️ Export</TcActionBtn></>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><Th>Client</Th><Th>Service</Th><Th>City</Th><Th>Property</Th><Th>Stage</Th><Th>Status</Th><Th>Actions</Th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/30">
                      <Td><div className="font-bold text-foreground">Rajesh Kumar</div><div className="text-[11px]">📞 9876543210</div></Td>
                      <Td>DD + Bid Mgmt</Td><Td>Navi Mumbai</Td><Td>Flat 303, Airoli</Td><Td>Due Diligence</Td>
                      <Td><Pill type="gold">In Progress</Pill></Td>
                      <Td><div className="flex gap-1.5"><RaBtn>View</RaBtn><RaBtn>💬 WhatsApp</RaBtn></div></Td>
                    </tr>
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* SUCCESS FEES */}
          {activePage === 'success-fees' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <AlertStrip type="danger" icon="🏆" title="4 success fees outstanding — ₹1,12,400 total due" subtitle="These clients have won auctions. Send invoices and collect 1% success fee." />
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title="🏆 Success Fee Tracker" acts={<></>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><Th>Client</Th><Th>Property Won</Th><Th>Winning Bid</Th><Th>Base Paid</Th><Th>1% Due</Th><Th>Date Won</Th><Th>Status</Th><Th>Actions</Th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/30">
                      <Td className="font-bold text-foreground">Amit Sharma</Td><Td>3BHK Andheri West</Td><Td>₹82,00,000</Td><Td>✅ ₹9,999</Td>
                      <Td className="font-bold text-red-600">₹82,000</Td><Td>18 Jun 2026</Td><Td><Pill type="red">Outstanding</Pill></Td>
                      <Td><div className="flex gap-1.5"><RaBtn>📄 Send Invoice</RaBtn><RaBtn primary>Mark Paid</RaBtn></div></Td>
                    </tr>
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* PARTNERS */}
          {activePage === 'partners' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title={<>🤝 Channel Partners <span className="text-xs font-normal text-muted-foreground">31 active · 6 pending</span></>} acts={<><TcActionSelect options={['All Tiers', 'Associate', 'Silver', 'Gold']} /><TcActionSelect options={['All Status', 'Pending', 'Active']} /><TcActionBtn>⬇️ Export</TcActionBtn></>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><Th>Partner</Th><Th>City / Localities</Th><Th>Tier</Th><Th>Referrals</Th><Th>Converted</Th><Th>Commission</Th><Th>Status</Th><Th>Actions</Th></tr></thead>
                  <tbody>
                    <tr className="bg-amber-50/50 dark:bg-amber-500/5 border-b border-border">
                      <Td><div className="font-bold text-foreground">Vikram Patel</div><div className="text-[11px]">Ahmedabad</div></Td>
                      <Td>Navrangpura, SG Road</Td><Td>—</Td><Td>0</Td><Td>0</Td><Td>—</Td><Td><Pill type="gold">Pending</Pill></Td>
                      <Td><div className="flex gap-1.5"><RaBtn primary>✅ Approve</RaBtn><RaBtn danger>✕ Reject</RaBtn></div></Td>
                    </tr>
                    <tr className="border-b border-border hover:bg-muted/30">
                      <Td><div className="font-bold text-foreground">Suresh Nair</div><div className="text-[11px]">9876543210 · Kochi</div></Td>
                      <Td>Ernakulam, Kakkanad</Td><Td><Pill type="gold">Silver</Pill></Td><Td>8</Td><Td>5</Td><Td>₹12,400</Td><Td><Pill type="green">Active</Pill></Td>
                      <Td><div className="flex gap-1.5"><RaBtn>View</RaBtn><RaBtn>Creatives</RaBtn></div></Td>
                    </tr>
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* ALERTS */}
          {activePage === 'alerts' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard icon="🔔" iconBg="bg-blue-100" value="4,291" label="Total Subscribers" />
                <StatCard icon="📧" iconBg="bg-emerald-100" value="3,840" label="Email" />
                <StatCard icon="💬" iconBg="bg-amber-100" value="1,204" label="WhatsApp" />
              </div>
              <FormSection title="📣 Send Manual Alert Broadcast" foot={<><button className="h-9 px-3.5 bg-background border-2 border-border text-muted-foreground text-[13px] rounded-lg">Preview</button><button className="h-9 px-5 bg-primary text-primary-foreground font-semibold text-[13px] rounded-lg">🔔 Send Now</button></>}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><Flbl>Target City</Flbl><Fsel options={['All Cities', 'Mumbai', 'Delhi']} /></div>
                  <div><Flbl>Property Type</Flbl><Fsel options={['All Types', 'Residential', 'Commercial']} /></div>
                  <div><Flbl>Send Via</Flbl><Fsel options={['Email + WhatsApp', 'Email only', 'WhatsApp only']} /></div>
                  <div className="col-span-1 md:col-span-3"><Flbl>Message</Flbl><textarea className="w-full min-h-[72px] p-3 border-2 border-border rounded-lg text-[13px] bg-background text-foreground outline-none focus:border-primary" placeholder="New Bank of Baroda listings in Airoli…"></textarea></div>
                </div>
              </FormSection>
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title="Alert Subscribers" acts={<><input className="h-8 px-3 border-2 border-border rounded-lg text-[13px] bg-background w-[180px]" placeholder="Search email…" /><TcActionBtn>⬇️ Export</TcActionBtn></>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><Th>Email / WhatsApp</Th><Th>City</Th><Th>Type</Th><Th>Bank</Th><Th>Budget</Th><Th>Subscribed</Th><Th>Actions</Th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/30"><Td className="font-bold text-foreground">rajesh@gmail.com</Td><Td>Mumbai</Td><Td>Residential</Td><Td>Any</Td><Td>₹50L–1Cr</Td><Td>30 Jun 2026</Td><Td><RaBtn danger>Unsubscribe</RaBtn></Td></tr>
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* ALERT ENGINE */}
          {activePage === 'alert-engine' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <AlertStrip type="info" icon="⚡" title="Real-time matching is ON" subtitle="Every new or edited listing is instantly checked against all active alert rules. Matches fire email immediately." />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon="⚡" iconBg="bg-blue-100" value="4,291" label="Active Alert Rules" />
                <StatCard icon="📧" iconBg="bg-emerald-100" trend="↑ 142" value="1,284" label="Emails Sent Today" />
                <StatCard icon="💬" iconBg="bg-amber-100" trend="↑ 38" value="96" label="WhatsApp Queued" />
                <StatCard icon="👆" iconBg="bg-purple-100" value="28.4%" label="Alert → Click Rate" />
              </div>
              <FormSection title="⚙️ Alert Engine Configuration">
                <div className="flex flex-col gap-3.5">
                  {['Instant email on new listing match', 'Instant WhatsApp on match', 'Auction date reminders', 'Price / status change alerts', 'Inspection reminders'].map((l, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer select-none">
                      <div className="relative w-9 h-5 bg-primary rounded-full"><div className="absolute top-[3px] left-[3px] bg-white w-3.5 h-3.5 rounded-full transition-transform translate-x-[16px]"></div></div>
                      <span className="text-[13px] text-muted-foreground">{l}</span>
                    </label>
                  ))}
                </div>
              </FormSection>
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title="📜 Notification Dispatch Log" acts={<><TcActionSelect options={['All Channels', 'Email', 'WhatsApp']} /><TcActionSelect options={['All Types', 'Match Alert', 'Auction Reminder']} /><TcActionBtn>⬇️ Export</TcActionBtn></>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><Th>Time</Th><Th>Recipient</Th><Th>Type</Th><Th>Trigger</Th><Th>Channel</Th><Th>Status</Th><Th>Actions</Th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/30"><Td>2 min ago</Td><Td className="font-bold text-foreground">rajesh@gmail.com</Td><Td>Match Alert</Td><Td>New listing: Flat 303 Airoli</Td><Td>📧 Email</Td><Td><Pill type="green">Delivered</Pill></Td><Td><RaBtn>View</RaBtn></Td></tr>
                    <tr className="border-b border-border hover:bg-muted/30"><Td>2 min ago</Td><Td className="font-bold text-foreground">+91 9876543210</Td><Td>Match Alert</Td><Td>New listing: Flat 303 Airoli</Td><Td>💬 WhatsApp</Td><Td><Pill type="gold">Queued — Manual</Pill></Td><Td><RaBtn primary>💬 Send Now</RaBtn></Td></tr>
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* EMAIL CAMPAIGNS */}
          {activePage === 'email-campaigns' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon="📧" iconBg="bg-blue-100" value="12" label="Active Templates" />
                <StatCard icon="📨" iconBg="bg-emerald-100" trend="↑ 18%" value="38,420" label="Sent This Month" />
                <StatCard icon="👁️" iconBg="bg-amber-100" value="42.1%" label="Avg Open Rate" />
                <StatCard icon="👆" iconBg="bg-purple-100" value="9.8%" label="Avg Click Rate" />
              </div>
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title="📧 Lifecycle Email Templates" acts={<TcActionBtn primary>➕ New Template</TcActionBtn>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><Th>Template</Th><Th>Trigger</Th><Th>Channel</Th><Th>Sent (30d)</Th><Th>Open Rate</Th><Th>Status</Th><Th>Actions</Th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/30"><Td><div className="font-bold text-foreground">Welcome — Part 1</div><div className="text-[11px]">Immediately on signup</div></Td><Td>New signup</Td><Td>📧 Email</Td><Td>48</Td><Td>68%</Td><Td><Pill type="green">Active</Pill></Td><Td><div className="flex gap-1.5"><RaBtn>Edit</RaBtn><RaBtn>Preview</RaBtn></div></Td></tr>
                    <tr className="border-b border-border hover:bg-muted/30"><Td><div className="font-bold text-foreground">Weekly Digest</div><div className="text-[11px]">Roundup of new auctions</div></Td><Td>Every Monday 9 AM</Td><Td>📧 Email</Td><Td>3,840</Td><Td>39%</Td><Td><Pill type="green">Active</Pill></Td><Td><div className="flex gap-1.5"><RaBtn>Edit</RaBtn><RaBtn>Preview</RaBtn></div></Td></tr>
                  </tbody>
                </table></div>
              </div>
              <FormSection title="📣 Send a One-Off Campaign" foot={<><button className="h-9 px-3.5 bg-background border-2 border-border text-muted-foreground text-[13px] rounded-lg">Preview</button><button className="h-9 px-5 bg-primary text-primary-foreground font-semibold text-[13px] rounded-lg">📨 Send Campaign</button></>}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><Flbl>Audience Segment</Flbl><Fsel options={['All Users', 'Paid Package users', 'Free users only']} /></div>
                  <div><Flbl>Channel</Flbl><Fsel options={['Email', 'Email + WhatsApp']} /></div>
                  <div><Flbl>Schedule</Flbl><Fsel options={['Send now', 'Schedule for later']} /></div>
                  <div className="col-span-1 md:col-span-3"><Flbl>Subject Line</Flbl><Finp placeholder="e.g. 5 new Bank of Baroda auctions in Mumbai this week" /></div>
                  <div className="col-span-1 md:col-span-3"><Flbl>Message Body</Flbl><textarea className="w-full min-h-[72px] p-3 border-2 border-border rounded-lg text-[13px] bg-background text-foreground outline-none focus:border-primary" placeholder="Write your campaign message…"></textarea></div>
                </div>
              </FormSection>
            </div>
          )}

          {/* WHATSAPP */}
          {activePage === 'whatsapp' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <AlertStrip type="warning" icon="💬" title="Phase 1: Click-to-chat mode" subtitle="Automated WhatsApp push needs the official Business API. Until then, use click-to-chat links." />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard icon="💬" iconBg="bg-emerald-100" value="1,204" label="WhatsApp Subscribers" />
                <StatCard icon="📋" iconBg="bg-amber-100" value="96" label="Queued Messages" />
                <StatCard icon="🔗" iconBg="bg-blue-100" value="2,841" label="Click-to-Chat Opens" />
              </div>
              <FormSection title="🔗 Click-to-Chat Link Generator">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><Flbl>Boliwala WhatsApp Number</Flbl><Finp defaultValue="+91 98765 43210" /></div>
                  <div><Flbl>Pre-filled Message</Flbl><Finp defaultValue="Hi, I'm interested in Flat 303..." /></div>
                </div>
                <div className="mt-4 p-3.5 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs text-foreground flex-1 min-w-[200px]">https://wa.me/919876543210?text=Hi%2C%20I'm...</span>
                  <RaBtn primary>📋 Copy Link</RaBtn>
                </div>
              </FormSection>
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title="📋 Manual WhatsApp Queue" acts={<TcActionBtn>Mark All Sent</TcActionBtn>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><Th>Recipient</Th><Th>Message Type</Th><Th>Property</Th><Th>Queued</Th><Th>Actions</Th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/30"><Td className="font-bold text-foreground">+91 9876543210</Td><Td>Match Alert</Td><Td>Flat 303, Airoli</Td><Td>2 min ago</Td><Td><div className="flex gap-1.5"><RaBtn primary>💬 Open Chat</RaBtn><RaBtn>Mark Sent</RaBtn></div></Td></tr>
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* SEGMENTS */}
          {activePage === 'segments' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <AlertStrip type="info" icon="🎯" title="Build a targeted list, then export" subtitle="Filter users by any combination of criteria, then export the segment as CSV." />
              <FormSection title="🎯 Segment Builder">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div><Flbl>City</Flbl><Fsel options={['Any City', 'Mumbai', 'Delhi NCR']} /></div>
                  <div><Flbl>User Type</Flbl><Fsel options={['All', 'Paid Package', 'Free only']} /></div>
                  <div><Flbl>Property Interest</Flbl><Fsel options={['Any', 'Residential', 'Commercial']} /></div>
                  <div><Flbl>Engagement</Flbl><Fsel options={['Any', 'Has shortlisted properties', 'Requested callback']} /></div>
                  <div><Flbl>Budget Range</Flbl><Fsel options={['Any', 'Under ₹40L', '₹40L – ₹1Cr']} /></div>
                  <div><Flbl>Channel Available</Flbl><Fsel options={['Any', 'Email', 'WhatsApp', 'Both']} /></div>
                </div>
                <div className="mt-4 p-3.5 bg-blue-50 dark:bg-blue-500/10 rounded-lg flex flex-wrap items-center justify-between gap-2.5">
                  <div className="text-sm text-foreground"><strong className="font-display text-lg">347</strong> users match this segment</div>
                  <div className="flex gap-2"><TcActionBtn>⬇️ Export CSV</TcActionBtn><TcActionBtn primary>📧 Email This Segment</TcActionBtn></div>
                </div>
              </FormSection>
              <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
                <TcHead title="⭐ Saved Segments" acts={<></>} />
                <div className="overflow-x-auto"><table className="w-full text-left border-collapse">
                  <thead><tr className="bg-muted/50 border-b border-border"><Th>Segment Name</Th><Th>Criteria</Th><Th>Users</Th><Th>Last Used</Th><Th>Actions</Th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-muted/30"><Td className="font-bold text-foreground">Mumbai hot leads</Td><Td>Mumbai · Free · Requested callback</Td><Td>42</Td><Td>Yesterday</Td><Td><div className="flex gap-1.5"><RaBtn>Use</RaBtn><RaBtn>Edit</RaBtn></div></Td></tr>
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* ENGAGEMENT & ANALYTICS */}
          {(activePage === 'engagement' || activePage === 'analytics') && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon="👁️" iconBg="bg-blue-100" trend="↑ 22%" value="84,290" label="Page Views This Month" />
                <StatCard icon="🔍" iconBg="bg-emerald-100" trend="↑ 18%" value="12,410" label="Listing Detail Views" />
                <StatCard icon="📄" iconBg="bg-amber-100" trend="↑ 31%" value="2,840" label="PDF Downloads" />
                <StatCard icon="📝" iconBg="bg-purple-100" trend="↑ 28%" value="5.8%" label="View → Signup Rate" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="px-5 py-3.5 border-b border-border"><h3 className="font-display text-[15px] font-bold text-foreground">📊 Engagement Funnel</h3></div>
                  <div className="p-4.5 space-y-3">
                    {[
                      { l: 'Visited site', p: '100%', bg: 'bg-primary' },
                      { l: 'Viewed a listing', p: '62%', bg: 'bg-emerald-500' },
                      { l: 'Signed up', p: '18%', bg: 'bg-amber-500' },
                      { l: 'Shortlisted / set alert', p: '11%', bg: 'bg-purple-500' },
                      { l: 'Requested callback', p: '4%', bg: 'bg-red-500' },
                      { l: 'Bought ₹9,999 package', p: '1.8%', bg: 'bg-blue-800' },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-[13px] mb-1"><span className="font-bold text-foreground">{item.l}</span><span className="text-muted-foreground">{item.p}</span></div>
                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden"><div className={`h-full rounded-full ${item.bg}`} style={{ width: item.p }}></div></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="px-5 py-3.5 border-b border-border"><h3 className="font-display text-[15px] font-bold text-foreground">🏙️ Top Cities</h3></div>
                  <div className="p-4.5 space-y-3">
                    {[
                      { l: 'Mumbai', p: '100%', v: '28,400', bg: 'bg-primary' },
                      { l: 'Delhi NCR', p: '64%', v: '18,200', bg: 'bg-emerald-500' },
                      { l: 'Bengaluru', p: '43%', v: '12,100', bg: 'bg-amber-500' },
                      { l: 'Hyderabad', p: '31%', v: '8,900', bg: 'bg-purple-500' },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-[13px] mb-1"><span className="font-bold text-foreground">{item.l}</span><span className="text-muted-foreground">{item.v}</span></div>
                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden"><div className={`h-full rounded-full ${item.bg}`} style={{ width: item.p }}></div></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

    </div>
  )
}
