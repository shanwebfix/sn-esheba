import React, { useState } from 'react';
import { 
  Search, MapPin, CreditCard, ExternalLink, 
  ShieldCheck, Info, Hash, Clock, Smartphone
} from 'lucide-react';

const ATMDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const atmBooths = [
    {
      id: 1,
      name: "Pubali Bank ATM Booth",
      location: "পূবালী ব্যাংক শাখা, শ্রীমঙ্গল রোড, শমশেরনগর",
      status: "২৪ ঘণ্টা খোলা",
      mapLink: "https://maps.google.com/?cid=15694101870674475743&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
      type: "ATM",
      color: "bg-blue-600",
      features: ["ক্যাশ উইথড্র", "ব্যালেন্স চেক"]
    },
    {
      id: 2,
      name: "MoneyGram Point",
      location: "রহিম ম্যানশন, শমশেরনগর",
      status: "১০:০০ AM - ০৫:০০ PM",
      mapLink: "https://maps.google.com/?cid=12759833182439076765&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
      type: "Money Transfer",
      color: "bg-red-500",
      features: ["রেমিট্যান্স গ্রহণ", "মানি ট্রান্সফার"]
    },
    {
      id: 3,
      name: "Western Union Point",
      location: "রহিম ম্যানসন, শমশেরনগর রোড",
      status: "১০:০০ AM - ০৫:০০ PM",
      mapLink: "https://maps.google.com/?cid=5542789288511884832&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
      type: "Money Transfer",
      color: "bg-yellow-500",
      features: ["বিদেশ থেকে টাকা গ্রহণ"]
    }
  ];

  const filteredAtms = atmBooths.filter(atm => 
    atm.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-blue-700 rounded-3xl text-white mb-4 shadow-xl">
            <CreditCard size={35} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-1">এটিএম (ATM) ও মানি পয়েন্ট</h1>
          <p className="text-slate-500 font-medium text-sm">শমশেরনগর এলাকার টাকা তোলার স্থানসমূহ</p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8 relative">
          <input 
            type="text"
            placeholder="ATM বা সার্ভিসের নাম খুঁজুন..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-blue-500/10 font-bold"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* ATM List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredAtms.map((atm) => (
            <div key={atm.id} className="bg-white dark:bg-slate-900 p-5 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-4 rounded-2xl text-white shadow-lg ${atm.color}`}>
                  <CreditCard size={22} />
                </div>
                <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">{atm.type}</span>
              </div>
              
              <h3 className="text-xl font-black dark:text-white mb-1">{atm.name}</h3>
              <p className="text-[11px] font-bold text-green-600 mb-4 flex items-center gap-1">
                <Clock size={12} /> {atm.status}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2 text-sm text-slate-500 font-medium leading-tight">
                  <MapPin size={16} className="text-red-500 shrink-0" /> {atm.location}
                </div>
              </div>

              <a 
                href={atm.mapLink}
                target="_blank"
                className="w-full flex items-center justify-center gap-2 py-3 bg-slate-900 dark:bg-blue-700 text-white rounded-xl font-black text-xs transition-all active:scale-95 shadow-lg shadow-blue-500/10"
              >
                লোকেশন দেখুন <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Security Note */}
        <div className="mt-10 p-5 bg-blue-600 rounded-[2rem] text-white flex items-center gap-4 shadow-xl shadow-blue-500/20">
          <ShieldCheck size={30} className="shrink-0" />
          <p className="text-xs font-black leading-relaxed">
            ATM কার্ডের পিন গোপন রাখুন। টাকা তোলার সময় অপরিচিত কাউকে সাহায্য করতে দেবেন না। সন্দেহজনক কিছু দেখলে ব্যাংকে জানান।
          </p>
        </div>

      </div>
    </div>
  );
};

export default ATMDirectory;