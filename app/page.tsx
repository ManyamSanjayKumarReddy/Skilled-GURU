import dynamic from "next/dynamic"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

const LatestVideos = dynamic(() => import("./components/LatestVideos"), { ssr: false })
const UpcomingFeatures = dynamic(() => import("./components/UpcomingFeatures"), { ssr: false })
const Founder = dynamic(() => import("./components/Founder"), { ssr: false })

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <LatestVideos />
        <UpcomingFeatures />
        <Founder />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

