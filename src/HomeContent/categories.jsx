import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainCategories() {
  const navigate = useNavigate();

  const mainCategories = [
    { id: 1, title: 'ইসলামিক', icon: '/mosjid.svg', path: '/pages/islamic/Islamic' },
    { id: 2, title: 'শিক্ষা', icon: '/edu.svg', path: '/pages/Study/study' },
    { id: 3, title: 'স্বাস্থ্য', icon: '/health.svg', path: '/pages/health/healthhome' },
    { id: 4, title: 'কৃষি', icon: '/farmer.svg', path: '/pages/agriculture/krishihome' },
    { id: 5, title: 'আইটি সার্ভিস', icon: '/it.svg', path: '/pages/it/ithome' },
    { id: 6, title: 'পরিবহন', icon: '/transport.svg', path: '/pages/transport/transporthome' },
    { id: 7, title: 'মার্কেট', icon: '/shop.svg', path: '/pages/market/markethome' },
    { id: 9, title: 'মিডিয়া', icon: '/media.svg', path: '/pages/media/mediahome' },
    { id: 10, title: 'প্রবাসী', icon: '/plane.svg', path: '/pages/probashi/probashihome' },
    { id: 11, title: 'শ্রমিক', icon: '/worker.svg', path: '/pages/worker/shromic' },
    { id: 12, title: 'উদ্যোক্তা', icon: '/idea.svg', path: '/pages/uddokta/uddokta'},
    { id: 13, title: 'খেলাধুলা', icon: '/sports.svg', path: '/pages/sports/sportshome' },
    { id: 15, title: 'পর্যটন', icon: '/travel.svg', path: '/pages/tourism/tourismhome' },
    { id: 16, title: 'গ্রাম', icon: '/unity.svg', path: '/pages/village/villagehome'},
    { id: 17, title: 'ইতিহাস', icon: '/history.svg', path: '/pages/history/historyhome' },
    { id: 18, title: 'ইউনিয়ন', icon: '/union.svg', path: '/pages/union/unionhome' },
    { id: 19, title: 'ফাইন্যান্স', icon: '/card.svg', path: '/pages/finance/financehome' },
  ];

  return (
    <div className="py-10 px-0 max-w-7xl mx-auto selection:bg-blue-100">
      {/* হেডার সেকশন - ক্লিন লুক */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-10 bg-blue-600 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white font-bangla tracking-tight">
            সকল ক্যাটাগরি
          </h2>
        </div>
        <div className="hidden sm:block flex-grow ml-6 h-[1px] bg-gray-200 dark:bg-gray-800"></div>
      </div>

      {/* গ্রিড লেআউট - অপ্টিমাইজড রেসপনসিভনেস */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-5 font-bangla">
        {mainCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => navigate(cat.path)}
            className="group relative flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-gray-800/40 
                       border border-gray-100 dark:border-gray-700/60 
                       hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800
                       hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1.5 
                       transition-all duration-300 cursor-pointer overflow-hidden outline-none"
          >
            {/* আইকন কন্টেইনার - সিম্পল এবং ক্লিন */}
            <div className="relative z-10 mb-3 p-0 rounded-2xl bg-gray-50 dark:bg-gray-900/50 
                            group-hover:bg-white dark:group-hover:bg-gray-800 shadow-sm transition-colors duration-300">
              <img 
                src={cat.icon} 
                alt={cat.title} 
                className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/711/711769.png' }}
              />
            </div>
            
            {/* টেক্সট */}
            <h3 className="relative z-10 text-gray-600 dark:text-gray-300 text-[12px] sm:text-sm font-bold text-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {cat.title}
            </h3>

            {/* নিচের সূক্ষ্ম বর্ডার ইফেক্ট */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>
        ))}
      </div>
    </div>
  );
}