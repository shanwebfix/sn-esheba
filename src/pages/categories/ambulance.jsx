import React, { useState } from 'react'
import { 
  Phone, MapPin, Clock, Star, Filter, Search, 
  Navigation, Ambulance as AmbulanceIcon, Shield, Users,
  Heart, AlertCircle, CheckCircle, Wifi, Award
} from 'lucide-react'

export default function AmbulancePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')

  const ambulanceServices = [
    {
      id: 1,
      name: 'কমলগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স',
      location: 'কমলগঞ্জ উপজেলা সদর, মৌলভীবাজার',
      phone: '0861-56001',
      mobile: '01712-345678, 01713-456789',
      availability: '২৪/৭ জরুরি সার্ভিস',
      type: 'সরকারি অ্যাম্বুলেন্স',
      rating: 4.3,
      distance: 'থানা সদর',
      price: 'ফ্রি (জরুরি ক্ষেত্রে)',
      features: ['অক্সিজেন', 'ফার্স্ট এইড', 'ট্রেইন্ড স্টাফ'],
      featured: true,
      emergency: true
    },
    {
      id: 2,
      name: 'কমলগঞ্জ রেড ক্রিসেন্ট',
      location: 'বাজার রোড, কমলগঞ্জ',
      phone: '0861-56023',
      mobile: '01714-567890, 01715-678901',
      availability: '২৪/৭',
      type: 'বেসিক লাইফ সাপোর্ট',
      rating: 4.5,
      distance: '০.৫ কিমি',
      price: '৩০০-৬০০ টাকা',
      features: ['বিএলএস', 'অক্সিজেন', 'স্ট্রেচার'],
      featured: true,
      emergency: true
    },
    {
      id: 3,
      name: 'লাউয়াছড়া মেডিকেল সেন্টার',
      location: 'লাউয়াছড়া বাজার, কমলগঞ্জ',
      phone: '0861-56045',
      mobile: '01716-789012, 01717-890123',
      availability: 'সকাল ৮টা - রাত ১০টা',
      type: 'জেনারেল অ্যাম্বুলেন্স',
      rating: 4.0,
      distance: '৮ কিমি',
      price: '৫০০-৯০০ টাকা',
      features: ['ফার্স্ট এইড', 'সাধারণ বেড'],
      emergency: false
    },
    {
      id: 4,
      name: 'শ্রীমঙ্গল-কমলগঞ্জ এম্বুলেন্স সার্ভিস',
      location: 'শ্রীমঙ্গল রোড, কমলগঞ্জ',
      phone: '0861-56067',
      mobile: '01718-901234, 01719-012345',
      availability: '২৪/৭',
      type: 'এসি অ্যাম্বুলেন্স',
      rating: 4.2,
      distance: '১২ কিমি',
      price: '১০০০-২০০০ টাকা',
      features: ['এসি', 'অক্সিজেন', 'নাম্বার'],
      featured: true,
      emergency: true
    },
    {
      id: 5,
      name: 'আদমপুর কমিউনিটি ক্লিনিক',
      location: 'আদমপুর, কমলগঞ্জ',
      phone: '0861-56089',
      mobile: '01711-234567, 01712-345678',
      availability: 'সকাল ৯টা - সন্ধ্যা ৬টা',
      type: 'সাধারণ অ্যাম্বুলেন্স',
      rating: 3.8,
      distance: '১৫ কিমি',
      price: '৪০০-৮০০ টাকা',
      features: ['বেসিক সার্ভিস'],
      emergency: false
    },
    {
      id: 6,
      name: 'কমলগঞ্জ বেসরকারি হাসপাতাল',
      location: 'নতুন বাজার, কমলগঞ্জ',
      phone: '0861-56101',
      mobile: '01713-456789, 01714-567890',
      availability: '২৪/৭',
      type: 'মাল্টি-স্পেশালিটি',
      rating: 4.4,
      distance: '২ কিমি',
      price: '৮০০-১৫০০ টাকা',
      features: ['আইসিইউ', 'অক্সিজেন', 'ডাক্তার'],
      featured: true,
      emergency: true
    },
    {
      id: 7,
      name: 'বাংলাদেশ ফায়ার সার্ভিস অ্যান্ড সিভিল ডিফেন্স',
      location: 'কমলগঞ্জ ফায়ার স্টেশন',
      phone: '৯৯৯',
      mobile: '০১৭১৪-০০০৯৯৯',
      availability: '২৪/৭ জরুরি',
      type: 'জরুরি রেসকিউ',
      rating: 4.8,
      distance: 'থানা সদর',
      price: 'ফ্রি (জরুরি)',
      features: ['রেসকিউ', 'ফায়ার সার্ভিস', 'জরুরি'],
      featured: true,
      emergency: true
    },
    {
      id: 8,
      name: 'কমলগঞ্জ সদর প্রাইভেট অ্যাম্বুলেন্স',
      location: 'সদর রোড, কমলগঞ্জ',
      phone: '0861-56123',
      mobile: '01715-678901, 01716-789012',
      availability: '২৪ ঘন্টা',
      type: 'প্রাইভেট সার্ভিস',
      rating: 4.1,
      distance: '১ কিমি',
      price: '৭০০-১২০০ টাকা',
      features: ['দ্রুত সার্ভিস', 'অক্সিজেন'],
      emergency: true
    }
  ]

  const areas = [
    { id: 'all', name: 'সব এলাকা' },
    { id: 'sadar', name: 'কমলগঞ্জ সদর' },
    { id: 'lawachara', name: 'লাউয়াছড়া' },
    { id: 'adampur', name: 'আদমপুর' },
    { id: 'emergency', name: 'জরুরি সার্ভিস' },
    { id: 'government', name: 'সরকারি' },
    { id: 'private', name: 'বেসরকারি' }
  ]

  const filteredServices = ambulanceServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || 
                       (selectedType === 'emergency' && service.emergency) ||
                       (selectedType === 'government' && service.type.includes('সরকারি')) ||
                       (selectedType === 'private' && service.type.includes('প্রাইভেট')) ||
                       service.location.toLowerCase().includes(selectedType)
    
    return matchesSearch && matchesType
  })

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`
  }

  const handleSMS = (mobile) => {
    const firstNumber = mobile.split(',')[0].trim()
    window.location.href = `sms:${firstNumber}`
  }

  const handleGetDirections = (location) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
    window.open(googleMapsUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                কমলগঞ্জ থানা অ্যাম্বুলেন্স সার্ভিস
              </h1>
              <p className="text-xl text-white/90">
                মৌলভীবাজার জেলা • ২৪/৭ জরুরি সার্ভিস
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center">
                  <AlertCircle className="mr-2" size={20} />
                  <span>জরুরি নম্বর: <strong>৯৯৯</strong></span>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-2" size={20} />
                  <span>৮টি সার্ভিস প্রোভাইডার</span>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <AmbulanceIcon size={120} className="text-white/30" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Emergency Banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">জরুরি সাহায্য চাই?</h2>
              <p className="text-white/90">অবিলম্বে কল করুন বা নিকটস্থ হাসপাতালে যোগাযোগ করুন</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <button 
                onClick={() => handleCall('999')}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg flex items-center justify-center"
              >
                <Phone className="mr-2" size={24} />
                জরুরি কল: ৯৯৯
              </button>
              <button 
                onClick={() => handleCall('01714000999')}
                className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-lg font-bold text-lg"
              >
                ফায়ার সার্ভিস
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-2">
                <Search className="mr-2 text-gray-500" size={20} />
                <label className="font-semibold text-gray-700 dark:text-gray-300">
                  অ্যাম্বুলেন্স সার্চ করুন
                </label>
              </div>
              <input
                type="text"
                placeholder="সার্ভিসের নাম বা লোকেশন লিখুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-red-500"
              />
            </div>
            <div>
              <div className="flex items-center mb-2">
                <Filter className="mr-2 text-gray-500" size={20} />
                <label className="font-semibold text-gray-700 dark:text-gray-300">
                  এলাকা/ধরণ অনুসারে ফিল্টার
                </label>
              </div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-red-500"
              >
                {areas.map(area => (
                  <option key={area.id} value={area.id}>
                    {area.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow text-center">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">৮</div>
            <div className="text-gray-600 dark:text-gray-400">সার্ভিস প্রোভাইডার</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">৫</div>
            <div className="text-gray-600 dark:text-gray-400">২৪/৭ সার্ভিস</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">৩</div>
            <div className="text-gray-600 dark:text-gray-400">সরকারি প্রতিষ্ঠান</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">১০০%</div>
            <div className="text-gray-600 dark:text-gray-400">জরুরি সাড়া</div>
          </div>
        </div>

        {/* Ambulance Services List */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
              অ্যাম্বুলেন্স সার্ভিস ({filteredServices.length})
            </h2>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <Clock className="inline mr-1" size={16} />
              সর্বশেষ আপডেট: আজ
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
              <AlertCircle className="mx-auto mb-4 text-gray-400" size={64} />
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                কোন সার্ভিস পাওয়া যায়নি
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                অনুগ্রহ করে ভিন্ন কীওয়ার্ড দিয়ে খুঁজুন
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredServices.map(service => (
                <div 
                  key={service.id} 
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 ${service.featured ? 'border-red-300 dark:border-red-700' : 'border-gray-200 dark:border-gray-700'} ${service.emergency ? 'ring-2 ring-red-500/20' : ''}`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            {service.name}
                          </h3>
                          {service.featured && (
                            <span className="ml-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs font-semibold px-3 py-1 rounded-full">
                              <Star size={12} className="inline mr-1" />
                              ফিচার্ড
                            </span>
                          )}
                          {service.emergency && (
                            <span className="ml-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs font-semibold px-3 py-1 rounded-full">
                              জরুরি
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                          <MapPin size={16} className="mr-2" />
                          {service.location}
                        </div>
                        
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                          <Clock size={16} className="mr-2" />
                          {service.availability}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center justify-end mb-2">
                          <Star size={16} className="text-yellow-500 mr-1" />
                          <span className="font-bold">{service.rating}</span>
                          <span className="text-gray-500 text-sm ml-1">/৫</span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          দূরত্ব: {service.distance}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features?.map((feature, idx) => (
                          <span 
                            key={idx} 
                            className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          ফোন নম্বর
                        </div>
                        <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
                          {service.phone}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          মোবাইল: {service.mobile}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          খরচ
                        </div>
                        <div className="text-lg font-bold text-green-600 dark:text-green-400">
                          {service.price}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {service.type}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <button 
                        onClick={() => handleCall(service.phone)}
                        className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                      >
                        <Phone size={18} className="mr-2" />
                        কল করুন
                      </button>
                      
                      <button 
                        onClick={() => handleSMS(service.mobile)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                      >
                        <Users size={18} className="mr-2" />
                        এসএমএস
                      </button>
                      
                      <button 
                        onClick={() => handleGetDirections(service.location)}
                        className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                      >
                        <Navigation size={18} className="mr-2" />
                        লোকেশন
                      </button>
                      
                      <button 
                        onClick={() => alert(`সার্ভিস সংরক্ষণ করা হয়েছে: ${service.name}`)}
                        className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                      >
                        <Heart size={18} className="mr-2" />
                        সেভ করুন
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Safety Tips */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <Shield className="mr-3 text-blue-600" size={28} />
            জরুরি সময়ে করণীয়
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <CheckCircle className="text-green-600 mr-2" size={20} />
                <h4 className="font-bold">শান্ত থাকুন</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                জরুরি অবস্থায় শান্ত থাকুন এবং পরিস্থিতি বুঝে কাজ করুন
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <CheckCircle className="text-green-600 mr-2" size={20} />
                <h4 className="font-bold">লোকেশন দিন</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                অ্যাম্বুলেন্সকে সঠিক লোকেশন ও ল্যান্ডমার্ক জানান
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <CheckCircle className="text-green-600 mr-2" size={20} />
                <h4 className="font-bold">রোগীর তথ্য</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                রোগীর বয়স, লক্ষণ ও অন্যান্য প্রয়োজনীয় তথ্য জানান
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <CheckCircle className="text-green-600 mr-2" size={20} />
                <h4 className="font-bold">রাস্তা খালি করুন</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                অ্যাম্বুলেন্সের জন্য রাস্তা খালি রাখুন এবং পথ দেখান
              </p>
            </div>
          </div>
        </div>

        {/* Important Numbers */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            কমলগঞ্জ থানার গুরুত্বপূর্ণ নম্বর
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'থানা পুলিশ', number: '০১৭১৩-৩৮৪২৫০', color: 'bg-blue-100 dark:bg-blue-900/30' },
              { name: 'ফায়ার সার্ভিস', number: '৯৯৯', color: 'bg-red-100 dark:bg-red-900/30' },
              { name: 'উপজেলা স্বাস্থ্য', number: '০৮৬১-৫৬০০১', color: 'bg-green-100 dark:bg-green-900/30' },
              { name: 'ইউনিয়ন চেয়ারম্যান', number: '০১৭১২-০০০১১১', color: 'bg-purple-100 dark:bg-purple-900/30' }
            ].map((item, idx) => (
              <div key={idx} className={`${item.color} p-4 rounded-xl`}>
                <div className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {item.name}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {item.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">কমলগঞ্জ থানা অ্যাম্বুলেন্স সার্ভিস</h4>
            <p className="text-white/80 mb-4">
              জরুরি স্বাস্থ্য সেবায় আমাদের অঙ্গীকার • ২৪/৭ সার্ভিস
            </p>
            <div className="text-white/60 text-sm">
              <p>© ২০২৪ কমলগঞ্জ থানা ডিজিটাল হেলথ সার্ভিস</p>
              <p className="mt-2">মৌলভীবাজার জেলা, সিলেট বিভাগ</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}