import React, { useState } from 'react'
import { 
  ShoppingBag, Utensils, Monitor, Shirt, Hammer, 
  Smartphone, Gift, Pill, Coffee, Scissors, 
  Watch, Car, Search, MapPin, Star, ArrowRight , Footprints, Flower2
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Dukan() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const dukanItems = [
    { id: 1, title: 'মুদি দোকান', count: '১২০টি', icon: <ShoppingBag />, path: '/market/mudi', color: 'bg-orange-100 text-orange-600', darkColor: 'dark:bg-orange-900/30 dark:text-orange-400' },
    { id: 2, title: 'রেস্টুরেন্ট', count: '৮৫টি', icon: <Utensils />, path: '/market/resturant', color: 'bg-red-100 text-red-600', darkColor: 'dark:bg-red-900/30 dark:text-red-400' },
    { id: 3, title: 'ইলেকট্রনিক্স', count: '৪৫টি', icon: <Monitor />, path: '/market/electric', color: 'bg-blue-100 text-blue-600', darkColor: 'dark:bg-blue-900/30 dark:text-blue-400' },
    { id: 4, title: 'পোশাকের দোকান', count: '২০০টি', icon: <Shirt />, path: '/market/garments', color: 'bg-pink-100 text-pink-600', darkColor: 'dark:bg-pink-900/30 dark:text-pink-400' },
    { id: 12, title: 'জুতার দোকান', count: '১২টি', icon: <Footprints />, path: '/market/shoes', color: 'bg-cyan-100 text-cyan-600', darkColor: 'dark:bg-cyan-900/30 dark:text-cyan-400' },
    { id: 5, title: 'হার্ডওয়্যার', count: '৩০টি', icon: <Hammer />, path: '/market/hardware', color: 'bg-slate-100 text-slate-600', darkColor: 'dark:bg-slate-800 dark:text-slate-400' },
    { id: 6, title: 'মোবাইল শপ', count: '৬০টি', icon: <Smartphone />, path: '/it/mobile-shop', color: 'bg-indigo-100 text-indigo-600', darkColor: 'dark:bg-indigo-900/30 dark:text-indigo-400' },
    { id: 7, title: 'গিফট শপ', count: '২৫টি', icon: <Gift />, path: '/market/gift', color: 'bg-purple-100 text-purple-600', darkColor: 'dark:bg-purple-900/30 dark:text-purple-400' },
    { id: 8, title: 'ফার্মেসী', count: '৪০টি', icon: <Pill />, path: '/health/pharmacy', color: 'bg-emerald-100 text-emerald-600', darkColor: 'dark:bg-emerald-900/30 dark:text-emerald-400' },
    { id: 9, title: 'কফি শপ', count: '১৫টি', icon: <Coffee />, path: '/market/coffee', color: 'bg-yellow-100 text-yellow-600', darkColor: 'dark:bg-yellow-900/30 dark:text-yellow-400' },
    { id: 10, title: 'সেলুন', count: '৫০টি', icon: <Scissors />, path: '/market/selun', color: 'bg-stone-100 text-stone-600', darkColor: 'dark:bg-stone-800 dark:text-stone-400' },
    { id: 11, title: 'পার্লার', count: '১৮টি', icon: <Flower2 />, path: '/market/parlor', color: 'bg-rose-100 text-rose-600', darkColor: 'dark:bg-rose-900/30 dark:text-rose-400' },
    { id: 12, title: 'ঘড়ির দোকান', count: '১২টি', icon: <Watch />, path: '/market/watch', color: 'bg-cyan-100 text-cyan-600', darkColor: 'dark:bg-cyan-900/30 dark:text-cyan-400' },
    
    
  ]

  const filteredItems = dukanItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen  py-8 ">
      <div className="container mx-auto px-0">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            দোকান <span className="text-blue-600">ডাইরেক্টরি</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto mb-8">
            আপনার শহরের সেরা দোকানগুলো এক ক্লিকে খুঁজে বের করুন
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="দোকানের ধরন খুঁজুন (যেমন: মুদি, মোবাইল...)"
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-900 border-none rounded-2xl shadow-lg focus:ring-2 focus:ring-blue-500 dark:text-white outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'মোট দোকান', value: '৮৫০+', icon: <ShoppingBag className="w-5 h-5"/> },
            { label: 'এলাকা', value: '২৪টি', icon: <MapPin className="w-5 h-5"/> },
            { label: 'সেরা রেটিং', value: '৪.৮/৫', icon: <Star className="w-5 h-5"/> },
            { label: 'নতুন আজ', value: '১২টি', icon: <ArrowRight className="w-5 h-5"/> },
          ].map((stat, i) => (
            <div key={i} className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg">{stat.icon}</div>
              <div>
                <p className="text-2xl font-bold dark:text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(item.path)}
              className="group relative bg-white dark:bg-gray-900 p-6 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 cursor-pointer overflow-hidden"
            >
              {/* Decorative Background Circle */}
              <div className={`absolute -right-4 -top-4 w-20 h-20 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700 ${item.color} ${item.darkColor}`}></div>

              <div className={`${item.color} ${item.darkColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 shadow-inner`}>
                {React.cloneElement(item.icon, { size: 32 })}
              </div>

              <div className="relative z-10">
                <h3 className="text-gray-900 dark:text-gray-100 text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
                    {item.count}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-16 p-8 bg-blue-600 rounded-[2.5rem] text-center text-white shadow-2xl shadow-blue-200 dark:shadow-none">
          <h2 className="text-2xl font-bold mb-2">আপনার দোকান কি লিস্টে নেই?</h2>
          <p className="mb-6 opacity-90">আপনার দোকানটি আমাদের ডাইরেক্টরিতে যুক্ত করতে আজই যোগাযোগ করুন।</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
            দোকান যুক্ত করুন
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dukan;