import Image from 'react-bootstrap/Image';
import Logo from "../../../../assets/img/Logo.png";
import {MarkerContainer} from "./style";
import { Marker, Popup } from "react-leaflet";

const MarkerMap =({lat, long}) => {

    return (
        <MarkerContainer>
            <Image src={Logo} roundedCircle width="50" height="50"/>
            <Marker position={[lat, long]}>
                <Popup>
                <h3>El Faro</h3>  <br /> Faro Recalada 20.
                </Popup>
            </Marker>
        </MarkerContainer>   
    );
  }
  
export default MarkerMap;
  