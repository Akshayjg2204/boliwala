import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesView } from "@/components/services-view"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex-1">
        <ServicesView />
      </div>
      <Footer />
    </main>
  )
}
