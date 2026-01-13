'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar({ onStartSimulation }: { onStartSimulation: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: '功能特色', href: '#features' },
    { name: '暖心故事', href: '#stories' },
    { name: '常見問題', href: '#faq' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-base/90 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group z-50">
            <div className={`w-8 h-8 ${isScrolled ? 'bg-primary' : 'bg-primary'} rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm group-hover:scale-110 transition-transform`}>
              平
            </div>
            <span className={`text-xl font-bold font-serif tracking-wide ${isScrolled ? 'text-text' : 'text-text'}`}>
              平安簽
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${isScrolled ? 'text-text hover:text-primary' : 'text-text/80 hover:text-primary'}`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onStartSimulation}
              className="bg-primary hover:bg-[#D0654B] text-white px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-sm"
            >
              <Phone size={16} />
              <span>立即體驗</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-base flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-text text-2xl font-serif font-bold hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="w-12 h-1 bg-primary/20 rounded-full my-4"></div>
              <button 
                onClick={() => {
                  onStartSimulation()
                  setIsMobileMenuOpen(false)
                }}
                className="bg-primary text-white py-4 px-12 rounded-full font-bold text-xl shadow-lg flex items-center gap-3"
              >
                <Phone size={24} />
                立即體驗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
