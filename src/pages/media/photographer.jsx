import React, { useState } from 'react';
import { 
  X, Search, Camera, Instagram, Facebook, 
  MessageCircle, ExternalLink, Image as ImageIcon, 
  Star, MapPin, Heart, Share2, Palette
} from 'lucide-react';

const PhotographerDirectory = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const photographers = [
    {
      id: 1,
      name: "আরিয়ান ফটোগ্রাফি",
      category: "ওয়েডিং ও ইভেন্ট",
      profilePic: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=200",
      about: "আমরা বিয়ের প্রতিটি সুন্দর মুহূর্তকে ফ্রেমে বন্দী করি। ৫ বছরের অভিজ্ঞতা সম্পন্ন টিম নিয়ে আমরা কাজ করি।",
      fbPage: "https://facebook.com/arian.photo",
      insta: "https://instagram.com/arian.photo",
      whatsapp: "https://wa.me/8801700000000",
      experience: "৫ বছর+",
      specialty: "সিনেমাটিক ওয়েডিং, ক্যান্ডিড শট",
      portfolio: ["https://images.unsplash.com/photo-1511285560929-80b456fea0bc", "https://images.unsplash.com/photo-1519741497674-611481863552"],
      image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      name: "লেন্স ম্যাজিক স্টুডিও",
      category: "পোর্ট্রেট ও প্রোডাক্ট",
      profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      about: "প্রফেশনাল পোর্ট্রেট এবং কমার্শিয়াল প্রোডাক্ট ফটোগ্রাফির জন্য আমরা বিশ্বস্ত। আধুনিক গিয়ার ও এডিটিং আমাদের বৈশিষ্ট্য।",
      fbPage: "https://facebook.com/lensmagic",
      insta: "https://instagram.com/lensmagic",
      whatsapp: "https://wa.me/8801800000000",
      experience: "৩ বছর+",
      specialty: "ফ্যাশন শুট, কর্পোরেট ইভেন্ট",
      portfolio: ["https://images.unsplash.com/photo-1537633552985-df8429e8048b", "https://images.unsplash.com/photo-1453060113865-968ce1ad0f70"],
      image: "https://images.unsplash.com/photo-1520859090488-4a6a211e2f34?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const filteredPhotographers = photographers.filter(p => 
    p.name.includes(searchQuery) || p.category.includes(searchQuery)
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-slate-900 dark:bg-amber-500 rounded-2xl text-white dark:text-slate-900 mb-4 shadow-xl">
            <Camera size={32} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">ফটোগ্রাফার ও স্টুডিও</h1>
          <p className="text-slate-500 font-medium">স্মৃতিগুলো থাকুক অম্লান, সেরা ফটোগ্রাফারের ফ্রেমে</p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input 
            type="text"
            placeholder="ফটোগ্রাফারের নাম বা ধরন..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-amber-500/10 font-bangla font-bold transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotographers.map((p) => (
            <div key={p.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-56 overflow-hidden">
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-6">
                   <div className="flex items-center gap-3">
                      <img src={p.profilePic} className="w-12 h-12 rounded-full border-2 border-amber-500 object-cover" alt="" />
                      <div>
                        <h3 className="text-white font-black leading-tight text-lg">{p.name}</h3>
                        <p className="text-amber-400 text-[10px] font-bold uppercase tracking-widest">{p.category}</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                   <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500"><Star size={14} className="text-amber-500 fill-amber-500" /> {p.experience} অভিজ্ঞতা</div>
                   <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500"><Palette size={14} className="text-indigo-500" /> {p.specialty}</div>
                </div>

                <button 
                  onClick={() => setSelectedArtist(p)}
                  className="w-full py-4 bg-slate-900 dark:bg-amber-600 text-white dark:text-slate-900 rounded-2xl font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <ImageIcon size={18} /> পোর্টফোলিও দেখুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Artist Modal --- */}
      {selectedArtist && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/80">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[3rem] overflow-hidden relative animate-in zoom-in-95 shadow-2xl flex flex-col max-h-[90vh]">
            
            <button onClick={() => setSelectedArtist(null)} className="absolute top-4 right-4 z-10 p-2 bg-black/40 text-white rounded-full backdrop-blur-md hover:bg-red-500 transition-all"><X size={20} /></button>

            <div className="p-8 overflow-y-auto flex-grow custom-scrollbar">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-4">
                  <img src={selectedArtist.profilePic} className="w-24 h-24 rounded-full border-4 border-amber-500 p-1 shadow-2xl object-cover" alt="" />
                  <div className="absolute bottom-1 right-1 bg-amber-500 text-slate-900 p-1 rounded-full border-2 border-white dark:border-slate-900">
                    <Camera size={12} />
                  </div>
                </div>
                <h2 className="text-2xl font-black dark:text-white leading-tight">{selectedArtist.name}</h2>
                <span className="text-amber-600 font-bold text-sm tracking-widest">{selectedArtist.category}</span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 mb-8 border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2">ফটোগ্রাফার সম্পর্কে</p>
                <p className="font-bold dark:text-slate-200 leading-relaxed mb-4">{selectedArtist.about}</p>
                
                <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                   <div className="flex-1">
                      <p className="text-[10px] text-slate-400 font-black uppercase">অভিজ্ঞতা</p>
                      <p className="font-black dark:text-white">{selectedArtist.experience}</p>
                   </div>
                   <div className="flex-1 text-right">
                      <p className="text-[10px] text-slate-400 font-black uppercase">স্পেশালিটি</p>
                      <p className="font-black dark:text-white text-xs">{selectedArtist.specialty}</p>
                   </div>
                </div>
              </div>

              {/* Social/Booking Buttons */}
              <div className="space-y-3">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest text-center mb-3">বুকিং এবং যোগাযোগ</p>
                <a href={selectedArtist.whatsapp} target="_blank" className="flex items-center justify-between p-4 bg-green-500 text-white rounded-2xl font-black hover:bg-green-600 shadow-lg shadow-green-500/20 transition-all">
                  <div className="flex items-center gap-3"><MessageCircle size={22}/> হোয়াটসঅ্যাপ বুকিং</div>
                  <ExternalLink size={16}/>
                </a>
                <a href={selectedArtist.fbPage} target="_blank" className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all">
                  <div className="flex items-center gap-3"><Facebook size={22}/> ফেসবুক পেজ</div>
                  <ExternalLink size={16}/>
                </a>
                <a href={selectedArtist.insta} target="_blank" className="flex items-center justify-between p-4 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 text-white rounded-2xl font-black hover:opacity-90 transition-all">
                  <div className="flex items-center gap-3"><Instagram size={22}/> ইন্সটাগ্রাম গ্যালারি</div>
                  <ExternalLink size={16}/>
                </a>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/20 text-center">
                <p className="text-[10px] text-slate-400 font-bold">ছবি তোলার তারিখ অগ্রিম বুক করুন</p>
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

export default PhotographerDirectory;