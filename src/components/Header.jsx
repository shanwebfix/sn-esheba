import { Sun, Moon, Menu, ArrowLeft, Bookmark, Bell, ChevronRight, Share2, AppWindow, MessageSquareWarning, Info, Phone, Users, FileText, ShieldCheck, Code } from 'lucide-react'
import { useDarkMode } from '../context/DarkModeContext'
import { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

const Header = ({ onMenuClick }) => {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const [isLogoHover, setIsLogoHover] = useState(false)
  
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900/90 border-gray-800' 
          : 'bg-white/90 border-gray-100'
      } backdrop-blur-lg border-b shadow-sm`}>
        
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex justify-between items-center">
            
            {/* Left Section: Logo or Back Button */}
            <div className="flex items-center">
              {isHomePage ? (
                <Link 
                  to="/" 
                  className="group relative inline-block"
                  onMouseEnter={() => setIsLogoHover(true)}
                  onMouseLeave={() => setIsLogoHover(false)}
                >
                  <div className={`absolute -inset-3 rounded-xl transition-all duration-300 ${
                    isLogoHover ? (darkMode ? 'bg-gray-800/30' : 'bg-blue-50/50') : ''
                  }`}></div>
                  
                  <img 
                    src="/logo.svg" 
                    alt="Logo" 
                    className={`relative w-24 h-auto transition-all duration-300 ${
                      isLogoHover ? 'scale-105' : 'scale-100'
                    } ${darkMode ? 'brightness-125' : ''}`} 
                  />
                </Link>
              ) : (
                <button
                  onClick={() => navigate(-1)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all duration-300 group border ${
                    darkMode 
                      ? 'bg-gray-800/80 border-gray-700 text-blue-400 hover:bg-gray-700' 
                      : 'bg-blue-50 border-blue-100 text-blue-600 hover:bg-blue-100'
                  } shadow-sm active:scale-95`}
                >
                  <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                  <span className="font-bold text-xs">Back</span>
                </button>
              )}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-1.5">
              
              {/* Bookmark Icon */}
              <Link
                to="/bookmarks"
                className={`p-2 rounded-lg transition-all border ${
                  darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'
                } hover:scale-105 active:scale-90`}
              >
                <Bookmark size={18} />
              </Link>

              {/* Ball/Sports Icon */}
              <Link
                to="/sports"
                className={`p-2 rounded-lg transition-all border ${
                  darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-600'
                } hover:scale-105 active:scale-90`}
              >
                <Bell size={18} />
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all border ${
                  darkMode
                    ? 'bg-gray-800 text-yellow-300 border-gray-700'
                    : 'bg-gray-50 text-gray-700 border-gray-200'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Menu Button */}
              <button
                onClick={onMenuClick}
                className={`p-2 rounded-lg transition-all group ${
                  darkMode
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                } shadow-md active:scale-95`}
              >
                <Menu size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className={`h-0.5 bg-gradient-to-r ${
          darkMode 
            ? 'from-blue-500/30 via-purple-500/30 to-blue-500/30' 
            : 'from-blue-400/20 via-purple-400/20 to-blue-400/20'
        }`}></div>
      </header>

      {/* নোট: ক্যানভাস মেনুর জন্য এখানে স্ট্রাকচার দেওয়া হলো। 
        আপনার অ্যাপে যদি এটি আলাদা কম্পোনেন্ট হয়, তবে সেখানে এই UI টি ব্যবহার করুন।
      */}
      <div className="hidden"> {/* মেনু কন্টেন্ট লজিক */}
        <div className="p-6">
          <h2 className="text-lg font-black mb-6 flex items-center gap-2">
            <Menu size={20} className="text-blue-500" /> মেনু টাইটেল
          </h2>

          {/* প্রধান সেকশন */}
          <div className="space-y-1 mb-8">
            <MenuLink icon={<Info size={18}/>} label="আমাদের সম্পর্কে" to="/about" />
            <MenuLink icon={<Phone size={18}/>} label="যোগাযোগ করুন" to="/contact" />
            <MenuLink icon={<Users size={18}/>} label="কমিউনিটি" to="/community" />
            <MenuLink icon={<FileText size={18}/>} label="শর্তাবলী" to="/terms" />
            <MenuLink icon={<ShieldCheck size={18}/>} label="প্রাইভেসি পলিসি" to="/privacy" />
            <MenuLink icon={<Code size={18}/>} label="ডেভেলপার এর কথা" to="/developer" />
          </div>

          {/* অন্যান্য সেকশন */}
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">অন্যান্য</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl font-bold transition-all active:scale-95">
                <div className="flex items-center gap-3">
                  <Share2 size={18} /> <span>অ্যাপটি শেয়ার করুন</span>
                </div>
                <ChevronRight size={16} />
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl font-bold transition-all active:scale-95">
                <div className="flex items-center gap-3">
                  <AppWindow size={18} /> <span>আমাদের আরও অ্যাপস</span>
                </div>
                <ChevronRight size={16} />
              </button>

              <button className="w-full flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-xl font-bold transition-all active:scale-95">
                <div className="flex items-center gap-3">
                  <MessageSquareWarning size={18} /> <span>আপনার অভিযোগ পাঠান</span>
                </div>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// হেল্পার কম্পোনেন্ট (ড্রয়ার মেনু আইটেমের জন্য)
const MenuLink = ({ icon, label, to }) => (
  <Link 
    to={to} 
    className="flex items-center justify-between p-3.5 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors group"
  >
    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-bold">
      <span className="text-blue-500">{icon}</span>
      {label}
    </div>
    <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
  </Link>
)

export default Header;