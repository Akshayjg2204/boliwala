import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ListingView } from "@/components/listing-view"

export default function ListingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex-1 pt-24 md:pt-28">
        <ListingView />
      </div>
      <Footer />
    </main>
  )
}
