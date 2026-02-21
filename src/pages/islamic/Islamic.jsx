import React from 'react'
import { 
  Book, 
  Heart, 
  Scale, 
  GraduationCap, 
  DollarSign, 
  Plane, 
  Shield, 
  Calendar, 
  Globe,
  BookOpen, 
  LayoutGrid 
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Islamic() {
  const navigate = useNavigate()

  const islamicItems = [
    { id: 1, title: 'মসজিদ', icon: <BookOpen />, path: '/pages/islamic/masjid', color: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300' },
    { id: 2, title: 'মাদরাসা', icon: <Book />, path: '/pages/islamic/madrasa', color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' },
    { id: 3, title: 'ইমাম', icon: <Book />, path: '/pages/islamic/imam', color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300' },
    { id: 4, title: 'মুয়াজ্জিন', icon: <Calendar />, path: '/pages/islamic/muajjin', color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300' },
    { id: 5, title: 'হিজরী ক্যালেন্ডার', icon: <DollarSign />, path: '/pages/islamic/hijricalnder', color: 'bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300' },
    { id: 6, title: 'জাকাত কেলকুলেটর', icon: <Plane />, path: '/pages/islamic/jakatcalculator', color: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300' },
    { id: 7, title: 'ইসলামিক স্বাস্থ্য', icon: <Heart />, path: '/pages/islamic/islamichealth', color: 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300' },
    { id: 8, title: 'রোকিয়া সেন্টার', icon: <Scale />, path: '/islamic/law', color: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300' },
    { id: 9, title: 'ঈদগা', icon: <GraduationCap />, path: '/pages/islamic/edga', color: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300' },
    { id: 10, title: 'কবরস্থান', icon: <Shield />, path: '/pages/islamic/koborsthan', color: 'bg-lime-100 dark:bg-lime-900 text-lime-600 dark:text-lime-300' },
   
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-0">
        <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">ইসলামিক ক্যাটাগরি</h1>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            আপনার প্রয়োজন অনুযায়ী ইসলামিক প্রতিষ্ঠান, মসজিদ, মাদরাসা, ইমাম, মুয়াজ্জিন, ঈদগা, কবরস্থান খুঁজে নিন
          </p>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {islamicItems.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(item.path)}
              className="cursor-pointer p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all text-center border border-gray-200 dark:border-gray-700"
            >
              <div className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                {item.icon}
              </div>
              <h3 className="text-gray-800 dark:text-gray-200 text-sm font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Islamic;