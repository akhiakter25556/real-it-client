import { Home, MapPin, Phone, User, Shield, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const Header = ({ toggleSidebar, setActiveView }) => {
  const [selectedCountry, setSelectedCountry] = useState('BD')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const countries = [
    { 
      code: 'BD', 
      name: 'Bangladesh', 
      flag: (
        <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="16" fill="#006A4E"/>
          <circle cx="9" cy="8" r="5" fill="#F42A41"/>
        </svg>
      ),
      language: 'bn',
      translations: {
        home: 'হোম',
        tourPlaces: 'ভ্রমণ স্থান',
        contact: 'যোগাযোগ',
        login: 'লগইন'
      }
    },
    { 
      code: 'GB', 
      name: 'United Kingdom', 
      flag: (
        <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="16" fill="#012169"/>
          <path d="M0 0L24 16M24 0L0 16" stroke="#FFFFFF" strokeWidth="2"/>
          <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1"/>
          <rect x="10" y="0" width="4" height="16" fill="#FFFFFF"/>
          <rect x="0" y="6" width="24" height="4" fill="#FFFFFF"/>
          <rect x="11" y="0" width="2" height="16" fill="#C8102E"/>
          <rect x="0" y="7" width="24" height="2" fill="#C8102E"/>
        </svg>
      ),
      language: 'en',
      translations: {
        home: 'Home',
        tourPlaces: 'Tour Places',
        contact: 'Contact',
        login: 'Login'
      }
    },
    { 
      code: 'AR', 
      name: 'Argentina', 
      flag: (
        <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="5.33" fill="#74ACDF"/>
          <rect y="5.33" width="24" height="5.33" fill="#FFFFFF"/>
          <rect y="10.67" width="24" height="5.33" fill="#74ACDF"/>
          <circle cx="12" cy="8" r="2" fill="#FCDD09" stroke="#D4AF37" strokeWidth="0.5"/>
        </svg>
      ),
      language: 'es',
      translations: {
        home: 'Inicio',
        tourPlaces: 'Lugares Turísticos',
        contact: 'Contacto',
        login: 'Iniciar Sesión'
      }
    },
    { 
      code: 'US', 
      name: 'United States', 
      flag: (
        <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="16" fill="#B22234"/>
          <rect y="1" width="24" height="1" fill="#FFFFFF"/>
          <rect y="3" width="24" height="1" fill="#FFFFFF"/>
          <rect y="5" width="24" height="1" fill="#FFFFFF"/>
          <rect y="7" width="24" height="1" fill="#FFFFFF"/>
          <rect y="9" width="24" height="1" fill="#FFFFFF"/>
          <rect y="11" width="24" height="1" fill="#FFFFFF"/>
          <rect y="13" width="24" height="1" fill="#FFFFFF"/>
          <rect width="10" height="8" fill="#3C3B6E"/>
        </svg>
      ),
      language: 'en',
      translations: {
        home: 'Home',
        tourPlaces: 'Tour Places',
        contact: 'Contact',
        login: 'Login'
      }
    },
    { 
      code: 'DE', 
      name: 'Germany', 
      flag: (
        <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
          <rect width="24" height="5.33" fill="#000000"/>
          <rect y="5.33" width="24" height="5.33" fill="#DD0000"/>
          <rect y="10.67" width="24" height="5.33" fill="#FFCE00"/>
        </svg>
      ),
      language: 'de',
      translations: {
        home: 'Startseite',
        tourPlaces: 'Reiseziele',
        contact: 'Kontakt',
        login: 'Anmelden'
      }
    }
  ]

  const handleNavigation = (view) => {
    if (setActiveView) {
      setActiveView(view)
    }
  }

  const handleCountrySelect = (countryCode) => {
    const selectedCountryData = countries.find(c => c.code === countryCode)
    setSelectedCountry(countryCode)
    setIsDropdownOpen(false)
    
    console.log(`Language changed to: ${selectedCountryData.name} (${selectedCountryData.language})`)
    
    localStorage.setItem('selectedLanguage', selectedCountryData.language)
    localStorage.setItem('selectedCountry', countryCode)
  }

  const selectedCountryData = countries.find(c => c.code === selectedCountry)
  const translations = selectedCountryData?.translations || countries[0].translations

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleNavigation('home')}
        >
          <div className="bg-blue-600 p-2 rounded-lg">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">
            ICTD Lab GIS Platform
          </h1>
        </div>

        {/* Center - Navigation */}
        <nav className="flex items-center space-x-8">
          <button 
            onClick={() => handleNavigation('home')}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span className="font-medium">{translations.home}</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('map')}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <MapPin className="h-5 w-5" />
            <span className="font-medium">{translations.tourPlaces}</span>
          </button>
          
          <button 
            onClick={() => handleNavigation('contact')}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">{translations.contact}</span>
          </button>
        </nav>

        {/* Right side - Login button and Country Flag Dropdown */}
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <User className="h-4 w-4" />
            <span className="font-medium">{translations.login}</span>
          </button>

          {/* Country Flag Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-blue-500 transition-colors bg-white"
              title={`Current language: ${selectedCountryData?.name}`}
            >
              <div className="flex items-center">
                {selectedCountryData?.flag}
              </div>
              <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                    Select Language
                  </div>
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => handleCountrySelect(country.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-blue-50 transition-colors ${
                        selectedCountry === country.code ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center">
                        {country.flag}
                      </div>
                      <div className="flex flex-col flex-1">
                        <span className="text-sm font-medium">{country.name}</span>
                        <span className="text-xs text-gray-500">
                          {country.language.toUpperCase()} • {country.translations.home}
                        </span>
                      </div>
                      {selectedCountry === country.code && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  )
}

export default Header