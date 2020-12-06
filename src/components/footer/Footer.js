import {FooterContainer} from "./style";
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
      <FooterContainer>
        <Navbar bg="dark" variant="dark">
        <Navbar.Text>
          &copy; {new Date().getFullYear()} Copyright: Manuel Igancio Rios
        </Navbar.Text>
        </Navbar>
      </FooterContainer>
    );
  }
  
export default Footer;
  