import { GrainOverlay } from '@/components/ui/grain-overlay'
import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { Philosophy } from '@/components/sections/philosophy'
import { Menu } from '@/components/sections/menu'
import { ChefFeature } from '@/components/sections/chef-feature'
import { PrivateDining } from '@/components/sections/private-dining'
import { Testimonials } from '@/components/sections/testimonials'
import { Reservations } from '@/components/sections/reservations'
import { Footer } from '@/components/sections/footer'

function App() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Menu />
        <ChefFeature />
        <PrivateDining />
        <Testimonials />
        <Reservations />
      </main>
      <Footer />
    </>
  )
}

export default App
