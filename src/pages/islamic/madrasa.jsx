import React, { useState } from 'react';
import { 
  MapPin, X, Navigation, Info, 
  Users, Clock, Home, BookOpen, 
  Droplets, Heart, Search
} from 'lucide-react';

const MosqueDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMosque, setSelectedMosque] = useState(null);

  const mosqueData = [
    { 
      id: 1, 
      name: 'বড়চেগ সুন্নিয়া দাখিল মাদরাসা', 
      location: 'ভানুগাছ রোড, শমশেরনগর', 
      type: 'দাখিল মাদরাসা',
      stats: {
        capacity: '১২০০ জন',
        established: '১৯৫০',
        khatib: 'মাওলানা...',
        muazzin: 'হাফেজ...'
      },
      facilities: ['সুবিশাল অজুখানা', 'নারীদের আলাদা নামাজের স্থান', 'ইসলামিক লাইব্রেরি'],
      history: 'এটি অত্র এলাকার প্রাচীনতম এবং প্রধান মসজিদ। ব্রিটিশ আমল থেকে এখানে জুমা ও বড় জামাত অনুষ্ঠিত হয়ে আসছে।',
      mapUrl: 'https://www.google.com/maps',
      img: 'https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    { 
      id: 2, 
      name: 'ভিতর বাজার মাদরাসা', 
      location: 'ভানুগাছ রোড, শমশেরনগর', 
      type: 'জামে মাদরাসা',
      stats: {
        capacity: '৮০০ জন',
        established: '১৯৮৫',
        khatib: 'মাওলানা...',
        muazzin: 'কারী...'
      },
      facilities: ['সুবিশাল অজুখানা', 'নারীদের আলাদা নামাজের স্থান', 'ইসলামিক লাইব্রেরি'],
      history: 'এটি অত্র এলাকার প্রাচীনতম এবং প্রধান মসজিদ। ব্রিটিশ আমল থেকে এখানে জুমা ও বড় জামাত অনুষ্ঠিত হয়ে আসছে।',
      mapUrl: 'https://www.google.com/maps',
      img: 'https://images.pexels.com/photos/2827015/pexels-photo-2827015.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredMosques = mosqueData.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen px-0 mb-10">
      
      {/* Header */}
      <div className="bg-emerald-800 p-10 px-2 text-center rounded-lg m-3">
        <div className="mb-2 flex justify-center">
          <Home className="text-emerald-100" size={40} />
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">মাদরাসা ডিরেক্টরি</h1>
        <p className="text-emerald-100 mt-2 font-medium italic">শমশেরনগরের মসজিদ সমূহের সঠিক তথ্য ও অবস্থান</p>
        
        {/* Search Bar */}
        <div className="mt-10 relative max-w-xl mx-auto">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="মসজিদের নাম লিখে খুঁজুন..."
            className="w-full pl-14 pr-6 py-4 rounded-full shadow-2xl border-none outline-none dark:bg-slate-900 dark:text-white"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Mosque Cards */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMosques.map(mosque => (
            <div key={mosque.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm border border-emerald-100 dark:border-slate-800 group hover:shadow-2xl transition-all duration-500">
              <div className="h-56 relative overflow-hidden">
                <img src={mosque.img} alt={mosque.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest">
                  {mosque.type}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black dark:text-white mb-2">{mosque.name}</h3>
                <p className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <MapPin size={16} className="text-emerald-600" /> {mosque.location}
                </p>
                <button 
                  onClick={() => setSelectedMosque(mosque)}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
                >
                  বিস্তারিত তথ্য ও লোকেশন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAIL POPUP */}
      {selectedMosque && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[3rem] shadow-2xl relative animate-in zoom-in duration-300 overflow-hidden">
            
            <button onClick={() => setSelectedMosque(null)} className="absolute top-6 right-6 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md">
              <X size={20} />
            </button>

            <div className="max-h-[85vh] overflow-y-auto">
              <img src={selectedMosque.img} alt="header" className="w-full h-64 object-cover" />
              
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-black dark:text-white mb-2">{selectedMosque.name}</h2>
                <p className="text-emerald-600 font-bold flex items-center gap-1.5 text-sm mb-8">
                  <MapPin size={16} /> {selectedMosque.location}
                </p>

                {/* Key Personnel */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 p-5 rounded-3xl border border-emerald-100 dark:border-emerald-800">
                    <p className="text-[10px] text-emerald-600 font-black uppercase mb-1">খতিব</p>
                    <p className="font-bold dark:text-white">{selectedMosque.stats.khatib}</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-5 rounded-3xl border border-blue-100 dark:border-blue-800">
                    <p className="text-[10px] text-blue-600 font-black uppercase mb-1">মুয়াজ্জিন</p>
                    <p className="font-bold dark:text-white">{selectedMosque.stats.muazzin}</p>
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-8">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Droplets size={16} /> বিশেষ সুবিধা সমূহ
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMosque.facilities.map((f, i) => (
                      <span key={i} className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl text-xs font-bold dark:text-slate-300">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl"><Users size={20} className="text-emerald-600"/></div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">ধারণক্ষমতা</p>
                      <p className="font-bold dark:text-white">{selectedMosque.stats.capacity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl"><Clock size={20} className="text-emerald-600"/></div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">স্থাপিত</p>
                      <p className="font-bold dark:text-white">{selectedMosque.stats.established} ইং</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={selectedMosque.mapUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-emerald-200 dark:shadow-none transition-all"
                >
                  <Navigation size={20} /> সরাসরি লোকেশন দেখুন
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MosqueDirectory;