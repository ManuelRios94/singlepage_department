import {BodyContainer} from "./style";
import GalleryCarousel from "./gallery-carousel";
import TitleRefleaction from "../common/title-reflection";
import Map from "./map";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Body = () => {
    return (
      <BodyContainer>
        <Row id="home">
          <Col/>
          <Col xs={6}>
            <GalleryCarousel />
            </Col>
          <Col/>
        </Row>
        <br/>
        <Row id="localization">
          <Col>
          <TitleRefleaction text="Localizacion" />
          </Col>
        </Row>
        <Row >
          <Col/>
          <Col xs={6}>
            <Map />
          </Col>
          <Col/>
        </Row>
      </BodyContainer>
    );
  }
  
export default Body;
  