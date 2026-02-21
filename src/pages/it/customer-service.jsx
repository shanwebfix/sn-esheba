import React, { useState } from 'react';
import { 
  X, MessageCircle, PhoneCall, CheckCircle2, 
  MapPin, Headphones, Info, Navigation, Building2, ShieldCheck 
} from 'lucide-react';

const CustomerServiceList = () => {
  const [selectedShop, setSelectedShop] = useState(null);

  const offices = [
    {
      id: 1,
      name: 'গ্রামীণফোন সেন্টার (GP Center)',
      shortDesc: 'অফিসিয়াল কাস্টমার কেয়ার ও সিম সার্ভিস',
      location: 'ভানুগাছ রোড, শমসেরনগর',
      phone: '121',
      whatsapp: '8801701000121',
      mapUrl: 'http://google.com/maps?q=Grameenphone+Center+Shamshernagar',
      services: [
        'সিম কার্ড রিপ্লেসমেন্ট (হারানো বা নষ্ট)',
        'নতুন সিম বায়োমেট্রিক রেজিস্ট্রেশন',
        'পোস্টপেইড বিল ও ফ্লেক্সিপ্ল্যান সহায়তা',
        'ই-সিম (eSIM) এক্টিভেশন',
        'ইন্টারনেট ও মডেম সেটিংস'
      ],
      color: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      name: 'শাহজালাল টেলিকম',
      shortDesc: 'রবি ও এয়ারটেল গ্রাহক সহায়তা কেন্দ্র',
      location: 'স্টেশন রোড, শমসেরনগর',
      phone: '01819000123',
      whatsapp: '8801819000123',
      mapUrl: 'http://google.com/maps?q=Robi+Sheba+Shamshernagar',
      services: [
        'মালিকানা পরিবর্তন (Ownership Transfer)',
        'বিকাশ ও নগদ একাউন্ট সহায়তা',
        'রোমিং সার্ভিস এক্টিভেশন',
        'রবি আলফা ও অফার সংক্রান্ত তথ্য'
      ],
      color: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600'
    },
        {
      id: 3,
      name: 'আজিজ মোবাইল টাচ',
      shortDesc: 'রবি ও এয়ারটেল গ্রাহক সহায়তা কেন্দ্র',
      location: '(চৌমুহনী), শমসেরনগর',
      phone: '01819000123',
      whatsapp: '8801819000123',
      mapUrl: 'http://google.com/maps?q=Robi+Sheba+Shamshernagar',
      services: [
        'মালিকানা পরিবর্তন (Ownership Transfer)',
        'বিকাশ ও নগদ একাউন্ট সহায়তা',
        'রোমিং সার্ভিস এক্টিভেশন',
        'রবি আলফা ও অফার সংক্রান্ত তথ্য'
      ],
      color: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4 font-bangla transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold mb-4">
            <Headphones size={14} /> ২৪/৭ সাপোর্ট ইনফো
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            টেলিকম গ্রাহক সেবা কেন্দ্র
          </h1>
          <p className="text-slate-500 mt-2">আপনার সিম বা নেটওয়ার্ক সমস্যার দ্রুত সমাধানের ঠিকানা</p>
        </div>

        {/* Office Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office) => (
            <div key={office.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img src={office.image} alt={office.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute top-4 left-4 ${office.color} text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg`}>
                  Official Store
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 leading-tight">{office.name}</h3>
                <p className="text-slate-500 text-xs mb-5">{office.shortDesc}</p>
                <button 
                  onClick={() => setSelectedShop(office)}
                  className="w-full py-3.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold flex items-center justify-center gap-2 text-sm hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  <Info size={16} /> সেবাগুলো দেখুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL (CENTERED) --- */}
      {selectedShop && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setSelectedShop(null)}></div>
          
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] shadow-2xl z-[1000] overflow-hidden animate-in zoom-in-95 duration-300 border border-white/10">
            <button onClick={() => setSelectedShop(null)} className="absolute top-5 right-5 p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:bg-red-500 hover:text-white transition-all">
              <X size={18} />
            </button>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase tracking-widest">
                <Building2 size={14} /> কাস্টমার কেয়ার প্রোফাইল
              </div>
              
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight pr-8">{selectedShop.name}</h2>

              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                  <MapPin size={16} className="text-red-500" />
                  {selectedShop.location}
                </div>
                <a href={selectedShop.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-[10px] bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg w-fit hover:bg-blue-100 transition-colors uppercase">
                  <Navigation size={12} /> ম্যাপে অফিস দেখুন
                </a>
              </div>

              {/* সেবা তালিকা */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 mb-8 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-4 text-slate-400 uppercase tracking-widest text-[10px] font-black">
                   <ShieldCheck size={14} /> আমরা যা প্রদান করি
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedShop.services.map((s, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
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

export default CustomerServiceList;