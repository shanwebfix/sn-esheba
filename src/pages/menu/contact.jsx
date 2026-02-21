import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, MessageCircle, Youtube, Send, ExternalLink } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    
    const yourEmail = "shandesignerbd@gmail.com"; // এখানে আপনার আসল জিমেইল অ্যাড্রেস বসান
    const subject = encodeURIComponent(`নতুন বার্তা: ${formData.name}`);
    const body = encodeURIComponent(
      `নাম: ${formData.name}\n` +
      `যোগাযোগ: ${formData.contact}\n\n` +
      `বার্তা:\n${formData.message}`
    );

    // mailto লিঙ্ক তৈরি করা যা জিমেইল/ইমেইল অ্যাপ ওপেন করবে
    window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen mb-10  bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
      {/* Header */}
      <section className="py-20 px-6 text-center bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-600 dark:text-purple-500">যোগাযোগ করুন</h1>
        <p className="max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          নিচের ফর্মটি পূরণ করে "বার্তা পাঠান" বাটনে ক্লিক করলে সরাসরি আপনার ইমেইল অ্যাপ ওপেন হবে।
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info (Left Side) */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold border-l-4 border-purple-600 pl-4">সরাসরি যোগাযোগ</h2>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-5">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-2xl text-purple-600"><Phone size={24} /></div>
              <div><h4 className="font-bold text-lg">ফোন করুন</h4><p>+৮৮০ ১৭০০-০০۰۰০০</p></div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-2xl text-purple-600"><Mail size={24} /></div>
              <div><h4 className="font-bold text-lg">ইমেইল</h4><p>shandesignerbd@gmail.com</p></div>
            </div>
          </div>
        </div>

        {/* Contact Form (Right Side) */}
        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
          <form onSubmit={handleEmailClick} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 ml-1">আপনার নাম</label>
              <input 
                name="name"
                required
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="নাম লিখুন"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 ml-1">আপনার ইমেইল বা ফোন</label>
              <input 
                name="contact"
                required
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="যোগাযোগের মাধ্যম"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 ml-1">আপনার বার্তা</label>
              <textarea 
                name="message"
                required
                onChange={handleChange}
                rows="4"
                className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                placeholder="বিস্তারিত এখানে লিখুন..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-xl transition-all flex items-center justify-center space-x-2"
            >
              <span>বার্তা পাঠান</span>
              <ExternalLink size={18} />
            </button>
          </form>
          <p className="text-xs text-center text-gray-500 mt-4 italic">
            * এটি ক্লিক করলে আপনার ফোনের ডিফল্ট ইমেইল অ্যাপ ওপেন হবে।
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;