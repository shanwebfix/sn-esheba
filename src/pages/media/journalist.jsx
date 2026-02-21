import React, { useState } from 'react';
import { 
  X, Search, Facebook, MessageCircle, 
  Mail, Award, Newspaper, 
  UserCheck, MapPin, Share2, Info, ExternalLink
} from 'lucide-react';

const JournalistDirectory = () => {
  const [selectedJournalist, setSelectedJournalist] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const journalists = [
    {
      id: 1,
      name: "আহমেদ শরিফ",
      designation: "সিনিয়র রিপোর্টার",
      organization: "দৈনিক প্রথম আলো",
      email: "sharif@email.com",
      fbProfile: "https://facebook.com/sharif.journalist",
      whatsapp: "https://wa.me/8801711000000",
      location: "শমশেরনগর, মৌলভীবাজার",
      specialty: "ক্রাইম ও ইনভেস্টিগেশন",
      experience: "১২ বছর+",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      name: "নাসরিন আক্তার",
      designation: "জেলা প্রতিনিধি",
      organization: "সময় টিভি",
      email: "nasrin@email.com",
      fbProfile: "https://facebook.com/nasrin.press",
      whatsapp: "https://wa.me/8801822000000",
      location: "কমলগঞ্জ, মৌলভীবাজার",
      specialty: "মানবাধিকার ও নারী অধিকার",
      experience: "৮ বছর+",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const filteredJournalists = journalists.filter(j => 
    j.name.includes(searchQuery) || j.organization.includes(searchQuery)
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-slate-900 dark:bg-slate-800 rounded-2xl text-white mb-4 shadow-xl">
            <Newspaper size={32} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">সাংবাদিক ডিরেক্টরি</h1>
          <p className="text-slate-500 font-medium">সত্যান্বেষী কলম সৈনিকদের তালিকা</p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input 
            type="text"
            placeholder="সাংবাদিক বা পত্রিকার নাম..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-slate-900/10 font-bangla font-bold transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJournalists.map((j) => (
            <div key={j.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src={j.image} className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-100 dark:border-slate-800" alt="" />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1 rounded-lg shadow-lg">
                    <UserCheck size={14} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-black dark:text-white leading-tight">{j.name}</h3>
                  <p className="text-blue-600 font-bold text-xs mb-1">{j.designation}</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter">{j.organization}</p>
                </div>
              </div>

              <div className="mt-6">
                <button 
                  onClick={() => setSelectedJournalist(j)}
                  className="w-full py-3 bg-slate-900 dark:bg-slate-800 text-white rounded-xl font-bold text-sm transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  বিস্তারিত প্রোফাইল
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Profile Modal --- */}
      {selectedJournalist && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/70">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[3rem] overflow-hidden relative animate-in zoom-in-95 shadow-2xl flex flex-col max-h-[90vh]">
            
            <div className="p-8 pt-10 overflow-y-auto flex-grow custom-scrollbar">
              <button onClick={() => setSelectedJournalist(null)} className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full"><X size={20} /></button>
              
              <div className="flex flex-col items-center text-center mb-8">
                <img src={selectedJournalist.image} className="w-28 h-28 rounded-[2rem] object-cover border-4 border-slate-50 dark:border-slate-800 shadow-2xl mb-4" alt="" />
                <h2 className="text-2xl font-black dark:text-white leading-tight">{selectedJournalist.name}</h2>
                <p className="text-blue-600 font-bold">{selectedJournalist.designation}</p>
                <p className="text-slate-400 text-sm font-bold uppercase">{selectedJournalist.organization}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl text-center border border-slate-100 dark:border-slate-800">
                  <Award className="mx-auto mb-1 text-amber-500" size={20} />
                  <p className="text-[10px] text-slate-400 font-black uppercase">অভিজ্ঞতা</p>
                  <p className="font-black dark:text-white">{selectedJournalist.experience}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl text-center border border-slate-100 dark:border-slate-800">
                  <MapPin className="mx-auto mb-1 text-red-500" size={20} />
                  <p className="text-[10px] text-slate-400 font-black uppercase">কর্মক্ষেত্র</p>
                  <p className="font-black dark:text-white text-[11px]">{selectedJournalist.location}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest px-2 text-center">যোগাযোগের মাধ্যম</p>
                <a href={selectedJournalist.fbProfile} target="_blank" className="flex items-center justify-between p-4 bg-blue-600/10 text-blue-600 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all">
                  <div className="flex items-center gap-3"><Facebook size={20}/> ফেসবুক প্রোফাইল</div>
                  <ExternalLink size={16}/>
                </a>
                <a href={selectedJournalist.whatsapp} target="_blank" className="flex items-center justify-between p-4 bg-green-600/10 text-green-600 rounded-2xl font-black hover:bg-green-600 hover:text-white transition-all">
                  <div className="flex items-center gap-3"><MessageCircle size={20}/> হোয়াটসঅ্যাপ মেসেজ</div>
                  <ExternalLink size={16}/>
                </a>
                <a href={`mailto:${selectedJournalist.email}`} className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl font-black hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black hover:text-white transition-all">
                  <div className="flex items-center gap-3"><Mail size={20}/> ইমেইল পাঠান</div>
                  <ExternalLink size={16}/>
                </a>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800">
                <button onClick={() => setSelectedJournalist(null)} className="w-full py-3 text-slate-400 font-bold text-xs uppercase tracking-widest">ফিরে যান</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
      `}</style>
    </div>
  );
};

export default JournalistDirectory;