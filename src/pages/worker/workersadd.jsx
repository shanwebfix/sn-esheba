import React, { useState, useEffect } from 'react';
import { db, auth } from "../../firebase.js"; 
import { collection, addDoc, serverTimestamp, getDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { 
  Briefcase, ChevronLeft, Save, 
  Loader2, Star, Wrench, ShieldCheck, 
  UserCheck, MapPin, Lock, ArrowRight
} from 'lucide-react';

const MasterWorkerAdd = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  // প্রোফাইল প্রিভিউ এর জন্য স্টেট
  const [userProfile, setUserProfile] = useState(null);

  const [formData, setFormData] = useState({
    category: '',
    experience: '',
    specialty: '',
    status: 'হোম সার্ভিস এভেইলবল'
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserProfile(userDoc.data());
          }
          setFetchingUser(false);
        } catch (error) {
          console.error(error);
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
    if (!formData.category || !auth.currentUser) return;
    
    setLoading(true);
    try {
      // ক্যাটাগরি অনুযায়ী কালেকশন ম্যাপ
      const collectionMap = {
        'ইলেকট্রিশিয়ান': 'electronics',
        'প্লাম্বার': 'plumbers',
        'রাজমিস্ত্রি': 'masons',
        'পেইন্টার': 'painters',
        'কার্পেন্টার': 'carpenters',
        'ফ্রিজ টেকনিশিয়ান': 'fridge'
      };

      const targetCollection = collectionMap[formData.category];

      // শুধু ইউনিক ডাটা সেভ হচ্ছে, কমন ডাটা নয়
      await addDoc(collection(db, targetCollection), {
        userId: auth.currentUser.uid, // এই আইডি দিয়ে লিস্ট পেজে প্রোফাইল ফেচ হবে
        category: formData.category,
        experience: formData.experience,
        specialty: formData.specialty,
        status: formData.status,
        createdAt: serverTimestamp()
      });

      navigate(-1);
    } catch (err) {
      console.error(err);
      alert("সেভ করতে সমস্যা হয়েছে!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-bangla pb-12 mb-10">
      
      {/* --- Login Modal --- */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-white/30 dark:bg-black/40">
          <div className="bg-white dark:bg-gray-900 w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl border border-white dark:border-gray-800 text-center animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock size={40} strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl font-black dark:text-white mb-2">লগইন প্রয়োজন</h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
              মিস্ত্রি হিসেবে নাম নিবন্ধন করতে আপনার অ্যাকাউন্টে লগইন করা থাকতে হবে।
            </p>
            <div className="space-y-3">
              <button 
                onClick={() => navigate('/login')}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                এখনই লগইন করুন <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => navigate(-1)}
                className="w-full py-4 bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 rounded-2xl font-bold"
              >
                পরে করবো
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-6 py-4 flex items-center gap-4 border-b dark:border-gray-800 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors dark:text-white">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-black dark:text-white">মিস্ত্রি প্রোফাইল তৈরি</h1>
      </div>

      {fetchingUser ? (
        <div className="flex flex-col items-center justify-center pt-20">
          <Loader2 className="animate-spin text-blue-600 mb-4" size={40} />
          <p className="text-slate-500 font-bold">প্রোফাইল চেক করা হচ্ছে...</p>
        </div>
      ) : (
        <div className="max-w-md mx-auto px-6 mt-8">
          
          {/* প্রোফাইল প্রিভিউ কার্ড - ডাটাবেসে সেভ হবে না */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-6 mb-8 text-white shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-4 relative z-10">
              <img 
                src={userProfile?.photoURL || `https://ui-avatars.com/api/?name=${userProfile?.name || 'User'}`} 
                className="w-16 h-16 rounded-2xl border-2 border-white/30 object-cover shadow-inner" 
                alt="Profile" 
              />
              <div>
                <h2 className="font-black text-lg flex items-center gap-2">
                  {userProfile?.name || 'অচেনা ইউজার'} <UserCheck size={16} className="text-blue-200" />
                </h2>
                <p className="text-blue-100 text-xs flex items-center gap-1">
                  <MapPin size={12} /> {userProfile?.village || 'ঠিকানা নেই'}
                </p>
                <p className="text-[10px] mt-1 bg-white/20 inline-block px-2 py-0.5 rounded-full font-bold">
                  কানেক্টেড প্রোফাইল
                </p>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -right-4 -bottom-4 opacity-20 transform rotate-12">
              <Briefcase size={120} />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Category Select */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-500 uppercase ml-1">কাজের ধরন</label>
              <div className="relative group">
                <div className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-600 transition-colors pointer-events-none">
                  <Briefcase size={20} />
                </div>
                <select 
                  required 
                  className="w-full py-4 pl-12 pr-4 bg-white dark:bg-gray-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold dark:text-white shadow-sm transition-all appearance-none"
                  value={formData.category} 
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="">সিলেক্ট করুন...</option>
                  <option value="ইলেকট্রিশিয়ান">ইলেকট্রিশিয়ান</option>
                  <option value="প্লাম্বার">প্লাম্বার</option>
                  <option value="রাজমিস্ত্রি">রাজমিস্ত্রি</option>
                  <option value="পেইন্টার">পেইন্টার</option>
                  <option value="কার্পেন্টার">কার্পেন্টার</option>
                  <option value="ফ্রিজ টেকনিশিয়ান">ফ্রিজ টেকনিশিয়ান</option>
                </select>
              </div>
            </div>

            {/* Experience Input */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-500 uppercase ml-1">অভিজ্ঞতা</label>
              <div className="relative group">
                <div className="absolute left-4 top-4 text-amber-500 pointer-events-none">
                  <Star size={20} fill="currentColor" />
                </div>
                <input 
                  required 
                  type="text" 
                  className="w-full py-4 pl-12 pr-4 bg-white dark:bg-gray-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold dark:text-white shadow-sm transition-all" 
                  placeholder="যেমন: ৫ বছর+" 
                  value={formData.experience} 
                  onChange={(e) => setFormData({...formData, experience: e.target.value})} 
                />
              </div>
            </div>

            {/* Specialty Textarea */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-500 uppercase ml-1">আপনার বিশেষ দক্ষতা</label>
              <div className="relative group">
                <div className="absolute left-4 top-4 text-slate-400 pointer-events-none">
                  <Wrench size={20} />
                </div>
                <textarea 
                  required
                  className="w-full py-4 pl-12 pr-4 bg-white dark:bg-gray-900 rounded-3xl border-2 border-transparent focus:border-blue-600 outline-none font-bold dark:text-white shadow-sm h-32 resize-none transition-all" 
                  placeholder="আপনি কোন কাজে বেশি দক্ষ? (সংক্ষেপে লিখুন)" 
                  value={formData.specialty} 
                  onChange={(e) => setFormData({...formData, specialty: e.target.value})} 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading || !userProfile}
              className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {loading ? <Loader2 className="animate-spin" /> : <><Save size={22} /> প্রোফাইল সেভ করুন</>}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MasterWorkerAdd;