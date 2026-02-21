import React, { useState } from 'react';
import { 
  X, MapPin, Info, Fuel, Search, 
  Navigation2, Gauge, Clock, Droplets
} from 'lucide-react';

const FuelStationLocationOnly = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fuelStations = [
    {
      id: 1,
      name: "শমশেরনগর ফিলিং স্টেশন",
      type: "পেট্রোল, অকটেন ও ডিজেল",
      location: "শমশেরনগর-মৌলভীবাজার রোড",
      mapLink: "https://www.google.com/maps/search/Shamshernagar+Filling+Station",
      status: "২৪ ঘণ্টা খোলা",
      available: "অকটেন, পেট্রোল, ডিজেল",
      description: "ডিজিটাল মিটার ও বিশুদ্ধ জ্বালানি।"
    },
    {
      id: 2,
      name: "সাউথ পয়েন্ট সিএনজি স্টেশন",
      type: "সিএনজি ফিলিং স্টেশন",
      location: "চাতলাপুর রোড, শমশেরনগর",
      mapLink: "https://www.google.com/maps/search/CNG+Station+Shamshernagar",
      status: "সকাল ৬টা - রাত ১১টা",
      available: "সিএনজি গ্যাস",
      description: "আধুনিক কম্প্রেসর সুবিধা সম্পন্ন।"
    }
  ];

  const filteredStations = fuelStations.filter(s => 
    s.name.includes(searchQuery) || s.type.includes(searchQuery)
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold mb-4">
             <Fuel size={14} /> ফুয়েল স্টেশন লোকেশন
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">জ্বালানি ও গ্যাস স্টেশন</h1>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input 
            type="text"
            placeholder="পাম্পের নাম লিখে সার্চ করুন..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-emerald-500/10 font-bangla font-bold"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStations.map((station) => (
            <div key={station.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6 font-bangla">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600">
                  <Fuel size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold dark:text-white leading-tight">{station.name}</h3>
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1">{station.type}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <a 
                  href={station.mapLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-center text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-blue-500/20 font-bangla"
                >
                  <Navigation2 size={16} /> ম্যাপ লোকেশন
                </a>
                <button 
                  onClick={() => setSelectedStation(station)}
                  className="px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold"
                >
                  <Info size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- মডাল পপআপ (শুধুমাত্র লোকেশন বাটন) --- */}
      {selectedStation && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/60">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[3rem] p-8 relative animate-in zoom-in-95 shadow-2xl border border-white/10">
            <button onClick={() => setSelectedStation(null)} className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:bg-red-500 hover:text-white transition-all">
              <X size={18} />
            </button>

            <div className="text-center mb-6 font-bangla">
              <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/20 rounded-[2rem] flex items-center justify-center mx-auto mb-4">
                <Droplets size={40} className="text-emerald-600" />
              </div>
              <h2 className="text-2xl font-black dark:text-white leading-tight">{selectedStation.name}</h2>
              <p className="text-emerald-600 font-bold text-sm uppercase mt-1 tracking-tighter">{selectedStation.type}</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/40 rounded-3xl p-6 mb-8 border border-slate-100 dark:border-slate-800 space-y-4 font-bangla">
              <div className="flex items-start gap-3">
                <Gauge className="text-emerald-500 mt-1" size={18} />
                <div className="text-sm">
                  <p className="text-[10px] text-slate-400 font-black uppercase">উপলব্ধ জ্বালানি</p>
                  <p className="font-bold dark:text-slate-200">{selectedStation.available}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-slate-200 dark:border-slate-800 pt-3">
                <Clock className="text-blue-500 mt-1" size={18} />
                <div className="text-sm">
                  <p className="text-[10px] text-slate-400 font-black uppercase">খোলা থাকার সময়</p>
                  <p className="font-bold dark:text-slate-200">{selectedStation.status}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-slate-200 dark:border-slate-800 pt-3">
                <MapPin className="text-red-500 mt-1" size={18} />
                <div className="text-sm">
                  <p className="text-[10px] text-slate-400 font-black uppercase">ঠিকানা</p>
                  <p className="font-bold dark:text-slate-200">{selectedStation.location}</p>
                </div>
              </div>
            </div>

            {/* শুধুমাত্র লোকেশন বাটন (Full Width) */}
            <div className="font-bangla">
               <a 
                 href={selectedStation.mapLink} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="w-full flex items-center justify-center gap-3 py-4 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
               >
                  <Navigation2 size={22} /> পাম্পের লোকেশন দেখুন
               </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FuelStationLocationOnly;