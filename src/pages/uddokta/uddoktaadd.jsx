import React, { useState, useEffect } from 'react';
import { db, auth } from "../../firebase.js";
import { collection, addDoc, serverTimestamp, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Send, ArrowLeft, Loader2, CheckCircle, CheckCircle2 } from 'lucide-react';

const EntrepreneurAdd = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [showAlert, setShowAlert] = useState(false); 
  const [formData, setFormData] = useState({
    itemName: '',
    itemDesc: '',
    category: 'ই-কমার্স'
  });

  // --- ইউজারের প্রোফাইল থেকে শুধু প্রিভিউ করার জন্য তথ্য আনা ---
  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserProfile(userDoc.data());
          }
        } catch (error) {
          console.error("প্রোফাইল তথ্য পাওয়া যায়নি:", error);
        }
      } else {
        navigate('/login');
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    
    if (!user) return;

    setLoading(true);
    try {
      // শুধু ইউনিক এবং প্রয়োজনীয় ডাটা পাঠানো হচ্ছে
      await addDoc(collection(db, "uddokta"), {
        uid: user.uid, // এই আইডি দিয়ে পরে লিস্ট পেজে প্রোফাইল ডাটা ফেচ হবে
        itemName: formData.itemName,
        itemDesc: formData.itemDesc,
        category: formData.category,
        createdAt: serverTimestamp()
      });
      
      setShowAlert(true);
      
      setTimeout(() => {
        setShowAlert(false);
        navigate(-1);
      }, 3000);

    } catch (error) {
      console.error(error);
      alert("তথ্য সেভ করতে সমস্যা হয়েছে!");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 font-bangla relative transition-colors duration-300 ">
      
      {/* --- Success Alert --- */}
      {showAlert && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-xs animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-[2rem] p-5 flex items-center gap-4 border-b-4 border-emerald-500">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-2xl text-emerald-600">
              <CheckCircle2 size={28} strokeWidth={2.5} />
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-600">সফল হয়েছে</h4>
              <p className="text-sm font-bold text-slate-700 dark:text-white">উদ্যোক্তা হিসেবে যুক্ত হলেন!</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-md mx-auto">


        <div className={`transition-all duration-500 ${showAlert ? 'blur-sm scale-95 opacity-50' : ''}`}>
          <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 shadow-xl border border-indigo-100 dark:border-white/5">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <Briefcase size={32} />
              </div>
              <h2 className="text-2xl font-black dark:text-white leading-tight">নতুন উদ্যোক্তা ফর্ম</h2>
              <p className="text-slate-500 text-sm font-bold mt-1">আপনার ব্যবসার বিস্তারিত লিখুন</p>
            </div>

            {/* প্রোফাইল প্রিভিউ - এটি ডাটাবেসে সেভ হবে না */}
            <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/40">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 mb-2">
                <CheckCircle size={14} />
                <span className="text-[10px] font-black uppercase">প্রোফাইল কানেক্টেড</span>
              </div>
              {userProfile ? (
                <div className="flex items-center gap-3">
                  <img src={userProfile.photoURL} alt="" className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <p className="text-xs font-black dark:text-white">{userProfile.name}</p>
                    <p className="text-[10px] font-bold text-slate-500">{userProfile.village || "শমশেরনগর"}</p>
                  </div>
                </div>
              ) : (
                <p className="text-[10px] font-bold text-slate-500 italic">প্রোফাইল ডাটা লোড হচ্ছে...</p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-1 tracking-widest">ব্যবসার নাম / ব্র্যান্ড</label>
                <input 
                  required
                  type="text"
                  placeholder="যেমন: শমশেরনগর হস্তশিল্প"
                  className="w-full p-4 bg-slate-50 dark:bg-zinc-800 dark:text-white rounded-2xl border-none focus:ring-4 focus:ring-indigo-500/10 font-bold outline-none"
                  onChange={(e) => setFormData({...formData, itemName: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-1 tracking-widest">ক্যাটাগরি</label>
                <select 
                  className="w-full p-4 bg-slate-50 dark:bg-zinc-800 dark:text-white rounded-2xl border-none focus:ring-4 focus:ring-indigo-500/10 font-bold outline-none appearance-none"
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="ই-কমার্স">ই-কমার্স</option>
                  <option value="ফ্যাশন ও ডিজাইন">ফ্যাশন ও ডিজাইন</option>
                  <option value="কৃষি ও অর্গানিক">কৃষি ও অর্গানিক</option>
                  <option value="খাদ্য ও রেস্টুরেন্ট">খাদ্য ও রেস্টুরেন্ট</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-1 tracking-widest">পণ্য বা সেবার বিবরণ</label>
                <textarea 
                  required
                  rows="4"
                  placeholder="আপনার ব্যবসা সম্পর্কে ১-২ লাইনে লিখুন..."
                  className="w-full p-4 bg-slate-50 dark:bg-zinc-800 dark:text-white rounded-2xl border-none focus:ring-4 focus:ring-indigo-500/10 font-bold outline-none"
                  onChange={(e) => setFormData({...formData, itemDesc: e.target.value})}
                ></textarea>
              </div>

              <button 
                disabled={loading || !userProfile}
                type="submit"
                className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black flex items-center justify-center gap-2 shadow-lg hover:bg-indigo-700 transition-all active:scale-95 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <><Send size={18} /> উদ্যোক্তা তালিকায় নাম লেখান</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneurAdd;