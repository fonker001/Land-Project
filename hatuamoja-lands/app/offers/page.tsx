'use client'

import { Timer, Percent, Gift, TrendingUp, Calendar, CheckCircle, Star } from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
import { useState } from 'react'

export default function OffersPage() {
  const [activeTab, setActiveTab] = useState('all')

  const offers = [
    {
      id: 1,
      title: 'First-Time Buyer Discount',
      icon: Percent,
      discount: '15% OFF',
      description: 'Exclusive discount for first-time land buyers in Kenya',
      terms: 'Valid until December 31, 2024',
      color: 'bg-green-100 text-green-800 border-green-200',
      featured: true
    },
    {
      id: 2,
      title: 'Referral Program',
      icon: Gift,
      discount: 'KES 50,000',
      description: 'Refer a friend and earn credit towards your next purchase',
      terms: 'No expiration date',
      color: 'bg-purple-100 text-purple-800 border-purple-200',
      featured: true
    },
    {
      id: 3,
      title: 'Bundle Discount',
      icon: TrendingUp,
      discount: 'Buy 2 Plots, Save 20%',
      description: 'Purchase multiple plots in the same location and save',
      terms: 'Limited time offer',
      color: 'bg-blue-100 text-blue-800 border-blue-200',
      featured: false
    },
    {
      id: 4,
      title: 'Early Bird Special',
      icon: Timer,
      discount: '10% OFF + Free Survey',
      description: 'First 5 buyers get additional benefits',
      terms: 'Only 2 spots left',
      color: 'bg-orange-100 text-orange-800 border-orange-200',
      featured: true
    },
    {
      id: 5,
      title: 'Installment Plan',
      icon: Calendar,
      discount: '0% Interest',
      description: 'Spread payments over 24 months with no interest',
      terms: 'Available on selected properties',
      color: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      featured: false
    },
    {
      id: 6,
      title: 'Group Purchase',
      icon: Star,
      discount: 'Up to 25% OFF',
      description: 'Organize a group purchase with friends or family',
      terms: 'Minimum 3 buyers required',
      color: 'bg-pink-100 text-pink-800 border-pink-200',
      featured: true
    }
  ]

  const discountedProperties = [
    {
      id: 1,
      title: 'Kilimani Prime Plots',
      location: 'Nairobi, Kilimani',
      price: 2500000,
      originalPrice: 2950000,
      size: '50x100 ft',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      discount: 450000,
      features: ['Gated Community', 'Water', 'Electricity', 'Road Access']
    },
    {
      id: 3,
      title: 'Nakuru Agricultural Land',
      location: 'Nakuru County',
      price: 800000,
      originalPrice: 950000,
      size: '1 Acre',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      discount: 150000,
      features: ['Fertile Soil', 'Water Source', 'Access Road', 'Agricultural Zone']
    },
    {
      id: 7,
      title: 'Machakos Commercial Plot',
      location: 'Machakos Town',
      price: 1800000,
      originalPrice: 2200000,
      size: '100x100 ft',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
      discount: 400000,
      features: ['Commercial Zone', 'Main Road', 'Title Deed', 'Ready for Development']
    }
  ]

  const tabs = [
    { id: 'all', label: 'All Offers' },
    { id: 'featured', label: 'Featured' },
    { id: 'discounted', label: 'Discounted Properties' },
    { id: 'payment', label: 'Payment Plans' }
  ]

  const filteredOffers = offers.filter(offer => {
    if (activeTab === 'featured') return offer.featured
    if (activeTab === 'payment') return offer.id === 5
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Special Offers & Promotions</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Take advantage of our exclusive deals, discounts, and flexible payment options
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding py-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <Star className="h-6 w-6 mr-2" />
                <span className="text-lg font-semibold">LIMITED TIME OFFER</span>
              </div>
              <h2 className="text-3xl font-bold mb-2">15% OFF All Properties</h2>
              <p className="opacity-90 mb-4">For first-time buyers. Offer ends December 31, 2024</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Timer className="h-5 w-5 mr-2" />
                  <span>Ends in 45 days</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>All locations included</span>
                </div>
              </div>
            </div>
            <button className="mt-6 md:mt-0 bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg">
              Claim Offer Now
            </button>
          </div>
        </div>

        {/* Offers Grid */}
        {activeTab !== 'discounted' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Offers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredOffers.map(offer => (
                <div key={offer.id} className={`border-2 rounded-xl p-6 ${offer.color} ${offer.featured ? 'ring-2 ring-offset-2 ring-primary' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-white rounded-lg">
                        <offer.icon className="h-6 w-6" />
                      </div>
                      {offer.featured && (
                        <span className="ml-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <div className="text-3xl font-bold">{offer.discount}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="mb-4">{offer.description}</p>
                  
                  <div className="flex items-center text-sm mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{offer.terms}</span>
                  </div>
                  
                  <button className="w-full bg-white border-2 border-current font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                    Apply Offer
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Discounted Properties */}
        {(activeTab === 'all' || activeTab === 'discounted') && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Discounted Properties</h2>
              <div className="text-primary font-semibold">
                Showing {discountedProperties.length} properties
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {discountedProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        )}

        {/* Payment Plans Info */}
        {activeTab === 'payment' && (
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Flexible Payment Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { plan: '3 Months', downPayment: '50%', interest: '0%', features: ['Quick ownership', 'Minimal interest'] },
                { plan: '12 Months', downPayment: '30%', interest: '5%', features: ['Balanced plan', 'Manageable payments'] },
                { plan: '24 Months', downPayment: '20%', interest: '8%', features: ['Most flexible', 'Lowest deposit'] }
              ].map((plan, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-primary mb-2">{plan.plan}</div>
                    <div className="text-gray-600">Payment Plan</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Down Payment:</span>
                      <span className="font-bold">{plan.downPayment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Interest:</span>
                      <span className="font-bold">{plan.interest}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="btn-primary w-full">
                    Select This Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}