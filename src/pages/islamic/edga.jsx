import React, { useState } from 'react';
import { 
  MapPin, X, Navigation, Users, 
  Calendar, Info, Search, Heart, 
  ShieldCheck, ArrowRight 
} from 'lucide-react';

const EidgahDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEidgah, setSelectedEidgah] = useState(null);

  const eidgahData = [
    { 
      id: 1, 
      name: 'শমশেরনগর কেন্দ্রীয় ঈদগাহ মাঠ', 
      location: 'শমশেরনগর বাজার সংলগ্ন', 
      capacity: '৫০০০+ জন',
      imam: 'মাওলানা আবুল কালাম',
      facilities: ['বিশাল মাঠ', 'উন্নত ড্রেনেজ সিস্টেম', 'সিসিটিভি নিরাপত্তা', 'অজু করার জায়গা'],
      details: 'শমশেরনগরের প্রধান ঈদগাহ। প্রতি ঈদে এখানে সবচেয়ে বড় জামাত অনুষ্ঠিত হয়। স্থানীয় প্রশাসনের সহযোগিতায় এখানে আধুনিক শেড তৈরির কাজ চলছে।',
      mapUrl: 'https://maps.google.com',
      img: 'https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg' 
    },
    { 
      id: 2, 
      name: 'বিমানবন্দর শাহীন ঈদগাহ', 
      location: 'বিএএফ শাহীন এলাকা', 
      capacity: '৩০০০ জন',
      imam: 'হাফেজ মাওলানা জুবায়ের আহমদ',
      facilities: ['নিরাপদ পার্কিং', 'পরিচ্ছন্ন পরিবেশ', 'ভিআইপি গেস্ট রুম'],
      details: 'বিমানবন্দর রোডের পাশে অবস্থিত এই ঈদগাহটি অনেক খোলামেলা এবং মনোরম পরিবেশে অবস্থিত।',
      mapUrl: 'https://maps.google.com',
      img: 'https://images.pexels.com/photos/2827015/pexels-photo-2827015.jpeg' 
    }
  ];

  const filteredEidgahs = eidgahData.filter(e => 
    e.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen  pb-20">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 py-20 px-4 text-center">
        <div className="mb-4 inline-flex p-4 bg-white/10 rounded-full backdrop-blur-sm">
          <Calendar className="text-emerald-100" size={40} />
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">ঈদগাহ ডিরেক্টরি</h1>
        <p className="text-emerald-100 mt-2 font-medium italic">ঈদের জামাতের তথ্য ও ঈদগাহের সঠিক অবস্থান</p>
        
        {/* Search */}
        <div className="mt-10 relative max-w-xl mx-auto">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="ঈদগাহের নাম লিখে খুঁজুন..."
            className="w-full pl-16 pr-6 py-5 rounded-full shadow-2xl border-none outline-none dark:bg-slate-900 dark:text-white font-bold"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEidgahs.map(eidgah => (
          <div key={eidgah.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 group hover:shadow-2xl transition-all duration-500">
            <div className="h-56 relative">
              <img src={eidgah.img} alt={eidgah.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                  <MapPin size={14} /> {eidgah.location}
                </p>
                <h3 className="text-xl font-black">{eidgah.name}</h3>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-emerald-600" />
                  <span className="text-sm font-bold dark:text-slate-300">{eidgah.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-emerald-600" />
                  <span className="text-sm font-bold dark:text-slate-300">নিরাপদ মাঠ</span>
                </div>
              </div>

              <button 
                onClick={() => setSelectedEidgah(eidgah)}
                className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-700 dark:text-slate-200 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 transition-all"
              >
                বিস্তারিত তথ্য <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedEidgah && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[3rem] shadow-2xl relative overflow-hidden">
            <button onClick={() => setSelectedEidgah(null)} className="absolute top-6 right-6 z-10 bg-black/20 text-white p-2 rounded-full backdrop-blur-md">
              <X size={20} />
            </button>

            <div className="max-h-[85vh] overflow-y-auto">
              <img src={selectedEidgah.img} className="w-full h-64 object-cover" alt="" />
              
              <div className="p-10">
                <h2 className="text-3xl font-black dark:text-white mb-2">{selectedEidgah.name}</h2>
                <p className="text-emerald-600 font-bold mb-8 flex items-center gap-1.5 italic underline">
                   {selectedEidgah.location}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 p-5 rounded-3xl border border-emerald-100">
                    <p className="text-[10px] text-emerald-600 font-black uppercase mb-1">ইমাম সাহেব</p>
                    <p className="font-bold dark:text-white">{selectedEidgah.imam}</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-5 rounded-3xl border border-blue-100">
                    <p className="text-[10px] text-blue-600 font-black uppercase mb-1">ধারণক্ষমতা</p>
                    <p className="font-bold dark:text-white">{selectedEidgah.capacity}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Info size={16} /> মাঠের সুযোগ-সুবিধা
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEidgah.facilities.map((f, i) => (
                      <span key={i} className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-xs font-bold dark:text-slate-300">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic mb-10 border-l-4 border-emerald-500 pl-4">
                  "{selectedEidgah.details}"
                </p>

                <a 
                  href={selectedEidgah.mapUrl} target="_blank"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
                >
                  <Navigation size={20} /> গুগল ম্যাপে ঈদগাহটি দেখুন
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EidgahDirectory;