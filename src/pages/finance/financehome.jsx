import React, { useState } from 'react'
import { 
  Building2, Landmark, HandCoins, Smartphone, 
  CreditCard, ShieldCheck, PieChart, Search,
  BadgePercent, Receipt, ChevronRight
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Finance() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const financeItems = [
    { id: 1, title: 'ব্যাংকিং সেবা', count: '২৫টি ব্যাংক', icon: <Landmark />, path: '/finance/bank', color: 'bg-blue-500' },
    { id: 2, title: 'মোবাইল ব্যাংকিং', count: 'বিকাশ, নগদ, রকেট', icon: <Smartphone />, path: '/finance/mobile-bank', color: 'bg-pink-500' },
    { id: 3, title: 'এনজিও (NGO)', count: '১০টি সংস্থা', icon: <HandCoins />, path: '/finance/ngo', color: 'bg-emerald-500' },
    { id: 4, title: 'এটিএম বুথ', count: 'নিকটস্থ বুথ', icon: <CreditCard />, path: '/finance/atm', color: 'bg-violet-500' },
    { id: 5, title: 'লোন ক্যালকুলেটর', count: 'কিস্তির হিসাব', icon: <BadgePercent />, path: '/finance/loanc', color: 'bg-red-500' },
  ]

  const filteredItems = financeItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen">
      
      {/* Search Header - একদম সোজা সাপটা */}
      <div className="bg-gray-50 dark:bg-gray-900 px-4 py-10 border-b dark:border-gray-800">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">আর্থিক সেবা ও ব্যাংক</h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="কি সেবা খুঁজছেন?"
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Grid - কার্ডগুলো এখন হেডারের নিচে */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(item.path)}
              className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                {React.cloneElement(item.icon, { size: 24 })}
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">{item.title}</h3>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.count}</p>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-500 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* নিচের ইনফো বার */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-wrap justify-around gap-4">
            <div className="flex items-center gap-2">
                <ShieldCheck className="text-emerald-500" size={20} />
                <span className="text-sm font-medium dark:text-gray-300">১০০% নিরাপদ</span>
            </div>
            <div className="flex items-center gap-2">
                <Building2 className="text-blue-500" size={20} />
                <span className="text-sm font-medium dark:text-gray-300">ভেরিফাইড ব্যাংক</span>
            </div>
            <div className="flex items-center gap-2">
                <Smartphone className="text-pink-500" size={20} />
                <span className="text-sm font-medium dark:text-gray-300">মোবাইল ব্যাংকিং</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Finance;