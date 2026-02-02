import React, { useState } from 'react'
import { Home, Bell, User, Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const [activeIcon, setActiveIcon] = React.useState('Home')
  const navigate = useNavigate()

  const footerItems = [
    { id: 1, name: 'Home', icon: <Home size={24} />, path: '/' },
    { id: 2, name: 'Notification', icon: <Bell size={24} />, path: '/about' },
    { id: 3, name: 'Menu', icon: <Menu size={24} />, path: '/contact' },
    { id: 4, name: 'About', icon: <User size={24} />, path: '/terms' },
  ]

  const handleClick = (name, path) => {
    setActiveIcon(name)
    navigate(path)
  }

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-around py-3">
          {footerItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.name, item.path)}
              className={`flex flex-col items-center p-2 transition-all ${
                activeIcon === item.name
                  ? 'text-blue-500 dark:text-blue-400 transform scale-110'
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
              }`}
            >
              {item.icon}
              <span className="text-xs mt-1 font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
