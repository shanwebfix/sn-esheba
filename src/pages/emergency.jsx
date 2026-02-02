import React from 'react'
import { ShoppingCart, Book, Users, Settings, Bell, FileText, Calendar, CreditCard, Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function EmergencyCategories() {
  const navigate = useNavigate()

  const emergencyItems = [
    { id: 1, title: 'Ambulance', icon: <ShoppingCart />, path: '/src/cat/ambulance' },
    { id: 2, title: 'Hospital', icon: <Book />, path: '/src/cat//hospital' },
    { id: 3, title: 'Police', icon: <Users />, path: '/src/cat//police' },
    { id: 4, title: 'Fire Service', icon: <Settings />, path: '/src/cat//fire-service' },
    { id: 5, title: 'Emergency', icon: <Bell />, path: '/src/cat//emergency-contact' },
  ]

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
        Emergency Services
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {emergencyItems.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(item.path)}
            className="cursor-pointer flex flex-col items-center justify-center p-5 sm:p-8 bg-red-50 dark:bg-red-900/20 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-red-200 dark:border-red-800"
          >
            <div className="text-red-500 dark:text-red-400 mb-2">
              {React.cloneElement(item.icon, { size: 24 })}
            </div>
            <h3 className="text-gray-800 dark:text-gray-200 text-sm font-semibold text-center">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}