'use client'

import { 
  TrendingUp, Users, Package, DollarSign, 
  Calendar, MessageSquare, Eye, ShoppingCart 
} from 'lucide-react'
import { useState, useEffect } from 'react'

interface StatCardProps {
  title: string
  value: string | number
  change: string
  icon: React.ElementType
  color: string
}

function StatCard({ title, value, change, icon: Icon, color }: StatCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className={`flex-shrink-0 rounded-md p-3 ${color}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd className="text-lg font-semibold text-gray-900">{value}</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <span className="font-medium text-green-600">
            {change}
          </span>
          <span className="text-gray-500 ml-2">Since last month</span>
        </div>
      </div>
    </div>
  )
}

interface RecentActivity {
  id: number
  user: string
  action: string
  property: string
  time: string
}

interface RecentInquiry {
  id: number
  name: string
  email: string
  property: string
  date: string
  status: 'new' | 'contacted' | 'closed'
}

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProperties: 24,
    totalInquiries: 156,
    totalRevenue: 'KES 48.2M',
    conversionRate: '4.2%',
    activeOffers: 8,
    siteVisits: 42,
    newUsers: 28,
    pendingTasks: 5
  })

  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([
    { id: 1, user: 'John Doe', action: 'Added new property', property: 'Kilimani Prime Plots', time: '2 hours ago' },
    { id: 2, user: 'Sarah Smith', action: 'Updated offer', property: 'First-time Buyer Discount', time: '4 hours ago' },
    { id: 3, user: 'Mike Johnson', action: 'Contacted inquiry', property: 'Mombasa Beachfront', time: '1 day ago' },
    { id: 4, user: 'Admin', action: 'Created new offer', property: 'Referral Program', time: '2 days ago' },
  ])

  const [recentInquiries, setRecentInquiries] = useState<RecentInquiry[]>([
    { id: 1, name: 'David Kimani', email: 'david@email.com', property: 'Nakuru Agricultural Land', date: 'Today', status: 'new' },
    { id: 2, name: 'Jane Wanjiru', email: 'jane@email.com', property: 'Kiambu Highlands', date: 'Yesterday', status: 'contacted' },
    { id: 3, name: 'Robert Ochieng', email: 'robert@email.com', property: 'Machakos Commercial', date: '2 days ago', status: 'new' },
    { id: 4, name: 'Susan Akinyi', email: 'susan@email.com', property: 'Kisumu Lakeview', date: '3 days ago', status: 'closed' },
  ])

  const statCards = [
    { title: 'Total Properties', value: stats.totalProperties, change: '+12%', icon: Package, color: 'bg-blue-500' },
    { title: 'Total Revenue', value: stats.totalRevenue, change: '+8.4%', icon: DollarSign, color: 'bg-green-500' },
    { title: 'Total Inquiries', value: stats.totalInquiries, change: '+23%', icon: MessageSquare, color: 'bg-purple-500' },
    { title: 'Conversion Rate', value: stats.conversionRate, change: '+1.2%', icon: TrendingUp, color: 'bg-yellow-500' },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'closed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <p className="mt-2 text-gray-600">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {statCards.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activity & Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                {recentActivities.map((activity, activityIdx) => (
                  <li key={activity.id}>
                    <div className="relative pb-8">
                      {activityIdx !== recentActivities.length - 1 ? (
                        <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-white text-sm font-bold">
                              {activity.user.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-800">
                              <span className="font-medium">{activity.user}</span>{' '}
                              {activity.action}{' '}
                              <span className="font-medium">{activity.property}</span>
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time>{activity.time}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Recent Inquiries */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Inquiries</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Property
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentInquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{inquiry.name}</div>
                        <div className="text-sm text-gray-500">{inquiry.email}</div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {inquiry.property}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(inquiry.status)}`}>
                          {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <button className="text-primary hover:text-primary-dark font-medium">
                View all inquiries →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Calendar className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Site Visits This Week
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">{stats.siteVisits}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Eye className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Active Offers
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">{stats.activeOffers}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    New Users This Month
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">{stats.newUsers}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ShoppingCart className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Pending Tasks
                  </dt>
                  <dd className="text-lg font-semibold text-gray-900">{stats.pendingTasks}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}