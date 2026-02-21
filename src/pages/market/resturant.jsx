import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, MessageCircle, Search, 
  Loader2, Plus, Phone, Utensils, Clock, ExternalLink
} from 'lucide-react';

const RestrurantList = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // 'restrurant' কালেকশন থেকে ডাটা নেওয়া হচ্ছে (আপনার দেওয়া স্পেলিং অনুযায়ী)
    const q = query(collection(db, "restrurant"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const shopData = await Promise.all(snapshot.docs.map(async (shopDoc) => {
        const data = shopDoc.data();
        
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
      <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080808] text-slate-900 dark:text-white font-bangla pb-24 transition-all">
      
      {/* হেডার */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b dark:border-white/5 px-4 py-4 flex items-center justify-center">
         <h1 className="text-xl font-black italic uppercase tracking-tighter">Foodie <span className="text-orange-500">Hub</span></h1>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6">
        {/* সার্চ বার */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="রেস্টুরেন্ট বা এলাকা খুঁজুন..."
            className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm shadow-sm focus:border-orange-500/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* রেস্টুরেন্ট কার্ড লিস্ট */}
        <div className="space-y-8">
          {filteredShops.length > 0 ? (
            filteredShops.map((shop) => (
              <div key={shop.id} className="group bg-white dark:bg-[#0D0D0D] rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm transition-all hover:shadow-xl">
                
                {/* ইমেজ সেকশন */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img 
                    src={shop.thumbnail || 'https://via.placeholder.com/400x200?text=Food+Image'} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={shop.shopName}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-5">
                    <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase shadow-lg flex items-center gap-1">
                      <Utensils size={10} /> রেস্টুরেন্ট
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* মালিকের ইনফো */}
                  <div className="flex items-center gap-2 mb-4">
                    <img src={shop.ownerPhoto || `https://ui-avatars.com/api/?name=${shop.ownerName}`} className="w-6 h-6 rounded-full border border-slate-200 dark:border-white/10" alt="owner" />
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 italic">Chef: {shop.ownerName}</span>
                  </div>

                  <h3 className="font-black text-2xl text-slate-800 dark:text-white leading-tight mb-4 tracking-tight">{shop.shopName}</h3>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 p-3 rounded-2xl">
                      <MapPin size={14} className="text-red-500" />
                      <span className="text-[11px] font-bold truncate">{shop.shopLocation}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 p-3 rounded-2xl">
                      <Clock size={14} className="text-emerald-500" />
                      <span className="text-[11px] font-bold truncate">{shop.openingHours}</span>
                    </div>
                  </div>

                  {/* অ্যাকশন বাটন */}
                  <div className="flex gap-3">
                    <a 
                      href={`tel:${shop.ownerPhone}`}
                      className="flex-1 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center gap-2 font-black text-sm active:scale-95 transition-all shadow-lg shadow-orange-500/20"
                    >
                      <Phone size={16} fill="currentColor" /> কল করুন
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
                        <MessageCircle size={22} fill="currentColor" />
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 opacity-30">
               <Utensils size={60} className="mx-auto mb-4" />
               <p className="font-black uppercase tracking-widest text-xs">No Restaurants Nearby</p>
            </div>
          )}
        </div>
      </div>

      <button 
        onClick={() => navigate('/marketadd')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-orange-500 text-white rounded-2xl shadow-2xl flex items-center justify-center z-50 shadow-orange-500/40"
      >
        <Plus size={32} strokeWidth={3} />
      </button>

    </div>
  );
};

export default RestrurantList;