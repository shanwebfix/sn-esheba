import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, MessageCircle, Search, 
  Loader2, Plus, Phone, Footprints, Clock, ExternalLink, ShoppingBag
} from 'lucide-react';

const ShoesList = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const q = query(collection(db, "shoes"), orderBy("createdAt", "desc"));

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
          ownerPhone: profileData.number || profileData.phone || data.userPhone || '',
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
      
      {/* হেডার */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b dark:border-white/5 px-4 py-4 flex items-center justify-center">
         <h1 className="text-xl font-black italic uppercase tracking-tighter italic">Step <span className="text-amber-500">Style</span></h1>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6">
        {/* সার্চ বার */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="আপনার প্রিয় ব্র্যান্ড বা দোকান খুঁজুন..."
            className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm shadow-sm focus:border-amber-500/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* শপ লিস্ট */}
        <div className="space-y-8">
          {filteredShops.length > 0 ? (
            filteredShops.map((shop) => (
              <div key={shop.id} className="group bg-white dark:bg-[#0D0D0D] rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                
                {/* ইমেজ সেকশন */}
                <div className="relative h-56 w-full">
                  <img 
                    src={shop.thumbnail || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={shop.shopName}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-amber-500 text-black p-2 rounded-xl shadow-lg">
                    <Footprints size={20} />
                  </div>

                  <div className="absolute bottom-5 left-6">
                    <h3 className="font-black text-2xl text-white leading-tight mb-1">{shop.shopName}</h3>
                    <span className="bg-white/10 backdrop-blur-md text-amber-400 text-[10px] font-black px-3 py-1 rounded-full uppercase border border-amber-500/20">
                      Premium Footwear
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* কুইক ডিটেইলস */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 p-3 rounded-2xl">
                      <MapPin size={14} className="text-red-500" />
                      <span className="text-[11px] font-bold truncate">{shop.shopLocation}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 p-3 rounded-2xl">
                      <Clock size={14} className="text-emerald-500" />
                      <span className="text-[11px] font-bold truncate">{shop.openingHours}</span>
                    </div>
                  </div>

                  {/* ওনার ও কন্টাক্ট */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                       <ShoppingBag size={14} className="text-amber-500" />
                       <p className="text-xs font-bold text-slate-500">মালিক: {shop.ownerName}</p>
                    </div>
                  </div>

                  {/* অ্যাকশন বাটন */}
                  <div className="flex gap-3">
                    <a 
                      href={`tel:${shop.ownerPhone}`}
                      className="flex-1 h-14 rounded-2xl bg-amber-500 text-black flex items-center justify-center gap-2 font-black text-sm active:scale-95 transition-all shadow-lg shadow-amber-500/20"
                    >
                      <Phone size={18} fill="black" /> কল করুন
                    </a>

                    <div className="flex gap-2">
                        <a 
                        href={shop.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white flex items-center justify-center active:scale-95 transition-all"
                        >
                        <ExternalLink size={20} />
                        </a>

                        <a 
                        href={`https://wa.me/88${shop.ownerPhone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center active:scale-95 transition-all shadow-lg shadow-emerald-500/20"
                        >
                        <MessageCircle size={24} fill="currentColor" />
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 opacity-30">
               <Footprints size={60} className="mx-auto mb-4" />
               <p className="font-black uppercase tracking-widest text-xs">No Shoe Stores Found</p>
            </div>
          )}
        </div>
      </div>

      <button 
        onClick={() => navigate('/marketadd')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-amber-500 text-black rounded-2xl shadow-2xl flex items-center justify-center z-50 shadow-amber-500/40 active:scale-90 transition-all"
      >
        <Plus size={32} strokeWidth={3} />
      </button>

    </div>
  );
};

export default ShoesList;