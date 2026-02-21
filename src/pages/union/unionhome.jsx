import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { 
  MapPin, Users, User, Info, CheckCircle2, 
  FileText, Phone, Landmark, ChevronRight, 
  ShieldCheck, Mail, Calendar, Search, Map as MapIcon
} from 'lucide-react';

const UnionParishadPortal = () => {
  const [activeTab, setActiveTab] = useState('about');

  // ইউপি মেম্বারদের ডাটা
  const members = [
    { id: 1, name: "মোঃ জুয়েল আহমদ", position: "চেয়ারম্যান", ward: "নির্বাচিত", phone: "017XXXXXXXX", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150" },
    { id: 2, name: "আব্দুল মালিক", position: "ইউপি সদস্য", ward: "১ নং ওয়ার্ড", phone: "017XXXXXXXX", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" },
    { id: 3, name: "রিনা বেগম", position: "মহিলা সদস্য (সংরক্ষিত)", ward: "১, ২, ৩ নং ওয়ার্ড", phone: "017XXXXXXXX", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" },
  ];

  // নাগরিক সেবার তালিকা
  const services = [
    { title: "জন্ম ও মৃত্যু নিবন্ধন", req: "হাসপাতালের কার্ড, বাবা-মায়ের এনআইডি", process: "আবেদনের পর ইউনিয়ন পরিষদে যোগাযোগ করুন।" },
    { title: "নাগরিকত্ব সনদ", req: "স্থায়ী ঠিকানার প্রমাণ, ছবি", process: "সরাসরি চেয়ারম্যানের কার্যালয় থেকে সংগ্রহ করা যায়।" },
    { title: "ওয়ারিশান সনদ", req: "বংশতালিকা, এনআইডি, মৃত্যু সনদ", process: "আবেদনপত্র যাচাই সাপেক্ষে ৩-৭ কার্যদিবসের মধ্যে দেওয়া হয়।" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] font-bangla">
      
      {/* --- Header --- */}
      <div className="bg-green-700 text-white py-14 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Landmark size={45} className="mx-auto mb-4 opacity-90" />
          <h1 className="text-3xl md:text-5xl font-black mb-2">শমশেরনগর ইউনিয়ন পরিষদ</h1>
          <p className="text-emerald-100 font-bold">কমলগঞ্জ উপজেলা, মৌলভীবাজার জেলা</p>
        </div>
      </div>

      {/* --- Tabs --- */}
      <div className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="bg-white dark:bg-slate-900 flex flex-wrap gap-2 p-3 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800">
          {['about', 'members', 'services', 'village'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[120px] py-3 px-4 rounded-3xl font-black text-xs transition-all ${
                activeTab === tab ? 'bg-green-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {tab === 'about' && 'ইউপি পরিচিতি'}
              {tab === 'members' && 'পরিষদ সদস্য'}
              {tab === 'services' && 'নাগরিক সেবা'}
              {tab === 'village' && 'গ্রামের তালিকা'}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10 pb-20">
        
        {/* --- About --- */}
        {activeTab === 'about' && (
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800 animate-in fade-in">
            <h2 className="text-2xl font-black mb-6 text-green-700 flex items-center gap-2"><Info /> ইউনিয়ন পরিচিতি</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-bold">
              শমশেরনগর ইউনিয়ন মৌলভীবাজার জেলার একটি গুরুত্বপূর্ণ বাণিজ্যিক এলাকা। এটি চা বাগান, ঐতিহ্যবাহী শমশেরনগর বাজার এবং বিএএফ শাহীন কলেজ সংলগ্ন হওয়ায় অত্যন্ত সুপরিচিত। এলাকার উন্নয়নে ইউনিয়ন পরিষদ সবসময় নিরলস কাজ করে যাচ্ছে।
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center gap-4">
                  <Calendar className="text-green-600" />
                  <span className="font-black text-sm text-slate-700 dark:text-slate-300">সময়: ৯:০০ AM - ৪:০০ PM (শুক্র-শনি বন্ধ)</span>
               </div>
               <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center gap-4">
                  <ShieldCheck className="text-green-600" />
                  <span className="font-black text-sm text-slate-700 dark:text-slate-300">নিরাপত্তা: স্থানীয় গ্রাম পুলিশ ও চৌকিদার সচল</span>
               </div>
            </div>
          </div>
        )}

        {/* --- Members --- */}
        {activeTab === 'members' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in zoom-in-95">
            {members.map((m) => (
              <div key={m.id} className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm text-center">
                <img src={m.image} alt="" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-50 object-cover shadow-sm" />
                <h3 className="text-lg font-black dark:text-white">{m.name}</h3>
                <p className="text-green-600 font-black text-[10px] uppercase mb-3 tracking-widest">{m.position}</p>
                <p className="text-slate-400 font-bold text-xs mb-5">{m.ward}</p>
                <a href={`tel:${m.phone}`} className="flex items-center justify-center gap-2 py-3 bg-slate-900 dark:bg-green-700 text-white rounded-xl font-black text-xs transition-all active:scale-95">
                   <Phone size={14} /> কল করুন
                </a>
              </div>
            ))}
          </div>
        )}

        {/* --- Services --- */}
        {activeTab === 'services' && (
          <div className="space-y-4 animate-in slide-in-from-right-5">
            {services.map((s, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-black text-green-700 mb-2 flex items-center gap-2"><CheckCircle2 size={18} /> {s.title}</h3>
                <div className="space-y-2 pl-7">
                  <p className="text-xs font-bold text-slate-600 dark:text-slate-400">কাগজপত্র: {s.req}</p>
                  <p className="text-xs font-bold text-slate-500 italic">পদ্ধতি: {s.process}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- Village List --- */}
        {activeTab === 'village' && (
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800 animate-in fade-in">
            <h2 className="text-xl font-black mb-8 text-green-700">গ্রামের তালিকা</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {['শমশেরনগর বাজার', 'ভাদাইরদেউল', 'শিংরাউলী', 'চাতলাপুর', 'ডবলছড়া', 'কেছুলুটি', 'কৃষ্ণপুর', 'সোনাপুর', 'মরাজানের পার', 'রাধানগর', 'সতিঝিগ্রাম'].map((g, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold text-xs text-slate-600 dark:text-slate-400">
                  <MapPin size={12} className="text-red-500" /> {g}
                </div>
              ))}
            </div>
            


<Link
  to="/pages/village/villagehome"
  className="w-full md:w-fit px-10 py-4 bg-green-600 text-white font-black rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 hover:bg-green-700 transition-all active:scale-95"
>
  বিস্তারিত তালিকা দেখুন <ChevronRight size={16} />
</Link>

          </div>
        )}

      </div>

      {/* --- Footer & Map Location --- */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 px-4 rounded-t-[4rem]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-green-500 mb-2">
                 <Landmark size={24} />
                 <h4 className="font-black text-xl text-white">পরিষদ কার্যালয়</h4>
              </div>
              <p className="text-slate-400 font-bold text-sm max-w-xs">
                শমশেরনগর ইউনিয়ন পরিষদ ভবন, <br /> 
                শমশেরনগর বাজার, কমলগঞ্জ, মৌলভীবাজার।
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-slate-500 font-bold text-xs">সচিব: +৮৮০১৭১১-XXXXXX</p>
                <p className="text-slate-500 font-bold text-xs">ইমেইল: up.shamshernagar@gmail.com</p>
              </div>
            </div>

            {/* Simple Location Preview / Map Placeholder */}
            <div className="w-full md:w-80 h-48 bg-slate-800 rounded-3xl border border-slate-700 flex flex-col items-center justify-center p-6 text-center group">
               <div className="p-4 bg-slate-700 rounded-full mb-3 text-green-500 group-hover:scale-110 transition-all">
                  <MapIcon size={30} />
               </div>
               <p className="text-xs font-black mb-3">পরিষদ গুগল ম্যাপ লোকেশন</p>
               <button className="bg-green-600 px-5 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider">ম্যাপে ওপেন করুন</button>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-slate-500">
            <p className="text-[10px] font-black uppercase tracking-widest">© ২০২৬ শমশেরনগর ইউনিয়ন পরিষদ | সর্বস্বত্ব সংরক্ষিত</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default UnionParishadPortal;