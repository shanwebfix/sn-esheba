import React, { useState } from 'react'
import { Microscope, Phone, MapPin, Clock, Search, Navigation, FlaskConical, ClipboardList } from 'lucide-react'

export default function ShamshernagarDiagnostics() {
  const [searchTerm, setSearchTerm] = useState('');

  const diagnostics = [
    {
      id: 1,
      name: 'লাইফলাইন ডায়াগনস্টিক সেন্টার',
      location: 'শমসেরনগর বাজার (সদর)',
      phone: '01700-112233',
      image: 'https://images.unsplash.com/photo-1579152276503-34e8574a4857?auto=format&fit=crop&q=80&w=800',
      tests: ['রক্ত পরীক্ষা', 'ডিজিটাল এক্স-রে', 'ইসিজি'],
      mapUrl: 'https://www.google.com/maps/search/Lifeline+Shamshernagar'
    },
    {
      id: 2,
      name: 'পপুলার ডিজিটাল ডায়াগনস্টিক',
      location: 'চৌমুহনী চত্বর, শমসেরনগর',
      phone: '01800-445566',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800',
      tests: ['আলট্রাসনোগ্রাফি', 'প্যাথলজি', 'ডায়াবেটিস'],
      mapUrl: 'https://www.google.com/maps/search/Popular+Diagnostic+Shamshernagar'
    },
    {
      id: 3,
      name: 'মডার্ন হেলথ কেয়ার',
      location: 'ভানুগাছ রোড, শমসেরনগর',
      phone: '01900-778899',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
      tests: ['হরমোন টেস্ট', 'ইউরিন টেস্ট', 'ফিজিওথেরাপি'],
      mapUrl: 'https://www.google.com/maps/search/Modern+Healthcare+Shamshernagar'
    }
  ];

  const filteredData = diagnostics.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen mb-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
             <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl">
               <Microscope className="text-purple-600 dark:text-purple-400 w-8 h-8" />
             </div>
             <h1 className="text-3xl font-black text-slate-900 dark:text-white">ডায়াগনস্টিক সেন্টার</h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg">শমসেরনগর এলাকার আধুনিক ল্যাবরেটরি ও প্যাথলজি সেবা সেন্টারসমূহের তালিকা</p>
        </div>

        {/* Search Box */}
        <div className="relative mb-10 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
          <input 
            type="text"
            placeholder="ডায়াগনস্টিক সেন্টারের নাম লিখুন..."
            className="w-full pl-14 pr-6 py-5 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none dark:text-white shadow-sm focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Diagnostic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item) => (
            <div 
              key={item.id}
              className="group bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <a 
                  href={item.mapUrl} target="_blank" rel="noreferrer"
                  className="absolute bottom-4 right-4 p-3 bg-white/90 dark:bg-slate-800/90 rounded-2xl text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all shadow-lg"
                >
                  <Navigation size={20} fill="currentColor" />
                </a>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">{item.name}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <MapPin size={14} className="text-red-500" />
                  {item.location}
                </div>

                {/* Available Tests Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tests.map(test => (
                    <span key={test} className="text-[10px] font-bold bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 px-3 py-1.5 rounded-lg border border-purple-100 dark:border-purple-800/50">
                      • {test}
                    </span>
                  ))}
                </div>

                {/* Footer Call Section */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-400">
                      <Clock size={16} />
                    </div>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">সকাল ৮ - রাত ১০</span>
                  </div>
                  <button 
                    onClick={() => window.location.href=`tel:${item.phone}`}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-purple-100 dark:shadow-none"
                  >
                    <Phone size={16} fill="currentColor" />
                    কল দিন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}