import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MapPin } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeroSlider() {
  const slides = [
        { 
      id: 1, 
      image: '/image/airport.webp', 
      title: 'শমশেরনগর এয়ারপোর্ট', 
      location: 'কুলাউড়া রোড, শমশেরনগর' 
    },
    { 
      id: 2, 
      image: '/image/sn-hospital.webp', 
      title: 'শমশেরনগর হাসপাতাল', 
      location: 'মৌলভীবাজার রোড, শমশেরনগর' 
    },
    { 
      id: 3, 
      image: '/image/station.webp', 
      title: 'শমশেরনগর রেলওয়ে স্টেশন', 
      location: 'শমশেরনগর' 
    },
        { 
      id: 4, 
      image: '/image/camelia.webp', 
      title: 'ক্যামেলিয়া লেক', 
      location: 'চাতলাপুর রোড, শমশেরনগর' 
    },
      { 
      id: 5, 
      image: '/image/golf.webp', 
      title: 'গল্ফ মাঠ - চা বাগান', 
      location: 'চাতলাপুর রোড, শমশেরনগর' 
    },
     { 
      id: 6, 
      image: '/image/swiss-valley.webp', 
      title: 'সুইস ভ্যালী রিসোর্ট', 
      location: 'এয়ারপোর্ট রোড, শমসেরনগর' 
    },
  ];

  return (
    <div className="w-full mb-10 px-2 sm:px-0">
      <div className="relative group">
        <Swiper
          spaceBetween={15}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: '.custom-pagination', // Niche custom div-e pagination deyar jonno
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-2xl shadow-xl overflow-hidden h-[220px] sm:h-[350px] md:h-[450px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Compact Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 px-3 py-2 sm:px-4 sm:py-3 rounded-lg inline-block max-w-[85%] shadow-2xl">
                    <h3 className="text-white text-sm sm:text-lg md:text-xl font-bold font-bangla leading-tight drop-shadow-md">
                      {slide.title}
                    </h3>
                    <div className="flex items-center text-gray-200 text-[10px] sm:text-xs md:text-sm font-bangla mt-0.5 opacity-90">
                      <MapPin size={12} className="text-orange-500 mr-1" />
                      <span>{slide.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Container (Image-er niche) */}
<div className="flex justify-center mt-4">
  <div className="custom-pagination flex items-center justify-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow-inner min-w-[60px] h-[30px]">
    {/* Swiper bullets eikhane asbe */}
  </div>
</div>

<style jsx global>{`
  .custom-pagination {
    position: relative !important;
    bottom: 0 !important;
    left: 0 !important;
    transform: none !important;
    width: auto !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .swiper-pagination-bullet {
    background: #cbd5e1 !important;
    opacity: 1;
    margin: 0 5px !important; /* Bullet gulor majhe gap */
  }

  .swiper-pagination-bullet-active {
    background: #f97316 !important;
    width: 20px !important;
    border-radius: 10px !important;
    transition: all 0.3s ease;
  }
`}</style>
    </div>
  );
}