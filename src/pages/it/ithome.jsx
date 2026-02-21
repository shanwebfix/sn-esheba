import React from 'react'; 
import { Link } from 'react-router-dom'; 
// এখানে ShieldAlert এবং CheckCircle যুক্ত করা হয়েছে
import { 
  Monitor, Smartphone, Headphones, Wrench, Printer, 
  Zap, Camera, Globe, ShieldAlert, CheckCircle, Wifi 
} from 'lucide-react'; 

const ServiceCategories = () => {
  const itCategories = [
    { 
      id: 1, 
      title: 'কম্পিউটার দোকান', 
      path: '/it/computer-shop', 
      icon: <Monitor size={32} />, 
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 border border-purple-200 dark:border-purple-800/30',
      description: 'কম্পিউটার, ল্যাপটপ, একসেসরিজ'
    },
    { 
      id: 2, 
      title: 'মোবাইল দোকান', 
      path: '/it/mobile-shop', 
      icon: <Smartphone size={32} />, 
      color: 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 border border-green-200 dark:border-green-800/30',
      description: 'মোবাইল ফোন ও আনুষাঙ্গিক'
    },
    { 
      id: 3, 
      title: 'গ্রাহক সেবা', 
      path: '/it/customer-service', 
      icon: <Headphones size={32} />, 
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800/30',
      description: '২৪/৭ সহায়তা ও সমাধান'
    },
    { 
      id: 4, 
      title: 'হার্ডওয়্যার সার্ভিস', 
      path: '/it/hardware-service', 
      icon: <Wrench size={32} />, 
      color: 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400 border border-red-200 dark:border-red-800/30',
      description: 'মেরামত ও রক্ষণাবেক্ষণ'
    },

    { 
      id: 5, 
      title: 'ইলেকট্রিক্যাল সার্ভিস', 
      path: '/it/electrical-services', 
      icon: <Zap size={32} />, 
      color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800/30',
      description: 'ইলেকট্রিক্যাল ইনস্টলেশন ও সার্ভিস'
    },
    { 
      id: 6, 
      title: 'Wi-Fi সার্ভিস', 
      path: '/it/wifi-services', 
      icon: <Wifi size={32} />, 
      color: 'bg-slate-200 text-slate-700 dark:bg-slate-600/40 dark:text-slate-300 border border-slate-200 dark:border-slate-800/30',
      description: 'সুরক্ষা ক্যামেরা ও মনিটরিং'
    },
        { 
      id: 7, 
      title: 'সিসিটিভি সার্ভিস', 
      path: '/it/cctv-services', 
      icon: <Camera size={32} />, 
      color: 'bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300 border border-slate-200 dark:border-slate-800/30',
      description: 'সুরক্ষা ক্যামেরা ও মনিটরিং'
    },
    { 
      id: 8, 
      title: 'ওয়েব ডেভেলপমেন্ট', 
      path: '/it/web-development', 
      icon: <Globe size={32} />, 
      color: 'bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-400 border border-violet-200 dark:border-violet-800/30',
      description: 'ওয়েবসাইট ও অ্যাপ্লিকেশন'
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 ">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              প্রযুক্তি ও ব্যবসায়িক সমাধান
            </h2>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            সকল সার্ভিসের সমাহার
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-bangla">
            তথ্যপ্রযুক্তি থেকে ব্যবসায়িক সব ধরনের সেবা এক জায়গায়। আপনার প্রয়োজন অনুযায়ী সঠিক সার্ভিস নির্বাচন করুন।
          </p>
        </div>
      </div>

      {/* IT Services Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white font-bangla">
            তথ্য ও প্রযুক্তি সেবাসমূহ
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {itCategories.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Footer Disclaimer Section - Fixed */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
          {/* Background Decoration */}
          <ShieldAlert className="absolute -right-4 -bottom-4 w-32 h-32 text-amber-100 dark:text-amber-900/20 -rotate-12" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-500 rounded-lg">
                <ShieldAlert className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-400">
                সেবা গ্রহণের পূর্বে সচেতনতা
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-amber-800/80 dark:text-amber-300/70 leading-relaxed font-bangla">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                <p>যেকোনো টেকনিক্যাল সার্ভিস বা পণ্য ক্রয়ের পূর্বে প্রতিষ্ঠানের বৈধতা এবং বর্তমান বাজার দর যাচাই করে নিন।</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                <p>আর্থিক লেনদেনের ক্ষেত্রে অবশ্যই মানি রিসিট সংগ্রহ করুন এবং অগ্রিম টাকা প্রদানের ক্ষেত্রে সতর্কতা অবলম্বন করুন।</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-200 dark:border-amber-900/50 text-center">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-500 italic font-bangla">
                * সঠিক সেবা ও নির্ভরযোগ্য প্রতিষ্ঠান নির্বাচন আপনার দায়িত্ব। আমরা শুধুমাত্র তথ্য প্রদান করে আপনাকে সহায়তা করি।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ item }) => (
  <Link 
    to={item.path} 
    className="group relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900/60 dark:to-gray-900/20 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-400/50 dark:hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-gray-900/30 flex flex-col items-center text-center no-underline overflow-hidden hover:-translate-y-1"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
    
    <div className={`relative p-3 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 ${item.color}`}>
      {item.icon}
    </div>
    
    <div className="relative">
      <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-2 font-bangla">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight font-bangla">
        {item.description}
      </p>
    </div>
    
    <div className="mt-4 flex items-center justify-center">
      <div className="w-6 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
      </div>
      <div className="mx-2 text-[10px] font-bold text-gray-400 group-hover:text-blue-500 transition-colors uppercase tracking-widest">
        Details
      </div>
      <div className="w-6 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full w-0 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500 delay-100"></div>
      </div>
    </div>
  </Link>
);

export default ServiceCategories;