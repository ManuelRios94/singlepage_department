import {BodyContainer} from "./style";
import GalleryCarousel from "./gallery-carousel";
import TitleRefleaction from "../common/title-reflection";
import Map from "./map";
import Details from "./details";
import Contact from "./contact";
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
          <Row id="details">
            <Col>
            <TitleRefleaction text="Detalles" />
            </Col>
          </Row>
          <Row >
            <Col/>
            <Col xs={10}>
              <Details />
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
          <br/>
          <Row id="contact">
            <Col>
            <TitleRefleaction text="Contacto" />
            </Col>
          </Row>
          <Row >
            <Col/>
            <Col xs={10}>
              <Contact />
            </Col>
            <Col/>
          </Row>
        </Container>
      </BodyContainer>
    );
  }
  
export default Body;
  