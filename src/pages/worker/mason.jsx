import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, onSnapshot, query, orderBy, getDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  X, Search, MessageCircle, MapPin, 
  PhoneCall, Plus, Loader2, HardHat, 
  Construction, ShieldCheck, Info, BrickWall
} from 'lucide-react';

const MasonDirectory = () => {
  const navigate = useNavigate();
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- ডাটা ফেচিং: প্রোফাইল থেকে কমন ডাটা ইন্টিগ্রেশন ---
  useEffect(() => {
    const q = query(collection(db, "masons"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      try {
        const baseData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        const enrichedWorkers = await Promise.all(baseData.map(async (worker) => {
          if (worker.userId) {
            const userDoc = await getDoc(doc(db, "users", worker.userId));
            if (userDoc.exists()) {
              const userData = userDoc.data();
              return {
                ...worker,
                // প্রোফাইল থেকে লাইভ ডাটা ওভাররাইড
                name: userData.name || worker.name,
                photoURL: userData.photoURL || worker.photoURL,
                location: userData.village || worker.location,
                phone: userData.number || userData.phone || worker.phone
              };
            }
          }
          return worker;
        }));

        setWorkers(enrichedWorkers);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching masons:", err);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const filteredWorkers = workers.filter(w => 
    (w.name || "").toLowerCase().includes(searchQuery.toLowerCase()) || 
    (w.location || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-10 px-4 font-bangla transition-colors duration-300 pb-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-orange-600 rounded-3xl text-white mb-4 shadow-xl shadow-orange-200 dark:shadow-none">
            <BrickWall size={35} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">রাজমিস্ত্রি ও নির্মাণ মিস্ত্রি</h1>
          <p className="text-slate-500 font-medium">অভিজ্ঞ মিস্ত্রি দিয়ে স্বপ্নের বাড়ি নির্মাণ করুন</p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input 
            type="text"
            placeholder="মিস্ত্রির নাম বা এলাকা..."
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-800 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-orange-500/10 font-bold dark:text-white transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* Workers Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-orange-600 mb-4" size={40} />
            <p className="text-slate-500 font-bold">লোড হচ্ছে...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkers.map((worker) => (
              <div key={worker.id} className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-6 border border-orange-50 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all group relative">
                
                {/* Profile Section */}
                <div className="flex items-center gap-5 mb-4 cursor-pointer" onClick={() => setSelectedWorker(worker)}>
                  <div className="relative">
                    <img 
                      src={worker.photoURL || `https://ui-avatars.com/api/?name=${worker.name}&background=ea580c&color=fff`} 
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-orange-100 dark:border-gray-700 shadow-md" 
                      alt="" 
                    />
                    <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white p-1.5 rounded-xl shadow-lg">
                      <Construction size={14} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black dark:text-white leading-tight">{worker.name}</h3>
                    <span className="text-orange-600 dark:text-orange-400 font-bold text-[10px] uppercase bg-orange-50 dark:bg-orange-900/30 px-2 py-0.5 rounded-md mt-1 inline-block">
                      {worker.category || "নির্মাণ মিস্ত্রি"}
                    </span>
                  </div>
                </div>

                {/* Short Specialty */}
                <p className="text-xs text-slate-500 dark:text-gray-400 mb-4 line-clamp-2 font-medium px-1">
                  {worker.specialty || "নতুন বাড়ি নির্মাণ, প্লাস্টার, টাইলস ফিটিং এবং কনস্ট্রাকশন কাজের অভিজ্ঞ মিস্ত্রি।"}
                </p>

                <div className="space-y-2 mb-6 text-sm text-slate-600 dark:text-gray-400 font-medium">
                  <div className="flex items-center gap-2 px-1"><MapPin size={16} className="text-red-500" /> {worker.location}</div>
                  <div className="flex items-center gap-2 px-1"><HardHat size={16} className="text-orange-500" /> {worker.experience} অভিজ্ঞতা</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a 
                    href={`tel:${worker.phone}`}
                    className="flex-1 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-black text-[12px] transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <PhoneCall size={16} /> কল দিন
                  </a>
                  <a 
                    href={`https://wa.me/88${(worker.phone || "").replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3.5 bg-[#25D366] text-white rounded-xl font-black text-[12px] transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle size={16} /> হোয়াটসঅ্যাপ
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredWorkers.length === 0 && (
          <div className="text-center py-20 text-slate-400 font-bold">কোন মিস্ত্রি পাওয়া যায়নি!</div>
        )}
      </div>

      {/* Floating Plus Button */}
      <button 
        onClick={() => navigate('/pages/worker/workersadd')}
        className="fixed bottom-24 right-8 w-12 h-12 bg-orange-600 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-50 "
      >
        <Plus size={32} strokeWidth={3} />
      </button>

      {/* Profile Modal */}
      {selectedWorker && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/70">
          <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-[3rem] overflow-hidden relative animate-in zoom-in-95 shadow-2xl flex flex-col max-h-[90vh]">
            
            <button onClick={() => setSelectedWorker(null)} className="absolute top-6 right-6 z-10 p-2 bg-slate-100 dark:bg-gray-800 text-slate-500 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-md">
              <X size={20} />
            </button>

            <div className="p-8 pt-12 overflow-y-auto flex-grow custom-scrollbar">
              <div className="text-center mb-8">
                <img src={selectedWorker.photoURL || `https://ui-avatars.com/api/?name=${selectedWorker.name}&background=ea580c&color=fff`} className="w-28 h-28 rounded-[2.5rem] object-cover border-4 border-orange-50 dark:border-gray-800 mx-auto mb-4 shadow-xl" alt="" />
                <h2 className="text-2xl font-black dark:text-white leading-tight">{selectedWorker.name}</h2>
                <p className="text-orange-600 font-black text-sm uppercase mt-2">{selectedWorker.category || "রাজমিস্ত্রি"}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-3xl border border-orange-100 dark:border-orange-900/40 text-center">
                  <HardHat className="mx-auto mb-1.5 text-orange-600" size={24} />
                  <p className="text-[10px] text-slate-400 font-black uppercase">অভিজ্ঞতা</p>
                  <p className="font-black dark:text-white">{selectedWorker.experience}</p>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-3xl border border-emerald-100 dark:border-emerald-900/40 text-center">
                  <ShieldCheck className="mx-auto mb-1.5 text-emerald-600" size={24} />
                  <p className="text-[10px] text-slate-400 font-black uppercase">দক্ষতা</p>
                  <p className="font-black dark:text-white text-[10px] leading-tight mt-1">ভেরিফাইড মিস্ত্রি</p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-gray-800/50 p-6 rounded-[2rem] mb-8 border border-slate-100 dark:border-gray-800">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-2 flex items-center gap-1">
                  <Info size={12} /> কাজের পূর্ণাঙ্গ বিবরণ
                </p>
                <p className="font-bold dark:text-gray-200 text-xs leading-relaxed">{selectedWorker.specialty || "কোনো বিস্তারিত তথ্য দেওয়া নেই।"}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
      `}</style>
    </div>
  );
};

export default MasonDirectory;