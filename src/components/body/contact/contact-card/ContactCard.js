
import {ProfileImgContainer, ProfileNameContainer} from "./style";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BoxIconText from "../../../common/box-icon-text";
import WspIco from "../../../../assets/img/Whatsapp.png"
import FbIco from "../../../../assets/img/Facebook.png"
import LilianaImg from "../../../../assets/img/Liliana.jpeg"
import RicardoImg from "../../../../assets/img/Ricardo.jpeg"

const ContactCard = () => {
    return (
        <Card >
        <Card.Header>
            <Container>
                <Row>
                    <Col>
                        <ProfileImgContainer>
                            <Image src={LilianaImg} roundedCircle width="250" height="250" />
                        </ProfileImgContainer>
                        <ProfileNameContainer>
                            <h1>Liliana</h1>
                        </ProfileNameContainer>
                    </Col>
                    <Col>
                        <ProfileImgContainer>
                            <Image src={RicardoImg} roundedCircle width="250" height="250" />
                        </ProfileImgContainer>
                        <ProfileNameContainer>
                            <h1>Ricardo</h1>
                        </ProfileNameContainer>
                    </Col>
                </Row>
            </Container>
        </Card.Header>
        <Card.Body>
            <Card.Subtitle>Medios de Contacto</Card.Subtitle>
            <Container>
                <Row>
                    <Col>
                        <BoxIconText text="El Faro - Departamento Monte Hermoso" link="https://www.facebook.com/El-Faro-Departamento-Monte-Hermoso-100194711967757">
                            <Image src={FbIco} width="50" height="50"/>
                        </BoxIconText>
                    </Col>
                    <Col>
                        <BoxIconText text="+54 02954-15619515">
                            <Image src={WspIco} width="50" height="50"/>
                        </BoxIconText>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
        </Card>
    );
  }
  
export default ContactCard;
  