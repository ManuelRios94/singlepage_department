import Image from 'react-bootstrap/Image';
import Logo from "../../../../assets/img/Logo.png";
import {Title, MarkerContainer} from "./style";

const Marker =() => {

    return (
        <MarkerContainer>
            <Image src={Logo} roundedCircle width="50" height="50"/>
        </MarkerContainer>
    );
  }
  
export default Marker;
  