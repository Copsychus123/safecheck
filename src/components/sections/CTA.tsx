'use client'

import { motion } from 'framer-motion'

interface CTAProps {
  onStartSimulation: () => void;
}

export default function CTA({ onStartSimulation }: CTAProps) {
  return (
    <section className="bg-primary text-white py-32 px-6 text-center relative overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2" />
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[80px] translate-y-1/3" />
      </div>

      <div className="container max-w-3xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium tracking-wide">
            隨時隨地，安心守護
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
            為摯愛<br/>
            預約一份安心
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            別讓繁忙的生活，成為關愛的阻礙。<br/>
            現在加入，讓每一份牽掛都有著落。
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block w-full md:w-auto"
          >
            <button 
              onClick={onStartSimulation} 
              className="w-full md:w-auto bg-white text-primary text-xl font-bold py-5 px-12 rounded-full shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] transition-all tracking-wide"
            >
              免費體驗 / 加入等待名單
            </button>
          </motion.div>

          <p className="text-white/60 text-sm flex items-center justify-center gap-6 font-medium">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              隱私至上
            </span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              數據加密
            </span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
              用戶授權
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
