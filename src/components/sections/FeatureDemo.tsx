'use client'

import { motion } from 'framer-motion'
import { Mic, Heart, ShieldAlert, Users } from 'lucide-react'

const features = [
  {
    title: "簡易簽到",
    subtitle: "說句話，就是報平安",
    description: "長者只需說出「我很好」，系統即可通過聲紋驗證完成簽到。無需學習複雜操作，就像和家人說話一樣自然。",
    icon: <Mic className="w-8 h-8 text-primary" />,
    rotate: -2
  },
  {
    title: "雙向關懷",
    subtitle: "不只是監控，更是陪伴",
    description: "主動問候、天氣提醒，甚至能感知情緒變化。這不是冰冷的機器，而是懂你的日常夥伴。",
    icon: <Heart className="w-8 h-8 text-white" />,
    iconBg: "bg-primary-light",
    rotate: 1
  },
  {
    title: "智慧安全網",
    subtitle: "分級響應，張弛有度",
    description: "第一級溫和提醒，第二級通知家人，第三級聯動社區。層層守護，既不打擾生活，也不錯過危機。",
    icon: <ShieldAlert className="w-8 h-8 text-primary" />,
    rotate: -1
  },
  {
    title: "親情連線",
    subtitle: "讓愛，沒有距離",
    description: "家人可隨時留言，長者互動時收聽。每日一條平安通知，化解遠方子女無形的焦慮。",
    icon: <Users className="w-8 h-8 text-primary" />,
    rotate: 2
  }
]

export default function FeatureDemo() {
  return (
    <section className="bg-base-secondary py-32 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#E07A5F 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 text-center">
           <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
             核心功能
           </span>
           <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6">
             讓牽掛變得簡單、直觀
           </h2>
           <p className="text-lg text-text-light max-w-2xl mx-auto">
             我們通過AI互動關懷長輩，讓照護不再複雜<br/>
             說句話即可簽到、主動問候與情緒守護
           </p>
        </div>

        {/* Feature Grid - Sticky Note Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: feature.rotate }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-base-secondary group flex flex-col h-full"
            >
              <div className={`w-16 h-16 ${feature.iconBg || 'bg-base-secondary'} rounded-2xl rounded-tr-[20px] rounded-bl-[20px] flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-text mb-2 font-serif">{feature.title}</h3>
              <p className="text-primary font-medium text-sm mb-4">{feature.subtitle}</p>
              <p className="text-text-light text-sm leading-relaxed flex-grow">
                {feature.description}
              </p>
              
              {/* Decorative tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-primary/10 -rotate-1 opacity-50 backdrop-blur-sm rounded-sm"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
