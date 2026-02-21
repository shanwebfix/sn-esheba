import React, { useState } from 'react'
import { Phone, MapPin, Shield, Users, AlertTriangle, Clock, Zap, FlameKindling, HeartPulse, Bell, Award, Camera } from 'lucide-react'

export default function KomolgonjEmergency() {
  const [activeTab, setActiveTab] = useState('সকল')

  const emergencyServices = [
    {
      id: 1,
      name: 'কমলগঞ্জ মডেল থানা',
      category: 'পুলিশ',
      officer: 'ওসি (OC)',
      phone: '01713-374508',
      emergency: '01320-120610',
      address: 'থানা রোড, কমলগঞ্জ',
      icon: <Shield className="w-5 h-5 text-blue-600" />
    },
    {
      id: 2,
      name: 'পল্লী বিদ্যুৎ (অভিযোগ)',
      category: 'বিদ্যুৎ',
      officer: 'ডিজিএম (DGM)',
      phone: '01769-400100',
      emergency: '01769-400037',
      address: 'কমলগঞ্জ জোনাল অফিস',
      icon: <Zap className="w-5 h-5 text-yellow-500" />
    },
    {
      id: 3,
      name: 'উপজেলা স্বাস্থ্য কমপ্লেক্স',
      category: 'চিকিৎসা',
      officer: 'জরুরি বিভাগ',
      phone: '01712-345678',
      emergency: '01711-112233',
      address: 'কমলগঞ্জ সদর',
      icon: <HeartPulse className="w-5 h-5 text-red-500" />
    },
    {
      id: 4,
      name: 'ট্যুরিস্ট পুলিশ (লাউয়াছড়া)',
      category: 'পুলিশ',
      officer: 'ইনচার্জ',
      phone: '01320-159458',
      emergency: '01320-159458',
      address: 'লাউয়াছড়া বন এলাকা',
      icon: <Camera className="w-5 h-5 text-indigo-500" />
    },
    {
      id: 5,
      name: 'তিতাস গ্যাস (জরুরি)',
      category: 'গ্যাস',
      officer: 'কন্ট্রোল রুম',
      phone: '08626-56040',
      emergency: '01715-000000',
      address: 'আঞ্চলিক অফিস',
      icon: <FlameKindling className="w-5 h-5 text-orange-500" />
    }
  ];

  const handleCall = (num) => {
    window.location.href = `tel:${num}`;
  };

  const filteredServices = activeTab === 'সকল' 
    ? emergencyServices 
    : emergencyServices.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen p-4 font-bangla">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-8">
          <div className="inline-flex p-4 bg-red-600 rounded-full mb-4 shadow-lg shadow-red-200 dark:shadow-none">
            <Bell className="w-8 h-8 text-white animate-ring" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">কমলগঞ্জ জরুরি সেবা ডিরেক্টরি</h1>
          <p className="text-gray-500 dark:text-gray-400">অগ্নি নির্বাপক ও অ্যাম্বুলেন্স ব্যতীত অন্যান্য জরুরি নম্বর</p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {['সকল', 'পুলিশ', 'বিদ্যুৎ', 'চিকিৎসা', 'গ্যাস'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === tab 
                ? 'bg-red-600 text-white shadow-md' 
                : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Service List */}
        <div className="space-y-4">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      {service.icon}
                    </span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <MapPin size={14} /> {service.address}
                  </div>
                  
                  <div className="mt-4 flex flex-col gap-1">
                    <span className="text-xs text-gray-400 uppercase">অফিস নম্বর:</span>
                    <span className="text-lg font-mono font-bold text-gray-800 dark:text-gray-200">
                      {service.phone}
                    </span>
                  </div>
                </div>

                {/* Right Side Small Red Call Button */}
                <div className="flex flex-col items-end gap-3">
                  <button 
                    onClick={() => handleCall(service.emergency)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-red-100 dark:shadow-none"
                  >
                    <Phone size={16} fill="currentColor" />
                    জরুরি কল
                  </button>
                  <p className="text-[10px] text-gray-400 font-bold bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded">
                    {service.officer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Footer */}
        <div className="mt-10 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
          <h4 className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-400 mb-3">
            <AlertTriangle size={20} /> নাগরিক নির্দেশিকা
          </h4>
          <ul className="text-sm text-blue-700 dark:text-blue-500/80 space-y-2">
            <li>• বিদ্যুৎ বিভ্রাটের ক্ষেত্রে মিটার নম্বর ও এলাকা স্পষ্টভাবে জানাবেন।</li>
            <li>• পুলিশি সহায়তার জন্য আপনার সঠিক অবস্থান এবং ঘটনার বিবরণ দিন।</li>
            <li>• জাতীয় জরুরি সেবার জন্য সরাসরি **৯৯৯** নম্বরে কল করতে পারেন।</li>
          </ul>
        </div>
      </div>
    </div>
  )
}