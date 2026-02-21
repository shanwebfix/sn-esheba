import { useState } from 'react';
import { MapPin, Phone, Mail, Globe, X, BookOpen, Award, Star, Languages, MessageSquare, Clock, ShieldCheck, Users } from 'lucide-react';

function EnglishCenter() {
  const [selectedCenter, setSelectedCenter] = useState(null);

  const centers = [
    {
      id: 1,
      name: "ব্রিটিশ কাউন্সিল স্পোকেন হাব",
      location: "শমসেরনগর, মেইন রোড",
      address: "লেভেল ৫, সেন্টার পয়েন্ট টাওয়ার",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      established: "২০১০",
      totalStudents: "১০,০০০+",
      description: "আন্তর্জাতিক মানের কারিকুলাম এবং নেটিভ টিচারদের মাধ্যমে ইংরেজি শেখার সেরা জায়গা।",
      phone: "+৮৮০ ১৬১১-১১২২২৩",
      email: "info@britishhub.com",
      website: "www.britishhub.edu",
      levels: ["Beginner", "Intermediate", "Advanced"],
      courses: ["Spoken English Masterclass", "IELTS Preparation", "Business Communication"],
      highlights: ["নেটিভ ব্রিটিশ ইনস্ট্রাক্টর", "ফ্রি স্পিকিং ক্লাব", "স্মার্ট অডিও ল্যাব"],
      batchTime: "সকাল ১০:০০ - রাত ৮:০০"
    },
    {
      id: 2,
      name: "সাইফুর’স স্পোকেন কেয়ার",
      location: "ভানুগাছ রোড, শমসেরনগর",
      address: "৩২/এ গ্রিন ভিউ বিল্ডিং",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      established: "২০০৫",
      totalStudents: "৫০,০০০+",
      description: "সহজ পদ্ধতিতে ইংরেজি গ্রামার ও কথা বলার জড়তা কাটানোর নির্ভরযোগ্য প্রতিষ্ঠান।",
      phone: "+৮৮০ ১৭২২-৩৩৪৪৫৫",
      email: "contact@saifurs.com",
      website: "www.saifurs.com.bd",
      levels: ["Basic", "Fluency Builder"],
      courses: ["Zero to Hero English", "Phonetics & Accent", "Kids English"],
      highlights: ["সহজ টেকনিক", "লাইফটাইম সাপোর্ট", "প্র্যাকটিস পার্টনার সুবিধা"],
      batchTime: "সকাল ৯:০০ - রাত ৯:০০"
    },
    {
      id: 3,
      name: "মেন্টরস ইংলিশ ল্যাঙ্গুয়েজ",
      location: "আদর্শ পাড়া, শমসেরনগর",
      address: "৮ম তলা, স্কাই লাইন টাওয়ার",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      established: "২০১২",
      totalStudents: "১৫,০০০+",
      description: "ক্যারিয়ার এবং উচ্চশিক্ষার জন্য প্রফেশনাল ইংরেজি শেখার আধুনিক সেন্টার।",
      phone: "+৮৮০ ১৮৩৩-৪৪৫৫৬৬",
      email: "hello@mentors.edu",
      website: "www.mentors.com.bd",
      levels: ["Pre-Intermediate", "Corporate English"],
      courses: ["Presentation Skills", "Interview Crackers", "Advanced Writing"],
      highlights: ["উইকলি মক টেস্ট", "কর্পোরেট নেটওয়ার্কিং", "ল্যাংগুয়েজ ক্লাব"],
      batchTime: "সকাল ৮:০০ - রাত ৭:০০"
    }
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 transition-colors duration-300">
      {/* Hero Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
            <Languages className="w-4 h-4" /> শিখুন বিশ্বসেরা ভাষা
          </div>
          <h1 className="text-5xl font-extrabold text-zinc-900 dark:text-white mb-4">স্পোকেন ইংলিশ ডিরেক্টরি</h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl">
            নিজের জড়তা কাটিয়ে অনর্গল ইংরেজি বলতে শমসেরনগরের সেরা ল্যাঙ্গুয়েজ সেন্টারগুলো খুঁজে নিন।
          </p>
        </div>
      </div>

      {/* Center Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {centers.map((center) => (
          <div 
            key={center.id}
            onClick={() => setSelectedCenter(center)}
            className="group bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
          >
            <div className="relative h-56">
              <img src={center.image} alt={center.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-bold text-indigo-600 dark:text-indigo-400 shadow-lg">
                স্থাপিত {center.established}
              </div>
              <div className="absolute bottom-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-lg text-xs font-black">
                {center.rating} ★
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{center.name}</h3>
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                <MapPin className="w-4 h-4 text-indigo-500" />
                {center.location}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {center.levels.map((level, i) => (
                  <span key={i} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-md text-[10px] font-bold">
                    {level}
                  </span>
                ))}
              </div>

              <button className="w-full py-4 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-2xl font-bold text-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                বিস্তারিত দেখুন
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal */}
      {selectedCenter && (
        <div className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zinc-200 dark:border-zinc-800 shadow-2xl">
            <div className="relative h-64 md:h-80">
              <img src={selectedCenter.image} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedCenter(null)}
                className="absolute top-6 right-6 bg-white dark:bg-zinc-800 p-3 rounded-full hover:rotate-90 transition-all shadow-xl"
              >
                <X className="w-5 h-5 dark:text-white" />
              </button>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
                <div>
                  <h2 className="text-4xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">{selectedCenter.name}</h2>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg text-sm font-bold">
                      <ShieldCheck className="w-4 h-4" /> ভেরিফাইড ইনস্টিটিউট
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-lg text-sm font-bold">
                      <Users className="w-4 h-4" /> {selectedCenter.totalStudents} শিক্ষার্থী
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">ক্লাস টাইম</p>
                  <p className="text-lg font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-2 justify-end">
                    <Clock className="w-5 h-5" /> {selectedCenter.batchTime}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">প্রতিষ্ঠান সম্পর্কে</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{selectedCenter.description}</p>
                  </section>
                  
                  <section>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">আমাদের কোর্সসমূহ</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedCenter.courses.map((course, i) => (
                        <div key={i} className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-3 font-bold text-zinc-700 dark:text-zinc-300">
                          <BookOpen className="w-4 h-4 text-indigo-500" /> {course}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-indigo-600 rounded-3xl text-white">
                    <h3 className="text-sm font-black uppercase tracking-widest mb-4">বিশেষত্ব</h3>
                    <ul className="space-y-4">
                      {selectedCenter.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-bold">
                          <MessageSquare className="w-4 h-4 shrink-0 opacity-70" /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                    <h3 className="text-sm font-black uppercase tracking-widest mb-4 dark:text-white">যোগাযোগ</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm font-bold text-zinc-600 dark:text-zinc-300">
                        <Phone className="w-4 h-4 text-indigo-500" /> {selectedCenter.phone}
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold text-zinc-600 dark:text-zinc-300">
                        <Globe className="w-4 h-4 text-indigo-500" /> {selectedCenter.website}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EnglishCenter;