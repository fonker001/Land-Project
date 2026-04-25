'use client'

import Image from 'next/image'
import { MapPin, Ruler, Tag, Calendar, X, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import BookingModal from './BookingModal'

interface PropertyCardProps {
  property: {
    id: number
    title: string
    location: string
    price: number
    originalPrice?: number
    size: string
    image: string
    discount?: number
    features: string[]
  }
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [viewDetails, setViewDetails] = useState(false)

  const discountPercentage = property.discount && property.originalPrice
    ? Math.round((property.discount / property.originalPrice) * 100)
    : 0

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        {/* Image section */}
        <div className="relative h-48 w-full flex-shrink-0 group">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {property.discount && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
              -{discountPercentage}%
            </div>
          )}
          <button 
            onClick={() => setViewDetails(true)}
            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
          >
            <span className="sr-only">View details</span>
          </button>
        </div>
        
        {/* Content section - grows to fill space */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 
            className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 hover:text-primary transition-colors cursor-pointer" 
            onClick={() => setViewDetails(true)}
          >
            {property.title}
          </h3>
          
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm line-clamp-1">{property.location}</span>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-gray-600">
              <Ruler className="h-4 w-4 mr-1" />
              <span className="font-medium">{property.size}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Tag className="h-4 w-4 mr-1" />
              <span className="font-medium">KES {property.price.toLocaleString()}</span>
            </div>
          </div>
          
          {property.originalPrice && (
            <div className="mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-lg font-bold text-primary">
                  KES {property.price.toLocaleString()}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  KES {property.originalPrice.toLocaleString()}
                </span>
                <span className="text-sm font-semibold text-red-500">
                  Save KES {(property.originalPrice - property.price).toLocaleString()}
                </span>
              </div>
            </div>
          )}
          
          <div className="mb-6 flex-grow">
            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
            <div className="flex flex-wrap gap-2">
              {property.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
              {property.features.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{property.features.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          {/* Buttons - fixed at bottom */}
          <div className="mt-auto space-y-3">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="btn-primary w-full py-3 flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Consultation
            </button>
            <button 
              onClick={() => setViewDetails(true)}
              className="w-full py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        propertyTitle={property.title}
      />

      {/* Details Modal */}
      {viewDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
              <button
                onClick={() => setViewDetails(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Location</div>
                      <div className="font-semibold">{property.location}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Size</div>
                      <div className="font-semibold">{property.size}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Price</div>
                      <div className="font-semibold">KES {property.price.toLocaleString()}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Status</div>
                      <div className="font-semibold text-green-600">Available</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Property Description</h3>
                  <p className="text-gray-600 mb-6">
                    This premium {property.size.toLowerCase()} plot in {property.location} offers excellent 
                    potential for residential or investment purposes. The property comes with a clean title 
                    deed and all necessary approvals.
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-4">Features</h3>
                  <ul className="space-y-2 mb-6">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-lg font-semibold mb-4">Payment Options</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span>Cash Payment</span>
                      <span className="font-semibold">KES {property.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Installment (12 months)</span>
                      <span className="font-semibold">KES {Math.ceil(property.price * 1.05 / 12).toLocaleString()}/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Installment (24 months)</span>
                      <span className="font-semibold">KES {Math.ceil(property.price * 1.08 / 24).toLocaleString()}/month</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setViewDetails(false)
                      setIsBookingOpen(true)
                    }}
                    className="btn-primary w-full py-3 flex items-center justify-center"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Site Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}