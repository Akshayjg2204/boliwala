"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SearchSection } from "@/components/search-section"
import { PropertyResults } from "@/components/property-results"

export default function SearchPage() {
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = () => {
    setHasSearched(true)
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex-1 pt-24 md:pt-28">
        <SearchSection onSearch={handleSearch} />
        {hasSearched && <PropertyResults />}
      </div>
      <Footer />
    </main>
  )
}
