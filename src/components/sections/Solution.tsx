'use client'

import { motion } from 'framer-motion'

export default function Solution() {
  return (
    <section className="bg-solution text-amber-950 py-24 px-6 text-center">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl font-bold mb-12 text-coral">給那份不安，一個確定的答案</h2>
          
          <div className="bg-white p-10 md:p-16 rounded-[32px] shadow-lg relative overflow-hidden">
            {/* Background Quote Mark */}
            <div className="absolute -top-6 left-6 text-9xl text-solution opacity-50 font-serif select-none">
              &quot;
            </div>
            
            <div className="relative z-10 space-y-8">
              <p className="font-serif text-2xl md:text-3xl leading-relaxed">
                平安簽不做複雜的事。我們只提供一個最簡單的約定：<br/>
                請爸爸媽媽每天用<strong className="text-coral">「說句話」</strong>的方式，告訴我們他很好。
              </p>
              
              <div className="h-px bg-amber-100 w-1/2 mx-auto"></div>
              
              <p className="text-lg md:text-xl text-amber-900/80 leading-relaxed">
                如果連續兩天沒有聲音，我們不會等待。<br/>
                我們會立刻啟動一套像親友鄰里一樣的關懷網絡，去確認他們是否安好。<br/>
                這不是監控，這是一份<strong className="text-coral">「不打擾的守護」</strong>。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
