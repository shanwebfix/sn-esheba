import React, { useState } from 'react';
import { 
  X, MessageCircle, PhoneCall, CheckCircle2, 
  MapPin, Wrench, Info, Navigation, Monitor, Cpu 
} from 'lucide-react';

const HardwareServiceList = () => {
  const [selectedShop, setSelectedShop] = useState(null);

  const shops = [
    {
      id: 1,
      name: 'CPU',
      shortDesc: 'ল্যাপটপ ও ডেস্কটপ হার্ডওয়্যার মেরামত বিশেষজ্ঞ',
      location: 'বিসমিল্লাহ টাওয়ার (২য় তলা), শমশেরনগর বাজার',
      phone: '01712000000',
      whatsapp: '8801712000000',
      mapUrl: 'https://maps.google.com',
      services: [
        'মাদারবোর্ড রিপেয়ারিং',
        'ল্যাপটপ ডিসপ্লে ও কিবোর্ড পরিবর্তন',
        'হার্ড ড্রাইভ ও এসএসডি (SSD) আপগ্রেড',
        'উইন্ডোজ ও প্রয়োজনীয় সফটওয়্যার সেটআপ',
        'কম্পিউটার ক্লিনিং ও থার্মাল পেস্ট সার্ভিস'
      ],
      image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      name: 'খালেদ টেলিকম',
      shortDesc: 'সকল প্রকার মোইল ডিভাইস সার্ভিসিং সেন্টার',
      location: 'ভানুগাছ রোড, শমশেরনগর',
      phone: '01911000000',
      whatsapp: '8801911000000',
      mapUrl: 'https://maps.google.com',
      services: [
        'চিপ লেভেল রিপেয়ারিং',
        'পাওয়ার সাপ্লাই মেরামত',
        'ইউপিএস (UPS) ব্যাটারি পরিবর্তন',
        'সিসিটিভি (CCTV) ক্যামেরা কনফিগারেশন'
      ],
      image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4 font-bangla transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            হার্ডওয়্যার ও মেরামত সার্ভিস
          </h1>
          <p className="text-slate-500 mt-2">আপনার ল্যাপটপ বা কম্পিউটারের যেকোনো সমস্যায় বিশেষজ্ঞ সহায়তা</p>
        </div>

        {/* সার্ভিস লিস্ট গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <div key={shop.id} className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img src={shop.image} alt={shop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-xl shadow-lg">
                  <Wrench size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 leading-tight">{shop.name}</h3>
                <p className="text-slate-500 text-xs mb-5 line-clamp-1">{shop.shortDesc}</p>
                <button 
                  onClick={() => setSelectedShop(shop)}
                  className="w-full py-3.5 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 text-sm hover:opacity-90 active:scale-95 transition-all"
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
          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedShop(null)}></div>
          
          {/* Modal content */}
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] shadow-2xl z-[1000] overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Close button */}
            <button onClick={() => setSelectedShop(null)} className="absolute top-5 right-5 p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:bg-red-500 hover:text-white transition-all">
              <X size={18} />
            </button>

            <div className="p-8">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-lg text-[10px] font-black uppercase border border-amber-100 dark:border-amber-800">
                <Cpu size={12} /> Hardware Expert
              </div>
              
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight pr-8">{selectedShop.name}</h2>

              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                  <MapPin size={16} className="text-red-500" />
                  {selectedShop.location}
                </div>
                <a href={selectedShop.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-[10px] bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg w-fit hover:bg-blue-100 transition-colors uppercase">
                  <Navigation size={12} /> Google Map-এ দেখুন
                </a>
              </div>

              {/* সার্ভিস লিস্ট */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 mb-8 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-4 text-slate-400 uppercase tracking-widest text-[10px] font-black">
                   <Monitor size={14} /> আমাদের সেবাসমূহ
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedShop.services.map((s, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* কন্টাক্ট বাটন */}
              <div className="grid grid-cols-2 gap-3">
                <a href={`https://wa.me/${selectedShop.whatsapp}`} className="flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-sm hover:opacity-95 active:scale-95 transition-all">
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a href={`tel:${selectedShop.phone}`} className="flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:opacity-95 active:scale-95 transition-all">
                  <PhoneCall size={18} /> সরাসরি কল
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HardwareServiceList;