import React, { useState } from 'react'
import { Pill, Phone, MapPin, Search, Clock, ShieldCheck, Navigation, ArrowRight } from 'lucide-react'

export default function ShamshernagarPharmacy() {
  const [searchTerm, setSearchTerm] = useState('');

  const pharmacies = [
    {
      id: 1,
      name: 'শাহজালাল ফার্মেসি',
      location: 'মেইন রোড, শমসেরনগর বাজার',
      phone: '01700-111222',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=800',
      is24Hours: true,
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shamshernagar+General+Hospital6'
    },
    {
      id: 2,
      name: 'বিসমিল্লাহ মেডিসিন কর্নার',
      location: 'চৌমুহনী চত্বর, শমসেরনগর',
      phone: '01800-333444',
      image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800',
      is24Hours: false,
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shamshernagar+General+Hospital7'
    },
    {
      id: 3,
      name: 'জননী ফার্মেসি',
      location: 'হাসপাতাল রোড, শমসেরনগর',
      phone: '01900-555666',
      image: 'https://images.unsplash.com/photo-1628771065518-0d82f159f8a0?auto=format&fit=crop&q=80&w=800',
      is24Hours: true,
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shamshernagar+General+Hospital8'
    }
  ];

  const filteredPharmacies = pharmacies.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.location.includes(searchTerm)
  );

  return (
    <div className="min-h-screen mb-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/40 rounded-2xl">
                <Pill className="text-emerald-600 dark:text-emerald-400 w-8 h-8" />
              </div>
              <h1 className="text-3xl font-black text-slate-900 dark:text-white">ফার্মেসি ও ঔষধ</h1>
            </div>
            <p className="text-slate-500 dark:text-slate-400">শমসেরনগর এলাকার নিবন্ধিত ও নির্ভরযোগ্য ওষুধের দোকান</p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-950/20 px-4 py-2 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
            <p className="text-emerald-700 dark:text-emerald-400 text-xs font-bold flex items-center gap-2 uppercase tracking-tighter">
              <ShieldCheck size={14} /> সরকারি লাইসেন্সধারী দোকান
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-10">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text"
            placeholder="ওষুধের দোকানের নাম লিখে খুঁজুন..."
            className="w-full pl-16 pr-6 py-5 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none dark:text-white shadow-sm focus:ring-2 focus:ring-emerald-500 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Pharmacy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPharmacies.map((shop) => (
            <div 
              key={shop.id}
              className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image with 24h Badge */}
              <div className="relative h-48 overflow-hidden">
                <img src={shop.image} alt={shop.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {shop.is24Hours && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse uppercase">
                    24 Hours Open
                  </div>
                )}

                <a 
                  href={shop.mapUrl} target="_blank" rel="noreferrer"
                  className="absolute bottom-4 right-4 p-3 bg-white/90 dark:bg-slate-800/90 rounded-2xl text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all shadow-lg"
                >
                  <Navigation size={20} fill="currentColor" />
                </a>
              </div>

              {/* Info */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-emerald-600 transition-colors">
                  {shop.name}
                </h3>
                <div className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
                  <MapPin size={16} className="text-red-500 mt-0.5 shrink-0" />
                  {shop.location}
                </div>

                {/* Call Button Area */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-black uppercase mb-1 tracking-widest">Phone</span>
                    <span className="text-lg font-mono font-bold text-slate-800 dark:text-slate-200">{shop.phone}</span>
                  </div>
                  <button 
                    onClick={() => window.location.href=`tel:${shop.phone}`}
                    className="p-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-3xl shadow-lg shadow-emerald-100 dark:shadow-none transition-all active:scale-90"
                  >
                    <Phone size={22} fill="currentColor" />
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