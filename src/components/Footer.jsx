import React from 'react'
import { Home, Bell, User, Compass, BookAlert } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const footerItems = [
    { id: 1, name: 'Home', icon: Home, path: '/', color: 'text-blue-500', bg: 'bg-blue-500' },
    { id: 2, name: 'Explore', icon: Compass, path: '/explore', color: 'text-purple-500', bg: 'bg-purple-500' },
    { id: 3, name: 'Notice', icon: BookAlert, path: '/alerts', color: 'text-amber-500', bg: 'bg-amber-500' },
    { id: 4, name: 'Profile', icon: User, path: '/user', color: 'text-emerald-500', bg: 'bg-emerald-500' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto">
        {/* Height কমিয়ে 8px padding দেওয়া হয়েছে */}
        <div className="flex justify-around items-center py-2">
          {footerItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className="relative flex flex-col items-center p-1.5 group transition-all duration-300"
              >
                {/* Active indicator - আরো ছোট */}
                {active && (
                  <div className={`absolute -top-1.5 w-8 h-0.5 ${item.bg} rounded-full`}></div>
                )}
                
                {/* Icon container - ছোট সাইজ */}
                <div className={`relative p-2 rounded-full transition-all duration-200 ${
                  active 
                    ? `${item.bg} text-white shadow-md`
                    : 'text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300'
                }`}>
                  <Icon size={20} />
                </div>
                
                {/* Label - ছোট font */}
                <span className={`text-[11px] mt-1 font-medium transition-colors duration-200 ${
                  active 
                    ? `${item.color} font-semibold`
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {item.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer