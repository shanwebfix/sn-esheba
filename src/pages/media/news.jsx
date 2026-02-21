import React, { useState } from 'react';
import { 
  X, Search, Globe, Youtube, Facebook, 
  MessageCircle, ExternalLink, Radio, 
  Newspaper, Zap, Share2, PlayCircle
} from 'lucide-react';

const OnlineNewsDirectory = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const newsChannels = [
    {
      id: 1,
      name: "শমশেরনগর নিউজ ২৪",
      category: "অনলাইন নিউজ পোর্টাল",
      logo: "https://cdn-icons-png.flaticon.com/512/2540/2540832.png",
      about: "শমশেরনগরের প্রথম ও জনপ্রিয় অনলাইন নিউজ চ্যানেল। আমরা ২৪ ঘণ্টা বস্তুনিষ্ঠ সংবাদ ও লাইভ ভিডিও প্রচার করি।",
      fbPage: "https://facebook.com/shamshernagarnews24",
      ytChannel: "https://youtube.com/shamshernagarnews24",
      whatsapp: "https://wa.me/8801700000000",
      website: "https://www.sn24news.com",
      status: "লাইভ আপডেট",
      established: "২০১৮",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      name: "ভয়েস অফ মৌলভীবাজার",
      category: "আঞ্চলিক সংবাদ",
      logo: "https://cdn-icons-png.flaticon.com/512/21/21601.png",
      about: "মৌলভীবাজার জেলার প্রতিটি খবরাখবর সবার আগে পৌছে দেয় ভয়েস অফ মৌলভীবাজার ডিজিটাল প্ল্যাটফর্ম।",
      fbPage: "https://facebook.com/vom",
      ytChannel: "https://youtube.com/vom",
      whatsapp: "https://wa.me/8801800000000",
      website: "https://www.voicemov.com",
      status: "অনলাইন",
      established: "২০২০",
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const filteredNews = newsChannels.filter(n => 
    n.name.includes(searchQuery) || n.category.includes(searchQuery)
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-red-600 rounded-2xl text-white mb-4 shadow-lg animate-pulse">
            <Zap size={32} fill="currentColor" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">অনলাইন নিউজ চ্যানেল</h1>
          <p className="text-slate-500 font-medium">মুহূর্তের খবর মুহূর্তে আপনার কাছে</p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input 
            type="text"
            placeholder="নিউজ পোর্টাল খুঁজুন..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-red-500/10 font-bangla font-bold transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <div key={news.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-44 overflow-hidden bg-slate-200">
                <img src={news.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-6">
                   <div className="flex items-center gap-3">
                      <img src={news.logo} className="w-12 h-12 rounded-xl bg-white p-1 shadow-md border border-slate-100" alt="logo" />
                      <div>
                        <h3 className="text-white font-black leading-tight text-lg">{news.name}</h3>
                        <span className="bg-red-600 text-[9px] text-white px-2 py-0.5 rounded-full font-bold uppercase animate-pulse">Live</span>
                      </div>
                   </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-6 font-medium leading-relaxed">
                  {news.about}
                </p>

                <button 
                  onClick={() => setSelectedNews(news)}
                  className="w-full py-4 bg-slate-900 dark:bg-red-600 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg"
                >
                  <Newspaper size={18} /> বিস্তারিত ও লিংক
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Detailed Modal --- */}
      {selectedNews && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/70">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] overflow-hidden relative animate-in zoom-in-95 shadow-2xl flex flex-col max-h-[92vh]">
            
            <div className="relative h-44 flex-shrink-0">
              <img src={selectedNews.image} className="w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                 <img src={selectedNews.logo} className="w-20 h-20 rounded-2xl bg-white p-2 mb-2 shadow-2xl" alt="" />
                 <h2 className="text-white text-xl font-black">{selectedNews.name}</h2>
              </div>
              <button onClick={() => setSelectedNews(null)} className="absolute top-4 right-4 p-2 bg-black/30 backdrop-blur-md text-white rounded-full"><X size={20} /></button>
            </div>

            <div className="p-8 overflow-y-auto flex-grow custom-scrollbar">
              <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-5 space-y-4 text-sm mb-6 border border-red-100 dark:border-red-900/30">
                <div>
                  <p className="text-[10px] text-red-500 dark:text-red-400 font-black uppercase tracking-widest mb-1">নিউজ পোর্টাল সম্পর্কে</p>
                  <p className="font-bold dark:text-slate-200 leading-relaxed text-base">{selectedNews.about}</p>
                </div>
                
                <div className="flex justify-between border-t border-red-200 dark:border-red-900/40 pt-4">
                  <div>
                    <p className="text-[10px] text-slate-400 font-black tracking-widest uppercase">প্রতিষ্ঠিত</p>
                    <p className="font-black dark:text-slate-200">{selectedNews.established} ইং</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 font-black tracking-widest uppercase">টাইপ</p>
                    <p className="font-black text-red-600">{selectedNews.status}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a href={selectedNews.website} target="_blank" className="flex items-center justify-between p-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-slate-800 transition-all">
                  <div className="flex items-center gap-3"><Globe size={20}/> ভিজিট ওয়েবসাইট</div>
                  <ExternalLink size={16}/>
                </a>
                <a href={selectedNews.fbPage} target="_blank" className="flex items-center justify-between p-4 bg-[#1877F2]/10 text-[#1877F2] rounded-2xl font-black hover:bg-[#1877F2] hover:text-white transition-all border border-[#1877F2]/20">
                  <div className="flex items-center gap-3"><Facebook size={20}/> ফেসবুক পেজ</div>
                  <ExternalLink size={16}/>
                </a>
                <a href={selectedNews.ytChannel} target="_blank" className="flex items-center justify-between p-4 bg-[#FF0000]/10 text-[#FF0000] rounded-2xl font-black hover:bg-[#FF0000] hover:text-white transition-all border border-[#FF0000]/20">
                  <div className="flex items-center gap-3"><Youtube size={20}/> ইউটিউব চ্যানেল</div>
                  <ExternalLink size={16}/>
                </a>
                <a href={selectedNews.whatsapp} target="_blank" className="flex items-center justify-between p-4 bg-[#25D366]/10 text-[#25D366] rounded-2xl font-black hover:bg-[#25D366] hover:text-white transition-all border border-[#25D366]/20">
                  <div className="flex items-center gap-3"><MessageCircle size={20}/> হোয়াটসঅ্যাপ টিপস</div>
                  <ExternalLink size={16}/>
                </a>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <button onClick={() => setSelectedNews(null)} className="w-full py-3 text-slate-400 font-bold text-xs uppercase tracking-widest">ফিরে যান</button>
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

export default OnlineNewsDirectory;