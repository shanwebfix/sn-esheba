import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function CompactSearchComponent() {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchInputRef = useRef(null);

  const items = [
    'ইসলামিক',
    'শিক্ষা',
    'স্বাস্থ্য',
    'কৃষি',
    'আইটি সার্ভিস',
    'গাড়ি ও পরিবহন',
    'নার্সারি',
    'রেস্তোরাঁ',
    'দোকান / মার্কেট',
    'ব্যাংক',
    'এজেন্সি',
    'মিডিয়া',
    'প্রবাসী',
    'শ্রমিক',
    'উদ্যোক্তা',
    'খেলাধুলা',
    'বিনোদন',
    'পর্যটন',
    'গ্রাম / এলাকা',
    'ইতিহাস',
    'উনিয়ন',
    'ফাইন্যান্স সার্ভিস',
  ];

  const popularItems = ['ইসলামিক', 'শিক্ষা', 'স্বাস্থ্য', 'কৃষি', 'আইটি সার্ভিস', 'ব্যাংক'];

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredItems([]);
      return;
    }

    const filtered = items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [query]);

  const handleSearch = (value) => {
    if (value.trim() !== '') {
      setQuery(value);
      setShowResults(true);
      searchInputRef.current?.blur();
    }
  };

  const clearSearch = () => {
    setQuery('');
    setShowResults(false);
    searchInputRef.current?.focus();
  };

  return (
    <div className="w-full px-2 py-3">
      {/* Search Bar - Always Compact */}
      <div className="relative mb-3">
        <div className="relative flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="খুঁজুন..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowResults(true)}
            className="w-full pl-9 pr-8 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-2 p-1"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>
      </div>

      {/* Quick Tags - Minimal Space */}
      <div className="mb-3">
        <div className="flex overflow-x-auto pb-1 -mx-2 px-2 scrollbar-hide">
          {popularItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSearch(item)}
              className="flex-shrink-0 mr-2 px-3 py-1.5 text-xs bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-300 rounded-full border border-blue-100 dark:border-gray-700"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Search Results - Compact List */}
      {showResults && filteredItems.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-[60vh] overflow-y-auto">
          <div className="sticky top-0 px-3 py-2 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400 flex items-center">
            <Filter className="h-3 w-3 mr-1.5" />
            {filteredItems.length} টি ফলাফল
          </div>
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {filteredItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSearch(item)}
                className="w-full text-left px-3 py-2.5 hover:bg-blue-50 dark:hover:bg-gray-700 text-sm flex items-center justify-between"
              >
                <span className="truncate">{item}</span>
                <span className="text-xs text-gray-400 ml-2 flex-shrink-0">
                  {item.length} অ
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {showResults && query && filteredItems.length === 0 && (
        <div className="text-center py-4">
          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            "{query}" এর জন্য ফলাফল নেই
          </p>
          <p className="text-xs text-gray-500">অন্য কিওয়ার্ড চেষ্টা করুন</p>
        </div>
      )}

      {/* Info Footer - Minimal */}
      {!showResults && (
        <div className="text-center pt-3">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {items.length} টি ক্যাটাগরি উপলব্ধ
          </p>
        </div>
      )}
    </div>
  );
}