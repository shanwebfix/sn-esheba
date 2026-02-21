import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronRight, Shield, User, Sparkles, 
  Trophy, Star, Target, Activity, 
  Dribbble, CircleDot, Zap, Wind,
  ArrowUpRight, Award, Users
} from 'lucide-react';

const SportsSelection = () => {
  const navigate = useNavigate();

  const clubs = [
    { 
      id: 'sc-1', 
      name: 'শমশেরনগর স্পোর্টিং ক্লাব', 
      desc: 'প্রফেশনাল ট্রেনিং ও এলিট মেম্বারশিপ',
      path: '/add-club/sc-1',
      icon: <Trophy />, 
      color: 'from-amber-400 to-orange-600',
      count: '২৫০+ মেম্বার'
    },
    { 
      id: 'sc-2', 
      name: 'শিংরাউলী ইলেভেন স্টার', 
      desc: 'রেজিস্ট্রেশন ও ট্রায়াল চলছে',
      path: '/add-club/sc-2',
      icon: <Shield />,
      color: 'from-blue-500 to-indigo-700',
      count: '১৮০+ মেম্বার'
    },
    { 
      id: 'sc-3', 
      name: 'শিংরাউলী ইয়াং স্টার', 
      desc: 'তৃণমূল খেলোয়াড় তৈরির একাডেমি',
      path: '/add-club/sc-2',
      icon: <Target />,
      color: 'from-emerald-400 to-teal-600',
      count: '১১০+ মেম্বার'
    },
  ];

  const sports = [
    { id: 'fb', name: 'ফুটবল', icon: <Dribbble size={32} />, path: '/pages/sports/football', theme: 'text-green-500', glow: 'shadow-green-500/20' },
    { id: 'cr', name: 'ক্রিকেট', icon: <CircleDot size={32} />, path: '/pages/sports/cricket', theme: 'text-blue-500', glow: 'shadow-blue-500/20' },
    { id: 'bd', name: 'ব্যাডমিন্টন', icon: <Zap size={32} />, path: '/pages/sports/badminton', theme: 'text-yellow-500', glow: 'shadow-yellow-500/20' },
    { id: 'vb', name: 'ম্যারাথন', icon: <Wind size={32} />, path: '/pages/sports/marathon', theme: 'text-orange-500', glow: 'shadow-orange-500/20' },
  ];

  return (
    <div className="min-h-screen  text-slate-900 dark:text-white font-bangla pb-24 transition-colors duration-500 relative overflow-hidden">
      
      {/* --- Floating Background Blur --- */}
      <div className="absolute top-[-5%] right-[-5%] w-72 h-72 bg-blue-600/10 dark:bg-blue-600/20 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-72 h-72 bg-purple-600/10 dark:bg-purple-600/20 blur-[100px] rounded-full animate-pulse"></div>

      <div className="max-w-md mx-auto px-6 pt-16 relative z-10">
        
        {/* --- Dynamic Header --- */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-1.5 rounded-full shadow-sm mb-6">
            <Sparkles size={14} className="text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Shamshernagar Sports Hub</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight leading-none mb-2">
            গড়বে শরীর <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400">জিতবে দেশ</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">আপনার প্রিয় খেলা এবং ক্লাবের সাথে যুক্ত হন আজই</p>
        </header>

        {/* --- Featured Clubs (Horizontal Scroll or List) --- */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-tighter text-slate-400">
              <Award size={18} className="text-blue-600" /> অফিসিয়াল ক্লাব সমূহ
            </h2>
            <div className="h-[1px] w-20 bg-slate-200 dark:bg-white/10"></div>
          </div>

          <div className="space-y-4">
            {clubs.map((club) => (
              <div 
                key={club.id}
                onClick={() => navigate(club.path)}
                className="group relative bg-white dark:bg-[#0f0f12] border border-slate-200 dark:border-white/5 p-5 rounded-[2.5rem] flex items-center gap-4 transition-all hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 active:scale-95 cursor-pointer"
              >
                {/* Gradient Icon Box */}
                <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${club.color} flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500`}>
                  {React.cloneElement(club.icon, { size: 30 })}
                </div>

                <div className="flex-1">
                  <h3 className="text-[17px] font-black leading-tight text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">
                    {club.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{club.desc}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Users size={12} className="text-blue-500" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{club.count}</span>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-white/5 p-2.5 rounded-full text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Modern Player Category Grid --- */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Activity size={18} className="text-blue-600" />
            <h2 className="text-sm font-black uppercase tracking-tighter text-slate-400">প্লেয়ার ক্যাটাগরি</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {sports.map((sport) => (
              <button
                key={sport.id}
                onClick={() => navigate(sport.path)}
                className={`group relative h-44 rounded-[2.5rem] bg-white dark:bg-[#0f0f12] border border-slate-200 dark:border-white/5 flex flex-col items-center justify-center transition-all duration-500 hover:border-blue-500/40 shadow-sm hover:shadow-xl ${sport.glow} active:scale-95 overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                  <div className="absolute top-0 left-0 w-full h-full transform -rotate-12 scale-150 border-[20px] border-slate-500 rounded-full"></div>
                </div>

                <div className={`${sport.theme} mb-3 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500`}>
                  {sport.icon}
                </div>
                
                <h3 className="text-base font-black text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors">
                  {sport.name}
                </h3>
                
                <div className="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[9px] font-black text-blue-500 dark:text-blue-400 uppercase">View All</span>
                  <ChevronRight size={10} className="text-blue-500" />
                </div>

                {/* Bottom Active Bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-t-full group-hover:w-20 transition-all duration-500"></div>
              </button>
            ))}
          </div>
        </section>

        {/* --- Bottom Community Note --- */}
        <div className="mt-12 p-6 bg-blue-600/5 dark:bg-white/5 rounded-[2rem] border border-blue-100 dark:border-white/5 text-center">
          <Star className="mx-auto text-blue-600 mb-3" size={24} />
          <p className="text-xs font-bold text-slate-600 dark:text-slate-400 leading-relaxed italic">
            "প্রতিভা লুকিয়ে থাকে গ্রামেই, আমাদের লক্ষ্য সেই প্রতিভাকে বিশ্বমঞ্চে নিয়ে যাওয়া।"
          </p>
        </div>

      </div>
    </div>
  );
};

export default SportsSelection;