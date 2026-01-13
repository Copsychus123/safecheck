'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "長輩不會用智慧型手機怎麼辦？",
    answer: "完全沒問題！我們設計了專屬硬體機器人模式，長輩只要對著設備說話即可，無需學習操作 APP "
  },
  {
    question: "如果忘記簽到會立刻告警嗎？",
    answer: "不會。我們會先進行「溫和提醒」，若 24hr 無回應才會通知家人。只有在家人確認需要協助或 48hr 長時間失聯時，經授權才會啟動社區查看，避免誤報造成的恐慌。"
  },
  {
    question: "對話的資料安全嗎？會不會外流？",
    answer: "非常安全。我們嚴格遵循個資法、隱私與人工智慧基本法相關規範，所有對話處理都經過『去識別化』，絕不會用於廣告或其他商業用途。"
  },
  {
    question: "你們的收費方式有哪些？",
    answer: "我們提供硬體租賃、加值訂閱服務 LTD 早期買斷。每月NT$490元起，相當於每天一杯飲料的費用，即可獲得24小時情緒關懷與知情守護"
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="bg-base-secondary py-24 px-6">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
            常見問題
          </h2>
          <p className="text-text-light">
            關於守護，我們想讓您了解更多。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-primary/5 shadow-sm"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-base/50 transition-colors"
              >
                <span className="font-bold text-text text-lg">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-text-light flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-text-light leading-relaxed border-t border-base-secondary">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
