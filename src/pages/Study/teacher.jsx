import React, { useState, useEffect } from 'react';
import { db } from "../../firebase.js"; 
import { collection, query, onSnapshot, doc, getDoc, orderBy } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Loader2, Plus, Phone, GraduationCap, 
  BookOpen, MapPin, School, Briefcase, UserCircle
} from 'lucide-react';

const TeacherList = () => {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // 'teachers' কালেকশন থেকে ডাটা নেওয়া হচ্ছে
    const q = query(collection(db, "teachers"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const teacherDataArray = [];
      
      // প্রতিটি টিচারের জন্য আলাদা করে প্রোফাইল ডাটা ফেচ করা হচ্ছে
      for (const teacherDoc of snapshot.docs) {
        const tData = teacherDoc.data();
        
        // কমন ডাটা প্রোফাইল (users collection) থেকে আনা হচ্ছে
        const userRef = doc(db, "users", tData.userId);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.exists() ? userSnap.data() : {};

        teacherDataArray.push({
          id: teacherDoc.id,
          ...tData,
          // এই ডাটাগুলো ইউজার প্রোফাইল থেকে আসছে
          name: userData.name || userData.userName || "Unknown Teacher",
          photo: userData.photoURL || "",
          village: userData.village || userData.address || "Location Hidden",
          phone: userData.number || userData.phone || ""
        });
      }
      
      setTeachers(teacherDataArray);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // সার্চ ফিল্টার (নাম বা সাবজেক্ট দিয়ে)
  const filteredTeachers = teachers.filter(t =>
    t.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.subject?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
      <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080808] text-slate-900 dark:text-white font-bangla pb-24 transition-all">
      
      {/* হেডার */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b dark:border-white/5 px-4 py-5 flex items-center justify-between">
         <h1 className="text-xl font-black italic uppercase tracking-tighter">Campus <span className="text-blue-600">Teachers</span></h1>
         <div className="bg-blue-600/10 px-3 py-1 rounded-full border border-blue-600/20">
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest italic">Verified</p>
         </div>
      </div>

      <div className="max-w-md mx-auto px-4 pt-6">
        {/* সার্চ বার */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="টিচারের নাম বা সাবজেক্ট খুঁজুন..."
            className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none font-bold text-sm shadow-sm focus:border-blue-500/50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* টিচার লিস্ট */}
        <div className="space-y-6">
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map((teacher) => (
              <div key={teacher.id} className="relative bg-white dark:bg-[#0D0D0D] rounded-[2rem] border border-slate-100 dark:border-white/5 p-5 shadow-sm overflow-hidden group">
                
                <div className="flex gap-4">
                  {/* প্রোফাইল থেকে ছবি */}
                  <div className="shrink-0">
                    {teacher.photo ? (
                      <img 
                        src={teacher.photo} 
                        className="w-20 h-24 rounded-2xl object-cover border-2 border-slate-50 dark:border-white/5 shadow-md"
                        alt={teacher.name}
                      />
                    ) : (
                      <div className="w-20 h-24 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center">
                        <UserCircle size={40} className="text-slate-300" />
                      </div>
                    )}
                  </div>

                  {/* টিচার ইনফো */}
                  <div className="flex-1">
                    <h3 className="font-black text-lg text-slate-800 dark:text-white leading-tight mb-1">{teacher.name}</h3>
                    <p className="text-blue-600 text-[11px] font-black uppercase tracking-widest flex items-center gap-1 mb-2">
                      <BookOpen size={12} /> {teacher.subject}
                    </p>
                    
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <School size={14} className="shrink-0 text-blue-500/70" />
                        <span className="text-xs font-bold leading-none">{teacher.currentInstitution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <GraduationCap size={14} className="shrink-0 text-slate-400" />
                        <span className="text-xs font-bold leading-none">{teacher.qualification}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <MapPin size={14} className="shrink-0 text-red-500/70" />
                        <span className="text-xs font-bold leading-none">{teacher.village}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* এক্সপেরিয়েন্স ও কল সেকশন */}
                <div className="mt-5 pt-4 border-t border-slate-50 dark:border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none">Experience</span>
                    <span className="text-sm font-black text-slate-700 dark:text-slate-300">{teacher.experience}</span>
                  </div>
                  
                  <a 
                    href={`tel:${teacher.phone}`}
                    className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-black text-xs active:scale-90 transition-all shadow-lg shadow-blue-600/20"
                  >
                    <Phone size={14} fill="currentColor" /> কন্টাক্ট করুন
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 opacity-30">
               <UserCircle size={60} className="mx-auto mb-4 text-blue-400" />
               <p className="font-black uppercase tracking-widest text-xs">No Teachers Found</p>
            </div>
          )}
        </div>
      </div>

      {/* অ্যাড টিচার বাটন */}
      <button 
        onClick={() => navigate('/pages/Study/add')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 text-white rounded-2xl shadow-2xl flex items-center justify-center z-50 shadow-blue-600/40 active:scale-90 transition-all"
      >
        <Plus size={32} strokeWidth={3} />
      </button>

    </div>
  );
};

export default TeacherList;