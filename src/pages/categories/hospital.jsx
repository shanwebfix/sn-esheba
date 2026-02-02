import React, { useState } from 'react'
import { Phone, MapPin, Clock, Star, Stethoscope, AlertCircle, Ambulance, Heart } from 'lucide-react'

export default function Hospital() {
  const [searchTerm, setSearchTerm] = useState('')

  const hospitals = [
    {
      id: 1,
      name: 'কমলগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স',
      banglaName: 'কমলগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স',
      type: 'সরকারি হাসপাতাল',
      address: 'কমলগঞ্জ বাজার, মৌলভীবাজার',
      phone: ['08626-56001', '01712-345678'],
      services: ['জরুরি বিভাগ', 'অ্যাম্বুলেন্স', 'ডেলিভারি', 'এক্স-রে', 'প্যাথলজি', 'ফার্মেসি'],
      emergency: '২৪/৭',
      doctors: 8,
      beds: 50,
      rating: 4.2,
      special: true,
      mapLocation: '24.3833°N, 91.8667°E'
    },
    {
      id: 2,
      name: 'কমলগঞ্জ ইসলামিয়া হাসপাতাল',
      banglaName: 'কমলগঞ্জ ইসলামিয়া হাসপাতাল',
      type: 'প্রাইভেট হাসপাতাল',
      address: 'ব্রাহ্মণবাজার রোড, কমলগঞ্জ',
      phone: ['01712-345678', '01912-987654'],
      services: ['সার্জারি', 'আইসিইউ', 'প্যাথলজি', 'আল্ট্রাসাউন্ড', 'ইসিজি', 'ইকোকার্ডিওগ্রাম'],
      emergency: 'হ্যাঁ',
      doctors: 12,
      beds: 35,
      rating: 4.5,
      special: false,
      mapLocation: '24.3850°N, 91.8700°E'
    },
    {
      id: 3,
      name: 'লাউয়াছড়া কমিউনিটি ক্লিনিক',
      banglaName: 'লাউয়াছড়া কমিউনিটি ক্লিনিক',
      type: 'কমিউনিটি ক্লিনিক',
      address: 'লাউয়াছড়া বাজার, কমলগঞ্জ',
      phone: ['01711-223344'],
      services: ['জেনারেল ফিজিশিয়ান', 'ফার্মেসি', 'ইনজেকশন', 'প্রাথমিক চিকিৎসা', 'টিকা'],
      emergency: 'হ্যাঁ',
      doctors: 3,
      beds: 10,
      rating: 4.0,
      special: false,
      mapLocation: '24.3800°N, 91.8800°E'
    },
    {
      id: 4,
      name: 'মডার্ন ডায়াগনস্টিক সেন্টার',
      banglaName: 'মডার্ন ডায়াগনস্টিক সেন্টার',
      type: 'ডায়াগনস্টিক সেন্টার',
      address: 'কমলগঞ্জ মেইন রোড',
      phone: ['01713-556677', '01813-445566'],
      services: ['সিটিস্ক্যান', 'এমআরআই', 'ইসিজি', 'ব্লাড টেস্ট', 'ইকো', 'এন্ডোস্কপি'],
      emergency: 'না',
      doctors: 5,
      beds: 0,
      rating: 4.3,
      special: false,
      mapLocation: '24.3870°N, 91.8680°E'
    },
    {
      id: 5,
      name: 'তিলকপুর হেলথ কেয়ার',
      banglaName: 'তিলকপুর হেলথ কেয়ার',
      type: 'প্রাইভেট ক্লিনিক',
      address: 'তিলকপুর বাজার, কমলগঞ্জ',
      phone: ['01714-778899'],
      services: ['ডাক্তারের চেম্বার', 'ফিজিওথেরাপি', 'ডেন্টাল', 'আই কেয়ার'],
      emergency: 'সন্ধ্যা ৮টা পর্যন্ত',
      doctors: 4,
      beds: 8,
      rating: 3.9,
      special: false,
      mapLocation: '24.3900°N, 91.8750°E'
    },
    {
      id: 6,
      name: 'আদমপুর ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র',
      banglaName: 'আদমপুর ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র',
      type: 'সরকারি স্বাস্থ্য কেন্দ্র',
      address: 'আদমপুর, কমলগঞ্জ',
      phone: ['08626-56432'],
      services: ['প্রসূতি সেবা', 'শিশু স্বাস্থ্য', 'টিকা', 'পরিবার পরিকল্পনা', 'স্বাস্থ্য শিক্ষা'],
      emergency: 'সকাল ৯টা - বিকাল ৪টা',
      doctors: 2,
      beds: 6,
      rating: 4.1,
      special: false,
      mapLocation: '24.3950°N, 91.8650°E'
    },
    {
      id: 7,
      name: 'জরুরি অ্যাম্বুলেন্স সার্ভিস',
      banglaName: 'জরুরি অ্যাম্বুলেন্স সার্ভিস',
      type: 'অ্যাম্বুলেন্স সার্ভিস',
      address: 'কমলগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স',
      phone: ['01999-112233', '01700-998877'],
      services: ['জরুরি অ্যাম্বুলেন্স', 'পেশেন্ট ট্রান্সপোর্ট', 'এয়ার অ্যাম্বুলেন্স সমন্বয়'],
      emergency: '২৪/৭',
      doctors: 0,
      beds: 0,
      rating: 4.7,
      special: true,
      mapLocation: '24.3833°N, 91.8667°E'
    },
    {
      id: 8,
      name: 'শান্তি নিকেতন ক্লিনিক',
      banglaName: 'শান্তি নিকেতন ক্লিনিক',
      type: 'প্রাইভেট ক্লিনিক',
      address: 'পাঠানটুলা, কমলগঞ্জ',
      phone: ['01715-667788'],
      services: ['জেনারেল ফিজিশিয়ান', 'হোমিওপ্যাথি', 'আয়ুর্বেদ', 'ফার্মেসি'],
      emergency: 'রাত ১০টা পর্যন্ত',
      doctors: 3,
      beds: 5,
      rating: 3.8,
      special: false,
      mapLocation: '24.3880°N, 91.8720°E'
    }
  ]

  const emergencyContacts = [
    { name: 'জরুরি অ্যাম্বুলেন্স', number: '999', description: 'জাতীয় জরুরি হেল্পলাইন' },
    { name: 'কমলগঞ্জ উপজেলা স্বাস্থ্য', number: '08626-56001', description: '২৪/৭ জরুরি সেবা' },
    { name: 'ফায়ার সার্ভিস ও সিভিল ডিফেন্স', number: '16163', description: 'জরুরি উদ্ধার' },
    { name: 'পুলিশ হেল্পলাইন', number: '100', description: 'জরুরি পুলিশ সেবা' }
  ]

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.banglaName.includes(searchTerm) ||
    hospital.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* হেডার */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full mb-4">
            <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            কমলগঞ্জ থানার হাসপাতাল ও ক্লিনিক
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            জরুরি স্বাস্থ্য সেবা, চিকিৎসা কেন্দ্র এবং অ্যাম্বুলেন্স সার্ভিসের সম্পূর্ণ তালিকা
          </p>
        </div>

        {/* জরুরি যোগাযোগ */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">জরুরি যোগাযোগ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border-l-4 border-red-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                    <Phone className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">{contact.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{contact.description}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <a 
                    href={`tel:${contact.number}`}
                    className="inline-block w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                  >
                    {contact.number}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* সার্চ বার */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="হাসপাতালের নাম, ঠিকানা বা সেবা খুঁজুন..."
              className="w-full p-4 pl-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Stethoscope className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* হাসপাতাল লিস্ট */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            হাসপাতাল ও ক্লিনিক তালিকা ({filteredHospitals.length})
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredHospitals.map((hospital) => (
              <div key={hospital.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition duration-300">
                
                {/* হাসপাতাল হেডার */}
                <div className={`p-6 ${hospital.special ? 'bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20' : 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        {hospital.special && (
                          <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm font-semibold rounded-full">
                            জরুরি সেবা
                          </span>
                        )}
                        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          hospital.type.includes('সরকারি') 
                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                            : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                        }`}>
                          {hospital.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {hospital.banglaName}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">{hospital.name}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 fill-current mr-1" />
                      <span className="text-lg font-bold text-gray-800 dark:text-white">
                        {hospital.rating}/5
                      </span>
                    </div>
                  </div>
                </div>

                {/* হাসপাতাল ডিটেইলস */}
                <div className="p-6">
                  {/* ঠিকানা ও ফোন */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">ঠিকানা</p>
                        <p className="text-gray-600 dark:text-gray-400">{hospital.address}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{hospital.mapLocation}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">যোগাযোগ</p>
                        <div className="space-y-1">
                          {hospital.phone.map((phone, idx) => (
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

                  {/* জরুরি সেবা ও তথ্য */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">জরুরি সেবা</p>
                        <p className="font-bold text-gray-800 dark:text-white">{hospital.emergency}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Stethoscope className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">ডাক্তার সংখ্যা</p>
                        <p className="font-bold text-gray-800 dark:text-white">{hospital.doctors} জন</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">বেড সংখ্যা</p>
                        <p className="font-bold text-gray-800 dark:text-white">{hospital.beds} টি</p>
                      </div>
                    </div>
                  </div>

                  {/* সেবাসমূহ */}
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">প্রদানকৃত সেবাসমূহ:</p>
                    <div className="flex flex-wrap gap-2">
                      {hospital.services.map((service, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm rounded-full border border-gray-300 dark:border-gray-600"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* অ্যাকশন বাটন */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      কল করুন
                    </button>
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      লোকেশন দেখুন
                    </button>
                    {hospital.type.includes('অ্যাম্বুলেন্স') && (
                      <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                        <Ambulance className="w-4 h-4" />
                        জরুরি অ্যাম্বুলেন্স
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* গুরুত্বপূর্ণ তথ্য */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            গুরুত্বপূর্ণ তথ্য ও নির্দেশনা
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• জরুরি অ্যাম্বুলেন্সের জন্য সরাসরি 999 নম্বরে কল করুন</li>
            <li>• কমলগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্সে ২৪/৭ জরুরি বিভাগ রয়েছে</li>
            <li>• রাতের বেলা জরুরি সেবার জন্য উপজেলা স্বাস্থ্য কমপ্লেক্সে যান</li>
            <li>• হাসপাতালে যাওয়ার আগে প্রয়োজনীয় কাগজপত্র সাথে নিন</li>
            <li>• স্থানীয় কমিউনিটি ক্লিনিকগুলোতে বিনামূল্যে প্রাথমিক চিকিৎসা পাওয়া যায়</li>
          </ul>
        </div>

      </div>
    </div>
  )
}