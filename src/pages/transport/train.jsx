import React, { useState } from 'react';
import { 
  X, PhoneCall, CheckCircle2, MapPin, Info, 
  Search, Clock, Train, Navigation, Calendar, 
  AlertCircle, PhoneForwarded, MessageSquare
} from 'lucide-react';

const ShamshernagarStation = () => {
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // ১. ট্রেনের ডাটাবেস (শমশেরনগর স্টেশনের সময়সূচী)
  const trainServices = [
    {
      id: 1,
      name: "পারাবত এক্সপ্রেস",
      code: "৭০৯/৭১০",
      route: "ঢাকা - সিলেট - ঢাকা",
      arrivalFromDhaka: "দুপুর ১:২০",
      arrivalFromSylhet: "বিকেল ৪:৪০",
      offDay: "মঙ্গলবার",
      type: "আন্তঃনগর",
      description: "ঢাকা ও সিলেটের মধ্যে চলাচলকারী দ্রুততম ট্রেনগুলোর একটি। শমশেরনগর স্টেশনে এটি নিয়মিত যাত্রা বিরতি দেয়।"
    },
    {
      id: 2,
      name: "উপকূল এক্সপ্রেস",
      code: "৭১১/৭১২",
      route: "ঢাকা - সিলেট - ঢাকা",
      arrivalFromDhaka: "রাত ১২:৪৫",
      arrivalFromSylhet: "দুপুর ১:৩০",
      offDay: "শনিবার",
      type: "আন্তঃনগর",
      description: "রাতের ভ্রমণে আরামদায়ক সার্ভিস। এসি এবং নন-এসি উভয় বার্থের সুবিধা রয়েছে।"
    },
    {
      id: 3,
      name: "জয়ন্তিকা এক্সপ্রেস",
      code: "৭১৭/৭১৮",
      route: "ঢাকা - সিলেট - ঢাকা",
      arrivalFromDhaka: "বিকেল ৫:১০",
      arrivalFromSylhet: "সকাল ৯:৪৫",
      offDay: "নাই (প্রতিদিন)",
      type: "আন্তঃনগর",
      description: "প্রতিদিন যাতায়াতকারী ট্রেন। লোকাল যাত্রীদের জন্য এই ট্রেনের চাহিদা অনেক বেশি।"
    },
    {
      id: 4,
      name: "কালনী এক্সপ্রেস",
      code: "৭৭৩/৭৭৪",
      route: "ঢাকা - সিলেট - ঢাকা",
      arrivalFromDhaka: "রাত ৮:১৫",
      arrivalFromSylhet: "সকাল ৮:৩০",
      offDay: "শুক্রবার",
      type: "আন্তঃনগর",
      description: "ঢাকা থেকে শমশেরনগর ফেরার জন্য কালনী এক্সপ্রেস বেশ জনপ্রিয়।"
    },
    {
      id: 5,
      name: "পাহাড়িকা এক্সপ্রেস",
      code: "৭১৯/৭২০",
      route: "সিলেট - চট্টগ্রাম - সিলেট",
      arrivalFromSylhet: "সকাল ১১:৫০",
      arrivalFromChittagong: "রাত ৯:২০",
      offDay: "সোমবার (৭১৯), বুধবার (৭২০)",
      type: "আন্তঃনগর",
      description: "চট্টগ্রাম রুটে যাতায়াতের জন্য শমশেরনগরবাসীর প্রধান ট্রেন।"
    }
  ];

  const filteredTrains = trainServices.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    t.route.includes(searchQuery)
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold mb-4">
             <Train size={18} /> বাংলাদেশ রেলওয়ে সেবা
          </div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">শমশেরনগর রেলওয়ে স্টেশন</h1>
          <p className="text-slate-500 font-medium italic">ট্রেনের সময়সূচী এবং অনলাইন তথ্য কেন্দ্র</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto mb-12 relative group">
          <input 
            type="text"
            placeholder="ট্রেনের নাম বা গন্তব্য লিখুন (যেমন: ঢাকা)..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bangla"
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Train Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTrains.map((train) => (
            <div key={train.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Train size={80} />
              </div>

              <div className="flex justify-between items-start mb-4">
                 <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-2xl text-blue-600"><Train size={24} /></div>
                 <span className="text-[10px] font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full uppercase tracking-widest">{train.type}</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{train.name}</h3>
              <p className="text-sm text-blue-600 font-bold mb-4 flex items-center gap-1">
                <Navigation size={14} /> {train.route}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="flex items-center gap-2 text-xs text-slate-500"><Clock size={14}/> স্টেশনে আসার সময়</div>
                  <div className="text-sm font-bold text-slate-700 dark:text-slate-200">{train.arrivalFromDhaka}</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="flex items-center gap-2 text-xs text-slate-500"><Calendar size={14}/> বন্ধের দিন</div>
                  <div className="text-sm font-bold text-red-500">{train.offDay}</div>
                </div>
              </div>

              <button 
                onClick={() => setSelectedTrain(train)}
                className="w-full py-3.5 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-95"
              >
                <Info size={18} /> বিস্তারিত তথ্য
              </button>
            </div>
          ))}
        </div>

        {/* Station Contact Info Section */}
        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-black mb-4">স্টেশন মাস্টার কন্টাক্ট</h2>
            <p className="text-blue-100 mb-6 font-medium">টিকিট বা আসন সংক্রান্ত যেকোনো তথ্যের জন্য সরাসরি শমশেরনগর স্টেশনে যোগাযোগ করুন।</p>
            <div className="flex flex-wrap gap-4">
               <a href="tel:01711123456" className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-2xl font-black text-sm shadow-lg active:scale-95 transition-all">
                  <PhoneForwarded size={18} /> কল করুন
               </a>
               <div className="flex items-center gap-2 bg-blue-700 px-6 py-3 rounded-2xl font-bold text-sm">
                  <AlertCircle size={18} /> অনলাইন টিকিট: eticket.railway.gov.bd
               </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Train size={180} className="opacity-20" />
          </div>
        </div>
      </div>

      {/* --- TRAIN DETAILS MODAL --- */}
      {selectedTrain && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-slate-950/60 transition-all">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="bg-blue-600 p-10 text-white relative">
              <button onClick={() => setSelectedTrain(null)} className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <X size={20} />
              </button>
              <Train size={48} className="mb-4 opacity-50" />
              <h2 className="text-3xl font-black mb-1">{selectedTrain.name}</h2>
              <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">কোড: {selectedTrain.code}</p>
            </div>

            <div className="p-8">
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <Navigation className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">রুট ও গন্তব্য</p>
                    <p className="font-bold text-slate-700 dark:text-slate-200">{selectedTrain.route}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">ঢাকা থেকে</p>
                    <p className="text-sm font-black text-slate-800 dark:text-slate-200">{selectedTrain.arrivalFromDhaka}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl">
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">সিলেট থেকে</p>
                    <p className="text-sm font-black text-slate-800 dark:text-slate-200">{selectedTrain.arrivalFromSylhet}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                    <Calendar className="text-red-500" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ছুটির দিন</p>
                    <p className="font-bold text-red-600">{selectedTrain.offDay}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4 italic">
                  "{selectedTrain.description}"
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href="https://eticket.railway.gov.bd/" 
                  target="_blank" 
                  className="flex items-center justify-center gap-3 py-4 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-lg shadow-blue-500/30 active:scale-95 transition-all"
                >
                  টিকিট কিনুন
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShamshernagarStation;