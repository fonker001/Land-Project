'use client'

import { Timer, Percent, Gift, TrendingUp } from 'lucide-react'

const offers = [
  {
    icon: Timer,
    title: 'Limited Time Offer',
    description: '15% discount on all Nakuru properties until end of month',
    expiry: 'Ends in 15 days',
    color: 'bg-blue-50 text-blue-700'
  },
  {
    icon: Percent,
    title: 'Installment Plans',
    description: 'Pay 30% deposit and spread balance over 24 months interest-free',
    expiry: 'Available on selected plots',
    color: 'bg-green-50 text-green-700'
  },
  {
    icon: Gift,
    title: 'Referral Bonus',
    description: 'Refer a friend and get KES 50,000 credit towards your next purchase',
    expiry: 'Always available',
    color: 'bg-purple-50 text-purple-700'
  },
  {
    icon: TrendingUp,
    title: 'Early Bird Special',
    description: 'First 10 buyers get free legal processing and site visit',
    expiry: 'Only 3 spots left',
    color: 'bg-orange-50 text-orange-700'
  }
]

export default function OffersSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Exclusive Offers & Discounts
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Take advantage of our special deals and flexible payment options
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-white/20">
                  <offer.icon className="h-6 w-6" />
                </div>
                <span className={`ml-3 px-3 py-1 rounded-full text-sm font-semibold ${offer.color}`}>
                  {offer.expiry}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
              <p className="opacity-90 mb-4">{offer.description}</p>
              
              <button className="w-full bg-white text-primary font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Claim Offer
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white/10 rounded-xl p-8 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Price Match Guarantee</h3>
              <p className="opacity-90">
                Found a similar plot at a lower price? We'll match it and give you an additional 5% off.
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}