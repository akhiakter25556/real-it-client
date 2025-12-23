import { Menu, Search, Settings } from 'lucide-react'
import { UserRoleIndicator } from './RoleBasedAccess'

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="flex items-center space-x-2">
            <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold text-gray-900">
              ICTD Lab GIS Platform
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2
             h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search locations..."
              className="pl-10 pr-4 py-2 border border-gray-300
               rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Settings className="h-5 w-5" />
          </button>
          
          <UserRoleIndicator />
        </div>
      </div>
    </header>
  )
}

export default Header