import React, { useState } from 'react';
import { 
  X, MessageCircle, PhoneCall, CheckCircle2, 
  MapPin, Code2, Info, Navigation, Terminal, Globe 
} from 'lucide-react';

const WebDevServiceList = () => {
  const [selectedDev, setSelectedDev] = useState(null);

  const developers = [
    {
      id: 1,
      name: 'শমসেরনগর আইটি সলিউশন (Web Dept)',
      shortDesc: 'প্রফেশনাল ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট সার্ভিস',
      location: 'বিসমিল্লাহ টাওয়ার, শমসেরনগর বাজার',
      phone: '01718000000',
      whatsapp: '8801718000000',
      mapUrl: 'http://maps.google.com/?q=Shamshernagar',
      services: [
        'পার্সোনাল ও বিজনেস ওয়েবসাইট ডেভেলপমেন্ট',
        'ই-কমার্স (অনলাইন শপ) ওয়েবসাইট',
        'পোর্টফলিও ও ব্লগ সাইট তৈরি',
        'ডোমেইন ও হোস্টিং রেজিস্ট্রেশন',
        'এসইও (SEO) ও ডিজিটাল মার্কেটিং'
      ],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      name: 'সফট কোড আইটি (Freelance)',
      shortDesc: 'আধুনিক ও রেসপনসিভ ওয়েব অ্যাপ্লিকেশন সার্ভিস',
      location: 'কুলাউড়া রোড, শমসেরনগর',
      phone: '01818000000',
      whatsapp: '8801818000000',
      mapUrl: 'http://maps.google.com/?q=Shamshernagar',
      services: [
        'রিয়্যাক্ট (React) ও আধুনিক ফ্রেমওয়ার্ক সাপোর্ট',
        'লুুক ও ডিজাইন পরিবর্তন (Redesign)',
        'ওয়েবসাইট স্পিড অপ্টিমাইজেশন',
        'বাগ ফিক্সিং ও মেইনটেইনেন্স সার্ভিস'
      ],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4 font-bangla transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-xs font-bold mb-4 border border-teal-200 dark:border-teal-800">
            <Code2 size={14} /> ডিজিটাল বিজনেস সলিউশন
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            ওয়েব ডেভেলপমেন্ট সার্ভিস
          </h1>
          <p className="text-slate-500 mt-2 font-medium">আপনার ব্যবসার জন্য তৈরি করুন আধুনিক ও প্রফেশনাল ওয়েবসাইট</p>
        </div>

        {/* Dev Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((dev) => (
            <div key={dev.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img src={dev.image} alt={dev.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-teal-600 text-white p-2.5 rounded-2xl shadow-lg">
                  <Terminal size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 leading-tight">{dev.name}</h3>
                <p className="text-slate-500 text-xs mb-5 line-clamp-1">{dev.shortDesc}</p>
                <button 
                  onClick={() => setSelectedDev(dev)}
                  className="w-full py-3.5 bg-teal-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 text-sm hover:bg-teal-700 active:scale-95 transition-all shadow-lg shadow-teal-500/20"
                >
                  <Info size={16} /> বিস্তারিত দেখুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CENTERED MODAL --- */}
      {selectedDev && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedDev(null)}></div>
          
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] shadow-2xl z-[1000] overflow-hidden animate-in zoom-in-95 duration-300">
            <button onClick={() => setSelectedDev(null)} className="absolute top-5 right-5 p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:bg-red-500 hover:text-white transition-all">
              <X size={18} />
            </button>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-4 text-teal-600 dark:text-teal-400 font-bold text-[10px] uppercase tracking-widest leading-none">
                <Globe size={14} /> Full-Stack Developer
              </div>
              
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight pr-8">{selectedDev.name}</h2>

              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                  <MapPin size={16} className="text-red-500" />
                  {selectedDev.location}
                </div>
                <a href={selectedDev.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-[10px] bg-teal-50 dark:bg-teal-900/30 px-3 py-1.5 rounded-lg w-fit hover:bg-teal-100 transition-colors uppercase tracking-wider">
                  <Navigation size={12} /> গুগল ম্যাপ লোকেশন
                </a>
              </div>

              {/* সেবাসমূহ */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 mb-8 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-4 text-slate-400 uppercase tracking-widest text-[10px] font-black">
                   <Code2 size={14} /> আমাদের বিশেষত্ব
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedDev.services.map((s, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* কন্টাক্ট বাটন */}
              <div className="grid grid-cols-2 gap-3">
                <a href={`https://wa.me/${selectedDev.whatsapp}`} className="flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md">
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a href={`tel:${selectedDev.phone}`} className="flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md">
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

export default WebDevServiceList;