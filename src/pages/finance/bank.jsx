import React, { useState } from 'react';
import { 
  Search, MapPin, Clock, Phone, ExternalLink, 
  Building2, Landmark, Wallet, ArrowRight 
} from 'lucide-react';

const ShamshernagarBankDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const banks = [
    {
      id: 1,
      name: "সোনালী ব্যাংক লিমিটেড",
      branch: "শমশেরনগর শাখা",
      address: "শ্রীমঙ্গল রোড, শমশেরনগর",
      type: "সরকারি ব্যাংক",
      hours: "১০:০০ AM - ০৪:০০ PM (শুক্র-শনি বন্ধ)",
      contact: "017XXXXXXXX",
      mapLink: "https://maps.google.com/?q=Sonali+Bank+Shamshernagar",
      color: "bg-green-600"
    },
    {
      id: 2,
      name: "পূবালী ব্যাংক লিমিটেড",
      branch: "শমশেরনগর শাখা",
      address: "শ্রীমঙ্গল রোড, শমশেরনগর",
      type: "বেসরকারি ব্যাংক",
      hours: "১০:০০ AM - ০৪:০০ PM (শুক্র-শনি বন্ধ)",
      contact: "018XXXXXXXX",
      mapLink: "https://maps.google.com/?q=Pubali+Bank+Shamshernagar",
      color: "bg-blue-600"
    },
    {
      id: 3,
      name: "ইসলামী ব্যাংক বাংলাদেশ",
      branch: "এজেন্ট ব্যাংকিং / শাখা",
      address: "কুলাউড়া রোড, শমশেরনগর",
      type: "ইসলামী ব্যাংকিং",
      hours: "১০:০০ AM - ০৪:০০ PM (শুক্র-শনি বন্ধ)",
      contact: "019XXXXXXXX",
      mapLink: "https://maps.google.com/?q=Islami+Bank+Shamshernagar",
      color: "bg-emerald-600"
    },
    {
      id: 4,
      name: "গ্রামীণ ব্যাংক",
      branch: "শমশেরনগর শাখা",
      address: " শমশেরনগর",
      type: "ক্ষুদ্র ঋণ ব্যাংক",
      hours: "০৯:০০ AM - ০৫:০০ PM",
      contact: "015XXXXXXXX",
      mapLink: "https://maps.google.com/?q=Grameen+Bank+Shamshernagar",
      color: "bg-red-600"
    }
  ];

  const filteredBanks = banks.filter(bank => 
    bank.name.includes(searchQuery) || bank.type.includes(searchQuery)
  );

  return (
    <div className="min-h-screen py-12 px-4 font-bangla">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-600 rounded-3xl text-white mb-4 shadow-xl shadow-indigo-500/20">
            <Landmark size={40} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">শমশেরনগর ব্যাংক গাইড</h1>
          <p className="text-slate-500 font-medium">আপনার নিকটস্থ ব্যাংক ও আর্থিক প্রতিষ্ঠানের তথ্য</p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-10">
          <input 
            type="text"
            placeholder="ব্যাংকের নাম খুঁজুন..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-indigo-500/10 font-bold transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Bank List */}
        <div className="space-y-4">
          {filteredBanks.map((bank) => (
            <div key={bank.id} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                <div className="flex items-start gap-5">
                  <div className={`p-4 rounded-2xl text-white shadow-lg ${bank.color}`}>
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black dark:text-white leading-tight">{bank.name}</h3>
                    <p className="text-indigo-600 font-bold text-xs mt-1 uppercase tracking-wide">{bank.branch} • {bank.type}</p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                        <MapPin size={16} className="text-slate-400" /> {bank.address}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                        <Clock size={16} className="text-slate-400" /> {bank.hours}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a 
                    href={`tel:${bank.contact}`}
                    className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl hover:bg-indigo-50 transition-all active:scale-90"
                  >
                    <Phone size={20} />
                  </a>
                  <a 
                    href={bank.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
                  >
                    ম্যাপে দেখুন <ExternalLink size={16} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Info Note */}
        <div className="mt-12 p-6 bg-indigo-50 dark:bg-indigo-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 flex items-center gap-4">
          <Wallet className="text-indigo-600 shrink-0" size={24} />
          <p className="text-xs font-bold text-indigo-800 dark:text-indigo-300 leading-relaxed">
            সরকারি ছুটির দিনে ব্যাংকিং কার্যক্রম বন্ধ থাকে। সঠিক লেনদেনের জন্য আপনার নির্দিষ্ট ব্রাঞ্চের সময়সূচী যাচাই করে নিন।
          </p>
        </div>

      </div>
    </div>
  );
};

export default ShamshernagarBankDirectory;