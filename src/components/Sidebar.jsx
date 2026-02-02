import { X, Info, Mail, Settings, FileText, Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  const menuItems = [
    { id: 1, name: 'About', icon: <Info size={20} />, path: '/about' },
    { id: 2, name: 'Contact', icon: <Mail size={20} />, path: '/contact' },
    { id: 3, name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
    { id: 4, name: 'Terms', icon: <FileText size={20} />, path: '/terms' },
    { id: 5, name: 'Rules', icon: <Shield size={20} />, path: '/rules' },
  ]

  const handleMenuItemClick = (path) => {
    navigate(path)
    onClose()
  }

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`} style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
      <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Navigation Menu</h2>
          <button onClick={onClose} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => handleMenuItemClick(item.path)} className="flex items-center w-full p-4 text-left rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                  <span className="mr-4 text-blue-500 dark:text-blue-400">{item.icon}</span>
                  <span className="font-medium text-lg">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
