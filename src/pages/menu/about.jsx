import React from 'react';

const AboutPage = () => {
  // আপনার সকল সার্ভিস বা ক্যাটাগরি লিস্ট
  const services = [
    "রক্তদান ও ডোনার", "জরুরি অ্যাম্বুলেন্স", "হাসপাতাল ও ডাক্তার", "জরুরি সেবা", 
    "শিক্ষা ও শিক্ষক", "দোকান ও মার্কেট", "ইমাম ও মুয়াজ্জিন", "ইসলামিক পেজ", 
    "প্রবাসীদের পাতা", "পর্যটন কেন্দ্র", "ব্যাংকিং ও আর্থিক সেবা", "আইটি সার্ভিস", 
    "উদ্যোক্তা কর্নার", "খেলাধুলা", "মিডিয়া ও সংবাদ", "স্বাস্থ্য সেবা", "কৃষি ও কৃষক"
  ];

  return (
    <div className=" text-gray-800 dark:text-gray-200 transition-colors duration-300 font-sans">
      
      {/* Hero Section */}
      <section className="py-20 px-6 text-center border-b border-gray-100 dark:border-gray-800">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-purple-600 dark:text-purple-500">
          আমাদের লক্ষ্য
        </h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
          ডিজিটাল প্রযুক্তির ছোঁয়ায় আমাদের এলাকার প্রতিটি মানুষের জীবনকে আরও সহজ এবং নিরাপদ করা। 
          প্রয়োজনীয় সকল সেবা এখন আপনার হাতের মুঠোয়।
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">কেন এই প্ল্যাটফর্ম?</h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              আমরা চাই এলাকার প্রতিটি জরুরি সেবা—তা হোক রক্তদাতার সন্ধান কিংবা হাসপাতালের তথ্য—যেন খুব সহজেই মানুষ খুঁজে পায়। 
              বিশেষ করে প্রবাসীদের জন্য এলাকার সাথে সংযুক্ত থাকার এবং স্থানীয় উদ্যোক্তাদের পণ্যকে তুলে ধরার একটি বিশ্বস্ত মাধ্যম হিসেবে আমরা কাজ করছি।
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              শিক্ষা, স্বাস্থ্য, ধর্ম এবং কৃষি—সবই এখন এই একটি অ্যাপের মাধ্যমে ডিজিটাল ডিরেক্টরি হিসেবে কাজ করবে। আমাদের উদ্দেশ্য কেবল সেবা দেয়া নয়, একটি স্মার্ট কমিউনিটি গড়ে তোলা।
            </p>
          </div>

          {/* Simple Text-Only Categories Grid */}
          <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h3 className="text-xl font-semibold mb-8 text-purple-600 dark:text-purple-400 uppercase tracking-widest text-center">
              আমাদের সকল সেবা সমূহ
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 py-2 px-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border-l-4 border-purple-500 hover:scale-105 transition-transform duration-200"
                >
                  <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer Message */}
      <section className="py-12 border-t border-gray-100 dark:border-gray-800 text-center italic">
        <p className="text-gray-500 dark:text-gray-500">
          "প্রযুক্তির মাধ্যমে সেবার হাত বাড়িয়ে, আমরা আছি আপনার সাথে।"
        </p>
      </section>
      
    </div>
  );
};

export default AboutPage;