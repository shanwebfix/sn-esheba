import React, { useState } from 'react';
import { 
  X, PhoneCall, MapPin, Info, Search, 
  Navigation2, Settings, ShoppingBag, 
  CheckCircle2, Store, Package
} from 'lucide-react';

const PartsShopService = () => {
  const [selectedShop, setSelectedShop] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // পার্টস দোকানের ডাটাবেস
  const partsShops = [
    {
      id: 1,
      name: "শমশেরনগর অটো পার্টস",
      owner: "মো: রফিক উদ্দিন",
      category: "গাড়ির পার্টস (কার ও মাইক্রো)",
      phone: "01712345678",
      location: "স্টেশন রোড, শমশেরনগর",
      mapLink: "http://googleusercontent.com/maps.google.com/8",
      specialty: "ইঞ্জিন পার্টস, লুব্রিকেন্ট ও ব্রেক প্যাড",
      status: "অরিজিনাল পার্টস গ্যারান্টি",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1506774518161-b710d10e2733?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      name: "মৌলভীবাজার বাইক প্যালেস",
      owner: "সোহেল আহমেদ",
      category: "বাইক ও মোটরসাইকেল পার্টস",
      phone: "01812345678",
      location: "চৌমুহনী পয়েন্ট, শমশেরনগর",
      mapLink: "http://googleusercontent.com/maps.google.com/9",
      specialty: "চেইন স্প্রকেট, টায়ার ও মডিফাইড পার্টস",
      status: "সব ব্র্যান্ডের পার্টস লভ্য",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1547623641-82fbb83476e9?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const filteredShops = partsShops.filter(s => 
    s.name.includes(searchQuery) || s.category.includes(searchQuery)
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold mb-4 font-bangla">
             <ShoppingBag size={14} /> অটোমোবাইল খুচরা যন্ত্রাংশ
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">গাড়ি ও বাইক পার্টস দোকান</h1>
          <p className="text-slate-500 font-medium font-bangla">সরাসরি কল করে পার্টস স্টকে আছে কি না জেনে নিন</p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input 
            type="text"
            placeholder="দোকান বা পার্টসের ধরণ খুঁজুন..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-indigo-500/10 font-bangla font-bold"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Shop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShops.map((shop) => (
            <div key={shop.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <img src={shop.image} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-indigo-50 dark:ring-indigo-900" alt="" />
                <div>
                  <h3 className="text-lg font-bold dark:text-white leading-tight font-bangla">{shop.name}</h3>
                  <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mt-1">{shop.category}</p>
                </div>
              </div>

              <div className="space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400 font-bangla">
                <div className="flex items-center gap-2 font-bold"><Store size={14} className="text-indigo-500" /> প্রোপ্রাইটর: {shop.owner}</div>
                <div className="flex items-center gap-2"><MapPin size={14} className="text-red-500" /> {shop.location}</div>
              </div>

              <div className="flex gap-2 font-bangla">
                <a href={`tel:${shop.phone}`} className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-bold text-center text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-indigo-500/20">
                  <PhoneCall size={16} /> কল দিন
                </a>
                <button 
                  onClick={() => setSelectedShop(shop)}
                  className="px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold"
                >
                  <Info size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- মডাল পপআপ (Call & Location পাশাপাশি) --- */}
      {selectedShop && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/60">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[3rem] p-8 relative animate-in zoom-in-95 shadow-2xl border border-white/10 overflow-hidden">
            <button onClick={() => setSelectedShop(null)} className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:bg-red-500 hover:text-white transition-all">
              <X size={18} />
            </button>

            <div className="text-center mb-6 font-bangla">
              <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-[2rem] flex items-center justify-center mx-auto mb-4 border border-indigo-100 dark:border-indigo-800">
                <Package size={40} className="text-indigo-600" />
              </div>
              <h2 className="text-2xl font-black dark:text-white leading-tight">{selectedShop.name}</h2>
              <p className="text-indigo-600 font-bold text-sm uppercase mt-1 tracking-tighter">{selectedShop.category}</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/40 rounded-3xl p-6 mb-8 border border-slate-100 dark:border-slate-800 space-y-4 font-bangla">
              <div className="flex items-start gap-3">
                <Settings className="text-indigo-500 mt-1" size={18} />
                <div className="text-sm">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">প্রধান পার্টসসমূহ</p>
                  <p className="font-bold dark:text-slate-200">{selectedShop.specialty}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-slate-200 dark:border-slate-800 pt-3">
                <CheckCircle2 className="text-green-500 mt-1" size={18} />
                <div className="text-sm">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">স্ট্যাটাস</p>
                  <p className="font-bold dark:text-slate-200">{selectedShop.status}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-slate-200 dark:border-slate-800 pt-3">
                <MapPin className="text-red-500 mt-1" size={18} />
                <div className="text-sm">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">ঠিকানা</p>
                  <p className="font-bold dark:text-slate-200 leading-snug">{selectedShop.location}</p>
                </div>
              </div>
            </div>

            {/* বাটনসমূহ: কল এবং লোকেশন পাশাপাশি */}
            <div className="flex gap-3 font-bangla">
               <a 
                 href={`tel:${selectedShop.phone}`} 
                 className="flex-1 flex items-center justify-center gap-2 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm shadow-lg shadow-indigo-500/20 active:scale-95 transition-all"
               >
                  <PhoneCall size={18} /> কল দিন
               </a>
               <a 
                 href={selectedShop.mapLink} 
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

export default PartsShopService;