import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users2, Image as ImageIcon, ArrowLeft, History, Landmark, ScrollText, ChevronRight } from 'lucide-react';

const HistoryPage = () => {
  const navigate = useNavigate();

  const historyCategories = [
    {
      id: 1,
      title: 'শমসেরনগর এর সূচনা',
      path: '/pages/history/intro',
      icon: <BookOpen size={24} />,
      desc: 'এলাকার নামকরণ ও প্রাচীন ঐতিহ্যের সূচনা জানুন',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'গুণী মানুষ',
      path: '/pages/history/personalities',
      icon: <Users2 size={24} />,
      desc: 'এলাকার বিখ্যাত ব্যক্তিত্ব ও কৃতি সন্তানদের পরিচিতি',
      color: 'bg-orange-500'
    },
    {
      id: 3,
      title: 'পুরানো ছবি',
      path: '/pages/history/photos',
      icon: <ImageIcon size={24} />,
      desc: 'স্মৃতির পাতায় শমসেরনগর এর দুর্লভ ছবির গ্যালারি',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'ঐতিহাসিক স্থাপনা',
      path: '/pages/history/landmarks',
      icon: <Landmark size={24} />,
      desc: 'প্রাচীন দালান, বিমানবন্দর ও দর্শনীয় স্থানের কথা',
      color: 'bg-emerald-500'
    },
    {
      id: 5,
      title: 'মুক্তিযুদ্ধের স্মৃতি',
      path: '/pages/history/war',
      icon: <ScrollText size={24} />,
      desc: '১৯৭১ সালের শমসেরনগর যুদ্ধের বীরত্বগাথা',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen  text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Header */}
      <div className="sticky top-0 z-30 p-6 border-b border-gray-200 dark:border-gray-800  backdrop-blur-md flex items-center gap-4">

        <div>
          <h1 className="text-lg font-black font-bangla">এলাকার ইতিহাস</h1>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
            <History size={10} /> Historical Archive
          </p>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="p-5">
        <div className="p-8 rounded-[2.5rem] relative overflow-hidden bg-blue-600 dark:bg-blue-600/20">
          <div className="relative z-10">
            <h2 className="text-2xl font-black text-white dark:text-blue-400 font-bangla mb-2">ঐতিহ্যে শমসেরনগর</h2>
            <p className="text-blue-100 dark:text-blue-300/80 text-xs font-medium font-bangla leading-relaxed">
              আমাদের গৌরবময় অতীত এবং হারানো দিনের স্মৃতি এখন ডিজিটাল আর্কাইভে।
            </p>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="px-5 pb-10 space-y-4">
        {historyCategories.map((cat) => (
          <div 
            key={cat.id}
            onClick={() => navigate(cat.path)}
            className="group flex items-center gap-4 p-4 rounded-[2rem] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:shadow-lg dark:hover:bg-gray-800/50 transition-all active:scale-[0.97]"
          >
            {/* Icon Container */}
            <div className={`${cat.color} p-4 rounded-2xl text-white shadow-lg shadow-${cat.color.split('-')[1]}-500/30 group-hover:scale-110 transition-transform`}>
              {cat.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-[15px] font-black font-bangla mb-0.5">{cat.title}</h3>
              <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 font-bangla leading-tight line-clamp-1">
                {cat.desc}
              </p>
            </div>

            {/* Action Arrow */}
            <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 group-hover:text-blue-500 transition-colors">
              <ChevronRight size={18} strokeWidth={3} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="py-10 text-center opacity-50">
        <p className="text-[10px] font-black font-bangla text-gray-400 uppercase tracking-widest">
          শমসেরনগর ই-সেবা ইতিহাস সংগ্রহশালা
        </p>
      </div>
    </div>
  );
};

export default HistoryPage;