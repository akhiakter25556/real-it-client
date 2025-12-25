import { Building } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')

  // Click handlers for different sections
  const handleSocialClick = (platform) => {
    const urls = {
      twitter: 'https://instagram.com',
      linkedin: 'https://youtube.com',
      pinterest: 'https://tiktok.com'
    }
    window.open(urls[platform], '_blank')
  }

  const handleLinkClick = (section) => {
    console.log(`Clicked on: ${section}`)
    // Add navigation logic here
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (email) {
      console.log(`Email submitted: ${email}`)
      alert(`Thank you! We'll send updates to ${email}`)
      setEmail('')
    } else {
      alert('Please enter a valid email address')
    }
  }

  const handleAppStoreClick = (store) => {
    const urls = {
      googlePlay: 'https://play.google.com/store',
      appStore: 'https://apps.apple.com'
    }
    window.open(urls[store], '_blank')
  }

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="relative pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Logo and Address */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div 
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleLinkClick('logo')}
              >
                <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Building className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                </div>
                <span className="text-lg sm:text-xl font-bold">Beautiful Bangladesh</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                <p>Porjoton Bhaban (Level-5) Plot-5, C/1,</p>
                <p>West Agargaon, Sher-e-Bangla Nagar</p>
                <p>(Administrative) Dhaka 1207 Floor # 19,</p>
                <p>Building # 06,</p>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <button 
                  onClick={() => handleSocialClick('twitter')}
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="Follow us on Twitter"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => handleSocialClick('linkedin')}
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => handleSocialClick('pinterest')}
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="Follow us on Pinterest"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Explore Bangladesh */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 border-b border-gray-600 pb-2">Explore Bangladesh</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <button 
                    onClick={() => handleLinkClick('Contact Us')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer block w-full text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLinkClick('About Us')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer block w-full text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLinkClick('Terms & Condition')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer block w-full text-left"
                  >
                    Terms & Condition
                  </button>
                </li>
              </ul>
            </div>

            {/* Division */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 border-b border-gray-600 pb-2">Division</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <button 
                    onClick={() => handleLinkClick('Privacy Policy')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer block w-full text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLinkClick('International Airports')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer block w-full text-left"
                  >
                    International Airports
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLinkClick('City Flights')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer block w-full text-left"
                  >
                    City Flights
                  </button>
                </li>
              </ul>
            </div>

            {/* Stay Update */}
            <div className="space-y-3 sm:col-span-2 lg:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 border-b border-gray-600 pb-2">Stay Update</h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                Enter your email in the box below to receive latest news and information about our activities
              </p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400 transition-all text-sm"
                  required
                />
                <button 
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 active:bg-red-800 px-4 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none text-white font-medium transition-all duration-200 hover:shadow-lg text-sm"
                >
                  Send
                </button>
              </form>
              
              {/* App Store Buttons */}
              <div className="mt-4 sm:mt-6 space-y-2">
                <button
                  onClick={() => handleAppStoreClick('googlePlay')}
                  className="w-full bg-black rounded-lg p-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="text-white">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div className="text-white text-xs">
                      <div className="text-[10px] opacity-80">GET IT ON</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => handleAppStoreClick('appStore')}
                  className="w-full bg-black rounded-lg p-2 cursor-pointer hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="text-white">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                      </svg>
                    </div>
                    <div className="text-white text-xs">
                      <div className="text-[10px] opacity-80">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-600 pt-4 text-center text-xs sm:text-sm text-gray-400">
            Copyright © 2024 by Beautiful Bangladesh All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer