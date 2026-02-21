import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, MessageCircle, Search, 
  Loader2, Plus, Phone, Coffee, Clock, ExternalLink, CupSoda
} from 'lucide-react';

const CoffeeShopList = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // 'coffeeshop' কালেকশন থেকে ডাটা ফেচ করা হচ্ছে
    const q = query(collection(db, "coffeeshop"), orderBy("createdAt", "desc"));

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
      <Loader2 className="w-10 h-10 text-amber-800 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080808] text-slate-900 dark:text-white font-bangla pb-24 transition-all">
      
      {/* হেডার */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b dark:border-white/5 px-4 py-4 flex items-center justify-center">
         <h1 className="text-xl font-black italic uppercase tracking-tighter">Bean <span className="text-amber-800 dark:text-amber-600">Bistro</span></h1>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6">
        {/* সার্চ বার */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="আপনার প্রিয় কফি শপ খুঁজুন..."
            className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm shadow-sm focus:border-amber-700/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* কফি শপ কার্ড */}
        <div className="space-y-10">
          {filteredShops.length > 0 ? (
            filteredShops.map((shop) => (
              <div key={shop.id} className="group bg-white dark:bg-[#0D0D0D] rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                
                {/* ইমেজ ও গ্লাস মরফিজম ইফেক্ট */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img 
                    src={shop.thumbnail || 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={shop.shopName}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-900/40 backdrop-blur-md text-amber-100 text-[10px] font-black px-4 py-2 rounded-full uppercase border border-white/10 flex items-center gap-1.5">
                      <Coffee size={14} className="text-amber-400" /> Premium Roast
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-black text-white leading-none tracking-tighter mb-2">{shop.shopName}</h3>
                    <p className="text-amber-200 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <CupSoda size={14} /> Freshly Brewed Daily
                    </p>
                  </div>
                </div>

                <div className="p-7">
                  {/* কুইক ইনফো */}
                  <div className="flex flex-col gap-3 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-900/10 flex items-center justify-center text-amber-700">
                        <MapPin size={16} />
                      </div>
                      <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{shop.shopLocation}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 flex items-center justify-center text-emerald-600">
                        <Clock size={16} />
                      </div>
                      <span className="text-sm font-bold text-slate-600 dark:text-slate-300">সার্ভিস: {shop.openingHours}</span>
                    </div>
                  </div>

                  {/* অ্যাকশন বাটন */}
                  <div className="flex gap-3">
                    <a 
                      href={`tel:${shop.ownerPhone}`}
                      className="flex-1 h-14 rounded-2xl bg-amber-900 dark:bg-amber-700 text-white flex items-center justify-center gap-2 font-black text-sm active:scale-95 transition-all shadow-lg shadow-amber-900/20"
                    >
                      <Phone size={18} fill="currentColor" /> অর্ডার দিন
                    </a>

                    <div className="flex gap-2">
                        <a 
                        href={shop.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white flex items-center justify-center active:scale-95 transition-all border border-slate-200 dark:border-white/10"
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
            <div className="text-center py-20 opacity-20">
               <Coffee size={80} className="mx-auto mb-4" />
               <p className="font-black uppercase tracking-widest text-xs">No Coffee Shops Available</p>
            </div>
          )}
        </div>
      </div>

      <button 
        onClick={() => navigate('/marketadd')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-amber-800 text-white rounded-2xl shadow-2xl flex items-center justify-center z-50 shadow-amber-900/40 active:scale-90 transition-all"
      >
        <Plus size={32} strokeWidth={3} />
      </button>

    </div>
  );
};

export default CoffeeShopList;