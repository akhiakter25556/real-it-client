import { useState } from 'react'
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  Award,
  Plus,
  Eye,
  Edit,
  Download
} from 'lucide-react'

const TrainingManagement = () => {
  const [activeTab, setActiveTab] = useState('courses')

  const trainingCourses = [
    {
      id: 1,
      title: 'GIS Fundamentals for Government Officers',
      description: 'Basic GIS concepts, map reading, and spatial analysis for administrative decision making',
      duration: '5 days',
      level: 'Beginner',
      instructor: 'Rashida Begum',
      participants: 25,
      maxParticipants: 30,
      startDate: '2024-01-15',
      endDate: '2024-01-19',
      status: 'Upcoming',
      location: 'ICTD Lab, Dhaka'
    },
    {
      id: 2,
      title: 'Remote Sensing & Satellite Data Analysis',
      description: 'Advanced satellite imagery analysis, change detection, and environmental monitoring',
      duration: '7 days',
      level: 'Advanced',
      instructor: 'Fatima Khatun',
      participants: 18,
      maxParticipants: 20,
      startDate: '2024-02-01',
      endDate: '2024-02-07',
      status: 'Registration Open',
      location: 'Regional Office, Chittagong'
    },
    {
      id: 3,
      title: 'Web GIS Development Workshop',
      description: 'Building interactive web-based GIS applications using modern technologies',
      duration: '10 days',
      level: 'Intermediate',
      instructor: 'Md. Karim Uddin',
      participants: 15,
      maxParticipants: 25,
      startDate: '2024-02-15',
      endDate: '2024-02-26',
      status: 'Planning',
      location: 'ICTD Lab, Dhaka'
    },
    {
      id: 4,
      title: 'Spatial Database Management',
      description: 'PostGIS, spatial queries, database optimization, and data management best practices',
      duration: '6 days',
      level: 'Advanced',
      instructor: 'Nasir Hossain',
      participants: 12,
      maxParticipants: 15,
      startDate: '2024-03-01',
      endDate: '2024-03-06',
      status: 'Registration Open',
      location: 'Regional Office, Sylhet'
    }
  ]

  const trainingStats = [
    { label: 'Total Courses', value: '24', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Active Participants', value: '156', icon: Users, color: 'bg-green-500' },
    { label: 'Completed Sessions', value: '18', icon: Award, color: 'bg-purple-500' },
    { label: 'Training Hours', value: '480', icon: Clock, color: 'bg-orange-500' }
  ]

  const upcomingSchedule = [
    {
      date: '2024-01-15',
      time: '09:00 AM',
      course: 'GIS Fundamentals',
      type: 'Course Start',
      location: 'Dhaka'
    },
    {
      date: '2024-01-18',
      time: '02:00 PM',
      course: 'Advanced Mapping',
      type: 'Practical Session',
      location: 'Chittagong'
    },
    {
      date: '2024-01-22',
      time: '10:00 AM',
      course: 'Data Analysis',
      type: 'Assessment',
      location: 'Sylhet'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming': return 'bg-blue-100 text-blue-800'
      case 'Registration Open': return 'bg-green-100 text-green-800'
      case 'Planning': return 'bg-yellow-100 text-yellow-800'
      case 'Completed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6 bg-gray-50 h-full overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Training Management</h1>
          <p className="text-gray-600">GIS Training Programs & Capacity Building</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>New Training Course</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {trainingStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'courses', label: 'Training Courses' },
              { id: 'schedule', label: 'Schedule' },
              { id: 'participants', label: 'Participants' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'courses' && (
            <div className="space-y-6">
              {trainingCourses.map((course) => (
                <div key={course.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-3">{course.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{course.participants}/{course.maxParticipants} participants</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{course.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{course.startDate} to {course.endDate}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(course.status)}`}>
                        {course.status}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Instructor:</span> {course.instructor}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex items-center space-x-1 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
                        <Eye className="h-4 w-4" />
                        <span>View</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded">
                        <Edit className="h-4 w-4" />
                        <span>Edit</span>
                      </button>
                      <button className="flex items-center space-x-1 px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded">
                        <Download className="h-4 w-4" />
                        <span>Export</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Training Schedule</h3>
              {upcomingSchedule.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.course}</h4>
                    <p className="text-sm text-gray-600">{item.type}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <div>{item.date}</div>
                    <div>{item.time}</div>
                    <div className="flex items-center space-x-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'participants' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Participants Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Government Officers</h4>
                  <p className="text-2xl font-bold text-blue-600">89</p>
                  <p className="text-sm text-blue-700">Active participants</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 mb-2">Technical Staff</h4>
                  <p className="text-2xl font-bold text-green-600">45</p>
                  <p className="text-sm text-green-700">Active participants</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 mb-2">External Trainees</h4>
                  <p className="text-2xl font-bold text-purple-600">22</p>
                  <p className="text-sm text-purple-700">Active participants</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrainingManagement