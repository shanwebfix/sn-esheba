import React, { useState, useEffect } from 'react';
import { 
  Calculator, DollarSign, Calendar, 
  Percent, ArrowRight, RefreshCw, 
  PieChart, Info, Landmark
} from 'lucide-react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(9);
  const [loanTerm, setLoanTerm] = useState(12);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(loanTerm);

    // EMI Calculation Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      setEmi(monthly.toFixed(0));
      setTotalPayment((monthly * calculatedPayments).toFixed(0));
      setTotalInterest((monthly * calculatedPayments - principal).toFixed(0));
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-600 rounded-3xl text-white mb-4 shadow-xl shadow-indigo-500/20">
            <Calculator size={35} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-1">লোন ক্যালকুলেটর</h1>
          <p className="text-slate-500 font-medium text-sm">সহজেই আপনার মাসিক কিস্তি (EMI) হিসাব করুন</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Inputs Section */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="space-y-6">
              
              {/* Loan Amount */}
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">লোন এর পরিমাণ (টাকা)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full py-4 pl-12 pr-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-black focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-indigo-600"
                  />
                  <Landmark className="absolute left-4 top-4 text-slate-400" size={20} />
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">সুদের হার (% বছরে)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full py-4 pl-12 pr-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-black focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-indigo-600"
                  />
                  <Percent className="absolute left-4 top-4 text-slate-400" size={20} />
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">সময়কাল (মাস)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full py-4 pl-12 pr-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl font-black focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-indigo-600"
                  />
                  <Calendar className="absolute left-4 top-4 text-slate-400" size={20} />
                </div>
              </div>

            </div>
          </div>

          {/* Results Section */}
          <div className="flex flex-col gap-4">
            
            {/* Monthly EMI Card */}
            <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-indigo-500/30 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform">
                <PieChart size={120} />
              </div>
              <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-2">আপনার মাসিক কিস্তি (EMI)</p>
              <h2 className="text-5xl font-black">৳ {Number(emi).toLocaleString('bn-BD')}</h2>
            </div>

            {/* Stats Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">মোট সুদ</p>
                <p className="text-xl font-black text-pink-600">৳ {Number(totalInterest).toLocaleString('bn-BD')}</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">মোট পরিশোধ</p>
                <p className="text-xl font-black text-emerald-600">৳ {Number(totalPayment).toLocaleString('bn-BD')}</p>
              </div>
            </div>

{/* Cards Section */}
<div className="mt-2 space-y-3">

  {/* Top Info Card */}
  <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-3xl border border-amber-100 dark:border-amber-900/30 flex items-start gap-3">
    <Info className="text-amber-600 shrink-0" size={20} />
    <p className="text-[11px] font-bold text-amber-800 dark:text-amber-400 leading-relaxed">
      এটি একটি আনুমানিক হিসাব। ব্যাংক বা এনজিও-র নিয়ম অনুযায়ী প্রসেসিং ফি বা অন্যান্য চার্জ যোগ হতে পারে। সঠিক তথ্যের জন্য সংশ্লিষ্ট প্রতিষ্ঠানের সাথে কথা বলুন।
    </p>
  </div>

  {/* Bottom 2 Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

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
        </div>

      </div>
    </div>
  );
};

export default LoanCalculator;