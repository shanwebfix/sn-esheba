import React, { useState, useEffect } from 'react';
import { db, auth } from "../../firebase.js"; 
import { collection, addDoc, serverTimestamp, getDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { 
  Save, Loader2, MapPin, 
  Lock, ArrowRight, CheckCircle2, AlertCircle, 
  X, Info, UserCheck, Star, Car, Bike, Truck
} from 'lucide-react';

const PoribohonAdd = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const [userProfile, setUserProfile] = useState({
    name: '',
    photoURL: '',
    village: '',
    age: '',
    userId: ''
  });

  const [formData, setFormData] = useState({
    category: '', 
    plateNumber: '', 
    standName: '',
    modelName: '',
    experience: '' 
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
    if (!formData.category) return triggerAlert("যানবাহন সিলেক্ট করুন", "error");

    setLoading(true);
    try {
      const collectionMap = {
        'সিএনজি': 'cng_driver',
        'কার': 'car_driver',
        'বাইক': 'bike_rider',
        'পিকআপ': 'pickup_driver'
      };

      const targetCollection = collectionMap[formData.category];

      await addDoc(collection(db, targetCollection), {
        ...formData,
        userId: userProfile.userId,
        createdAt: serverTimestamp()
      });

      triggerAlert("সফলভাবে তালিকায় যুক্ত হয়েছেন!");
      setTimeout(() => navigate(-1), 1500);
    } catch (err) {
      triggerAlert("পোস্ট করা যাচ্ছে না!", "error");
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
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-bangla pb-12">
      
      {alert.show && (
        <div className={`fixed top-5 left-1/2 -translate-x-1/2 z-[110] w-[90%] max-w-sm p-4 rounded-3xl backdrop-blur-xl border flex items-center gap-3 animate-in fade-in slide-in-from-top-5 shadow-2xl ${
          alert.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-600' : 'bg-red-500/10 border-red-500/50 text-red-600'
        }`}>
          {alert.type === 'success' ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
          <p className="text-sm font-black flex-grow">{alert.msg}</p>
          <button onClick={() => setAlert({ show: false, msg: '', type: '' })}><X size={18} /></button>
        </div>
      )}

      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-6 py-5 flex items-center justify-center border-b dark:border-gray-800 sticky top-0 z-10">
        <h1 className="text-xl font-black dark:text-white italic tracking-tighter uppercase">DRIVER <span className="text-blue-600">REGISTRATION</span></h1>
      </div>

      <div className="max-w-md mx-auto px-6 mt-8">
        
        <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-5 mb-8 border dark:border-gray-800 shadow-sm">
          <div className="flex items-center gap-4">
            <img src={userProfile.photoURL || `https://ui-avatars.com/api/?name=${userProfile.name}`} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-blue-600/10" alt="Profile" />
            <div>
              <h2 className="font-black text-lg dark:text-white">{userProfile.name}</h2>
              <div className="flex flex-col gap-0.5">
                <p className="text-slate-500 dark:text-gray-400 text-[11px] font-bold flex items-center gap-1">
                  <MapPin size={12} className="text-blue-600" /> {userProfile.village}
                </p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest italic">Age: {userProfile.age} Years</p>
              </div>
            </div>
          </div>
          <div className="mt-4 py-2 px-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30">
             <p className="text-[10px] text-blue-600 dark:text-blue-400 font-bold text-center">
               উপরের তথ্যগুলো আপনার প্রোফাইল থেকে নেওয়া হয়েছে।
             </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">বাহন নির্বাচন করুন</label>
            <div className="grid grid-cols-4 gap-3">
              {[
                { id: 'সিএনজি', icon: Truck, label: 'CNG' },
                { id: 'কার', icon: Car, label: 'CAR' },
                { id: 'বাইক', icon: Bike, label: 'BIKE' },
                { id: 'পিকআপ', icon: Truck, label: 'PICKUP' }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFormData({...formData, category: item.id})}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all ${
                    formData.category === item.id 
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600' 
                    : 'border-transparent bg-white dark:bg-gray-900 text-slate-400'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="text-[9px] font-black mt-1">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {formData.category && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4">
              
              {formData.category !== 'সিএনজি' && (
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase ml-1 tracking-widest">{formData.category} মডেল</label>
                  <input 
                    required 
                    className="w-full py-4 px-6 bg-white dark:bg-gray-900 rounded-2xl border-2 border-transparent focus:border-blue-600 outline-none font-bold dark:text-white shadow-sm"
                    // ডাইনামিক প্লেসহোল্ডার যোগ করা হয়েছে নিচে
                    placeholder={
                        formData.category === 'বাইক' ? "উদাঃ Pulsar" : 
                        formData.category === 'পিকআপ' ? "উদাঃ Tata ACE" : 
                        formData.category === 'কার' ? "উদাঃ Toyota Corolla" : "মডেল লিখুন..."
                    }
                    value={formData.modelName}
                    onChange={(e) => setFormData({...formData, modelName: e.target.value})}
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase ml-1 tracking-widest">গাড়ির প্লেট নম্বর</label>
                <input 
                  required 
                  className="w-full py-4 px-6 bg-white dark:bg-gray-900 rounded-2xl border-2 border-transparent focus:border-blue-600 outline-none font-bold dark:text-white shadow-sm"
                  placeholder="উদাঃ মৌলভীবাজার-থ ১১-২২৩৩"
                  value={formData.plateNumber}
                  onChange={(e) => setFormData({...formData, plateNumber: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase ml-1 tracking-widest">ড্রাইভিং অভিজ্ঞতা (বছর)</label>
                <div className="relative">
                  <Star className="absolute left-4 top-4 text-slate-400" size={18} />
                  <input 
                    required 
                    type="number"
                    className="w-full py-4 pl-12 pr-6 bg-white dark:bg-gray-900 rounded-2xl border-2 border-transparent focus:border-blue-600 outline-none font-bold dark:text-white shadow-sm"
                    placeholder="উদাঃ ৫"
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  />
                </div>
              </div>

              {formData.category === 'সিএনজি' && (
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase ml-1 tracking-widest">আপনার স্ট্যান্ড</label>
                  <select 
                    required 
                    className="w-full py-4 px-6 bg-white dark:bg-gray-900 rounded-2xl border-2 border-transparent focus:border-blue-600 outline-none font-bold dark:text-white shadow-sm"
                    value={formData.standName}
                    onChange={(e) => setFormData({...formData, standName: e.target.value})}
                  >
                    <option value="">স্ট্যান্ড নির্বাচন করুন...</option>
                    <option value="শমশেরনগর চৌমোহনা">শমশেরনগর চৌমোহনা</option>
                    <option value="ষ্টেশন রোড স্ট্যান্ড">ষ্টেশন রোড স্ট্যান্ড</option>
                    <option value="হাসপাতাল রোড স্ট্যান্ড">হাসপাতাল রোড স্ট্যান্ড</option>
                  </select>
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-lg shadow-xl shadow-blue-600/20 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {loading ? <Loader2 className="animate-spin" /> : <><Save size={22} /> তালিকায় নাম যুক্ত করুন</>}
              </button>
            </div>
          )}
        </form>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-black/40">
          <div className="bg-white dark:bg-gray-900 w-full max-w-sm rounded-[2.5rem] p-8 text-center border dark:border-gray-800 shadow-2xl">
            <Lock size={40} className="mx-auto mb-4 text-blue-600" />
            <h2 className="text-2xl font-black mb-2 text-slate-900 dark:text-white">লগইন প্রয়োজন</h2>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">চালকের তালিকায় নাম লেখাতে আপনার অ্যাকাউন্টে লগইন করুন।</p>
            <button onClick={() => navigate('/login')} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black mb-3">লগইন করুন</button>
            <button onClick={() => navigate(-1)} className="w-full py-4 bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-slate-300 rounded-2xl font-bold">ফিরে যান</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PoribohonAdd;