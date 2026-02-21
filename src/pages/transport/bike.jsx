import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, MessageCircle, Search, 
  Loader2, Plus, Phone, Bike, 
  Facebook, ShieldCheck, Star
} from 'lucide-react';

const BikeList = () => {
  const navigate = useNavigate();
  const [riders, setRiders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // সংখ্যাকে বাংলায় রূপান্তর
  const toBanglaNum = (num) => {
    const banglaNums = {
      '0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯'
    };
    return String(num || '').replace(/[0-9]/g, s => banglaNums[s]);
  };

  useEffect(() => {
    const q = query(
      collection(db, "bike_rider"), 
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const riderPromises = snapshot.docs.map(async (riderDoc) => {
        const riderData = riderDoc.data();
        
        // ১. প্রোফাইল (users) টেবিল থেকে কমন ডাটা ফেচ করা
        let profileData = {};
        if (riderData.userId) {
          try {
            const userSnap = await getDoc(doc(db, "users", riderData.userId));
            if (userSnap.exists()) {
              profileData = userSnap.data();
            }
          } catch (err) {
            console.error("User fetch error:", err);
          }
        }

        return {
          id: riderDoc.id,
          ...riderData,
          // ২. প্রোফাইল থেকে আসা ডাটা (যা রিয়েল-টাইমে আপডেট হবে)
          name: profileData.name || "অজানা রাইডার",
          photoURL: profileData.photoURL || "",
          village: profileData.village || "ঠিকানা নেই",
          age: profileData.age || "N/A",
          phone: profileData.number || profileData.phone || riderData.phone,
          whatsapp: profileData.whatsapp || profileData.number || riderData.whatsapp,
          facebook: profileData.facebook || riderData.facebook // যদি প্রোফাইলে থাকে
        };
      });

      const resolvedRiders = await Promise.all(riderPromises);
      setRiders(resolvedRiders);
      setLoading(false);
    }, (error) => {
      console.error("Firestore Error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // সার্চ ফিল্টার
  const filteredRiders = riders.filter(rider =>
    (rider.name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (rider.village?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (rider.modelName?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
      <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-black text-slate-900 dark:text-white font-bangla pb-24 transition-all">
      
      {/* হেডার */}
      <div className="sticky top-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b dark:border-white/5 px-4 py-4 flex items-center justify-center">
         <h1 className="text-xl font-black italic uppercase tracking-tighter">Bike <span className="text-blue-600">Service</span></h1>
      </div>

      <div className="max-w-md mx-auto px-6 pt-6">
        {/* সার্চ বার */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="রাইডার, গ্রাম বা বাইক মডেল..."
            className="w-full bg-white dark:bg-[#0D0D0D] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm shadow-sm focus:border-blue-500/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* বাইক রাইডার লিস্ট */}
        <div className="space-y-6">
          {filteredRiders.length > 0 ? (
            filteredRiders.map((rider) => (
              <div key={rider.id} className="relative bg-white dark:bg-[#0D0D0D] rounded-[2.5rem] border border-slate-100 dark:border-white/5 p-5 shadow-sm transition-transform active:scale-[0.98]">
                
                <div className="flex gap-4">
                  {/* প্রোফাইল ইমেজ */}
                  <div className="relative shrink-0">
                    <img 
                      src={rider.photoURL || `https://ui-avatars.com/api/?name=${rider.name}&background=2563eb&color=fff`} 
                      className="w-20 h-20 rounded-[1.5rem] object-cover border-2 border-blue-500/10 shadow-md bg-slate-50 dark:bg-slate-900"
                      alt={rider.name}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-lg border-2 border-white dark:border-[#0D0D0D]">
                      <ShieldCheck size={12} />
                    </div>
                  </div>

                  {/* রাইডার ইনফো */}
                  <div className="flex-grow text-left">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black text-lg text-slate-800 dark:text-white leading-tight">{rider.name}</h3>
                      
                      {rider.facebook && (
                        <a 
                          href={`https://facebook.com/${rider.facebook}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-full text-blue-600 dark:text-blue-400 active:scale-90 transition-all"
                        >
                          <Facebook size={14} fill="currentColor" />
                        </a>
                      )}
                    </div>
                    
                    <div className="flex gap-3 mt-1">
                      <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold">
                        বয়স: <span className="text-slate-800 dark:text-slate-200">{toBanglaNum(rider.age)}</span>
                      </p>
                      {rider.experience && (
                         <p className="text-emerald-600 dark:text-emerald-400 text-[10px] font-black flex items-center gap-1">
                          <Star size={10} fill="currentColor" /> {toBanglaNum(rider.experience)} বছর
                        </p>
                      )}
                    </div>

                    <p className="text-blue-600 dark:text-blue-400 text-[11px] font-black uppercase tracking-widest mt-2 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded-md inline-block">
                      {rider.modelName || "Motor Bike"}
                    </p>

                    <div className="mt-4 space-y-1.5 border-t dark:border-white/5 pt-3">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <MapPin size={12} className="text-red-500" />
                        <span className="text-[11px] font-bold">{rider.village}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <Bike size={12} className="text-blue-500" />
                        <span className="text-[11px] font-bold">নম্বর: {rider.plateNumber}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* অ্যাকশন বাটন */}
                <div className="mt-5 pt-4 border-t border-slate-50 dark:border-white/5 flex gap-3">
                  <a 
                    href={`tel:${rider.phone}`}
                    className="flex-1 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center gap-2 font-black text-xs shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
                  >
                    <Phone size={14} fill="currentColor" /> কল করুন
                  </a>

                  <a 
                    href={`https://wa.me/88${rider.whatsapp}`}
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
               <Bike size={60} className="mx-auto mb-4" />
               <p className="font-black uppercase tracking-widest text-[10px]">No Riders Found</p>
            </div>
          )}
        </div>
      </div>

      {/* জয়েন বাটন */}
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

export default BikeList;