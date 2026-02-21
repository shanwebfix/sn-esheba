import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, orderBy, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, MessageCircle, Search, 
  Loader2, Activity, Plus, 
  Phone, Footprints, Zap, User
} from 'lucide-react';

const MarathonList = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const toBanglaNum = (num) => {
    if (!num || num === 'N/A') return '০';
    const banglaNums = {
      '0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯'
    };
    return String(num).replace(/[0-9]/g, s => banglaNums[s]);
  };

  useEffect(() => {
    const q = query(collection(db, "marathon_players"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const playerData = await Promise.all(snapshot.docs.map(async (playerDoc) => {
        const data = playerDoc.data();
        
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
          id: playerDoc.id,
          ...data,
          name: profileData.name || data.name || 'নাম নেই',
          age: profileData.age || data.age || 'N/A',
          village: profileData.village || data.village || 'ঠিকানা নেই',
          phone: profileData.number || profileData.phone || data.phone || '',
          photoURL: profileData.photoURL || data.photoURL || ''
        };
      }));

      setPlayers(playerData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const filteredPlayers = players.filter(player =>
    player.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.village?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
      <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen  text-slate-900 dark:text-white font-bangla pb-24 transition-all">
      
      <div className="sticky top-0 z-40  backdrop-blur-xl border-b dark:border-white/5 px-4 py-4 flex items-center justify-center">
         <h1 className="text-xl font-black italic uppercase tracking-tighter">Marathon <span className="text-blue-600">Runners</span></h1>
      </div>

      <div className="max-w-md mx-auto px-0 pt-6">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="রানার বা গ্রাম খুঁজুন..."
            className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm shadow-sm focus:border-blue-500/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {filteredPlayers.map((player) => (
            <div key={player.id} className="bg-white dark:bg-[#0D0D0D] rounded-[2rem] border border-slate-100 dark:border-white/5 p-5 shadow-sm overflow-hidden transition-all active:scale-[0.98]">
              
              <div className="flex gap-4">
                <div className="relative shrink-0">
                  <img 
                    src={player.photoURL || `https://ui-avatars.com/api/?name=${player.name}`} 
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-600/10 shadow-md"
                    alt="Profile"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="font-black text-lg leading-tight">{player.name}</h3>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-[10px] font-black bg-blue-50 dark:bg-blue-900/30 text-blue-600 px-2 py-0.5 rounded-full uppercase">
                      বয়স: {toBanglaNum(player.age)}
                    </span>
                    <span className="text-[10px] font-black bg-slate-100 dark:bg-gray-800 text-slate-500 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <MapPin size={8} className="text-red-500" /> {player.village}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    {/* পজিশন ফিল্ড (নতুন যোগ করা হয়েছে) */}
                    <div className="flex items-center justify-between bg-slate-50 dark:bg-white/5 p-2 px-3 rounded-xl border border-slate-100 dark:border-white/10">
                      <div className="flex items-center gap-2 text-slate-500">
                        <User size={14} className="text-blue-500" />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Position</span>
                      </div>
                      <span className="text-xs font-black text-blue-600 dark:text-blue-400">{player.position}</span>
                    </div>

                    <div className="flex items-center justify-between bg-blue-50/50 dark:bg-blue-900/10 p-2 px-3 rounded-xl border border-blue-100 dark:border-blue-900/20">
                      <div className="flex items-center gap-2 text-blue-600">
                        <Footprints size={14} />
                        <span className="text-[10px] font-bold uppercase">Max Distance</span>
                      </div>
                      <span className="text-xs font-black text-blue-700 dark:text-blue-400">
                        {toBanglaNum(player.maxDistance)} কি.মি.
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-slate-50 dark:bg-white/5 p-2 px-3 rounded-xl border border-slate-100 dark:border-white/10">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Zap size={14} className="text-amber-500" />
                        <span className="text-[10px] font-bold uppercase">Experience</span>
                      </div>
                      <span className="text-xs font-black">{toBanglaNum(player.experience)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <a href={`tel:${player.phone}`} className="flex-1 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center gap-2 font-black text-sm active:scale-95 transition-all">
                  <Phone size={16} fill="currentColor" /> কল করুন
                </a>
                <a href={`https://wa.me/88${player.phone}`} target="_blank" rel="noopener noreferrer" className="flex-1 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center gap-2 font-black text-sm active:scale-95 transition-all">
                  <MessageCircle size={18} fill="currentColor" /> হোয়াটসঅ্যাপ
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => navigate('/pages/sports/sportsadd')} className="fixed bottom-24 right-6 w-12 h-12 bg-blue-600 text-white rounded-2xl shadow-2xl flex items-center justify-center z-50">
        <Plus size={32} strokeWidth={3} />
      </button>

    </div>
  );
};

export default MarathonList;