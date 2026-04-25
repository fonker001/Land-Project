import { Users, Shield, Award, Target } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct all our transactions with honesty and transparency.'
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Your satisfaction and trust are our top priorities.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver premium quality lands and exceptional service.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in building sustainable communities across Kenya.'
    }
  ]

  const stats = [
    { label: 'Happy Customers', value: '500+' },
    { label: 'Lands Sold', value: '250+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Counties Covered', value: '12' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Hatuamoja Lands</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            We are Kenya's trusted land investment partner, helping individuals and families 
            secure their future through verified land ownership.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2008, Hatuamoja Lands Limited began with a simple mission: 
              to make land ownership accessible, transparent, and secure for every Kenyan.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small family business in Nairobi has grown into one of 
              Kenya's most trusted land investment companies, with operations spanning 
              across 12 counties.
            </p>
            <p className="text-gray-600">
              We've helped over 500 families realize their dreams of land ownership, 
              and we continue to expand our portfolio of prime properties across Kenya.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
              alt="Hatuamoja Lands team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Hatuamoja Lands
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="section-padding py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-20">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated team behind Hatuamoja Lands
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'John Kamau', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
              { name: 'Sarah Wanjiku', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80' },
              { name: 'David Ochieng', role: 'Legal Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}