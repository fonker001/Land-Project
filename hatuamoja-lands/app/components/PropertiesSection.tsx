'use client'

import PropertyCard from './PropertyCard'
import { Filter } from 'lucide-react'

const properties = [
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
    id: 2,
    title: 'Mombasa Beachfront',
    location: 'Mombasa, Diani',
    price: 3500000,
    size: '1/8 Acre',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    features: ['Beach Access', 'Title Deed', 'Tourist Zone', 'Ready to Build']
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
    id: 4,
    title: 'Kiambu Highlands',
    location: 'Kiambu, Limuru',
    price: 4200000,
    size: '2 Acres',
    image: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?auto=format&fit=crop&w=800&q=80',
    features: ['Cool Climate', 'Scenic View', 'Electricity', 'Security']
  }
]

export default function PropertiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated selection of premium lands across Kenya
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium">Filter by:</span>
            <select className="border rounded-lg px-3 py-2 bg-white">
              <option>All Locations</option>
              <option>Nairobi</option>
              <option>Mombasa</option>
              <option>Nakuru</option>
              <option>Kiambu</option>
            </select>
            <select className="border rounded-lg px-3 py-2 bg-white">
              <option>Price Range</option>
              <option>Under 1M</option>
              <option>1M - 3M</option>
              <option>3M - 5M</option>
              <option>5M+</option>
            </select>
          </div>
          <button className="text-primary font-semibold hover:underline">
            View All Properties →
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}