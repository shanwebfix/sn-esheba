import React, { useState } from 'react';
import { 
  X, Search, Youtube, Facebook, 
  MessageCircle, ExternalLink, User, 
  Video, Star, Share2, Globe, Heart, CheckCircle
} from 'lucide-react';

const ContentCreatorDirectory = () => {
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const creators = [
    {
      id: 1,
      name: "রাফসান দ্য ছোটভাই",
      category: "ফুড ও লাইফস্টাইল",
      profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200", // লোগো বা প্রোফাইল ছবি
      about: "আমি বিভিন্ন জায়গার খাবার এবং লাইফস্টাইল নিয়ে ভিডিও বানাতে পছন্দ করি। আমার লক্ষ্য হলো দেশি খাবারের স্বাদ বিশ্বমঞ্চে তুলে ধরা।",
      fbPage: "https://facebook.com/rafsan",
      ytChannel: "https://youtube.com/rafsan",
      whatsapp: "https://wa.me/8801700000000",
      followers: "২.৫ মিলিয়ন+",
      specialty: "ফুড রিভিউ, ট্রাভেল ভ্লগিং",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      name: "টেক মাস্টার শমশেরনগর",
      category: "টেকনোলজি ও গ্যাজেট",
      profilePic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
      about: "লেটেস্ট স্মার্টফোন, গ্যাজেট রিভিউ এবং টেক টিপস নিয়ে নিয়মিত ভিডিও আপলোড করি। প্রযুক্তিকে সহজভাবে জানাই আমার কাজ।",
      fbPage: "https://facebook.com/techmaster",
      ytChannel: "https://youtube.com/techmaster",
      whatsapp: "https://wa.me/8801800000000",
      followers: "৫০০ হাজার+",
      specialty: "গ্যাজেট আনবক্সিং, পিসি বিল্ড",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const filteredCreators = creators.filter(c => 
    c.name.includes(searchQuery) || c.category.includes(searchQuery)
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-violet-600 rounded-2xl text-white mb-4">
            <Video size={32} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">জনপ্রিয় কনটেন্ট ক্রিয়েটর</h1>
          <p className="text-slate-500 font-medium">আপনার প্রিয় ক্রিয়েটরদের সোশ্যাল প্রোফাইল ও আপডেট</p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input 
            type="text"
            placeholder="ক্রিয়েটরের নাম বা ক্যাটাগরি..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-violet-500/10 font-bangla font-bold transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCreators.map((creator) => (
            <div key={creator.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-40 overflow-hidden bg-slate-200">
                <img src={creator.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                   <img src={creator.profilePic} className="w-14 h-14 rounded-full border-2 border-violet-500 bg-white object-cover shadow-lg" alt="profile" />
                   <div className="ml-3">
                      <h3 className="text-white font-black leading-tight flex items-center gap-1">
                        {creator.name} <CheckCircle size={14} className="text-blue-400 fill-blue-400" />
                      </h3>
                      <p className="text-violet-400 text-[10px] font-bold uppercase tracking-widest">{creator.category}</p>
                   </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex gap-4 mb-4 text-[12px] font-bold text-slate-500">
                   <div className="flex items-center gap-1"><Heart size={14} className="text-pink-500" /> {creator.followers}</div>
                   <div className="flex items-center gap-1"><Star size={14} className="text-amber-500" /> {creator.specialty}</div>
                </div>

                <button 
                  onClick={() => setSelectedCreator(creator)}
                  className="w-full py-4 bg-violet-600 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-violet-500/20"
                >
                  <User size={18} /> প্রোফাইল দেখুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Detailed Modal --- */}
      {selectedCreator && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/70">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[3rem] overflow-hidden relative animate-in zoom-in-95 shadow-2xl flex flex-col max-h-[90vh]">
            
            <div className="relative h-44 flex-shrink-0">
              <img src={selectedCreator.image} className="w-full h-full object-cover" alt="" />
              <div className="absolute -bottom-10 left-8">
                 <img src={selectedCreator.profilePic} className="w-24 h-24 rounded-full border-4 border-white dark:border-slate-900 bg-white object-cover shadow-xl" alt="" />
              </div>
              <button onClick={() => setSelectedCreator(null)} className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md text-white rounded-full"><X size={20} /></button>
            </div>

            <div className="p-8 pt-12 overflow-y-auto flex-grow custom-scrollbar">
              <div className="mb-6">
                <h2 className="text-2xl font-black dark:text-white flex items-center gap-2">
                  {selectedCreator.name} <CheckCircle size={20} className="text-blue-500" />
                </h2>
                <span className="text-violet-600 font-bold text-sm">{selectedCreator.category}</span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 space-y-4 text-sm mb-8">
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">বায়ো / বর্ণনা</p>
                  <p className="font-bold dark:text-slate-200 leading-relaxed">{selectedCreator.about}</p>
                </div>
                <div className="flex gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
                   <div>
                     <p className="text-[10px] text-slate-400 font-black tracking-widest">ফলোয়ার</p>
                     <p className="font-black dark:text-white">{selectedCreator.followers}</p>
                   </div>
                   <div>
                     <p className="text-[10px] text-slate-400 font-black tracking-widest">বিশেষত্ব</p>
                     <p className="font-black dark:text-white">{selectedCreator.specialty}</p>
                   </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-1 gap-3">
                <a href={selectedCreator.fbPage} target="_blank" className="flex items-center justify-between p-4 bg-[#1877F2]/10 text-[#1877F2] rounded-2xl font-black hover:bg-[#1877F2] hover:text-white transition-all">
                  <div className="flex items-center gap-3"><Facebook size={22}/> ফেসবুক পেজ</div>
                  <ExternalLink size={16}/>
                </a>
                <a href={selectedCreator.ytChannel} target="_blank" className="flex items-center justify-between p-4 bg-[#FF0000]/10 text-[#FF0000] rounded-2xl font-black hover:bg-[#FF0000] hover:text-white transition-all">
                  <div className="flex items-center gap-3"><Youtube size={22}/> ইউটিউব চ্যানেল</div>
                  <ExternalLink size={16}/>
                </a>
                <a href={selectedCreator.whatsapp} target="_blank" className="flex items-center justify-between p-4 bg-[#25D366]/10 text-[#25D366] rounded-2xl font-black hover:bg-[#25D366] hover:text-white transition-all">
                  <div className="flex items-center gap-3"><MessageCircle size={22}/> হোয়াটসঅ্যাপ</div>
                  <ExternalLink size={16}/>
                </a>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <button onClick={() => setSelectedCreator(null)} className="w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-2xl font-black text-xs uppercase tracking-widest">বন্ধ করুন</button>
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

export default ContentCreatorDirectory;