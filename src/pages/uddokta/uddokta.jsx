import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, onSnapshot, query, orderBy, getDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  Facebook, MessageCircle, ShoppingBag, 
  Briefcase, MapPin, Zap, Loader2, Plus
} from 'lucide-react';

const EntrepreneurList = () => {
  const navigate = useNavigate();
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "uddokta"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      try {
        const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // লজিক: প্রতিটি পোস্টের জন্য প্রোফাইল ডাটা ফেচ করা
        const enrichedList = await Promise.all(posts.map(async (post) => {
          if (post.uid) {
            const userDoc = await getDoc(doc(db, "users", post.uid));
            if (userDoc.exists()) {
              const userData = userDoc.data();
              return {
                ...post,
                // প্রোফাইল থেকে কমন ডাটাগুলো নেওয়া হচ্ছে
                name: userData.name || post.name,
                photoURL: userData.photoURL || post.photoURL,
                facebook: userData.facebook || post.facebook,
                whatsapp: userData.whatsapp || userData.number || userData.phone || post.whatsapp || post.phone,
                location: userData.village || post.location
              };
            }
          }
          return post;
        }));

        setEntrepreneurs(enrichedList);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // --- ফেসবুক লিঙ্ক ঠিক করার ফাংশন ---
  const getFacebookLink = (link) => {
    if (!link) return "#";
    if (!link.startsWith('http')) {
      return `https://facebook.com/${link}`;
    }
    return link;
  };

  return (
    <div className="min-h-screen py-12 px-4 font-bangla pb-24 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-2xl text-white mb-4 shadow-lg">
            <Briefcase size={30} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">শমশেরনগর উদ্যোক্তা ফোরাম</h1>
          <p className="text-slate-500 font-bold text-sm">আমাদের স্থানীয় মেধাবীদের সাপোর্ট করুন</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-indigo-600 mb-4" size={40} />
            <p className="text-slate-500 font-bold">লোড হচ্ছে...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entrepreneurs.map((owner) => (
              <div key={owner.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group">
                
                {/* Profile Top */}
                <div className="p-6 pb-0 flex items-center gap-4">
                  <img 
                    src={owner.photoURL || `https://ui-avatars.com/api/?name=${owner.name}&background=4f46e5&color=fff`} 
                    alt="" 
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-indigo-50 dark:border-slate-700"
                  />
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">{owner.name}</h3>
                    <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded-lg uppercase tracking-widest mt-1 inline-block">
                      {owner.category || "উদ্যোক্তা"}
                    </span>
                  </div>
                </div>

                {/* Business Info */}
                <div className="p-6 flex-grow">
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <ShoppingBag size={16} className="text-indigo-500" />
                    <span className="text-sm font-black text-slate-700 dark:text-slate-300">{owner.itemName}</span>
                  </div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {owner.itemDesc}
                  </p>

                  {/* Contact Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <a 
                      href={getFacebookLink(owner.facebook)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-2xl font-black text-[10px] hover:bg-blue-700 transition-all active:scale-95"
                      onClick={(e) => {
                        if (!owner.facebook || owner.facebook === "#") {
                          e.preventDefault();
                          alert("ফেসবুক লিঙ্ক যুক্ত করা নেই!");
                        }
                      }}
                    >
                      <Facebook size={14} /> ফেসবুক
                    </a>

                    <a 
                      href={`https://wa.me/88${(owner.whatsapp || "").replace(/\D/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-2xl font-black text-[10px] hover:bg-emerald-700 transition-all active:scale-95"
                    >
                      <MessageCircle size={14} /> হোয়াটসঅ্যাপ
                    </a>
                  </div>
                </div>

                {/* Location Footer */}
                <div className="mt-auto px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                    <MapPin size={12} className="text-red-500" /> {owner.location || "শমশেরনগর"}
                  </div>
                  <Zap size={14} className="text-amber-500" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Floating Add Button */}
        <button 
          onClick={() => navigate('/pages/uddokta/uddoktaadd')}
          className="fixed bottom-24 right-8 w-12 h-12 bg-indigo-600 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-50"
        >
          <Plus size={32} strokeWidth={3} />
        </button>

      </div>
    </div>
  );
};

export default EntrepreneurList;