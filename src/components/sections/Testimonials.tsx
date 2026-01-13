'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "林小姐",
    role: "台北 / 上班族",
    content: "自從父親獨居屏東老家後，我每天上班都提心吊膽。有次他沒接電話，我急得差點告警。現在有了平安簽，每天早上看到那個綠色的『今日安好』，我就能安心開始一天的工作。這不只是給他的保障，更是給我的定心丸。",
    highlight: "給我的定心丸"
  },
  {
    id: 2,
    name: "張伯伯",
    role: "台中 / 獨居長者",
    content: "一開始我很排斥，覺得像被監視。但這個系統不一樣，它不裝鏡頭，也不用我戴什麼手錶。只要每天早上說句話就行。上次我不舒服忘記說，社區志工小陳馬上就打電話來關心，那種被惦記的感覺，很溫暖。",
    highlight: "被惦記的感覺"
  }
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            聽聽他們的故事
          </h2>
          <p className="text-gray-500">每一份安心背後，都有一個溫暖的連結</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-8 md:p-10 rounded-3xl relative hover:shadow-lg transition-shadow border border-gray-100"
            >
              <Quote className="absolute top-8 right-8 text-gray-200 w-12 h-12" />
              
              <div className="relative z-10">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {item.content.split(item.highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="bg-yellow-100 text-gray-900 font-medium px-1 mx-1 rounded">
                          {item.highlight}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl">
                    {item.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
