'use client'

import { CheckCircle, Calendar, Phone, Mail, Download } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function BookingConfirmation() {
  const [bookingDetails, setBookingDetails] = useState({
    reference: 'HTM-' + Math.floor(Math.random() * 1000000),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  })

  useEffect(() => {
    // In a real app, you would fetch booking details from your backend
    // or URL parameters
  }, [])

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="section-padding max-w-2xl mx-auto">
        {/* Confirmation Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="opacity-90">Your consultation has been scheduled successfully</p>
          </div>

          {/* Details */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Reference */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-600 mb-1">Booking Reference</div>
                <div className="text-2xl font-bold text-primary">{bookingDetails.reference}</div>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Booking Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-600">Date & Time</div>
                        <div className="font-medium">
                          {bookingDetails.date} at {bookingDetails.time}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-600">Contact Number</div>
                        <div className="font-medium">+254 700 000 000</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-600">Contact Email</div>
                        <div className="font-medium">info@hatuamoja.co.ke</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Next Steps</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                      <span>You will receive a confirmation email within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                      <span>Our team will contact you to confirm the details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                      <span>Prepare any questions you have about the property</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Important Notes</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Please arrive 10 minutes before your scheduled time</li>
                  <li>• Bring a copy of your ID for verification</li>
                  <li>• Cancellations must be made at least 24 hours in advance</li>
                  <li>• In case of delays, please contact us immediately</li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/"
                className="btn-primary flex-1 text-center py-3"
              >
                Back to Home
              </Link>
              <button
                onClick={handlePrint}
                className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                <Download className="h-5 w-5 mr-2" />
                Print Confirmation
              </button>
              <Link 
                href="/contact"
                className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 rounded-lg transition-colors text-center"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Need to reschedule or cancel? Contact us at <span className="font-semibold">bookings@hatuamoja.co.ke</span></p>
          <p className="mt-2">Office hours: Monday - Friday, 8:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  )
}