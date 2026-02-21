import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, doc, getDoc, orderBy } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Loader2, Plus, Phone, GraduationCap, 
  BookOpen, MapPin, Clock, Calendar, Banknote, UserCircle
} from 'lucide-react';

const TutorList = () => {
  const navigate = useNavigate();
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // 'tutors' কালেকশন থেকে ডাটা নেওয়া হচ্ছে
    const q = query(collection(db, "tutors"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const tutorDataArray = [];
      
      for (const tutorDoc of snapshot.docs) {
        const tData = tutorDoc.data();
        
        // কমন ডাটা প্রোফাইল (users collection) থেকে আনা হচ্ছে
        const userRef = doc(db, "users", tData.userId);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.exists() ? userSnap.data() : {};

        tutorDataArray.push({
          id: tutorDoc.id,
          ...tData,
          // প্রোফাইল থেকে আসা ডাটা
          name: userData.name || userData.userName || "Unknown Tutor",
          photo: userData.photoURL || "",
          village: userData.village || userData.address || "Location Hidden",
          phone: userData.number || userData.phone || ""
        });
      }
      
      setTutors(tutorDataArray);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // সার্চ ফিল্টার (নাম বা সাবজেক্ট)
  const filteredTutors = tutors.filter(t =>
    t.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.subject?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="min-h-screen bg-white dark:bg-[#080808] flex items-center justify-center">
      <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080808] text-slate-900 dark:text-white font-bangla pb-24 transition-all">
      
      {/* হেডার */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b dark:border-white/5 px-4 py-5 flex items-center justify-between">
         <h1 className="text-xl font-black italic uppercase tracking-tighter">Home <span className="text-indigo-600">Tutors</span></h1>
         <div className="bg-indigo-600/10 px-3 py-1 rounded-full border border-indigo-600/20">
            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest italic">Available</p>
         </div>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6">
        {/* সার্চ বার */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="সাবজেক্ট বা টিউটর খুঁজুন..."
            className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm shadow-sm focus:border-indigo-500/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* টিউটর লিস্ট */}
        <div className="space-y-6">
          {filteredTutors.length > 0 ? (
            filteredTutors.map((tutor) => (
              <div key={tutor.id} className="bg-white dark:bg-[#0D0D0D] rounded-[2.5rem] border border-slate-100 dark:border-white/5 p-5 shadow-sm relative overflow-hidden group">
                
                {/* স্যালারি ব্যাজ */}
                <div className="absolute top-0 right-0 mt-5 mr-5 bg-indigo-600 text-white px-3 py-1 rounded-full shadow-lg shadow-indigo-600/20">
                    <p className="text-[10px] font-black italic">৳ {tutor.salary}/মাস</p>
                </div>

                <div className="flex gap-4">
                  {/* প্রোফাইল ফটো */}
                  <div className="shrink-0">
                    {tutor.photo ? (
                      <img src={tutor.photo} className="w-20 h-24 rounded-2xl object-cover border-2 border-slate-50 dark:border-white/5" alt={tutor.name} />
                    ) : (
                      <div className="w-20 h-24 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center">
                        <UserCircle size={40} className="text-slate-300" />
                      </div>
                    )}
                  </div>

                  {/* বেসিক ইনফো */}
                  <div className="flex-1 pr-10">
                    <h3 className="font-black text-lg leading-tight mb-1">{tutor.name}</h3>
                    <p className="text-indigo-600 text-[11px] font-black uppercase tracking-widest flex items-center gap-1 mb-2">
                      <BookOpen size={12} /> {tutor.subject}
                    </p>
                    
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-slate-500">
                        <GraduationCap size={14} className="shrink-0" />
                        <span className="text-xs font-bold">{tutor.qualification}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin size={14} className="shrink-0 text-red-500/70" />
                        <span className="text-xs font-bold">{tutor.village}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* টাইম এবং ডেইজ সেকশন */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-2xl flex items-center gap-3">
                        <Clock size={16} className="text-indigo-500" />
                        <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase leading-none">সময় (Daily)</p>
                            <p className="text-xs font-black">{tutor.teachingHours}</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-2xl flex items-center gap-3">
                        <Calendar size={16} className="text-indigo-500" />
                        <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase leading-none">সপ্তাহে</p>
                            <p className="text-xs font-black">{tutor.daysPerWeek} দিন</p>
                        </div>
                    </div>
                </div>

                {/* কন্টাক্ট বাটন */}
                <div className="mt-5 pt-4 border-t dark:border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Experience</span>
                    <span className="text-sm font-black text-slate-700 dark:text-slate-300">{tutor.experience}</span>
                  </div>
                  
                  <a 
                    href={`tel:${tutor.phone}`}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-black text-xs active:scale-90 transition-all shadow-lg shadow-indigo-600/20"
                  >
                    <Phone size={14} fill="currentColor" /> কল দিন
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 opacity-20">
               <UserCircle size={60} className="mx-auto mb-4" />
               <p className="font-black uppercase text-xs">No Tutors Available</p>
            </div>
          )}
        </div>
      </div>

      {/* অ্যাড টিউটর বাটন */}
      <button 
        onClick={() => navigate('/pages/Study/add')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-indigo-600 text-white rounded-2xl shadow-2xl flex items-center justify-center z-50 shadow-indigo-600/40 active:scale-90 transition-all"
      >
        <Plus size={32} strokeWidth={3} />
      </button>

    </div>
  );
};

export default TutorList;