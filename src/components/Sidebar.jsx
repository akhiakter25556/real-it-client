import { 
  Map, 
  BarChart3, 
  Users, 
  MapPin,
  BookOpen,
  Activity,
  Download,
  Search
} from 'lucide-react'

const Sidebar = ({ isOpen, activeView, setActiveView }) => {
  const menuItems = [
    { id: 'map', label: 'Interactive Map', icon: Map },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'analysis', label: 'Spatial Analysis', icon: Activity },
    { id: 'export', label: 'Data Export', icon: Download },
    { id: 'research', label: 'Research Support', icon: Search },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'training', label: 'Training Programs', icon: BookOpen },
  ]

  const administrativeAreas = [
    'Dhaka Division',
    'Chittagong Division', 
    'Rajshahi Division',
    'Khulna Division',
    'Barisal Division',
    'Sylhet Division',
    'Rangpur Division',
    'Mymensingh Division'
  ]

  if (!isOpen) return null

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col">
      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeView === item.id
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>

        {/* Administrative Areas */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Administrative Areas
          </h3>
          <div className="space-y-1">
            {administrativeAreas.map((area) => (
              <button
                key={area}
                className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
              >
                <MapPin className="h-4 w-4" />
                <span>{area}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          <p>ICTD Lab GIS Platform</p>
          <p>Smart Bangladesh Initiative</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar