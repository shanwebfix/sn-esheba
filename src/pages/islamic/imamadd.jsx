import React, { useState, useEffect } from 'react';
import { db, auth } from "../../firebase.js"; 
import { collection, addDoc, serverTimestamp, getDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import * as Lucide from 'lucide-react';

const ImamAdd = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const [userProfile, setUserProfile] = useState({
    name: '', phone: '', photoURL: '', village: '', age: ''
  });

  const [formData, setFormData] = useState({
    category: '', 
    currentMosque: '', 
    education: '',
    experience: ''
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserProfile({
              name: data.name || user.displayName || 'নাম নেই',
              phone: data.number || data.phone || 'নম্বর নেই',
              photoURL: data.photoURL || user.photoURL || '',
              village: data.village || 'ঠিকানা নেই',
              age: data.age || 'N/A'
            });
          }
          setFetchingUser(false);
        } catch (error) {
          console.error("User Fetch Error:", error);
          setFetchingUser(false);
        }
      } else {
        setFetchingUser(false);
        setShowLoginModal(true);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category) return alert("পদবী সিলেক্ট করুন");

    setLoading(true);
    try {
      // mapping logic: ইমাম এবং খতিব যাবে 'imam' কালেকশনে, মুয়াজ্জিন যাবে 'muajjin' কালেকশনে
      let targetCollection = "";
      if (formData.category === "ইমাম" || formData.category === "খতিব") {
        targetCollection = "imam";
      } else if (formData.category === "মুয়াজ্জিন") {
        targetCollection = "muajjin";
      }

      await addDoc(collection(db, targetCollection), {
        ...formData,
        ...userProfile,
        userId: auth.currentUser.uid,
        createdAt: serverTimestamp()
      });
      
      setAlert({ show: true, msg: "সফলভাবে যুক্ত হয়েছে!", type: 'success' });
      setTimeout(() => navigate(-1), 1500);
    } catch (err) {
      console.error("Submit Error:", err);
      setAlert({ show: true, msg: "সেভ করা যাচ্ছে না!", type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  if (fetchingUser) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <Lucide.Loader2 className="animate-spin text-blue-600" size={40} />
    </div>
  );

  return (
    <div className="min-h-screen mb-10 bg-slate-50 dark:bg-[#050505] font-bangla pb-12 transition-all text-slate-900 dark:text-white">
      
      {/* Header */}
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md px-6 py-5 flex items-center justify-center border-b dark:border-white/5 sticky top-0 z-10">
        <h1 className="text-xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white">
          Religious <span className="text-blue-600">Register</span>
        </h1>
      </div>

      <div className="max-w-md mx-auto px-6 mt-8">
        {/* Profile Preview */}
        <div className="bg-zinc-900 rounded-[2.5rem] p-6 mb-8 text-white flex items-center gap-4 border border-white/5">
          <img 
            src={userProfile.photoURL || `https://ui-avatars.com/api/?name=${userProfile.name}`} 
            className="w-16 h-16 rounded-2xl object-cover border border-white/10" 
            alt="Profile" 
          />
          <div>
            <h2 className="font-black text-lg leading-none mb-1">{userProfile.name}</h2>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{userProfile.village}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category Select */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">আপনার পদবী</label>
            <select 
              required 
              className="w-full py-5 px-6 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold text-slate-900 dark:text-white shadow-sm appearance-none"
              value={formData.category} 
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="">সিলেক্ট করুন...</option>
              <option value="ইমাম">ইমাম (Imam)</option>
              <option value="মুয়াজ্জিন">মুয়াজ্জিন (Muajjin)</option>
              <option value="খতিব">খতিব (Khatib)</option>
            </select>
          </div>

          {/* Mosque Name */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">বর্তমান মসজিদ</label>
            <div className="relative">
              <Lucide.MapPin className="absolute left-4 top-5 text-slate-400" size={20} />
              <input 
                required 
                type="text" 
                className="w-full py-5 pl-12 pr-6 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold text-slate-900 dark:text-white" 
                placeholder="মসজিদের নাম লিখুন" 
                onChange={(e) => setFormData({...formData, currentMosque: e.target.value})} 
              />
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">অভিজ্ঞতা (বছর)</label>
            <div className="relative">
              <Lucide.Award className="absolute left-4 top-5 text-slate-400" size={20} />
              <input 
                required 
                type="number" 
                className="w-full py-5 pl-12 pr-6 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold text-slate-900 dark:text-white" 
                placeholder="উদাঃ ৫" 
                onChange={(e) => setFormData({...formData, experience: e.target.value})} 
              />
            </div>
          </div>

          {/* Qualification */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">যোগ্যতা</label>
            <div className="relative">
              <Lucide.BookOpen className="absolute left-4 top-5 text-slate-400" size={20} />
              <input 
                required 
                type="text" 
                className="w-full py-5 pl-12 pr-6 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold text-slate-900 dark:text-white" 
                placeholder="উদাঃ কামিল / হাফেজ" 
                onChange={(e) => setFormData({...formData, education: e.target.value})} 
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-lg shadow-xl shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {loading ? <Lucide.Loader2 className="animate-spin" /> : "তালিকায় নাম যুক্ত করুন"}
          </button>
        </form>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
          <div className="bg-white dark:bg-zinc-900 w-full max-w-sm rounded-[2.5rem] p-8 text-center border dark:border-white/5 shadow-2xl">
            <Lucide.Lock size={40} className="mx-auto mb-4 text-blue-600" />
            <h2 className="text-2xl font-black mb-2 text-slate-900 dark:text-white">লগইন প্রয়োজন</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
              ধর্মীয় সেবা প্রদানকারীর তালিকায় নাম লেখাতে অনুগ্রহ করে আপনার অ্যাকাউন্টে লগইন করুন।
            </p>
            <button onClick={() => navigate('/login')} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black mb-3 active:scale-95 transition-all">লগইন করুন</button>
            <button onClick={() => navigate(-1)} className="w-full py-4 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 rounded-2xl font-bold active:scale-95 transition-all">ফিরে যান</button>
          </div>
        </div>
      )}

      {/* Floating Alert */}
      {alert.show && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] bg-zinc-900 text-white px-8 py-4 rounded-full font-bold shadow-2xl border border-white/10 animate-in slide-in-from-bottom-5">
          {alert.msg}
        </div>
      )}

    </div>
  );
};

export default ImamAdd;