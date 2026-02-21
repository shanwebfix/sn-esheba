import React, { useState } from 'react';
import { 
  Heart, Droplets, Moon, Utensils, 
  Activity, Sun, X, BookOpen, 
  CheckCircle, ShieldCheck 
} from 'lucide-react';

const IslamicHealthTips = () => {
  const [selectedTip, setSelectedTip] = useState(null);

  const healthTips = [
    {
      id: 1,
      title: "পরিমিত আহার",
      icon: <Utensils className="text-orange-500" />,
      short: "পেটের তিনভাগের একভাগ খাদ্য, একভাগ পানি...",
      detail: "রাসূলুল্লাহ (সা.) বলেছেন: 'মানুষের জন্য তার পিঠ সোজা রাখার মতো কয়েক লোকমা খাবারই যথেষ্ট। যদি বেশি খেতে হয় তবে পেটের এক তৃতীয়াংশ খাদ্যের জন্য, এক তৃতীয়াংশ পানির জন্য এবং বাকি এক তৃতীয়াংশ শ্বাস-প্রশ্বাসের জন্য রাখা উচিত।' (তিরমিজি)",
      color: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      id: 2,
      title: "পবিত্রতা ও ওজু",
      icon: <Droplets className="text-blue-500" />,
      short: "পরিচ্ছন্নতা ইমানের অঙ্গ। নিয়মিত ওজু করা...",
      detail: "পাঁচ ওয়াক্ত সালাতের আগে ওজু করার মাধ্যমে শরীরের গুরুত্বপূর্ণ অঙ্গগুলো নিয়মিত পরিষ্কার হয়। এটি জীবাণু থেকে মুক্ত রাখে এবং মানসিক প্রশান্তি দান করে। রাসূল (সা.) মিসওয়াক করার ওপরও অত্যন্ত গুরুত্ব দিয়েছেন যা দাঁত ও মাড়ির সুরক্ষায় অতুলনীয়।",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      id: 3,
      title: "সকাল ও রাতের ঘুম",
      icon: <Moon className="text-indigo-500" />,
      short: "এশার পরপরই ঘুমানো এবং ভোরে ওঠা সুন্নাহ...",
      detail: "রাসূল (সা.) এশার পর কথা না বলে দ্রুত ঘুমানোর পরামর্শ দিয়েছেন এবং ফজরের সময় রিযিক অন্বেষণের দোয়া করেছেন। আধুনিক বিজ্ঞান অনুযায়ী, রাতের শুরুর অংশের ঘুম শরীরের কোষ মেরামতে সবচেয়ে বেশি কার্যকর।",
      color: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    {
      id: 4,
      title: "বসে পানি পান",
      icon: <Activity className="text-emerald-500" />,
      short: "তিন নিঃশ্বাসে বসে পানি পান করা সুন্নাহ...",
      detail: "বসে পানি পান করলে তা সরাসরি পাকস্থলীতে আঘাত করে না এবং কিডনি ভালো রাখতে সাহায্য করে। রাসূল (সা.) দাঁড়িয়ে পানি পান করতে নিষেধ করেছেন এবং পানির পাত্রে নিঃশ্বাস ছাড়তে মানা করেছেন।",
      color: "bg-emerald-50 dark:bg-emerald-900/20"
    }
  ];

  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-4">
            <ShieldCheck className="text-emerald-600" size={32} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">ইসলামিক স্বাস্থ্য টিপস</h1>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">
            সুন্নাহ ভিত্তিক জীবনযাপন করুন, সুস্থ ও সবল থাকুন। কোরআন ও হাদিসের আলোকে স্বাস্থ্য সচেতনতা।
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {healthTips.map((tip) => (
            <div 
              key={tip.id} 
              onClick={() => setSelectedTip(tip)}
              className={`${tip.color} p-8 rounded-[2.5rem] border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all cursor-pointer group`}
            >
              <div className="bg-white dark:bg-slate-800 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {tip.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{tip.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {tip.short}
              </p>
              <button className="text-sm font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                বিস্তারিত পড়ুন <CheckCircle size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Quick Advice Bar */}
        <div className="mt-16 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="bg-emerald-500 p-4 rounded-2xl">
                <Heart size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold">একটি গুরুত্বপূর্ণ সুন্নাহ</h4>
                <p className="text-slate-400 text-sm italic">"অসুস্থ হওয়ার আগে সুস্থতার গুরুত্ব দাও।"</p>
              </div>
            </div>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-emerald-50 transition-all">
              আরো জানুন
            </button>
          </div>
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <BookOpen size={150} />
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedTip && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/10">
            <button 
              onClick={() => setSelectedTip(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X size={24} />
            </button>
            
            <div className="p-10 md:p-14">
              <div className="inline-flex p-4 rounded-3xl bg-emerald-50 dark:bg-emerald-900/20 mb-6">
                {selectedTip.icon}
              </div>
              <h2 className="text-3xl font-black dark:text-white mb-6 uppercase tracking-tighter">
                {selectedTip.title}
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-emerald-500 pl-6 py-2">
                  {selectedTip.detail}
                </p>
              </div>
              <button 
                onClick={() => setSelectedTip(null)}
                className="mt-10 w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IslamicHealthTips;