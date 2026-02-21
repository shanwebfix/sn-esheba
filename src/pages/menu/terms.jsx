import React from 'react';
import { ShieldAlert, Share2, PhoneOff, Edit, Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen mb-10 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
      {/* Header */}
      <section className="py-20 px-6 text-center bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
        <div className="flex justify-center mb-6 text-purple-600">
          <Scale size={48} />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-purple-600">শর্তাবলী ও নিয়মাবলী</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          আমাদের সেবাটি ব্যবহারের আগে নিচের শর্তগুলো মেনে নেওয়া বাধ্যতামূলক।
        </p>
      </section>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-12">
        
        <div className="flex gap-6 group">
          <Share2 className="text-purple-600 shrink-0" size={32} />
          <div>
            <h2 className="text-2xl font-bold mb-3">ব্যক্তিগত দায়বদ্ধতা ও যোগাযোগ</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              অ্যাপে প্রদর্শিত কোনো ফোন নম্বরে যোগাযোগের ক্ষেত্রে সম্পূর্ণ নিজ দায়িত্বে যোগাযোগ করবেন। আমরা কেবল যোগাযোগের মাধ্যম হিসেবে কাজ করি। কোনো প্রকার প্রতারণা বা অনাকাঙ্ক্ষিত পরিস্থিতির দায়ভার ব্যবহারকারীর নিজের।
            </p>
          </div>
        </div>

        <div className="flex gap-6 group">
          <PhoneOff className="text-red-500 shrink-0" size={32} />
          <div>
            <h2 className="text-2xl font-bold mb-3 text-red-600">জরুরি নম্বরের অপব্যবহার</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              অ্যাপে থাকা কোনো জরুরি সেবা নম্বর (যেমন রক্তদাতা, অ্যাম্বুলেন্স, পুলিশ) অকারণে বা অপ্রয়োজনে কল দিয়ে বিরক্ত করা কঠোরভাবে নিষিদ্ধ। এমন অভিযোগ পাওয়া গেলে আপনার আইপি বা ডিভাইস আমাদের সিস্টেম থেকে স্থায়ীভাবে ব্লক করে দেওয়া হবে।
            </p>
          </div>
        </div>

        <div className="flex gap-6 group">
          <Edit className="text-purple-600 shrink-0" size={32} />
          <div>
            <h2 className="text-2xl font-bold mb-3">তথ্য সংশোধন ও অধিকার</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              আমরা জনস্বার্থে বিভিন্ন তথ্য সংগ্রহ করেছি। কোনো তথ্য আপনার কাছে ভুল মনে হলে বা আপনার নিজের তথ্য সরাতে চাইলে আমাদের কন্টাক্ট পেজে মেসেজ দিন। আমরা দ্রুত তা ঠিক করে দেবো।
            </p>
          </div>
        </div>

        <div className="flex gap-6 group">
          <ShieldAlert className="text-purple-600 shrink-0" size={32} />
          <div>
            <h2 className="text-2xl font-bold mb-3">সেবার পরিবর্তন</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              কর্তৃপক্ষ যেকোনো সময় কোনো পূর্ব ঘোষণা ছাড়াই এই শর্তাবলী পরিবর্তন করার বা অ্যাপের যেকোনো সেবা বন্ধ করার অধিকার রাখে।
            </p>
          </div>
        </div>

      </section>

      {/* Action Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900/50 text-center">
        <div className="max-w-3xl mx-auto border-2 border-dashed border-purple-200 dark:border-purple-800 p-8 rounded-3xl">
          <h3 className="text-xl font-bold mb-2">আমাদের সাথে যোগাযোগ</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400 italic">
             ডেটা সুরক্ষা সম্পর্কিত তথ্যের জন্য আমাদের <Link to="/pages/menu/privacy" className="text-purple-600 underline">গোপনীয়তা নীতি</Link> দেখুন।
          </p>
          <Link to="/pages/menu/contact" className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-all shadow-lg">
            সরাসরি যোগাযোগ করুন <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;