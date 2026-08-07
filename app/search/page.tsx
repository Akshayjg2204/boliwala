"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SearchSection } from "@/components/search-section"

export default function SearchPage() {
  const router = useRouter()

  const handleSearch = () => {
    router.push('/search/results')
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex-1 pt-24 md:pt-28">
        <SearchSection onSearch={handleSearch} />
      </div>
      <Footer />
    </main>
  )
}
