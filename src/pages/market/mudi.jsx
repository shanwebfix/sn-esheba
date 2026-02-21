import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, MessageCircle, Search, 
  Loader2, Plus, Phone, Store, Clock, ExternalLink
} from 'lucide-react';

const MudiShopList = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // 'mudishop' কালেকশন থেকে ডাটা নেওয়া হচ্ছে
    const q = query(collection(db, "mudishop"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const shopData = await Promise.all(snapshot.docs.map(async (shopDoc) => {
        const data = shopDoc.data();
        
        // কমন প্রোফাইল ডাটা (users collection) থেকে মালিকের তথ্য আনা হচ্ছে
        let profileData = {};
        if (data.userId) {
          try {
            const userDoc = await getDoc(doc(db, "users", data.userId));
            if (userDoc.exists()) {
              profileData = userDoc.data();
            }
          } catch (err) {
            console.error("Profile fetch error:", err);
          }
        }

        return {
          id: shopDoc.id,
          ...data, // দোকানের ডাটা (shopName, openingHours, thumbnail, mapUrl)
          // প্রোফাইল থেকে মালিকের লেটেস্ট ডাটা
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

  // সার্চ ফিল্টার (দোকানের নাম বা এলাকা দিয়ে)
  const filteredShops = shops.filter(shop =>
    shop.shopName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.shopLocation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
      <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white font-bangla pb-24 transition-all">
      
      {/* হেডার */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b dark:border-white/5 px-4 py-4 flex items-center justify-center">
         <h1 className="text-xl font-black italic uppercase tracking-tighter">Mudi <span className="text-blue-600">Shops</span></h1>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6">
        {/* সার্চ বার */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="দোকান বা এলাকা খুঁজুন..."
            className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm shadow-sm focus:border-blue-500/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* শপ কার্ড লিস্ট */}
        <div className="space-y-6">
          {filteredShops.length > 0 ? (
            filteredShops.map((shop) => (
              <div key={shop.id} className="bg-white dark:bg-[#0D0D0D] rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm transition-all active:scale-[0.99]">
                
                {/* দোকান থাম্বনেইল (Cloudinary URL) */}
                <div className="relative h-48 w-full">
                  <img 
                    src={shop.thumbnail || 'https://via.placeholder.com/400x200?text=No+Image'} 
                    className="w-full h-full object-cover"
                    alt={shop.shopName}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase shadow-lg">
                      মুদি দোকান
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  {/* মালিকের ছোট প্রোফাইল */}
                  <div className="flex items-center gap-2 mb-3 opacity-70">
                    <img src={shop.ownerPhoto || `https://ui-avatars.com/api/?name=${shop.ownerName}`} className="w-5 h-5 rounded-full" alt="owner" />
                    <span className="text-[10px] font-bold tracking-tight">মালিক: {shop.ownerName}</span>
                  </div>

                  <h3 className="font-black text-xl text-slate-800 dark:text-white leading-tight mb-3">{shop.shopName}</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <MapPin size={14} className="text-red-500" />
                      <span className="text-xs font-bold">{shop.shopLocation}, {shop.ownerVillage}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <Clock size={14} className="text-emerald-500" />
                      <span className="text-xs font-bold">খোলা: {shop.openingHours}</span>
                    </div>
                  </div>

                  {/* অ্যাকশন বাটন */}
                  <div className="mt-6 flex gap-3">
                    <a 
                      href={`tel:${shop.ownerPhone}`}
                      className="flex-1 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center gap-2 font-black text-xs active:scale-95 transition-all shadow-lg shadow-blue-600/20"
                    >
                      <Phone size={14} fill="currentColor" /> কল করুন
                    </a>

                    <a 
                      href={shop.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white flex items-center justify-center gap-2 font-black text-xs active:scale-95 transition-all"
                    >
                      <ExternalLink size={14} /> ম্যাপ লোকেশন
                    </a>

                    <a 
                      href={`https://wa.me/88${shop.ownerPhone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center active:scale-95 transition-all shadow-lg shadow-emerald-500/20"
                    >
                      <MessageCircle size={20} fill="currentColor" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 opacity-30">
               <Store size={60} className="mx-auto mb-4" />
               <p className="font-black uppercase tracking-widest text-xs">No Shops Found</p>
            </div>
          )}
        </div>
      </div>

      {/* শপ এড বাটন */}
      <button 
        onClick={() => navigate('/pages/market/add')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 text-white rounded-2xl shadow-2xl flex items-center justify-center z-50 shadow-blue-600/40"
      >
        <Plus size={32} strokeWidth={3} />
      </button>

    </div>
  );
};

export default MudiShopList;