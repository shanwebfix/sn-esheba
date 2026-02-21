import React, { useState } from 'react';
import { 
  X, MessageCircle, PhoneCall, CheckCircle2, 
  MapPin, Smartphone, Info, Navigation, ShoppingBag, Wrench 
} from 'lucide-react';

const MobileShopList = () => {
  const [selectedShop, setSelectedShop] = useState(null);

  const shops = [
    {
      id: 1,
      name: 'মোবাইল সিটি',
      shortDesc: 'নতুন মোবাইল সেট ও অরিজিনাল একসেসরিজ',
      location: '(চৌমুহনী), শমশেরনগর বাজার',
      phone: '+8801576-626400',
      whatsapp: '+8801576-626400',
      mapUrl: 'https://maps.google.com',
      services: ['ব্র্যান্ডের স্মার্টফোন', 'অরিজিনাল চার্জার ও হেডফোন', 'মেমোরি কার্ড ও ডিসপ্লে', 'পুরাতন মোবাইল ক্রয়-বিক্রয়'],
      image: '/it-image/aziz.webp'
    },
    {
      id: 2,
      name: 'এস, এস, মোবাইল',
      shortDesc: 'দ্রুত মোবাইল মেরামত ও রিচার্জ পয়েন্ট',
      location: '(চৌমুহনী), শমসেরনগর',
      phone: '01811000000',
      whatsapp: '8801811000000',
      mapUrl: 'https://maps.google.com',
      services: ['ডিসপ্লে পরিবর্তন', 'সফটওয়্যার ও ফ্ল্যাশ', 'ব্যাটারি রিপ্লেসমেন্ট', 'সব ধরণের মোবাইল রিচার্জ'],
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600'
    },
    { 
      id: 3,
      name: 'রিপন টেলিকম',
      shortDesc: 'দ্রুত মোবাইল মেরামত ও রিচার্জ পয়েন্ট',
      location: 'স্টেশন রোড, শমসেরনগর',
      phone: '01811000000',
      whatsapp: '8801811000000',
      mapUrl: 'https://maps.google.com',
      services: ['ডিসপ্লে পরিবর্তন', 'সফটওয়্যার ও ফ্ল্যাশ', 'ব্যাটারি রিপ্লেসমেন্ট', 'সব ধরণের মোবাইল রিচার্জ'],
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4 font-bangla transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            মোবাইল শপ ও সার্ভিসিং সেন্টার
          </h1>
          <p className="text-slate-500 mt-2">শমসেরনগর এলাকার সেরা মোবাইল দোকান সমুহ</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <div key={shop.id} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img src={shop.image} alt={shop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 p-2 rounded-xl backdrop-blur-sm">
                  <Smartphone size={20} className="text-blue-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{shop.name}</h3>
                <p className="text-slate-500 text-xs mb-5 line-clamp-1">{shop.shortDesc}</p>
                <button 
                  onClick={() => setSelectedShop(shop)}
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 text-sm hover:bg-blue-700 active:scale-95 transition-all"
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
            <button onClick={() => setSelectedShop(null)} className="absolute top-5 right-5 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:bg-red-500 hover:text-white transition-all">
              <X size={18} />
            </button>

            <div className="p-8">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight pr-8">{selectedShop.name}</h2>

              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                  <MapPin size={16} className="text-red-500" />
                  {selectedShop.location}
                </div>
                <a href={selectedShop.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-[10px] bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg w-fit hover:bg-blue-100 transition-colors uppercase">
                  <Navigation size={12} /> View on Google Map
                </a>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 mb-8 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-4 text-slate-400 uppercase tracking-widest text-[10px] font-black">
                   <Wrench size={14} /> আমাদের বিশেষত্ব
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedShop.services.map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a href={`https://wa.me/${selectedShop.whatsapp}`} className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white rounded-2xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all">
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a href={`tel:${selectedShop.phone}`} className="flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all">
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

export default MobileShopList;