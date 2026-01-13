'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import FeatureDemo from '@/components/sections/FeatureDemo'
import SocialProof from '@/components/sections/SocialProof'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'
import ExperienceModal from '@/components/simulation/ExperienceModal'

export default function Home() {
  const [isSimulationOpen, setIsSimulationOpen] = useState(false)

  const openSimulation = () => setIsSimulationOpen(true)
  const closeSimulation = () => setIsSimulationOpen(false)

  return (
    <main className="min-h-screen bg-base">
      <Navbar onStartSimulation={openSimulation} />
      
      {/* Section A: 刊頭與價值宣導 */}
      <Hero />
      
      {/* Section B: 產品體驗與功能 */}
      <section id="features">
        <FeatureDemo />
      </section>
      
      {/* Social Proof: 用戶故事 */}
      <section id="stories">
        <SocialProof />
      </section>

      {/* Section C: 預約與轉化 */}
      <CTA onStartSimulation={openSimulation} />
      
      {/* FAQ: 常見問題 */}
      <section id="faq">
        <FAQ />
      </section>
      
      {/* Footer */}
      <Footer />

      <ExperienceModal 
        isOpen={isSimulationOpen} 
        onClose={closeSimulation} 
      />
    </main>
  )
}
