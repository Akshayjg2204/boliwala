import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyResults } from "@/components/property-results"

export default function SearchResultsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex-1 pt-24 md:pt-28">
        <PropertyResults />
      </div>
      <Footer />
    </main>
  )
}
