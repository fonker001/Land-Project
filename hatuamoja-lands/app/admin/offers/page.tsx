'use client'

import { Plus, Edit, Trash2, Tag, TrendingUp } from 'lucide-react'
import { useState } from 'react'

export default function OffersPage() {
  const [offers] = useState([
    { id: 1, title: 'First-Time Buyer Discount', discount: '15% OFF', status: 'active', views: 156, claims: 23 },
    { id: 2, title: 'Referral Program', discount: 'KES 50,000', status: 'active', views: 89, claims: 12 },
    { id: 3, title: 'Bundle Discount', discount: 'Buy 2, Save 20%', status: 'inactive', views: 45, claims: 8 },
    { id: 4, title: 'Early Bird Special', discount: '10% OFF', status: 'active', views: 123, claims: 18 },
  ])

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Offers Management</h1>
            <p className="mt-2 text-gray-600">Manage promotions and discounts</p>
          </div>
          <button className="mt-4 sm:mt-0 btn-primary flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Create New Offer
          </button>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map(offer => (
          <div key={offer.id} className="bg-white rounded-lg shadow border p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Tag className="h-6 w-6 text-primary" />
                </div>
                <span className={`ml-3 px-2 py-1 text-xs font-semibold rounded-full ${
                  offer.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {offer.status.toUpperCase()}
                </span>
              </div>
              <div className="text-2xl font-bold text-primary">{offer.discount}</div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">{offer.title}</h3>
            
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">
                <TrendingUp className="h-4 w-4 inline mr-1" />
                {offer.views} views
              </div>
              <div className="text-sm font-medium">
                {offer.claims} claims
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="flex-1 border border-primary text-primary hover:bg-primary hover:text-white py-2 rounded-lg transition-colors flex items-center justify-center">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </button>
              <button className="flex-1 border border-red-300 text-red-600 hover:bg-red-50 py-2 rounded-lg transition-colors flex items-center justify-center">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}