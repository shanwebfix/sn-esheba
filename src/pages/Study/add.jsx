import React, { useState, useEffect } from 'react';
import { db, auth } from "../../firebase.js";
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth'; // লগইন চেক করার জন্য
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, BookOpen, GraduationCap, 
  ArrowLeft, CheckCircle2, Loader2,
  Briefcase, Banknote, Clock, Calendar, School, UserCircle
} from 'lucide-react';

const TeacherTutorAdd = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // ফর্ম স্টেট
  const [role, setRole] = useState("teachers"); 
  const [subject, setSubject] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [institution, setInstitution] = useState("");
  const [salary, setSalary] = useState("");
  const [hours, setHours] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState("");

  useEffect(() => {
    // লগইন চেক এবং প্রোফাইল ডাটা ফেচ
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setProfile(docSnap.data());
          }
        } catch (err) {
          console.error("Error fetching profile:", err);
        } finally {
          setProfileLoading(false);
        }
      } else {
        // লগইন করা না থাকলে লগইন পেজে পাঠিয়ে দিবে
        alert("দয়া করে আগে লগইন করুন!");
        navigate('/login'); 
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) return navigate('/login');

    setLoading(true);
    try {
      const user = auth.currentUser;
      const professionalData = {
        userId: user.uid, 
        subject,
        qualification,
        experience,
        category: role,
        createdAt: serverTimestamp(),
        ...(role === "teachers" ? { currentInstitution: institution } : {}),
        ...(role === "tutors" ? { salary, teachingHours: hours, daysPerWeek: daysPerWeek } : {})
      };

      await setDoc(doc(db, role, user.uid), professionalData);
      setShowSuccess(true);
      setTimeout(() => navigate(-1), 2500);
    } catch (error) {
      alert("সাবমিট ব্যর্থ হয়েছে!");
    } finally {
      setLoading(false);
    }
  };

  if (profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#080808]">
        <Loader2 className="animate-spin text-blue-600" size={35} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080808] text-slate-900 dark:text-white font-bangla pb-10">
      
      {/* হেডার */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b dark:border-white/5 p-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 bg-slate-100 dark:bg-white/10 rounded-full active:scale-90 transition-all">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-black italic uppercase tracking-tighter">Campus <span className="text-blue-600">Expert</span></h1>
      </div>

      <div className="max-w-md mx-auto px-6 pt-6">
        
        {/* প্রোফাইল প্রিভিউ কার্ড */}
        <div className="bg-white dark:bg-[#0D0D0D] rounded-[2rem] p-5 mb-8 border dark:border-white/5 shadow-xl flex items-center gap-4 border-l-4 border-l-blue-600">
          {profile?.photoURL ? (
            <img src={profile.photoURL} className="w-14 h-14 rounded-2xl object-cover border dark:border-white/10" alt="User" />
          ) : (
            <div className="w-14 h-14 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center">
              <UserCircle className="text-slate-400" size={30} />
            </div>
          )}
          <div>
            <h2 className="text-md font-black">{profile?.name || "নাম পাওয়া যায়নি"}</h2>
            <div className="flex items-center gap-1 mt-1 text-slate-400">
              <MapPin size={10} className="text-red-500" />
              <p className="text-[10px] font-bold">{profile?.village || "ঠিকানা পাওয়া যায়নি"}</p>
            </div>
          </div>
        </div>

        {/* সাকসেস মেসেজ */}
        {showSuccess && (
           <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-500 text-center font-bold text-sm">
             আবেদন সফলভাবে জমা হয়েছে!
           </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* রোল সিলেকশন */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-4 italic">আপনার পজিশন</label>
            <div className="grid grid-cols-2 gap-3">
               <button type="button" onClick={() => setRole("teachers")}
                className={`py-4 rounded-2xl font-black text-[11px] transition-all ${role === 'teachers' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white dark:bg-[#121212] text-slate-400 border dark:border-white/5'}`}
               >🏫 শিক্ষক</button>
               <button type="button" onClick={() => setRole("tutors")}
                className={`py-4 rounded-2xl font-black text-[11px] transition-all ${role === 'tutors' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-white dark:bg-[#121212] text-slate-400 border dark:border-white/5'}`}
               >🏠 টিউটর</button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {/* পছন্দের বিষয় */}
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-4 italic">পছন্দের বিষয়</label>
              <input type="text" required placeholder="উদা: ইংরেজি, গণিত"
                className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 px-6 outline-none font-bold text-sm focus:border-blue-500 transition-all"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* টিচারের প্রতিষ্ঠান */}
            {role === "teachers" && (
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-blue-600 ml-4 italic">বর্তমান শিক্ষা প্রতিষ্ঠান</label>
                <input type="text" required placeholder="স্কুল বা কলেজের নাম"
                  className="w-full bg-white dark:bg-[#121212] border-2 border-blue-500/20 rounded-2xl py-4 px-6 outline-none font-bold text-sm focus:border-blue-500 transition-all"
                  onChange={(e) => setInstitution(e.target.value)}
                />
              </div>
            )}

            {/* টিউটরের বেতন ও সময় */}
            {role === "tutors" && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-indigo-500 ml-4 italic">মাসিক বেতন</label>
                  <input type="number" required placeholder="বেতন (টাকা)"
                    className="w-full bg-white dark:bg-[#121212] border-2 border-indigo-500/20 rounded-2xl py-4 px-6 outline-none font-bold text-sm focus:border-indigo-500"
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" required placeholder="প্রতিদিন ঘণ্টা"
                    className="bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-3 px-4 font-bold text-xs outline-none focus:border-blue-500"
                    onChange={(e) => setHours(e.target.value)}
                  />
                  <input type="number" required placeholder="সপ্তাহে কয়দিন"
                    className="bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-3 px-4 font-bold text-xs outline-none focus:border-blue-500"
                    onChange={(e) => setDaysPerWeek(e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* যোগ্যতা ও অভিজ্ঞতা */}
            <div className="space-y-1">
               <label className="text-[10px] font-black uppercase text-slate-400 ml-4 italic">যোগ্যতা</label>
               <input type="text" required placeholder="আপনার ডিগ্রি"
                className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 px-6 outline-none font-bold text-sm focus:border-blue-500"
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>
            <div className="space-y-1">
               <label className="text-[10px] font-black uppercase text-slate-400 ml-4 italic">অভিজ্ঞতা</label>
               <input type="text" required placeholder="উদা: ২ বছর"
                className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-2xl py-4 px-6 outline-none font-bold text-sm focus:border-blue-500"
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
          </div>

          <button disabled={loading} className="w-full h-16 bg-blue-600 text-white rounded-[2rem] font-black text-xs uppercase shadow-xl flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 transition-all">
            {loading ? <Loader2 className="animate-spin" /> : "সাবমিট করুন"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherTutorAdd;