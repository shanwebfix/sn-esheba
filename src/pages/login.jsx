import React, { useState } from 'react';
import { db, auth } from "../firebase.js";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, LogIn, ArrowRight, XCircle, CheckCircle2, RefreshCw } from 'lucide-react';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false); // রিসেন্ডের জন্য নতুন স্টেট
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setMessage("");
  };

  // --- নতুন রিসেন্ড লিঙ্ক ফাংশন ---
  const handleResendEmail = async () => {
    if (!formData.email || !formData.password) {
      setError("আগে ইমেইল এবং পাসওয়ার্ড দিন!");
      return;
    }
    setResending(true);
    try {
      // লিঙ্ক পাঠানোর জন্য আগে ইউজারকে লগইন করাতে হয় (Firebase নিয়ম)
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      await sendEmailVerification(userCredential.user);
      setMessage("ভেরিফিকেশন লিঙ্ক আবার পাঠানো হয়েছে। ইমেইল চেক করুন!");
      await signOut(auth); // আবার লগআউট করে দেওয়া হলো যাতে ভেরিফাই ছাড়া ঢুকতে না পারে
    } catch (err) {
      setError("লিঙ্ক রিসেন্ড করা যায়নি। ইমেইল বা পাসওয়ার্ড চেক করুন।");
    } finally {
      setResending(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      setError("আগে আপনার ইমেইলটি লিখুন!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, formData.email);
      setMessage("পাসওয়ার্ড রিসেট লিঙ্ক আপনার ইমেইলে পাঠানো হয়েছে।");
    } catch (err) {
      setError("রিসেট ইমেইল পাঠানো যায়নি। ইমেইলটি সঠিক কি না চেক করুন।");
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!agreed) {
      setError("দয়া করে আমাদের শর্তাবলীতে সম্মত হন!");
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("পাসওয়ার্ড দুটি মেলেনি!");
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        if (!user.emailVerified) {
          setError("আপনার ইমেইল ভেরিফাইড নয়! দয়া করে ইনবক্স চেক করুন।");
          await signOut(auth);
          setLoading(false);
          return;
        }
        navigate(-1);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;
        
        await sendEmailVerification(user);
        
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: formData.name,
          email: formData.email,
          createdAt: serverTimestamp()
        });

        setMessage("একাউন্ট তৈরি হয়েছে! ইনবক্স থেকে ইমেইল ভেরিফাই করে লগইন করুন।");
        setIsLogin(true);
        await signOut(auth);
      }
    } catch (err) {
      const errMsg = err.code;
      if (errMsg === "auth/user-not-found" || errMsg === "auth/invalid-credential") setError("ভুল ইমেইল বা পাসওয়ার্ড!");
      else if (errMsg === "auth/email-already-in-use") setError("এই ইমেইলটি ইতিমধ্যে ব্যবহার করা হয়েছে!");
      else setError("ব্যর্থ হয়েছে! আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!agreed) {
      setError("দয়া করে আমাদের শর্তাবলীতে সম্মত হন!");
      return;
    }
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        lastLogin: serverTimestamp()
      }, { merge: true });
      navigate(-1);
    } catch (err) {
      setError("গুগল লগইন ব্যর্থ হয়েছে!");
    }
  };

  return (
    <div className="min-h-screen font-bangla flex flex-col transition-colors duration-300">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-xl mx-auto mb-4">
              <LogIn size={32} />
            </div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-white mb-2">
              {isLogin ? 'স্বাগতম!' : 'নতুন একউন্ট'}
            


<div className="mx-4 my-3 p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 rounded-lg flex gap-3 items-start">
  
  <div className="space-y-1">
    <p className="text-purple-900 dark:text-purple-200 text-[11px] font-bold leading-tight">
      লগিন করার নিয়মাবলী:
    </p>
    <p className="text-purple-700 dark:text-purple-300 text-[10px] leading-relaxed">
      ওয়েব থেকে সরাসরি <span className="font-bold underline">গুগল লগিন</span> করতে পারবেন। অ্যাপের ক্ষেত্রে ই-মেইল এবং যে কোনো ৬ সংখ্যার পাসওয়ার্ড দিয়ে রেজিস্ট্রেশন সম্পন্ন করুন।
    </p>
  </div>
</div>
              
            </h1>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-2xl flex flex-col gap-2 text-red-600 dark:text-red-400 text-sm font-bold">
              <div className="flex items-center gap-3">
                <XCircle size={18} /> {error}
              </div>
              {/* ভেরিফিকেশন এরর হলে রিসেন্ড বাটন দেখাবে */}
              {error.includes("ভেরিফাইড নয়") && (
                <button 
                  type="button"
                  onClick={handleResendEmail} 
                  className="text-purple-600 dark:text-purple-400 underline flex items-center gap-1 mt-1 ml-7 hover:text-purple-700"
                >
                  {resending ? <RefreshCw className="animate-spin" size={14} /> : "লিঙ্ক আবার পাঠান (Resend Link)"}
                </button>
              )}
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30 rounded-2xl flex items-center gap-3 text-green-600 dark:text-green-400 text-sm font-bold">
              <CheckCircle2 size={18} /> {message}
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && (
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="text" name="name" required placeholder="আপনার পূর্ণ নাম"
                  className="w-full pl-12 h-12 pr-4 py-4 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 outline-none focus:border-purple-500 font-bold dark:text-white"
                  value={formData.name} onChange={handleChange}
                />
              </div>
            )}

            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={18} />
              </div>
              <input
                type="email" name="email" required placeholder="ইমেইল এড্রেস"
                className="w-full h-12 pl-12 pr-4 py-4 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 outline-none focus:border-purple-500 font-bold dark:text-white"
                value={formData.email} onChange={handleChange}
              />
            </div>

            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={18} />
              </div>
              <input
                type="password" name="password" required placeholder="একটি পাসওয়ার্ড দিন"
                className="w-full h-12 pl-12 pr-4 py-4 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 outline-none focus:border-purple-500 font-bold dark:text-white"
                value={formData.password} onChange={handleChange}
              />
            </div>

            {!isLogin && (
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password" name="confirmPassword" required placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                  className="w-full h-12 pl-12 pr-4 py-4 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 outline-none focus:border-purple-500 font-bold dark:text-white"
                  value={formData.confirmPassword} onChange={handleChange}
                />
              </div>
            )}

            {isLogin && (
              <div className="text-right">
                <button 
                  type="button" onClick={handleForgotPassword}
                  className="text-sm font-bold text-purple-600 hover:underline"
                >
                  পাসওয়ার্ড ভুলে গেছেন?
                </button>
              </div>
            )}

            <div className="flex items-start gap-3 px-2 py-2">
              <input 
                type="checkbox" id="terms" checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="mt-1 w-5 h-5 accent-purple-600 rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                আমি আপনাদের <Link to="/privacy" className="text-purple-600 font-bold underline">গোপনীয়তা নীতি</Link> এবং <Link to="/terms" className="text-purple-600 font-bold underline">শর্তাবলী</Link> মেনে নিচ্ছি।
              </label>
            </div>

            <button
              type="submit" disabled={loading}
              className={`w-full h-12 py-3 rounded-lg ${agreed ? 'bg-purple-600' : 'bg-gray-400'} text-white font-black text-lg shadow-lg flex items-center justify-center gap-3 active:scale-95 transition-all`}
            >
              {loading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : (isLogin ? 'লগইন' : 'রেজিস্ট্রেশন')}
            </button>
          </form>

          {/* Google Button Section... (No changes) */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
            <span className="text-gray-400 font-bold text-xs">অথবা</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full h-12 py-3 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 flex items-center justify-center gap-3 font-black text-gray-700 dark:text-gray-200"
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google দিয়ে চেষ্টা করুন
          </button>

          <p className="mt-10 text-center font-bold text-gray-500">
            {isLogin ? 'একউন্ট নেই?' : 'আগেই একউন্ট আছে?'} 
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="ml-2 text-purple-600 underline">
              {isLogin ? 'নতুন তৈরি করুন' : 'লগইন করুন'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;