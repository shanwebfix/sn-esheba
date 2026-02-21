import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Stethoscope, 
  Pill, 
  Microscope, 
  Phone, 
  HeartPulse
} from 'lucide-react';

const HealthCategory = () => {
  // ক্যাটাগরি ডেটা
  const services = [
    { 
      id: 1, 
      title: 'Hospitals', 
      path: '/health/hospital',
      icon: <Building2 size={36} />, 
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400' 
    },
    { 
      id: 2, 
      title: 'Clinics', 
      path: '/health/clinic',
      icon: <HeartPulse size={36} />, 
      color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400' 
    },
    { 
      id: 3, 
      title: 'Doctors', 
      path: '/health/doctor',
      icon: <Stethoscope size={36} />, 
      color: 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400' 
    },
    { 
      id: 4, 
      title: 'Diagnostics', 
      path: '/health/diagnostic',
      icon: <Microscope size={36} />, 
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400' 
    },
    { 
      id: 5, 
      title: 'Pharmacy', 
      path: '/health/pharmacy',
      icon: <Pill size={36} />, 
      color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400' 
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* হেডার */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          স্বাস্থ্য সেবা
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 font-bangla">
          আপনার প্রয়োজনীয় চিকিৎসা সেবা খুঁজে নিন
        </p>
      </div>

      {/* গ্রিড কন্টেইনার */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <Link 
              to={item.path} 
              key={item.id}
              className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-none border border-gray-100 dark:border-slate-700 p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            >
              {/* আইকন বক্স */}
              <div className={`p-4 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                {item.icon}
              </div>
              
              {/* টাইটেল */}
              <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {item.title}
              </h3>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 font-bangla">
                সেবা পেতে ক্লিক করুন
              </p>

              {/* হোভার ইফেক্ট বর্ডার */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthCategory;