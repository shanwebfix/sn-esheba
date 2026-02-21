import React, { useState } from 'react'
import { Stethoscope, Phone, Clock, MapPin, Search, Award } from 'lucide-react'

export default function ShamshernagarDoctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('সকল বিশেষজ্ঞ');

  const doctors = [
    {
      id: 1,
      name: 'ডাঃ মোঃ আব্দুল হাই',
      degree: 'MBBS, BCS (Health), FCPS (Medicine)',
      specialty: 'মেডিসিন বিশেষজ্ঞ',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
      chamber: 'লাইফলাইন ডায়াগনস্টিক, শমসেরনগর',
      time: 'বিকাল ৪টা - রাত ৮টা',
      phone: '01712-000000',
      availableDays: 'শনি - বৃহস্পতি'
    },
    {
      id: 2,
      name: 'ডাঃ ফাতেমা জোহরা',
      degree: 'MBBS, DGO, MCPS (Obs & Gynae)',
      specialty: 'স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
      chamber: 'শমসেরনগর জেনারেল হাসপাতাল',
      time: 'সকাল ১০টা - দুপুর ২টা',
      phone: '01811-000000',
      availableDays: 'রবি - বুধ'
    },
    {
      id: 3,
      name: 'ডাঃ সুমিত দেবনাথ',
      degree: 'MBBS, MD (Cardiology)',
      specialty: 'হৃদরোগ বিশেষজ্ঞ',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
      chamber: 'পপুলার ডিজিটাল ল্যাব, শমসেরনগর',
      time: 'রাত ৭টা - রাত ১০টা',
      phone: '01911-000000',
      availableDays: 'সোম - শুক্র'
    }
  ];

  const specialties = ['সকল বিশেষজ্ঞ', 'মেডিসিন বিশেষজ্ঞ', 'স্ত্রী রোগ ও প্রসূতি বিশেষজ্ঞ', 'হৃদরোগ বিশেষজ্ঞ', 'শিশু বিশেষজ্ঞ'];

  const filteredDoctors = doctors.filter(doc => 
    (selectedSpecialty === 'সকল বিশেষজ্ঞ' || doc.specialty === selectedSpecialty) &&
    (doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.specialty.includes(searchTerm))
  );

  return (
    <div className="min-h-screen mb-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200 dark:shadow-none">
              <Stethoscope className="text-white w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">বিশেষজ্ঞ ডাক্তারবৃন্দ</h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 ml-2">শমসেরনগর এলাকায় নিয়মিত চেম্বার করেন এমন অভিজ্ঞ চিকিৎসকদের তালিকা</p>
        </div>

        {/* Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="ডাক্তারের নাম বা বিভাগ দিয়ে খুঁজুন..."
              className="w-full pl-14 pr-6 py-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <select 
              className="w-full px-6 py-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none dark:text-white cursor-pointer font-bold appearance-none shadow-sm focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              {specialties.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredDoctors.map((doc) => (
            <div 
              key={doc.id}
              className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 md:p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row gap-6"
            >
              {/* Profile Image */}
              <div className="relative shrink-0 mx-auto md:mx-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden border-4 border-blue-50 dark:border-slate-800 shadow-inner group-hover:scale-105 transition-transform duration-500">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Doctor Details */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                    {doc.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-bold">
                    <Award size={14} /> {doc.specialty}
                  </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {doc.degree}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <MapPin size={16} className="text-red-500" />
                    <span>{doc.chamber}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <Clock size={16} className="text-blue-500" />
                    <span>{doc.time} ({doc.availableDays})</span>
                  </div>
                </div>

                {/* Single Full-width Action Button */}
                <button 
                  onClick={() => window.location.href=`tel:${doc.phone}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-100 dark:shadow-none"
                >
                  <Phone size={18} fill="currentColor" />
                  সিরিয়াল নিতে কল করুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}