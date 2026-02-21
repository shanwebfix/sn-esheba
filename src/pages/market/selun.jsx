import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, MessageCircle, Search, 
  Loader2, Plus, Phone, Scissors, Clock, ExternalLink, Star
} from 'lucide-react';

const SalonList = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const q = query(collection(db, "salon"), orderBy("createdAt", "desc"));
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
      <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080808] text-slate-900 dark:text-white font-bangla pb-24 transition-all">
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b dark:border-white/5 px-4 py-4 flex items-center justify-center">
         <h1 className="text-xl font-black italic uppercase tracking-tighter">Gents <span className="text-amber-500">Salon</span></h1>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" placeholder="সেরা স্টাইলিস্ট খুঁজুন..."
            className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm focus:border-amber-500/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-6">
          {filteredShops.map((shop) => (
            <div key={shop.id} className="group bg-white dark:bg-[#0D0D0D] rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-amber-500/10 transition-all">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={shop.thumbnail} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={shop.shopName} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-amber-500 text-black p-2 rounded-xl shadow-lg">
                    <Scissors size={20} strokeWidth={3} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-5">
                   <div className="flex items-center gap-1 text-amber-400 mb-1">
                      <Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" />
                   </div>
                   <h3 className="text-white font-black text-xl leading-none">{shop.shopName}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-bold">
                      <MapPin size={14} className="text-red-500" /> {shop.shopLocation}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-bold">
                      <Clock size={14} className="text-amber-500" /> {shop.openingHours}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href={`tel:${shop.ownerPhone}`} className="flex-1 h-14 rounded-2xl bg-black dark:bg-amber-500 text-white dark:text-black flex items-center justify-center gap-2 font-black text-xs active:scale-95 transition-all">
                    <Phone size={16} fill="currentColor" /> কল করুন
                  </a>
                  <a href={`https://wa.me/88${shop.ownerPhone}`} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center active:scale-95 transition-all shadow-lg shadow-emerald-500/20">
                    <MessageCircle size={24} fill="currentColor" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => navigate('/marketadd')} className="fixed bottom-24 right-6 w-14 h-14 bg-amber-500 text-black rounded-2xl shadow-2xl flex items-center justify-center z-50">
        <Plus size={32} strokeWidth={3} />
      </button>
    </div>
  );
};

export default SalonList;