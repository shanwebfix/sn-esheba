import React, { useState } from 'react';
import { 
  X, MessageCircle, PhoneCall, CheckCircle2, 
  MapPin, Camera, Info, Navigation, ShieldCheck, Video 
} from 'lucide-react';

const CCTVServiceList = () => {
  const [selectedShop, setSelectedShop] = useState(null);

  const shops = [
    {
      id: 1,
      name: 'শমসেরনগর সিকিউরিটি সলিউশন',
      shortDesc: 'সিসিটিভি ক্যামেরা ও সিকিউরিটি সিস্টেম বিশেষজ্ঞ',
      location: 'বিসমিল্লাহ টাওয়ার (নিচ তলা), শমসেরনগর বাজার',
      phone: '01717000000',
      whatsapp: '8801717000000',
      mapUrl: 'https://maps.google.com',
      services: [
        'এইচডি (HD) ও আইপি (IP) ক্যামেরা সেটআপ',
        'মোবাইল দিয়ে অনলাইন মনিটরিং কনফিগারেশন',
        'ডিভিআর (DVR) ও এনভিআর (NVR) মেরামত',
        'অফিস ও বাসায় সিসিটিভি ইনস্টলেশন',
        'নাইট ভিশন ও কালারফুল ক্যামেরা সরবরাহ'
      ],
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      name: 'সেফ গার্ড টেকনোলজি',
      shortDesc: 'আধুনিক নিরাপত্তা সরঞ্জাম ও সিসিটিভি সার্ভিসিং',
      location: 'কুলাউড়া রোড, শমসেরনগর',
      phone: '01817000000',
      whatsapp: '8801817000000',
      mapUrl: 'https://maps.google.com',
      services: [
        'ওয়াইফাই স্পিড ডোম ক্যামেরা',
        'পুরানো ক্যামেরা ও ক্যাবল মেরামত',
        'হার্ড ড্রাইভ ব্যাকআপ রিকভারি',
        'সতর্কতামূলক এলার্ম সিস্টেম সেটআপ'
      ],
      image: 'https://images.unsplash.com/photo-1524338198850-e9363529c7c0?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="min-h-screen  py-10 px-4 font-bangla transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-xs font-bold mb-4 border border-red-200 dark:border-red-800">
            <Video size={14} className="animate-pulse" /> ২৪/৭ নিরাপত্তা সেবা
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            সিসিটিভি ক্যামেরা ও সিকিউরিটি
          </h1>
          <p className="text-slate-500 mt-2 font-medium">আপনার বাসা ও ব্যবসা প্রতিষ্ঠানের সর্বোচ্চ নিরাপত্তা নিশ্চিত করুন</p>
        </div>

        {/* CCTV Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <div key={shop.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img src={shop.image} alt={shop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-red-600 text-white p-2.5 rounded-2xl shadow-lg">
                  <Camera size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 leading-tight">{shop.name}</h3>
                <p className="text-slate-500 text-xs mb-5 line-clamp-1">{shop.shortDesc}</p>
                <button 
                  onClick={() => setSelectedShop(shop)}
                  className="w-full py-3.5 bg-red-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 text-sm hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-500/20"
                >
                  <Info size={16} /> সার্ভিস ডিটেইলস
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CENTERED MODAL --- */}
      {selectedShop && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedShop(null)}></div>
          
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] shadow-2xl z-[1000] overflow-hidden animate-in zoom-in-95 duration-300">
            <button onClick={() => setSelectedShop(null)} className="absolute top-5 right-5 p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:bg-red-600 hover:text-white transition-all shadow-sm">
              <X size={18} />
            </button>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-4 text-red-600 dark:text-red-400 font-bold text-[10px] uppercase tracking-widest leading-none">
                <ShieldCheck size={14} /> Security Specialist
              </div>
              
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight pr-8">{selectedShop.name}</h2>

              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                  <MapPin size={16} className="text-red-500" />
                  {selectedShop.location}
                </div>
                <a href={selectedShop.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-[10px] bg-red-50 dark:bg-red-900/30 px-3 py-1.5 rounded-lg w-fit hover:bg-red-100 transition-colors uppercase">
                  <Navigation size={12} /> ম্যাপে লোকেশন দেখুন
                </a>
              </div>

              {/* সার্ভিস লিস্ট */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 mb-8 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-4 text-slate-400 uppercase tracking-widest text-[10px] font-black">
                   <Video size={14} /> আমাদের সেবাসমূহ
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedShop.services.map((s, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-red-500 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* অ্যাকশন বাটন */}
              <div className="grid grid-cols-2 gap-3">
                <a href={`https://wa.me/${selectedShop.whatsapp}`} className="flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md shadow-green-500/10">
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a href={`tel:${selectedShop.phone}`} className="flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md shadow-blue-500/10">
                  <PhoneCall size={18} /> কল করুন
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CCTVServiceList;