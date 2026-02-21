import React, { useState } from 'react';
import { 
  X, PhoneCall, MapPin, Search, 
  Navigation2, Clock, CheckCircle2, 
  Watch, WatchIcon, ShieldCheck, Sparkles, Timer
} from 'lucide-react';

const WatchStoreService = () => {
  const [selectedShop, setSelectedShop] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const watchShops = [
    {
      id: 1,
      name: "টাইম জোন ঘড়ি গ্যালারি",
      owner: "মোঃ কামরুল হাসান",
      category: "শোরুম ও সার্ভিসিং",
      phone: "01722998877",
      location: "সেন্ট্রাল প্লাজা, শমশেরনগর",
      mapLink: "http://google.com/maps/search/grocery+store+20",
      timing: "সকাল ১০:৩০টা - রাত ৯:৩০টা",
      specialty: "ক্যাসিও, টাইটান, ফাসট্র্যাক এবং স্মার্ট ওয়াচের বিশাল কালেকশন পাওয়া যায়।",
      warranty: "অরিজিনাল পার্টস সহ ১ বছরের সার্ভিস ওয়ারেন্টি প্রদান করা হয়।",
      status: "অভিজ্ঞ কারিগর দ্বারা উন্নত মানের ঘড়ি মেরামত করা হয়।",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      name: "শমশেরনগর ওয়াচ হাউস",
      owner: "বিপ্লব কুমার",
      category: "ঘড়ি ও চশমা",
      phone: "01844556677",
      location: "পুরাতন বাজার রোড, শমশেরনগর",
      mapLink: "http://google.com/maps/search/grocery+store+20",
      timing: "সকাল ১০টা - রাত ১০টা",
      specialty: "দেওয়াল ঘড়ি, হাত ঘড়ি এবং বাচ্চাদের ডিজিটাল ঘড়ির নির্ভরযোগ্য প্রতিষ্ঠান।",
      warranty: "ব্যাটারি এবং বেল্ট পরিবর্তনের তাৎক্ষণিক সুবিধা।",
      status: "সাশ্রয়ী মূল্যে আধুনিক ডিজাইনের ঘড়ি সুলভ মূল্যে পাওয়া যায়।",
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const filteredShops = watchShops.filter(s => 
    s.name.includes(searchQuery) || s.category.includes(searchQuery)
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">ঘড়ি ও ওয়াচ গ্যালারি</h1>
          <p className="text-slate-500 font-medium">আভিজাত্য আর সঠিক সময়ের নিখুঁত মেলবন্ধন</p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input 
            type="text"
            placeholder="শোরুম বা ব্র্যান্ডের নাম..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-slate-900/10 font-bangla font-bold transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShops.map((shop) => (
            <div key={shop.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img src={shop.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                <div className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  {shop.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black dark:text-white mb-2 leading-tight">{shop.name}</h3>
                <div className="space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400 font-medium">
                  <div className="flex items-center gap-2"><MapPin size={14} className="text-red-500" /> {shop.location}</div>
                  <div className="flex items-center gap-2"><Clock size={14} className="text-blue-500" /> {shop.timing}</div>
                </div>

                <div className="flex gap-2">
                  <a href={`tel:${shop.phone}`} className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-bold text-center text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg">
                    <PhoneCall size={16} /> কল দিন
                  </a>
                  <button 
                    onClick={() => setSelectedShop(shop)}
                    className="px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold transition-colors hover:bg-slate-200"
                  >
                    বিস্তারিত
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- স্ক্রলযোগ্য মডাল --- */}
      {selectedShop && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/70">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] overflow-hidden relative animate-in zoom-in-95 shadow-2xl border border-white/10 flex flex-col max-h-[85vh]">
            
            <div className="relative h-56 flex-shrink-0">
              <img src={selectedShop.image} className="w-full h-full object-cover" alt="" />
              <button 
                onClick={() => setSelectedShop(null)} 
                className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md text-white rounded-full hover:bg-red-500 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto flex-grow custom-scrollbar">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-black dark:text-white mb-1 leading-tight">{selectedShop.name}</h2>
                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">{selectedShop.category}</span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <Watch className="text-slate-900 dark:text-slate-200 mt-1" size={18} />
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">ঘড়ির কালেকশন</p>
                    <p className="font-bold dark:text-slate-200">{selectedShop.specialty}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 border-t border-slate-200 dark:border-slate-800 pt-3">
                  <ShieldCheck className="text-green-600 mt-1" size={18} />
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">ওয়ারেন্টি ও সার্ভিস</p>
                    <p className="font-bold dark:text-slate-200">{selectedShop.warranty}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-200 dark:border-slate-800 pt-3">
                  <Timer className="text-blue-500 mt-1" size={18} />
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">বর্তমান অবস্থা</p>
                    <p className="font-bold dark:text-slate-200">{selectedShop.status}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-200 dark:border-slate-800 pt-3">
                  <MapPin className="text-red-500 mt-1" size={18} />
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">ঠিকানা</p>
                    <p className="font-bold dark:text-slate-200">{selectedShop.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0">
              <div className="flex gap-3">
                <a 
                  href={`tel:${selectedShop.phone}`} 
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm shadow-lg active:scale-95 transition-all"
                >
                  <PhoneCall size={18} /> কল দিন
                </a>
                <a 
                  href={selectedShop.mapLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm shadow-lg active:scale-95 transition-all"
                >
                  <Navigation2 size={18} /> লোকেশন
                </a>
              </div>
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

export default WatchStoreService;