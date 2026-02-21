import React from 'react'
import { 
  Zap, Droplets, Hammer, Paintbrush, Wrench, 
  Fan, HardHat, ChevronRight, Star, ShieldCheck, 
  Users, Handshake, Info, BookOpen
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Workers() {
  const navigate = useNavigate()

  const workerItems = [
    { id: 1, title: 'ইলেক্ট্রিশিয়ান', desc: 'নিরাপদ ওয়্যারিং ও ফ্যান মেরামত', icon: <Zap />, path: '/worker/electrician', color: 'bg-amber-500' },
    { id: 2, title: 'প্লাম্বার', desc: 'পাইপ ও স্যানিটারি দীর্ঘস্থায়ী সমাধান', icon: <Droplets />, path: '/worker/plumber', color: 'bg-blue-500' },
    { id: 3, title: 'রাজমিস্ত্রি', desc: 'মজবুত নির্মাণ ও আধুনিক ফিনিশিং', icon: <HardHat />, path: '/worker/mason', color: 'bg-orange-500' },
    { id: 4, title: 'রং মিস্ত্রি', desc: 'দেওয়াল ও আসবাবপত্রের নান্দনিক পেইন্ট', icon: <Paintbrush />, path: '/worker/painter', color: 'bg-pink-500' },
    { id: 5, title: 'কাঠ মিস্ত্রি', desc: 'ফার্নিচার ও রুচিশীল কাঠের কাজ', icon: <Hammer />, path: '/worker/carpenter', color: 'bg-yellow-600' },
    { id: 6, title: 'এসি ও ফ্রিজ', desc: 'দ্রুত সার্ভিসিং ও পার্টস মেরামত', icon: <Fan />, path: '/worker/freez', color: 'bg-cyan-500' },
    { id: 7, title: 'মেকানিক', desc: 'বাইক ও ইঞ্জিনের সূক্ষ্ম কারিগরি', icon: <Wrench />, path: '/transport/mechanical-service', color: 'bg-slate-600' },
  ]

  return (
    <div className="min-h-screen pb-10  font-bangla transition-colors">
      
      {/* Modern Header Section */}
      <div className="bg-white dark:bg-gray-900 px-6 pt-16 pb-10 rounded-b-[3rem] shadow-sm border-b dark:border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-xs font-bold mb-4">
            <Users size={16} />
            <span>দক্ষ কারিগর ও নির্ভরযোগ্য সেবা</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
            শ্রমিক ও কারিগরের দক্ষ হাতেই <br />
            <span className="text-orange-500 font-extrabold italic">গড়ে ওঠে নিরাপদ নীড়</span>
          </h1>
          <p className="text-slate-500 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            একজন দক্ষ শ্রমিক একটি সমাজ বা পরিবারের জন্য আশীর্বাদস্বরূপ। সঠিক কারিগর নির্বাচন আপনার কাজকে করে আরও সহজ, নিরাপদ এবং সাশ্রয়ী।
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        
        {/* Categories Grid */}
        <div className="flex items-center justify-between mb-6 px-2">
          <h3 className="text-xl font-black text-slate-800 dark:text-gray-200">সার্ভিস ক্যাটাগরি</h3>
          <span className="text-xs bg-slate-200 dark:bg-gray-800 px-3 py-1 rounded-full text-slate-500">{workerItems.length} টি সচল</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {workerItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(item.path)}
              className="group bg-white dark:bg-gray-900 p-5 rounded-[2rem] flex items-center gap-5 border border-slate-100 dark:border-gray-800 active:scale-95 transition-all shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-orange-200 dark:hover:border-orange-900"
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 group-hover:rotate-6 transition-transform`}>
                {React.cloneElement(item.icon, { size: 32 })}
              </div>

              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{item.desc}</p>
              </div>

              <div className="bg-slate-50 dark:bg-gray-800 p-2 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <ChevronRight size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* Guidelines Section (Updated UI) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Consumer Advice */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-gray-800 shadow-sm">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600 mb-5">
              <Info size={28} />
            </div>
            <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">গ্রাহকের প্রতি পরামর্শ</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-gray-400">
              <li className="flex gap-2">🔹 <span className="font-medium">যেকোনো কাজের আগে মিস্ত্রির সাথে খরচ ও সময় নিয়ে স্পষ্ট আলোচনা করে নিন।</span></li>
              <li className="flex gap-2">🔹 <span className="font-medium">মানসম্মত কাজের জন্য অভিজ্ঞ মিস্ত্রি নির্বাচন করুন, শুধুমাত্র অল্প টাকা নয়।</span></li>
              <li className="flex gap-2">🔹 <span className="font-medium">কাজের ক্ষেত্রে প্রয়োজনীয় কাঁচামাল ও নিরাপত্তা নিশ্চিত করুন।</span></li>
            </ul>
          </div>

          {/* Worker Advice */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-gray-800 shadow-sm">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-600 mb-5">
              <Handshake size={28} />
            </div>
            <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">শ্রমিকের প্রতি দিকনির্দেশনা</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-gray-400">
              <li className="flex gap-2">✅ <span className="font-medium">সততার সাথে কাজ করুন এবং গ্রাহকের আস্থার অমর্যাদা করবেন না।</span></li>
              <li className="flex gap-2">✅ <span className="font-medium">কাজের গুণমান নিশ্চিত করুন, যাতে গ্রাহক পরবর্তী কাজের জন্যও আপনার উপর নির্ভর করতে পারে।</span></li>
              <li className="flex gap-2">✅ <span className="font-medium">পেশাদারিত্ব বজায় রাখুন এবং নির্দিষ্ট সময়ে কাজ শেষ করার চেষ্টা করুন।</span></li>
            </ul>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center max-w-lg mx-auto bg-slate-100 dark:bg-gray-900/50 p-6 rounded-3xl">
           <BookOpen className="mx-auto text-slate-400 mb-3" size={32} />
           <p className="text-sm text-slate-500 dark:text-gray-400 italic">
             "শ্রমের সঠিক মূল্যায়ন ও সম্মানই পারে সমাজের ভারসাম্য রক্ষা করতে। দক্ষ কারিগর আমাদের অর্থনৈতিক উন্নয়নের অন্যতম চাবিকাঠি।"
           </p>
        </div>

      </div>
    </div>
  )
}

export default Workers;