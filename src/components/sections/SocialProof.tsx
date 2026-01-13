'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const stories = [
  {
    content: "以前打電話沒人接都會很慌，現在每天早上收到爸爸的「平安」通知，心裡就踏實了。這不是冷冰冰的監控，而是感覺我們更近了。",
    author: "台北林小姐",
    role: "父親獨居台南",
    bg: "bg-base-secondary"
  },
  {
    content: "我不太會用手機，但這個平安簽只要說說話就行。上次忘記報平安，社區的張志工馬上就打電話來關心，感覺像多了個鄰居關懷照應。",
    author: "陳爺爺",
    role: "使用者 (82歲)",
    bg: "bg-primary/5"
  },
  {
    content: "作為社區志工，我們很怕「不知道誰需要幫忙」。有了這個系統，我們可以把精力花在真正需要緊急查看的長者身上，效率高了很多。",
    author: "王里長",
    role: "社區合作夥伴",
    bg: "bg-base-secondary"
  }
]

export default function SocialProof() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">
            聽聽他們的故事
          </h2>
          <p className="text-text-light">
            每一則回饋，都是一份信任的交付。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${story.bg} p-8 rounded-3xl relative border border-primary/5`}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-6" />
              <p className="text-text leading-relaxed mb-8 font-medium">
                {story.content}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {story.author[0]}
                </div>
                <div>
                  <div className="font-bold text-text text-sm">{story.author}</div>
                  <div className="text-xs text-text-light">{story.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
