import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProfileView } from "@/components/profile-view"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <div className="flex-1">
        <ProfileView />
      </div>
      <Footer />
    </main>
  )
}
