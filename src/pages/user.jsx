import React, { useState, useEffect } from 'react';
import { db, auth } from "../firebase.js"; 
import { 
  doc, getDoc, updateDoc, collection, 
  query, where, getDocs, deleteDoc 
} from "firebase/firestore"; 
import { updateProfile } from "firebase/auth"; // নতুন ইমপোর্ট
import { useNavigate } from 'react-router-dom';
import { 
  User, MapPin, Phone, Briefcase, 
  Calendar, Camera, LogOut, 
  Save, Loader2, ChevronLeft, CheckCircle2,
  Facebook, Youtube, MessageCircle, FileText, Trash2, AlertTriangle, Mail
} from 'lucide-react';

const UserProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  
  const [userPosts, setUserPosts] = useState([]);
  const [deleteModal, setDeleteModal] = useState({ show: false, postId: null, collection: '' });

  const villageList = [
    "গোবিন্দপুর", "শংকরপুর", "সারঙ্গপুর", "সোনাপুর", "ঘুষপুর", "নরসিংহপুর", "কৃষ্ণপুর", 
    "দূর্গাপুর", "হাজীনগর", "হরিপুর", "ভরতপুর", "রঘুনাথ পুর", "নিত্যানন্দ পুর", 
    "রাধানগর", "সতিঝির গ্রাম", "মরাজানের পাড়", "ভাদাইর দেউল", "কেচুলুটি", 
    "দৌলতপুর", "শমশেরনগর বাজার", "শিংরাউলী", "ঈদগাটিলা", "বড়চেগ", 
    "শমশেরনগর চা বাগান", "কানিহাটি চা বাগান", "দেওছড়া চা বাগান", 
    "বাঘিছড়া চা বাগান", "ডাবলছড়া চা বাগান"
  ];
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const [formData, setFormData] = useState({
    name: '', age: '', bloodGroup: '', phone: '',
    whatsapp: '', facebook: '', youtube: '',
    profession: '', village: '', photoURL: '',
    email: '' // ইমেইল স্টেট যোগ করা হয়েছে
  });

  const CLOUD_NAME = "dzfp8fr5y";
  const UPLOAD_PRESET = "profile_uploads";

  const getAutoContent = (post) => {
    const excludeFields = ['id', 'userId', 'uid', 'photoURL', 'userPhoto', 'createdAt', 'collectionName'];
    const priorityKeys = ['text', 'title', 'name', 'matchName', 'patientDisease', 'description'];
    for (let pk of priorityKeys) {
      if (post[pk] && typeof post[pk] === 'string' && post[pk].length > 2) return post[pk];
    }
    const keys = Object.keys(post);
    for (let key of keys) {
      if (!excludeFields.includes(key) && typeof post[key] === 'string' && post[key].length > 2 && post[key].length < 100) return post[key];
    }
    return "বিস্তারিত তথ্য নেই";
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            // Firestore এর ডাটার সাথে Auth এর ইমেইল এবং নাম সিঙ্ক করা
            setFormData({ 
              ...userDoc.data(), 
              uid: user.uid, 
              email: user.email,
              name: userDoc.data().name || user.displayName || '' 
            });
          } else {
            setFormData(prev => ({ ...prev, email: user.email, name: user.displayName || '' }));
          }

          const targetedCollections = ["bloodneed", "blooddonate", "football", "cricket", "posts"]; 
          let allFetchedPosts = [];

          for (const collName of targetedCollections) {
            try {
              const q = query(collection(db, collName), where("userId", "==", user.uid));
              const snap = await getDocs(q);
              const posts = snap.docs.map(doc => ({
                id: doc.id,
                collectionName: collName,
                ...doc.data()
              }));
              allFetchedPosts = [...allFetchedPosts, ...posts];
            } catch (err) { console.error(err); }
          }
          allFetchedPosts.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
          setUserPosts(allFetchedPosts);
        } catch (error) { console.error(error); } finally { setFetching(false); }
      } else { navigate('/login'); }
    };
    fetchUserData();
  }, [navigate]);

  const confirmDelete = async () => {
    const { postId, collection: collName } = deleteModal;
    try {
      setLoading(true);
      await deleteDoc(doc(db, collName, postId));
      setUserPosts(prev => prev.filter(post => post.id !== postId));
      triggerAlert("পোস্টটি মুছে ফেলা হয়েছে!");
    } catch (error) {
      triggerAlert("ডিলিট করা যায়নি!");
    } finally {
      setLoading(false);
      setDeleteModal({ show: false, postId: null, collection: '' });
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", UPLOAD_PRESET);
    data.append("cloud_name", CLOUD_NAME);
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, { method: "POST", body: data });
      const fileData = await res.json();
      if (fileData.secure_url) {
        setFormData(prev => ({ ...prev, photoURL: fileData.secure_url }));
        triggerAlert("ছবি আপলোড সফল!");
      }
    } catch (err) { triggerAlert("আপলোড ব্যর্থ!"); } finally { setUploading(false); }
  };

  const triggerAlert = (msg) => {
    setAlertMsg(msg);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (user) {
        // ১. Firestore আপডেট
        await updateDoc(doc(db, "users", user.uid), formData);
        
        // ২. Firebase Auth প্রোফাইল আপডেট (যাতে লগইন করলে ডিফল্ট নাম না আসে)
        await updateProfile(user, {
          displayName: formData.name,
          photoURL: formData.photoURL
        });

        triggerAlert("সব তথ্য আপডেট হয়েছে!");
      }
    } catch (err) { 
      console.error(err);
      triggerAlert("আপডেট করা যায়নি!"); 
    } finally { setLoading(false); }
  };

  if (fetching) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-950">
      <Loader2 className="animate-spin text-blue-600" size={40} />
    </div>
  );

  return (
    <div className="min-h-screen mb-10 bg-slate-50 dark:bg-gray-950 pb-20 font-bangla transition-colors duration-300">
      {showAlert && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] bg-white dark:bg-gray-900 shadow-2xl rounded-2xl px-6 py-4 flex items-center gap-3 border-b-4 border-emerald-500 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="text-emerald-500" />
          <span className="font-bold dark:text-white">{alertMsg}</span>
        </div>
      )}

      {deleteModal.show && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm" onClick={() => setDeleteModal({ show: false, postId: null, collection: '' })} />
          <div className="bg-white dark:bg-gray-900 w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative z-10 border border-slate-100 dark:border-gray-800 animate-in zoom-in-95 duration-200">
            <div className="bg-red-50 dark:bg-red-950/30 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-5">
              <AlertTriangle className="text-red-600" size={32} />
            </div>
            <h3 className="text-center text-xl font-black dark:text-white mb-2">আপনি কি নিশ্চিত?</h3>
            <p className="text-center text-slate-500 dark:text-gray-400 text-sm font-medium mb-8">
              এই পোস্টটি চিরতরে মুছে ফেলা হবে। আপনি কি সত্যিই এটি ডিলিট করতে চান?
            </p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteModal({ show: false, postId: null, collection: '' })} className="flex-1 py-2 bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 rounded-2xl font-bold active:scale-95 transition-all">না</button>
              <button onClick={confirmDelete} className="flex-1 py-2 bg-red-600 text-white rounded-2xl font-bold shadow-lg shadow-red-200 dark:shadow-none active:scale-95 transition-all">হ্যাঁ</button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-6 py-4 flex items-center gap-4 sticky top-0 z-10 border-b dark:border-gray-800">
 
        <h1 className="text-xl font-black dark:text-white">প্রোফাইল সেটিংস</h1>
      </div>

      <div className="max-w-md mx-auto px-6 mt-6">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <img 
            src={formData.photoURL || `https://ui-avatars.com/api/?name=${formData.name || 'User'}&background=random`} 
            className="w-full h-full rounded-[2.5rem] object-cover border-4 border-white dark:border-gray-800 shadow-xl"
            alt="Profile"
          />
          <label className="absolute bottom-0 right-0 bg-blue-600 p-3 rounded-2xl text-white shadow-lg cursor-pointer hover:bg-blue-700 active:scale-90 transition-all">
            {uploading ? <Loader2 className="animate-spin" size={20} /> : <Camera size={20} />}
            <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" disabled={uploading} />
          </label>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="bg-white dark:bg-gray-900 p-5 rounded-[2rem] shadow-sm space-y-4 border border-slate-100 dark:border-gray-800">
            <h2 className="text-xs font-black text-blue-600 uppercase tracking-widest ml-1">ব্যক্তিগত তথ্য</h2>
            
            {/* Email Field (Show Only) */}
            <div className="relative opacity-70">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input value={formData.email} readOnly className="w-full py-4 pl-12 pr-4 bg-slate-100 dark:bg-gray-800/50 rounded-2xl outline-none font-bold dark:text-white cursor-not-allowed" placeholder="ইমেইল" />
            </div>

            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input placeholder="নাম" className="w-full py-4 pl-12 pr-4 bg-slate-50 dark:bg-gray-800 rounded-2xl outline-none font-bold dark:text-white" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input type="number" placeholder="বয়স" className="w-full py-4 pl-10 pr-2 bg-slate-50 dark:bg-gray-800 rounded-2xl outline-none font-bold dark:text-white" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} />
              </div>
              <div className="relative">
                <select className="w-full py-4 px-4 bg-slate-50 dark:bg-gray-800 rounded-2xl outline-none font-bold dark:text-white appearance-none cursor-pointer" value={formData.bloodGroup} onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})}>
                  <option value="">রক্ত</option>
                  {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
                </select>
              </div>
            </div>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input placeholder="পেশা (যেমন: ছাত্র, ব্যবসায়ী)" className="w-full py-4 pl-12 pr-4 bg-slate-50 dark:bg-gray-800 rounded-2xl outline-none font-bold dark:text-white" value={formData.profession} onChange={(e) => setFormData({...formData, profession: e.target.value})} />
            </div>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <select className="w-full py-4 pl-12 pr-4 bg-slate-50 dark:bg-gray-800 rounded-2xl outline-none font-bold dark:text-white appearance-none cursor-pointer" value={formData.village} onChange={(e) => setFormData({...formData, village: e.target.value})}>
                <option value="">গ্রাম সিলেক্ট করুন</option>
                {villageList.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-5 rounded-[2rem] shadow-sm space-y-4 border border-slate-100 dark:border-gray-800">
            <h2 className="text-xs font-black text-emerald-600 uppercase tracking-widest ml-1">যোগাযোগ ও সোশ্যাল</h2>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" size={18} />
              <input placeholder="01627******" className="w-full py-4 pl-12 pr-4 bg-slate-50 dark:bg-gray-800 rounded-2xl outline-none font-bold dark:text-white" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div className="relative">
              <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
              <input placeholder="01627******" className="w-full py-4 pl-12 pr-4 bg-slate-50 dark:bg-gray-800 rounded-2xl outline-none font-bold dark:text-white" value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} />
            </div>
            <div className="relative">
              <Facebook className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={18} />
              <input placeholder="https://facebook.com/shahanbd.24" className="w-full py-4 pl-12 pr-4 bg-slate-50 dark:bg-gray-800 rounded-2xl outline-none font-bold dark:text-white" value={formData.facebook} onChange={(e) => setFormData({...formData, facebook: e.target.value})} />
            </div>
            <div className="relative">
              <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" size={18} />
              <input placeholder="https://youtube.com/@MrBeast" className="w-full py-4 pl-12 pr-4 bg-slate-50 dark:bg-gray-800 rounded-2xl outline-none font-bold dark:text-white" value={formData.youtube} onChange={(e) => setFormData({...formData, youtube: e.target.value})} />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-5 rounded-[2rem] shadow-sm space-y-4 border border-slate-100 dark:border-gray-800">
            <div className="flex items-center justify-between ml-1">
              <h2 className="text-xs font-black text-red-600 uppercase tracking-widest">আমার পোস্টসমূহ ({userPosts.length})</h2>
              <FileText size={18} className="text-red-400" />
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {userPosts.length > 0 ? (
                userPosts.map((post) => (
                  <div key={post.id} className="p-4 bg-slate-50 dark:bg-gray-800 rounded-2xl border border-slate-100 dark:border-gray-700">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold dark:text-white truncate">{getAutoContent(post)}</p>
                        <span className="text-[9px] bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 px-2 py-0.5 rounded-md uppercase font-black">
                          {post.collectionName}
                        </span>
                      </div>
                      <button type="button" onClick={() => setDeleteModal({ show: true, postId: post.id, collection: post.collectionName })} className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl hover:scale-110 active:scale-90 transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center py-6 text-slate-400 text-xs italic">কোনো পোস্ট নেই</p>
              )}
            </div>
          </div>

          <button type="submit" disabled={loading || uploading} className="w-full py-5 rounded-[2rem] font-black text-lg bg-blue-600 text-white shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all">
            {loading ? <Loader2 className="animate-spin" /> : <><Save size={22} /> সব তথ্য সেভ করুন</>}
          </button>
        </form>

        <button onClick={() => auth.signOut().then(() => navigate('/login'))} className="w-full mt-8 py-5 bg-red-50 dark:bg-red-950/20 text-red-600 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 border-2 border-red-100 dark:border-red-900/30 active:scale-95 transition-all">
          <LogOut size={22} /> লগ-আউট
        </button>
      </div>
    </div>
  );
};

export default UserProfile;