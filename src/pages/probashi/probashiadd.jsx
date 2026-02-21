import React, { useState, useEffect } from 'react';
import { db, auth } from "../../firebase.js"; 
import { collection, addDoc, serverTimestamp, getDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import * as Lucide from 'lucide-react';

const ProbashiAdd = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  // প্রোফাইল থেকে আসা ডাটা (এটি শুধু দেখানোর জন্য, DB তে পাঠানো হবে না)
  const [userProfile, setUserProfile] = useState({
    name: '', 
    photoURL: '', 
    village: ''
  });

  // ইউজার ইনপুট দিবে (যা DB তে যাবে)
  const [formData, setFormData] = useState({
    country: '', 
    city: '', 
    occupation: '',
    organization: '',
    yearsAbroad: '',
    shortDesc: ''
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
              photoURL: data.photoURL || user.photoURL || '',
              village: data.village || 'ঠিকানা নেই'
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
    setLoading(true);

    try {
      // এখানে শুধু ফর্মের ডাটা আর userId পাঠানো হচ্ছে
      await addDoc(collection(db, "probashi"), {
        userId: auth.currentUser.uid, // এই আইডি দিয়ে পরে প্রোফাইল থেকে নাম/লিঙ্ক আনা হবে
        country: formData.country,
        city: formData.city,
        occupation: formData.occupation,
        organization: formData.organization,
        yearsAbroad: Number(formData.yearsAbroad),
        shortDesc: formData.shortDesc,
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
    <div className="min-h-screen mb-10 bg-slate-50 dark:bg-[#050505] font-bangla pb-12 text-slate-900 dark:text-white transition-all">
      
      {/* Header */}
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md px-6 py-5 flex items-center justify-center border-b dark:border-white/5 sticky top-0 z-10">
        <h1 className="text-xl font-black italic uppercase tracking-tighter">
          Probashi <span className="text-blue-600">Register</span>
        </h1>
      </div>

      <div className="max-w-md mx-auto px-6 mt-8">
        {/* Profile Preview (এটি শুধু দেখানোর জন্য) */}
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
          
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">বর্তমান দেশ</label>
            <div className="relative">
              <Lucide.Globe className="absolute left-4 top-5 text-slate-400" size={20} />
              <input 
                required 
                type="text" 
                className="w-full py-5 pl-12 pr-6 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold shadow-sm" 
                placeholder="দেশের নাম (উদাঃ সৌদি আরব)" 
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">শহর</label>
            <div className="relative">
              <Lucide.MapPin className="absolute left-4 top-5 text-slate-400" size={20} />
              <input 
                required 
                type="text" 
                className="w-full py-5 pl-12 pr-6 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold" 
                placeholder="শহরের নাম (উদাঃ রিয়াদ)" 
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">কি কাজ করেন</label>
            <div className="relative">
              <Lucide.Briefcase className="absolute left-4 top-5 text-slate-400" size={20} />
              <input 
                required 
                type="text" 
                className="w-full py-5 pl-12 pr-6 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold" 
                placeholder="পেশা (উদাঃ ড্রাইবার / ব্যবসায়ী)" 
                value={formData.occupation}
                onChange={(e) => setFormData({...formData, occupation: e.target.value})} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">সংগঠন (যদি থাকে)</label>
            <div className="relative">
              <Lucide.Users className="absolute left-4 top-5 text-slate-400" size={20} />
              <input 
                type="text" 
                className="w-full py-5 pl-12 pr-6 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold" 
                placeholder="সংগঠনের নাম লিখুন" 
                value={formData.organization}
                onChange={(e) => setFormData({...formData, organization: e.target.value})} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">প্রবাস জীবন (কত বছর)</label>
            <div className="relative">
              <Lucide.Calendar className="absolute left-4 top-5 text-slate-400" size={20} />
              <input 
                required 
                type="number" 
                className="w-full py-5 pl-12 pr-6 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold" 
                placeholder="উদাঃ ১০" 
                value={formData.yearsAbroad}
                onChange={(e) => setFormData({...formData, yearsAbroad: e.target.value})} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">সংক্ষিপ্ত বর্ণনা</label>
            <textarea 
              className="w-full p-6 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold min-h-[120px]" 
              placeholder="আপনার সম্পর্কে কিছু লিখুন..." 
              value={formData.shortDesc}
              onChange={(e) => setFormData({...formData, shortDesc: e.target.value})} 
            />
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

      {/* Login Modal ও Alert আগের মতোই থাকবে */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
          <div className="bg-white dark:bg-zinc-900 w-full max-w-sm rounded-[2.5rem] p-8 text-center border dark:border-white/5">
            <Lucide.Lock size={40} className="mx-auto mb-4 text-blue-600" />
            <h2 className="text-2xl font-black mb-2">লগইন প্রয়োজন</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
              প্রবাসীদের তালিকায় নাম লেখাতে অনুগ্রহ করে লগইন করুন।
            </p>
            <button onClick={() => navigate('/login')} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black mb-3 active:scale-95 transition-all">লগইন করুন</button>
            <button onClick={() => navigate(-1)} className="w-full py-4 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 rounded-2xl font-bold">ফিরে যান</button>
          </div>
        </div>
      )}

      {alert.show && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] bg-zinc-900 text-white px-8 py-4 rounded-full font-bold shadow-2xl border border-white/10">
          {alert.msg}
        </div>
      )}

    </div>
  );
};

export default ProbashiAdd;