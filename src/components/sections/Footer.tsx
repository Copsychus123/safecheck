'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-text text-white py-12 px-6 border-t border-white/10">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
              平安簽 <span className="text-sm font-sans font-normal opacity-60">SafeCheck</span>
            </h3>
            <p className="text-white/60 leading-relaxed max-w-sm">
              讓每一份牽掛都有回響。<br/>
              專為獨居長者設計的溫暖守護平台。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white/90">平台功能</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-primary-light transition-colors">語音簽到</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">雙向關懷</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">社區聯動</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white/90">關於我們</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-primary-light transition-colors">團隊故事</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">隱私權政策</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">聯絡我們</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Rubix SafeCheck. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary-light fill-primary-light" /> in Taiwan
          </p>
        </div>
      </div>
    </footer>
  )
}
