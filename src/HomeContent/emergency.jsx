import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as LucideIcons from 'lucide-react'

export default function EmergencyCategories() {
  const navigate = useNavigate()

  const emergencyItems = [
    { id: 1, title: 'এম্বুল্যান্স', icon: '/ambulance.svg', color: 'from-red-500 to-red-700', path: '/pages/emergency/ambulance' },
    { id: 2, title: 'ফায়ার সার্ভিস', icon: '/fire.svg', color: 'from-orange-600 to-red-600', path: '/pages/emergency/fireservice' },
    { id: 3, title: 'জরুরি সেবা', icon: '/emergency.svg', color: 'from-red-600 to-rose-700', path: '/pages/emergency/emergency' },
    { id: 4, title: 'রক্ত দান', icon: '/blood.svg', color: 'from-rose-500 to-red-800', path: '/pages/emergency/blood' },
  ]

  return (
    <div className="mb-12 px-0 font-bangla">
      {/* Title Section */}
      <div className="flex items-center gap-3 mb-6 mt-10">
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
          <div className="relative rounded-full bg-red-600 p-2">
            <LucideIcons.AlertCircle size={20} className="text-white" />
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-red-600 dark:text-red-500">
          ইমারজেন্সি সার্ভিস
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {emergencyItems.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => navigate(item.path)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl p-[1px] transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg"
            >
              {/* Animated Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 dark:opacity-40`}></div>
              
              <div className="relative bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-2xl flex items-center gap-4 border border-red-100/50 dark:border-red-900/30 h-full">
                
                {/* Icon Container with subtle BG */}
                <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg shadow-red-200 dark:shadow-none group-hover:rotate-12 transition-transform duration-300`}>
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-5 h-5 sm:w-8 sm:h-8 object-contain brightness-0 invert" 
                    onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/564/564619.png' }}
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-gray-800 dark:text-gray-100 text-[12px] sm:text-base font-bold leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-red-500 font-medium mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    তথ্য দেখুন →
                  </span>
                </div>

                {/* Background Decoration Icon */}
                <div className="absolute -right-2 -bottom-2 opacity-[0.05] dark:opacity-[0.1] text-red-600 group-hover:scale-125 transition-transform duration-500">
                   <LucideIcons.PhoneCall size={60} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}