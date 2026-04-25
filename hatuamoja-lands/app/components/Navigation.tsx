'use client'

import Link from 'next/link'
import { MapPin, Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import BookingModal from './BookingModal'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Offers', href: '/offers' },
  ]

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white shadow-md">
        <div className="section-padding py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Hatuamoja Lands</h1>
                <p className="text-sm text-gray-600">Limited</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-semibold">+254 700 000 000</span>
              </div>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary"
              >
                Book Consultation
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-primary font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 mb-4">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="font-semibold">+254 700 000 000</span>
                  </div>
                  <button 
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsBookingOpen(true)
                    }}
                    className="btn-primary w-full"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  )
}