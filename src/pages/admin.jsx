import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase'; // আপনার ফায়ারবেস ফাইল পাথ চেক করুন
import { 
  collection, addDoc, getDocs, deleteDoc, 
  doc, updateDoc, query, orderBy, serverTimestamp 
} from 'firebase/firestore';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export default function AdminPanel() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // পোস্ট স্টেট
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('ইসলামিক');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);

  const categories = [
    'ইসলামিক', 'শিক্ষা', 'স্বাস্থ্য', 'কৃষি', 'আইটি সার্ভিস', 
    'পরিবহন', 'মার্কেট', 'মিডিয়া', 'প্রবাসী', 'শ্রমিক', 'উদ্যোক্তা', 'খেলাধুলা'
  ];

  // অথেন্টিকেশন চেক
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) fetchPosts();
    });
    return () => unsubscribe();
  }, []);

  // লগইন ফাংশন
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("ভুল ইমেইল বা পাসওয়ার্ড! আবার চেষ্টা করুন।");
    }
  };

  // পোস্ট ডেটা রিড করা
  const fetchPosts = async () => {
    try {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  // পোস্ট অ্যাড বা আপডেট
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      title,
      category,
      content,
      createdAt: serverTimestamp(),
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, "posts", editingId), postData);
        alert("পোস্টটি আপডেট হয়েছে!");
      } else {
        await addDoc(collection(db, "posts"), postData);
        alert("নতুন পোস্ট পাবলিশ হয়েছে!");
      }
      resetForm();
      fetchPosts();
    } catch (err) {
      alert("সেভ করতে সমস্যা হয়েছে!");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("আপনি কি নিশ্চিত ডিলিট করতে চান?")) {
      await deleteDoc(doc(db, "posts", id));
      fetchPosts();
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setEditingId(null);
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setTitle(post.title);
    setCategory(post.category);
    setContent(post.content);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <div className="flex justify-center items-center h-screen">লোড হচ্ছে...</div>;

  // লগইন ফর্ম (যদি অ্যাডমিন লগইন না থাকে)
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
          <h2 className="text-3xl font-black text-center mb-8 text-blue-600 font-bangla">অ্যাডমিন লগইন</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="email" placeholder="অ্যাডমিন ইমেইল" required
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" placeholder="পাসওয়ার্ড" required
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-bold transition duration-300">
              লগইন করুন
            </button>
          </form>
        </div>
      </div>
    );
  }

  // মেইন ড্যাশবোর্ড (লগইন থাকলে এটি দেখাবে)
  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-bangla">
      <nav className="bg-white shadow-sm p-4 mb-8 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-black text-gray-800">Admin Panel</h1>
          <button onClick={() => signOut(auth)} className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-bold text-sm">লগ আউট</button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4">
        {/* ফর্ম সেকশন */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 mb-10">
          <h3 className="text-xl font-bold mb-6 text-gray-700">
            {editingId ? '📝 পোস্টটি এডিট করুন' : '🚀 নতুন পোস্ট তৈরি করুন'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              value={title} onChange={(e) => setTitle(e.target.value)}
              placeholder="পোস্টের আকর্ষণীয় শিরোনাম" className="w-full p-4 border rounded-xl bg-gray-50 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all" required
            />
            <select 
              value={category} onChange={(e) => setCategory(e.target.value)}
              className="w-full p-4 border rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            <textarea 
              value={content} onChange={(e) => setContent(e.target.value)}
              placeholder="বিস্তারিত তথ্য এখানে লিখুন..." className="w-full p-4 border rounded-xl bg-gray-50 h-40 outline-none focus:ring-2 focus:ring-blue-500" required
            />
            <div className="flex gap-4">
              <button className="flex-grow bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                {editingId ? 'আপডেট করুন' : 'পাবলিশ করুন'}
              </button>
              {editingId && (
                <button type="button" onClick={resetForm} className="bg-gray-100 px-6 rounded-xl font-bold text-gray-500">বাতিল</button>
              )}
            </div>
          </form>
        </div>

        {/* পোস্ট লিস্ট */}
        <h3 className="text-2xl font-black mb-6 text-gray-800">আপনার পোস্টসমূহ ({posts.length})</h3>
        <div className="grid gap-4">
          {posts.map(post => (
            <div key={post.id} className="bg-white p-5 rounded-2xl border border-gray-100 flex justify-between items-center hover:shadow-md transition">
              <div className="flex-grow pr-4">
                <span className="text-[10px] uppercase tracking-wider font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{post.category}</span>
                <h4 className="font-bold text-gray-800 mt-2 line-clamp-1">{post.title}</h4>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(post)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition">এডিট</button>
                <button onClick={() => handleDelete(post.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition">ডিলিট</button>
              </div>
            </div>
          ))}
          {posts.length === 0 && <p className="text-center text-gray-400 py-10">কোনো পোস্ট খুঁজে পাওয়া যায়নি।</p>}
        </div>
      </div>
    </div>
  );
}