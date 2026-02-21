import React, { useState } from 'react'
import { MapPin, Info, Search, X, Map as MapIcon, Navigation, Bus, Train, Plane } from 'lucide-react'

function Tourism() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlace, setSelectedPlace] = useState(null)

  const tourismList = [

        {
  id: 1,
  title: 'বিমান ঘাঁটি',
  location: 'কুলাউরা রোড, শমশেরনগর',
  info: 'শমশেরনগরে অবস্থিত একটি পুরনো ও গুরুত্বপূর্ণ বিমান ঘাঁটি।',
  details: 'শমশেরনগর বিমান ঘাঁটি মৌলভীবাজার জেলার শমশেরনগর এলাকায় অবস্থিত একটি ঐতিহাসিক বিমান অবকাঠামো। ব্রিটিশ শাসনামলে এটি নির্মিত হয় এবং দ্বিতীয় বিশ্বযুদ্ধের সময় সামরিক উদ্দেশ্যে ব্যবহৃত হয়েছিল। বর্তমানে এটি একটি পরিচিত স্থাপনা হিসেবে এলাকায় বিদ্যমান, যদিও নিয়মিত বাণিজ্যিক ফ্লাইট পরিচালিত হয় না। ইতিহাস ও অবকাঠামোগত গুরুত্বের কারণে এটি স্থানীয়ভাবে পরিচিত একটি স্থান।',
  direction: 'মৌলভীবাজার জেলা শহর থেকে শমশেরনগর রোড হয়ে বাস, সিএনজি বা ব্যক্তিগত গাড়িতে শমশেরনগর পৌঁছে বিমান ঘাঁটির এলাকায় যাওয়া যায়। শমশেরনগর বাজার ও আশপাশের এলাকা থেকে এটি সহজেই পৌঁছানো সম্ভব।',
  mainImg: '/image/airport.webp',
  popupImgs: {
    left: '/image/airport.webp',
    right: '/image/airport-2.webp'
  },
  mapUrl: 'https://www.google.com/maps/search/Shamshernagar+Airport'
},
{
  id: 2,
  title: 'গল্ফ মাঠ - চা বাগান',
  location: 'চাতলাপুর রোড, শমশেরনগর',
  info: 'শমশেরনগরের ঐতিহাসিক গলফ মাঠটি সবুজ চা বাগানঘেরা একটি মনোরম খোলা প্রান্তর।',
  details: 'শমশেরনগর গলফ মাঠ মৌলভীবাজার জেলার শমশেরনগর এলাকায় অবস্থিত একটি ঐতিহাসিক মাঠ। ব্রিটিশ শাসনামলে চা বাগানকেন্দ্রিক প্রশাসনিক ও বিনোদনমূলক কর্মকাণ্ডের অংশ হিসেবে এই মাঠটি গড়ে ওঠে। চারপাশে বিস্তৃত চা বাগান ও সবুজ পরিবেশ থাকায় এটি স্থানীয়দের কাছে একটি পরিচিত দর্শনীয় স্থান। বর্তমানে মাঠটি ঐতিহাসিক গুরুত্বের পাশাপাশি ভ্রমণ ও খোলা পরিবেশ উপভোগের জন্য ব্যবহৃত হয়ে থাকে।',
  direction: 'মৌলভীবাজার জেলা শহর থেকে শমশেরনগর সড়ক পথে বাস, সিএনজি বা মাইক্রোবাসে সহজেই শমশেরনগর পৌঁছানো যায়। শমশেরনগর বাজার থেকে অল্প দূরত্বে মাঠটির অবস্থান।',
  // হাই-কোয়ালিটি সোর্স ইমেজ
  mainImg: '/image/golf.webp',
  popupImgs: {
    left: '/image/golf.webp',
    right: '/image/golf-2.webp'
  },
  mapUrl: 'https://www.google.com/maps/search/Shamshernagar+Golf+Ground'
},
{
  id: 3,
  title: 'সুইস ভ্যালী রিসোর্ট',
  location: 'এয়ারপোর্ট রোড, শমসেরনগর',
  info: 'শমশেরনগর এলাকায় অবস্থিত একটি সাধারণ ও শান্ত পরিবেশের রিসোর্ট।',
  details: 'সুইস ভ্যালী রিসোর্ট মৌলভীবাজার জেলার শমশেরনগর এলাকায় এয়ারপোর্ট রোডে অবস্থিত একটি আবাসনভিত্তিক রিসোর্ট। এটি মূলত রাতযাপন, পারিবারিক অবস্থান এবং স্বল্প সময়ের বিশ্রামের জন্য ব্যবহৃত হয়। রিসোর্টটি কোনো পাহাড়ের চূড়ায় বা চা বাগানঘেরা এলাকায় অবস্থিত নয় এবং এখান থেকে সূর্যাস্ত দেখার মতো উঁচু দৃশ্যও নেই। শান্ত পরিবেশে থাকার জন্য স্থানীয় ও ভ্রমণকারীদের একটি সীমিত পরিসরের সুবিধা প্রদান করে।',
  direction: 'মৌলভীবাজার জেলা শহর থেকে শমশেরনগর রোড হয়ে বাস, সিএনজি বা ব্যক্তিগত গাড়িতে এয়ারপোর্ট রোডে এসে সহজেই সুইস ভ্যালী রিসোর্টে পৌঁছানো যায়। শমশেরনগর বিমানবন্দরের কাছাকাছি অবস্থান হওয়ায় যাতায়াত সহজ।',
  mainImg: '/image/swiss-valley.webp',
  popupImgs: {
    left: '/image/swiss-valley.webp',
    right: '/image/swiss-valley-2.webp'
  },
  mapUrl: 'https://www.google.com/maps/search/Swiss+Valley+Resort+Shamshernagar'
},
{
  id: 4,
  title: 'ক্যামেলিয়া লেক',
  location: 'চাতলাপুর রোড, শমশেরনগর',
  info: 'শান্ত পরিবেশে অবস্থিত একটি ছোট ও পরিচ্ছন্ন জলাশয়।',
  details: 'ক্যামেলিয়া লেক মৌলভীবাজার জেলার শমশেরনগর এলাকায় চাতলাপুর রোডের পাশে অবস্থিত একটি স্থানীয়ভাবে পরিচিত জলাশয়। এটি কোনো প্রাকৃতিক পাহাড়ি লেক নয়, বরং আশপাশের এলাকার জলধারণ ও সৌন্দর্য বৃদ্ধির উদ্দেশ্যে গড়ে ওঠা একটি লেক। বিকেল বেলায় আশপাশের মানুষজন এখানে কিছু সময় কাটাতে আসে। নিরিবিলি পরিবেশ ও খোলা জায়গার জন্য এটি স্থানীয়দের কাছে একটি স্বস্তির স্থান হিসেবে পরিচিত।',
  direction: 'মৌলভীবাজার জেলা শহর থেকে শমশেরনগর সড়ক পথে বাস, সিএনজি বা ব্যক্তিগত গাড়িতে চাতলাপুর রোড হয়ে সহজেই ক্যামেলিয়া লেকে পৌঁছানো যায়। শমশেরনগর বাজার থেকে এর দূরত্ব কম।',
  mainImg: '/image/camelia.webp',
  popupImgs: {
    left: '/image/camelia.webp',
    right: '/image/camelia-2.webp'
  },
  mapUrl: '/image/camelia-2.webp'
}
  ]

  const filteredItems = tourismList.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screentransition-colors ">
      
      {/* Header Area */}
      <div className="bg-emerald-600 py-10 px-4 text-center rounded-lg m-3">
        <h2 className="text-3xl font-black text-white mb-6">ভ্রমন ও পর্যটন</h2>
        <div className="relative max-w-lg mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="পর্যটন কেন্দ্র খুঁজুন..."
            className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-900 dark:text-white outline-none shadow-xl border-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Grid Area */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-sm hover:shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all flex flex-col group">
              <div className="relative h-56 w-full overflow-hidden">
                <img src={item.mainImg} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-[10px] font-bold dark:text-white uppercase tracking-wider">
                   Tourist Spot
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                <div className="flex items-center gap-1 text-emerald-600 text-sm font-semibold mb-6">
                  <MapPin size={14} /> {item.location}
                </div>
                <button 
                  onClick={() => setSelectedPlace(item)}
                  className="w-full bg-gray-900 dark:bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold transition-all"
                >
                  বিস্তারিত ও পথনির্দেশিকা
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {selectedPlace && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-[2.5rem] overflow-hidden relative shadow-2xl animate-in fade-in zoom-in duration-300">
            
            <button onClick={() => setSelectedPlace(null)} className="absolute top-4 right-4 z-[110] bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-colors">
              <X size={20} />
            </button>

            <div className="max-h-[90vh] overflow-y-auto">
              <div className="flex h-60 gap-1 bg-gray-100 dark:bg-gray-800">
                <img src={selectedPlace.popupImgs.left} alt="view1" className="w-1/2 h-full object-cover" />
                <img src={selectedPlace.popupImgs.right} alt="view2" className="w-1/2 h-full object-cover" />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-black text-gray-800 dark:text-white mb-2">{selectedPlace.title}</h2>
                <p className="flex items-center gap-1 text-emerald-600 font-bold text-sm mb-6">
                  <MapPin size={16} /> {selectedPlace.location}
                </p>
                
                {/* Description */}
                <div className="mb-8">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase mb-3">
                    <Info size={16} /> বিস্তারিত তথ্য
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    {selectedPlace.details}
                  </p>
                </div>

                {/* Direction Section - NEW */}
                <div className="mb-8 p-5 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400 uppercase mb-3">
                    <Navigation size={16} /> কীভাবে যাবেন?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {selectedPlace.direction}
                  </p>
                  <div className="flex gap-4 mt-4 text-emerald-600 dark:text-emerald-400">
                     <Bus size={18} /> <Train size={18} /> <Plane size={18} />
                  </div>
                </div>

                {/* Map Button */}
                <a 
                  href={selectedPlace.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/20"
                >
                  <MapIcon size={20} /> গুগল ম্যাপে সরাসরি দেখুন
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Tourism;