'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck, User, MapPin } from 'lucide-react'
import { supabase } from '@/utils/supabase/client'

interface Message {
  id: string;
  text: string | React.ReactNode;
  sender: 'system' | 'bot' | 'user' | 'community';
  delay?: number;
}

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExperienceModal({ isOpen, onClose }: ExperienceModalProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping, step])

  // Reset when opened
  useEffect(() => {
    if (isOpen) {
      setMessages([])
      setStep(0)
      setSubmitSuccess(false)
      setEmail('')
      startSimulation()
    }
  }, [isOpen])

  const addMessage = (text: string | React.ReactNode, sender: Message['sender'], delay = 1000) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { id: Date.now().toString(), text, sender }])
    }, delay)
  }

  const startSimulation = async () => {
    // Phase 1: Context
    addMessage("歡迎來到平安簽危機模擬演練。", 'system', 500)
    
    setTimeout(() => {
      addMessage(
        <div className="bg-white/80 p-4 rounded-lg text-sm border border-primary/10 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-text-light font-bold">
            <User size={16} /> <span>父親 (獨居)</span>
          </div>
          <div className="text-text">
            <span className="text-text-light">設定習慣：</span> 每天 09:00 AM 語音簽到
          </div>
        </div>, 
        'system', 
        1500
      )
    }, 1500)

    setTimeout(() => {
      setStep(1) // Ready for Scenario
    }, 3000)
  }

  const handleScenarioStart = () => {
    setStep(2)
    addMessage("現在時間：週日 11:00 AM", 'system', 500)
    addMessage("系統偵測：父親今日尚未簽到，且超過預設時間 2 小時。", 'bot', 1500)
    addMessage("正在嘗試自動撥打父親電話...", 'bot', 3000)
    
    setTimeout(() => {
      addMessage("... 無人接聽。", 'bot', 5000)
      setStep(3) // Escalation
    }, 5000)
  }

  const handleAction = () => {
    setStep(4)
    addMessage("收到異常警報！請問您要如何處理？", 'bot', 500)
  }

  const handleAuthorize = () => {
    setStep(5)
    addMessage("授權啟動社區關懷機制", 'user', 0)
    addMessage("收到授權。正在聯絡最近的社區志工、里長協助...", 'bot', 1000)
    
    setTimeout(() => {
      addMessage(
        <div className="bg-white text-text p-3 rounded-lg shadow-sm border border-primary/10">
          <div className="flex items-center gap-2 font-bold mb-1 text-primary">
            <ShieldCheck size={16} /> 社區志工：張先生
          </div>
          <div className="text-xs text-text-light flex items-center gap-1 mb-2">
            <MapPin size={12} /> 距離 500m (預計 5 分鐘抵達)
          </div>
          <div className="text-sm">收到！我現在過去看一眼。</div>
        </div>,
        'community',
        3000
      )
    }, 3000)

    setTimeout(() => {
      addMessage(
        <div className="bg-white text-text p-3 rounded-lg shadow-sm border-l-4 border-success">
          <div className="font-bold text-success mb-1">已確認安全</div>
          <div className="text-sm">
            張伯伯沒事！他在後院澆花，手機忘在臥室充電了。讓您別擔心。
          </div>
          {/* Mock Image Placeholder */}
          <div className="mt-2 h-24 bg-base-secondary rounded flex items-center justify-center text-text-light text-xs">
            [現場照片]
          </div>
        </div>,
        'community',
        7000
      )
      setStep(6) // Success
    }, 7000)
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    try {
      const { error } = await supabase
        .from('leads')
        .insert([{ email, role: 'family', source: 'simulation' }])
      
      if (error) throw error
      
      setSubmitSuccess(true)
      addMessage("感謝您的註冊！我們已發送詳細說明至您的信箱。", 'system', 0)
    } catch (error) {
      console.error('Error submitting lead:', error)
      // Fallback for demo if supabase is not configured
      setSubmitSuccess(true)
      addMessage("（演示模式）感謝您的註冊！", 'system', 0)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-text/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div className="w-full max-w-md bg-base rounded-[2rem] overflow-hidden flex flex-col h-[85vh] shadow-2xl border-4 border-white">
            
            {/* Header */}
            <div className="bg-white p-4 flex justify-between items-center border-b border-base-secondary shadow-sm z-10">
              <div className="flex items-center gap-2 text-primary font-bold">
                <ShieldCheck className="fill-primary/10" /> 安全守護助手
              </div>
              <button onClick={onClose} className="text-text-light hover:text-text bg-base-secondary p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-base scrollbar-hide">
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user' ? 'bg-primary text-white rounded-br-none' : 
                    msg.sender === 'system' ? 'bg-base-secondary/80 text-text-light text-center w-full text-xs py-2' :
                    msg.sender === 'community' ? 'bg-transparent p-0 w-full shadow-none' :
                    'bg-white text-text rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Action Area */}
            <div className="p-4 bg-white border-t border-base-secondary z-10">
              {step === 1 && (
                <button 
                  onClick={handleScenarioStart}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/30 hover:bg-opacity-90 transition-all active:scale-95"
                >
                  開始模擬情境
                </button>
              )}
              
              {step === 3 && (
                <button 
                  onClick={handleAction}
                  className="w-full bg-accent text-text py-4 rounded-xl font-bold shadow-lg shadow-accent/30 hover:bg-opacity-90 transition-all active:scale-95 animate-pulse"
                >
                  查看系統建議
                </button>
              )}

              {step === 4 && (
                <div className="space-y-3">
                   <button 
                    onClick={handleAuthorize}
                    className="w-full bg-primary text-white py-3 rounded-xl font-bold shadow-md active:scale-95"
                  >
                    授權啟動社區關懷
                  </button>
                  <button className="w-full bg-base-secondary text-text py-3 rounded-xl font-bold active:scale-95">
                    先不要，我再打打看
                  </button>
                </div>
              )}

              {step === 6 && !submitSuccess && (
                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <p className="text-sm text-text font-medium mb-2">想為家人建立這套守護網嗎？</p>
                  <input 
                    type="email" 
                    placeholder="輸入 Email 獲取完整方案" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-base border border-base-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-text"
                    required
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-text text-white py-3 rounded-xl font-bold shadow-md hover:bg-opacity-90 disabled:opacity-50"
                  >
                    {isSubmitting ? '處理中...' : '免費加入等待名單'}
                  </button>
                </form>
              )}
              
              {step === 0 && (
                <p className="text-center text-xs text-text-light">
                  點擊開始，體驗 1 分鐘的危機處理流程
                </p>
              )}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
