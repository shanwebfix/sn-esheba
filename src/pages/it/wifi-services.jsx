import React, { useState } from 'react';
import { 
  X, MessageCircle, PhoneCall, CheckCircle2, 
  MapPin, Wifi, Info, Navigation, Radio, Globe 
} from 'lucide-react';

const WifiServiceList = () => {
  const [selectedShop, setSelectedShop] = useState(null);

  const providers = [
    {
      id: 1,
      name: 'শমসেরনগর অনলাইন (Broadband)',
      shortDesc: 'দ্রুতগতির ফাইবার অপটিক ইন্টারনেট সংযোগ',
      location: 'মেইন রোড, শমসেরনগর বাজার',
      phone: '01716000000',
      whatsapp: '8801716000000',
      mapUrl: 'https://maps.google.com',
      services: [
        'উচ্চগতিসম্পন্ন ফাইবার অপটিক কানেকশন',
        'রাউটার সেটআপ ও কনফিগারেশন',
        '২৪/৭ টেকনিক্যাল সাপোর্ট',
        'বাফারলেস ইউটিউব ও ফেসবুক ব্রাউজিং',
        'রিয়েল আইপি (Real IP) সুবিধা'
      ],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      name: 'ডিজিটাল নেটওয়ার্ক সলিউশন',
      shortDesc: 'সাশ্রয়ী মূল্যে হোম ও অফিস ইন্টারনেট',
      location: 'চৌমুহনী এলাকা, শমসেরনগর',
      phone: '01816000000',
      whatsapp: '8801816000000',
      mapUrl: 'https://maps.google.com',
      services: [
        'কর্পোরেট ও হোম ইন্টারনেট প্যাকেজ',
        'পুরানো কানেকশন মেরামত ও সার্ভিসিং',
        'ওয়াইফাই কভারেজ এক্সটেনশন',
        'অনলাইন বিল পেমেন্ট সিস্টেম'
      ],
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4 font-bangla transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold mb-4">
            <Wifi size={14} /> হাই-স্পিড ইন্টারনেট কানেকশন
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            ওয়াইফাই ও ব্রডব্যান্ড সার্ভিস
          </h1>
          <p className="text-slate-500 mt-2">শমসেরনগরের সেরা ইন্টারনেট প্রোভাইডারদের তালিকা</p>
        </div>

        {/* Provider Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((item) => (
            <div key={item.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white p-2.5 rounded-2xl shadow-lg">
                  <Radio size={20} className="animate-pulse" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 leading-tight">{item.name}</h3>
                <p className="text-slate-500 text-xs mb-5 line-clamp-1">{item.shortDesc}</p>
                <button 
                  onClick={() => setSelectedShop(item)}
                  className="w-full py-3.5 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 text-sm hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-500/20"
                >
                  <Info size={16} /> প্যাকেজ ও বিস্তারিত
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
              <div className="flex items-center gap-2 mb-4 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-widest">
                <Globe size={14} /> ISP Profile
              </div>
              
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight pr-8">{selectedShop.name}</h2>

              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                  <MapPin size={16} className="text-red-500" />
                  {selectedShop.location}
                </div>
                <a href={selectedShop.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-lg w-fit hover:bg-indigo-100 transition-colors">
                  <Navigation size={12} /> ম্যাপে লোকেশন দেখুন
                </a>
              </div>

              {/* প্যাকেজ ও সার্ভিস তালিকা */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 mb-8 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-4 text-slate-400 uppercase tracking-widest text-[10px] font-black">
                   <Wifi size={14} /> আমাদের সেবাসমূহ
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedShop.services.map((s, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* যোগাযোগ বাটন */}
              <div className="grid grid-cols-2 gap-3">
                <a href={`https://wa.me/${selectedShop.whatsapp}`} className="flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-sm hover:opacity-95 active:scale-95 transition-all shadow-md">
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a href={`tel:${selectedShop.phone}`} className="flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:opacity-95 active:scale-95 transition-all shadow-md">
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

export default WifiServiceList;