import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

// Brihoshpotibar (19 Feb) theke shuru kora hoyeche
const RAMADAN_SCHEDULE = [
    { ramadanDay: 1, date: '১৯ ফেব্রু', day: 'বৃহস্পতিবার', fullDate: '2026-02-19', seheri: '৫:০৪', iftar: '৫:৫৩', azan: '৫:০৯' },
    { ramadanDay: 2, date: '২০ ফেব্রু', day: 'শুক্রবার', fullDate: '2026-02-20', seheri: '৫:০৩', iftar: '৫:৫৩', azan: '৫:০৮' },
    { ramadanDay: 3, date: '২১ ফেব্রু', day: 'শনিবার', fullDate: '2026-02-21', seheri: '৫:০২', iftar: '৫:৫৪', azan: '৫:০৭' },
    { ramadanDay: 4, date: '২২ ফেব্রু', day: 'রবিবার', fullDate: '2026-02-22', seheri: '৫:০১', iftar: '৫:৫৫', azan: '৫:০৭' },
    { ramadanDay: 5, date: '২৩ ফেব্রু', day: 'সোমবার', fullDate: '2026-02-23', seheri: '৫:০0', iftar: '৫:৫৫', azan: '৫:০৬' },
    { ramadanDay: 6, date: '২৪ ফেব্রু', day: 'মঙ্গলবার', fullDate: '2026-02-24', seheri: '৪:৫৯', iftar: '৫:৫৬', azan: '৫:০৫' },
    { ramadanDay: 7, date: '২৫ ফেব্রু', day: 'বুধবার', fullDate: '2026-02-25', seheri: '৪:৫৮', iftar: '৫:৫৭', azan: '৫:০৪' },
    { ramadanDay: 8, date: '২৬ ফেব্রু', day: 'বৃহস্পতিবার', fullDate: '2026-02-26', seheri: '৪:৫৮', iftar: '৫:৫৭', azan: '৫:০৪' },
    { ramadanDay: 9, date: '২৭ ফেব্রু', day: 'শুক্রবার', fullDate: '2026-02-27', seheri: '৪:৫৭', iftar: '৫:৫৮', azan: '৫:০৩' },
    { ramadanDay: 10, date: '২৮ ফেব্রু', day: 'শনিবার', fullDate: '2026-02-28', seheri: '৪:৫৬', iftar: '৫:৫৮', azan: '৫:০২' },

    { ramadanDay: 11, date: '০১ মার্চ', day: 'রবিবার', fullDate: '2026-03-01', seheri: '৪:৫৬', iftar: '৫:৫৯', azan: '৫:০১' },
    { ramadanDay: 12, date: '০২ মার্চ', day: 'সোমবার', fullDate: '2026-03-02', seheri: '৪:৫৫', iftar: '৫:৫৯', azan: '৫:০০' },
    { ramadanDay: 13, date: '০৩ মার্চ', day: 'মঙ্গলবার', fullDate: '2026-03-03', seheri: '৪:৫৪', iftar: '৬:০০', azan: '৫:০০' },
    { ramadanDay: 14, date: '০৪ মার্চ', day: 'বুধবার', fullDate: '2026-03-04', seheri: '৪:৫৩', iftar: '৬:০১', azan: '৪:৫৯' },
    { ramadanDay: 15, date: '০৫ মার্চ', day: 'বৃহস্পতিবার', fullDate: '2026-03-05', seheri: '৪:৫২', iftar: '৬:০১', azan: '৪:৫৮' },
    { ramadanDay: 16, date: '০৬ মার্চ', day: 'শুক্রবার', fullDate: '2026-03-06', seheri: '৪:৫১', iftar: '৬:০২', azan: '৪:৫৭' },
    { ramadanDay: 17, date: '০৭ মার্চ', day: 'শনিবার', fullDate: '2026-03-07', seheri: '৪:৫0', iftar: '৬:০২', azan: '৪:৫৬' },
    { ramadanDay: 18, date: '০৮ মার্চ', day: 'রবিবার', fullDate: '2026-03-08', seheri: '৪:৪৯', iftar: '৬:০২', azan: '৪:৫৫' },
    { ramadanDay: 19, date: '০৯ মার্চ', day: 'সোমবার', fullDate: '2026-03-09', seheri: '৪:৪৮', iftar: '৬:০৩', azan: '৪:৫৪' },
    { ramadanDay: 20, date: '১০ মার্চ', day: 'মঙ্গলবার', fullDate: '2026-03-10', seheri: '৪:৪৭', iftar: '৬:০৩', azan: '৪:৫৩' },

    { ramadanDay: 21, date: '১১ মার্চ', day: 'বুধবার', fullDate: '2026-03-11', seheri: '৪:৪৬', iftar: '৬:০৪', azan: '৪:৫২' },
    { ramadanDay: 22, date: '১২ মার্চ', day: 'বৃহস্পতিবার', fullDate: '2026-03-12', seheri: '৪:৪৫', iftar: '৬:০৪', azan: '৪:৫১' },
    { ramadanDay: 23, date: '১৩ মার্চ', day: 'শুক্রবার', fullDate: '2026-03-13', seheri: '৪:৪৪', iftar: '৬:০৫', azan: '৪:৫০' },
    { ramadanDay: 24, date: '১৪ মার্চ', day: 'শনিবার', fullDate: '2026-03-14', seheri: '৪:৪৩', iftar: '৬:০৫', azan: '৪:৪৯' },
    { ramadanDay: 25, date: '১৫ মার্চ', day: 'রবিবার', fullDate: '2026-03-15', seheri: '৪:৪২', iftar: '৬:০৬', azan: '৪:৪৮' },
    { ramadanDay: 26, date: '১৬ মার্চ', day: 'সোমবার', fullDate: '2026-03-16', seheri: '৪:৪১', iftar: '৬:০৬', azan: '৪:৪৭' },
    { ramadanDay: 27, date: '১৭ মার্চ', day: 'মঙ্গলবার', fullDate: '2026-03-17', seheri: '৪:৪০', iftar: '৬:০৭', azan: '৪:৪৬' },
    { ramadanDay: 28, date: '১৮ মার্চ', day: 'বুধবার', fullDate: '2026-03-18', seheri: '৪:৩৯', iftar: '৬:০৭', azan: '৪:৪৫' },
    { ramadanDay: 29, date: '১৯ মার্চ', day: 'বৃহস্পতিবার', fullDate: '2026-03-19', seheri: '৪:৩৮', iftar: '৬:০৭', azan: '৪:৪৪' },
    { ramadanDay: 30, date: '২০ মার্চ', day: 'শুক্রবার', fullDate: '2026-03-20', seheri: '৪:৩৭', iftar: '৬:০৮', azan: '৪:৪৩' },
];

const toBengaliNumber = (num) => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/\d/g, digit => bengaliDigits[digit]);
};

const RamadanCalendar = () => {
    const [todayData, setTodayData] = useState({});

    useEffect(() => {
        const updateTodayInfo = () => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const todayString = `${year}-${month}-${day}`;
            const found = RAMADAN_SCHEDULE.find(item => item.fullDate === todayString);
            if (found) setTodayData(found);
        };
        updateTodayInfo();
    }, []);

    return (
        <div className="min-h-screen  p-1 md:p-0 font-sans">
            <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-gray-800">
                <div className="px-4 py-4 bg-gradient-to-r from-emerald-600 to-green-700 text-center">
                    <h3 className="text-lg font-bold text-white flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5" />
                        রমজান ক্যালেন্ডার ২০২৬
                    </h3>
                    <p className="text-[10px] text-green-100 mt-1 uppercase tracking-widest font-bold">Shamshernagar, Moulvibazar</p>
                </div>
                
                <div className="w-full">
                    <table className="w-full text-[10px] md:text-xs text-center border-collapse">
                        <thead className="bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-400 font-bold uppercase">
                            <tr className="border-b dark:border-gray-700">
                                <th className="py-3 px-0.5 w-8">নং</th>
                                <th className="py-3 px-0.5">তারিখ</th>
                                <th className="py-3 px-0.5">বার</th>
                    
                                <th className="py-3 px-0.5">সেহরী</th>
                                <th className="py-3 px-0.5">আযান</th>
                                <th className="py-3 px-0.5">ইফতার</th>
                            </tr>
                        </thead>
                        <tbody>
                            {RAMADAN_SCHEDULE.map((item) => (
                                <tr 
                                    key={item.ramadanDay} 
                                    className={`border-b dark:border-gray-800 last:border-0 transition-all ${todayData.fullDate === item.fullDate ? 'bg-green-100 dark:bg-green-900/40 ring-1 ring-inset ring-green-600/30' : 'hover:bg-slate-50 dark:hover:bg-gray-800/50'}`}
                                >
                                    <td className="py-3 px-0.5">
                                        <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[9px] font-black ${todayData.fullDate === item.fullDate ? 'bg-green-600 text-white shadow-md scale-110' : 'bg-slate-200 dark:bg-gray-700 text-slate-600 dark:text-gray-400'}`}>
                                            {toBengaliNumber(item.ramadanDay)}
                                        </span>
                                    </td>

                                    <td className={`py-3 px-0.5 font-medium ${todayData.fullDate === item.fullDate ? 'text-green-700 dark:text-green-400' : 'text-slate-700 dark:text-gray-300'}`}>
                                        {item.date}
                                    </td>

                                    <td className={`py-3 px-0.5 italic ${todayData.fullDate === item.fullDate ? 'text-green-800 dark:text-green-300 font-bold' : 'text-slate-500 dark:text-gray-400'}`}>
                                        {item.day}
                                    </td>


                                    <td className="py-3 px-0.5 text-blue-600 dark:text-blue-400 font-bold">
                                        {item.seheri}
                                    </td>
                                    <td className="py-3 px-0.5 text-slate-400 dark:text-gray-500 font-medium italic">
                                        {item.azan}
                                    </td>
                                    <td className="py-3 px-0.5 text-orange-600 dark:text-orange-400 font-black">
                                        {item.iftar}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-4 text-center">
                <p className="text-[10px] text-slate-400 dark:text-gray-500 italic">
                    * এটি মৌলভীবাজার, শমশেরনগর এলাকার সময়ের সাথে সামঞ্জস্যপূর্ণ।
                </p>
            </div>
        </div>
    );
};

export default RamadanCalendar;