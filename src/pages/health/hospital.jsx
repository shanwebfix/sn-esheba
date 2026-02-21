import React from 'react'
import { Phone, MapPin, Clock, HeartPulse, Navigation, Bed, Calendar, Users, Info } from 'lucide-react'

export default function HospitalList() {
  const hospitals = [
    {
      id: 1,
      name: 'শমসেরনগর জেনারেল হাসপাতাল',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      type: 'বে-সরকারি হাসপাতাল',
      address: 'মরাজানের পার, মেীলভীবাজার রোড',
      phone: '01712-345678',
      open: '২৪ ঘণ্টা (জরুরি বিভাগ)',
      established: '২০১০',
      beds: '৫০+',
      specialists: '১০+ বিশেষজ্ঞ',
      services: ['জরুরি বিভাগ', 'ম্যাটারনিটি', 'টিকা কেন্দ্র'],
      mapUrl: 'https://maps.google.com'
    },
  ];

  const handleCall = (num) => {
    window.location.href = `tel:${num}`;
  };

  const openMap = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] p-4 md:p-8 font-bangla transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="relative mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <div className="p-2 bg-red-50 dark:bg-red-950/30 rounded-xl">
              <HeartPulse className="text-red-600 w-8 h-8 animate-pulse" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              হাসপাতাল তালিকা
            </h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 ml-1 md:ml-14">শমসেরনগর অঞ্চলের চিকিৎসা সেবার তথ্য</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hospitals.map((hospital) => (
            <div 
              key={hospital.id} 
              className="group bg-white dark:bg-slate-900/50 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-500"
            >
              {/* Image & Type */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={hospital.image} 
                  alt={hospital.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase">
                    {hospital.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-red-600 transition-colors">
                  {hospital.name}
                </h3>
                
                {/* Information Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800">
                    <Calendar size={16} className="text-blue-500" />
                    <span className="text-xs dark:text-slate-300">স্থাপিত: {hospital.established}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800">
                    <Bed size={16} className="text-emerald-500" />
                    <span className="text-xs dark:text-slate-300">বেড: {hospital.beds}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800">
                    <Users size={16} className="text-purple-500" />
                    <span className="text-xs dark:text-slate-300">{hospital.specialists}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800">
                    <Clock size={16} className="text-orange-500" />
                    <span className="text-xs dark:text-slate-300">{hospital.open}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 mb-6">
                  <MapPin size={16} className="text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">{hospital.address}</span>
                </div>

                {/* Action Buttons - Call Left, Location Right */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button 
                    onClick={() => handleCall(hospital.phone)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-red-200 dark:shadow-none"
                  >
                    <Phone size={18} fill="currentColor" />
                    কল দিন
                  </button>
                  
                  <button 
                    onClick={() => openMap(hospital.mapUrl)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-200 dark:shadow-none"
                  >
                    <Navigation size={18} />
                    লোকেশান
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}