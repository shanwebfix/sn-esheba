import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, getDoc, doc } from 'firebase/firestore'; 
import { useNavigate } from 'react-router-dom';
import * as Lucide from 'lucide-react'; 

const ImamList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const toBanglaNum = (num) => {
    if (!num) return '০';
    const banglaNums = {'0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯'};
    return String(num).replace(/[0-9]/g, s => banglaNums[s] || s);
  };

  useEffect(() => {
    const q = query(collection(db, "imam"));
    
    // রিয়েল-টাইম লিসেনার
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      try {
        const baseData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // প্রতিটি ইমামের জন্য ইউজার টেবিল থেকে লেটেস্ট প্রোফাইল ডাটা আনা
        const enrichedList = await Promise.all(baseData.map(async (item) => {
          if (item.userId) {
            const userDoc = await getDoc(doc(db, "users", item.userId));
            if (userDoc.exists()) {
              const userData = userDoc.data();
              return {
                ...item,
                name: userData.name || item.name,
                photoURL: userData.photoURL || item.photoURL,
                village: userData.village || item.village,
                phone: userData.number || userData.phone || item.phone
              };
            }
          }
          return item;
        }));

        setList(enrichedList);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const filteredData = list.filter(item => {
    const search = searchTerm.toLowerCase();
    return (
      (item.name || "").toLowerCase().includes(search) || 
      (item.currentMosque || "").toLowerCase().includes(search) ||
      (item.village || "").toLowerCase().includes(search)
    );
  });

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <Lucide.Loader2 className="animate-spin text-blue-600" size={40} />
    </div>
  );

  return (
    <div className="min-h-screen font-bangla pb-24 text-slate-900 dark:text-white">
      
      <div className="backdrop-blur-md px-0 py-5 border-b dark:border-white/5 sticky top-0 z-10 text-center">
        <h1 className="text-xl font-black ">
          শমশেরনগর এর সকল <span className="text-blue-600">ইমাম ও খতিব</span> এর লিস্ট
        </h1>
      </div>

      <div className="max-w-md mx-auto px-0 mt-6">
        {/* Search Box */}
        <div className="relative mb-6">
          <Lucide.Search className="absolute left-4 top-4 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder="নাম বা মসজিদ দিয়ে খুঁজুন..."
            className="w-full py-4 pl-12 pr-6 bg-white dark:bg-zinc-900 rounded-2xl border-none outline-none shadow-sm font-bold text-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-5">
          {filteredData.map((item) => (
            <div key={item.id} className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-5 border dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="relative">
                  <img 
                    src={item.photoURL || `https://ui-avatars.com/api/?name=${item.name}&background=0D8ABC&color=fff`} 
                    className="w-20 h-20 rounded-3xl object-cover border-2 border-slate-100 dark:border-white/10" 
                    alt={item.name} 
                  />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-lg">
                    <Lucide.ShieldCheck size={12} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-black text-lg leading-tight">{item.name || "নাম নেই"}</h3>
                  
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    <span className="text-[9px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 px-2.5 py-1 rounded-lg font-black uppercase tracking-widest">
                      {item.category || "খতিব"}
                    </span>
                  </div>

                  <div className="mt-3 flex items-start gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-black leading-tight">
                    <Lucide.MapPin size={14} className="mt-0.5 shrink-0" />
                    <span>{item.currentMosque || "মসজিদ তথ্য নেই"}</span>
                  </div>

                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] font-bold">
                       <Lucide.Award size={12} />
                       অভিজ্ঞতা: {toBanglaNum(item.experience)} বছর
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] font-bold">
                       <Lucide.BookOpen size={12} />
                       যোগ্যতা: {item.education || "N/A"}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold mt-2 uppercase tracking-tight">
                    <Lucide.Navigation size={12} /> {item.village || "ঠিকানা নেই"}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t dark:border-white/5">
                <a 
                  href={`tel:${item.phone}`} 
                  className="flex items-center justify-center gap-2 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-2xl text-[12px] font-black active:scale-95 transition-transform"
                >
                  <Lucide.PhoneCall size={14} /> কল করুন
                </a>
                <a 
                  href={`https://wa.me/88${(item.phone || "").replace(/\D/g, '')}`} 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white rounded-2xl text-[12px] font-black active:scale-95 transition-transform"
                >
                  <Lucide.MessageSquare size={14} /> মেসেজ
                </a>
              </div>
            </div>
          ))}

          {filteredData.length === 0 && (
            <div className="text-center py-20 opacity-30">
              <Lucide.Inbox size={40} className="mx-auto" />
              <p className="font-bold mt-2 uppercase tracking-widest text-xs">কোন তথ্য পাওয়া যায়নি</p>
            </div>
          )}
        </div>
      </div>

      {/* Floating Plus Button */}
      <div className="fixed bottom-24 right-6 z-50">
        <button 
          onClick={() => navigate('/pages/islamic/imamadd')}
          className="w-14 h-14 bg-blue-600 text-white rounded-2xl shadow-2xl shadow-blue-500/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          <Lucide.Plus size={30} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default ImamList;