import React, { useState, useEffect } from 'react';
import { db, auth } from "../../firebase.js"; 
import { collection, addDoc, serverTimestamp, getDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, ChevronLeft, Save, 
  Loader2, Target, UserCheck, 
  MapPin, Lock, ArrowRight, Calendar,
  CheckCircle2, AlertCircle, X, Phone,
  Dribbble, CircleDot, Wind, Footprints 
} from 'lucide-react';

const SportsAdd = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const [userProfile, setUserProfile] = useState({
    name: '',
    phone: '',
    photoURL: '',
    village: '',
    age: '',
    userId: ''
  });

  const [formData, setFormData] = useState({
    category: '', 
    position: '',
    experience: '',
    maxDistance: '' // ম্যারাথনের জন্য নতুন ফিল্ড
  });

  const triggerAlert = (msg, type = 'success') => {
    setAlert({ show: true, msg, type });
    setTimeout(() => setAlert({ show: false, msg: '', type: '' }), 4000);
  };

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
              age: data.age || 'N/A',
              userId: user.uid
            });
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
    if (!formData.category) return triggerAlert("খেলার ধরন নির্বাচন করুন", "error");
    
    setLoading(true);
    try {
      const collectionMap = {
        'ফুটবল': 'football',
        'ক্রিকেট': 'cricket',
        'ব্যাডমিন্টন': 'badminton',
        'ম্যারাথন': 'marathon'
      };

      // ম্যারাথন না হলে maxDistance ডাটাবেজে পাঠানোর দরকার নেই
      const finalData = { ...formData, ...userProfile, createdAt: serverTimestamp() };
      if (formData.category !== 'ম্যারাথন') delete finalData.maxDistance;

      await addDoc(collection(db, collectionMap[formData.category]), finalData);

      triggerAlert("সফলভাবে নিবন্ধিত হয়েছেন!");
      setTimeout(() => navigate(-1), 1500);
    } catch (err) {
      triggerAlert("নিবন্ধন করা যাচ্ছে না!", "error");
    } finally {
      setLoading(false);
    }
  };

  if (fetchingUser) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <Loader2 className="animate-spin text-blue-600" size={40} />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-bangla pb-12 transition-all">
      
      {alert.show && (
        <div className={`fixed top-5 left-1/2 -translate-x-1/2 z-[110] w-[90%] max-w-sm p-4 rounded-3xl backdrop-blur-xl border flex items-center gap-3 animate-in fade-in slide-in-from-top-5 shadow-2xl ${
          alert.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-600' : 'bg-red-500/10 border-red-500/50 text-red-600'
        }`}>
          {alert.type === 'success' ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
          <p className="text-sm font-black flex-grow">{alert.msg}</p>
          <button onClick={() => setAlert({ show: false, msg: '', type: '' })}><X size={18} /></button>
        </div>
      )}

      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-6 py-4 flex items-center gap-4 border-b dark:border-gray-800 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-2 dark:text-white"><ChevronLeft size={24} /></button>
        <h1 className="text-xl font-black dark:text-white uppercase italic">Sports <span className="text-blue-600">Reg</span></h1>
      </div>

      <div className="max-w-md mx-auto px-6 mt-8">
        
        {/* Profile Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-6 mb-8 text-white shadow-xl shadow-blue-500/20">
          <div className="flex items-center gap-4">
            <img src={userProfile.photoURL || `https://ui-avatars.com/api/?name=${userProfile.name}`} className="w-16 h-16 rounded-2xl border-2 border-white/30 object-cover" alt="Profile" />
            <div>
              <h2 className="font-black text-lg leading-tight">{userProfile.name}</h2>
              <p className="text-blue-100 text-[10px] flex items-center gap-1 font-bold mt-1"><MapPin size={10} /> {userProfile.village}</p>
              <p className="text-blue-100 text-[10px] font-black uppercase tracking-widest mt-0.5 underline decoration-blue-400">Age: {userProfile.age} Years</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* ক্যাটাগরি সিলেকশন বক্স */}
          <div className="space-y-3">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest text-center block">খেলার ধরন নির্বাচন করুন</label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: 'ফুটবল', icon: Dribbble, label: 'FOOTBALL' },
                { id: 'ক্রিকেট', icon: CircleDot, label: 'CRICKET' },
                { id: 'ব্যাডমিন্টন', icon: Wind, label: 'BADMINTON' },
                { id: 'ম্যারাথন', icon: Footprints, label: 'MARATHON' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFormData({...formData, category: item.id})}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all ${
                    formData.category === item.id 
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600' 
                    : 'border-transparent bg-white dark:bg-gray-900 text-slate-400 shadow-sm'
                  }`}
                >
                  <item.icon size={22} className={formData.category === item.id ? "animate-pulse" : ""} />
                  <span className="text-[8px] font-black mt-2 tracking-tighter">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {formData.category && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              
              {/* পজিশন ইনপুট */}
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase ml-1 tracking-widest">{formData.category} পজিশন</label>
                <div className="relative">
                  <Target className="absolute left-5 top-5 text-slate-400" size={20} />
                  <input 
                    required 
                    type="text" 
                    className="w-full py-5 pl-14 pr-6 bg-white dark:bg-gray-900 rounded-[2rem] border-2 border-transparent focus:border-blue-600 outline-none font-bold dark:text-white shadow-sm" 
                    placeholder={
                      formData.category === 'ফুটবল' ? "উদাঃ গোলকিপার / স্ট্রাইকার" :
                      formData.category === 'ক্রিকেট' ? "উদাঃ ব্যাটসম্যান / বোলার" :
                      formData.category === 'ব্যাডমিন্টন' ? "উদাঃ সিঙ্গেল / ডাবল প্লেয়ার" :
                      formData.category === 'ম্যারাথন' ? "উদাঃ লং ডিসটেন্স রানার" : "পজিশন লিখুন..."
                    }
                    value={formData.position} 
                    onChange={(e) => setFormData({...formData, position: e.target.value})} 
                  />
                </div>
              </div>

              {/* ম্যারাথনের জন্য স্পেশাল ফিল্ড */}
              {formData.category === 'ম্যারাথন' && (
                <div className="space-y-2 animate-in zoom-in-95">
                  <label className="text-xs font-black text-slate-500 uppercase ml-1 tracking-widest">সর্বোচ্চ দৌড় (কি.মি.)</label>
                  <div className="relative">
                    <Footprints className="absolute left-5 top-5 text-blue-500" size={20} />
                    <input 
                      required 
                      type="number" 
                      className="w-full py-5 pl-14 pr-16 bg-white dark:bg-gray-900 rounded-[2rem] border-2 border-transparent focus:border-blue-600 outline-none font-bold dark:text-white shadow-sm" 
                      placeholder="উদাঃ ১০" 
                      value={formData.maxDistance} 
                      onChange={(e) => setFormData({...formData, maxDistance: e.target.value})} 
                    />
                    <span className="absolute right-6 top-5 font-black text-blue-600 text-sm">KM</span>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase ml-1 tracking-widest">অভিজ্ঞতা</label>
                <div className="relative">
                  <Calendar className="absolute left-5 top-5 text-slate-400" size={20} />
                  <input 
                    required 
                    type="text" 
                    className="w-full py-5 pl-14 pr-6 bg-white dark:bg-gray-900 rounded-[2rem] border-2 border-transparent focus:border-blue-600 outline-none font-bold dark:text-white shadow-sm" 
                    placeholder="উদাঃ ২ বছর / ৩টি টুর্নামেন্ট" 
                    value={formData.experience} 
                    onChange={(e) => setFormData({...formData, experience: e.target.value})} 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-lg shadow-xl shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                {loading ? <Loader2 className="animate-spin" /> : <><Save size={22} /> নিবন্ধন সম্পন্ন করুন</>}
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Login Modal (আগের মতোই থাকবে) */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-black/40">
          <div className="bg-white dark:bg-gray-900 w-full max-w-sm rounded-[2.5rem] p-8 text-center border dark:border-gray-800 animate-in zoom-in-95">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock size={40} />
            </div>
            <h2 className="text-2xl font-black dark:text-white mb-2">লগইন প্রয়োজন</h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">খেলোয়াড় হিসেবে নিবন্ধন করতে আগে লগইন করুন।</p>
            <button onClick={() => navigate('/login')} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black mb-3">লগইন করুন <ArrowRight size={18} className="inline ml-1" /></button>
            <button onClick={() => navigate(-1)} className="w-full py-4 bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 rounded-2xl font-bold">ফিরে যান</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SportsAdd;