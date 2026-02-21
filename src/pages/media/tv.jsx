import React, { useState } from 'react';
import { 
  X, Search, Tv, Youtube, Facebook, 
  MessageCircle, ExternalLink, PlayCircle, 
  Info, Radio, Globe, Share2
} from 'lucide-react';

const TVChannelDirectory = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const channels = [
    {
      id: 1,
      name: "শমশেরনগর ২৪ টিভি",
      category: "নিউজ ও বিনোদন",
      logo: "https://cdn-icons-png.flaticon.com/512/716/716429.png", // আপনার লোগো লিংক এখানে দেবেন
      about: "শমশেরনগর এবং সারা দেশের সর্বশেষ সংবাদ ও সুস্থ বিনোদন প্রচার করাই আমাদের লক্ষ্য। আমরা বস্তুনিষ্ঠ সংবাদে বিশ্বাসী।",
      fbPage: "https://facebook.com/yourpage",
      ytChannel: "https://youtube.com/yourchannel",
      whatsapp: "https://wa.me/8801700000000",
      website: "www.sn24tv.com",
      status: "লাইভ সম্প্রচার চলছে",
      coverage: "সারা বাংলাদেশ (স্যাটেলাইট ও আইপি)",
      image: "https://images.unsplash.com/photo-1585699324551-f6c309eedee5?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      name: "পল্লী কথা টেলিভিশন",
      category: "সাংস্কৃতিক ও কৃষি",
      logo: "https://cdn-icons-png.flaticon.com/512/3075/3075881.png",
      about: "বাংলার লোকজ সংস্কৃতি এবং কৃষিভিত্তিক প্রোগ্রাম প্রচারকারী জনপ্রিয় আইপি টেলিভিশন।",
      fbPage: "https://facebook.com/pollikotha",
      ytChannel: "https://youtube.com/pollikotha",
      whatsapp: "https://wa.me/8801800000000",
      website: "www.pollitv.com",
      status: "রেকর্ডিং চলছে",
      coverage: "অনলাইন ও অ্যাপ",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const filteredChannels = channels.filter(c => 
    c.name.includes(searchQuery) || c.category.includes(searchQuery)
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-red-600 rounded-2xl text-white mb-4 animate-pulse">
            <Radio size={32} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">মিডিয়া ও টিভি চ্যানেল</h1>
          <p className="text-slate-500 font-medium">সরাসরি অনুষ্ঠান এবং খবরের আপডেট</p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input 
            type="text"
            placeholder="চ্যানেলের নাম খুঁজুন..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-red-500/10 font-bangla font-bold transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChannels.map((channel) => (
            <div key={channel.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-40 overflow-hidden bg-slate-200">
                <img src={channel.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                   <img src={channel.logo} className="w-12 h-12 rounded-xl bg-white p-1 shadow-lg" alt="logo" />
                   <div className="ml-3">
                      <h3 className="text-white font-black leading-tight">{channel.name}</h3>
                      <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{channel.category}</p>
                   </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-6 font-medium">
                  {channel.about}
                </p>

                <button 
                  onClick={() => setSelectedChannel(channel)}
                  className="w-full py-4 bg-red-600 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-red-500/20"
                >
                  <PlayCircle size={18} /> বিস্তারিত ও চ্যানেল লিংক
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Detailed Modal --- */}
      {selectedChannel && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/70">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] overflow-hidden relative animate-in zoom-in-95 shadow-2xl flex flex-col max-h-[90vh]">
            
            <div className="relative h-48 flex-shrink-0">
              <img src={selectedChannel.image} className="w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                 <img src={selectedChannel.logo} className="w-20 h-20 rounded-2xl bg-white p-2 mb-2" alt="" />
                 <h2 className="text-white text-xl font-black">{selectedChannel.name}</h2>
              </div>
              <button onClick={() => setSelectedChannel(null)} className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md text-white rounded-full"><X size={20} /></button>
            </div>

            <div className="p-8 overflow-y-auto flex-grow custom-scrollbar">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 space-y-6 text-sm">
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1 flex items-center gap-1">
                    <Info size={12} /> চ্যানেল পরিচিতি
                  </p>
                  <p className="font-bold dark:text-slate-200 leading-relaxed">{selectedChannel.about}</p>
                </div>
                
                <div className="flex justify-between border-t border-slate-200 dark:border-slate-800 pt-4">
                  <div>
                    <p className="text-[10px] text-slate-400 font-black tracking-widest">স্ট্যাটাস</p>
                    <p className="font-black text-green-500 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span> {selectedChannel.status}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 font-black tracking-widest">কাভারেজ</p>
                    <p className="font-black dark:text-slate-200">{selectedChannel.coverage}</p>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="mt-8 space-y-3">
                <a href={selectedChannel.fbPage} target="_blank" className="flex items-center justify-between p-4 bg-blue-600/10 text-blue-600 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all">
                  <div className="flex items-center gap-3"><Facebook size={20}/> ফেসবুক পেজ</div>
                  <ExternalLink size={16}/>
                </a>
                <a href={selectedChannel.ytChannel} target="_blank" className="flex items-center justify-between p-4 bg-red-600/10 text-red-600 rounded-2xl font-black hover:bg-red-600 hover:text-white transition-all">
                  <div className="flex items-center gap-3"><Youtube size={20}/> ইউটিউব চ্যানেল</div>
                  <ExternalLink size={16}/>
                </a>
                <a href={selectedChannel.whatsapp} target="_blank" className="flex items-center justify-between p-4 bg-green-600/10 text-green-600 rounded-2xl font-black hover:bg-green-600 hover:text-white transition-all">
                  <div className="flex items-center gap-3"><MessageCircle size={20}/> হোয়াটসঅ্যাপ</div>
                  <ExternalLink size={16}/>
                </a>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <button onClick={() => setSelectedChannel(null)} className="w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-2xl font-black text-xs uppercase tracking-widest">বন্ধ করুন</button>
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

export default TVChannelDirectory;