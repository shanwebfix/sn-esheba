import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Info, Phone, Users, FileText, ShieldCheck, 
  Code, Share2, AppWindow, MessageSquareWarning, 
  ChevronRight, X, LayoutGrid, Heart, AlertCircle 
} from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const SidebarMenu = ({ isOpen, onClose }) => {
  const { darkMode } = useDarkMode();
  const [showError, setShowError] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'শমশেরনগর ই-সেবা অ্যাপ',
          text: 'আপনি যদি শমশেরনগর এর বাসিন্দা হয়ে থাকেন তাহলে অ্যাপটি ব্যবহার করে দেখুন!',
          url: window.location.origin,
        });
        onClose();
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <>
      {/* Custom Alert */}
      {showError && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[320px] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className={`${darkMode ? 'bg-gray-800 border-red-900/50 text-red-400' : 'bg-white border-red-100 text-red-600'} border-b-4 shadow-2xl rounded-2xl p-4 flex items-center gap-3`}>
            <div className="bg-red-500/10 p-2 rounded-xl"><AlertCircle size={20} /></div>
            <div className="flex-1">
              <p className="text-sm font-black font-bangla leading-tight">দুঃখিত!</p>
              <p className="text-[11px] font-bold opacity-80 font-bangla">আপনার ব্রাউজারে শেয়ার অপশনটি কাজ করছে না।</p>
            </div>
            <button onClick={() => setShowError(false)} className="p-1 hover:bg-black/5 rounded-lg transition-colors"><X size={16} /></button>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity" onClick={onClose} />
      )}

      {/* Canvas/Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[370px] z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-2xl`}>
        
        {/* --- Fixed Header Section --- */}
        <div className={`sticky top-0 z-10 p-6 border-b dark:border-gray-800 flex items-center justify-between backdrop-blur-md ${
          darkMode ? 'bg-gray-900/95' : 'bg-white/95'
        }`}>
          <div className="flex items-center gap-2">
            <div className="bg-blue-500/10 p-1.5 rounded-lg">
                <LayoutGrid size={18} className="text-blue-500" />
            </div>
            <h2 className="text-lg font-black tracking-tight font-bangla">মেনু </h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors border dark:border-gray-700 shadow-sm">
            <X size={18} />
          </button>
        </div>

        {/* --- Scrollable Body Container --- */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {/* Main Links */}
          <div className="p-4">
            <div className="space-y-1 font-bangla">
              <MenuLink to="/pages/menu/about" icon={<Info size={18} />} label="আমাদের সম্পর্কে" darkMode={darkMode} onClose={onClose} />
              <MenuLink to="/pages/menu/contact" icon={<Phone size={18} />} label="যোগাযোগ করুন" darkMode={darkMode} onClose={onClose} />
              <MenuLink to="/pages/menu/community" icon={<Users size={18} />} label="কমিউনিটি" darkMode={darkMode} onClose={onClose} />
              <MenuLink to="/pages/menu/terms" icon={<FileText size={18} />} label="শর্তাবলী ও নিয়ম" darkMode={darkMode} onClose={onClose} />
              <MenuLink to="/pages/menu/privacy" icon={<ShieldCheck size={18} />} label="প্রাইভেসি পলিসি" darkMode={darkMode} onClose={onClose} />
              <MenuLink to="/pages/menu/developer" icon={<Code size={18} />} label="ডেভেলপার এর কথা" darkMode={darkMode} onClose={onClose} />
            </div>
          </div>

          {/* Others Section */}
          <div className="p-4 mb-4">
            <div className={`rounded-3xl p-4 ${darkMode ? 'bg-gray-800/50' : 'bg-slate-50'} border border-slate-100 dark:border-gray-800 font-bangla`}>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 ml-2">Others</h3>
              
              <div className="space-y-3">
                <button onClick={handleShare} className="w-full flex items-center justify-between p-3.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl font-bold transition-all active:scale-95 group">
                  <div className="flex items-center gap-3"><Share2 size={18} /><span className="text-sm">অ্যাপটি শেয়ার করুন</span></div>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <Link to="/more-apps" onClick={onClose} className="w-full flex items-center justify-between p-3.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl font-bold transition-all active:scale-95 group">
                  <div className="flex items-center gap-3"><AppWindow size={18} /><span className="text-sm">আমাদের আরও অ্যাপস</span></div>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link to="/complaint" onClick={onClose} className="w-full flex items-center justify-between p-3.5 bg-red-500/10 text-red-600 dark:text-red-400 rounded-2xl font-bold transition-all active:scale-95 group">
                  <div className="flex items-center gap-3"><MessageSquareWarning size={18} /><span className="text-sm">আপনার অভিযোগ পাঠান</span></div>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

            {/* Bottom Footer Section */}
            <div className="p-8 text-center border-t dark:border-gray-800/50 mx-4">
            <p className="text-[11px] text-gray-400 font-bold tracking-tight font-bangla">
            ভার্সন ২.০.৪ • শমসেরনগর ই-সেবা কমিউনিটির একটি উদ্যোগ
            </p>
            </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: ${darkMode ? '#374151' : '#E5E7EB'}; 
          border-radius: 10px; 
        }
      `}</style>
    </>
  );
};

const MenuLink = ({ to, icon, label, darkMode, onClose }) => (
  <Link to={to} onClick={onClose} className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-blue-50'}`}>
    <div className="flex items-center gap-4">
      <span className="text-blue-500 transition-transform group-hover:scale-110 duration-300">{icon}</span>
      <span className={`font-bold text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{label}</span>
    </div>
    <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
  </Link>
);

export default SidebarMenu;