import { useState } from 'react'
import { 
  Users, 
  UserPlus, 
  Edit, 
  Trash2, 
  Shield, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  Search,
  Filter
} from 'lucide-react'

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Dr. Rahman Ahmed',
      email: 'rahman.ahmed@ictd.gov.bd',
      phone: '+880-1711-123456',
      role: 'GIS Project Manager',
      department: 'ICTD Lab',
      location: 'Dhaka',
      joinDate: '2023-01-15',
      status: 'Active',
      avatar: 'https://ui-avatars.com/api/?name=Rahman+Ahmed&background=3B82F6&color=fff'
    },
    {
      id: 2,
      name: 'Fatima Khatun',
      email: 'fatima.khatun@ictd.gov.bd',
      phone: '+880-1712-234567',
      role: 'Remote Sensing Specialist',
      department: 'Spatial Analysis',
      location: 'Chittagong',
      joinDate: '2023-03-20',
      status: 'Active',
      avatar: 'https://ui-avatars.com/api/?name=Fatima+Khatun&background=10B981&color=fff'
    },
    {
      id: 3,
      name: 'Md. Karim Uddin',
      email: 'karim.uddin@ictd.gov.bd',
      phone: '+880-1713-345678',
      role: 'Web GIS Developer',
      department: 'Development Team',
      location: 'Dhaka',
      joinDate: '2023-02-10',
      status: 'Active',
      avatar: 'https://ui-avatars.com/api/?name=Karim+Uddin&background=8B5CF6&color=fff'
    },
    {
      id: 4,
      name: 'Nasir Hossain',
      email: 'nasir.hossain@ictd.gov.bd',
      phone: '+880-1714-456789',
      role: 'Spatial Database Administrator',
      department: 'Database Team',
      location: 'Sylhet',
      joinDate: '2023-04-05',
      status: 'Active',
      avatar: 'https://ui-avatars.com/api/?name=Nasir+Hossain&background=F59E0B&color=fff'
    },
    {
      id: 5,
      name: 'Rashida Begum',
      email: 'rashida.begum@ictd.gov.bd',
      phone: '+880-1715-567890',
      role: 'ICT / GIS Trainer',
      department: 'Training Division',
      location: 'Rajshahi',
      joinDate: '2023-05-12',
      status: 'Active',
      avatar: 'https://ui-avatars.com/api/?name=Rashida+Begum&background=EF4444&color=fff'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRole, setSelectedRole] = useState('All')
  const [showAddModal, setShowAddModal] = useState(false)

  const roles = [
    'All',
    'GIS Project Manager',
    'Remote Sensing Specialist', 
    'Web GIS Developer',
    'Spatial Database Administrator',
    'ICT / GIS Trainer'
  ]

  const rolePermissions = {
    'GIS Project Manager': {
      color: 'bg-blue-100 text-blue-800',
      permissions: ['Full Access', 'Project Management', 'Team Oversight', 'Budget Control']
    },
    'Remote Sensing Specialist': {
      color: 'bg-green-100 text-green-800',
      permissions: ['Satellite Data Analysis', 'Image Processing', 'Data Interpretation', 'Report Generation']
    },
    'Web GIS Developer': {
      color: 'bg-purple-100 text-purple-800',
      permissions: ['Web Development', 'API Integration', 'Frontend Design', 'System Maintenance']
    },
    'Spatial Database Administrator': {
      color: 'bg-yellow-100 text-yellow-800',
      permissions: ['Database Management', 'Data Security', 'Backup & Recovery', 'Performance Optimization']
    },
    'ICT / GIS Trainer': {
      color: 'bg-red-100 text-red-800',
      permissions: ['Training Programs', 'Curriculum Development', 'User Support', 'Documentation']
    }
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === 'All' || user.role === selectedRole
    return matchesSearch && matchesRole
  })

  return (
    <div className="p-6 bg-gray-50 h-full overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600">Manage GIS team members and their roles</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <UserPlus className="h-4 w-4" />
          <span>Add New User</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            Total Users: {filteredUsers.length}
          </div>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${rolePermissions[user.role]?.color}`}>
                    {user.role}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Joined: {user.joinDate}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {user.status}
                </span>
                
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Role Permissions Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Role Permissions Matrix</span>
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Active Users
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(rolePermissions).map(([role, config]) => (
                <tr key={role}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-sm font-medium rounded-full ${config.color}`}>
                      {role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {config.permissions.map((permission, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {users.filter(user => user.role === role).length}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserManagement