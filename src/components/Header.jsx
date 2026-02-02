import { Sun, Moon, Menu, Sparkles } from 'lucide-react'
import { useDarkMode } from '../context/DarkModeContext'

const Header = ({ onMenuClick }) => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <Sparkles className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Shamsher<span className="text-blue-500 dark:text-blue-400">Nagar</span>
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">E-Sheba</p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`p-2.5 rounded-full transition-all duration-300 ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
            aria-label="Toggle dark mode"
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* Menu Button */}
          <button
            onClick={onMenuClick}
            className="p-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header