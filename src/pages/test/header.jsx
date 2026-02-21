import { Sun, Moon, Menu, ArrowLeft, UserCircle } from 'lucide-react'
import { useDarkMode } from '../context/DarkModeContext'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { auth, db } from '../firebase' // আপনার ফায়ারবেস কনফিগ ফাইল থেকে
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

const Header = ({ onMenuClick }) => {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const [isLogoHover, setIsLogoHover] = useState(false)
  const [userProfile, setUserProfile] = useState(null)
  
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  // ইউজার লগইন এবং প্রোফাইল ফটো চেক
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserProfile(userSnap.data());
        } else {
          // যদি ফায়ারস্টোরে ডাটা না থাকে, শুধু auth ফটো নিবে
          setUserProfile({ photoURL: user.photoURL });
        }
      } else {
        setUserProfile(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-900/90 border-gray-800' 
        : 'bg-white/90 border-gray-100'
    } backdrop-blur-lg border-b shadow-sm`}>
      
      <div className="container mx-auto px-4 py-3">
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
                  className={`relative w-28 h-auto transition-all duration-300 ${
                    isLogoHover ? 'scale-105' : 'scale-100'
                  } ${darkMode ? 'brightness-125' : ''}`} 
                />
              </Link>
            ) : (
              <button
                onClick={() => navigate(-1)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300 group border ${
                  darkMode 
                    ? 'bg-gray-800/80 border-gray-700 text-blue-400 hover:bg-gray-700 hover:border-gray-600' 
                    : 'bg-blue-50 border-blue-100 text-blue-600 hover:bg-blue-100 hover:border-blue-200'
                } shadow-sm active:scale-95`}
              >
                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                <span className="font-semibold text-sm">Back</span>
              </button>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            
            {/* User Profile Photo (Login takle dekabe) */}
            {userProfile && (
              <button
                onClick={() => navigate('/user')}
                className="p-0.5 rounded-full border-2 border-blue-500/50 hover:border-blue-500 transition-all active:scale-90"
              >
                {userProfile.photoURL ? (
                  <img 
                    src={userProfile.photoURL} 
                    alt="Profile" 
                    className="w-9 h-9 rounded-full object-cover"
                  />
                ) : (
                  <UserCircle size={32} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                )}
              </button>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-yellow-300 border-gray-700 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              } border`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} className="animate-pulse-once" /> : <Moon size={20} />}
            </button>

            {/* Menu Button (Only Icon) */}
            <button
              onClick={onMenuClick}
              className={`p-2.5 rounded-xl transition-all duration-300 group ${
                darkMode
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
              } shadow-md active:scale-95`}
            >
              <Menu size={24} className="group-hover:rotate-12 transition-transform duration-300" />
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

      <style jsx>{`
        @keyframes pulse-once {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-once {
          animation: pulse-once 0.5s ease-in-out;
        }
      `}</style>
    </header>
  )
}

export default Header;