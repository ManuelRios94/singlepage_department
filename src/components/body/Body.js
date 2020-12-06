import {BodyContainer} from "./style";
import GalleryCarousel from "./gallery-carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Body = () => {
    return (
      <BodyContainer>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <GalleryCarousel href="#home"/>
            </Col>
          <Col></Col>
        </Row>
      </BodyContainer>
    );
  }
  
export default Body;
  