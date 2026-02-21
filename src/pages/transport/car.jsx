import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, MessageCircle, Search, 
  Loader2, Plus, Phone, Truck, 
  ShieldCheck, Star, Car
} from 'lucide-react';

const PickupList = () => {
  const navigate = useNavigate();
  const [drivers, setDrivers] = useState([]);
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
    // এখানে আপনার কালেকশন নাম অনুযায়ী 'pickup_driver' অথবা 'car_driver' ব্যবহার করুন
    const q = query(
      collection(db, "car_driver"), 
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const driverPromises = snapshot.docs.map(async (driverDoc) => {
        const driverData = driverDoc.data();
        
        // কমন ডাটা প্রোফাইল (users) টেবিল থেকে আনা হচ্ছে
        let profileData = {};
        if (driverData.userId) {
          try {
            const userSnap = await getDoc(doc(db, "users", driverData.userId));
            if (userSnap.exists()) {
              profileData = userSnap.data();
            }
          } catch (err) {
            console.error("User fetch error:", err);
          }
        }

        return {
          id: driverDoc.id,
          ...driverData,
          // প্রোফাইল থেকে আসা তথ্য
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
    }, (error) => {
      console.error("Firestore Error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredDrivers = drivers.filter(driver =>
    (driver.name?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (driver.village?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (driver.modelName?.toLowerCase().includes(searchTerm.toLowerCase()))
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
         <h1 className="text-xl font-black italic uppercase tracking-tighter">Pickup <span className="text-blue-600">Service</span></h1>
      </div>

      <div className="max-w-md mx-auto px-6 pt-6">
        {/* সার্চ বার */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="ড্রাইভার, গ্রাম বা পিকআপ মডেল..."
            className="w-full bg-white dark:bg-[#0D0D0D] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm shadow-sm focus:border-blue-500/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* লিস্ট কার্ড */}
        <div className="space-y-6">
          {filteredDrivers.length > 0 ? (
            filteredDrivers.map((driver) => (
              <div key={driver.id} className="relative bg-white dark:bg-[#0D0D0D] rounded-[2.5rem] border border-slate-100 dark:border-white/5 p-5 shadow-sm transition-transform active:scale-[0.98]">
                
                <div className="flex gap-4">
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
                    <h3 className="font-black text-lg text-slate-800 dark:text-white leading-tight">{driver.name}</h3>
                    
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                      <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold">
                        বয়স: <span className="text-slate-800 dark:text-slate-200">{toBanglaNum(driver.age)} বছর</span>
                      </p>
                      {driver.experience && (
                        <p className="text-emerald-600 dark:text-emerald-400 text-[10px] font-black flex items-center gap-1">
                          <Star size={10} fill="currentColor" /> {toBanglaNum(driver.experience)} বছরের অভিজ্ঞতা
                        </p>
                      )}
                    </div>

                    <p className="text-blue-600 dark:text-blue-400 text-[12px] font-black uppercase tracking-wider mt-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-lg inline-block">
                      মডেল: {driver.modelName}
                    </p>

                    <div className="mt-4 space-y-1.5 border-t dark:border-white/5 pt-3">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <MapPin size={12} className="text-red-500" />
                        <span className="text-[11px] font-bold">{driver.village}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <Truck size={12} className="text-blue-500" />
                        <span className="text-[11px] font-bold italic tracking-tighter">নম্বর: {driver.plateNumber}</span>
                      </div>
                    </div>
                  </div>
                </div>

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
               <Truck size={60} className="mx-auto mb-4" />
               <p className="font-black uppercase tracking-widest text-[10px]">No Pickup Registered</p>
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

export default PickupList;