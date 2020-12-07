import {BodyContainer} from "./style";
import GalleryCarousel from "./gallery-carousel";
import TitleRefleaction from "../common/title-reflection";
import Map from "./map";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Body = () => {
    return (
      <BodyContainer>
        <Container>
          <Row id="home">
            <Col/>
            <Col xs={10}>
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
            <Col xs={10}>
              <Map />
            </Col>
            <Col/>
          </Row>
        </Container>
      </BodyContainer>
    );
  }
  
export default Body;
  