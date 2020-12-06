import {HeaderContainer} from "./style";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Logo from "../../assets/img/Logo.png";

const Header = () => {
    return (
      <HeaderContainer>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Image src={Logo} roundedCircle width="50" height="50"/>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#details">Detalles</Nav.Link>
            <Nav.Link href="#galery">Galería</Nav.Link>
            <Nav.Link href="#localization">Localización</Nav.Link>
          </Nav>
        </Navbar>
      </HeaderContainer>
    );
  }
  
export default Header;
  