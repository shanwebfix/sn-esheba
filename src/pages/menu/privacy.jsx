import React from 'react';
import { ShieldCheck, EyeOff, Lock, Database, UserCheck, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen mb-10 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
      {/* Header */}
      <section className="py-20 px-6 text-center bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-purple-100 dark:bg-purple-900/40 rounded-full text-purple-600">
            <Lock size={48} />
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-purple-600">গোপনীয়তা নীতি (Privacy Policy)</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          আপনার তথ্যের সুরক্ষা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। আমরা আপনার প্রাইভেসিকে সম্মান করি।
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-12">
        
        <div className="flex gap-6">
          <Database className="text-purple-600 shrink-0" size={32} />
          <div>
            <h2 className="text-2xl font-bold mb-3">ডেটা সংগ্রহ ও ব্যবহার</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              আমরা আমাদের সিস্টেমে আলাদাভাবে ইউজারের কোনো ব্যক্তিগত ডেটা (যেমন ব্রাউজিং হিস্ট্রি বা লোকেশন) অটোমেটিক সংগ্রহ করি না। আপনি নিজে থেকে যে সকল তথ্য (পোস্ট করার সময়) প্রদান করেন, কেবল সেগুলোই জনস্বার্থে অ্যাপে প্রদর্শিত হয়।
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <EyeOff className="text-purple-600 shrink-0" size={32} />
          <div>
            <h2 className="text-2xl font-bold mb-3">তথ্য শেয়ারিং</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              আপনার প্রদান করা তথ্য আমরা কোনো বাণিজ্যিক উদ্দেশ্যে তৃতীয় পক্ষের কাছে বিক্রি বা শেয়ার করি না। তবে ডিরেক্টরি সেবায় আপনার দেওয়া ফোন নম্বরটি অন্য ব্যবহারকারীরা আপনার সাথে যোগাযোগের প্রয়োজনে দেখতে পাবেন।
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <UserCheck className="text-purple-600 shrink-0" size={32} />
          <div>
            <h2 className="text-2xl font-bold mb-3">ইউজার কন্ট্রোল</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              আপনার শেয়ার করা কোনো তথ্য যদি আপনি ডিলিট করতে চান বা আপনার যদি কোনো তথ্যে আপত্তি থাকে, তবে সরাসরি আমাদের জানান। আমরা আপনার অনুরোধ অনুযায়ী দ্রুত ব্যবস্থা গ্রহণ করি।
            </p>
          </div>
        </div>

      </section>

      {/* Footer Link */}
      <section className="py-10 text-center border-t border-gray-100 dark:border-gray-800">
        <p className="mb-4">ব্যবহারের নিয়মাবলী জানতে আমাদের <Link to="/pages/menu/terms" className="text-purple-600 underline font-semibold">শর্তাবলী</Link> পড়ুন।</p>
        <Link to="/pages/menu/contact" className="inline-flex items-center gap-2 text-purple-600 font-bold border-2 border-purple-600 px-6 py-2 rounded-full hover:bg-purple-600 hover:text-white transition-all">
          <MessageSquare size={20} /> আপত্তি বা সংশোধন জানাতে ক্লিক করুন
        </Link>
      </section>
    </div>
  );
};

export default PrivacyPolicy;