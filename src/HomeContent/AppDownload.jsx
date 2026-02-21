import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

const AppDownloadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const hideUntil = localStorage.getItem('appPopupHideUntil');
      const now = new Date().getTime();

      if (!hideUntil || now > parseInt(hideUntil)) {
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    };
    checkVisibility();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    const hideTime = new Date().getTime() + 2 * 60 * 1000;
    localStorage.setItem('appPopupHideUntil', hideTime.toString());
  };

  if (!isVisible) return null;

  return (
    <>
      {/* ১. কন্টেন্ট পুশার: এটি যখন পপআপ শো করবে, তখন মেইন কন্টেন্টের নিচে ১০০ পিক্সেল জায়গা খালি করবে */}
      <div className="h-[40px] w-full pointer-events-none" aria-hidden="true" />

      {/* ২. পপআপ: এটি ফিক্সড থাকবে */}
      <div className="fixed bottom-[90px] left-3 right-3 z-[100] animate-in slide-in-from-bottom-5 duration-500">
        <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-slate-200 dark:border-gray-800 rounded-3xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
          
          {/* ক্লোজ বাটন */}
          <button 
            onClick={handleClose}
            className="absolute -top-2 -right-1 bg-white dark:bg-gray-800 text-slate-500 dark:text-gray-400 p-1.5 rounded-full border border-slate-200 dark:border-gray-700 shadow-md active:scale-90 transition-all z-10"
          >
            <X size={12} strokeWidth={3} />
          </button>
          
          <div className="flex items-center gap-3">
            {/* আইকন */}
            <div className="bg-gradient-to-tr from-blue-600 to-blue-400 p-2 rounded-2xl text-white flex-shrink-0 shadow-sm">
              <Smartphone size={18} />
            </div>

            {/* টেক্সট */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[13px] font-black dark:text-white leading-none mb-0.5">
                অফিসিয়াল অ্যাপ
              </h3>
              <p className="text-[10px] font-medium text-slate-500 dark:text-gray-400 truncate">
                সেরা অভিজ্ঞতার জন্য ইনস্টল করুন
              </p>
            </div>

            {/* ডাউনলোড বাটন */}
            <a 
              href="https://eseba.vercel.app/Apps/mobile-details/sn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 mr-2 py-2 rounded-xl font-bold text-[11px] flex items-center gap-1.5 transition-all active:scale-95 flex-shrink-0"
            >
              <Download size={12} />
              ডাউনলোড
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownloadPopup;