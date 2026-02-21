import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BloodDonorPage = () => {
  // রক্তদাতাদের প্রাথমিক তথ্য
  const initialDonors = [
    {
      id: 1,
      name: "শাহান আহমেদ সোহান",
      profilePic: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bloodGroup: "A+",
      phone: "+8801627818285",
      whatsapp: "+8801627818285",
      messenger: "shahan.bd",
      address: "শিংরাউলী, শমসেরনগর",
      lastDonation: "2024-10-15",
      availability: "সহজলভ্য",
      age: 28,
      occupation: "ডেভলোপার",
      donationCount: 2
    },
    {
      id: 2,
      name: "মারিয়াম খান",
      profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bloodGroup: "O+",
      phone: "+8801812345679",
      whatsapp: "+8801812345679",
      messenger: "mariam.khan",
      address: "বনানী, ঢাকা",
      lastDonation: "2024-02-20",
      availability: "সহজলভ্য",
      age: 28,
      occupation: "শিক্ষিকা",
      donationCount: 8
    },
    {
      id: 3,
      name: "রহিম ইসলাম",
      profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bloodGroup: "B+",
      phone: "+8801912345680",
      whatsapp: "+8801912345680",
      messenger: "rahim.islam",
      address: "ধানমন্ডি, ঢাকা",
      lastDonation: "2024-01-15",
      availability: "অসহজলভ্য",
      age: 35,
      occupation: "ইঞ্জিনিয়ার",
      donationCount: 15
    },
    {
      id: 4,
      name: "সাদিয়া রহমান",
      profilePic: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bloodGroup: "AB+",
      phone: "+8801512345681",
      whatsapp: "+8801512345681",
      messenger: "sadia.rahman",
      address: "মিরপুর, ঢাকা",
      lastDonation: "2024-03-05",
      availability: "সহজলভ্য",
      age: 26,
      occupation: "ছাত্রী",
      donationCount: 5
    },
    {
      id: 5,
      name: "কামাল হোসেন",
      profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bloodGroup: "O-",
      phone: "+8801612345682",
      whatsapp: "+8801612345682",
      messenger: "kamal.hossain",
      address: "উত্তরা, ঢাকা",
      lastDonation: "2024-02-28",
      availability: "সহজলভ্য",
      age: 40,
      occupation: "ব্যবসায়ী",
      donationCount: 20
    },
    {
      id: 6,
      name: "তাসনিম আক্তার",
      profilePic: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bloodGroup: "A-",
      phone: "+8801312345683",
      whatsapp: "+8801312345683",
      messenger: "tasnim.akter",
      address: "মোহাম্মদপুর, ঢাকা",
      lastDonation: "2024-03-10",
      availability: "সহজলভ্য",
      age: 29,
      occupation: "নার্স",
      donationCount: 10
    },
    {
      id: 7,
      name: "আরিফ চৌধুরী",
      profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bloodGroup: "B-",
      phone: "+8801412345684",
      whatsapp: "+8801412345684",
      messenger: "arif.chowdhury",
      address: "বারিধারা, ঢাকা",
      lastDonation: "2023-12-18",
      availability: "অসহজলভ্য",
      age: 37,
      occupation: "ব্যাংকার",
      donationCount: 14
    },
    {
      id: 8,
      name: "নুসরাত জাহান",
      profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bloodGroup: "AB-",
      phone: "+8801212345685",
      whatsapp: "+8801212345685",
      messenger: "nusrat.jahan",
      address: "বসুন্ধরা, ঢাকা",
      lastDonation: "2024-02-15",
      availability: "সহজলভ্য",
      age: 31,
      occupation: "সাংবাদিক",
      donationCount: 7
    },
    {
      id: 9,
      name: "শফিকুল ইসলাম",
      profilePic: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bloodGroup: "O+",
      phone: "+8801712345686",
      whatsapp: "+8801712345686",
      messenger: "shafiqul.islam",
      address: "খিলগাঁও, ঢাকা",
      lastDonation: "2024-03-01",
      availability: "সহজলভ্য",
      age: 42,
      occupation: "সরকারি কর্মকর্তা",
      donationCount: 18
    },
    {
      id: 10,
      name: "জান্নাতুল ফেরদৌস",
      profilePic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bloodGroup: "A+",
      phone: "+8801812345687",
      whatsapp: "+8801812345687",
      messenger: "jannatul.ferdous",
      address: "লালমাটিয়া, ঢাকা",
      lastDonation: "2024-01-25",
      availability: "সহজলভ্য",
      age: 24,
      occupation: "সফটওয়্যার ডেভেলপার",
      donationCount: 6
    }
  ];

  const [donors, setDonors] = useState(initialDonors);
  const [searchTerm, setSearchTerm] = useState('');
  const [bloodFilter, setBloodFilter] = useState('সকল');
  const [availabilityFilter, setAvailabilityFilter] = useState('সকল');
  const [showFilters, setShowFilters] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  // রক্তদানের দিন গণনা ফাংশন
  const getDaysSinceLastDonation = (lastDonationDate) => {
    const lastDate = new Date(lastDonationDate);
    const today = currentDate;
    const diffTime = Math.abs(today - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // রক্তদাতাদের সর্বশেষ তারিখ আপডেট করার জন্য (প্রতি মিনিটে আপডেট)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // প্রতি মিনিটে আপডেট

    return () => clearInterval(interval);
  }, []);

  // ফিল্টার করা রক্তদাতাদের তালিকা
  const filteredDonors = donors.filter(donor => {
    const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donor.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donor.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesBlood = bloodFilter === 'সকল' || donor.bloodGroup === bloodFilter;
    const matchesAvailability = availabilityFilter === 'সকল' || donor.availability === availabilityFilter;
    
    return matchesSearch && matchesBlood && matchesAvailability;
  });

  // যোগাযোগের অপশন
  const handleContact = (platform, value) => {
    let url = '';
    
    switch(platform) {
      case 'whatsapp':
        const englishNumber = value.replace(/[^0-9+]/g, '');
        url = `https://wa.me/${englishNumber}`;
        break;
      case 'phone':
        const phoneNumber = value.replace(/[^0-9+]/g, '');
        url = `tel:${phoneNumber}`;
        break;
      case 'messenger':
        url = `https://m.me/${value}`;
        break;
      default:
        return;
    }
    
    window.open(url, '_blank');
  };

  // রক্তের গ্রুপ ফিল্টার অপশন
  const bloodGroups = ['সকল', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  // ইংরেজি সংখ্যা থেকে বাংলা সংখ্যায় কনভার্ট
  const toBanglaNumber = (num) => {
    if (typeof num !== 'number') return num;
    const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(digit => banglaNumbers[digit] || digit).join('');
  };

  // তারিখ বাংলায় কনভার্ট
  const formatDateBangla = (dateString) => {
    const date = new Date(dateString);
    const day = toBanglaNumber(date.getDate());
    const month = toBanglaNumber(date.getMonth() + 1);
    const year = toBanglaNumber(date.getFullYear());
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="min-h-screen  dark:text-white transition-colors duration-300 mb-10">
      {/* হেডার - NOT sticky */}
      <header className="m-2 pt-6 pb-4 px-2 bg-white shadow-sm dark:bg-gray-800 rounded-lg">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-center mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-400 mb-1">
                রক্তদাতা ডিরেক্টরি
              </h1>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                আপনার কাছাকাছি রক্তদাতাদের খুঁজুন
              </p>
            </div>
            
            <Link 
              to="/pages/emergency/bloodadd"
              className="w-full max-w-md bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all dark:bg-red-600 dark:hover:bg-red-700 mb-4 text-center"
            >
              🩸 রক্তদাতা হোন
            </Link>
          </div>
        </div>
      </header>

      {/* প্রধান কন্টেন্ট */}
      <main className="container mx-auto px-3 md:px-4 py-4 md:py-8">
        {/* সার্চ এবং ফিল্টার সেকশন */}
        <div className="mb-6 md:mb-10 p-4 md:p-6 rounded-xl shadow-sm bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-red-600 dark:text-red-400">
              রক্তদাতা খুঁজুন
            </h2>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {showFilters ? 'ফিল্টার বন্ধ' : 'ফিল্টার'}
            </button>
          </div>
          
          {/* সার্চ ইনপুট */}
          <div className="mb-4">
            <label className="block font-medium mb-2 text-gray-700 dark:text-gray-300">
              🔍 নাম, রক্তের গ্রুপ বা এলাকা
            </label>
            <input
              type="text"
              placeholder="খুঁজুন..."
              className="w-full p-3 rounded-lg transition-all bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-red-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* ফিল্টার সেকশন */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              {/* রক্তের গ্রুপ ফিল্টার */}
              <div>
                <label className="block font-medium mb-2 text-gray-700 dark:text-gray-300">
                  🩸 রক্তের গ্রুপ
                </label>
                <select
                  className="w-full p-3 rounded-lg transition-all bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-red-500"
                  value={bloodFilter}
                  onChange={(e) => setBloodFilter(e.target.value)}
                >
                  {bloodGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
              
              {/* সহজলভ্যতা ফিল্টার */}
              <div>
                <label className="block font-medium mb-2 text-gray-700 dark:text-gray-300">
                  📍 সহজলভ্যতা
                </label>
                <select
                  className="w-full p-3 rounded-lg transition-all bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-red-500"
                  value={availabilityFilter}
                  onChange={(e) => setAvailabilityFilter(e.target.value)}
                >
                  <option value="সকল">সকল রক্তদাতা</option>
                  <option value="সহজলভ্য">সহজলভ্য এখন</option>
                  <option value="অসহজলভ্য">অনুপলব্ধ</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* পরিসংখ্যান */}
          <div className="overflow-x-auto">
            <div className="flex md:grid md:grid-cols-3 gap-3 min-w-max md:min-w-0">
              <div className="flex-shrink-0 p-3 rounded-lg bg-red-50 border border-red-100 dark:bg-gray-700 dark:border-gray-600">
                <p className="text-base font-semibold text-red-600 dark:text-red-400 whitespace-nowrap">
                  মোট: <span className="text-gray-900 dark:text-white">{toBanglaNumber(filteredDonors.length)}</span>
                </p>
              </div>
              <div className="flex-shrink-0 p-3 rounded-lg bg-red-50 border border-red-100 dark:bg-gray-700 dark:border-gray-600">
                <p className="text-base font-semibold text-red-600 dark:text-red-400 whitespace-nowrap">
                  সহজলভ্য: <span className="text-gray-900 dark:text-white">{toBanglaNumber(filteredDonors.filter(d => d.availability === 'সহজলভ্য').length)}</span>
                </p>
              </div>
              <div className="flex-shrink-0 p-3 rounded-lg bg-red-50 border border-red-100 dark:bg-gray-700 dark:border-gray-600">
                <p className="text-base font-semibold text-red-600 dark:text-red-400 whitespace-nowrap">
                  ও- দাতা: <span className="text-gray-900 dark:text-white">{toBanglaNumber(filteredDonors.filter(d => d.bloodGroup === 'O-').length)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* রক্তদাতা কার্ডস */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredDonors.map(donor => {
            const daysSinceLastDonation = getDaysSinceLastDonation(donor.lastDonation);
            
            return (
              <div key={donor.id} className="rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* রক্তদাতা হেডার */}
                <div className={`p-3 text-white flex justify-between items-center ${donor.availability === 'সহজলভ্য' 
                  ? 'bg-gradient-to-r from-red-600 to-red-700' 
                  : 'bg-gradient-to-r from-gray-600 to-gray-700'}`}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden mr-3">
                      <img 
                        src={donor.profilePic} 
                        alt={donor.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(donor.name)}&background=dc2626&color=fff&size=128`;
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm md:text-base truncate">{donor.name}</h3>
                      <p className="text-xs opacity-90 truncate">{donor.occupation}, {toBanglaNumber(donor.age)} বছর</p>
                    </div>
                  </div>
                  <div className="text-center ml-2">
                    <div className="text-xl md:text-2xl font-bold bg-white text-red-700 rounded px-2 py-1">
                      {donor.bloodGroup}
                    </div>
                    <div className="text-xs opacity-90 mt-1 hidden md:block">রক্তের গ্রুপ</div>
                  </div>
                </div>
                
                {/* রক্তদাতা বিস্তারিত */}
                <div className="p-4">
                  {/* সহজলভ্যতা ব্যাজ */}
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mb-3 ${donor.availability === 'সহজলভ্য' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                    {donor.availability === 'সহজলভ্য' ? '✅ প্রস্তুত' : '⏸️ অনুপলব্ধ'}
                  </div>
                  
                  {/* মোট দান সংখ্যা */}
                  <div className="mb-3">
                    <div className="text-xs text-gray-600 dark:text-gray-400">মোট রক্তদান:</div>
                    <div className="text-lg font-bold text-red-600 dark:text-red-400">
                      {toBanglaNumber(donor.donationCount)} বার
                    </div>
                  </div>
                  
                  {/* যোগাযোগের তথ্য */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <div className="w-6 text-blue-600 dark:text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-12S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 truncate">@{donor.messenger}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 truncate">{donor.address}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-6 text-purple-600 dark:text-purple-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2 text-xs text-gray-700 dark:text-gray-300 truncate">
                        শেষ দান: {formatDateBangla(donor.lastDonation)} ({toBanglaNumber(daysSinceLastDonation)} দিন আগে)
                      </span>
                    </div>
                  </div>
                  
                  {/* একশন বাটন - LEFT RIGHT (সাইড বাই সাইড) */}
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleContact('phone', donor.phone)}
                      className="flex-1 py-2.5 rounded-lg font-medium transition-all flex items-center justify-center bg-red-100 hover:bg-red-200 text-red-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      কল
                    </button>
                    
                    <button 
                      onClick={() => handleContact('whatsapp', donor.whatsapp)}
                      className="flex-1 py-2.5 rounded-lg font-medium transition-all flex items-center justify-center bg-green-100 hover:bg-green-200 text-green-700 dark:bg-green-900 dark:hover:bg-green-800 dark:text-white text-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* খালি অবস্থা */}
        {filteredDonors.length === 0 && (
          <div className="text-center py-10 md:py-16">
            <div className="text-5xl md:text-6xl mb-4 text-red-600 dark:text-red-400">🩸</div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              কোনো রক্তদাতা পাওয়া যায়নি
            </h3>
            <p className="text-gray-600 dark:text-gray-400 px-4">
              আপনার সার্চ বা ফিল্টার ক্যাটাগরি পরিবর্তন করে আবার চেষ্টা করুন।
            </p>
          </div>
        )}

        {/* গুরুত্বপূর্ণ তথ্য */}
        <div className="mt-8 md:mt-12 p-4 md:p-6 rounded-xl shadow-sm bg-red-50 border border-red-100 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-xl md:text-2xl font-bold text-red-600 dark:text-red-400 mb-3 md:mb-4">
            🩸 রক্তদান সম্পর্কে তথ্য
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-gray-800 dark:text-gray-300">
                রক্তদানের যোগ্যতা:
              </h3>
              <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-700 dark:text-gray-400">
                <li>বয়স ১৮-৬০ বছরের মধ্যে</li>
                <li>ওজন ৪৮ কেজি বা তার বেশি</li>
                <li>শারীরিকভাবে সুস্থ</li>
                <li>রক্তচাপ স্বাভাবিক সীমায়</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-gray-800 dark:text-gray-300">
                রক্তদানের আগে মনে রাখবেন:
              </h3>
              <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base text-gray-700 dark:text-gray-400">
                <li>পর্যাপ্ত পানি পান করুন</li>
                <li>হালকা খাবার গ্রহণ করুন</li>
                <li>পর্যাপ্ত ঘুমান</li>
                <li>অ্যালকোহল এড়িয়ে চলুন</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* ফুটার */}
      <footer className="mt-8 pt-6 pb-4 px-4 m-3 rounded-lg bg-gray-100 border-t border-gray-300 dark:bg-gray-800 dark:border-gray-700">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold text-red-600 dark:text-red-400 mb-3">
              রক্তদান মহান দান
            </h3>
            <p className="mb-4 text-sm md:text-base text-gray-700 dark:text-gray-400">
              একটি রক্তদান তিনটি জীবন বাঁচাতে পারে।
            </p>
            
            <div className="flex justify-center gap-4 md:gap-6 mb-4">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-red-600 dark:text-red-400">২৪/৭</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">হেল্পলাইন</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-red-600 dark:text-red-400">১৬২৮১</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">জাতীয় সেবা</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-red-600 dark:text-red-400">১০০%</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">নিরাপদ</div>
              </div>
            </div>
            
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-500">
              <p>© {new Date().getFullYear()} রক্তদাতা ডিরেক্টরি</p>
              <p className="mt-1">জরুরি প্রয়োজনে সরাসরি যোগাযোগ করুন</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  ); 
};

export default BloodDonorPage;