import React, { useState, useEffect } from 'react';
import { db, auth } from "../../firebase.js";
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { 
  Store, MapPin, Clock, Link, 
  Image as ImageIcon, Loader2,
  ChevronRight, ArrowLeft, CheckCircle2, PartyPopper, Coffee
} from 'lucide-react';

const MarketAdd = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); 
  const [profile, setProfile] = useState(null);
  
  const [category, setCategory] = useState("mudishop");
  const [shopName, setShopName] = useState("");
  const [shopLocation, setShopLocation] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [mapUrl, setMapUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // ইউজারের প্রোফাইল ডাটা ফেচ করা (ছবি, নাম, গ্রাম)
  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      }
    };
    fetchProfile();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "thumbnail_upload"); 
    data.append("cloud_name", "dzfp8fr5y");    

    const res = await fetch("https://api.cloudinary.com/v1_1/dzfp8fr5y/image/upload", {
      method: "POST",
      body: data
    });
    const file = await res.json();
    return file.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) return alert("দোকানের একটি ছবি দিন!");
    
    setLoading(true);
    try {
      const imageUrl = await uploadImage();
      const user = auth.currentUser;

      const shopData = {
        userId: user.uid,
        userName: profile?.name || "Unknown",
        userPhone: profile?.number || profile?.phone || "",
        userVillage: profile?.village || "",
        userPhoto: profile?.photoURL || "", // ইউজারের ছবিও সেভ হচ্ছে
        shopName,
        shopLocation,
        openingHours: `${openTime} - ${closeTime}`,
        mapUrl,
        thumbnail: imageUrl,
        category,
        createdAt: serverTimestamp()
      };

      await setDoc(doc(db, category, user.uid), shopData);
      
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/market');
      }, 3000);

    } catch (error) {
      console.error(error);
      alert("কিছু একটা ভুল হয়েছে!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080808] text-slate-900 dark:text-white font-bangla pb-10 transition-colors">
      
      {/* --- কাস্টম সাকসেস এলার্ট --- */}
      {showSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md">
          <div className="bg-white dark:bg-[#121212] w-full max-w-[300px] rounded-[3rem] p-8 text-center shadow-2xl border border-white/10 animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
              <CheckCircle2 className="text-white w-10 h-10" />
            </div>
            <h2 className="text-2xl font-black mb-2">সফল হয়েছে!</h2>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs">আপনার দোকানটি লিস্টে <br /> যোগ করা হয়েছে।</p>
            <div className="mt-6 flex justify-center">
               <Loader2 className="animate-spin text-blue-600" size={24} />
            </div>
          </div>
        </div>
      )}

      {/* হেডার */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 p-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 bg-slate-100 dark:bg-white/10 rounded-full active:scale-90 transition-all">
          <ArrowLeft size={20} className="text-slate-700 dark:text-slate-300" />
        </button>
        <h1 className="text-lg font-black italic uppercase tracking-tighter">Add <span className="text-blue-600">Merchant</span></h1>
      </div>

      <div className="max-w-md mx-auto px-6 pt-6">
        
        {/* --- প্রোফাইল প্রিভিউ কার্ড (নাম, গ্রাম, ছবি) --- */}
        <div className="bg-white dark:bg-[#0D0D0D] rounded-[2.5rem] p-5 mb-8 border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center gap-4">
          <div className="relative">
            <img 
              src={profile?.photoURL || `https://ui-avatars.com/api/?name=${profile?.name || 'User'}&background=0D8ABC&color=fff`} 
              className="w-16 h-16 rounded-[1.5rem] object-cover border-2 border-blue-500/20"
              alt="Profile"
            />
            <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1 border-2 border-white dark:border-[#0D0D0D]">
              <CheckCircle2 size={12} className="text-white" fill="currentColor" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[9px] font-black uppercase tracking-widest text-blue-600">Merchant Account</p>
            <h2 className="text-lg font-black text-slate-800 dark:text-white leading-tight">{profile?.name || "লোড হচ্ছে..."}</h2>
            <p className="text-[11px] font-bold text-slate-400 mt-0.5 flex items-center gap-1">
              <MapPin size={10} className="text-red-500" /> {profile?.village || "গ্রাম উল্লেখ নেই"}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* ক্যাটাগরি */}
          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase text-slate-400 ml-4">দোকানের ধরণ</label>
            <div className="relative">
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-[1.5rem] py-4 px-6 outline-none font-bold text-sm focus:border-blue-500/50 appearance-none shadow-sm dark:text-slate-200"
              >
                <option value="mudishop">🛒 মুদি দোকান</option>
                <option value="restrurant">🍽️ রেস্টুরেন্ট</option>
                <option value="coffeeshop">☕ কফি শপ</option>
                <option value="electroniccshop">🔌 ইলেকট্রনিক্স</option>
                <option value="garments">👕 গার্মেন্টস</option>
                <option value="shoes">👟 জুতার দোকান</option>
                <option value="hardware">🛠️ হার্ডওয়্যার</option>
                <option value="giftshop">🎁 গিফট শপ</option>
                <option value="salon">✂️ সেলুন</option>
                <option value="parler">💄 পার্লার</option>
              </select>
              <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none" size={18} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase text-slate-400 ml-4">দোকানের নাম</label>
            <div className="relative group">
              <Store className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500" size={18} />
              <input 
                type="text" required placeholder="আপনার দোকানের নাম"
                className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-[1.5rem] py-4 pl-14 pr-6 outline-none font-bold text-sm focus:border-blue-500 transition-all shadow-sm"
                onChange={(e) => setShopName(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase text-slate-400 ml-4">দোকানের ঠিকানা</label>
            <div className="relative group">
              <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500" size={18} />
              <input 
                type="text" required placeholder="উদা: মেইন বাজার রোড"
                className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-[1.5rem] py-4 pl-14 pr-6 outline-none font-bold text-sm focus:border-blue-500 transition-all shadow-sm"
                onChange={(e) => setShopLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-4">খোলার সময়</label>
              <input type="time" required className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-[1.2rem] py-3 px-5 outline-none font-bold text-sm" onChange={(e) => setOpenTime(e.target.value)} />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-4">বন্ধের সময়</label>
              <input type="time" required className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-[1.2rem] py-3 px-5 outline-none font-bold text-sm" onChange={(e) => setCloseTime(e.target.value)} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase text-slate-400 ml-4 italic">Google Map Link (Optional)</label>
            <div className="relative">
              <Link className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="url" placeholder="ম্যাপ লিংক দিন"
                className="w-full bg-white dark:bg-[#121212] border-2 border-slate-100 dark:border-white/5 rounded-[1.5rem] py-4 pl-14 pr-6 outline-none font-bold text-sm"
                onChange={(e) => setMapUrl(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
             <label className="text-[11px] font-black uppercase text-slate-400 ml-4 italic">দোকানের ছবি (Thumbnail)</label>
             <div 
              onClick={() => document.getElementById('imageInput').click()}
              className="w-full h-40 bg-white dark:bg-[#121212] border-2 border-dashed border-slate-200 dark:border-white/10 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer overflow-hidden relative"
             >
               {previewUrl ? (
                 <img src={previewUrl} className="w-full h-full object-cover" alt="Preview" />
               ) : (
                 <>
                   <ImageIcon className="text-slate-400 mb-2" size={30} />
                   <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">ছবি সিলেক্ট করুন</p>
                 </>
               )}
               <input id="imageInput" type="file" hidden accept="image/*" onChange={handleImageChange} />
             </div>
          </div>

          <button 
            disabled={loading}
            className="w-full h-16 bg-blue-600 text-white rounded-[2rem] font-black text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-3 active:scale-[0.97] transition-all mt-4 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : "দোকান রেজিস্টার করুন"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MarketAdd;