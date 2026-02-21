import React, { useState, useEffect } from 'react';
import { Wallet, Calculator, Coins, Landmark, Briefcase, Info, RefreshCcw } from 'lucide-react';

const ZakatCalculator = () => {
  // ইনপুট স্টেট
  const [cash, setCash] = useState('');
  const [gold, setGold] = useState('');
  const [silver, setSilver] = useState('');
  const [business, setBusiness] = useState('');
  const [debts, setDebts] = useState('');
  const [totalZakat, setTotalZakat] = useState(0);

  // নিসাব মূল্য (২০২৬ সালের আনুমানিক হিসেবে ৫২.৫ তোলা রূপার দাম)
  const nisabThreshold = 85000; // এটি পরিবর্তনযোগ্য

  const calculateZakat = () => {
    const totalAssets = 
      (Number(cash) || 0) + 
      (Number(gold) || 0) + 
      (Number(silver) || 0) + 
      (Number(business) || 0);
    
    const netAssets = totalAssets - (Number(debts) || 0);
    
    if (netAssets >= nisabThreshold) {
      setTotalZakat(netAssets * 0.025); // ২.৫% জাকাত
    } else {
      setTotalZakat(0);
    }
  };

  const resetAll = () => {
    setCash(''); setGold(''); setSilver(''); setBusiness(''); setDebts(''); setTotalZakat(0);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="bg-indigo-700 rounded-[2.5rem] p-10 text-white text-center mb-10 shadow-xl">
          <Calculator className="mx-auto mb-4 opacity-50" size={48} />
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">জাকাত ক্যালকুলেটর</h1>
          <p className="text-indigo-100 mt-2 italic font-medium">আপনার সম্পদের সঠিক হিসাব করুন এবং জাকাত প্রদান করুন</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Input Section */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
            <h3 className="text-xl font-bold dark:text-white flex items-center gap-2 mb-4">
              <Wallet className="text-indigo-600" /> সম্পদের বিবরণ (টাকায়)
            </h3>

            <div>
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">নগদ টাকা (ব্যাংক ও হাতে)</label>
              <input 
                type="number" value={cash} onChange={(e) => setCash(e.target.value)}
                placeholder="0.00" className="w-full bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl outline-none dark:text-white border border-transparent focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">স্বর্ণের বর্তমান মূল্য</label>
                <input 
                  type="number" value={gold} onChange={(e) => setGold(e.target.value)}
                  placeholder="0.00" className="w-full bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl outline-none dark:text-white border border-transparent focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">রূপার বর্তমান মূল্য</label>
                <input 
                  type="number" value={silver} onChange={(e) => setSilver(e.target.value)}
                  placeholder="0.00" className="w-full bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl outline-none dark:text-white border border-transparent focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">ব্যবসায়িক পণ্য/বিনিয়োগ</label>
              <input 
                type="number" value={business} onChange={(e) => setBusiness(e.target.value)}
                placeholder="0.00" className="w-full bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl outline-none dark:text-white border border-transparent focus:border-indigo-500"
              />
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <label className="text-xs font-black text-red-400 uppercase tracking-widest block mb-2">ঋণ/দেনা (বাদ যাবে)</label>
              <input 
                type="number" value={debts} onChange={(e) => setDebts(e.target.value)}
                placeholder="0.00" className="w-full bg-red-50 dark:bg-red-900/10 p-4 rounded-2xl outline-none dark:text-white border border-transparent focus:border-red-500"
              />
            </div>

            <div className="flex gap-3">
              <button 
                onClick={calculateZakat}
                className="flex-1 bg-indigo-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
              >
                হিসাব করুন
              </button>
              <button 
                onClick={resetAll}
                className="p-5 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-2xl hover:bg-slate-200 transition-all"
              >
                <RefreshCcw size={24} />
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex flex-col gap-6">
            <div className="bg-indigo-900 rounded-[2.5rem] p-10 text-white flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-10 opacity-10"><Coins size={120} /></div>
              <p className="text-sm font-bold text-indigo-300 uppercase tracking-[0.3em] mb-4">আপনার মোট জাকাত</p>
              <h2 className="text-6xl font-black mb-4">
                ৳ {totalZakat.toLocaleString('bn-BD')}
              </h2>
              <div className="bg-indigo-800/50 px-6 py-2 rounded-full text-xs font-bold border border-indigo-700">
                মোট সম্পদের ২.৫% হার
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800">
              <h4 className="flex items-center gap-2 font-black text-sm uppercase tracking-widest text-slate-500 mb-4">
                <Info size={16} /> জাকাতের নিয়মাবলি
              </h4>
              <ul className="space-y-3">
                {[
                  'নিসাব পরিমাণ সম্পদ ১ বছর মালিকানায় থাকলে জাকাত ফরজ হয়।',
                  'ঋণ বা দেনা থাকলে তা মোট সম্পদ থেকে বাদ দিতে হবে।',
                  'ব্যবহৃত গয়না বা সম্পদের ওপর জাকাত প্রযোজ্য (মতামত ভেদে)।',
                  'নিসাব পরিমাণ: বর্তমান বাজার দরে ৫২.৫ তোলা রূপার সমমূল্য।'
                ].map((note, i) => (
                  <li key={i} className="text-xs font-medium text-slate-600 dark:text-slate-400 flex gap-2 leading-relaxed">
                    <span className="text-indigo-500 font-bold">•</span> {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ZakatCalculator;