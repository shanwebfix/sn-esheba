import React from 'react'
import { Phone, AlertTriangle, Info, MapPin } from 'lucide-react'

export default function AmbulancePage() {
  const ambulanceServices = [
    {
      id: 1,
      name: 'কমলগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স',
      location: 'উপজেলা সদর',
      phone: '01712345678',
    },
    {
      id: 2,
      name: 'কমলগঞ্জ রেড ক্রিসেন্ট',
      location: 'বাজার রোড',
      phone: '01714567890',
    },
    {
      id: 3,
      name: 'ফায়ার সার্ভিস কমলগঞ্জ',
      location: 'কমলগঞ্জ স্টেশন',
      phone: '999',
    },
    {
      id: 4,
      name: 'কমলগঞ্জ বেসরকারি হাসপাতাল',
      location: 'নতুন বাজার',
      phone: '01713456789',
    },
    {
      id: 5,
      name: 'আদমপুর অ্যাম্বুলেন্স সার্ভিস',
      location: 'আদমপুর বাজার',
      phone: '01711223344',
    },
    {
      id: 6,
      name: 'শমশেরনগর অ্যাম্বুলেন্স',
      location: 'শমশেরনগর চৌমুহনী',
      phone: '01711556677',
    }
  ];

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen">
      {/* Header with Warning */}
      <header className="bg-red-600 dark:bg-red-700 text-white py-6 px-4 rounded-lg p-2xl m-3">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-2">
            <AlertTriangle size={28} className="text-yellow-300" />
          </div>
          <h1 className="text-2xl font-bold mb-1">কমলগঞ্জ অ্যাম্বুলেন্স সেবা</h1>
          <p className="text-sm font-medium opacity-90">
            জরুরি অবস্থা ছাড়া কল করা থেকে বিরত থাকুন।
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="space-y-3">
          {ambulanceServices.map((service) => (
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
                  <div className="text-xl font-mono font-bold text-red-600 dark:text-red-500">
                    {service.phone}
                  </div>
                </div>

                {/* Right Side: Small Call Button */}
                <button
                  onClick={() => handleCall(service.phone)}
                  className="ml-4 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-transform active:scale-90 shadow-md"
                >
                  <Phone size={16} fill="currentColor" />
                  কল করুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Text */}
      <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 py-8 mt-6">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-3 text-gray-400 dark:text-gray-600">
              <Info size={20} />
            </div>
            <h4 className="text-md font-bold text-gray-800 dark:text-gray-200 mb-2 font-bangla">নির্দেশিকা</h4>
            <div className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
              <p>• কল করার সময় রোগীর লোকেশন স্পষ্ট করে বলুন।</p>
              <p>• ভাড়ার বিষয়ে আগেই সংশ্লিষ্ট চালকের সাথে কথা বলুন।</p>
              <p>• অ্যাম্বুলেন্স আসার সময় রাস্তায় সহযোগিতা করুন।</p>
            </div>
            <p className="mt-6 text-gray-400 dark:text-gray-500 text-[10px] uppercase tracking-widest">
              © ২০২৪ কমলগঞ্জ থানা ডিজিটাল সেবা
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}