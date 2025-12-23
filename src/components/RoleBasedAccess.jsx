import { useState, createContext, useContext } from 'react'

// Role-based permissions configuration
const ROLE_PERMISSIONS = {
  'GIS Project Manager': {
    canViewMap: true,
    canEditMap: true,
    canViewDashboard: true,
    canManageUsers: true,
    canManageTraining: true,
    canExportData: true,
    canViewReports: true,
    canEditReports: true,
    canManageSettings: true,
    canViewAnalysis: true,
    canEditAnalysis: true
  },
  'Remote Sensing Specialist': {
    canViewMap: true,
    canEditMap: true,
    canViewDashboard: true,
    canManageUsers: false,
    canManageTraining: false,
    canExportData: true,
    canViewReports: true,
    canEditReports: true,
    canManageSettings: false,
    canViewAnalysis: true,
    canEditAnalysis: true
  },
  'Web GIS Developer': {
    canViewMap: true,
    canEditMap: true,
    canViewDashboard: true,
    canManageUsers: false,
    canManageTraining: false,
    canExportData: true,
    canViewReports: true,
    canEditReports: false,
    canManageSettings: true,
    canViewAnalysis: true,
    canEditAnalysis: false
  },
  'Spatial Database Administrator': {
    canViewMap: true,
    canEditMap: false,
    canViewDashboard: true,
    canManageUsers: false,
    canManageTraining: false,
    canExportData: true,
    canViewReports: true,
    canEditReports: false,
    canManageSettings: true,
    canViewAnalysis: true,
    canEditAnalysis: false
  },
  'ICT / GIS Trainer': {
    canViewMap: true,
    canEditMap: false,
    canViewDashboard: true,
    canManageUsers: false,
    canManageTraining: true,
    canExportData: false,
    canViewReports: true,
    canEditReports: false,
    canManageSettings: false,
    canViewAnalysis: true,
    canEditAnalysis: false
  }
}

// Create Auth Context
const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  // Simulated current user - in real app this would come from authentication
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: 'Dr. Rahman Ahmed',
    email: 'rahman.ahmed@ictd.gov.bd',
    role: 'GIS Project Manager',
    department: 'ICTD Lab',
    avatar: 'https://ui-avatars.com/api/?name=Rahman+Ahmed&background=3B82F6&color=fff'
  })

  const hasPermission = (permission) => {
    const userRole = currentUser?.role
    if (!userRole || !ROLE_PERMISSIONS[userRole]) {
      return false
    }
    return ROLE_PERMISSIONS[userRole][permission] || false
  }

  const canAccess = (feature) => {
    switch (feature) {
      case 'map':
        return hasPermission('canViewMap')
      case 'dashboard':
        return hasPermission('canViewDashboard')
      case 'users':
        return hasPermission('canManageUsers')
      case 'training':
        return hasPermission('canManageTraining')
      case 'reports':
        return hasPermission('canViewReports')
      case 'analysis':
        return hasPermission('canViewAnalysis')
      case 'settings':
        return hasPermission('canManageSettings')
      default:
        return false
    }
  }

  const value = {
    currentUser,
    setCurrentUser,
    hasPermission,
    canAccess,
    userRole: currentUser?.role
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Higher-order component for protecting routes/components
export const withRoleProtection = (WrappedComponent, requiredPermission) => {
  return function ProtectedComponent(props) {
    const { hasPermission } = useAuth()
    
    if (!hasPermission(requiredPermission)) {
      return (
        <div className="flex items-center justify-center h-full bg-gray-50">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Access Denied</h3>
            <p className="text-gray-600">You don't have permission to access this feature.</p>
            <p className="text-sm text-gray-500 mt-2">Contact your administrator for access.</p>
          </div>
        </div>
      )
    }
    
    return <WrappedComponent {...props} />
  }
}

// Component to show user role and permissions
export const UserRoleIndicator = () => {
  const { currentUser, userRole } = useAuth()
  
  const getRoleColor = (role) => {
    switch (role) {
      case 'GIS Project Manager': return 'bg-blue-100 text-blue-800'
      case 'Remote Sensing Specialist': return 'bg-green-100 text-green-800'
      case 'Web GIS Developer': return 'bg-purple-100 text-purple-800'
      case 'Spatial Database Administrator': return 'bg-yellow-100 text-yellow-800'
      case 'ICT / GIS Trainer': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <img
        src={currentUser?.avatar}
        alt={currentUser?.name}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">{currentUser?.name}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${getRoleColor(userRole)}`}>
          {userRole}
        </span>
      </div>
    </div>
  )
}