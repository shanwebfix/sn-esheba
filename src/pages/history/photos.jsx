import React from "react";

const photos = [
  {
    src: "/image/airport.webp",
    title: "পুরোনো শমশেরনগর গ্রাম",
    year: "১৯৪০–১৯৫০",
  },
  {
    src: "/image/airport.webp",
    title: "চা বাগানের শ্রমিক জীবন",
    year: "ব্রিটিশ আমল",
  },
  {
    src: "/image/airport.webp",
    title: "শমশেরনগর বিমানঘাঁটি",
    year: "দ্বিতীয় বিশ্বযুদ্ধ",
  },
];

const ArchiveGallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8">
        📸 ঐতিহাসিক ছবি আর্কাইভ
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md dark:shadow-black/40"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Caption */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                {photo.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {photo.year}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ArchiveGallery;