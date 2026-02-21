import { useState } from 'react';
import { MapPin, Phone, Mail, Globe, X, Laptop, Award, Star, CheckCircle2, Terminal, ArrowRight, ExternalLink } from 'lucide-react';

function ComputerCenter() {
  const [selectedCenter, setSelectedCenter] = useState(null);

  const centers = [
    {
      id: 1,
      name: "ক্রিয়েটিভ আইটি ইনস্টিটিউট",
      location: "শমসেরনগর, মেইন রোড",
      address: "আইটি পার্ক ভবন, ৩য় তলা",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      students: "২৫,০০০+",
      established: "২০০৮",
      description: "বাংলাদেশের অন্যতম শীর্ষস্থানীয় আইটি প্রতিষ্ঠান যেখানে দক্ষ মেন্টরদের মাধ্যমে হাতে-কলমে প্রজেক্ট ভিত্তিক কাজ শেখানো হয়।",
      phone: "+৮৮০ ১৬১১-৯৯৮৮৭৭",
      email: "info@creativeit.com",
      website: "www.creativeit.com",
      categories: ["গ্রাফিক ডিজাইন", "ওয়েব ডেভেলপমেন্ট"],
      features: ["লাইফটাইম সাপোর্ট", "ইন্টার্নশিপ সুবিধা", "হাই-কনফিগ ল্যাব"],
      skills: ["Photoshop", "React.js", "Python"],
      achievements: ["বেস্ট আইটি ট্রেনিং সেন্টার ২০২৪", "৫০০০+ সফল ফ্রিল্যান্সার"]
    },
    {
      id: 2,
      name: "কোডার্স ট্রাস্ট বাংলাদেশ",
      location: "স্টেশন রোড, শমসেরনগর",
      address: "নলেজ ভ্যালি, ব্লক-বি",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      students: "১২,০০০+",
      established: "২০১৪",
      description: "আন্তর্জাতিক মানের আইটি দক্ষতা অর্জন এবং গ্লোবাল মার্কেটে ক্যারিয়ার গড়ার জন্য একটি আদর্শ প্রতিষ্ঠান।",
      phone: "+৮৮০ ১৭৫৫-৪৪৩৩২২",
      email: "support@coderstrust.com",
      website: "www.coderstrust.com.bd",
      categories: ["সফটওয়্যার ইঞ্জিনিয়ারিং", "ডেটা এন্ট্রি"],
      features: ["গ্লোবাল সার্টিফিকেশন", "সফট স্কিল ট্রেনিং", "ফ্রিল্যান্সিং গাইডলাইন"],
      skills: ["Full Stack", "Data Analytics", "UI/UX Design"],
      achievements: ["আইসিটি মন্ত্রণালয় স্বীকৃত"]
    }
  ];

  return (
    <div className="min-h-screen  p-4 md:p-10 transition-colors duration-300">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-16 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">আইটি ট্রেনিং সেন্টার</h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium italic">আপনার পছন্দের কোর্সটি বেছে নিন এবং ক্যারিয়ার গড়ুন</p>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {centers.map((center) => (
          <div 
            key={center.id}
            className="group bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-cyan-500 transition-all duration-500 overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none flex flex-col"
          >
            {/* Image Wrapper */}
            <div className="relative h-56 overflow-hidden">
              <img src={center.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-black">
                {center.rating} ★
              </div>
            </div>

            {/* Content Wrapper */}
            <div className="p-7 flex-grow flex flex-col">
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 leading-tight">{center.name}</h3>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-6">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>{center.location}</span>
              </div>
              
              {/* Detailed Button Added Here */}
              <button 
                onClick={() => setSelectedCenter(center)}
                className="mt-auto group/btn flex items-center justify-center gap-2 w-full py-4 bg-slate-900 dark:bg-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-500 text-white rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-cyan-500/10 active:scale-95"
              >
                বিস্তারিত দেখুন
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {selectedCenter && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedCenter(null)}
              className="absolute top-6 right-6 z-10 bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-10">
                {/* Left Side: Image & Fast Info */}
                <div className="md:w-1/2">
                  <img src={selectedCenter.image} className="w-full h-72 object-cover rounded-[2.5rem] shadow-2xl mb-6" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                       <p className="text-[10px] text-slate-400 font-black uppercase">শিক্ষার্থী সংখ্যা</p>
                       <p className="text-lg font-black text-slate-800 dark:text-white">{selectedCenter.students}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                       <p className="text-[10px] text-slate-400 font-black uppercase">স্থাপিত বছর</p>
                       <p className="text-lg font-black text-slate-800 dark:text-white">{selectedCenter.established}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Details */}
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 leading-tight">{selectedCenter.name}</h2>
                  <p className="text-slate-600 dark:text-slate-400 font-medium mb-8 leading-relaxed">
                    {selectedCenter.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-4">মূল আকর্ষণসমূহ</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedCenter.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-4">
                      <a href={`tel:${selectedCenter.phone}`} className="flex-1 py-4 bg-cyan-600 text-white rounded-2xl text-center font-bold text-sm shadow-lg shadow-cyan-600/20 hover:bg-cyan-700 transition-colors">
                        কল করুন
                      </a>
                      <button className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl hover:text-cyan-500 transition-colors">
                        <Globe className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-20 pb-10 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
        © ২০২৬ আইটি ডিরেক্টরি শমসেরনগর
      </footer>
    </div>
  );
}

export default ComputerCenter;