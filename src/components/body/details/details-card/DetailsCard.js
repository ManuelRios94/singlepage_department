
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BoxIconText from "../../../common/box-icon-text";
import { IoIosBed } from 'react-icons/io';
import { IoPeople } from 'react-icons/io5';
import { FaToilet, FaWifi, FaSatelliteDish, FaUmbrellaBeach, FaBed, FaBreadSlice } from 'react-icons/fa';
import { SiDiscogs } from 'react-icons/si';
import { FiMonitor } from 'react-icons/fi';
import { RiFridgeFill } from 'react-icons/ri';
import BalconIco from "../../../../assets/img/Balcon.png";
import MateIco from "../../../../assets/img/Mate.png";
import MicroondasIco from "../../../../assets/img/Microondas.png";
import PlanchaIco from "../../../../assets/img/Plancha.png";
import SecadorIco from "../../../../assets/img/Secador.png";
import VentiladorIco from "../../../../assets/img/Ventilador.png";

const DetailsCard = () => {
    return (
        <Card >
        <Card.Header>
            <Card.Title>El Faro</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Faro Recalada 20, Monte Hermoso, Buenos Aires, Argentina</Card.Subtitle>
            <Card.Text>
            Departamento en pleno centro. Tercer piso balcon a la calle con ascensor. Espectacular vista panoramica. A pasos de la peatonal Dufaur y 2 de la playa.
            </Card.Text>
        </Card.Header>
        <Card.Body>
            <Card.Subtitle>Comodidades</Card.Subtitle>
            <Container>
                <Row>
                    <Col>
                        <BoxIconText text="Para 6 Personas">
                            <IoPeople size={50}/>
                        </BoxIconText>
                    </Col>
                    <Col>
                        <BoxIconText text="2 Habitaciones">
                            <IoIosBed size={50}/>
                        </BoxIconText>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BoxIconText text="2 Baños (1 de Servicio)">
                            <FaToilet size={50}/>
                        </BoxIconText>
                    </Col>
                    <Col>
                        <BoxIconText text="Balcón a la calle">
                            <Image src={BalconIco} width="50" height="50"/>
                        </BoxIconText>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
        <Card.Body>
            <Card.Subtitle>Electrodomésticos</Card.Subtitle>
            <Container >
                <Row>
                    <Col>
                        <BoxIconText text="2 Televisores">
                            <FiMonitor size={50}/>
                        </BoxIconText>
                    </Col>
                    <Col>
                        <BoxIconText text="Heladera con Freezer">
                            <RiFridgeFill size={50}/>
                        </BoxIconText>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BoxIconText text="Somier en ambas Habitaciones">
                            <FaBed size={50}/>
                        </BoxIconText>
                    </Col>
                    <Col>
                        <BoxIconText text="Pava Eléctrica">
                            <Image src={MateIco} width="50" height="50"/>
                        </BoxIconText>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BoxIconText text="Tostadora">
                            <FaBreadSlice size={50}/>
                        </BoxIconText>
                    </Col>
                    <Col>
                        <BoxIconText text="Ventilador de Techo en Living y Piezas">
                            <Image src={VentiladorIco} width="50" height="50"/>
                        </BoxIconText>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BoxIconText text="Microondas">
                            <Image src={MicroondasIco} width="50" height="50"/>
                        </BoxIconText>
                    </Col>
                    <Col>
                        <BoxIconText text="Secador de Pelo">
                            <Image src={SecadorIco} width="50" height="50"/>
                        </BoxIconText>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BoxIconText text="Plancha">
                            <Image src={PlanchaIco} width="50" height="50"/>
                        </BoxIconText>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        </Card.Body>
        <Card.Body>
            <Card.Subtitle>Servicios</Card.Subtitle>
            <Container >
                <Row>
                    <Col>
                        <BoxIconText text="Wi-Fi de Máxima Velocidad">
                            <FaWifi size={50}/>
                        </BoxIconText>
                    </Col>
                    <Col>
                        <BoxIconText text="Cable incorporado">
                            <FaSatelliteDish size={50}/>
                        </BoxIconText>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
        <Card.Body>
            <Card.Subtitle>Extra</Card.Subtitle>
            <Container >
                <Row>
                    <Col>
                        <BoxIconText text="A 2 cuadras de la playa">
                            <FaUmbrellaBeach size={50}/>
                        </BoxIconText>
                    </Col>
                    <Col>
                        <BoxIconText text="Enfrente de Margarita   ">
                            <SiDiscogs size={50}/>
                        </BoxIconText>
                    </Col>
                </Row>
            </Container>
        </Card.Body>
        </Card>
    );
  }
  
export default DetailsCard;
  