import React from "react";

const historicalPlaces = [
  {
    title: "শমশেরনগর বিমানবন্দর",
    desc: "দ্বিতীয় বিশ্বযুদ্ধের সময় নির্মিত ঐতিহাসিক বিমানঘাঁটি",
    period: "ব্রিটিশ আমল",
  },
  {
    title: "পুরোনো চা বাগান স্থাপনা",
    desc: "চা শিল্পের সূচনাকালীন প্রশাসনিক ও আবাসিক কাঠামো",
    period: "উনিশ শতক",
  },
  {
    title: "ঐতিহ্যবাহী বাজার এলাকা",
    desc: "ব্রিটিশ আমলে গড়ে ওঠা স্থানীয় বাণিজ্য কেন্দ্র",
    period: "ঔপনিবেশিক সময়",
  },
];

const HistoricalPlacesGallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8">
        🏛️ ঐতিহাসিক স্থাপনা
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {historicalPlaces.map((place, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md dark:shadow-black/40"
          >
            {/* Image */}
            <img
              src="/image/airport.webp"
              alt={place.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-4 space-y-1">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                {place.title}
              </h3>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {place.period}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-300 pt-2">
                {place.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default HistoricalPlacesGallery;