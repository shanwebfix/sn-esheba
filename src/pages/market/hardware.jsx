import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, MessageCircle, Search, 
  Loader2, Plus, Phone, Hammer, Clock, ExternalLink, ShieldCheck
} from 'lucide-react';

const HardwareList = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const q = query(collection(db, "hardware"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const shopData = await Promise.all(snapshot.docs.map(async (shopDoc) => {
        const data = shopDoc.data();
        let profileData = {};
        if (data.userId) {
          try {
            const userDoc = await getDoc(doc(db, "users", data.userId));
            if (userDoc.exists()) profileData = userDoc.data();
          } catch (err) { console.error(err); }
        }
        return {
          id: shopDoc.id, ...data,
          ownerPhone: profileData.number || profileData.phone || data.userPhone || '',
          ownerVillage: profileData.village || data.userVillage || '',
        };
      }));
      setShops(shopData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const filteredShops = shops.filter(shop =>
    shop.shopName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.shopLocation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
      <Loader2 className="w-10 h-10 text-slate-600 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080808] text-slate-900 dark:text-white font-bangla pb-24 transition-all">
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b dark:border-white/5 px-4 py-4 flex items-center justify-center">
         <h1 className="text-xl font-black italic uppercase tracking-tighter italic">Modern <span className="text-slate-600 dark:text-slate-400">Hardware</span></h1>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" placeholder="দোকান বা পার্টস খুঁজুন..."
            className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm focus:border-slate-500/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-6">
          {filteredShops.map((shop) => (
            <div key={shop.id} className="bg-white dark:bg-[#0D0D0D] rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-slate-500/10 transition-all">
              <div className="relative h-44 w-full">
                <img src={shop.thumbnail} className="w-full h-full object-cover grayscale-[30%]" alt={shop.shopName} />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-800 text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase flex items-center gap-1 shadow-lg border border-white/10">
                    <ShieldCheck size={10} className="text-emerald-400" /> Genuine Parts
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-black text-xl text-slate-800 dark:text-white leading-tight">{shop.shopName}</h3>
                  <Hammer className="text-slate-400" size={24} />
                </div>
                
                <div className="space-y-2 bg-slate-100 dark:bg-white/5 p-4 rounded-2xl mb-6">
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                    <MapPin size={14} className="text-red-500" />
                    <span className="text-xs font-bold">{shop.shopLocation}, {shop.ownerVillage}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                    <Clock size={14} className="text-slate-400" />
                    <span className="text-xs font-bold">সময়: {shop.openingHours}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href={`tel:${shop.ownerPhone}`} className="flex-1 h-12 rounded-2xl bg-slate-800 dark:bg-slate-700 text-white flex items-center justify-center gap-2 font-black text-xs active:scale-95 transition-all">
                    <Phone size={14} fill="currentColor" /> কল করুন
                  </a>
                  <a href={shop.mapUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white flex items-center justify-center active:scale-95 transition-all">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => navigate('/marketadd')} className="fixed bottom-24 right-6 w-14 h-14 bg-slate-800 text-white rounded-2xl shadow-2xl flex items-center justify-center z-50">
        <Plus size={32} strokeWidth={3} />
      </button>
    </div>
  );
};

export default HardwareList;