import React, { useState } from 'react'
import { Phone, MapPin, Activity, Navigation, Search, Filter, PhoneForwarded } from 'lucide-react'

export default function ShamshernagarClinicList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVillage, setSelectedVillage] = useState('সকল গ্রাম');

  const clinics = [
    {
      id: 1,
      name: 'শিংরাউলী কমিউনিটি ক্লিনিক',
      village: 'শিংরাউলী',
      phone: '01700-000000',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      locationUrl: 'https://www.google.com/maps/search/Shamshernagar' 
    },
    {
      id: 2,
      name: 'ভাদাইর দেউল স্বাস্থ্য কেন্দ্র',
      village: 'ভাদাইর দেউল',
      phone: '01800-000000',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800',
      locationUrl: 'https://www.google.com/maps'
    },
    {
      id: 3,
      name: 'কেচুলুটি গ্রামীণ ক্লিনিক',
      village: 'কেচুলুটি',
      phone: '01900-000000',
      image: 'https://images.unsplash.com/photo-1632833239867-a320f29919ad?auto=format&fit=crop&q=80&w=800',
      locationUrl: 'https://www.google.com/maps'
    }
    // আপনার বাকি ডাটাগুলো একইভাবে এখানে যোগ করুন...
  ];

  const villages = ['সকল গ্রাম', 'শিংরাউলী', 'ভাদাইর দেউল', 'কেচুলুটি', 'কৃশ্নপুর', 'সোনাপুর', 'হাজীপুর', 'বড়চেগ', 'মরাজানেরপার', 'সতিরগ্রাম'];

  const filteredClinics = clinics.filter(clinic => 
    (selectedVillage === 'সকল গ্রাম' || clinic.village === selectedVillage) &&
    (clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) || clinic.village.includes(searchTerm))
  );

  return (
    <div className="min-h-screen mb-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">শমসেরনগর গ্রামীণ ক্লিনিক</h1>
          <p className="text-slate-500 dark:text-slate-400">আপনার এলাকার নিকটস্থ স্বাস্থ্য সেবা কেন্দ্র খুঁজে নিন</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors w-5 h-5" />
            <input 
              type="text"
              placeholder="ক্লিনিক বা গ্রামের নাম..."
              className="w-full pl-14 pr-4 py-5 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none dark:text-white shadow-xl shadow-slate-200/50 dark:shadow-none focus:ring-2 focus:ring-emerald-500"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative w-full md:w-72">
            <Filter className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select 
              className="w-full pl-14 pr-10 py-5 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none dark:text-white cursor-pointer font-bold appearance-none shadow-xl shadow-slate-200/50 dark:shadow-none focus:ring-2 focus:ring-emerald-500"
              onChange={(e) => setSelectedVillage(e.target.value)}
            >
              {villages.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClinics.map((clinic) => (
            <div 
              key={clinic.id}
              className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image with Overlay */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={clinic.image} 
                  alt={clinic.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Location Link on Image */}
                <a 
                  href={clinic.locationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-emerald-600 dark:text-emerald-400 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all shadow-lg active:scale-90"
                >
                  <Navigation size={22} fill="currentColor" />
                </a>
              </div>

              {/* Content Details */}
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg text-emerald-600">
                    <Activity size={16} />
                  </div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">স্বাস্থ্য সেবা</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                  {clinic.name}
                </h3>
                
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-8 font-medium">
                  <MapPin size={18} className="text-red-500" />
                  <span>গ্রাম: {clinic.village}</span>
                </div>

                {/* Call & Helper Section */}
                <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-50 dark:border-slate-800">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">হেল্পলাইন</p>
                    <p className="text-xl font-mono font-bold text-slate-800 dark:text-slate-200">{clinic.phone}</p>
                  </div>
                  <button 
                    onClick={() => window.location.href=`tel:${clinic.phone}`}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white p-5 rounded-3xl transition-all active:scale-95 shadow-lg shadow-emerald-100 dark:shadow-none"
                  >
                    <PhoneForwarded size={22} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Result Message */}
        {filteredClinics.length === 0 && (
          <div className="text-center py-32 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800">
             <Activity className="w-16 h-16 text-slate-200 mx-auto mb-4" />
             <p className="text-slate-400 text-lg">দুঃখিত, এই গ্রামে কোনো ক্লিনিক পাওয়া যায়নি।</p>
          </div>
        )}
      </div>
    </div>
  )
}