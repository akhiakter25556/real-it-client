import { useState } from 'react'
import { 
  Activity, 
  Map, 
  BarChart3, 
  PieChart, 
  TrendingUp,
  MapPin,
  Layers,
  Calculator,
  Target,
  Zap
} from 'lucide-react'

const SpatialAnalysis = () => {
  const [activeAnalysis, setActiveAnalysis] = useState('buffer')

  const analysisTools = [
    {
      id: 'buffer',
      name: 'Buffer Analysis',
      description: 'Create buffer zones around geographic features',
      icon: Target,
      category: 'Proximity Analysis'
    },
    {
      id: 'overlay',
      name: 'Overlay Analysis',
      description: 'Combine multiple spatial datasets',
      icon: Layers,
      category: 'Spatial Operations'
    },
    {
      id: 'density',
      name: 'Density Analysis',
      description: 'Calculate population and feature density',
      icon: BarChart3,
      category: 'Statistical Analysis'
    },
    {
      id: 'network',
      name: 'Network Analysis',
      description: 'Route optimization and accessibility analysis',
      icon: Activity,
      category: 'Network Operations'
    },
    {
      id: 'terrain',
      name: 'Terrain Analysis',
      description: 'Slope, aspect, and elevation analysis',
      icon: TrendingUp,
      category: 'Topographic Analysis'
    },
    {
      id: 'hotspot',
      name: 'Hotspot Analysis',
      description: 'Identify spatial clusters and patterns',
      icon: Zap,
      category: 'Pattern Analysis'
    }
  ]

  const analysisResults = [
    {
      title: 'Population Density Analysis - Dhaka',
      type: 'Density Analysis',
      date: '2024-01-20',
      status: 'Completed',
      result: 'High density areas identified in Dhanmondi, Gulshan, and Uttara'
    },
    {
      title: 'Flood Risk Buffer Analysis',
      type: 'Buffer Analysis', 
      date: '2024-01-18',
      status: 'Completed',
      result: '500m buffer zones created around major rivers'
    },
    {
      title: 'School Accessibility Network Analysis',
      type: 'Network Analysis',
      date: '2024-01-15',
      status: 'In Progress',
      result: 'Analyzing optimal school locations for rural areas'
    }
  ]

  const districtLevelData = [
    { district: 'Dhaka', population: 9540000, area: 1463.60, density: 6520 },
    { district: 'Chittagong', population: 5252000, area: 5282.98, density: 994 },
    { district: 'Comilla', population: 6000000, area: 3085.17, density: 1945 },
    { district: 'Sylhet', population: 3500000, area: 3490.40, density: 1003 }
  ]

  const upazilaData = [
    { upazila: 'Dhanmondi', district: 'Dhaka', population: 220000, area: 4.2 },
    { upazila: 'Gulshan', district: 'Dhaka', population: 180000, area: 8.5 },
    { upazila: 'Uttara', district: 'Dhaka', population: 350000, area: 18.6 },
    { upazila: 'Agrabad', district: 'Chittagong', population: 150000, area: 12.3 }
  ]

  return (
    <div className="p-6 bg-gray-50 h-full overflow-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Spatial & Thematic Data Analysis</h1>
        <p className="text-gray-600">Advanced GIS analysis tools for spatial data processing</p>
      </div>

      {/* Analysis Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {analysisTools.map((tool) => {
          const Icon = tool.icon
          return (
            <div 
              key={tool.id}
              onClick={() => setActiveAnalysis(tool.id)}
              className={`bg-white rounded-lg shadow p-6 cursor-pointer transition-all hover:shadow-lg ${
                activeAnalysis === tool.id ? 'ring-2 ring-blue-500 border-blue-200' : ''
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                  <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {tool.category}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </div>
          )
        })}
      </div>

      {/* Administrative Level Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* District Level Data */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span>District Level Analysis</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-sm font-medium text-gray-600">District</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Population</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Area (km²)</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Density</th>
                </tr>
              </thead>
              <tbody>
                {districtLevelData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 text-sm font-medium text-gray-900">{item.district}</td>
                    <td className="py-2 text-sm text-gray-600">{item.population.toLocaleString()}</td>
                    <td className="py-2 text-sm text-gray-600">{item.area}</td>
                    <td className="py-2 text-sm text-gray-600">{item.density}/km²</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upazila Level Data */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
            <Map className="h-5 w-5 text-green-600" />
            <span>Upazila Level Analysis</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Upazila</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">District</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Population</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-600">Area</th>
                </tr>
              </thead>
              <tbody>
                {upazilaData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 text-sm font-medium text-gray-900">{item.upazila}</td>
                    <td className="py-2 text-sm text-gray-600">{item.district}</td>
                    <td className="py-2 text-sm text-gray-600">{item.population.toLocaleString()}</td>
                    <td className="py-2 text-sm text-gray-600">{item.area} km²</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Analysis Results */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <Calculator className="h-5 w-5 text-purple-600" />
          <span>Recent Analysis Results</span>
        </h3>
        <div className="space-y-4">
          {analysisResults.map((result, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-900">{result.title}</h4>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  result.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {result.status}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  {result.type}
                </span>
                <span>{result.date}</span>
              </div>
              <p className="text-sm text-gray-700">{result.result}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpatialAnalysis