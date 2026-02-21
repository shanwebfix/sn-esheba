import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { Sprout, Settings, Droplets, BugOff, Tablets, Dog, Wheat, Truck } from 'lucide-react'; 

const AgricultureCategory = () => {
  const agriCategories = [
    { 
      id: 1, 
      title: 'বীজ ও ফসল', 
      path: '/seeds', 
      icon: <Wheat size={36} />, 
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400 border border-orange-200 dark:border-orange-800/30'
    },
    { 
      id: 2, 
      title: 'সার ও মাটি', 
      path: '/fertilizer', 
      icon: <Tablets size={36} />, 
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30'
    },
    { 
      id: 3, 
      title: 'কৃষি যন্ত্রপাতি', 
      path: '/machinery', 
      icon: <Settings size={36} />, 
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 border border-blue-200 dark:border-blue-800/30'
    },
    { 
      id: 4, 
      title: 'সেচ ব্যবস্থা', 
      path: '/irrigation', 
      icon: <Droplets size={36} />, 
      color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/40 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/30'
    },
    { 
      id: 5, 
      title: 'কীটনাশক', 
      path: '/pesticides', 
      icon: <BugOff size={36} />, 
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400 border border-rose-200 dark:border-rose-800/30'
    },
    { 
      id: 6, 
      title: 'গবাদি পশু', 
      path: '/livestock', 
      icon: <Dog size={36} />, 
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800/30'
    },
    { 
      id: 7, 
      title: 'নার্সারি/চারা', 
      path: '/nursery', 
      icon: <Sprout size={36} />, 
      color: 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 border border-green-200 dark:border-green-800/30'
    },
    { 
      id: 8, 
      title: 'কৃষি পরিবহন', 
      path: '/transport', 
      icon: <Truck size={36} />, 
      color: 'bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300 border border-slate-200 dark:border-slate-800/30'
    }
  ];

  return (
    <div className="min-h-screen rounded-xl mb-10 bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:via-[#0A0A0A] dark:to-black transition-all duration-300 py-12 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            কৃষি সেবা
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            আপনার ফসলের সঠিক যত্ন নিন - প্রয়োজনীয় সরঞ্জাম ও পরিষেবাগুলি এক জায়গায়
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-400/20 to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-400/20 to-transparent"></div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {agriCategories.map((item) => (
            <Link 
              to={item.path} 
              key={item.id}
              className="group relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900/50 dark:to-gray-900/20 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-green-400/50 transition-all duration-300 shadow-sm hover:shadow-2xl dark:shadow-gray-900/50 flex flex-col items-center text-center no-underline overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent dark:from-green-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className={`relative p-4 rounded-xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${item.color}`}>
                {item.icon}
              </div>
              
              {/* Title */}
              <span className="relative text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 mb-3">
                {item.title}
              </span>
              
              {/* Animated Underline */}
              <div className="relative h-0.5 w-12 bg-gray-200 dark:bg-gray-700 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </div>
              
              {/* Subtle Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-green-400/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
        
        {/* Bottom Decorative Element */}
        
      </div>
    </div>
  );
};

export default AgricultureCategory;