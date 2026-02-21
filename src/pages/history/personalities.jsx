import React from "react";

const gunimanushData = [
  {
    name: "জনাব ——",
    birth: "১৯০৫ খ্রি.",
    death: "১৯৮২ খ্রি.",
    qualification: "শিক্ষাবিদ ও সমাজসেবক",
    history: "শমশেরনগর এলাকায় শিক্ষা বিস্তারে অগ্রণী ভূমিকা পালন করেন।",
    bio: "তিনি আজীবন শিক্ষা ও সমাজ উন্নয়নে কাজ করে গেছেন। তাঁর উদ্যোগে বহু শিক্ষার্থী শিক্ষার সুযোগ লাভ করে।",
  },
  {
    name: "জনাব ——",
    birth: "১৯২৮ খ্রি.",
    death: "১৯৯৯ খ্রি.",
    qualification: "মুক্তিযুদ্ধের সংগঠক",
    history: "১৯৭১ সালের মহান মুক্তিযুদ্ধে স্থানীয়ভাবে সংগঠক হিসেবে গুরুত্বপূর্ণ ভূমিকা রাখেন।",
    bio: "দেশপ্রেম ও সাহসিকতার মাধ্যমে তিনি এলাকার মানুষের কাছে শ্রদ্ধার পাত্র হয়ে আছেন।",
  },
  {
    name: "জনাব ——",
    birth: "১৯১৫ খ্রি.",
    death: "১৯৮৮ খ্রি.",
    qualification: "চা শিল্প সংশ্লিষ্ট সমাজনেতা",
    history: "চা বাগানকেন্দ্রিক অর্থনৈতিক ও সামাজিক উন্নয়নে কাজ করেন।",
    bio: "শ্রমজীবী মানুষের অধিকার ও জীবনমান উন্নয়নে তাঁর অবদান স্মরণীয়।",
  },
];

const GunimanushBiography = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8">
        গুণী মানুষের সংক্ষিপ্ত জীবনী
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {gunimanushData.map((person, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md dark:shadow-black/40"
          >
            {/* Image */}
            <img
              src="/image/airport.webp"
              alt={person.name}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-4 space-y-2 text-sm">
              <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">
                {person.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                <strong>জন্ম:</strong> {person.birth}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>মৃত্যু:</strong> {person.death}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>যোগ্যতা:</strong> {person.qualification}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>ইতিহাস:</strong> {person.history}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>সংক্ষিপ্ত জীবনী:</strong> {person.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default GunimanushBiography;