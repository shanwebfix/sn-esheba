import React, { useState } from 'react';
import { Trophy, MapPin, X, Phone, MessageCircle, Building2, Info, UserCircle, Navigation } from 'lucide-react';

const ClubList = ({ clubs }) => {
  const [selectedClub, setSelectedClub] = useState(null);

  return (
    <section>
      <div className="flex items-center gap-3 mb-10 border-l-4 border-indigo-600 pl-4">
        <Building2 className="text-indigo-600" size={32} />
        <h2 className="text-2xl font-black uppercase dark:text-white">নিবন্ধিত স্পোর্টস ক্লাব</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((club) => (
          <div key={club.id} className="bg-white dark:bg-slate-900 p-6 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center">
            <div className="w-full h-48 rounded-[2.5rem] overflow-hidden mb-6">
              <img src={club.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={club.name} />
            </div>
            <span className="text-[10px] font-black bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full uppercase mb-2">{club.type}</span>
            <h3 className="text-xl font-black dark:text-white mb-2">{club.name}</h3>
            <p className="text-xs font-bold text-slate-500 mb-6 flex items-center gap-1">
              <MapPin size={12} /> {club.location}
            </p>
            <div className="grid grid-cols-2 w-full gap-4 mb-8">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl">
                <p className="text-[10px] font-black text-slate-400 uppercase">প্রতিষ্ঠা</p>
                <p className="text-xs font-black dark:text-slate-200">{club.established}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl">
                <p className="text-[10px] font-black text-slate-400 uppercase">সদস্য</p>
                <p className="text-xs font-black dark:text-slate-200">{club.members}</p>
              </div>
            </div>
            <button onClick={() => setSelectedClub(club)} className="w-full bg-indigo-600 text-white py-4 rounded-2xl text-[10px] font-black uppercase hover:bg-indigo-700 transition-all active:scale-95">
              বিস্তারিত তথ্য দেখুন
            </button>
          </div>
        ))}
      </div>

      {/* Club Modal */}
      {selectedClub && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[3.5rem] shadow-2xl relative overflow-hidden">
            <button onClick={() => setSelectedClub(null)} className="absolute top-6 right-6 z-20 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all">
              <X size={20} />
            </button>
            <div className="p-10 max-h-[85vh] overflow-y-auto">
              <div className="text-center">
                <div className="w-full h-40 rounded-[2rem] overflow-hidden mb-6">
                  <img src={selectedClub.img} className="w-full h-full object-cover" alt={selectedClub.name} />
                </div>
                <h2 className="text-3xl font-black dark:text-white mb-1 uppercase">{selectedClub.name}</h2>
                <p className="text-indigo-600 font-black uppercase text-xs">প্রতিষ্ঠিত: {selectedClub.established}</p>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                  <h4 className="text-[10px] font-black text-indigo-600 uppercase mb-2 flex items-center gap-2">
                    <Info size={14} /> ক্লাবের বিবরণ ও অর্জন
                  </h4>
                  <p className="text-sm font-bold dark:text-slate-300 mb-3">{selectedClub.details}</p>
                  <div className="flex items-center gap-2 text-xs font-black text-orange-600 uppercase">
                    <Trophy size={16} /> {selectedClub.achievement}
                  </div>
                </div>
                {/* Officials */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-700">
                  <h4 className="text-[10px] font-black text-emerald-600 uppercase mb-4 flex items-center gap-2">
                    <UserCircle size={14} /> কর্মকর্তা ও কন্টাক্ট
                  </h4>
                  <div className="space-y-4">
                    {selectedClub.officials.map((off, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3 rounded-2xl">
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase">{off.role}</p>
                          <p className="text-sm font-black dark:text-white">{off.name}</p>
                        </div>
                        <div className="flex gap-2">
                          <a href={`tel:${off.phone}`} className="p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 transition-all"><Phone size={16} /></a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-slate-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase flex items-center justify-center gap-2"><Navigation size={16} /> গুগল ম্যাপ</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClubList;