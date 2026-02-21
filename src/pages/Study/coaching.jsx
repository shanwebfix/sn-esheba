import { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Star, X, BookOpen, Award, Globe, GraduationCap, Clock, CheckCircle } from 'lucide-react';

function CoachingCenter() {
  const [selectedCoaching, setSelectedCoaching] = useState(null);

  const coachings = [
    {
      id: 1,
      name: "উদ্ভাস একাডেমিক এন্ড এডমিশন কেয়ার",
      location: "শমসেরনগর, মেইন রোড",
      address: "১০২ নলেজ প্লাজা, ২য় তলা",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      established: "২০০০",
      students: "৫০০০+",
      rating: 4.9,
      description: "ইঞ্জিনিয়ারিং এবং ভার্সিটি এডমিশনের জন্য বাংলাদেশের অন্যতম সেরা কোচিং সেন্টার।",
      phone: "+৮৮০ ১৬১১-২২৩৩৪৪",
      email: "info@udvash.com",
      website: "www.udvash.com",
      categories: ["একাডেমিক", "এডমিশন", "ইঞ্জিনিয়ারিং"],
      courses: ["HSC Physics", "Math Masterclass", "Medical Admission"],
      features: ["মানসম্মত লেকচার শিট", "সাপ্তাহিক মডেল টেস্ট", "ডিজিটাল ক্লাসরুম"],
      achievements: ["২০২৪ সালে ১০০০+ বুয়েট চান্স", "সেরা এডমিশন কেয়ার অ্যাওয়ার্ড"]
    },
    {
      id: 2,
      name: "রেটিনা মেডিকেল কোচিং",
      location: "সিলেট রোড, শমসেরনগর",
      address: "৫৬ নিরাময় ভবন",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      established: "১৯৮০",
      students: "৩২০০",
      rating: 4.8,
      description: "মেডিকেল ভর্তি পরীক্ষার প্রস্তুতির জন্য একটি নির্ভরযোগ্য নাম।",
      phone: "+৮৮০ ১৯১১-৫৫৬৬৭৭",
      email: "contact@retina.com.bd",
      website: "www.retina.com.bd",
      categories: ["মেডিকেল", "বায়োলজি স্পেশাল"],
      courses: ["Biology Advance", "Chemistry for Medical", "GK & English"],
      features: ["অভিজ্ঞ ডাক্তার মেন্টর", "দৈনিক কুইজ", "লাইব্রেরি সুবিধা"],
      achievements: ["মেডিকেল ভর্তি পরীক্ষায় ১ম স্থান (২০২৩)"]
    },
    {
      id: 3,
      name: "১০ মিনিট স্কুল (অফলাইন সেন্টার)",
      location: "শমসেরনগর, বাজার পয়েন্ট",
      address: "স্মার্ট টাওয়ার, লেভেল ৪",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      established: "২০১৫",
      students: "৮০০০+",
      rating: 4.7,
      description: "প্রযুক্তি নির্ভর আধুনিক শিক্ষা ব্যবস্থা এবং দেশের সেরা ইনস্ট্রাক্টর।",
      phone: "+৮৮০ ১৬১০-৯৯৮৮৭৭",
      email: "support@10minuteschool.com",
      website: "www.10ms.com",
      categories: ["স্কিল ডেভেলপমেন্ট", "একাডেমিক"],
      courses: ["Spoken English", "Coding for Kids", "HSC All Subjects"],
      features: ["অ্যাপ সাপোর্ট", "লাইভ সলভ ক্লাস", "মেন্টরশিপ"],
      achievements: ["বেস্ট এডু-টেক স্টার্টআপ", "৫ মিলিয়ন শিক্ষার্থী কমিউনিটি"]
    }
  ];

  return (
    <div className="min-h-scree p-4 transition-colors duration-300">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">কোচিং ডিরেক্টরি</h1>
            <p className="text-slate-600 dark:text-slate-400 font-medium">আপনার উজ্জ্বল ভবিষ্যতের মেন্টর খুঁজে নিন</p>
          </div>
          <div className="bg-blue-600 px-6 py-3 rounded-2xl shadow-lg shadow-blue-500/20">
            <p className="text-white font-bold text-sm">
              <span className="text-blue-100">{coachings.length}</span> টি সেন্টার নিবন্ধিত
            </p>
          </div>
        </div>
      </div>

      {/* Coaching Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coachings.map((center) => (
          <div 
            key={center.id}
            className="group bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200 dark:border-slate-800 hover:border-blue-500 overflow-hidden"
            onClick={() => setSelectedCoaching(center)}
          >
            <div className="relative h-52">
              <img 
                src={center.image} 
                alt={center.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-blue-600 dark:text-blue-400">
                {center.rating} ★
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                {center.categories.map((cat, i) => (
                  <span key={i} className="bg-blue-600/90 text-white text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-7">
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 leading-tight">{center.name}</h3>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{center.location}</span>
              </div>
              
              <div className="flex justify-between items-center py-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-black">শিক্ষার্থী</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-200">{center.students}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] text-slate-400 uppercase font-black">স্থাপিত</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-200">{center.established}</span>
                </div>
              </div>
              
              <button className="w-full py-4 mt-2 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-blue-700 active:scale-95 shadow-xl">
                বিস্তারিত প্রোফাইল
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {selectedCoaching && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 z-[1000]">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative">
            
            <button 
              onClick={() => setSelectedCoaching(null)}
              className="absolute top-6 right-6 z-10 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 mb-10">
                <div className="md:w-1/2">
                  <img src={selectedCoaching.image} className="w-full h-64 object-cover rounded-[2rem] shadow-xl" />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 leading-tight uppercase">{selectedCoaching.name}</h2>
                  <p className="text-slate-600 dark:text-slate-300 font-bold italic mb-4">"{selectedCoaching.description}"</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>{selectedCoaching.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="w-4 h-4 text-emerald-500" />
                      <span>সকাল ৮:০০ - রাত ৮:০০</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <h3 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" /> পপুলার কোর্সসমূহ
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedCoaching.courses.map((course, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                          <CheckCircle className="w-4 h-4 text-emerald-500" /> {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                   <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <h3 className="text-xs font-black text-yellow-600 dark:text-yellow-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Award className="w-4 h-4" /> সাফল্যগাঁথা
                    </h3>
                    <ul className="space-y-3">
                      {selectedCoaching.achievements.map((item, i) => (
                        <li key={i} className="text-sm font-bold text-slate-600 dark:text-slate-300 flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-500 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Bar */}
              <div className="mt-10 flex flex-wrap gap-4 p-6 bg-blue-600 rounded-3xl text-white shadow-2xl">
                <div className="flex items-center gap-3 border-r border-white/20 pr-4">
                  <Phone className="w-5 h-5" />
                  <span className="font-black text-sm">{selectedCoaching.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5" />
                  <span className="font-black text-sm">{selectedCoaching.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-20 pb-10 text-center border-t border-slate-200 dark:border-slate-900 pt-10">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">
          © ২০২৬ কোচিং ডিরেক্টরি | সকল তথ্য যাচাইকৃত
        </p>
      </footer>
    </div>
  );
}

export default CoachingCenter;