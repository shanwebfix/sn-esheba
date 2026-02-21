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
    },
    {
      id: 4,
      name: "মেইপেলউড আন্তর্জাতিক স্কুল",
      location: "ওয়েস্ট এন্ড",
      address: "১০১ গ্লোবাল স্ট্রিট",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      established: "১৯৭৮",
      students: "২,১০০",
      rating: 4.9,
      description: "আন্তর্জাতিক কারিকুলামসহ বৈশ্বিক এক্সপোজার।",
      phone: "+৮৮০ ১৮১৫-৬৭৮৯০১",
      email: "admissions@maplewood.edu",
      website: "www.maplewood.edu.bd",
      medium: "ইংরেজি",
      facilities: ["আন্তর্জাতিক লাইব্রেরি", "ডিজিটাল ল্যাব", "হোস্টেল", "ট্রান্সপোর্ট"],
      achievements: ["আইবি ডিপ্লোমা স্বীকৃতি", "বেস্ট ইন্টারন্যাশনাল স্কুল"]
    },
    {
      id: 5,
      name: "হিলটপ মাধ্যমিক বিদ্যালয়",
      location: "হিলটপ অঞ্চল",
      address: "২২২ জ্ঞান সড়ক",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      established: "১৯৯৫",
      students: "১,১০০",
      rating: 4.6,
      description: "চমৎকার একাডেমিক রেকর্ড এবং ক্রীড়া সুবিধা।",
      phone: "+৮৮০ ১৮১৬-৭৮৯০১২",
      email: "info@hilltop.edu",
      website: "www.hilltop.edu.bd",
      medium: "বাংলা ও ইংরেজি",
      facilities: ["স্পোর্টস কমপ্লেক্স", "মেডিকেল রুম", "ক্যারিয়ার গাইডেন্স", "ক্যাফেটেরিয়া"],
      achievements: ["ক্রীড়ায় জাতীয় চ্যাম্পিয়ন", "১০০% পাস রেট"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 mb-10 rounded-lg transition-colors duration-300">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">কলেজ ডিরেক্টরি</h1>
            <p className="text-slate-600 dark:text-slate-400">সকল কলেজের তথ্য এক জায়গায়</p>
          </div>
          <div className="mt-4 md:mt-0 bg-white dark:bg-slate-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-900 dark:text-white font-semibold">
              <span className="text-blue-600 dark:text-blue-400">{schools.length}</span> টি কলেজ পাওয়া গেছে
            </p>
          </div>
        </div>
        
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <p className="text-sm font-medium">বাংলাদেশের সেরা শিক্ষাপ্রতিষ্ঠানগুলোর নির্ভরযোগ্য তথ্য</p>
          </div>
        </div>
      </div>

      {/* School Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((school) => (
          <div 
            key={school.id}
            className="group bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 overflow-hidden"
            onClick={() => setSelectedSchool(school)}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={school.image} 
                alt={school.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                {school.rating} ⭐
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4">
                <div className="flex items-center gap-1 text-white">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="font-medium text-sm">{school.location}</span>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{school.name}</h3>
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              </div>
              
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-1">{school.address}</p>
              
              <div className="grid grid-cols-3 gap-2 mb-5">
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-2 text-center border border-slate-100 dark:border-slate-800">
                  <Calendar className="w-4 h-4 text-blue-500 dark:text-blue-400 mx-auto mb-1" />
                  <p className="text-[10px] text-slate-400 uppercase">স্থাপিত</p>
                  <p className="text-slate-900 dark:text-slate-200 font-bold text-xs">{school.established}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-2 text-center border border-slate-100 dark:border-slate-800">
                  <Users className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mx-auto mb-1" />
                  <p className="text-[10px] text-slate-400 uppercase">শিক্ষার্থী</p>
                  <p className="text-slate-900 dark:text-slate-200 font-bold text-xs">{school.students}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-2 text-center border border-slate-100 dark:border-slate-800">
                  <BookOpen className="w-4 h-4 text-purple-500 dark:text-purple-400 mx-auto mb-1" />
                  <p className="text-[10px] text-slate-400 uppercase">মাধ্যম</p>
                  <p className="text-slate-900 dark:text-slate-200 font-bold text-[10px] truncate">{school.medium}</p>
                </div>
              </div>
              
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-blue-500/20">
                বিস্তারিত দেখুন
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedSchool && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{selectedSchool.name}</h2>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>{selectedSchool.location}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedSchool(null)}
                  className="text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <img 
                src={selectedSchool.image} 
                alt={selectedSchool.name}
                className="w-full h-64 object-cover rounded-xl mb-6 shadow-md"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      মৌলিক তথ্য
                    </h3>
                    <div className="space-y-3">
                      {[
                        { label: "ঠিকানা", val: selectedSchool.address },
                        { label: "স্থাপিত", val: selectedSchool.established },
                        { label: "শিক্ষার্থী", val: `${selectedSchool.students} জন` },
                        { label: "মাধ্যম", val: selectedSchool.medium },
                        { label: "রেটিং", val: `${selectedSchool.rating}/5` }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400 font-medium">{item.label}:</span>
                          <span className="text-slate-900 dark:text-slate-100 font-bold text-right ml-2">{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-500" />
                      অর্জনসমূহ
                    </h3>
                    <ul className="space-y-2">
                      {selectedSchool.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">বর্ণনা</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">{selectedSchool.description}</p>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">সুবিধাসমূহ</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSchool.facilities.map((facility, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-bold border border-blue-200 dark:border-blue-800/50"
                        >
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">যোগাযোগ</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-slate-700 dark:text-slate-200 text-sm font-bold">{selectedSchool.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-slate-700 dark:text-slate-200 text-sm font-bold truncate">{selectedSchool.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-slate-700 dark:text-slate-200 text-sm font-bold truncate">{selectedSchool.website}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedSchool(null)}
                className="w-full mt-8 py-4 bg-slate-900 dark:bg-slate-800 text-white rounded-xl hover:opacity-90 transition-all font-bold shadow-lg"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-900">
        <p className="text-center text-slate-400 dark:text-slate-600 text-sm font-medium">
          © ২০২৬ বাংলাদেশ শিক্ষা বোর্ড | সকল স্বত্ব সংরক্ষিত
        </p>
      </div>
    </div>
  );
}

export default School;