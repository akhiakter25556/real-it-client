import { useState } from 'react'
import { MapContainer as LeafletMap, TileLayer, Marker, Popup, Polygon } from 'react-leaflet'
import { Layers } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const MapContainer = () => {
  const [activeLayer, setActiveLayer] = useState('satellite')
  
  // Bangladesh center coordinates
  const bangladeshCenter = [23.6850, 90.3563]
  
  // Sample district boundaries (simplified)
  const dhakaBoundary = [
    [23.7104, 90.4074],
    [23.8103, 90.4125],
    [23.8000, 90.5000],
    [23.7000, 90.5000],
    [23.6500, 90.4500],
    [23.6800, 90.3800]
  ]

  // Sample markers for important locations
  const importantLocations = [
    { id: 1, name: 'ICTD Headquarters', position: [23.7465, 90.3763], type: 'government' },
    { id: 2, name: 'Dhaka University', position: [23.7322, 90.3935], type: 'education' },
    { id: 3, name: 'Hazrat Shahjalal Airport', position: [23.8433, 90.3978], type: 'transport' },
    { id: 4, name: 'Dhaka Medical College', position: [23.7261, 90.3969], type: 'health' }
  ]

  const layerOptions = [
    { id: 'satellite', name: 'Satellite', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' },
    { id: 'street', name: 'Street Map', url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' },
    { id: 'terrain', name: 'Terrain', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}' }
  ]

  return (
    <div className="relative h-full">
      {/* Map Controls - শুধু Layer Selector */}
      <div className="absolute top-4 left-4 z-[1000]">
        <div className="bg-white rounded-lg shadow-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Layers className="h-4 w-4" />
            <span className="font-medium text-sm">Map Layers</span>
          </div>
          <div className="space-y-1">
            {layerOptions.map((layer) => (
              <label key={layer.id} className="flex items-center space-x-2 text-sm">
                <input
                  type="radio"
                  name="layer"
                  value={layer.id}
                  checked={activeLayer === layer.id}
                  onChange={(e) => setActiveLayer(e.target.value)}
                  className="text-blue-600"
                />
                <span>{layer.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Map */}
      <LeafletMap
        center={bangladeshCenter}
        zoom={7}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url={layerOptions.find(l => l.id === activeLayer)?.url}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* District Boundary */}
        <Polygon
          positions={dhakaBoundary}
          pathOptions={{
            color: 'blue',
            weight: 2,
            opacity: 0.8,
            fillColor: 'lightblue',
            fillOpacity: 0.2
          }}
        >
          <Popup>
            <div>
              <h3 className="font-bold">Dhaka 
                district</h3>
              <p>Population: ~9.5 million</p>
              <p>Area: 1,463.60 km²</p>
            </div>
          </Popup>
        </Polygon>

        {/* Important Locations */}
        {importantLocations.map((location) => (
          <Marker key={location.id} position={location.position}>
            <Popup>
              <div>
                <h3 className="font-bold">{location.name}</h3>
                <p className="text-sm text-gray-600 capitalize">{location.type}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </LeafletMap>

      {/* Map Info Panel */}
      <div className="absolute bottom-4 left-4 z-[1000]">
        <div className="bg-white rounded-lg shadow-lg p-3 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-gray-500">Coordinate System:</span>
              <div className="font-medium">WGS84 (EPSG:4326)</div>
            </div>
            <div>
              <span className="text-gray-500">Scale:</span>
              <div className="font-medium">1:1,000,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapContainer