import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PartnerView } from "@/components/partner-view"

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex-1">
        <PartnerView />
      </div>
      <Footer />
    </main>
  )
}
