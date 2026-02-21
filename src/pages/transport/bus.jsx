import React, { useState } from 'react';
import { 
  X, MessageCircle, PhoneCall, CheckCircle2, 
  MapPin, Info, Navigation, Bus, PhoneForwarded, 
  Search, Star, Route, Clock, UserCheck, Ticket, ShieldCheck
} from 'lucide-react';

const FullBusPage = () => {
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // ১. বাসের তালিকা (বুকিং ও রুট ডিটেইলস)
  const busServices = [
    {
      id: 1,
      name: "শ্যামলী পরিবহন",
      route: "শমশেরনগর - ঢাকা",
      type: "এসি / নন-এসি",
      schedule: "সকাল ৭:৩০, রাত ১০:১৫",
      counter: "শমশেরনগর মেইন রোড",
      supervisor: "মো: রফিক মিয়া",
      phone: "01711000000",
      whatsapp: "8801711000000",
      price: "৫৫০ - ১২০০ টাকা",
      status: "অফিসিয়াল সার্ভিস"
    },
    {
      id: 2,
      name: "এনা ট্রান্সপোর্ট",
      route: "শমশেরনগর - সিলেট",
      type: "নন-এসি চেয়ার কোচ",
      schedule: "প্রতি ১ ঘণ্টা পর পর",
      counter: "চৌমুহনী পয়েন্ট",
      supervisor: "আব্দুল হাই",
      phone: "01811000000",
      whatsapp: "8801811000000",
      price: "১৮০ - ২৫০ টাকা",
      status: "ভেরিফাইড চালক"
    }
  ];

  // ২. বাস ড্রাইভারদের তালিকা (আগের সিএনজি/কার ড্রাইভার ডিজাইনে)
  const busDrivers = [
    {
      id: 101,
      name: 'মো: হারুন মিয়া',
      experience: '১৫ বছরের অভিজ্ঞতা',
      phone: '01714000000',
      whatsapp: '8801714000000',
      stand: 'শমশেরনগর বাস টার্মিনাল',
      carNumber: 'ঢাকা-মেট্রো-ব ১১-২২৩৩',
      status: 'ভেরিফাইড ড্রাইভার',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <div className="min-h-screen py-10 px-4 font-bangla">
      <div className="max-w-6xl mx-auto">
        
        {/* সার্চ বার */}
        <div className="max-w-md mx-auto mb-12 relative group">
          <input 
            type="text"
            placeholder="বাস বা ড্রাইভারের নাম সার্চ করুন..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-4 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        {/* --- সেকশন ১: বাসের তালিকা (ওপরে থাকবে) --- */}
        <div className="mb-20">
          <h2 className="text-2xl font-black mb-8 flex items-center gap-2 dark:text-white border-l-4 border-indigo-600 pl-4">
            <Bus className="text-indigo-600" /> বাসের তালিকা ও টিকিট বুকিং
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {busServices.filter(b => b.name.includes(searchQuery)).map((bus) => (
              <div key={bus.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                   <div className="bg-indigo-50 dark:bg-indigo-900/30 p-3 rounded-2xl text-indigo-600"><Bus size={24} /></div>
                   <span className="text-[10px] font-bold bg-green-100 text-green-600 px-3 py-1 rounded-full">{bus.status}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{bus.name}</h3>
                <p className="text-sm text-indigo-600 font-bold mb-4">{bus.route}</p>
                <div className="flex gap-2">
                  <a href={`tel:${bus.phone}`} className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-bold text-center text-sm flex items-center justify-center gap-2">
                    <PhoneCall size={16} /> টিকিট বুকিং
                  </a>
                  <button onClick={() => setSelectedBus(bus)} className="px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl">
                    <Info size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- সেকশন ২: ড্রাইভারদের তালিকা (নিচে থাকবে) --- */}
        <div>
          <h2 className="text-2xl font-black mb-8 flex items-center gap-2 dark:text-white border-l-4 border-green-600 pl-4">
            <UserCheck className="text-green-600" /> অভিজ্ঞ বাস ড্রাইভারগণ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {busDrivers.filter(d => d.name.includes(searchQuery)).map((driver) => (
              <div key={driver.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <img src={driver.image} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-slate-50 dark:ring-slate-800" alt="" />
                  <div>
                    <h3 className="text-lg font-bold dark:text-white">{driver.name}</h3>
                    <p className="text-xs text-slate-500">{driver.experience}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={`tel:${driver.phone}`} className="flex-1 py-3 bg-green-600 text-white rounded-xl font-bold text-center text-sm flex items-center justify-center gap-2">
                    <PhoneCall size={16} /> কল দিন
                  </a>
                  <button onClick={() => setSelectedDriver(driver)} className="px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl">
                    <Info size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- বাসের বিস্তারিত মডাল --- */}
        {selectedBus && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/50">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[3rem] p-8 relative animate-in zoom-in-95 shadow-2xl">
              <button onClick={() => setSelectedBus(null)} className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500"><X size={18} /></button>
              <div className="text-center mb-6">
                <h2 className="text-3xl font-black text-indigo-600">{selectedBus.name}</h2>
                <p className="text-sm font-bold text-slate-500 mt-1">{selectedBus.route}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 mb-8 space-y-4">
                <div className="flex items-start gap-3"><Clock className="text-blue-500 mt-1" size={18} /><div><p className="text-[10px] text-slate-400 font-black uppercase">সময়সূচী</p><p className="font-bold dark:text-slate-200">{selectedBus.schedule}</p></div></div>
                <div className="flex items-start gap-3"><MapPin className="text-red-500 mt-1" size={18} /><div><p className="text-[10px] text-slate-400 font-black uppercase">কাউন্টার</p><p className="font-bold dark:text-slate-200">{selectedBus.counter}</p></div></div>
                <div className="flex items-start gap-3"><Ticket className="text-indigo-600 mt-1" size={18} /><div><p className="text-[10px] text-slate-400 font-black uppercase">সুপারভাইজার ও ভাড়া</p><p className="font-bold dark:text-slate-200">{selectedBus.supervisor} ({selectedBus.price})</p></div></div>
              </div>
              <a href={`tel:${selectedBus.phone}`} className="w-full flex items-center justify-center gap-3 py-5 bg-indigo-600 text-white rounded-[1.5rem] font-black text-lg shadow-lg shadow-indigo-500/30">
                <PhoneCall size={24} /> টিকিট বুকিং করুন
              </a>
            </div>
          </div>
        )}

        {/* --- ড্রাইভারের বিস্তারিত মডাল (আগের সিএনজি/কার ড্রাইভার ডিজাইন) --- */}
        {selectedDriver && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-md bg-black/50">
            <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[3rem] p-8 relative animate-in zoom-in-95 shadow-2xl">
              <button onClick={() => setSelectedDriver(null)} className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500"><X size={18} /></button>
              <div className="text-center mb-6">
                <img src={selectedDriver.image} className="w-24 h-24 rounded-[2.5rem] object-cover mx-auto mb-4 ring-4 ring-green-50" alt="" />
                <h2 className="text-2xl font-black dark:text-white">{selectedDriver.name}</h2>
                <p className="text-green-600 font-bold text-sm uppercase">{selectedDriver.status}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 mb-8 space-y-4">
                <div className="flex items-start gap-3"><Navigation className="text-red-500 mt-1" size={18} /><div><p className="text-[10px] text-slate-400 font-black uppercase">স্ট্যান্ট লোকেশন</p><p className="font-bold dark:text-slate-200">{selectedDriver.stand}</p></div></div>
                <div className="flex items-start gap-3"><ShieldCheck className="text-green-500 mt-1" size={18} /><div><p className="text-[10px] text-slate-400 font-black uppercase">গাড়ির নাম্বার</p><p className="font-bold dark:text-slate-200">{selectedDriver.carNumber}</p></div></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a href={`https://wa.me/${selectedDriver.whatsapp}`} className="flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-sm shadow-md"><MessageCircle size={18} /> WhatsApp</a>
                <a href={`tel:${selectedDriver.phone}`} className="flex items-center justify-center gap-2 py-4 bg-green-600 text-white rounded-2xl font-bold text-sm shadow-md"><PhoneCall size={18} /> কল করুন</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullBusPage;