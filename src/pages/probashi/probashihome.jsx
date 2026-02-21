import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { 
  Globe2, ShieldAlert, HelpCircle,
  CheckCircle2, Building2, Info, 
  Users, PlaneTakeoff, X, User, Briefcase,
  MessageCircle, Mail, Globe
} from 'lucide-react';

const ProbashiSebaPortal = () => {
  const [selectedOrg, setSelectedOrg] = useState(null);

  // দেশভিত্তিক প্রবাসী কল্যাণ সংস্থা/কমিউনিটি তালিকা
  const organizations = [
    {
      id: 1,
      country: "সৌদি আরব",
      orgName: "বাংলাদেশ দূতাবাস, রিয়াদ",
      service: "পাসপোর্ট নবায়ন, আইনি সহায়তা",
      contact: "966114881977", // নম্বর ও ইমেইল ডাটাতে থাকবে কিন্তু বাটনে শো করবে না
      email: "mission.riyadh@mofa.gov.bd",
      image: "https://images.unsplash.com/photo-1586724230413-44b49abc0009?auto=format&fit=crop&q=80&w=200",
      details: "সৌদি আরবে অবস্থানরত বাংলাদেশিদের পাসপোর্ট নবায়ন, ভিসা সংক্রান্ত জটিলতা নিরসন এবং নিয়োগকর্তার সাথে আইনি বিবাদ মীমাংসায় এই দূতাবাস সরাসরি কাজ করে।",
      committee: [
        { role: "রাষ্ট্রদূত", name: "ড. মোহাম্মদ জাবেদ পাটোয়ারী", info: "প্রধান সমন্বয়ক" },
        { role: "কাউন্সিলর", name: "মোঃ আসাদুজ্জামান", info: "শ্রম উইং" }
      ]
    },
    {
      id: 2,
      country: "সংযুক্ত আরব আমিরাত (UAE)",
      orgName: "দুবাই প্রবাসী কল্যাণ সমিতি",
      service: "আর্থিক সহায়তা ও মৃতদেহ পাঠানো",
      contact: "97142726966",
      email: "info@dubaiprobashi.org",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=200",
      details: "সংযুক্ত আরব আমিরাতে কোনো প্রবাসী দুর্ঘটনায় পতিত হলে বা মারা গেলে তার পরিবারকে আইনি ও আর্থিক সহায়তা প্রদান করা হয়। এছাড়া মৃতদেহ দেশে পাঠানোর যাবতীয় খরচ ও প্রক্রিয়া তারা তদারকি করে।",
      committee: [
        { role: "সভাপতি", name: "হাজী আব্দুল মতিন", info: "বিশিষ্ট ব্যবসায়ী ও সমাজসেবক" },
        { role: "সাধারণ সম্পাদক", name: "মোঃ শফিকুর রহমান", info: "কমিউনিটি লিডার" }
      ]
    },
    {
      id: 3,
      country: "ইউরোপ (UK/Italy)",
      orgName: "বাংলাদেশ হাই কমিশন, লন্ডন",
      service: "পাওয়ার অফ অ্যাটর্নি, কনসুলার সেবা",
      contact: "442075840081",
      email: "bhclondon@btconnect.com",
      image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&q=80&w=200",
      details: "যুক্তরাজ্যে অবস্থানরত বাংলাদেশিদের দ্বৈত নাগরিকত্ব, পাওয়ার অফ অ্যাটর্নি এবং এনভিআর (NVR) সংক্রান্ত সকল দাপ্তরিক কাজ পরিচালনা করে।",
      committee: [
        { role: "হাই কমিশনার", name: "সাঈদা মুনা তাসনিম", info: "কূটনৈতিক প্রতিনিধি" },
        { role: "প্রথম সচিব", name: "রেজাউল করিম", info: "কনসুলার শাখা" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="bg-indigo-700 rounded-[3rem] p-10 text-white text-center mb-12 shadow-2xl relative overflow-hidden">
          <PlaneTakeoff className="absolute -left-10 -bottom-10 opacity-10" size={200} />
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">প্রবাসী সহায়তা পোর্টাল</h1>
            <p className="text-indigo-100 font-bold max-w-2xl mx-auto">শমশেরনগর থেকে বিদেশে অবস্থানরত আমাদের রেমিটেন্স যোদ্ধাদের জন্য প্রয়োজনীয় সকল তথ্য ও সেবা।</p>
          </div>
        </div>


       {/* --- New Clickable Service Card --- */}
<Link 
  to="/pages/probashi/probashilist" 
  className="block mb-12 group transition-all duration-300 hover:-translate-y-1"
>
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all flex items-center gap-6 relative overflow-hidden">

    {/* Left Icon */}
    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-5 rounded-2xl group-hover:scale-110 transition-transform">
      <Globe size={40} className="text-indigo-600 dark:text-indigo-400" />
    </div>

    {/* Content */}
    <div className="flex-1">
      <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
        সকল প্রবাশীদের প্রফাইল লিস্ট
      </h3>
      <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
        প্রবাসীদের জন্য প্রফাইল তথ্য এড করে রাখার সুবিধা পেতে লিস্টে আপনার প্রফাইল যুক্ত করবেন
      </p>
    </div>


  </div>
</Link>




        {/* --- Important Warnings --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-l-8 border-red-500 pl-4">
            <ShieldAlert className="text-red-500" size={32} />
            <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase">জরুরি সতর্কতা ও উপদেশ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-red-100 dark:border-red-900/20 shadow-sm relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-2 h-full bg-red-500 opacity-20 group-hover:opacity-100 transition-opacity" />
               <h3 className="text-lg font-black text-red-600 mb-3">ভিসা যাচাই</h3>
               <p className="text-sm font-bold text-slate-500 dark:text-slate-400 leading-relaxed">বিদেশে যাওয়ার আগে অবশ্যই জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET) থেকে আপনার স্মার্ট কার্ড বা ভিসা যাচাই করে নিন।</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-blue-100 dark:border-blue-900/20 shadow-sm relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-2 h-full bg-blue-500 opacity-20 group-hover:opacity-100 transition-opacity" />
               <h3 className="text-lg font-black text-blue-600 mb-3">বৈধ পথে রেমিটেন্স</h3>
               <p className="text-sm font-bold text-slate-500 dark:text-slate-400 leading-relaxed">হুন্ডি বা অবৈধ পথ পরিহার করুন। ব্যাংকিং চ্যানেলে টাকা পাঠিয়ে ২.৫% প্রণোদনা নিন এবং দেশের অর্থনীতিতে অবদান রাখুন।</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900/20 shadow-sm relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity" />
               <h3 className="text-lg font-black text-emerald-600 mb-3">জরুরি কন্টাক্ট সেভ</h3>
               <p className="text-sm font-bold text-slate-500 dark:text-slate-400 leading-relaxed">বিদেশে যাওয়ার পর সবসময় সংশ্লিষ্ট দেশের বাংলাদেশ দূতাবাস বা কনস্যুলেটের হটলাইন নম্বর নিজের কাছে রাখুন।</p>
            </div>
          </div>
        </div>

        {/* --- Organization Profile List --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-l-8 border-indigo-500 pl-4">
            <Building2 className="text-indigo-500" size={32} />
            <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase">দেশভিত্তিক প্রবাসী কল্যাণ সংস্থা</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizations.map((org) => (
              <div 
                key={org.id} 
                onClick={() => setSelectedOrg(org)}
                className="bg-white dark:bg-slate-900 p-6 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row gap-6 hover:shadow-xl transition-all cursor-pointer group"
              >
                <img 
                  src={org.image} 
                  className="w-full sm:w-32 h-32 rounded-[2rem] object-cover grayscale group-hover:grayscale-0" 
                  alt={org.country}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg uppercase">{org.country}</span>
                    <Globe2 size={16} className="text-slate-300" />
                  </div>
                  <h4 className="text-xl font-black dark:text-white mb-2">{org.orgName}</h4>
                  <p className="text-xs font-bold text-slate-500 mb-4">{org.service}</p>
                  <p className="text-[10px] font-black text-indigo-500 uppercase">বিস্তারিত তথ্য দেখুন ➔</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Popup Modal --- */}
        {selectedOrg && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
              <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Building2 size={24} />
                  <h3 className="text-xl font-black">{selectedOrg.orgName}</h3>
                </div>
                <button onClick={() => setSelectedOrg(null)} className="p-2 bg-indigo-500 rounded-full hover:bg-red-500 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 max-h-[80vh] overflow-y-auto">
                <div className="mb-8">
                  <h4 className="text-indigo-600 font-black text-sm uppercase mb-3 flex items-center gap-2">
                    <Briefcase size={16} /> সংস্থার মূল কার্যক্রম
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 font-bold leading-relaxed">{selectedOrg.details}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-emerald-600 font-black text-sm uppercase mb-4 flex items-center gap-2">
                    <Users size={16} /> দায়িত্বশীল কর্মকর্তাদের তথ্য
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedOrg.committee.map((member, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                        <div className="bg-white dark:bg-slate-700 p-2 rounded-xl text-indigo-500"><User size={20} /></div>
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase">{member.role}</p>
                          <p className="text-sm font-black dark:text-white">{member.name}</p>
                          <p className="text-[10px] font-bold text-slate-500 italic">{member.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp & Email Buttons - Numbers are hidden */}
                <div className="bg-slate-900 p-6 rounded-[2rem] text-white grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href={`https://wa.me/${selectedOrg.contact}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 py-4 rounded-2xl font-black text-sm transition-all active:scale-95"
                  >
                    <MessageCircle size={20} /> হোয়াটসঅ্যাপ মেসেজ
                  </a>
                  <a 
                    href={`mailto:${selectedOrg.email}`}
                    className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-black text-sm transition-all active:scale-95"
                  >
                    <Mail size={20} /> ইমেইল পাঠান
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- Helpful Information Section --- */}
        <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-800 mb-12">
          <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
             <HelpCircle className="text-amber-500" /> প্রয়োজনীয় কিছু তথ্য
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-bold text-slate-600 dark:text-slate-400">
             <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl items-start">
                <CheckCircle2 size={18} className="text-indigo-500 mt-1 shrink-0" />
                <p className="text-sm">বিদেশে যাওয়ার আগে ওয়েজ আর্নার্স কল্যাণ বোর্ডের সদস্যপদ গ্রহণ করুন।</p>
             </div>
             <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl items-start">
                <CheckCircle2 size={18} className="text-indigo-500 mt-1 shrink-0" />
                <p className="text-sm">বিদেশে মারা গেলে দাফন বা মৃতদেহ আনার জন্য আর্থিক সহায়তা পাওয়া যায়।</p>
             </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center p-8 bg-slate-900 text-white rounded-[3rem]">
           <Info className="mx-auto text-indigo-400 mb-4" size={40} />
           <p className="font-bold text-lg mb-4">প্রবাসী হেল্পলাইন নম্বর (প্রবাস বন্ধু কল সেন্টার)</p>
           <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-indigo-600 px-6 py-2 rounded-full font-black text-xl tracking-widest">১৬১৩৫</span>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProbashiSebaPortal;