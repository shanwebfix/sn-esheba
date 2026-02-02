import React, { useState } from 'react'
import { Phone, MapPin, Flame, AlertTriangle, Clock, Truck, Droplets, Shield, Users, Radio, Siren, Home } from 'lucide-react'

export default function FireService() {
  const [activeTab, setActiveTab] = useState('stations')

  const fireStations = [
    {
      id: 1,
      name: 'কমলগঞ্জ ফায়ার সার্ভিস স্টেশন',
      banglaName: 'কমলগঞ্জ ফায়ার সার্ভিস স্টেশন',
      type: 'প্রধান স্টেশন',
      officer: 'মো: সেলিম আহমেদ, স্টেশন অফিসার',
      address: 'কমলগঞ্জ বাজার, মৌলভীবাজার সিলেট রোড',
      phone: ['01713-991201', '08626-56021'],
      emergency: ['16163', '01713-991200'],
      email: 'kamlagonj.fire@dghs.gov.bd',
      vehicles: ['ওয়াটার টেন্ডার', 'রেসকিউ ভ্যান', 'জিপ'],
      equipment: ['ফায়ার হোস', 'হাইড্রেন্ট', 'ব্রেদিং অ্যাপারেটাস', 'ফায়র এক্সটিংগুইশার'],
      timing: '২৪/৭',
      rating: 4.8,
      coordinates: '24.3833°N, 91.8667°E',
      capacity: 'প্রতি ঘন্টায় ৫০০০ লিটার পানি'
    },
    {
      id: 2,
      name: 'শ্রীমঙ্গল ফায়ার সাব-স্টেশন',
      banglaName: 'শ্রীমঙ্গল ফায়ার সাব-স্টেশন',
      type: 'সাব-স্টেশন',
      officer: 'আব্দুল হান্নান, এসআই',
      address: 'শ্রীমঙ্গল বাজার সংলগ্ন',
      phone: ['01713-991202'],
      emergency: ['16163'],
      email: 'sreemangal.fire@dghs.gov.bd',
      vehicles: ['মিনি ফায়ার ট্রাক', 'অ্যাম্বুলেন্স'],
      equipment: ['পোর্টেবল পাম্প', 'ফায়ার এক্সটিংগুইশার', 'ফার্স্ট এইড কিট'],
      timing: '২৪/৭',
      rating: 4.3,
      coordinates: '24.3100°N, 91.7300°E',
      capacity: 'প্রতি ঘন্টায় ২০০০ লিটার পানি'
    },
    {
      id: 3,
      name: 'লাউয়াছড়া ফরেষ্ট ফায়ার ইউনিট',
      banglaName: 'লাউয়াছড়া ফরেষ্ট ফায়ার ইউনিট',
      type: 'বিশেষ ইউনিট',
      officer: 'রফিকুল ইসলাম, ফরেষ্টার',
      address: 'লাউয়াছড়া সংরক্ষিত বন',
      phone: ['01713-991203'],
      emergency: ['01713-991203'],
      email: 'lawachara.forestfire@dghs.gov.bd',
      vehicles: ['ফরেষ্ট ফায়ার ট্রাক', 'জিপ'],
      equipment: ['ফরেষ্ট ফায়ার বিটার', 'এয়ার ব্লোয়ার', 'স্মোক জাম্পার'],
      timing: 'বনকালীন ২৪/৭',
      rating: 4.5,
      coordinates: '24.3200°N, 91.7800°E',
      capacity: 'বিশেষ বন অগ্নিনির্বাপক ব্যবস্থা'
    },
    {
      id: 4,
      name: 'তিলকপুর ইন্ডাস্ট্রিয়াল ফায়ার ইউনিট',
      banglaName: 'তিলকপুর ইন্ডাস্ট্রিয়াল ফায়ার ইউনিট',
      type: 'ইন্ডাস্ট্রিয়াল',
      officer: 'মো: করিম উদ্দিন, ফায়ার সুপারভাইজার',
      address: 'তিলকপুর ইন্ডাস্ট্রিয়াল এরিয়া',
      phone: ['01713-991204'],
      emergency: ['01713-991204'],
      email: 'tilakpur.industrial@dghs.gov.bd',
      vehicles: ['ফোম টেন্ডার', 'কেমিক্যাল ট্রাক'],
      equipment: ['কেমিক্যাল এক্সটিংগুইশার', 'হ্যাজার্ড ম্যাটেরিয়াল সুইট', 'সেলফ কন্টেইন্ড ব্রেদিং'],
      timing: 'সকাল ৮টা - রাত ১০টা',
      rating: 4.2,
      coordinates: '24.3900°N, 91.8750°E',
      capacity: 'কেমিক্যাল ও ইলেকট্রিক্যাল ফায়ার নির্বাপন'
    }
  ]

  const emergencyContacts = [
    { 
      name: 'ফায়ার সার্ভিস', 
      number: '16163', 
      description: 'জাতীয় জরুরি ফায়ার সার্ভিস',
      icon: 'Siren',
      color: 'bg-red-100 dark:bg-red-900',
      textColor: 'text-red-600 dark:text-red-400'
    },
    { 
      name: 'জরুরি হেল্পলাইন', 
      number: '999', 
      description: 'সকল ধরনের জরুরি সেবা',
      icon: 'AlertTriangle',
      color: 'bg-orange-100 dark:bg-orange-900',
      textColor: 'text-orange-600 dark:text-orange-400'
    },
    { 
      name: 'পুলিশ সহায়তা', 
      number: '100', 
      description: 'ফায়ার রেসপন্স সহায়তা',
      icon: 'Shield',
      color: 'bg-blue-100 dark:bg-blue-900',
      textColor: 'text-blue-600 dark:text-blue-400'
    },
    { 
      name: 'অ্যাম্বুলেন্স', 
      number: '01713-991100', 
      description: 'জরুরি মেডিকেল সার্ভিস',
      icon: 'Truck',
      color: 'bg-green-100 dark:bg-green-900',
      textColor: 'text-green-600 dark:text-green-400'
    },
    { 
      name: 'বন বিভাগ', 
      number: '01713-991203', 
      description: 'বন অগ্নি নির্বাপন',
      icon: 'Flame',
      color: 'bg-emerald-100 dark:bg-emerald-900',
      textColor: 'text-emerald-600 dark:text-emerald-400'
    },
    { 
      name: 'সিভিল ডিফেন্স', 
      number: '01713-991205', 
      description: 'দুর্যোগ ব্যবস্থাপনা',
      icon: 'Users',
      color: 'bg-purple-100 dark:bg-purple-900',
      textColor: 'text-purple-600 dark:text-purple-400'
    }
  ]

  const fireSafetyTips = [
    {
      category: 'গৃহস্থালি',
      tips: [
        'রান্না করার সময় চুলার সামনে থাকুন',
        'ইলেকট্রিক শর্ট সার্কিট থেকে সাবধান',
        'শিশুদের ম্যাচ ও লাইটার থেকে দূরে রাখুন',
        'ঘরে ফায়ার এক্সটিংগুইশার রাখুন'
      ]
    },
    {
      category: 'ইন্ডাস্ট্রিয়াল',
      tips: [
        'ফায়ার এক্সিট সবসময় খোলা রাখুন',
        'কর্মীদের ফায়ার ড্রিল প্রশিক্ষণ দিন',
        'ফ্লেমেবল ম্যাটেরিয়াল সঠিকভাবে সংরক্ষণ করুন',
        'রেগুলার ফায়ার সেফটি চেক করুন'
      ]
    },
    {
      category: 'বন ও প্রাকৃতিক',
      tips: [
        'বনে আগুন ব্যবহারে সতর্কতা অবলম্বন করুন',
        'সিগারেটের বাট সঠিকভাবে নিভিয়ে ফেলুন',
        'শুকনো ঘাসে আগুন জ্বালাবেন না',
        'বন দপ্তরে আগুনের ঘটনা রিপোর্ট করুন'
      ]
    }
  ]

  const emergencyProcedures = [
    {
      title: 'ফায়ার ঘটলে করণীয়',
      steps: [
        'দ্রুত 16163 নম্বরে কল করুন',
        'আপনার সঠিক ঠিকানা ও ফোন নম্বর দিন',
        'আগুনের ধরন ও অবস্থান জানান',
        'নিরাপদ স্থানে সরে যান',
        'ফায়ার সার্ভিসের নির্দেশনা মেনে চলুন'
      ]
    },
    {
      title: 'আগুন নিয়ন্ত্রণ টিপস',
      steps: [
        'ছোট আগুন পানির সাহায্যে নিভান',
        'তেল-চর্বির আগুনে পানি ব্যবহার করবেন না',
        'ইলেকট্রিক ফায়ার হলে মেইন সুইচ বন্ধ করুন',
        'বন্ধ ঘরে আগুন জ্বললে দরজা না খুলে বাইরে থেকে নিভান'
      ]
    },
    {
      title: 'ফায়ার নির্বাপন যন্ত্র ব্যবহার',
      steps: [
        'পিন খুলে সেফটি ক্লিপ সরান',
        'হোজটিকে আগুনের দিকে ধরুন',
        'লিভার চাপ দিন',
        'আগুনের গোড়ায় স্প্রে করুন',
        'সাইড থেকে সাইডে সুইপ করুন'
      ]
    }
  ]

  const equipmentList = [
    { name: 'ফায়র এক্সটিংগুইশার', type: 'পোর্টেবল', use: 'ছোট আগুন নির্বাপন' },
    { name: 'ফায়ার হোস রিল', type: 'ফিক্সড', use: 'বড় আগুন নির্বাপন' },
    { name: 'হাইড্রেন্ট সিস্টেম', type: 'ফিক্সড', use: 'পানি সরবরাহ' },
    { name: 'ব্রেদিং অ্যাপারেটাস', type: 'সুরক্ষা', use: 'ধোঁয়ায় শ্বাস নেওয়া' },
    { name: 'ফায়র অ্যালার্ম সিস্টেম', type: 'ডিটেকশন', use: 'আগুন সনাক্তকরণ' },
    { name: 'ফায়ার ব্ল্যাঙ্কেট', type: 'পোর্টেবল', use: 'ছোট আগুন ঢেকে নিভানো' },
    { name: 'রেসকিউ ল্যাডার', type: 'রেসকিউ', use: 'উদ্ধার কাজ' },
    { name: 'ফায়ার অ্যাক্স', type: 'টুল', use: 'দরজা ভাঙ্গা ও পথ তৈরি' }
  ]

  const IconComponent = ({ name, className }) => {
    const icons = {
      Siren: <Siren className={className} />,
      AlertTriangle: <AlertTriangle className={className} />,
      Shield: <Shield className={className} />,
      Truck: <Truck className={className} />,
      Flame: <Flame className={className} />,
      Users: <Users className={className} />
    }
    return icons[name] || <AlertTriangle className={className} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* হেডার */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full mb-4">
            <Flame className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            কমলগঞ্জ ফায়ার সার্ভিস ও অগ্নিনির্বাপক সেবা
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            জরুরি ফায়ার সার্ভিস, অগ্নিনির্বাপক যন্ত্র এবং অগ্নি নিরাপত্তা নির্দেশিকা
          </p>
        </div>

        {/* জরুরি যোগাযোগ গ্রিড */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">জরুরি যোগাযোগ নম্বর</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 hover:shadow-xl transition duration-300 border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${contact.color} rounded-lg`}>
                    <IconComponent name={contact.icon} className={`w-6 h-6 ${contact.textColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-1">{contact.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{contact.description}</p>
                    <div className="flex items-center justify-between">
                      <a 
                        href={`tel:${contact.number}`}
                        className="text-lg font-bold text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400"
                      >
                        {contact.number}
                      </a>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-300">
                        জরুরি কল
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ট্যাব নেভিগেশন */}
        <div className="mb-8">
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            {['stations', 'safety', 'equipment', 'procedures'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-lg transition duration-300 ${
                  activeTab === tab
                    ? 'text-red-600 dark:text-red-400 border-b-2 border-red-600 dark:border-red-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'
                }`}
              >
                {tab === 'stations' && 'ফায়ার স্টেশন'}
                {tab === 'safety' && 'নিরাপত্তা টিপস'}
                {tab === 'equipment' && 'যন্ত্রপাতি'}
                {tab === 'procedures' && 'প্রক্রিয়া'}
              </button>
            ))}
          </div>
        </div>

        {/* ফায়ার স্টেশন সেকশন */}
        {activeTab === 'stations' && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                ফায়ার স্টেশন ও ইউনিট ({fireStations.length})
              </h2>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm font-semibold rounded-full">
                ২৪/৭ সেবা প্রাপ্তিস্থান
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {fireStations.map((station) => (
                <div key={station.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  
                  {/* স্টেশন হেডার */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                            station.type.includes('প্রধান') 
                              ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                              : station.type.includes('বিশেষ')
                              ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200'
                              : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                          }`}>
                            {station.type}
                          </span>
                          <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm font-semibold rounded-full">
                            {station.capacity}
                          </span>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {station.banglaName}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">{station.name}</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-2">
                            <span className="font-semibold">স্টেশন অফিসার:</span> {station.officer}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full mb-2">
                            <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />
                          </div>
                          <p className="font-bold text-gray-800 dark:text-white">{station.timing}</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mb-2">
                            <Truck className="w-6 h-6 text-green-600 dark:text-green-400" />
                          </div>
                          <p className="font-bold text-gray-800 dark:text-white">{station.vehicles.length} গাড়ি</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* স্টেশন ডিটেইলস */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                      {/* যোগাযোগ তথ্য */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">ঠিকানা</p>
                            <p className="text-gray-600 dark:text-gray-400">{station.address}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{station.coordinates}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">ফোন নম্বর</p>
                            <div className="space-y-1">
                              {station.phone.map((phone, idx) => (
                                <a 
                                  key={idx}
                                  href={`tel:${phone}`}
                                  className="block text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium hover:underline"
                                >
                                  {phone}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* জরুরি নম্বর */}
                      <div>
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 h-full">
                          <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                            <Siren className="w-5 h-5" /> জরুরি নম্বর
                          </h4>
                          <div className="space-y-2">
                            {station.emergency.map((emergency, idx) => (
                              <div key={idx} className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-lg">
                                <span className="font-semibold text-gray-800 dark:text-white">
                                  {idx === 0 ? 'প্রধান' : 'বিকল্প'}:
                                </span>
                                <a 
                                  href={`tel:${emergency}`}
                                  className="text-red-600 dark:text-red-400 font-bold text-lg hover:underline"
                                >
                                  {emergency}
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* যানবাহন ও সরঞ্জাম */}
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">যানবাহন:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {station.vehicles.map((vehicle, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                              {vehicle}
                            </span>
                          ))}
                        </div>
                        
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">সরঞ্জাম:</h4>
                        <div className="flex flex-wrap gap-2">
                          {station.equipment.slice(0, 3).map((eq, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm rounded-full">
                              {eq}
                            </span>
                          ))}
                          {station.equipment.length > 3 && (
                            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                              +{station.equipment.length - 3} আরও
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* অ্যাকশন বাটন */}
                    <div className="flex flex-wrap gap-3">
                      <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                        <Siren className="w-4 h-4" />
                        জরুরি ফায়ার কল
                      </button>
                      <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4" />
                        লোকেশন দেখুন
                      </button>
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                        <Radio className="w-4 h-4" />
                        রেডিও যোগাযোগ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* নিরাপত্তা টিপস সেকশন */}
        {activeTab === 'safety' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">অগ্নি নিরাপত্তা নির্দেশিকা</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {fireSafetyTips.map((category, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <Home className="w-5 h-5" /> {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-sm">
                          {tipIdx + 1}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ফায়ার নির্বাপন প্রক্রিয়া */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Flame className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                STOP, DROP & ROLL প্রক্রিয়া
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-600 dark:text-red-400 font-bold text-xl">STOP</span>
                  </div>
                  <p className="font-semibold text-gray-800 dark:text-white">থামুন</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">দৌড়াবেন না, থেমে যান</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-600 dark:text-orange-400 font-bold text-xl">DROP</span>
                  </div>
                  <p className="font-semibold text-gray-800 dark:text-white">শুয়ে পড়ুন</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">মাটিতে শুয়ে হাত-মুখ ঢাকুন</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 dark:text-green-400 font-bold text-xl">ROLL</span>
                  </div>
                  <p className="font-semibold text-gray-800 dark:text-white">গড়াগড়ি দিন</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">আগুন নিভানো পর্যন্ত গড়াগড়ি দিন</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* যন্ত্রপাতি সেকশন */}
        {activeTab === 'equipment' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">ফায়ার নির্বাপন যন্ত্রপাতি</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {equipmentList.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">{item.name}</h4>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.use}</p>
                </div>
              ))}
            </div>

            {/* ফায়ার এক্সটিংগুইশার টাইপ */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">ফায়ার এক্সটিংগুইশার প্রকারভেদ</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-800 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-3 text-left text-gray-800 dark:text-white">রং কোড</th>
                      <th className="p-3 text-left text-gray-800 dark:text-white">ধরন</th>
                      <th className="p-3 text-left text-gray-800 dark:text-white">ব্যবহার</th>
                      <th className="p-3 text-left text-gray-800 dark:text-white">সতর্কতা</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3"><span className="px-3 py-1 bg-red-500 text-white rounded">লাল</span></td>
                      <td className="p-3">পানি ভিত্তিক</td>
                      <td className="p-3">কাঠ, কাগজ, কাপড়</td>
                      <td className="p-3 text-red-600 dark:text-red-400">ইলেকট্রিক ফায়ারে ব্যবহার নিষেধ</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-3"><span className="px-3 py-1 bg-blue-500 text-white rounded">নীল</span></td>
                      <td className="p-3">শুকনো পাউডার</td>
                      <td className="p-3">তেল, গ্যাস, ইলেকট্রিক</td>
                      <td className="p-3">সাধারণ ব্যবহারযোগ্য</td>
                    </tr>
                    <tr>
                      <td className="p-3"><span className="px-3 py-1 bg-black text-white rounded">কালো</span></td>
                      <td className="p-3">কার্বন ডাইঅক্সাইড</td>
                      <td className="p-3">ইলেকট্রিক ফায়ার</td>
                      <td className="p-3">বদ্ধ স্থানে সতর্কতা</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* প্রক্রিয়া সেকশন */}
        {activeTab === 'procedures' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">জরুরি ফায়ার সার্ভিস প্রক্রিয়া</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {emergencyProcedures.map((procedure, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{procedure.title}</h3>
                  <ol className="space-y-3">
                    {procedure.steps.map((step, stepIdx) => (
                      <li key={stepIdx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-sm font-bold">
                          {stepIdx + 1}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            {/* গুরুত্বপূর্ণ নির্দেশনা */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
              <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" /> অতিগুরুত্বপূর্ণ নির্দেশনা
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800 dark:text-white">আগে করুন:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>শ্বাসরোধ এড়াতে নিচু হয়ে চলুন</li>
                    <li>দরজা খোলার আগে গরম অনুভব করুন</li>
                    <li>এসকেপ রুট মনে রাখুন</li>
                    <li>ফায়ার অ্যালার্ম চাপ দিন</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800 dark:text-white">কখনো করবেন না:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>লিফট ব্যবহার করবেন না</li>
                    <li>ধোঁয়ায় ঢাকা সিঁড়ি দিয়ে উঠবেন না</li>
                    <li>বসার জন্য ফেরত আসবেন না</li>
                    <li>মিথ্যা ফায়ার কল দেবেন না</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* রেসপন্স টাইম কার্ড */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">ফায়ার সার্ভিস রেসপন্স টাইম</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">৩-৫ মিনিট</div>
              <p className="text-gray-700 dark:text-gray-300">শহর এলাকা</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">৫-৮ মিনিট</div>
              <p className="text-gray-700 dark:text-gray-300">গ্রামীণ এলাকা</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">৮-১২ মিনিট</div>
              <p className="text-gray-700 dark:text-gray-300">দূরবর্তী এলাকা</p>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">১৫+ মিনিট</div>
              <p className="text-gray-700 dark:text-gray-300">বন/পাহাড়ি এলাকা</p>
            </div>
          </div>
        </div>

        {/* ফায়ার সার্ভিসের জন্য আবেদন */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">ফায়ার সার্ভিসের জন্য আবেদন</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">সেবা পাওয়ার যোগ্যতা:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                <li>কোনো ধরনের ফায়ার নিরাপত্তা পরিদর্শন</li>
                <li>বাড়ি/অফিসের ফায়ার ড্রিল আয়োজন</li>
                <li>ফায়ার নিরাপত্তা প্রশিক্ষণ কোর্স</li>
                <li>ফায়ার সার্ভিস ভলান্টিয়ার হওয়া</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">যোগাযোগ করুন:</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                ফায়ার নিরাপত্তা পরিদর্শন বা প্রশিক্ষণের জন্য সরাসরি কমলগঞ্জ ফায়ার স্টেশন অথবা ফোনে যোগাযোগ করুন।
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                অনলাইনে আবেদন করুন
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}