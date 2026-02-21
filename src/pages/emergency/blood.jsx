import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../../firebase.js";
import { collection, onSnapshot, query, orderBy, getDoc, doc } from 'firebase/firestore'; // getDoc, doc যোগ করা হয়েছে
import { Plus, Phone, MessageCircle, MapPin, Calendar, Droplet, User, Heart, Search, CheckCircle2, Activity, Hospital } from 'lucide-react';

const BloodDonorPage = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [bloodFilter, setBloodFilter] = useState('সকল');
  const [postType, setPostType] = useState('Donate');

  useEffect(() => {
    setLoading(true);
    const collectionName = postType === 'Donate' ? "blooddonate" : "bloodneed";
    const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // পোস্টের userId ব্যবহার করে লাইভ প্রোফাইল ডাটা ফেচ করা
      const enrichedDonors = await Promise.all(posts.map(async (post) => {
        if (post.userId) {
          try {
            const userDoc = await getDoc(doc(db, "users", post.userId));
            if (userDoc.exists()) {
              const userData = userDoc.data();
              return {
                ...post,
                // এই ডাটাগুলো সরাসরি প্রোফাইল থেকে আসছে (লাইভ)
                name: userData.name || "অচেনা ইউজার",
                photoURL: userData.photoURL || "",
                village: userData.village || "শিংরাউলী",
                age: userData.age || post.age, // প্রোফাইলে না থাকলে ব্যাকআপ হিসেবে পোস্টেরটা নেবে
                phone: userData.number || userData.phone || "",
                whatsapp: userData.whatsapp || userData.number || ""
              };
            }
          } catch (err) {
            console.error("User profiles fetch error:", err);
          }
        }
        return post;
      }));

      setDonors(enrichedDonors);
      setLoading(false);
    }, (error) => {
      console.error("Firestore Error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [postType]);

  const filteredDonors = donors.filter(donor => {
    const matchesSearch = (
      (donor.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || 
      (donor.village || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesBlood = bloodFilter === 'সকল' || donor.bloodGroup === bloodFilter;
    return matchesSearch && matchesBlood;
  });

  const toBanglaNumber = (num) => {
    if (!num && num !== 0) return '০';
    const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(digit => banglaNumbers[digit] || digit).join('');
  };

  const handleContact = (platform, value) => {
    if(!value) return alert("নম্বরটি পাওয়া যায়নি!");
    let url = platform === 'whatsapp' ? `https://wa.me/+88${value.replace(/\D/g, '')}` : `tel:${value}`;
    window.open(url, '_blank');
  };

  const bloodGroups = ['সকল', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] dark:text-slate-200 pb-20 font-bangla transition-colors duration-300">
      
      {/* Header Section */}
      <header className="sticky top-0 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2">
              <span className="w-10 h-10 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Droplet size={24} fill="white" />
              </span>
              ব্লাড ডিরেক্টরি
            </h1>
          </div>
          
          <div className="flex bg-slate-100 dark:bg-slate-800/50 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700">
            <button onClick={() => setPostType('Donate')} className={`flex-1 py-3 rounded-xl text-sm font-black transition-all duration-300 flex items-center justify-center gap-2 ${postType === 'Donate' ? 'bg-red-600 text-white shadow-md' : 'text-slate-500'}`}>
              <Heart size={16} fill={postType === 'Donate' ? "white" : "none"} /> রক্তদাতা
            </button>
            <button onClick={() => setPostType('Need')} className={`flex-1 py-3 rounded-xl text-sm font-black transition-all duration-300 flex items-center justify-center gap-2 ${postType === 'Need' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500'}`}>
              <Plus size={16} /> রক্ত প্রয়োজন
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-8">
        
        {/* সার্চ বার */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="নাম বা গ্রাম দিয়ে খুঁজুন..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none focus:border-red-500 font-bold shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* ব্লাড গ্রুপ ফিল্টার */}
        <div className="flex gap-2 overflow-x-auto pb-6 no-scrollbar mb-10">
          {bloodGroups.map(group => (
            <button
              key={group}
              onClick={() => setBloodFilter(group)}
              className={`px-6 py-2 rounded-xl whitespace-nowrap text-xs font-black transition-all border ${
                bloodFilter === group 
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500'
              }`}
            >
              {group === 'সকল' ? 'সকল গ্রুপ' : group}
            </button>
          ))}
        </div>

        {/* ডাটা লিস্ট */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-20 font-bold text-slate-400">লোড হচ্ছে...</div>
          ) : filteredDonors.length === 0 ? (
            <div className="col-span-full text-center py-20 font-bold text-slate-400 bg-white dark:bg-slate-900 rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-800">কোনো তথ্য নেই</div>
          ) : filteredDonors.map(donor => (
            <div key={donor.id} className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden transition-all hover:shadow-md">
              
              <div className={`absolute top-6 right-6 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-sm ${postType === 'Donate' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                {donor.bloodGroup}
              </div>

              {/* প্রোফাইল সেকশন (লাইভ ডাটা) */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-[1.5rem] bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 shrink-0 overflow-hidden">
                  {donor.photoURL ? (
                    <img src={donor.photoURL} className="w-full h-full object-cover" alt="" />
                  ) : (
                    <User size={32} />
                  )}
                </div>
                <div className="pr-12">
                  <h3 className="font-black text-xl text-slate-800 dark:text-white leading-tight">{donor.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-bold flex items-center gap-1 mt-1">
                    বয়স: <span className="text-slate-800 dark:text-slate-200">{toBanglaNumber(donor.age || 0)} বছর</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8 pl-1">
                {postType === 'Donate' ? (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">মোট রক্তদান</p>
                        <p className="text-sm font-black text-slate-700 dark:text-slate-300">{toBanglaNumber(donor.totalDonate || 0)} বার</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                        <Calendar size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">শেষ রক্তদান</p>
                        <p className="text-sm font-black text-slate-700 dark:text-slate-300">{donor.lastDonateDate || 'তথ্য নেই'}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                        <Activity size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">রোগীর সমস্যা</p>
                        <p className="text-sm font-black text-slate-700 dark:text-slate-300">{donor.patientCondition || 'জরুরি'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600">
                        <Hospital size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">রক্তদানের স্থান</p>
                        <p className="text-sm font-black text-slate-700 dark:text-slate-300 leading-tight">{donor.hospitalName || 'তথ্য নেই'}</p>
                      </div>
                    </div>
                  </>
                )}

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">এলাকা</p>
                    <p className="text-sm font-black text-slate-700 dark:text-slate-300">{donor.village}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => handleContact('phone', donor.phone)} className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-2xl font-black text-xs text-slate-700 dark:text-slate-300 transition-all">
                  <Phone size={18} /> কল দিন
                </button>
                <button onClick={() => handleContact('whatsapp', donor.whatsapp || donor.phone)} className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-black text-xs shadow-lg shadow-green-200 dark:shadow-none transition-all">
                  <MessageCircle size={18} /> WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-10 right-8 z-[60] mb-10">
        <Link to="/pages/emergency/bloodadd" className={`flex items-center justify-center w-16 h-16 rounded-[1.8rem] shadow-1xl transition-all transform hover:scale-110 active:scale-95 text-white ${postType === 'Donate' ? 'bg-red-600 shadow-red-200' : 'bg-blue-600 shadow-blue-200'}`}>
          <Plus size={35} strokeWidth={3} />
        </Link>
      </div>
    </div>
  );
};

export default BloodDonorPage;