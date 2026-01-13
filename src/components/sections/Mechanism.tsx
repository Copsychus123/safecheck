'use client'

import { motion } from 'framer-motion'
import { Mic, DoorOpen } from 'lucide-react'

export default function Mechanism() {
  return (
    <section className="bg-mechanism py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-16 text-green-800"
        >
          我們結合了科技的細心<br/>與人情的溫度
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center mb-16">
          
          {/* Tech Card */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 border-2 border-teal-200 rounded-full animate-wave"></div>
              <div className="absolute inset-0 border-2 border-teal-200 rounded-full animate-wave [animation-delay:0.5s]"></div>
              <Mic className="w-10 h-10 text-teal-600 relative z-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-gray-800">他不用學，只要「說」</h3>
            <p className="text-gray-600 mb-8 flex-grow">
              就像每天打電話報平安一樣自然。<br/>
              不用記、不用按，開口說句話就好。<br/>
              我們會認得他的聲音，安靜地記下「今日安好」。
            </p>
            <div className="bg-teal-50 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
              永遠在線的聆聽者
            </div>
          </motion.div>

          {/* Connector */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex flex-col justify-center items-center text-gray-300 font-bold text-3xl"
          >
            <div className="h-full w-px bg-gray-200"></div>
            <div className="py-4">+</div>
            <div className="h-full w-px bg-gray-200"></div>
          </motion.div>

          {/* Human Card */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <DoorOpen className="w-10 h-10 text-orange-600" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-gray-800">當聯繫不上時，有人能「去看看」</h3>
            <p className="text-gray-600 mb-8 flex-grow">
              這是最讓我們安心的一環。<br/>
              如果真的出現異常，系統會先聯繫我們，如果我們也無法解決，它會通知與我們合作的<strong className="text-green-700">當地社區關懷員</strong>。<br/>
              他們像是可靠的鄰居，可以上門查看情況。
            </p>
            <div className="bg-orange-50 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              隨時能上門的可靠鄰居
            </div>
          </motion.div>

        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xl text-gray-600 max-w-2xl mx-auto"
        >
          這就像為爸媽請了一位<strong className="text-teal-700">不會累的數位看護</strong>，並連結了一群<strong className="text-orange-700">值得信賴的在地幫手</strong>。
        </motion.p>
      </div>
    </section>
  )
}
