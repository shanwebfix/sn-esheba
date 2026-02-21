import React, { useState } from 'react';
import { 
  X, MessageCircle, PhoneCall, CheckCircle2, 
  MapPin, Copy, Info, Navigation 
} from 'lucide-react';

const ComputerShopList = () => {
  const [selectedShop, setSelectedShop] = useState(null);

  const shops = [

        {
      id: 1,
      name: 'মোবাইল সিটি',
      shortDesc: 'দ্রুত ফটোকপি প্রিন্ট,মোবাল সার্ভিস সহ আরো অনেক সার্ভিস পাওয়া যায়',
      location: 'এয়ারপোর্ট রোড, শমশেরনগর',
      phone: '+8801576-626400',
      whatsapp: '+8801576-626400',
      mapUrl: 'https://maps.google.com',
      services: ['বই ফটোকপি', 'স্পাইরাল বাইন্ডিং', 'এনআইডি ল্যামিনেটিং'],
      image: '/it-image/aziz.webp'
    },
            {
      id: 2,
      name: 'মৌত্রি কম্পিউটার',
      shortDesc: 'দ্রুত ফটোকপি ও স্ট্যাপলার সার্ভিস',
      location: 'ষ্টেশন রোড, শমশেরনগর',
      phone: '01715-682462',
      whatsapp: '+8801715682462',
      mapUrl: 'https://maps.google.com',
      services: ['বই ফটোকপি', 'স্পাইরাল বাইন্ডিং', 'এনআইডি ল্যামিনেটিং'],
      image: '/it-image/moitree.webp'
    },
    {
      id: 3,
      name: 'ফাহিছা কম্পিউটার',
      shortDesc: 'দ্রুত ফটোকপি ও স্ট্যাপলার সার্ভিস',
      location: 'এয়ারপোর্ট রোড, শমশেরনগর',
      phone: '01700000000',
      whatsapp: '8801700000000',
      mapUrl: 'https://maps.google.com',
      services: ['বই ফটোকপি', 'স্পাইরাল বাইন্ডিং', 'এনআইডি ল্যামিনেটিং'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600'
    },

            {
      id: 4,
      name: 'প্রাইম কম্পিউটার',
      shortDesc: 'দ্রুত ফটোকপি ও স্ট্যাপলার সার্ভিস',
      location: 'এয়ারপোর্ট রোড, শমশেরনগর',
      phone: '01700000000',
      whatsapp: '8801700000000',
      mapUrl: 'https://maps.google.com',
      services: ['বই ফটোকপি', 'স্পাইরাল বাইন্ডিং', 'এনআইডি ল্যামিনেটিং'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 5,
      name: 'মা কম্পিউটার',
      shortDesc: 'দ্রুত ফটোকপি ও স্ট্যাপলার সার্ভিস',
      location: 'ভানুগাছ রোড, শমশেরনগর',
      phone: '01700000000',
      whatsapp: '8801700000000',
      mapUrl: 'https://maps.google.com',
      services: ['বই ফটোকপি', 'স্পাইরাল বাইন্ডিং', 'এনআইডি ল্যামিনেটিং'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600'
    },

  ];

  return (
    <div className="min-h-screen py-10 px-4 font-bangla transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-black text-center text-slate-900 dark:text-white mb-12 uppercase tracking-tight">
          কম্পিউটার ও ফটোকপি সেবাসমূহ
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <div key={shop.id} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group hover:shadow-md transition-all">
              <div className="h-40 overflow-hidden relative">
                <img src={shop.image} alt={shop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{shop.name}</h3>
                <p className="text-slate-500 text-xs mb-4">{shop.shortDesc}</p>
                <button 
                  onClick={() => setSelectedShop(shop)}
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 text-sm hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-500/20"
                >
                  <Info size={16} /> বিস্তারিত
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL (CENTERED) --- */}
      {selectedShop && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          
          {/* Overlay - বাইরের কালো অংশ যেখানে ক্লিক করলে বন্ধ হবে */}
          <div 
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={() => setSelectedShop(null)}
          ></div>
          
          {/* Modal Card - একদম মাঝখানে */}
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] shadow-2xl z-[1000] overflow-hidden animate-in zoom-in-95 fade-in duration-300">
            
            {/* ক্লোজ বাটন (ডানদিকের উপরে) */}
            <button 
              onClick={() => setSelectedShop(null)}
              className="absolute top-5 right-5 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-white hover:bg-red-500 hover:text-white transition-all z-50 shadow-sm"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 pr-8 leading-tight">
                {selectedShop.name}
              </h2>

              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                  <MapPin size={16} className="text-red-500" />
                  {selectedShop.location}
                </div>
                {/* View Location Button */}
                <a 
                  href={selectedShop.mapUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs bg-blue-50 dark:bg-blue-900/30 px-3 py-2 rounded-lg w-fit hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Navigation size={14} /> View Map Location
                </a>
              </div>

              {/* সেবাসমূহ */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 mb-8 border border-slate-100 dark:border-slate-800">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                   <Copy size={14} /> আমাদের সার্ভিস সমূহ
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {selectedShop.services.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      <span className="font-medium">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* অ্যাকশন বাটনসমূহ - ছোট এবং মোবাইল ফ্রেন্ডলি */}
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href={`https://wa.me/${selectedShop.whatsapp}`}
                  className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white rounded-2xl font-bold text-sm shadow-lg shadow-green-500/10 active:scale-95 transition-all hover:opacity-90"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a 
                  href={`tel:${selectedShop.phone}`}
                  className="flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/10 active:scale-95 transition-all hover:opacity-90"
                >
                  <PhoneCall size={18} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComputerShopList;