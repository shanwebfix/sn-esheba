import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, MessageCircle, Search, 
  Loader2, Plus, Phone, Sparkle, Clock, ExternalLink, Camera
} from 'lucide-react';

const ParlerList = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const q = query(collection(db, "parler"), orderBy("createdAt", "desc"));
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

  if (loading) return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
      <Loader2 className="w-10 h-10 text-rose-400 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FFF5F7] dark:bg-[#080808] text-slate-900 dark:text-white font-bangla pb-24 transition-all">
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b border-rose-100 dark:border-white/5 px-4 py-4 flex items-center justify-center">
         <h1 className="text-xl font-black italic uppercase tracking-tighter">Beauty <span className="text-rose-500">Parler</span></h1>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-300" size={18} />
          <input 
            type="text" placeholder="বিউটি পার্লার খুঁজুন..."
            className="w-full bg-white dark:bg-[#121212] border-2 border-rose-100 dark:border-white/5 rounded-[2rem] py-4 pl-12 pr-4 outline-none font-bold text-sm shadow-sm focus:border-rose-400 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-10">
          {shops.filter(s => s.shopName.toLowerCase().includes(searchTerm.toLowerCase())).map((shop) => (
            <div key={shop.id} className="relative">
              <div className="bg-white dark:bg-[#0D0D0D] rounded-[3rem] border border-rose-100 dark:border-white/5 overflow-hidden shadow-xl shadow-rose-200/20 dark:shadow-none transition-all">
                <div className="relative h-60 w-full">
                  <img src={shop.thumbnail} className="w-full h-full object-cover" alt={shop.shopName} />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#0D0D0D]"></div>
                </div>

                <div className="p-8 -mt-12 relative z-10 text-center">
                  <div className="inline-flex p-3 bg-rose-500 text-white rounded-2xl shadow-xl mb-4">
                    <Sparkle size={24} />
                  </div>
                  <h3 className="font-black text-2xl text-slate-800 dark:text-white mb-2">{shop.shopName}</h3>
                  <p className="text-xs font-bold text-rose-500 uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2">
                    <MapPin size={12} /> {shop.shopLocation}
                  </p>
                  
                  <div className="flex gap-3 mt-4">
                    <a href={`tel:${shop.ownerPhone}`} className="flex-1 h-14 rounded-[1.5rem] bg-rose-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-500/30">
                      <Phone size={18} fill="currentColor" /> কল করুন
                    </a>
                    <a href={`https://wa.me/88${shop.ownerPhone}`} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-[1.5rem] bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <MessageCircle size={24} fill="currentColor" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => navigate('/marketadd')} className="fixed bottom-24 right-6 w-14 h-14 bg-rose-500 text-white rounded-2xl shadow-2xl flex items-center justify-center z-50">
        <Plus size={32} strokeWidth={3} />
      </button>
    </div>
  );
};

export default ParlerList;