import React, { useState } from 'react';
import { 
  Search, MapPin, Users, HeartHandshake, 
  ExternalLink, Building, Info, ShieldCheck, 
  HandHeart, Landmark
} from 'lucide-react';

const NGODirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const ngos = [
    {
      id: 1,
      name: "ব্র্যাক (BRAC)",
      branch: "শমশেরনগর শাখা",
      location: "শমশেরনগর-শ্রীমঙ্গল রোড",
      focus: "ক্ষুদ্র ঋণ, শিক্ষা ও স্বাস্থ্য সেবা",
      contact: "অফিস আওয়ারে যোগাযোগ করুন",
      mapLink: "https://www.google.com/maps/search/BRAC+Shamshernagar",
      type: "জাতীয় এনজিও",
      color: "bg-orange-600"
    },
    {
      id: 2,
      name: "আশা (ASA)",
      branch: "শমশেরনগর ব্রাঞ্চ",
      location: "চৌমোহনা বাজার সংলগ্ন, শমশেরনগর",
      focus: "ক্ষুদ্র ঋণ ও সঞ্চয় কার্যক্রম",
      contact: "অফিস আওয়ারে যোগাযোগ করুন",
      mapLink: "https://www.google.com/maps/search/ASA+NGO+Shamshernagar",
      type: "ক্ষুদ্র ঋণ বিশেষজ্ঞ",
      color: "bg-blue-700"
    },
    {
      id: 3,
      name: "বুড়ো বাংলাদেশ (BURO Bangladesh)",
      branch: "শমশেরনগর ইউনিট",
      location: "স্টেশন রোড এলাকা, শমশেরনগর",
      focus: "আর্থ-সামাজিক উন্নয়ন ও ঋণ সেবা",
      contact: "০১৭XXXXXXXX",
      mapLink: "https://www.google.com/maps/search/BURO+Bangladesh+Shamshernagar",
      type: "উন্নয়ন সংস্থা",
      color: "bg-emerald-600"
    },
    {
      id: 4,
      name: "গ্রামীণ ব্যাংক (Grameen Bank)",
      branch: "শমশেরনগর শাখা",
      location: "শমশেরনগর",
      focus: "ক্ষুদ্র ঋণ ও গ্রামীণ উন্নয়ন",
      contact: "০১৫XXXXXXXX",
      mapLink: "https://www.google.com/maps/search/Grameen+Bank+Shamshernagar",
      type: "বিশেষায়িত ব্যাংক/এনজিও",
      color: "bg-red-600"
    }
  ];

  const filteredNgos = ngos.filter(ngo => 
    ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    ngo.focus.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-10 px-4  font-bangla">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-600 rounded-3xl text-white mb-4 shadow-xl shadow-indigo-500/20">
            <HeartHandshake size={35} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">এনজিও (NGO) ডিরেক্টরি</h1>
          <p className="text-slate-500 font-medium text-sm">শমশেরনগর এলাকায় কর্মরত উন্নয়ন সংস্থাসমূহ</p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <input 
            type="text"
            placeholder="এনজিও-র নাম বা কাজের ধরণ..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-indigo-500/10 font-bold transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* NGO Cards List */}
        <div className="space-y-4">
          {filteredNgos.map((ngo) => (
            <div key={ngo.id} className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                <div className="flex items-start gap-5">
                  <div className={`p-4 rounded-2xl text-white shadow-lg ${ngo.color}`}>
                    <Building size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black dark:text-white leading-tight">{ngo.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-md">
                        {ngo.type}
                      </span>
                      <span className="text-[10px] font-black text-indigo-600">{ngo.branch}</span>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                        <MapPin size={14} className="text-red-500" /> {ngo.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                        <Users size={14} className="text-indigo-500" /> <span className="font-bold">কাজের ক্ষেত্র:</span> {ngo.focus}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <a 
                    href={ngo.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-indigo-700 text-white rounded-xl font-black text-xs hover:shadow-lg transition-all active:scale-95"
                  >
                    অফিস লোকেশন <ExternalLink size={14} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Note Area */}
        <div className="mt-10 p-6 bg-indigo-50 dark:bg-indigo-950/20 rounded-3xl border border-indigo-100 dark:border-indigo-900/40 flex items-start gap-4">
          <div className="p-2 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
             <Info className="text-indigo-600" size={20} />
          </div>
          <div>
            <h4 className="font-black text-indigo-900 dark:text-indigo-300 text-sm">জরুরি তথ্য:</h4>
            <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              এনজিও-র ঋণ বা অন্যান্য সেবার জন্য সরাসরি তাদের অফিসে যোগাযোগ করুন। লেনদেনের আগে সংস্থার বৈধতা এবং শর্তাবলী ভালো করে যাচাই করে নিন।
            </p>
          </div>
        </div>
 {/* Bottom 2 Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">

    {/* Card 1 */}
    <div className="p-5 bg-blue-50 dark:bg-blue-950/20 rounded-3xl border border-blue-100 dark:border-blue-900/30">
      <p className="text-[11px] font-bold text-blue-700 dark:text-blue-400 leading-relaxed">
        সুদভিত্তিক ঋণ ভবিষ্যতে বড় আর্থিক চাপ তৈরি করে। চেষ্টা করুন সুদবিহীন বা স্বল্প চার্জের লোন নিতে, যাতে আপনার আয়ের ভারসাম্য ঠিক থাকে।
      </p>
    </div>

    {/* Card 2 */}
    <div className="p-5 bg-green-50 dark:bg-green-950/20 rounded-3xl border border-green-100 dark:border-green-900/30">
      <p className="text-[11px] font-bold text-green-700 dark:text-green-400 leading-relaxed">
        সুদবিহীন ঋণ আপনার ব্যবসা ও ব্যক্তিগত জীবনে স্বস্তি আনে। অপ্রয়োজনীয় সুদ পরিশোধ না করে সঠিক পরিকল্পনায় এগিয়ে যান।
      </p>
    </div>

  </div>
      </div>
    </div>
  );
};

export default NGODirectory;