import React, { useState, useEffect } from 'react';
import { Moon, Sun, Clock } from 'lucide-react';

const TodayRamadan = () => {
    const [displayData, setDisplayData] = useState(null);
    const [currentTime, setCurrentTime] = useState('');
    const [countdown, setCountdown] = useState('অপেক্ষা করুন...');
    const [isNextDay, setIsNextDay] = useState(false);

    const RAMADAN_DATA = [
        { day: 1, date: '১৯ ফেব্রুয়ারি, বৃহস্পতিবার', fullDate: '2026-02-19', seheri: '05:04', iftar: '17:53', azan: '05:09' },
        { day: 2, date: '২০ ফেব্রুয়ারি, শুক্রবার', fullDate: '2026-02-20', seheri: '05:03', iftar: '17:53', azan: '05:08' },
        { day: 3, date: '২১ ফেব্রুয়ারি, শনিবার', fullDate: '2026-02-21', seheri: '05:02', iftar: '17:54', azan: '05:07' },
        { day: 4, date: '২২ ফেব্রুয়ারি, রবিবার', fullDate: '2026-02-22', seheri: '05:01', iftar: '17:55', azan: '05:07' },
        { day: 5, date: '২৩ ফেব্রুয়ারি, সোমবার', fullDate: '2026-02-23', seheri: '05:00', iftar: '17:55', azan: '05:06' },
        { day: 6, date: '২৪ ফেব্রুয়ারি, মঙ্গলবার', fullDate: '2026-02-24', seheri: '04:59', iftar: '17:56', azan: '05:05' },
        { day: 7, date: '২৫ ফেব্রুয়ারি, বুধবার', fullDate: '2026-02-25', seheri: '04:58', iftar: '17:57', azan: '05:04' },
        { day: 8, date: '২৬ ফেব্রুয়ারি, বৃহস্পতিবার', fullDate: '2026-02-26', seheri: '04:58', iftar: '17:57', azan: '05:04' },
        { day: 9, date: '২৭ ফেব্রুয়ারি, শুক্রবার', fullDate: '2026-02-27', seheri: '04:57', iftar: '17:58', azan: '05:03' },
        { day: 10, date: '২৮ ফেব্রুয়ারি, শনিবার', fullDate: '2026-02-28', seheri: '04:56', iftar: '17:58', azan: '05:02' },
        { day: 11, date: '০১ মার্চ, রবিবার', fullDate: '2026-03-01', seheri: '04:56', iftar: '17:59', azan: '05:01' },
        { day: 12, date: '০২ মার্চ, সোমবার', fullDate: '2026-03-02', seheri: '04:55', iftar: '17:59', azan: '05:00' },
        { day: 13, date: '০৩ মার্চ, মঙ্গলবার', fullDate: '2026-03-03', seheri: '04:54', iftar: '18:00', azan: '05:00' },
        { day: 14, date: '০৪ মার্চ, বুধবার', fullDate: '2026-03-04', seheri: '04:53', iftar: '18:01', azan: '04:59' },
        { day: 15, date: '০৫ মার্চ, বৃহস্পতিবার', fullDate: '2026-03-05', seheri: '04:52', iftar: '18:01', azan: '04:58' },
        { day: 16, date: '০৬ মার্চ, শুক্রবার', fullDate: '2026-03-06', seheri: '04:51', iftar: '18:02', azan: '04:57' },
        { day: 17, date: '০৭ মার্চ, শনিবার', fullDate: '2026-03-07', seheri: '04:50', iftar: '18:02', azan: '04:56' },
        { day: 18, date: '০৮ মার্চ, রবিবার', fullDate: '2026-03-08', seheri: '04:49', iftar: '18:02', azan: '04:55' },
        { day: 19, date: '০৯ মার্চ, সোমবার', fullDate: '2026-03-09', seheri: '04:48', iftar: '18:03', azan: '04:54' },
        { day: 20, date: '১০ মার্চ, মঙ্গলবার', fullDate: '2026-03-10', seheri: '04:47', iftar: '18:03', azan: '04:53' },
        { day: 21, date: '১১ মার্চ, বুধবার', fullDate: '2026-03-11', seheri: '04:46', iftar: '18:04', azan: '04:52' },
        { day: 22, date: '১২ মার্চ, বৃহস্পতিবার', fullDate: '2026-03-12', seheri: '04:45', iftar: '18:04', azan: '04:51' },
        { day: 23, date: '১৩ মার্চ, শুক্রবার', fullDate: '2026-03-13', seheri: '04:44', iftar: '18:05', azan: '04:50' },
        { day: 24, date: '১৪ মার্চ, শনিবার', fullDate: '2026-03-14', seheri: '04:43', iftar: '18:05', azan: '04:49' },
        { day: 25, date: '১৫ মার্চ, রবিবার', fullDate: '2026-03-15', seheri: '04:42', iftar: '18:06', azan: '04:48' },
        { day: 26, date: '১৬ মার্চ, সোমবার', fullDate: '2026-03-16', seheri: '04:41', iftar: '18:06', azan: '04:47' },
        { day: 27, date: '১৭ মার্চ, মঙ্গলবার', fullDate: '2026-03-17', seheri: '04:40', iftar: '18:07', azan: '04:46' },
        { day: 28, date: '১৮ মার্চ, বুধবার', fullDate: '2026-03-18', seheri: '04:39', iftar: '18:07', azan: '04:45' },
        { day: 29, date: '১৯ মার্চ, বৃহস্পতিবার', fullDate: '2026-03-19', seheri: '04:38', iftar: '18:07', azan: '04:44' },
        { day: 30, date: '২০ মার্চ, শুক্রবার', fullDate: '2026-03-20', seheri: '04:37', iftar: '18:08', azan: '04:43' },
    ];

    const toBengaliNumber = (num) => {
        const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return num.toString().replace(/\d/g, digit => bengaliDigits[digit]);
    };

    const formatTo12Hr = (time24) => {
        if (!time24) return '--:--';
        let [h, m] = time24.split(':');
        let hours = parseInt(h);
        let suffix = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${toBengaliNumber(hours)}:${toBengaliNumber(m)} ${suffix}`;
    };

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit', hour12: true }));

            const todayStr = now.getFullYear() + '-' + 
                            String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                            String(now.getDate()).padStart(2, '0');
            
            const todayIndex = RAMADAN_DATA.findIndex(item => item.fullDate === todayStr);
            
            if (todayIndex === -1) {
                setDisplayData(RAMADAN_DATA[0]);
                return;
            }

            const todayData = RAMADAN_DATA[todayIndex];
            const [iH, iM] = todayData.iftar.split(':').map(Number);
            const iftarTime = new Date(now);
            iftarTime.setHours(iH, iM, 0, 0);

            let activeData;
            let targetTime;
            let label;
            let isNext = false;

            // যদি ইফতার পার হয়ে যায়, তবে পরবর্তী দিনের ডেটা দেখাও
            if (now > iftarTime) {
                const nextDayData = RAMADAN_DATA[todayIndex + 1];
                if (nextDayData) {
                    activeData = nextDayData;
                    isNext = true;
                    const [nsH, nsM] = nextDayData.seheri.split(':').map(Number);
                    const tomorrowSeheri = new Date(now);
                    tomorrowSeheri.setDate(tomorrowSeheri.getDate() + 1);
                    tomorrowSeheri.setHours(nsH, nsM, 0, 0);
                    targetTime = tomorrowSeheri;
                    label = "সেহরী শুরু হতে বাকি: ";
                } else {
                    setCountdown("রমজান সম্পন্ন হয়েছে");
                    setDisplayData(todayData);
                    return;
                }
            } else {
                // ইফতারের আগে পর্যন্ত আজকের ডেটাই থাকবে
                activeData = todayData;
                const [sH, sM] = todayData.seheri.split(':').map(Number);
                const seheriTime = new Date(now);
                seheriTime.setHours(sH, sM, 0, 0);

                if (now < seheriTime) {
                    targetTime = seheriTime;
                    label = "সেহরী শেষ হতে বাকি: ";
                } else {
                    targetTime = iftarTime;
                    label = "ইফতার হতে বাকি: ";
                }
            }

            setDisplayData(activeData);
            setIsNextDay(isNext);

            const diff = targetTime - now;
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);

            setCountdown(`${label} ${toBengaliNumber(h)} ঘণ্টা ${toBengaliNumber(m)} মিনিট ${toBengaliNumber(s)} সেকেন্ড`);
        };

        const interval = setInterval(updateTimer, 1000);
        updateTimer();
        return () => clearInterval(interval);
    }, []);

    if (!displayData) return null;

    return (
        <div className="w-full bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-3 mb-4 border border-green-100 dark:border-gray-700 shadow-sm">
            <div className="text-center mb-3">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-[10px] text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">
                        শমশেরনগর, মৌলভীবাজার
                    </span>
                    
                    <span className="text-[10px] text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">
                        এখন {currentTime}
                    </span>
                    <span className="text-[10px] text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">
                      {isNextDay ? 'আগামীকাল: ' : 'আজ: '} {displayData.date}, ২০২৬
                    </span>
                </div>
                
                <div className="flex items-center justify-center gap-1.5 mt-1 text-gray-500 dark:text-gray-400">
                    <h2 className="text-[14px] font-bold">
                        {isNextDay ? 'আগামীকাল ' : 'আজ '} <span className="text-green-600 dark:text-green-400 text-[16px] font-bold">{toBengaliNumber(displayData.day)}</span> রমজান
                    </h2>
                    <Clock size={11} className="text-blue-500" />

                    <span className="text-[14px] font-medium">
                        ফজরের আযান: <span className="text-blue-600 dark:text-blue-400">{formatTo12Hr(displayData.azan)}</span>
                    </span>
                </div>

                <p className="text-[14px] font-medium text-green-700 dark:text-green-400 mt-2 bg-green-50 dark:bg-green-900/20 inline-block px-3 py-1 rounded-full border border-green-100 dark:border-green-800">
                    {countdown}
                </p>
            </div>

            <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded-lg border border-blue-100 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center">
                        <div className="mr-3">
                            <Moon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-500 mb-0.5">{isNextDay ? 'আগামী সেহরী শেষ' : 'সেহরী শেষ'}</p>
                            <p className="text-lg font-bold dark:text-white">
                                {formatTo12Hr(displayData.seheri)}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-gray-200 dark:bg-gray-700"></div>
                    <div className="text-[10px] text-gray-400 py-1 font-medium">এবং</div>
                    <div className="w-0.5 h-6 bg-gray-200 dark:bg-gray-700"></div>
                </div>

                <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded-lg border border-orange-100 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center">
                        <div className="mr-3">
                            <Sun className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-500 mb-0.5">{isNextDay ? 'আগামী ইফতার শুরু' : 'ইফতার শুরু'}</p>
                            <p className="text-lg font-bold dark:text-white">
                                {formatTo12Hr(displayData.iftar)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                    <span>রমজান অগ্রগতি</span>
                    <span>{toBengaliNumber(displayData.day)}/৩০</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div 
                        className="bg-purple-600 h-1.5 rounded-full transition-all duration-700" 
                        style={{ width: `${(displayData.day / 30) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="text-center pt-1">
                <a 
                    href="./pages/islamic/RamadanCalendar"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm active:scale-95"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    পূর্ণ রমজান ক্যালেন্ডার
                </a>
            </div>
            <div className="mt-4 text-center">
                          <p className="text-[10px] text-slate-400 dark:text-gray-500 italic">
                    বিঃদ্রঃ রামাদান টাইম টি মেনুয়ালী এড করা তাই কোনো ভুল আপনার নজরে আসলে আমাদের সাথে <a 
                    href="./pages/menu/contact"
                    className="inline-flex items-center justify-center  px-2  text-green-600 text-xs font-medium  transition-colors shadow-sm active:scale-95"
                >যোগাযোগ</a>করবেন।
                </p>
                <p className="text-[10px] text-slate-400 dark:text-gray-500 italic">
                    * এটি মৌলভীবাজার, শমশেরনগর এলাকার সময়ের সাথে সামঞ্জস্যপূর্ণ।
                </p>
            </div>
        </div>
    );
};

export default TodayRamadan;