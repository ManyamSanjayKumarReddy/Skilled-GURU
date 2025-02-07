import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import LatestVideos from "./components/LatestVideos"
import UpcomingFeatures from "./components/UpcomingFeatures"
import Founder from "./components/Founder"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import AnnouncementBar from "./components/AnnouncementBar"
import ContactUs from "./components/ContactUs"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Features />
        <LatestVideos />
        <UpcomingFeatures />
        <Founder />
        <ContactUs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

