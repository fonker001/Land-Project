'use client'

import { Search, FileCheck, CreditCard, Home } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Browse Properties',
    description: 'Explore our verified land listings across Kenya',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: FileCheck,
    title: 'Document Verification',
    description: 'We verify all title deeds and legal documents',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment',
    description: 'Choose from various payment plans including installments',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Home,
    title: 'Take Ownership',
    description: 'Receive your title deed and start your project',
    color: 'bg-orange-100 text-orange-600'
  }
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From browsing to ownership, we make land acquisition simple and transparent
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-gray-200 -z-10" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-6 rounded-full ${step.color} mb-6`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-white">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}