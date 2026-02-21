import React, { useState } from 'react'
import { 
  Tv, 
  Mic2, 
  Video, 
  Newspaper, 
  Radio, 
  Youtube, 
  Camera, 
  Globe2, 
  Share2, 
  Users, 
  Search,
  Zap,
  PlayCircle
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Media() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const mediaItems = [
    { 
      id: 1, 
      title: 'টিভি চ্যানেল', 
      desc: 'লাইভ নিউজ ও বিনোদন', 
      icon: <Tv />, 
      path: '/media/tv', 
      color: 'bg-red-100 text-red-600', 
      darkColor: 'dark:bg-red-900/30 dark:text-red-400' 
    },
    { 
      id: 2, 
      title: 'সাংবাদিক', 
      desc: 'স্থানীয় ও জাতীয় প্রতিনিধি', 
      icon: <Mic2 />, 
      path: '/media/journalist', 
      color: 'bg-blue-100 text-blue-600', 
      darkColor: 'dark:bg-blue-900/30 dark:text-blue-400' 
    },
    { 
      id: 3, 
      title: 'কন্টেন্ট ক্রিয়েটর', 
      desc: 'ইউটিউব ও সোশ্যাল মিডিয়া', 
      icon: <Video />, 
      path: '/media/contentcreator', 
      color: 'bg-purple-100 text-purple-600', 
      darkColor: 'dark:bg-purple-900/30 dark:text-purple-400' 
    },
    { 
      id: 4, 
      title: 'অনলাইন নিউজ', 
      desc: 'সর্বশেষ খবরের পোর্টাল', 
      icon: <Newspaper />, 
      path: '/media/news', 
      color: 'bg-emerald-100 text-emerald-600', 
      darkColor: 'dark:bg-emerald-900/30 dark:text-emerald-400' 
    },
    { 
      id: 7, 
      title: 'ফটোগ্রাফার', 
      desc: 'ইভেন্ট ও প্রেস ফটো', 
      icon: <Camera />, 
      path: '/media/photographer', 
      color: 'bg-cyan-100 text-cyan-600', 
      darkColor: 'dark:bg-cyan-900/30 dark:text-cyan-400' 
    },

  ]

  const filteredItems = mediaItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 mb-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-3">
              মিডিয়া ও <span className="text-red-600">কানেক্টিভিটি</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              আপনার এলাকার সাংবাদিক, নিউজ চ্যানেল এবং জনপ্রিয় কন্টেন্ট ক্রিয়েটরদের সাথে যুক্ত হোন।
            </p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="মিডিয়া ক্যাটাগরি খুঁজুন..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(item.path)}
              className="group bg-white dark:bg-gray-900 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800 hover:border-red-200 dark:hover:border-red-900/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`${item.color} ${item.darkColor} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-5 h-5 text-red-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        

        {/* Emergency Contact */}
        <div className="mt-12 bg-gray-100 dark:bg-gray-900 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between border-2 border-dashed border-gray-300 dark:border-gray-800">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold dark:text-white">আপনার তথ্য কি মিসিং আছে?</h3>
            <p className="text-gray-600 dark:text-gray-400">আমাদের সাথে যোগাযোগ করে আপনার তথ্য দিয়ে সম্পুর্ণ ফ্রীতে েএড করুন।</p>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-lg shadow-red-200 dark:shadow-none">
            তথ্য প্রদান করুন
          </button>
        </div>
      </div>
    </div>
  )
}

export default Media;