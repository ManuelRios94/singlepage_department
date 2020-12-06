import {MapContainer} from "./style";
import GoogleMapReact from 'google-map-react';
import {DEPARTMENT_LAT, DEPARTMENT_LONG, ZOOM_MAP} from "../../../utils/const";
import Marker from "./marker";

const Map = () => {

    const defaultProps = {
        center: {
          lat: DEPARTMENT_LAT,
          lng: DEPARTMENT_LONG
        },
        zoom: ZOOM_MAP
    };

    return (
      <MapContainer style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker
            lat={DEPARTMENT_LAT}
            lng={DEPARTMENT_LONG}
          />
        </GoogleMapReact>
      </MapContainer>
    );
  }
  
export default Map;
  