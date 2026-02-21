import React, { useState, useEffect } from 'react';
import { db, auth } from "../../firebase.js"; 
import { collection, addDoc, serverTimestamp, getDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'; 
import { ChevronLeft, Heart, Calendar, MapPin, Droplet, Send, Activity, Hospital, Loader2 } from 'lucide-react';

const BloodAddPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [showPopup, setShowPopup] = useState({ show: false, success: true, message: '' });
  
  // প্রোফাইল থেকে আসা ডাটা (এটি শুধু দেখানোর জন্য, DB তে পাঠানো হবে না)
  const [userProfile, setUserProfile] = useState({
    name: '',
    photoURL: '',
    age: '',
    village: ''
  });

  // ফর্মের নিজস্ব ডাটা (যা DB তে যাবে)
  const [formData, setFormData] = useState({
    bloodGroup: 'A+',
    totalDonate: '',
    lastDonateDate: '',
    patientCondition: '',
    hospitalName: '',
    type: 'Donate'
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // প্রোফাইল থেকে লেটেস্ট ডাটা ফেচ (শুধুমাত্র প্রিভিউ দেখানোর জন্য)
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserProfile({
              name: data.name || user.displayName || 'নাম নেই',
              photoURL: data.photoURL || user.photoURL || '',
              age: data.age || '0',
              village: data.village || 'শিংরাউলী'
            });
          }
          setAuthLoading(false);
        } catch (error) {
          console.error("User Fetch Error:", error);
          setAuthLoading(false);
        }
      } else {
        navigate('/login'); 
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const collectionName = formData.type === 'Donate' ? "blooddonate" : "bloodneed";
      
      // এখানে শুধু ফর্মের ডাটা আর userId পাঠানো হচ্ছে
      const submitData = {
        userId: auth.currentUser.uid, // এটি দিয়ে পরে প্রোফাইল থেকে নাম/ছবি টেনে আনা হবে
        bloodGroup: formData.bloodGroup,
        type: formData.type,
        createdAt: serverTimestamp(),
        // যদি Donate মোড হয়
        ...(formData.type === 'Donate' && {
          totalDonate: formData.totalDonate ? Number(formData.totalDonate) : 0,
          lastDonateDate: formData.lastDonateDate || 'তথ্য নেই'
        }),
        // যদি Need মোড হয়
        ...(formData.type === 'Need' && {
          patientCondition: formData.patientCondition,
          hospitalName: formData.hospitalName
        })
      };

      await addDoc(collection(db, collectionName), submitData);
      
      setShowPopup({ show: true, success: true, message: 'আপনার তথ্য সফলভাবে সেভ করা হয়েছে!' });
      setTimeout(() => navigate('/pages/emergency/blood'), 2000);

    } catch (error) {
      console.error("Firebase Error:", error);
      setShowPopup({ show: true, success: false, message: 'তথ্য সেভ করা যায়নি!' });
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <Loader2 className="animate-spin text-red-600" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-bangla pb-10">
      
      {/* --- Header --- */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <ChevronLeft size={22} className="text-gray-700 dark:text-gray-200" />
          </button>
          <h1 className="text-xl font-black dark:text-white">নিবন্ধন ফরম</h1>
          <div className="w-10 h-10 bg-red-50 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-red-600">
            <Droplet size={20} />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 pt-6">
        
        {/* --- Profile Preview Card (এটি শুধু দেখানোর জন্য) --- */}
        <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-5 shadow-sm border dark:border-gray-800 mb-8 flex items-center gap-4">
          <img 
            src={userProfile.photoURL || `https://ui-avatars.com/api/?name=${userProfile.name}`} 
            className="w-16 h-16 rounded-2xl object-cover border-2 border-red-100 dark:border-red-900/30"
            alt="Profile" 
          />
          <div className="flex-1">
            <h2 className="font-black text-lg dark:text-white leading-tight">{userProfile.name}</h2>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md font-bold text-gray-500 flex items-center gap-1">
                <MapPin size={10} /> {userProfile.village}
              </span>
              <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md font-bold text-gray-500 flex items-center gap-1">
                <Calendar size={10} /> {userProfile.age} বছর
              </span>
            </div>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <button type="button" onClick={() => setFormData({...formData, type: 'Donate'})}
            className={`flex items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all ${
              formData.type === 'Donate' ? 'border-red-600 bg-red-50 dark:bg-red-900/20 text-red-600' : 'border-gray-200 dark:border-gray-800 text-gray-400'
            }`}>
            <Heart size={20} fill={formData.type === 'Donate' ? "currentColor" : "none"} />
            <span className="font-black text-sm">রক্তদাতা</span>
          </button>
          <button type="button" onClick={() => setFormData({...formData, type: 'Need'})}
            className={`flex items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all ${
              formData.type === 'Need' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'border-gray-200 dark:border-gray-800 text-gray-400'
            }`}>
            <Droplet size={20} fill={formData.type === 'Need' ? "currentColor" : "none"} />
            <span className="font-black text-sm">রক্ত প্রয়োজন</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1.5 block">রক্তের গ্রুপ</label>
              <div className="flex rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-gray-800 focus-within:border-red-500 transition-all">
                <div className="bg-red-600 px-4 flex items-center justify-center text-white">
                  <Droplet size={18} fill="white" />
                </div>
                <select name="bloodGroup" className="w-full p-4 bg-white dark:bg-gray-900 outline-none font-black dark:text-white appearance-none" value={formData.bloodGroup} onChange={handleChange}>
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
            </div>

            {formData.type === 'Need' && (
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1.5 block">রোগীর সমস্যা</label>
                <div className="flex rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-gray-800">
                  <div className="bg-blue-600 px-4 flex items-center justify-center text-white">
                    <Activity size={18} />
                  </div>
                  <input type="text" name="patientCondition" required placeholder="উদা: অপারেশন" className="w-full p-4 bg-white dark:bg-gray-900 outline-none font-bold text-sm dark:text-white" value={formData.patientCondition} onChange={handleChange} />
                </div>
              </div>
            )}
          </div>

          {formData.type === 'Need' && (
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 mb-1.5 block">রক্তদানের স্থান</label>
              <div className="flex rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-gray-800">
                <div className="bg-gray-800 dark:bg-gray-700 px-5 flex items-center justify-center text-white">
                  <Hospital size={18} />
                </div>
                <input type="text" name="hospitalName" required placeholder="হাসপাতালের নাম ও ঠিকানা" className="w-full p-4 bg-white dark:bg-gray-900 outline-none font-bold dark:text-white" value={formData.hospitalName} onChange={handleChange} />
              </div>
            </div>
          )}

          {formData.type === 'Donate' && (
            <div className="p-5 bg-white dark:bg-gray-900 rounded-[2rem] border dark:border-gray-800 space-y-4 shadow-sm">
              <h3 className="text-[10px] font-black text-red-500 uppercase tracking-widest px-1">রক্তদানের ইতিহাস</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-2xl">
                   <p className="text-[9px] font-bold text-gray-400 mb-1">মোট দান</p>
                   <input type="number" name="totalDonate" placeholder="০" className="w-full bg-transparent outline-none font-black text-base dark:text-white" value={formData.totalDonate} onChange={handleChange}/>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-2xl">
                   <p className="text-[9px] font-bold text-gray-400 mb-1">শেষ দান</p>
                   <input type="date" name="lastDonateDate" className="w-full bg-transparent outline-none font-bold text-[11px] dark:text-white mt-1" value={formData.lastDonateDate} onChange={handleChange}/>
                </div>
              </div>
            </div>
          )}

          <button type="submit" disabled={loading}
            className={`w-full py-5 rounded-[2rem] font-black text-white text-lg transition-all active:scale-95 flex items-center justify-center gap-3 mt-6 ${
              loading ? 'bg-gray-400' : (formData.type === 'Donate' ? 'bg-red-600 shadow-xl shadow-red-200' : 'bg-blue-600 shadow-xl shadow-blue-200')
            }`}>
            {loading ? <Loader2 className="animate-spin" /> : <><Send size={18} /> তথ্য সেভ করুন</>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BloodAddPage;