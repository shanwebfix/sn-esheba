import React, { useState } from 'react';
import { 
  MapPin, X, Navigation, Search, 
  Info, Users, Phone, Heart, 
  Moon, Calendar, MessageCircle
} from 'lucide-react';

const GraveyardDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGraveyard, setSelectedGraveyard] = useState(null);

  const graveyardData = [
    { 
      id: 1, 
      name: 'শমশেরনগর কেন্দ্রীয় কবরস্থান', 
      location: 'শমশেরনগর বাজার উত্তর পার্শ্ব', 
      type: 'পাবলিক কবরস্থান',
      management: 'কবরস্থান পরিচালনা কমিটি',
      phone: '01700000000',
      facilities: ['বিশাল জানাজার মাঠ', 'লাইটিং সুবিধা', 'অজু ও গোসলখানা', 'সার্বক্ষণিক খাদেম'],
      history: 'এটি অত্র এলাকার প্রধান ও প্রাচীনতম কবরস্থান। এখানে কয়েক হাজার কবরের জায়গা রয়েছে এবং সুশৃঙ্খলভাবে দাফন কার্যক্রম পরিচালিত হয়।',
      mapUrl: 'http://googleusercontent.com/maps.google.com/3',
      img: 'https://images.pexels.com/photos/11690844/pexels-photo-11690844.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    { 
      id: 2, 
      name: 'বিএএফ শাহীন কবরস্থান', 
      location: 'বিমানবন্দর রোড, শমশেরনগর', 
      type: 'সংরক্ষিত (নির্দিষ্ট এলাকার জন্য)',
      management: 'বিএএফ কর্তৃপক্ষ',
      phone: '01700000000',
      facilities: ['অত্যন্ত পরিচ্ছন্ন', 'পাকা সীমানা প্রাচীর', 'ফুলের বাগান'],
      history: 'এটি বিমানবাহিনী ও সংশ্লিষ্ট এলাকার জন্য সংরক্ষিত। তবে বিশেষ অনুমতি সাপেক্ষে দাফন সম্পন্ন করা হয়।',
      mapUrl: 'http://googleusercontent.com/maps.google.com/3',
      img: 'https://images.pexels.com/photos/10103758/pexels-photo-10103758.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const filteredGraveyards = graveyardData.filter(g => 
    g.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen  pb-20">
      
      {/* Header */}
      <div className="bg-slate-800 py-16 px-4 text-center rounded-xl">
        <div className="mb-4 inline-flex p-3 bg-slate-700 rounded-full">
          <Moon size={32} className="text-slate-300" />
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">কবরস্থান ডিরেক্টরি</h1>
        <p className="text-slate-400 mt-2 font-medium italic">মৃত ব্যক্তিদের সম্মানে সঠিক তথ্য ও অবস্থান</p>
        
        {/* Search */}
        <div className="mt-8 relative max-w-lg mx-auto">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input 
            type="text" 
            placeholder="কবরস্থানের নাম লিখুন..."
            className="w-full pl-14 pr-6 py-4 rounded-2xl shadow-xl border-none outline-none dark:bg-slate-900 dark:text-white"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* List Grid */}
      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGraveyards.map(graveyard => (
          <div key={graveyard.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800 group">
            <div className="h-48 relative overflow-hidden">
              <img src={graveyard.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute top-4 left-4 bg-black/60 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase backdrop-blur-md">
                {graveyard.type}
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-bold dark:text-white mb-2 leading-tight">{graveyard.name}</h3>
              <p className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 font-medium">
                <MapPin size={14} className="text-slate-400" /> {graveyard.location}
              </p>
              
              <button 
                onClick={() => setSelectedGraveyard(graveyard)}
                className="w-full bg-slate-800 dark:bg-slate-700 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-colors"
              >
                বিস্তারিত তথ্য ও কন্টাক্ট
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedGraveyard && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[3rem] shadow-2xl relative overflow-hidden">
            
            <button 
              onClick={() => setSelectedGraveyard(null)}
              className="absolute top-6 right-6 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
            >
              <X size={20} />
            </button>

            <div className="max-h-[85vh] overflow-y-auto">
              <img src={selectedGraveyard.img} className="w-full h-56 object-cover grayscale-[0.5]" alt="" />
              
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-black dark:text-white mb-2">{selectedGraveyard.name}</h2>
                <div className="flex items-center gap-2 text-slate-500 font-bold text-sm mb-8 italic">
                  <MapPin size={16} /> {selectedGraveyard.location}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-3xl">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">পরিচালনায়</p>
                    <p className="font-bold dark:text-white text-sm">{selectedGraveyard.management}</p>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-3xl">
                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">জরুরি যোগাযোগ</p>
                    <p className="font-bold dark:text-white text-sm">{selectedGraveyard.phone}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">সুযোগ-সুবিধা</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedGraveyard.facilities.map((f, i) => (
                      <span key={i} className="bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-xl text-xs font-bold dark:text-slate-300 flex items-center gap-1.5">
                        <Heart size={12} className="text-red-400 fill-current" /> {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl mb-10 border-l-4 border-slate-500">
                   <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">ইতিহাস ও বর্ণনা</h4>
                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">"{selectedGraveyard.history}"</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={`tel:${selectedGraveyard.phone}`} 
                    className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-700 text-white py-5 rounded-2xl font-bold transition-all shadow-xl"
                  >
                    <Phone size={20} /> কল করুন
                  </a>
                  <a 
                    href={selectedGraveyard.mapUrl} 
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 py-5 rounded-2xl font-bold transition-all"
                  >
                    <Navigation size={20} /> ম্যাপ দেখুন
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraveyardDirectory;