import React from "react";

const ShamshernagarIntro = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100">
          শমশেরনগর ইউনিয়ন
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          কমলগঞ্জ উপজেলা, মৌলভীবাজার
        </p>

        <div className="mt-4 flex justify-center">
          <span className="h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 dark:from-emerald-500 dark:to-cyan-500"></span>
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-black/40 p-6 md:p-10 space-y-6">
        
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          শমশেরনগর ইউনিয়ন বাংলাদেশের সিলেট বিভাগের মৌলভীবাজার জেলার
          কমলগঞ্জ উপজেলার একটি ঐতিহ্যবাহী ও গুরুত্বপূর্ণ অঞ্চল।
          ব্রিটিশ শাসনামলে চা শিল্পের বিকাশের মাধ্যমে এই এলাকার
          গোড়াপত্তন ঘটে। উনিশ শতকের শেষভাগে এখানে একাধিক চা বাগান
          স্থাপিত হলে শমশেরনগর ধীরে ধীরে একটি জনবসতিপূর্ণ এলাকায়
          পরিণত হয়।
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          এলাকাটির নামকরণ করা হয় স্থানীয় জমিদার ও প্রভাবশালী ব্যক্তি
          শমশের আলী খানের নামানুসারে। ব্রিটিশ আমলে প্রশাসনিক ও
          যোগাযোগ ব্যবস্থার উন্নতির ফলে শমশেরনগর একটি গুরুত্বপূর্ণ
          কেন্দ্র হিসেবে পরিচিতি লাভ করে। দ্বিতীয় বিশ্বযুদ্ধের সময়
          এখানে একটি বিমানঘাঁটি স্থাপন করা হয়, যা বর্তমানে
          শমশেরনগর বিমানবন্দর নামে পরিচিত।
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          স্বাধীন বাংলাদেশ পর্বে শমশেরনগর ইউনিয়ন শিক্ষা, কৃষি,
          চা শিল্প এবং ব্যবসা-বাণিজ্যে গুরুত্বপূর্ণ অবদান রেখে
          চলেছে। প্রাকৃতিক সৌন্দর্য, চা বাগান ঘেরা পরিবেশ এবং
          ঐতিহাসিক গুরুত্বের কারণে এই ইউনিয়ন আজও কমলগঞ্জ উপজেলার
          একটি উল্লেখযোগ্য এলাকা হিসেবে পরিচিত।
        </p>

        {/* Highlight Box */}
        <div className="mt-8 border-l-4 border-emerald-500 dark:border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-lg">
          <p className="text-sm text-emerald-800 dark:text-emerald-300">
            ইতিহাস, প্রকৃতি ও চা শিল্পের অনন্য সমন্বয়ই শমশেরনগরের
            মূল পরিচয়।
          </p>
        </div>

      </div>
    </div>
  );
};

export default ShamshernagarIntro;