import React, { useState } from 'react';
import { 
  X, MessageCircle, PhoneCall, CheckCircle2, 
  MapPin, Zap, Info, Navigation, Lightbulb, PenTool 
} from 'lucide-react';

const ElectricalServiceList = () => {
  const [selectedShop, setSelectedShop] = useState(null);

  const shops = [
    {
      id: 1,
      name: 'শমসেরনগর ইলেকট্রিক এন্ড হার্ডওয়্যার',
      shortDesc: 'বাসা-বাড়ির ওয়ারিং ও ইলেকট্রিক সরঞ্জাম সার্ভিসিং',
      location: 'মৌলভীবাজার রোড (চৌমুহনী), শমসেরনগর',
      phone: '01715000000',
      whatsapp: '8801715000000',
      mapUrl: 'https://maps.google.com',
      services: [
        'নতুন বিল্ডিং ইলেকট্রিক ওয়ারিং',
        'সিলিং ফ্যান ও টেবিল ফ্যান মেরামত',
        'আইপিএস (IPS) ও ব্যাটারি সার্ভিস',
        'ইলেকট্রিক চুলা ও ইস্ত্রি মেরামত',
        'সার্কিট ব্রেকার ও মেইন সুইচ পরিবর্তন'
      ],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      name: 'মডার্ন এসি ও ফ্রিজ সার্ভিসিং',
      shortDesc: 'এসি, ফ্রিজ ও ওয়াশিং মেশিন মেরামত বিশেষজ্ঞ',
      location: 'চাতলাপুর রোড, শমসেরনগর বাজার',
      phone: '01815000000',
      whatsapp: '8801815000000',
      mapUrl: 'https://maps.google.com',
      services: [
        'এসি (AC) ইন্সটলেশন ও গ্যাস রিফিল',
        'ফ্রিজ ও ডিপ-ফ্রিজ মেরামত',
        'ওয়াশিং মেশিন সার্ভিসিং',
        'মোটর ও পাম্প মেরামত'
      ],
      image: 'https://images.unsplash.com/photo-1581092921461-7d656054526e?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4 font-bangla transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 rounded-full text-xs font-bold mb-4">
            <Zap size={14} fill="currentColor" /> দক্ষ টেকনিশিয়ান সেবা
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            ইলেকট্রিক্যাল ও এসি সার্ভিস
          </h1>
          <p className="text-slate-500 mt-2">আপনার ঘরের নিরাপত্তা ও ইলেকট্রিক সমস্যার দ্রুত সমাধান</p>
        </div>

        {/* সার্ভিস গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <div key={shop.id} className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img src={shop.image} alt={shop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white p-2 rounded-xl shadow-lg">
                  <Zap size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 leading-tight">{shop.name}</h3>
                <p className="text-slate-500 text-xs mb-5 line-clamp-1">{shop.shortDesc}</p>
                <button 
                  onClick={() => setSelectedShop(shop)}
                  className="w-full py-3.5 bg-yellow-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 text-sm hover:bg-yellow-600 active:scale-95 transition-all shadow-lg shadow-yellow-500/20"
                >
                  <Info size={16} /> বিস্তারিত দেখুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CENTERED MODAL --- */}
      {selectedShop && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedShop(null)}></div>
          
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] shadow-2xl z-[1000] overflow-hidden animate-in zoom-in-95 duration-300">
            <button onClick={() => setSelectedShop(null)} className="absolute top-5 right-5 p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:bg-red-500 hover:text-white transition-all">
              <X size={18} />
            </button>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-4 text-yellow-600 font-bold text-[10px] uppercase tracking-widest">
                <Lightbulb size={14} /> Electrical Expert
              </div>
              
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight pr-8">{selectedShop.name}</h2>

              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                  <MapPin size={16} className="text-red-500" />
                  {selectedShop.location}
                </div>
                <a href={selectedShop.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-[10px] bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg w-fit hover:bg-blue-100 transition-colors uppercase">
                  <Navigation size={12} /> গুগল ম্যাপে লোকেশন
                </a>
              </div>

              {/* সার্ভিস লিস্ট */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 mb-8 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-4 text-slate-400 uppercase tracking-widest text-[10px] font-black">
                   <PenTool size={14} /> আমাদের সেবাসমূহ
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedShop.services.map((s, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* অ্যাকশন বাটন */}
              <div className="grid grid-cols-2 gap-3">
                <a href={`https://wa.me/${selectedShop.whatsapp}`} className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white rounded-2xl font-bold text-sm hover:opacity-95 active:scale-95 transition-all">
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a href={`tel:${selectedShop.phone}`} className="flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:opacity-95 active:scale-95 transition-all">
                  <PhoneCall size={18} /> কল দিন
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElectricalServiceList;