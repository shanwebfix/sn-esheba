import React, { useState } from 'react'
import { 
  BookOpen,
  Book,
  GraduationCap,
  User,
  Building,
  Home,
  School,
  Users,
  MapPin,
  Star,
  Clock,
  Shield,
  Zap,
  Heart
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function StudyPage() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const studyCategories = [
    { 
      id: 1, 
      title: 'স্কুল', 
      icon: <School />, 
      path: '/pages/study/school', 
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
      count: 245,
      description: 'প্রাথমিক ও মাধ্যমিক শিক্ষা'
    },
    { 
      id: 2, 
      title: 'মাদ্রাসা', 
      icon: <Book />, 
      path: '/pages/study/madrasa', 
      color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
      count: 180,
      description: 'ইসলামী শিক্ষা প্রতিষ্ঠান'
    },
    { 
      id: 3, 
      title: 'কলেজ', 
      icon: <GraduationCap />, 
      path: '/pages/study/college', 
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300',
      count: 156,
      description: 'উচ্চ মাধ্যমিক ও ডিগ্রি'
    },
    { 
      id: 4, 
      title: 'শিক্ষক', 
      icon: <User />, 
      path: '/pages/study/teacher', 
      color: 'bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300',
      count: 342,
      description: 'প্রাইভেট ও প্রতিষ্ঠানিক'
    },
    { 
      id: 5, 
      title: 'কোচিং সেন্টার', 
      icon: <Building />, 
      path: '/pages/study/coaching', 
      color: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300',
      count: 189,
      description: 'বিভিন্ন বিষয়ের কোচিং'
    },
    { 
      id: 6, 
      title: 'প্রাইভেট টিউটর', 
      icon: <Home />, 
      path: '/pages/study/tutor', 
      color: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300',
      count: 421,
      description: 'বাসায় পড়ানোর সুযোগ'
    },
    { 
      id: 7, 
      title: 'স্পোকেন ইংলিশ', 
      icon: <Users />, 
      path: '/study/spoken', 
      color: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300',
      count: 203,
      description: 'ইংলিশ কমিউনিকেশন'
    },
    { 
      id: 8, 
      title: 'কম্পিউটার শিক্ষা', 
      icon: <Zap />, 
      path: '/study/computer-lab', 
      color: 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300',
      count: 189,
      description: 'কম্পিউটার ও আইটি'
    },
  ]

  const filteredCategories = studyCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-0 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            শিক্ষা ও কোচিং ক্যাটাগরি
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            আপনার প্রয়োজন অনুযায়ী শিক্ষা প্রতিষ্ঠান, কোচিং সেন্টার এবং প্রাইভেট টিউটর খুঁজে নিন
          </p>
          
          

          
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(category.path)}
              className="cursor-pointer group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden hover:-translate-y-1"
            >
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className={`${category.color} p-3 rounded-lg`}>
                    <div className="h-6 w-6">
                      {category.icon}
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                    {category.count}+
                  </span>
                </div>
                
                <h3 className="text-gray-800 dark:text-gray-200 font-semibold text-lg mb-2">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>সর্বত্র উপলব্ধ</span>
                </div>
              </div>
              
              <div className="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    বিস্তারিত দেখুন
                  </span>
                  <div className="text-blue-500 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-16">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
            <span className="flex items-center">
              <Shield className="h-4 w-4 mr-1 text-blue-500" />
              ভেরিফাইড প্রতিষ্ঠান
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-green-500" />
              ২৪/৭ সাপোর্ট
            </span>
            <span className="flex items-center">
              <Heart className="h-4 w-4 mr-1 text-red-500" />
              শিক্ষার্থী বান্ধব
            </span>
          </div>
          <p className="font-medium">© ২০২৬ শিক্ষা প্লাটফর্ম | সকল অধিকার সংরক্ষিত</p>
        </div>
      </div>
    </div>
  )
}

export default StudyPage;