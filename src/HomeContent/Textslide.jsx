import React from 'react';

const TextSlider = () => {
  const newsItems = [
    "রমজান ক্যালেন্ডার ২০২৬: সেহরি ও ইফতারের সময়সূচী আপডেট করা হয়েছে।",
    "ইউজার প্রোফাইল ফিচারে নতুন আপডেট যুক্ত করা হয়েছে—এখনই চেক করুন।",
    "নতুন ক্যাটাগরি: খেলাধুলা সেকশন এখন লাইভ! সব খবর পাবেন সবার আগে।",
    "পবিত্র রমজানের অনেক অনেক শুভেচ্ছা—আমাদের সাথেই থাকুন।",
  ];

  return (
    // mt-[-10px] add kora hoyeche jate top space purapuri kume jay
    <div className="max-w-7xl mx-auto mt-[-20px] mb-2 px-0">
      {/* Container height compact (py-1) */}
      <div className="relative flex overflow-hidden bg-white dark:bg-neutral-900 py-1 items-center rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm group">
        
        {/* Fixed 'Update' Label (12px) */}
        <div className="absolute left-0 z-20 bg-secondary-600 dark:bg-secondary-800 px-3 py-1 font-bold text-white shadow-lg pointer-events-none rounded-l-lg uppercase tracking-wider text-[12px] h-full flex items-center">
          আপডেট:
        </div>

        {/* Scrolling Container */}
        <div className="flex whitespace-nowrap pl-[80px]">
          
          {/* Main Loop: Speed 40s */}
          <div className="flex animate-[infinite-scroll_40s_linear_infinite] group-hover:[animation-play-state:paused] items-center">
            {newsItems.map((text, index) => (
              <span key={index} className="mx-4 text-neutral-800 dark:text-neutral-200 font-medium text-[12px] flex items-center shrink-0">
                {text} 
                <span className="ml-4 text-secondary-400 opacity-60 font-bold text-[12px]">||</span>
              </span>
            ))}
          </div>
          
          {/* Duplicate loop for seamless scroll */}
          <div className="flex animate-[infinite-scroll_40s_linear_infinite] group-hover:[animation-play-state:paused] items-center" aria-hidden="true">
            {newsItems.map((text, index) => (
              <span key={index} className="mx-4 text-neutral-800 dark:text-neutral-200 font-medium text-[12px] flex items-center shrink-0">
                {text} 
                <span className="ml-4 text-secondary-400 opacity-60 font-bold text-[12px]">||</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSlider;