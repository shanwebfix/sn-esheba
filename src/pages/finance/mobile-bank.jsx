import React, { useState } from 'react';
import { 
  Search, MapPin, Phone, ExternalLink, 
  Store, ShieldAlert, Hash, Info, CheckCircle
} from 'lucide-react';

const MFSPointsDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const shops = [
    {
      id: 1,
      name: "সোহাগ টেলিকম ও বিকাশ পয়েন্ট",
      location: "শমশেরনগর চৌমোহনা বাজার",
      services: ["বিকাশ", "নগদ", "ফ্লেক্সিলোড"],
      mapLink: "https://maps.google.com/?q=Shamshernagar+Choumohana",
      contact: "এজেন্ট পয়েন্ট",
      status: "খোলা আছে",
      tag: "বিকাশ স্পেশালিস্ট"
    },
    {
      id: 2,
      name: "হোসেন প্লাজা মোবাইল পয়েন্ট",
      location: "শমশেরনগর মেইন রোড (পূবালী ব্যাংকের পাশে)",
      services: ["নগদ", "বিকাশ", "রকেট"],
      mapLink: "https://maps.google.com/?q=Hussain+Plaza+Shamshernagar",
      contact: "এজেন্ট পয়েন্ট",
      status: "খোলা আছে",
      tag: "নগদ উদ্যোক্তা"
    },
    {
      id: 3,
      name: "এস.এম. টেলিকম ও ইলেকট্রনিক্স",
      location: "স্টেশন রোড, শমশেরনগর",
      services: ["বিকাশ", "উপায়", "বিল পে"],
      mapLink: "https://maps.google.com/?q=Station+Road+Shamshernagar",
      contact: "এজেন্ট পয়েন্ট",
      status: "খোলা আছে",
      tag: "সব সেবা"
    },
    {
      id: 4,
      name: "ভাই ভাই টেলিকম",
      location: "শমশেরনগর সরকারি স্কুল সংলগ্ন",
      services: ["বিকাশ", "নগদ", "সিম কার্ড"],
      mapLink: "https://maps.google.com/?q=Shamshernagar+School+Road",
      contact: "এজেন্ট পয়েন্ট",
      status: "খোলা আছে",
      tag: "রিচার্জ সেন্টার"
    }
  ];

  const filteredShops = shops.filter(shop => 
    shop.name.includes(searchQuery) || shop.location.includes(searchQuery)
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-pink-600 rounded-3xl text-white mb-4 shadow-xl">
            <Store size={35} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-1">বিকাশ ও নগদ পয়েন্ট লিস্ট</h1>
          <p className="text-slate-500 font-medium text-sm">শমশেরনগরের প্রধান মোবাইল ব্যাংকিং দোকানসমূহ</p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <input 
            type="text"
            placeholder="দোকানের নাম বা এলাকা খুঁজুন..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-pink-500/10 font-bold"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Security Alert */}
        <div className="mb-8 p-4 bg-red-600 rounded-2xl flex items-center gap-4 text-white shadow-lg shadow-red-500/20">
          <ShieldAlert size={30} className="shrink-0 animate-pulse" />
          <p className="text-xs font-black leading-relaxed">
            পিন (PIN) গোপন রাখুন: লেনদেনের সময় পিন কাউকে বলবেন না। কোনো প্রতারক ফোন দিয়ে পিন চাইলে সরাসরি লাইন কেটে দিন।
          </p>
        </div>

        {/* Shop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredShops.map((shop) => (
            <div key={shop.id} className="bg-white dark:bg-slate-900 p-5 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-2xl text-pink-600">
                  <Store size={22} />
                </div>
                <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-lg uppercase">{shop.tag}</span>
              </div>
              
              <h3 className="text-xl font-black dark:text-white mb-2">{shop.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <MapPin size={16} className="text-red-500" /> {shop.location}
                </div>
                <div className="flex flex-wrap gap-2">
                  {shop.services.map((s, i) => (
                    <span key={i} className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-slate-600 dark:text-slate-400 flex items-center gap-1">
                      <CheckCircle size={10} className="text-pink-500" /> {s}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={shop.mapLink}
                target="_blank"
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 dark:bg-pink-700 text-white rounded-xl font-black text-xs transition-all active:scale-95"
              >
                লোকেশন দেখুন <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Dial Codes */}
        <div className="mt-10 p-6 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-indigo-600">
            <Hash size={20} />
            <h4 className="font-black">জরুরি ডায়াল কোড:</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
              <p className="text-[10px] font-black text-slate-400 uppercase">বিকাশ</p>
              <p className="text-lg font-black dark:text-white">*২৪৭#</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
              <p className="text-[10px] font-black text-slate-400 uppercase">নগদ</p>
              <p className="text-lg font-black dark:text-white">*১৬৭#</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MFSPointsDirectory;