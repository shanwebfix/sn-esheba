import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, MessageCircle, Search, 
  Loader2, Plus, Phone, Car, 
  Navigation, ShieldCheck, User
} from 'lucide-react';

const CNGList = () => {
  const navigate = useNavigate();
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStand, setSelectedStand] = useState("All");

  const stands = ["All", "শমশেরনগর", "কমলগঞ্জ", "মৌলভীবাজার", "শ্রীমঙ্গল"];

  const toBanglaNum = (num) => {
    const banglaNums = {
      '0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯'
    };
    return String(num || '').replace(/[0-9]/g, s => banglaNums[s]);
  };

  useEffect(() => {
    const q = query(collection(db, "cng_driver"), orderBy("createdAt", "desc"));

    // ১. প্রথমে ড্রাইভার লিস্ট ফেচ করা
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const driverPromises = snapshot.docs.map(async (driverDoc) => {
        const driverData = driverDoc.data();
        
        // ২. প্রতিটি ড্রাইভারের userId দিয়ে প্রোফাইল টেবিল থেকে কমন ডাটা আনা
        let profileData = {};
        if (driverData.userId) {
          const userRef = doc(db, "users", driverData.userId);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            profileData = userSnap.data();
          }
        }

        return {
          id: driverDoc.id,
          ...driverData,
          // কমন ডাটা প্রোফাইল থেকে সেট করা হচ্ছে
          name: profileData.name || "অজানা চালক",
          photoURL: profileData.photoURL || "",
          village: profileData.village || "ঠিকানা নেই",
          age: profileData.age || "N/A",
          phone: profileData.number || profileData.phone || driverData.phone,
          whatsapp: profileData.whatsapp || profileData.number || driverData.whatsapp
        };
      });

      const resolvedDrivers = await Promise.all(driverPromises);
      setDrivers(resolvedDrivers);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = (driver.name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (driver.village?.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStand = selectedStand === "All" || driver.standName === selectedStand;
    return matchesSearch && matchesStand;
  });

  if (loading) return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center">
      <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      <p className="mt-4 text-xs font-black text-slate-400 uppercase tracking-widest">Loading Drivers...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-black text-slate-900 dark:text-white font-bangla pb-24 transition-all">
      
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b dark:border-white/5 px-4 py-4 flex items-center justify-center">
         <h1 className="text-xl font-black italic uppercase tracking-tighter">CNG <span className="text-blue-600">Service</span></h1>
      </div>

      <div className="max-w-md mx-auto px-6 pt-6">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="চালকের নাম বা গ্রাম..."
            className="w-full bg-white dark:bg-[#0D0D0D] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm shadow-sm focus:border-blue-500/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter */}
        <div className="mb-8 overflow-x-auto no-scrollbar flex gap-3 pb-2">
          {stands.map((stand) => (
            <button
              key={stand}
              onClick={() => setSelectedStand(stand)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black whitespace-nowrap transition-all border ${
                selectedStand === stand 
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'bg-white dark:bg-[#0D0D0D] border-slate-100 dark:border-white/5 text-slate-500'
              }`}
            >
              {stand === "All" ? "সব স্ট্যান্ড" : stand}
            </button>
          ))}
        </div>

        {/* Driver Cards */}
        <div className="space-y-6">
          {filteredDrivers.length > 0 ? (
            filteredDrivers.map((driver) => (
              <div key={driver.id} className="bg-white dark:bg-[#0D0D0D] rounded-[2.5rem] border border-slate-100 dark:border-white/5 p-5 shadow-sm transition-transform active:scale-[0.98]">
                
                <div className="flex gap-4">
                  {/* Profile Image from Profile Data */}
                  <div className="relative shrink-0">
                    <img 
                      src={driver.photoURL || `https://ui-avatars.com/api/?name=${driver.name}&background=2563eb&color=fff`} 
                      className="w-20 h-20 rounded-[1.5rem] object-cover border-2 border-blue-500/10 shadow-md bg-slate-100 dark:bg-gray-800"
                      alt={driver.name}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-lg border-2 border-white dark:border-[#0D0D0D]">
                      <ShieldCheck size={12} />
                    </div>
                  </div>

                  <div className="flex-grow text-left">
                    <h3 className="font-black text-lg text-slate-800 dark:text-white leading-tight flex items-center gap-1.5">
                      {driver.name}
                    </h3>
                    
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                      <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold">
                        বয়স: <span className="text-slate-800 dark:text-slate-200">{toBanglaNum(driver.age)} বছর</span>
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold">
                        অভিজ্ঞতা: <span className="text-slate-800 dark:text-slate-200">{toBanglaNum(driver.experience)} বছর</span>
                      </p>
                    </div>

                    <div className="mt-4 space-y-1.5 border-t dark:border-white/5 pt-3">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <MapPin size={12} className="text-red-500" />
                        <span className="text-[11px] font-bold">{driver.village}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <Navigation size={12} className="text-blue-600" />
                        <span className="text-[11px] font-bold">স্ট্যান্ড: {driver.standName}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <Car size={12} className="text-blue-500" />
                        <span className="text-[10px] font-black bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-md uppercase">
                          {driver.plateNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 pt-4 border-t border-slate-50 dark:border-white/5 flex gap-3">
                  <a 
                    href={`tel:${driver.phone}`}
                    className="flex-1 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center gap-2 font-black text-xs shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
                  >
                    <Phone size={14} fill="currentColor" /> কল করুন
                  </a>

                  <a 
                    href={`https://wa.me/88${driver.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center gap-2 font-black text-xs shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
                  >
                    <MessageCircle size={16} fill="currentColor" /> হোয়াটসঅ্যাপ
                  </a>
                </div>

              </div>
            ))
          ) : (
            <div className="text-center py-20 opacity-30">
               <Car size={60} className="mx-auto mb-4" />
               <p className="font-black uppercase tracking-widest text-[10px]">No Drivers Registered Yet</p>
            </div>
          )}
        </div>
      </div>

      {/* Floating Add Button */}
      <div className="fixed bottom-10 right-8 z-50">
        <button 
          onClick={() => navigate('/pages/transport/transportadd')}
          className="w-16 h-16 bg-blue-600 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all"
        >
          <Plus size={32} strokeWidth={3} />
        </button>
      </div>

    </div>
  );
};

export default CNGList;