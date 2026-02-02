import React, { useState } from 'react'
import { Phone, MapPin, Shield, Users, AlertTriangle, Clock, Mail, Award, Car, Camera, Bell } from 'lucide-react'

export default function Police() {
  const [emergencyType, setEmergencyType] = useState('সকল')

  const policeStations = [
    {
      id: 1,
      name: 'কমলগঞ্জ থানা',
      banglaName: 'কমলগঞ্জ মডেল থানা',
      type: 'থানা',
      officer: 'মোহাম্মদ আলী, ওসি',
      address: 'কমলগঞ্জ বাজার, মৌলভীবাজার',
      phone: ['08626-56011', '08626-56012'],
      emergency: ['01713-991100', '01713-991101'],
      email: 'kamlagonj.thana@police.gov.bd',
      services: ['এফআইআর গ্রহণ', 'জরুরি সেবা', 'শিক্ষা সহায়তা', 'মহিলা ও শিশু সহায়তা'],
      timing: '২৪/৭',
      rating: 4.5,
      special: true,
      coordinates: '24.3833°N, 91.8667°E'
    },
    {
      id: 2,
      name: 'কমলগঞ্জ ট্রাফিক পুলিশ',
      banglaName: 'কমলগঞ্জ ট্রাফিক পুলিশ',
      type: 'ট্রাফিক',
      officer: 'রফিকুল ইসলাম, এসআই',
      address: 'কমলগঞ্জ বাস স্ট্যান্ড সংলগ্ন',
      phone: ['08626-56015'],
      emergency: ['01713-991102'],
      email: 'kamlagonj.traffic@police.gov.bd',
      services: ['ট্রাফিক কন্ট্রোল', 'ড্রাইভিং লাইসেন্স', 'যানবাহন চেক', 'দুর্ঘটনা তদন্ত'],
      timing: 'সকাল ৬টা - রাত ১০টা',
      rating: 4.2,
      special: false,
      coordinates: '24.3850°N, 91.8700°E'
    },
    {
      id: 3,
      name: 'কমলগঞ্জ মহিলা থানা',
      banglaName: 'কমলগঞ্জ মহিলা থানা',
      type: 'মহিলা থানা',
      officer: 'সেলিনা আক্তার, ওসি',
      address: 'কমলগঞ্জ উপজেলা কমপ্লেক্স',
      phone: ['08626-56013'],
      emergency: ['01713-991103', '109'],
      email: 'kamlagonj.women@police.gov.bd',
      services: ['মহিলা নির্যাতন মামলা', 'পরামর্শ সেবা', 'সামাজিক সুরক্ষা', 'আইনি সহায়তা'],
      timing: 'সকাল ৯টা - সন্ধ্যা ৬টা',
      rating: 4.7,
      special: true,
      coordinates: '24.3840°N, 91.8680°E'
    },
    {
      id: 4,
      name: 'লাউয়াছড়া ফরেষ্ট চেকপোস্ট',
      banglaName: 'লাউয়াছড়া ফরেষ্ট চেকপোস্ট',
      type: 'ফরেষ্ট',
      officer: 'আব্দুল করিম, এএসআই',
      address: 'লাউয়াছড়া সংরক্ষিত বন',
      phone: ['01713-991104'],
      emergency: ['01713-991104'],
      email: 'lawachara.forest@police.gov.bd',
      services: ['বন সংরক্ষণ', 'বন্যপ্রাণী রক্ষা', 'ট্যুরিস্ট সুরক্ষা', 'জরুরি উদ্ধার'],
      timing: '২৪/৭',
      rating: 4.3,
      special: false,
      coordinates: '24.3100°N, 91.7800°E'
    }
  ]

  const emergencyContacts = [
    { 
      name: 'জাতীয় জরুরি হেল্পলাইন', 
      number: '999', 
      description: 'সকল ধরনের জরুরি সেবা',
      icon: 'Shield',
      color: 'bg-red-100 dark:bg-red-900',
      textColor: 'text-red-600 dark:text-red-400'
    },
    { 
      name: 'পুলিশ হেল্পলাইন', 
      number: '100', 
      description: 'সরাসরি পুলিশ কন্ট্রোল রুম',
      icon: 'Phone',
      color: 'bg-blue-100 dark:bg-blue-900',
      textColor: 'text-blue-600 dark:text-blue-400'
    },
    { 
      name: 'মহিলা ও শিশু নির্যাতন', 
      number: '109', 
      description: 'মহিলা ও শিশু সহায়তা',
      icon: 'Users',
      color: 'bg-purple-100 dark:bg-purple-900',
      textColor: 'text-purple-600 dark:text-purple-400'
    },
    { 
      name: 'ট্রাফিক পুলিশ', 
      number: '01713-991102', 
      description: 'দুর্ঘটনা ও ট্রাফিক সমস্যা',
      icon: 'Car',
      color: 'bg-green-100 dark:bg-green-900',
      textColor: 'text-green-600 dark:text-green-400'
    },
    { 
      name: 'সাইবার ক্রাইম', 
      number: '01713-991105', 
      description: 'সাইবার অপরাধ রিপোর্ট',
      icon: 'Camera',
      color: 'bg-indigo-100 dark:bg-indigo-900',
      textColor: 'text-indigo-600 dark:text-indigo-400'
    },
    { 
      name: 'অ্যাসিস্ট্যান্ট কমিশনার', 
      number: '08626-56010', 
      description: 'উপজেলা পুলিশ প্রধান',
      icon: 'Award',
      color: 'bg-amber-100 dark:bg-amber-900',
      textColor: 'text-amber-600 dark:text-amber-400'
    }
  ]

  const emergencyTypes = [
    { id: 'সকল', label: 'সকল সেবা' },
    { id: 'আপাত', label: 'আপাত জরুরি' },
    { id: 'মহিলা', label: 'মহিলা ও শিশু' },
    { id: 'ট্রাফিক', label: 'ট্রাফিক দুর্ঘটনা' },
    { id: 'সাইবার', label: 'সাইবার অপরাধ' },
    { id: 'বন', label: 'বন/প্রকৃতি' }
  ]

  const emergencyProcedures = [
    {
      title: 'জরুরি কল কিভাবে করবেন',
      steps: [
        '999 বা 100 নম্বরে কল করুন',
        'আপনার অবস্থান এবং সমস্যা সংক্ষেপে বলুন',
        'জরুরি সেবার ধরন উল্লেখ করুন',
        'আপনার নাম ও ফোন নম্বর দিন',
        'পুলিশের নির্দেশনা অনুসরণ করুন'
      ]
    },
    {
      title: 'এফআইআর দাখিল করবেন যেভাবে',
      steps: [
        'নিকটস্থ থানায় যান',
        'লিখিত বা মৌখিক অভিযোগ করুন',
        'প্রমাণাদি সাথে নিয়ে যান',
        'এফআইআর কপি সংগ্রহ করুন',
        'কেস নম্বর নোট করুন'
      ]
    },
    {
      title: 'অনলাইনে অভিযোগ দাখিল',
      steps: [
        'www.police.gov.bd ভিজিট করুন',
        'অনলাইন অভিযোগ ফর্ম পূরণ করুন',
        'প্রাসঙ্গিক দলিল আপলোড করুন',
        'কনফার্মেশন ইমেইল চেক করুন',
        'রেফারেন্স নম্বর সংরক্ষণ করুন'
      ]
    }
  ]

  const safetyTips = [
    'রাতের বেলা একা চলাফেরা এড়িয়ে চলুন',
    'জরুরি নম্বরগুলো মোবাইলে সেভ করে রাখুন',
    'অপরিচিত ব্যক্তির গাড়িতে উঠবেন না',
    'সাইবার অপরাধের শিকার হলে সাথে সাথে রিপোর্ট করুন',
    'মহিলা ও শিশুরা 109 নম্বরে সাহায্য পাবেন'
  ]

  const filteredStations = policeStations.filter(station => 
    emergencyType === 'সকল' || 
    station.type.includes(emergencyType) ||
    station.services.some(service => service.includes(emergencyType))
  )

  const IconComponent = ({ name, className }) => {
    const icons = {
      Shield: <Shield className={className} />,
      Phone: <Phone className={className} />,
      Users: <Users className={className} />,
      Car: <Car className={className} />,
      Camera: <Camera className={className} />,
      Award: <Award className={className} />
    }
    return icons[name] || <Phone className={className} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* হেডার */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            কমলগঞ্জ থানা পুলিশ সেবা
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            জরুরি হেল্পলাইন, থানা সেবা এবং পুলিশ সহায়তার সম্পূর্ণ তথ্য
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
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 hover:shadow-xl transition duration-300">
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
                        className="text-lg font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {contact.number}
                      </a>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-300">
                        কল করুন
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* জরুরি টাইপ ফিল্টার */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">সেবা ধরন নির্বাচন করুন:</h3>
          <div className="flex flex-wrap gap-3">
            {emergencyTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setEmergencyType(type.id)}
                className={`px-5 py-2.5 rounded-lg font-medium transition duration-300 ${
                  emergencyType === type.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* থানা ও সেবা কেন্দ্র */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              থানা ও পুলিশ সেবা কেন্দ্র ({filteredStations.length})
            </h2>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-semibold rounded-full">
              কমলগঞ্জ থানা
            </span>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {filteredStations.map((station) => (
              <div key={station.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                
                {/* থানা হেডার */}
                <div className={`p-6 ${station.special ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20' : 'bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900/20 dark:to-blue-900/20'}`}>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {station.special && (
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold rounded-full flex items-center gap-1">
                            <Bell className="w-3 h-3" /> প্রধান থানা
                          </span>
                        )}
                        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          station.type.includes('মহিলা') 
                            ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                            : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        }`}>
                          {station.type}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {station.banglaName}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">{station.name}</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                          <span className="font-semibold">প্রধান অফিসার:</span> {station.officer}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-2">
                          <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <p className="font-bold text-gray-800 dark:text-white">{station.timing}</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mb-2">
                          <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <p className="font-bold text-gray-800 dark:text-white">{station.rating}/5</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* থানা ডিটেইলস */}
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
                      
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">ইমেইল</p>
                          <a 
                            href={`mailto:${station.email}`}
                            className="text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium hover:underline"
                          >
                            {station.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* জরুরি নম্বর */}
                    <div className="lg:col-span-2">
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                        <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5" /> জরুরি নম্বর
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {station.emergency.map((emergency, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-lg">
                              <span className="font-semibold text-gray-800 dark:text-white">
                                জরুরি {idx + 1}:
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
                  </div>

                  {/* সেবাসমূহ */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">প্রদানকৃত সেবাসমূহ:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {station.services.map((service, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center">
                          <p className="font-medium text-gray-800 dark:text-gray-200">{service}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* অ্যাকশন বাটন */}
                  <div className="flex flex-wrap gap-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      জরুরি কল
                    </button>
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      লোকেশন দেখুন
                    </button>
                    <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                      <Users className="w-4 h-4" />
                      অনলাইন রিপোর্ট
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* জরুরি প্রক্রিয়া */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">জরুরি সেবা প্রক্রিয়া</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyProcedures.map((procedure, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{procedure.title}</h4>
                <ol className="space-y-3">
                  {procedure.steps.map((step, stepIdx) => (
                    <li key={stepIdx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold">
                        {stepIdx + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        {/* নিরাপত্তা টিপস */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
            নিরাপত্তা নির্দেশিকা
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {safetyTips.map((tip, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 text-center">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* গুরুত্বপূর্ণ নোট */}
        <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">গুরুত্বপূর্ণ তথ্য:</h4>
              <p className="text-yellow-700 dark:text-yellow-400">
                • মিথ্যা অভিযোগ দায়ের করা দণ্ডনীয় অপরাধ<br/>
                • জরুরি নম্বরগুলো শুধু জরুরি কাজেই ব্যবহার করুন<br/>
                • থানা সেবা পাওয়ার জন্য কোনো রকম উৎকোচ প্রদান করবেন না<br/>
                • অনলাইন অভিযোগের জন্য সরকারি ওয়েবসাইট ব্যবহার করুন
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}