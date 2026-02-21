import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, MessageCircle, Search, 
  Loader2, Plus, Phone, Shirt, Clock, ExternalLink, Sparkles
} from 'lucide-react';

const GarmentsList = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const q = query(collection(db, "garments"), orderBy("createdAt", "desc"));
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
          id: shopDoc.id,
          ...data,
          ownerName: profileData.name || data.userName || 'মালিকের নাম নেই',
          ownerVillage: profileData.village || data.userVillage || 'ঠিকানা নেই',
          ownerPhone: profileData.number || profileData.phone || data.userPhone || '',
          ownerPhoto: profileData.photoURL || ''
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
      <Loader2 className="w-10 h-10 text-pink-600 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080808] text-slate-900 dark:text-white font-bangla pb-24 transition-all">
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b dark:border-white/5 px-4 py-4 flex items-center justify-center">
         <h1 className="text-xl font-black italic uppercase tracking-tighter">Fashion <span className="text-pink-600">Garments</span></h1>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" placeholder="দোকান বা ব্র্যান্ড খুঁজুন..."
            className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm shadow-sm focus:border-pink-500/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-6">
          {filteredShops.map((shop) => (
            <div key={shop.id} className="bg-white dark:bg-[#0D0D0D] rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-pink-500/10 transition-all">
              <div className="relative h-44 w-full">
                <img src={shop.thumbnail} className="w-full h-full object-cover" alt={shop.shopName} />
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-600 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1 shadow-lg">
                    <Sparkles size={10} /> Garments Collection
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-black text-xl text-slate-800 dark:text-white leading-tight">{shop.shopName}</h3>
                  <Shirt className="text-pink-500 opacity-20" size={30} />
                </div>
                
                <div className="space-y-2 bg-pink-50/30 dark:bg-pink-900/10 p-4 rounded-2xl mb-6 border border-pink-100/20">
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                    <MapPin size={14} className="text-pink-500" />
                    <span className="text-xs font-bold">{shop.shopLocation}, {shop.ownerVillage}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                    <Clock size={14} className="text-pink-400" />
                    <span className="text-xs font-bold">খোলা: {shop.openingHours}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href={`tel:${shop.ownerPhone}`} className="flex-1 h-12 rounded-2xl bg-pink-600 text-white flex items-center justify-center gap-2 font-black text-xs active:scale-95 transition-all">
                    <Phone size={14} fill="currentColor" /> কল করুন
                  </a>
                  <a href={`https://wa.me/88${shop.ownerPhone}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center active:scale-95 transition-all">
                    <MessageCircle size={20} fill="currentColor" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => navigate('/marketadd')} className="fixed bottom-24 right-6 w-14 h-14 bg-pink-600 text-white rounded-2xl shadow-2xl flex items-center justify-center z-50">
        <Plus size={32} strokeWidth={3} />
      </button>
    </div>
  );
};

export default GarmentsList;