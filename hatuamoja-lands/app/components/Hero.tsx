'use client'

import Image from 'next/image'
import { ArrowRight, Shield, CheckCircle, Star, Calendar } from 'lucide-react'
import { useState } from 'react'
import BookingModal from './BookingModal'

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="section-padding py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6">
                <Star className="h-4 w-4" />
                <span className="font-medium">Trusted by 500+ Kenyan Families</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Own Your Piece of 
                <span className="text-primary"> Kenya's Future</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Verified land parcels with clear titles, ready for your dream home or investment. 
                Start from KES 200,000 with flexible payment plans.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="btn-primary flex items-center justify-center"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </button>
                <button 
                  onClick={() => window.location.href = '/properties'}
                  className="bg-white border-2 border-primary text-primary hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  Browse Properties
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-medium">Title Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Surveyed Plots</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Installment Plans</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                  alt="Beautiful Kenyan landscape"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="text-3xl font-bold text-primary mb-2">15% OFF</div>
                <p className="text-gray-600">For first-time buyers this month only</p>
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="mt-3 text-primary font-semibold text-sm hover:underline"
                >
                  Book now to claim →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  )
}