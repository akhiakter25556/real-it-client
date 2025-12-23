import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MapContainer from './components/MapContainer'
import Dashboard from './components/Dashboard'
import UserManagement from './components/UserManagement'
import TrainingManagement from './components/TrainingManagement'
import './App.css'

function App() {
  const [activeView, setActiveView] = useState('map')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderActiveView = () => {
    switch (activeView) {
      case 'map':
        return <MapContainer />
      case 'dashboard':
        return <Dashboard />
      case 'users':
        return <UserManagement />
      case 'training':
        return <TrainingManagement />
      default:
        return <MapContainer />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        isOpen={sidebarOpen} 
        activeView={activeView} 
        setActiveView={setActiveView}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <main className="flex-1 overflow-hidden">
          {renderActiveView()}
        </main>
      </div>
    </div>
  )
}

export default App