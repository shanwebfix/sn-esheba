import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useDarkMode } from '../context/DarkModeContext';
import { Link } from 'react-router-dom';
import { User, MapPin, ChevronRight } from 'lucide-react';

const Profile = () => {
  const { darkMode } = useDarkMode();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Firestore থেকে সরাসরি name এবং village ডাটা ফেচ করা হচ্ছে
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          
          if (userSnap.exists()) {
            setUserData(userSnap.data());
          } else {
            // যদি Firestore-এ ডাটা না থাকে তবে Auth থেকে বেসিক ডাটা নিবে
            setUserData({
              name: user.displayName || "No Name Set",
              photoURL: user.photoURL,
              village: "Village not set" 
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ইউজার লগইন না থাকলে বা লোডিং হলে কিছুই দেখাবে না
  if (loading || !userData) return null;

  return (
    <div className="container mx-auto px-0 mt-6 mb-6  max-w-4xl">
      <div className={`flex items-center justify-between p-4 md:p-6 rounded-2xl shadow-sm border transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-white border-gray-100'
      }`}>
        
        {/* Left & Middle Section Combined */}
        <div className="flex items-center space-x-4 md:space-x-6">
          
          {/* Left: Profile Photo */}
          <div className="relative flex-shrink-0">
            {userData.photoURL ? (
              <img 
                src={userData.photoURL} 
                alt="Profile" 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-blue-500/20"
              />
            ) : (
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 border-dashed ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <User size={30} className="text-gray-400" />
              </div>
            )}
          </div>

          {/* Middle: Name & Village */}
          <div className="flex flex-col">
            <h2 className={`text-lg md:text-xl font-bold leading-tight ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {userData.name || "User Name"}
            </h2>
            <div className="flex items-center mt-1 text-blue-500">
              <MapPin size={14} className="mr-1" />
              <span className={`text-xs md:text-sm font-medium ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {userData.village || "Village Name"}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Upgrade Button */}
        <div className="flex-shrink-0 ml-4">
          <Link 
            to="/user"
            className={`flex items-center space-x-1 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all active:scale-95 ${
              darkMode 
                ? 'bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 border border-blue-500/30' 
                : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-100'
            }`}
          >
            <span className="hidden sm:inline">Upgrade Profile</span>
            <span className="sm:hidden text-[10px]">Upgrade</span>
            <ChevronRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Profile;