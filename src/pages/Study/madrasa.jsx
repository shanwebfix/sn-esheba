import { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Star, X, BookOpen, Award, Globe, GraduationCap } from 'lucide-react';

function School() {
  const [selectedSchool, setSelectedSchool] = useState(null);

  const schools = [
    {
      id: 1,
      name: "বি,এ,এফ শাহীন স্কুল এন্ড কলেজ",
      location: "শমসেরনগর, এয়ারপোর্ট রোড",
      address: "১২৩ শিক্ষা সরণি",
      image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      established: "১৯৮৫",
      students: "১,২৫০",
      rating: 4.7,
      description: "শীর্ষ স্থানাধিকারী স্কুল যেখানে আছে উন্নত সুযোগ-সুবিধা এবং অভিজ্ঞ শিক্ষকমণ্ডলী।",
      phone: "+৮৮০ ১৮১২-৩৪৫৬৭৮",
      email: "info@greenwood.edu",
      website: "www.greenwood.edu.bd",
      medium: "ইংরেজি ও বাংলা",
      facilities: ["স্মার্ট ক্লাসরুম", "লাইব্রেরি", "খেলার মাঠ", "কম্পিউটার ল্যাব"],
      achievements: ["বেস্ট স্কুল অ্যাওয়ার্ড ২০২৩", "জাতীয় পর্যায়ে ক্রীড়া চ্যাম্পিয়ন"]
    },
    {
      id: 2,
      name: "এ, এ, টি, এম বহুমুখী উচ্চ বিদ্যালয়",
      location: "শমসেরনগর, লামাবাজার",
      address: "৪৫৬ শিক্ষা রোড",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      established: "১৯৯২",
      students: "৯৮০",
      rating: 4.5,
      description: "সমন্বিত শিক্ষার উপর ফোকাসসহ আধুনিক অবকাঠামো।",
      phone: "+৮৮০ ১৮১৩-৪৫৬৭৮৯",
      email: "admissions@riverside.edu",
      website: "www.riverside.edu.bd",
      medium: "ইংরেজি",
      facilities: ["সাঁতারের পুল", "মিউজিক রুম", "সায়েন্স ল্যাব", "অডিটোরিয়াম"],
      achievements: ["আইসিটিতে শ্রেষ্ঠত্ব", "সাংস্কৃতিক প্রতিযোগিতায় রানার আপ"]
    },
    {
      id: 3,
      name: "হাজ্বী উস্তার বালিকা উচ্চ বিদ্যালয়",
      location: "শমসেরনগর, ভানুগাছ রোড",
      address: "৭৮৯ সানশাইন এভিনিউ",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      established: "২০০৫",
      students: "৬৫০",
      rating: 4.8,
      description: "শিশুবান্ধব পরিবেশসহ সেরা প্রাথমিক বিদ্যালয়।",
      phone: "+৮৮০ ১৮১৪-৫৬৭৮৯০",
      email: "contact@sunshine.edu",
      website: "www.sunshine.edu.bd",
      medium: "বাংলা",
      facilities: ["খেলার জোন", "আর্ট রুম", "কাউন্সেলিং", "সুরক্ষিত ক্যাম্পাস"],
      achievements: ["শিশু বিকাশে শ্রেষ্ঠ স্কুল", "সৃজনশীলতা অ্যাওয়ার্ড"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 mb-10 rounded-xl transition-colors duration-300">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">মাদরাসা ডিরেক্টরি</h1>
            <p className="text-slate-600 dark:text-slate-400 font-medium">সকল মাদরাসার তথ্য এক জায়গায়</p>
          </div>
          <div className="mt-4 md:mt-0 bg-white dark:bg-slate-900 px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-900 dark:text-white font-bold">
              <span className="text-blue-600 dark:text-blue-400">{schools.length}</span> টি মাদরাসা পাওয়া গেছে
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl p-5 border border-blue-100 dark:border-slate-800">
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <p className="text-sm font-semibold italic">শমসেরনগর অঞ্চলের সেরা শিক্ষাপ্রতিষ্ঠানগুলোর নির্ভরযোগ্য তথ্য ভাণ্ডার।</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schools.map((school) => (
          <div 
            key={school.id}
            className="group bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 dark:border-slate-800 hover:border-blue-500 overflow-hidden"
            onClick={() => setSelectedSchool(school)}
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={school.image} 
                alt={school.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-black text-slate-900 dark:text-white shadow-lg">
                {school.rating} ⭐
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent p-6">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="font-bold text-xs uppercase tracking-widest">{school.location}</span>
                </div>
              </div>
            </div>
            
            <div className="p-7">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight">{school.name}</h3>
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              </div>
              
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 font-medium line-clamp-1">{school.address}</p>
              
              <div className="grid grid-cols-3 gap-2 mb-8">
                {[
                  { icon: Calendar, label: "স্থাপিত", val: school.established, color: "text-blue-500" },
                  { icon: Users, label: "শিক্ষার্থী", val: school.students, color: "text-emerald-500" },
                  { icon: BookOpen, label: "মাধ্যম", val: school.medium, color: "text-purple-500" }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-3 text-center border border-slate-100 dark:border-slate-800">
                    <stat.icon className={`w-4 h-4 ${stat.color} mx-auto mb-1`} />
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase">{stat.label}</p>
                    <p className="text-slate-900 dark:text-slate-200 font-bold text-[10px] truncate">{stat.val}</p>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl hover:opacity-90 transition-all font-black text-xs uppercase tracking-widest active:scale-95 shadow-lg">
                বিস্তারিত প্রোফাইল
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedSchool && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-[1000] animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative">
            
            <button 
              onClick={() => setSelectedSchool(null)}
              className="absolute top-6 right-6 z-10 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 leading-tight uppercase tracking-tighter">{selectedSchool.name}</h2>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{selectedSchool.location}</span>
                </div>
              </div>
              
              <img 
                src={selectedSchool.image} 
                alt={selectedSchool.name}
                className="w-full h-72 object-cover rounded-[2.5rem] mb-10 shadow-2xl"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side */}
                <div className="space-y-6">
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-800">
                    <h3 className="text-xs font-black text-blue-600 dark:text-blue-400 mb-5 flex items-center gap-2 uppercase tracking-widest">
                      <Globe className="w-4 h-4" /> মৌলিক তথ্য
                    </h3>
                    <div className="space-y-4">
                      {[
                        { label: "ঠিকানা", val: selectedSchool.address },
                        { label: "স্থাপিত", val: selectedSchool.established },
                        { label: "শিক্ষার্থী", val: `${selectedSchool.students} জন` },
                        { label: "মাধ্যম", val: selectedSchool.medium }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700/50 pb-2 last:border-0">
                          <span className="text-xs font-bold text-slate-400 uppercase">{item.label}</span>
                          <span className="text-sm font-black text-slate-900 dark:text-white">{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-800">
                    <h3 className="text-xs font-black text-yellow-600 dark:text-yellow-500 mb-5 flex items-center gap-2 uppercase tracking-widest">
                      <Award className="w-4 h-4" /> অর্জনসমূহ
                    </h3>
                    <ul className="space-y-3">
                      {selectedSchool.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right Side */}
                <div className="space-y-6">
                  <div className="p-2">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">প্রতিষ্ঠান সম্পর্কে</h3>
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-300 leading-relaxed italic">"{selectedSchool.description}"</p>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-800">
                    <h3 className="text-xs font-black text-purple-600 dark:text-purple-400 mb-4 uppercase tracking-widest">সুবিধাসমূহ</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSchool.facilities.map((facility, index) => (
                        <span key={index} className="px-3 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-xl text-[10px] font-black border border-slate-200 dark:border-slate-700 uppercase tracking-tighter">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-900 dark:bg-blue-700 rounded-[2rem] p-7 text-white shadow-xl">
                    <h3 className="text-xs font-black opacity-60 uppercase tracking-widest mb-5">সরাসরি যোগাযোগ</h3>
                    <div className="space-y-4">
                      <a href={`tel:${selectedSchool.phone}`} className="flex items-center gap-4 group">
                        <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-black">{selectedSchool.phone}</span>
                      </a>
                      <a href={`mailto:${selectedSchool.email}`} className="flex items-center gap-4 group">
                        <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                          <Mail className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-black truncate">{selectedSchool.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedSchool(null)}
                className="w-full mt-10 py-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] hover:bg-red-500 hover:text-white transition-all active:scale-[0.98]"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-slate-200 dark:border-slate-900">
        <p className="text-center text-slate-400 dark:text-slate-600 font-black text-[10px] uppercase tracking-[0.4em]">
          © ২০২৬ বাংলাদেশ শিক্ষা বোর্ড ডিরেক্টরি | সকল স্বত্ব সংরক্ষিত
        </p>
      </div>
    </div>
  );
}

export default School;