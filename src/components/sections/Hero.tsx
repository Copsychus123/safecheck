'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-base text-text min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      
      {/* Background Decor - Soft Blur Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-light/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left order-2 md:order-1 relative"
        >
          {/* Decorative vertical line */}
          <div className="hidden md:block absolute -left-12 top-2 h-24 w-1 bg-primary rounded-full"></div>
          
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-8 leading-tight text-text tracking-wide">
            讓每一天的平安，<br/>
            <span className="text-primary relative inline-block">
              都有回響。
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-light leading-relaxed mb-10 font-medium">
            從「被動告警」轉向「主動關懷」。<br/>
            一個連接用戶、家人與社區的溫暖網絡，<br/>
            讓牽掛變得簡單，讓安全更有溫度。
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
             <span className="px-5 py-2 bg-white border border-primary/20 rounded-full text-sm text-primary font-medium shadow-sm"># 零壓力陪伴</span>
             <span className="px-5 py-2 bg-white border border-primary/20 rounded-full text-sm text-primary font-medium shadow-sm"># 雙向關懷</span>
             <span className="px-5 py-2 bg-white border border-primary/20 rounded-full text-sm text-primary font-medium shadow-sm"># 隱私至上</span>
          </div>
        </motion.div>

        {/* Visual: Phone Screen with softer, rounded aesthetics */}
        <div className="flex justify-center order-1 md:order-2">
          <motion.div 
            initial={{ rotate: -2, y: 20 }}
            animate={{ rotate: 0, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-[320px] h-[600px] bg-white rounded-[50px] border-8 border-base-secondary overflow-hidden relative shadow-[0_20px_50px_-12px_rgba(224,122,95,0.2)]"
          >
            {/* Header */}
            <div className="bg-base-secondary/50 backdrop-blur-sm p-6 text-text flex items-center gap-4 sticky top-0 z-10">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-lg font-bold block leading-none">媽媽</span>
                <span className="text-xs text-text-light">在線</span>
              </div>
            </div>
            
            {/* Chat Body */}
            <div className="p-6 flex flex-col gap-6 bg-white h-full pb-20 overflow-y-auto">
              <div className="text-center text-xs text-text-light/60 my-2 bg-base-secondary/50 py-1 px-3 rounded-full self-center">昨天 12:30</div>
              
              <div className="bg-base-secondary text-text p-4 rounded-3xl rounded-tl-none max-w-[85%] self-start shadow-sm">
                好，別擔心，我剛吃完飯，今天天氣不錯。
              </div>
              
              {/* Active Message */}
              <motion.div 
                initial={{ opacity: 0.5, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="bg-primary/10 text-text p-4 rounded-3xl rounded-tr-none max-w-[85%] self-end relative border border-primary/10 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2 border-b border-primary/10 pb-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-primary font-bold text-xs">系統關懷</span>
                </div>
                媽，晚餐時間到了，記得吃飯喔！
              </motion.div>

              <div className="bg-base-secondary text-text p-4 rounded-3xl rounded-tl-none max-w-[85%] self-start shadow-sm flex items-center gap-2">
                 <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                </div>
                 <span className="text-sm">語音訊息 5秒</span>
              </div>
            </div>
            
            {/* Bottom Input Area Mockup */}
            <div className="absolute bottom-0 left-0 w-full bg-white border-t border-base-secondary p-4 flex items-center justify-center">
               <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
               </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}
