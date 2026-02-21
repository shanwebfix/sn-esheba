import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { Car, Bus, Truck, Fuel, Wrench, Shield, PhoneForwarded, Wallet, ShieldAlert,Share2, UserCheck, Users, Bike, Package, Navigation, Clock, Phone, Zap, Wind, Battery, TrainFront, MapPin } from 'lucide-react'; 

const TransportationServices = () => {
  const vehicleCategories = [
    { 
      id: 1, 
      title: 'সিএনজি সার্ভিস', 
      path: '/transport/cng', 
      icon: <Wind size={32} />, 
      color: 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 border border-green-200 dark:border-green-800/30',
      description: 'সিএনজি কিট ফিটিং ও সার্ভিসিং',
      badge: 'পার্সোনাল/কমার্শিয়াল',
      stats: '২৪/৭ সার্ভিস'
    },
    { 
      id: 2, 
      title: 'কার রেন্টাল', 
      path: '/transport/car', 
      icon: <Car size={32} />, 
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 border border-blue-200 dark:border-blue-800/30',
      description: 'ঘন্টা/দিন/মাস ভিত্তিক কার রেন্ট',
      badge: 'সেডান/এসইউভি',
      stats: '৫০+ গাড়ি'
    },
    { 
      id: 3, 
      title: 'বাস সার্ভিস', 
      path: '/transport/bus', 
      icon: <Bus size={32} />, 
      color: 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400 border border-red-200 dark:border-red-800/30',
      description: 'শহর ও আন্তঃজেলা বাস সার্ভিস',
      badge: 'এসি/নন-এসি',
      stats: '১০০+ রুট'
    },
    { 
      id: 4, 
      title: 'ট্রাক রেন্টাল', 
      path: '/transport/truck', 
      icon: <Truck size={32} />, 
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800/30',
      description: 'মালামাল পরিবহনের জন্য ট্রাক',
      badge: '৩-১০ টন',
      stats: 'ফ্ল্যাটবেড/কন্টেইনার'
    },
      {
      id: 5, 
      title: 'ট্রেইন সার্ভিস', 
      path: '/transport/train', 
      icon: <TrainFront size={32} />, 
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800/30',
      description: 'মালামাল পরিবহনের জন্য ট্রাক',
      badge: '৩-১০ টন',
      stats: 'ফ্ল্যাটবেড/কন্টেইনার'
    },
    { 
      id: 6, 
      title: 'বাইক রাইডার', 
      path: '/transport/bike', 
      icon: <Bike size={32} />, 
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800/30',
      description: 'মালামাল পরিবহনের জন্য ট্রাক',
      badge: '৩-১০ টন',
      stats: 'ফ্ল্যাটবেড/কন্টেইনার'
    }
  ];

  const supportServices = [
    { 
      id: 5, 
      title: 'মেকানিক্যাল সার্ভিস', 
      path: '/transport/mechanical-service', 
      icon: <Wrench size={32} />, 
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 border border-purple-200 dark:border-purple-800/30',
      description: 'গাড়ি মেরামত ও রক্ষণাবেক্ষণ',
      badge: 'সব ব্র্যান্ড',
      stats: 'এক্সপার্ট টেকনিশিয়ান'
    },
    { 
      id: 6, 
      title: 'ফুয়েল স্টেশন', 
      path: '/transport/fuel', 
      icon: <Fuel size={32} />, 
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400 border border-orange-200 dark:border-orange-800/30',
      description: 'পেট্রোল, ডিজেল, সিএনজি সরবরাহ',
      badge: '২৪/৭ খোলা',
      stats: 'মূল্য তালিকা'
    },
    { 
      id: 7, 
      title: 'ইলেকট্রিক ভেহিকেল', 
      path: '/transport/parts', 
      icon: <Battery size={32} />, 
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400 border border-teal-200 dark:border-teal-800/30',
      description: 'ইলেকট্রিক কার ও বাইক সার্ভিস',
      badge: 'চার্জিং স্টেশন',
      stats: 'গ্রিন ট্রান্সপোর্ট'
    },
    { 
      id: 8, 
      title: 'ভেহিকেল ইন্স্যুরেন্স', 
      path: '/vehicle-insurance', 
      icon: <Shield size={32} />, 
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/30',
      description: 'গাড়ি ইন্স্যুরেন্স ও দাবি প্রক্রিয়া',
      badge: 'বীমা কোম্পানি',
      stats: 'ক্লেইম সহায়তা'
    }
  ];

  
  
  return (
    <div className="min-h-screen  transition-all duration-300 py-12 px-4">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              পরিবহন ও যানবাহন সেবা
            </h2>
            <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            সকল যানবাহন সমাধান
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            সিএনজি থেকে ট্রাক, রেন্টাল থেকে মেরামত - যেকোনো যানবাহন সংক্রান্ত সেবা এক জায়গায়
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">১০০+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">যানবাহন ফ্লীট</div>
          </div>
          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">২৪/৭</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">সার্ভিস সহায়তা</div>
          </div>
          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">৫০+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">সার্ভিস পয়েন্ট</div>
          </div>
          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">আপৎকালীন</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">রোডসাইড সহায়তা</div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-blue-500/10 via-green-500/10 to-blue-500/10 dark:from-blue-500/5 dark:via-green-500/5 dark:to-blue-500/5 rounded-2xl p-6 mb-12 border border-blue-200/50 dark:border-blue-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                জরুরি গাড়ি প্রয়োজন? <span className="text-blue-600 dark:text-blue-400">এখনই কল করুন</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                ২৪/৭ হটলাইন সার্ভিস - যেকোনো সময় যেকোনো স্থানে
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2">
                <Phone size={18} />
                কল করুন ০১৬XX-XXXXXX
              </button>
              <button className="px-6 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                অনলাইন বুকিং
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Vehicle Categories */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            প্রধান যানবাহন সেবা
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {vehicleCategories.map((item) => (
            <TransportCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Support Services */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            সহায়ক ও রক্ষণাবেক্ষণ সেবা
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {supportServices.map((item) => (
            <TransportCard key={item.id} item={item} />
          ))}
        </div>
      </div>

     

      

      {/* সতর্কতা ও টিপস */}
<div className="max-w-4xl mx-auto mt-10 px-0">
  <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-gray-900 border border-red-100 dark:border-red-900/30 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
    <div className="text-center mb-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
        <ShieldAlert size={14} /> Safety First
      </div>
      <h3 className="text-2xl md:text-3xl font-black text-gray-800 dark:text-white mb-3 font-bangla">
        নিরাপদ ভ্রমণের কিছু জরুরি টিপস
      </h3>
      <p className="text-gray-600 dark:text-gray-400 font-medium">
        আপনার যাত্রা আরামদায়ক ও নিরাপদ করতে নিচের বিষয়গুলো খেয়াল রাখুন
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* টিপস ১ */}
      <div className="flex gap-4 p-4 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <div className="shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600">
          <UserCheck size={24} />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white mb-1 font-bangla">ড্রাইভার যাচাই করুন</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">যাত্রার শুরুতে ড্রাইভারের নাম এবং গাড়ির নাম্বার প্লেট মিলিয়ে নিন।</p>
        </div>
      </div>

      {/* টিপস ২ */}
      <div className="flex gap-4 p-4 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <div className="shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600">
          <Share2 size={24} />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white mb-1 font-bangla">লোকেশন শেয়ার করুন</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">যাত্রার সময় আপনার লাইভ লোকেশন পরিচিত কাউকে হোয়াটসঅ্যাপে পাঠিয়ে রাখুন।</p>
        </div>
      </div>

      {/* টিপস ৩ */}
      <div className="flex gap-4 p-4 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <div className="shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600">
          <Wallet size={24} />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white mb-1 font-bangla">ভাড়া নিশ্চিত করুন</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">গাড়িতে ওঠার আগেই গন্তব্য ও আনুমানিক ভাড়া আলোচনা করে নিশ্চিত হয়ে নিন।</p>
        </div>
      </div>

      {/* টিপস ৪ */}
      <div className="flex gap-4 p-4 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
        <div className="shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-red-600">
          <PhoneForwarded size={24} />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white mb-1 font-bangla">জরুরি যোগাযোগ</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">যেকোনো সমস্যায় জাতীয় জরুরি সেবা ৯৯৯ অথবা আমাদের হেল্পলাইনে কল দিন।</p>
        </div>
      </div>
    </div>

    {/* Footer Note */}
    <div className="mt-8 text-center pt-6 border-t border-gray-100 dark:border-gray-800">
      <p className="text-sm text-gray-500 font-medium">
        সতর্ক থাকুন, নিরাপদ থাকুন। <span className="text-red-500">♥</span> শমশেরনগর পরিবহন সেবা
      </p>
    </div>
  </div>
</div>
    </div>
  );
};

// Transport Card Component
const TransportCard = ({ item }) => (
  <Link 
    to={item.path} 
    className="group relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900/60 dark:to-gray-900/20 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-400/50 dark:hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-gray-900/30 flex flex-col text-center no-underline overflow-hidden hover:-translate-y-1"
  >
    {/* Badge */}
    <div className="absolute top-1 right-2">
      <span className="text-[10px] font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
        {item.badge}
      </span>
    </div>
    
    {/* Icon */}
    <div className={`mt-5 p-4 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 mx-auto ${item.color}`}>
      {item.icon}
    </div>
    
    {/* Content */}
    <div>
      <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-2">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-tight">
        {item.description}
      </p>
      
      {/* Stats */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
          {item.stats}
        </span>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-800">
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:via-green-500 transition-all duration-500 rounded-full"></div>
    </div>
  </Link>
);

export default TransportationServices;