import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutView } from "@/components/about-view"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex-1">
        <AboutView />
      </div>
      <Footer />
    </main>
  )
}
