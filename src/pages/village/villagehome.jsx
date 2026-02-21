import React, { useState, useEffect } from 'react'
// ডেটা ইম্পোর্ট করা হয়েছে (নিশ্চিত করুন আপনার JSON ফাইলে নতুন দুটি ফিল্ড আছে)
import villageData from '/public/data/village.json' 

import { 
  MapPin, Search, X, Map as MapIcon, 
  School, BookOpen, Trophy, Landmark, 
  Home, Building2, Users, GraduationCap, 
  ArrowRight, Info, Compass, Navigation,
  Flame // শ্মশানের জন্য নতুন আইকন
} from 'lucide-react'

function VillageDirectory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedVillage, setSelectedVillage] = useState(null)

  useEffect(() => {
    if (selectedVillage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [selectedVillage])

  const filteredVillages = villageData.filter(v => {
    const searchLower = searchTerm.toLowerCase();
    const matchesName = v.name.toLowerCase().includes(searchLower);
    const matchesUpazila = v.upazila.toLowerCase().includes(searchLower);
    const matchesTags = v.tags.some(tag => tag.toLowerCase().includes(searchLower));

    return matchesName || matchesUpazila || matchesTags;
  })

  return (
    <div className="min-h-screen  transition-colors duration-300 pb-20 font-bangla">
      
      {/* Hero Search Section */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-900 border-b border-slate-200 dark:border-gray-800 pt-20 pb-16 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Compass size={16} className="animate-spin-slow" />
            <span>গ্রাম ভিত্তিক তথ্য ভাণ্ডার</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            আপনার গ্রামকে <span className="text-blue-600">খুঁজে নিন</span>
          </h2>
          
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-slate-100 dark:border-gray-700 p-1.5">
              <div className="pl-5 text-slate-400">
                <Search size={22} />
              </div>
              <input 
                type="text"
                placeholder="গ্রামের নাম বা ট্যাগ (যেমন: ৯ নং ওয়ার্ড) দিয়ে খুঁজুন..."
                className="w-full bg-transparent border-none py-4 px-4 text-lg text-slate-900 dark:text-white outline-none focus:ring-0 font-medium placeholder:text-slate-400"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto px-0 mt-16">
        {filteredVillages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVillages.map((village) => (
              <div 
                key={village.id} 
                className="group bg-white dark:bg-gray-900 rounded-[2.5rem] border border-slate-200/60 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-wrap gap-2">
                      {village.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-black bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-50 dark:bg-gray-800 flex items-center justify-center text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all duration-500">
                      <Navigation size={20} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {village.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-2 text-sm mb-8 italic">
                     উপজেলা: {village.upazila}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-transparent group-hover:border-blue-100 transition-all">
                      <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">জনসংখ্যা</p>
                      <p className="text-md font-black text-slate-800 dark:text-slate-200">{village.stats.population}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-transparent group-hover:border-blue-100 transition-all">
                      <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">শিক্ষা হার</p>
                      <p className="text-md font-black text-slate-800 dark:text-slate-200">{village.stats.literacy}</p>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-6 bg-slate-50/50 dark:bg-gray-800/30 border-t border-slate-100 dark:border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                     <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                        <MapPin size={18} />
                     </div>
                     <span className="text-xs font-bold">{village.dak}</span>
                  </div>

                  <button 
                    onClick={() => setSelectedVillage(village)}
                    className="flex items-center gap-2 bg-slate-900 dark:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all active:scale-95"
                  >
                    বিস্তারিত <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-gray-800">
            <Info className="mx-auto text-slate-300 mb-4" size={48} />
            <h3 className="text-xl font-bold text-slate-400">দুঃখিত, এই নামে কোনো গ্রাম পাওয়া যায়নি!</h3>
            <p className="text-slate-400 text-sm mt-2">অন্য কোনো নাম বা ট্যাগ দিয়ে চেষ্টা করুন।</p>
          </div>
        )}
      </div>

      {/* Modal Section (Selected Village Details) */}
      {selectedVillage && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-[3rem] shadow-2xl relative animate-in zoom-in duration-300 overflow-hidden border border-slate-200 dark:border-gray-800">
            <button 
              onClick={() => setSelectedVillage(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-gray-800 text-slate-500 hover:text-red-500 transition-all"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto custom-scrollbar">
              <div className="mb-8">
                <span className="bg-blue-600 text-white text-[10px] px-4 py-1 rounded-full font-black uppercase mb-4 inline-block">Village Database</span>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2">{selectedVillage.name}</h2>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  <MapPin size={16} /> <span>{selectedVillage.dak}, {selectedVillage.upazila}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'জনসংখ্যা', val: selectedVillage.stats.population, icon: <Users size={20} /> },
                  { label: 'শিক্ষার হার', val: selectedVillage.stats.literacy, icon: <GraduationCap size={20} /> },
                  { label: 'প্রাথমিক বিদ্যালয়', val: selectedVillage.stats.primarySchool, icon: <School size={20} /> },
                  { label: 'উচ্চ বিদ্যালয়', val: selectedVillage.stats.highSchool, icon: <Building2 size={20} /> },
                  { label: 'মাদ্রাসা', val: selectedVillage.stats.madrasa, icon: <BookOpen size={20} /> },
                  { label: 'খেলার মাঠ', val: selectedVillage.stats.playground, icon: <Trophy size={20} /> },
                  { label: 'মসজিদ', val: selectedVillage.stats.mosque, icon: <Home size={20} /> },
                  { label: 'কবরস্থান', val: selectedVillage.stats.graveyard, icon: <Landmark size={20} /> },
                  { label: 'ঈদগাহ', val: selectedVillage.stats.idgah, icon: <Compass size={20} /> },
                  // --- নতুন দুটি ফিল্ড ---
                  { label: 'মন্দির / গির্জা', val: selectedVillage.stats.mondir, icon: <Landmark size={20} /> },
                  { label: 'শ্মশান', val: selectedVillage.stats.sasan, icon: <Flame size={20} /> }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 dark:bg-gray-800/40 p-5 rounded-3xl border border-slate-100 dark:border-gray-800 group hover:border-blue-400 transition-all">
                    <div className="text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">{stat.label}</p>
                    <p className="text-sm font-black text-slate-900 dark:text-white">{stat.val}</p>
                  </div>
                ))}
              </div>

              <a 
                href={selectedVillage.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-[1.5rem] font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/30 active:scale-95"
              >
                <MapIcon size={20} /> গুগল ম্যাপে লোকেশন দেখুন
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
      `}</style>

    </div>
  )
}

export default VillageDirectory;