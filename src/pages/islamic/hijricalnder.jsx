import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Moon, Sun, Calendar as CalendarIcon } from 'lucide-react';

const FullHijriCalendar = () => {
  const [viewDate, setViewDate] = useState(new Date());

  // ইংরেজি তারিখ থেকে বাংলা ও হিজরি মাসের নাম বের করার ফাংশন
  const getExtendedInfo = (date) => {
    const month = date.getMonth();
    const year = date.getFullYear();

    // ২০২৬ সালের জন্য হিজরি মাসের ডাটা (চাঁদ অনুযায়ী ১-২ দিন কমবেশি হতে পারে)
    const hijriMonths = [
      "রজব/শাবান", "শাবান/রমজান", "রমজান/শাওয়াল", "শাওয়াল/জিলকদ", 
      "জিলকদ/জিলহজ", "জিলহজ/মুহাররম", "মুহাররম/সফর", "সফর/রবিউল আউয়াল", 
      "রবিউল আউয়াল/সানি", "রবিউল সানি/জমাদিউল আউয়াল", "জমাদিউল আউয়াল/সানি", "জমাদিউল সানি/রজব"
    ];

    // বাংলা মাসের ডাটা
    const banglaMonths = [
      "পৌষ/মাঘ", "মাঘ/ফাল্গুন", "ফাল্গুন/চৈত্র", "চৈত্র/বৈশাখ", 
      "বৈশাখ/জ্যৈষ্ঠ", "জ্যৈষ্ঠ/আষাঢ়", "আষাঢ়/শ্রাবণ", "শ্রাবণ/ভাদ্র", 
      "ভাদ্র/আশ্বিন", "আশ্বিন/কার্তিক", "কার্তিক/অগ্রহায়ণ", "অগ্রহায়ণ/পৌষ"
    ];

    return {
      hijriMonth: hijriMonths[month] + " ১৪৪৭/৪৮",
      banglaMonth: banglaMonths[month] + " ১৪৩২/৩৩"
    };
  };

  const { hijriMonth, banglaMonth } = getExtendedInfo(viewDate);

  // ক্যালেন্ডার ডেইস ক্যালকুলেশন
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const currentYear = viewDate.getFullYear();
  const currentMonthName = viewDate.toLocaleDateString('bn-BD', { month: 'long' });

  return (
    <div className="min-h-screen  p-4 md:p-10 flex flex-col items-center">
      
      {/* Header Info */}
      <div className="w-full max-w-4xl mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-emerald-600 p-6 rounded-[2rem] text-white flex items-center gap-4 shadow-xl">
          <Moon size={32} className="text-emerald-200" />
          <div>
            <p className="text-[10px] font-black uppercase opacity-80 tracking-widest">হিজরি মাস</p>
            <h2 className="text-xl font-black">{hijriMonth}</h2>
          </div>
        </div>
        <div className="bg-orange-600 p-6 rounded-[2rem] text-white flex items-center gap-4 shadow-xl">
          <Sun size={32} className="text-orange-200" />
          <div>
            <p className="text-[10px] font-black uppercase opacity-80 tracking-widest">বাংলা মাস</p>
            <h2 className="text-xl font-black">{banglaMonth}</h2>
          </div>
        </div>
      </div>

      {/* Main Calendar Card */}
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="p-8 md:p-12">
          
          {/* Calendar Controller */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="text-3xl font-black dark:text-white uppercase tracking-tighter">
                {currentMonthName} {currentYear.toLocaleString('bn-BD', {useGrouping: false})}
              </h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">পূর্ণাঙ্গ ২০২৬ ক্যালেন্ডার</p>
            </div>
            <div className="flex gap-4">
              <button onClick={handlePrevMonth} className="p-4 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:text-white rounded-2xl transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={handleNextMonth} className="p-4 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:text-white rounded-2xl transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Days Week Header */}
          <div className="grid grid-cols-7 mb-6">
            {['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্র', 'শনি'].map((day, idx) => (
              <div key={day} className={`text-center text-[11px] font-black uppercase tracking-widest ${idx === 5 ? 'text-red-500' : 'text-slate-400'}`}>
                {day}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-3">
            {/* Empty Slots for First Week */}
            {[...Array(firstDayOfMonth)].map((_, i) => (
              <div key={`empty-${i}`} className="h-16 md:h-24"></div>
            ))}

            {/* Actual Days */}
            {[...Array(daysInMonth(viewDate.getFullYear(), viewDate.getMonth()))].map((_, i) => {
              const day = i + 1;
              const isToday = new Date().getDate() === day && new Date().getMonth() === viewDate.getMonth() && new Date().getFullYear() === viewDate.getFullYear();
              
              return (
                <div 
                  key={day} 
                  className={`h-16 md:h-24 flex flex-col items-center justify-center rounded-[1.5rem] border transition-all relative group
                    ${isToday 
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg z-10' 
                      : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-emerald-500 dark:text-slate-300'}`}
                >
                  <span className="text-xl font-black">{day.toLocaleString('bn-BD')}</span>
                  
                  {/* Hijri/Bangla Sub-date (Approximate) */}
                  <div className="flex gap-2 mt-1">
                    <span className={`text-[9px] font-bold ${isToday ? 'text-emerald-200' : 'text-emerald-600'}`}>
                      {(day + 12 > 30 ? (day + 12) - 30 : day + 12).toLocaleString('bn-BD')}
                    </span>
                    <span className={`text-[9px] font-bold ${isToday ? 'text-orange-200' : 'text-orange-600'}`}>
                      {(day + 16 > 30 ? (day + 16) - 30 : day + 16).toLocaleString('bn-BD')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-12 flex flex-wrap gap-6 border-t border-slate-100 dark:border-slate-800 pt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
              <span className="text-[10px] font-black uppercase text-slate-500">আজকের দিন</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase text-emerald-600">সবুজ নম্বর: হিজরি</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase text-orange-600">কমলা নম্বর: বাংলা</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FullHijriCalendar;