import React, { useState } from 'react';
import { 
  X, PhoneCall, MapPin, Info, Wrench, Hammer, 
  Search, Navigation2, Settings2, ShieldCheck 
} from 'lucide-react';

const MechanicalServiceFinal = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const serviceCenters = [
    {
      id: 1,
      name: "বিসমিল্লাহ অটো সার্ভিস",
      expert: "ওস্তাদ খলিল মিয়া",
      category: "গাড়ি ও মাইক্রোবাস মেকানিক",
      phone: "01717000000",
      location: "শমশেরনগর বাজার রোড (তেল পাম্পের পাশে)",
      mapLink: "https://maps.google.com", 
      experience: "২০ বছরের অভিজ্ঞতা",
      services: "ইঞ্জিন মেরামত ও সাসপেনশন কাজ",
      image: "https://images.unsplash.com/photo-1486006396193-471034e3e6f8?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      name: "শমশেরনগর বাইক ডক্টর",
      expert: "সুমন আহমেদ",
      category: "বাইক ও মোটরসাইকেল মেকানিক",
      phone: "01817000000",
      location: "চৌমুহনী পয়েন্ট, শমশেরনগর",
      mapLink: "https://maps.google.com",
      experience: "১০ বছরের অভিজ্ঞতা",
      services: "বাইক ফুল সার্ভিসিং ও টিউনিং",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const filteredCenters = serviceCenters.filter(c => 
    c.name.includes(searchQuery) || c.category.includes(searchQuery)
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 font-bangla tracking-tight">মেকানিক ও সার্ভিস সেন্টার</h1>
          <p className="text-slate-500 font-medium font-bangla">বিশ্বস্ত মেকানিক খুঁজুন এবং সরাসরি যোগাযোগ করুন</p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative group">
          <input 
            type="text"
            placeholder="গাড়ি বা বাইক মেকানিক খুঁজুন..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-cyan-500/10 font-bangla font-bold"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map((center) => (
            <div key={center.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <img src={center.image} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-cyan-50 dark:ring-cyan-900" alt="" />
                <div>
                  <h3 className="text-lg font-bold dark:text-white leading-tight">{center.name}</h3>
                  <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-1">{center.category}</p>
                </div>
              </div>

              <div className="space-y-2 mb-6 font-bangla text-sm text-slate-600 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-2"><Settings2 size={14} className="text-cyan-500" /> ওস্তাদ: {center.expert}</div>
                <div className="flex items-center gap-2"><MapPin size={14} className="text-red-500" /> {center.location}</div>
              </div>

              <div className="flex gap-2">
                <a href={`tel:${center.phone}`} className="flex-1 py-3 bg-cyan-600 text-white rounded-xl font-bold text-center text-sm flex items-center justify-center gap-2 active:scale-95 transition-all">
                  <PhoneCall size={16} /> কল দিন
                </a>
                <button 
                  onClick={() => setSelectedCenter(center)}
                  className="px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold"
                >
                  <Info size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- মডাল পপআপ (পাশাপাশি বাটন সহ) --- */}
      {selectedCenter && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/60">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[3rem] p-8 relative animate-in zoom-in-95 shadow-2xl overflow-hidden border border-white/10">
            <button onClick={() => setSelectedCenter(null)} className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:bg-red-500 hover:text-white transition-all shadow-sm">
              <X size={18} />
            </button>

            <div className="text-center mb-6 font-bangla">
              <div className="w-20 h-20 bg-cyan-50 dark:bg-cyan-900/20 rounded-[2rem] flex items-center justify-center mx-auto mb-4 border border-cyan-100 dark:border-cyan-800">
                <Hammer size={40} className="text-cyan-600" />
              </div>
              <h2 className="text-2xl font-black dark:text-white leading-tight">{selectedCenter.name}</h2>
              <p className="text-cyan-600 font-bold text-sm uppercase mt-1 tracking-tight">{selectedCenter.category}</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/40 rounded-3xl p-6 mb-8 border border-slate-100 dark:border-slate-800 space-y-4 font-bangla">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-green-500 mt-1" size={18} />
                <div className="text-sm">
                  <p className="text-[10px] text-slate-400 font-black uppercase">অভিজ্ঞতা</p>
                  <p className="font-bold dark:text-slate-200">{selectedCenter.experience}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-slate-200 dark:border-slate-800 pt-3">
                <Wrench className="text-cyan-500 mt-1" size={18} />
                <div className="text-sm">
                  <p className="text-[10px] text-slate-400 font-black uppercase">স্পেশাল সার্ভিস</p>
                  <p className="font-bold dark:text-slate-200">{selectedCenter.services}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-slate-200 dark:border-slate-800 pt-3">
                <MapPin className="text-red-500 mt-1" size={18} />
                <div className="text-sm">
                  <p className="text-[10px] text-slate-400 font-black uppercase">ঠিকানা</p>
                  <p className="font-bold dark:text-slate-200 leading-snug">{selectedCenter.location}</p>
                </div>
              </div>
            </div>

            {/* পাশাপাশি বাটন (Left & Right) */}
            <div className="flex gap-3 font-bangla">
               <a 
                 href={`tel:${selectedCenter.phone}`} 
                 className="flex-1 flex items-center justify-center gap-2 py-4 bg-cyan-600 text-white rounded-2xl font-black text-sm shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
               >
                  <PhoneCall size={18} /> কল করুন
               </a>
               <a 
                 href={selectedCenter.mapLink} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="flex-1 flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
               >
                  <Navigation2 size={18} /> লোকেশন
               </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MechanicalServiceFinal;