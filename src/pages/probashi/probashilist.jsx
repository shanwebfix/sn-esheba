import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, getDoc, doc } from 'firebase/firestore'; // getDoc, doc যোগ করা হয়েছে
import { useNavigate } from 'react-router-dom';
import * as Lucide from 'lucide-react'; 

const ProbashiList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const toBanglaNum = (num) => {
    if (!num && num !== 0) return '০';
    const banglaNums = {'0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯'};
    return String(num).replace(/[0-9]/g, s => banglaNums[s] || s);
  };

  useEffect(() => {
    const q = query(collection(db, "probashi"));
    
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      try {
        const posts = snapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        }));

        // প্রতিটি পোস্টের userId ধরে প্রোফাইল ডাটা ফেচ করা
        const enrichedList = await Promise.all(posts.map(async (post) => {
          if (post.userId) {
            const userDoc = await getDoc(doc(db, "users", post.userId));
            if (userDoc.exists()) {
              const userData = userDoc.data();
              return {
                ...post,
                // প্রোফাইল থেকে লাইভ ডাটা
                name: userData.name || "অচেনা প্রবাসী",
                photoURL: userData.photoURL || "",
                village: userData.village || "ঠিকানা নেই",
                facebook: userData.facebook || "",
                whatsapp: userData.whatsapp || userData.number || userData.phone || ""
              };
            }
          }
          return post;
        }));

        // নাম নেই এমন ডাটা ফিল্টার আউট করা
        const cleanData = enrichedList.filter(item => item.name);
        setList(cleanData);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setLoading(false);
      }
    }, (err) => {
      console.error("Firebase error:", err);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredData = list.filter(item => {
    const search = searchTerm.toLowerCase();
    return (
      (item.name || "").toLowerCase().includes(search) || 
      (item.country || "").toLowerCase().includes(search) ||
      (item.city || "").toLowerCase().includes(search) ||
      (item.village || "").toLowerCase().includes(search)
    );
  });

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <Lucide.Loader2 className="animate-spin text-blue-600" size={40} />
    </div>
  );

  return (
    <div className="min-h-screen font-bangla pb-24 text-slate-900 dark:text-white transition-all">
      
      <div className="backdrop-blur-md px-6 py-5 border-b dark:border-white/5 sticky top-0 z-10 text-center">
        <h1 className="text-xl font-black italic uppercase tracking-tighter">
          Probashi <span className="text-blue-600">Community</span>
        </h1>
      </div>

      <div className="max-w-md mx-auto px-4 mt-6">
        {/* সার্চ বার */}
        <div className="relative mb-6">
          <Lucide.Search className="absolute left-4 top-4 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder="নাম, দেশ বা শহর দিয়ে খুঁজুন..."
            className="w-full py-4 pl-12 pr-6 bg-white dark:bg-zinc-900 rounded-2xl border-none outline-none shadow-sm font-bold"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-5">
          {filteredData.map((item) => (
            <div key={item.id} className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-5 border dark:border-white/5 shadow-sm overflow-hidden">
              <div className="flex gap-4">
                <div className="relative">
                  <img 
                    src={item.photoURL || `https://ui-avatars.com/api/?name=${item.name}`} 
                    className="w-20 h-20 rounded-3xl object-cover border dark:border-zinc-800" 
                    alt={item.name} 
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-black text-lg leading-tight">{item.name}</h3>
                  
                  <div className="mt-1 flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-black uppercase">
                    <Lucide.MapPin size={12} /> {item.country}, {item.city}
                  </div>

                  <div className="mt-3 space-y-1">
                    <p className="text-[11px] text-slate-500 font-bold flex items-center gap-1">
                      <Lucide.Briefcase size={12} /> পেশা: {item.occupation || "N/A"}
                    </p>
                    
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-500 font-bold flex items-center gap-1">
                      <Lucide.Home size={12} /> দেশের বাড়ি: {item.village}
                    </p>

                    <p className="text-[11px] text-slate-500 font-bold flex items-center gap-1">
                      <Lucide.Calendar size={12} /> প্রবাস জীবন: {toBanglaNum(item.yearsAbroad)} বছর
                    </p>
                    
                    {item.organization && (
                      <p className="text-[11px] text-slate-500 font-bold flex items-center gap-1">
                         <Lucide.Globe size={12} />যুক্ত আছি: {item.organization}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {item.shortDesc && (
                <div className="mt-4 p-3 bg-slate-50 dark:bg-black/40 rounded-2xl text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  "{item.shortDesc}"
                </div>
              )}

              {/* কন্টাক্ট বাটন - লাইভ লিঙ্ক */}
              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t dark:border-white/5">
                <a 
                  href={item.facebook ? (item.facebook.startsWith('http') ? item.facebook : `https://facebook.com/${item.facebook}`) : '#'} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`flex items-center justify-center gap-2 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest ${item.facebook ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-zinc-800 text-slate-400 pointer-events-none'}`}
                >
                  <Lucide.Facebook size={14} fill={item.facebook ? "currentColor" : "none"} /> ফেসবুক
                </a>
                
                <a 
                  href={item.whatsapp ? `https://wa.me/+88${item.whatsapp.replace(/\D/g, '')}` : '#'} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`flex items-center justify-center gap-2 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest ${item.whatsapp ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-zinc-800 text-slate-400 pointer-events-none'}`}
                >
                  <Lucide.MessageCircle size={14} fill={item.whatsapp ? "currentColor" : "none"} /> হোয়াটসঅ্যাপ
                </a>
              </div>
            </div>
          ))}

          {filteredData.length === 0 && (
            <div className="text-center py-20 opacity-30">
              <Lucide.Users size={40} className="mx-auto" />
              <p className="font-bold mt-2 uppercase tracking-widest text-xs">No Data Found</p>
            </div>
          )}
        </div>
      </div>

      {/* ফ্লোটিং অ্যাড বাটন */}
      <div className="fixed bottom-24 right-6 z-50">
        <button 
          onClick={() => navigate('/pages/probashi/probashiadd')}
          className="w-14 h-14 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-600/30 flex items-center justify-center active:scale-90 transition-all"
        >
          <Lucide.Plus size={30} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default ProbashiList;