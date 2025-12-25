import { MapPin, Waves, Building, UtensilsCrossed, Mountain,
   Trees, Bell, Users, Target, Briefcase, Phone, Mail,
   Clock, ChevronRight, Eye, Award, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import Footer from './Footer'

const Home = ({ setActiveView }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Hero text slider data
  const heroSlides = [
    "BANGLADESH IS THE MOST POPULATED COUNTRIES.",
    "DISCOVER THE BEAUTY OF BANGLADESH",
    "EXPLORE RICH CULTURAL HERITAGE",
    "EXPERIENCE NATURAL WONDERS"
  ]

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const exploreCards = [
    {
      id: 1,
      title: 'Luxury',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      description: 'Experience luxury resorts and premium accommodations'
    },
    {
      id: 2,
      title: 'Sea Beaches',
      icon: Waves,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
      description: 'Discover pristine beaches and coastal beauty'
    },
    {
      id: 3,
      title: 'Heritage',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop',
      description: 'Explore historical sites and cultural heritage'
    },
    {
      id: 4,
      title: 'Foods',
      icon: UtensilsCrossed,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      description: 'Taste authentic Bangladeshi cuisine'
    },
    {
      id: 5,
      title: 'Water Fall',
      icon: Mountain,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Visit stunning waterfalls and natural wonders'
    },
    {
      id: 6,
      title: 'Green Tourism',
      icon: Trees,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      description: 'Experience eco-friendly and sustainable tourism'
    }
  ]

  // Notice data
  const notices = [
    { id: 1, title: "New Tourism Guidelines Released", date: "Dec 20, 2024", type: "Important" },
    { id: 2, title: "Winter Festival 2024 Registration Open", date: "Dec 18, 2024", type: "Event" },
    { id: 3, title: "Heritage Site Maintenance Schedule", date: "Dec 15, 2024", type: "Update" },
    { id: 4, title: "Tourist Safety Advisory", date: "Dec 12, 2024", type: "Advisory" },
    { id: 5, title: "New Beach Resort Opening", date: "Dec 10, 2024", type: "News" }
  ]

  // Employee data
  const employees = [
    {
      id: 1,
      name: "Dr. Rahman Ahmed",
      position: "Project Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: "15+ years"
    },
    {
      id: 2,
      name: "Fatima Khan",
      position: "GIS Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      experience: "8+ years"
    },
    {
      id: 3,
      name: "Mohammad Ali",
      position: "Tourism Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: "10+ years"
    },
    {
      id: 4,
      name: "Rashida Begum",
      position: "Data Analyst",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      experience: "6+ years"
    }
  ]

  // Vendor data
  const vendors = [
    { id: 1, name: "Heritage Tours Ltd", category: "Tour Operator", rating: 4.8 },
    { id: 2, name: "Coastal Adventures", category: "Beach Tours", rating: 4.6 },
    { id: 3, name: "Green Valley Eco Tours", category: "Eco Tourism", rating: 4.9 },
    { id: 4, name: "Cultural Experience Co", category: "Cultural Tours", rating: 4.7 },
    { id: 5, name: "Adventure Seekers", category: "Adventure Tours", rating: 4.5 }
  ]

  // Goals data
  const goals = [
    {
      icon: Globe,
      title: "Promote Tourism",
      description: "Showcase Bangladesh's natural beauty and cultural heritage to the world"
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Support local communities through sustainable tourism practices"
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Provide exceptional tourism experiences with world-class standards"
    },
    {
      icon: Target,
      title: "Digital Innovation",
      description: "Leverage GIS technology for enhanced tourism planning and management"
    }
  ]

  const handleCardClick = (cardTitle) => {
    console.log(`Clicked on ${cardTitle} - Navigating to landing page`)
    // Navigate back to home/landing page
    if (setActiveView) {
      setActiveView('home')
    }
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Map Background */}
      <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white py-32 overflow-hidden">
        {/* Map Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            {/* Bangladesh Map Outline */}
            <path d="M200 150 Q300 120 400 140 Q500 160 600 180 Q700 200 800 190 Q900 180 1000 200 L1000 400 Q900 420 800 410 Q700 400 600 420 Q500 440 400 430 Q300 420 200 400 Z" 
                  stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
          </svg>
        </div>
        
        {/* Location Pins */}
        <div className="absolute inset-0">
          <MapPin className="absolute top-20 left-1/4 h-8 w-8 text-white opacity-60 animate-pulse" />
          <MapPin className="absolute top-32 right-1/3 h-6 w-6 text-white opacity-50 animate-pulse" style={{animationDelay: '0.5s'}} />
          <MapPin className="absolute top-40 left-1/2 h-7 w-7 text-white opacity-70 animate-pulse" style={{animationDelay: '1s'}} />
          <MapPin className="absolute bottom-32 left-1/3 h-6 w-6 text-white opacity-60 animate-pulse" style={{animationDelay: '1.5s'}} />
          <MapPin className="absolute bottom-40 right-1/4 h-8 w-8 text-white opacity-50 animate-pulse" style={{animationDelay: '2s'}} />
          <MapPin className="absolute top-28 left-2/3 h-5 w-5 text-white opacity-40 animate-pulse" style={{animationDelay: '2.5s'}} />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block transition-all duration-1000 ease-in-out">
              {heroSlides[currentSlide]}
            </span>
          </h1>
          
          {/* Slide indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* GIS Capability Banner */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="h-5 w-5 text-blue-300" />
              <span className="text-blue-200 font-medium text-sm">Geographic Information System</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Advanced GIS Capabilities
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore Bangladesh through interactive maps with detailed division and district information, 
              powered by cutting-edge geospatial technology
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
            {['Dhaka', 'Chittagong', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur', 'Mymensingh'].map((division, index) => (
              <div
                key={division}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 text-center hover:bg-white/15 hover:border-white/20 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl"
                onMouseEnter={() => console.log(`Hovering over ${division} division`)}
              >
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-bold text-sm md:text-base text-white mb-1 group-hover:text-blue-200 transition-colors">
                  {division}
                </h3>
                <p className="text-xs text-blue-300 group-hover:text-blue-200 transition-colors">
                  Division
                </p>
                <div className="mt-2 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Additional Info Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="font-semibold text-white mb-2">Interactive Mapping</h3>
              <p className="text-blue-200 text-sm">Real-time geographic data visualization</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="font-semibold text-white mb-2">Precise Location</h3>
              <p className="text-blue-200 text-sm">Accurate GPS coordinates and boundaries</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="font-semibold text-white mb-2">Community Data</h3>
              <p className="text-blue-200 text-sm">Population and demographic insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notice Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Bell className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-800">Latest Notices</h2>
            </div>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
              <span>View All</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notices.slice(0, 3).map((notice) => (
              <div key={notice.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    notice.type === 'Important' ? 'bg-red-100 text-red-600' :
                    notice.type === 'Event' ? 'bg-green-100 text-green-600' :
                    notice.type === 'Update' ? 'bg-blue-100 text-blue-600' :
                    notice.type === 'Advisory' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {notice.type}
                  </span>
                  <Clock className="h-4 w-4 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{notice.title}</h3>
                <p className="text-sm text-gray-500">{notice.date}</p>
                <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>Read More</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Platform</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The ICTD Lab GIS Platform is a comprehensive digital solution designed to promote and manage tourism in Bangladesh. 
              Our platform combines advanced Geographic Information System (GIS) technology with user-friendly interfaces to provide 
              detailed information about tourist destinations, cultural heritage sites, and natural wonders across the country.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Interactive Maps</h3>
                <p className="text-gray-600 text-sm">Detailed GIS mapping of all tourist destinations</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Heritage Sites</h3>
                <p className="text-gray-600 text-sm">Comprehensive database of cultural landmarks</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Community Driven</h3>
                <p className="text-gray-600 text-sm">Supporting local communities and businesses</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goals and Objectives */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Goals & Objectives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to transforming Bangladesh's tourism landscape through innovative technology and sustainable practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => {
              const IconComponent = goal.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3">{goal.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{goal.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Project Employee Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600">Meet the dedicated professionals behind our platform</p>
            </div>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
              <span>View All Team</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {employees.map((employee) => (
              <div key={employee.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-gray-800 mb-1">{employee.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{employee.position}</p>
                  <p className="text-gray-500 text-sm">{employee.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vendor List Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-3">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <div>
                <h2 className="text-4xl font-bold text-gray-800">Trusted Partners</h2>
                <p className="text-lg text-gray-600 mt-2">Our verified tourism service providers</p>
              </div>
            </div>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
              <span>View All Partners</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vendors.slice(0, 3).map((vendor) => (
              <div key={vendor.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium text-gray-700">{vendor.rating}</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{vendor.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-4">{vendor.category}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Have questions about Bangladesh tourism? We're here to help you plan your perfect journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Phone Support</h3>
              <p className="opacity-90">+880-2-9898989</p>
              <p className="opacity-90">+880-2-9898990</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Email Support</h3>
              <p className="opacity-90">info@bangladeshtourism.gov.bd</p>
              <p className="opacity-90">support@ictdlab.gov.bd</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="opacity-90">ICTD Lab, Level-5</p>
              <p className="opacity-90">Agargaon, Dhaka 1207</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-6 py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Bangladesh</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the beauty, culture, and natural wonders of Bangladesh through our comprehensive tourism platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreCards.map((card) => {
            const IconComponent = card.icon
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.title)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-lg">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                  
                  <div className="mt-4 flex items-center text-blue-600 font-medium">
                    <span>Explore Now</span>
                    <MapPin className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home