import { DEPARTMENT_LAT, DEPARTMENT_LONG, ZOOM_MAP } from '../../../utils/const';
import MarkerMap from './marker-map';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer
      center={[DEPARTMENT_LAT, DEPARTMENT_LONG]}
      zoom={ZOOM_MAP}
      scrollWheelZoom={false}
      style={{ height: '70vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerMap lat={DEPARTMENT_LAT} long={DEPARTMENT_LONG} />
    </MapContainer>
  );
};

export default Map;
