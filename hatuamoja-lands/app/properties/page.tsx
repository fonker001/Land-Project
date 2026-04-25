'use client'

import PropertyCard from '../components/PropertyCard'
import { Filter, Search, Grid, List } from 'lucide-react'
import { useState } from 'react'

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
  },
  {
    id: 5,
    title: 'Kisumu Lakeview',
    location: 'Kisumu, Kendu Bay',
    price: 1500000,
    originalPrice: 1800000,
    size: '1/2 Acre',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    discount: 300000,
    features: ['Lake View', 'Fishing', 'Tourism', 'Road Access']
  },
  {
    id: 6,
    title: 'Naivasha Farmland',
    location: 'Naivasha, Mai Mahiu',
    price: 3200000,
    size: '5 Acres',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    features: ['Farming', 'Water Rights', 'Greenhouse', 'Storage']
  }
]

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [locationFilter, setLocationFilter] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = locationFilter === 'all' || property.location.includes(locationFilter)
    const matchesPrice = priceFilter === 'all' || 
      (priceFilter === 'under1m' && property.price < 1000000) ||
      (priceFilter === '1m-3m' && property.price >= 1000000 && property.price <= 3000000) ||
      (priceFilter === '3m+' && property.price > 3000000)
    return matchesSearch && matchesLocation && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Properties</h1>
          <p className="text-xl opacity-90">Find your perfect piece of land across Kenya</p>
        </div>
      </div>
      
      <div className="section-padding py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by location or title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <select 
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">All Locations</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Mombasa">Mombasa</option>
                  <option value="Nakuru">Nakuru</option>
                  <option value="Kiambu">Kiambu</option>
                  <option value="Kisumu">Kisumu</option>
                </select>
                
                <select 
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="all">All Prices</option>
                  <option value="under1m">Under 1M</option>
                  <option value="1m-3m">1M - 3M</option>
                  <option value="3m+">3M+</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 border rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-primary text-white border-primary' : 'hover:bg-gray-50'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 border rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-primary text-white border-primary' : 'hover:bg-gray-50'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mb-4 text-gray-600">
          Showing {filteredProperties.length} of {properties.length} properties
        </div>
        
        <div className={`grid ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery('')
                setLocationFilter('all')
                setPriceFilter('all')
              }}
              className="mt-4 text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredProperties.length > 0 && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
                Previous
              </button>
              {[1, 2, 3].map(page => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    page === 1 ? 'bg-primary text-white' : 'border hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}