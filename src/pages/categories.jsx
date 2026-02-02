import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as LucideIcons from 'lucide-react'

export default function MainCategories() {
  const navigate = useNavigate()

  const mainCategories = [
    { id: 1, title: 'ইসলামিক', icon: 'Mosque', path: '/src/cat/islamic' },
    { id: 2, title: 'লাইব্রেরি', icon: 'Book', path: '/library' },
    { id: 3, title: 'ডাক্তার', icon: 'Stethoscope', path: '/doctor' },
    { id: 4, title: 'ফার্মেসি', icon: 'Pill', path: '/pharmacy' },
    { id: 5, title: 'হাসপাতাল', icon: 'Building', path: '/hospital' },
    { id: 6, title: 'ট্যুরিস্ট গাইড', icon: 'MapPin', path: '/tourist' },
    { id: 7, title: 'ফায়ার সার্ভিস', icon: 'Flame', path: '/fire-service' },
    { id: 8, title: 'এম্বুলেন্স', icon: 'Activity', path: '/ambulance' },
    { id: 9, title: 'পুলিশ', icon: 'Shield', path: '/police' },
    { id: 10, title: 'স্টাডি মেটেরিয়াল', icon: 'GraduationCap', path: '/study' },
    { id: 11, title: 'বাস সার্ভিস', icon: 'Bus', path: '/bus' },
    { id: 12, title: 'ট্রেন সার্ভিস', icon: 'Train', path: '/train' },
    { id: 13, title: 'গাড়ি সার্ভিস', icon: 'Car', path: '/car' },
    { id: 14, title: 'সিএনজি সার্ভিস', icon: 'Fuel', path: '/cng' },
    { id: 15, title: 'নার্সারি', icon: 'Sprout', path: '/nursery' },
    { id: 16, title: 'দোকান', icon: 'Store', path: '/shop' },
    { id: 17, title: 'ইলেকট্রিশিয়ান', icon: 'Zap', path: '/electric' },
    { id: 18, title: 'রেস্তোরাঁ', icon: 'Utensils', path: '/restaurant' },
    { id: 19, title: 'দোকান', icon: 'Building2', path: '/dukan' },
    { id: 20, title: 'ব্যাংক', icon: 'Landmark', path: '/bank' },
    { id: 21, title: 'ওয়াইফাই সার্ভিস', icon: 'Wifi', path: '/wifi' },
    { id: 22, title: 'এজেন্সি', icon: 'Briefcase', path: '/agency' },
    { id: 23, title: 'সাংবাদিক', icon: 'Mic', path: '/journalist' },
    { id: 24, title: 'প্রবাসী', icon: 'Plane', path: '/probashi' },
    { id: 25, title: 'শিক্ষক', icon: 'UserGraduate', path: '/teacher' },
    { id: 26, title: 'কোচিং সেন্টার', icon: 'BookOpen', path: '/coaching' },
    { id: 27, title: 'শ্রমিক', icon: 'HardHat', path: '/workers' },
    { id: 28, title: 'কন্টেন্ট ক্রিয়েটর', icon: 'Video', path: '/contentcreator' },
    { id: 29, title: 'উদ্যোক্তা', icon: 'Award', path: '/uddokta' },
    { id: 30, title: 'খেলাধুলা', icon: 'Trophy', path: '/sports' },
    { id: 31, title: 'পত্রিকা/ম্যাগাজিন', icon: 'Newspaper', path: '/curiya' },
    { id: 32, title: 'বিনোদন', icon: 'Tv', path: '/entertainment' },
    { id: 33, title: 'পর্যটন', icon: 'Compass', path: '/tourism' },
    { id: 34, title: 'রিয়েল এস্টেট', icon: 'Home', path: '/real-estate' },
    { id: 35, title: 'লিগ্যাল সার্ভিস', icon: 'Scale', path: '/legal' },
    { id: 36, title: 'আইটি সার্ভিস', icon: 'Cpu', path: '/it-service' },
    { id: 37, title: 'বীমা', icon: 'ShieldCheck', path: '/insurance' },
    { id: 38, title: 'ট্যাক্স সার্ভিস', icon: 'FileText', path: '/tax-service' },
    { id: 39, title: 'পরিবহন', icon: 'Truck', path: '/transport' },
    { id: 40, title: 'শিল্প', icon: 'Factory', path: '/industry' },
  ]

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        সকল ক্যাটাগরি
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {mainCategories.map((cat) => {
          const IconComponent = LucideIcons[cat.icon]
          
          return (
            <div
              key={cat.id}
              onClick={() => navigate(cat.path)}
              className="cursor-pointer flex flex-col items-center justify-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-blue-500 dark:text-blue-400 mb-1 sm:mb-2">
                {IconComponent ? (
                  React.createElement(IconComponent, { 
                    size: 20, 
                    className: "sm:size-6 md:size-7" 
                  })
                ) : (
                  <span className="text-xl">📁</span>
                )}
              </div>
              <h2 className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm md:text-base font-semibold text-center">
                {cat.title}
              </h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}