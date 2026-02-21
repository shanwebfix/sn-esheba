import React from 'react';
import { Heart, Globe, Users, Code, Stars, Sparkles } from 'lucide-react';

const DeveloperPage = () => {
  return (
    <div className="min-h-screen  rounded-lg mb-10 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden text-center">
        {/* Background Animation Blurs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles size={16} />
            <span>জনস্বার্থে একটি ডিজিটাল উদ্যোগ</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight dark:text-white">
            আমাদের এলাকার জন্য <br /> 
            <span className="text-purple-600">আমাদেরই ভালোবাসা</span>
          </h1>
        </div>
      </section>

      {/* Main Vision Section */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-gray-50 dark:bg-gray-900 p-8 md:p-16 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-2xl relative">
          
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Developer Icon Side */}
            <div className="md:col-span-4 flex flex-col items-center justify-center space-y-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 pb-8 md:pb-0">
              <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-3xl rotate-12 flex items-center justify-center shadow-xl shadow-purple-500/20">
                <Code size={40} className="text-white -rotate-12" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl">আপনার এলাকার সন্তান</h3>
                <p className="text-purple-600 font-medium">ডেভেলপার ও রূপকার</p>
              </div>
            </div>

            {/* Message Side */}
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 italic font-medium">
                "এই অ্যাপটি কেবল একগুচ্ছ কোড নয়, এটি আমাদের এলাকার প্রতি আমার বিনম্র শ্রদ্ধা। প্রযুক্তির এই যুগে আমাদের এলাকার মানুষ যেন প্রতিটি জরুরি সেবা নিজের হাতের মুঠোয় পায়, সেই তাড়না থেকেই এই ক্ষুদ্র প্রচেষ্টা। এখানে কোনো একক ব্যক্তির নাম বড় নয়, বরং আমাদের এলাকার পরিচিতিই মুখ্য।"
              </p>
            </div>
          </div>

          {/* Credit Grid */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <Users className="mx-auto mb-4 text-purple-500" size={32} />
              <h4 className="font-bold mb-2">ক্রেডিট ও কৃতজ্ঞতা</h4>
              <p className="text-sm text-gray-500">এলাকার সকল স্বেচ্ছাসেবী ও সাধারণ মানুষের প্রতি যারা তথ্য দিয়ে সহায়তা করেছেন।</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <Globe className="mx-auto mb-4 text-purple-500" size={32} />
              <h4 className="font-bold mb-2">মূল লক্ষ্য</h4>
              <p className="text-sm text-gray-500">একটি স্মার্ট ও ডিজিটাল এলাকা গড়ে তোলা যেখানে সেবা হবে উন্মুক্ত ও সহজলভ্য।</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
              <Stars className="mx-auto mb-4 text-purple-500" size={32} />
              <h4 className="font-bold mb-2">উৎসর্গ</h4>
              <p className="text-sm text-gray-500">এই প্ল্যাটফর্মটি উৎসর্গ করা হলো আমাদের প্রিয় এলাকার সকল শ্রমজীবী ও স্বপ্নবাজ মানুষের তরে।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-20 text-center bg-purple-600 text-white px-6">
        <div className="max-w-2xl mx-auto">
          <Heart size={48} className="mx-auto mb-6 fill-white animate-pulse" />
          <h2 className="text-3xl font-bold mb-6">এলাকার উন্নয়নে আপনার স্বতঃস্ফূর্ত অংশগ্রহণই আমাদের সার্থকতা</h2>
          <p className="opacity-90 leading-relaxed">
            আমরা বিশ্বাস করি, প্রযুক্তি ব্যবহারের মাধ্যমে আমাদের এলাকা হবে আরও আধুনিক ও নিরাপদ। এই পথচলায় আমাদের সাথেই থাকুন।
          </p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 text-center text-gray-400 text-xs tracking-[0.3em] uppercase">
        S H A M S H E R N A G A R • 2026
      </footer>

    </div>
  );
};

export default DeveloperPage;