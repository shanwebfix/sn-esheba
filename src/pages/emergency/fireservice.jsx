import React from 'react'
import { Phone, AlertTriangle, Info, MapPin, Flame, Ambulance } from 'lucide-react'

export default function FireServicePage() {
  const fireServices = [
    {
      id: 1,
      name: 'কমলগঞ্জ ফায়ার স্টেশন (মূল)',
      location: 'কমলগঞ্জ সদর',
      phone: '01714000999',
    },
    {
      id: 2,
      name: 'ডিউটি অফিসার (জরুরি)',
      location: 'কমলগঞ্জ স্টেশন',
      phone: '086156102',
    },
    {
      id: 3,
      name: 'মৌলভীবাজার কন্ট্রোল রুম',
      location: 'জেলা সদর',
      phone: '01730336655',
    },
    {
      id: 4,
      name: 'শ্রীমঙ্গল ফায়ার স্টেশন',
      location: 'শ্রীমঙ্গল রোড',
      phone: '01968881101',
    },
    {
      id: 5,
      name: 'জাতীয় জরুরি সেবা',
      location: 'বাংলাদেশ',
      phone: '999',
    }
  ];

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen">
      {/* Header with Warning */}
      <header className="bg-orange-600 dark:bg-orange-700 text-white py-6 px-4 shadow-md m-3 rounded-lg">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-2">
            <Flame size={32} className="text-yellow-300 animate-pulse" />
          </div>
          <h1 className="text-2xl font-bold mb-1">কমলগঞ্জ ফায়ার সার্ভিস</h1>
          <p className="text-sm font-medium opacity-90">
             অগ্নি দুর্ঘটনা বা বিপদে অহেতুক কল দেওয়া দণ্ডনীয় অপরাধ।
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="space-y-3">
          {fireServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm"
            >
              <div className="flex justify-between items-center">
                {/* Left Side: Info & Number */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-tight">
                    {service.name}
                  </h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-2">
                    <MapPin size={12} className="mr-1" />
                    {service.location}
                  </div>
                  <div className="text-xl font-mono font-bold text-orange-600 dark:text-orange-500">
                    {service.phone}
                  </div>
                </div>

                {/* Right Side: Small Red Call Button */}
                <button
                  onClick={() => handleCall(service.phone)}
                  className="ml-4 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-transform active:scale-95 shadow-md shrink-0"
                >
                  <Phone size={16} fill="currentColor" />
                  কল করুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Informative Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 py-8 mt-6">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-3 text-orange-500/50">
              <Info size={20} />
            </div>
            <h4 className="text-md font-bold text-gray-800 dark:text-gray-200 mb-2 font-bangla">জরুরি নির্দেশিকা</h4>
            <div className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <p>• আগুনের সঠিক স্থান এবং ভয়াবহতা সম্পর্কে তথ্য দিন।</p>
              <p>• ফায়ার সার্ভিসের গাড়ি যাওয়ার রাস্তাটি পরিষ্কার রাখুন।</p>
              <p>• পানি বা অগ্নিনির্বাপক যন্ত্র দিয়ে প্রাথমিকভাবে আগুন নিয়ন্ত্রণের চেষ্টা করুন।</p>
            </div>
            <p className="mt-8 text-gray-400 dark:text-gray-600 text-[10px] uppercase tracking-[0.2em]">
              © ২০২৪ কমলগঞ্জ থানা ডিজিটাল সেবা
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}