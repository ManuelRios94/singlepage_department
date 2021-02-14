import { FooterContainer } from './style';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <FooterContainer>
      <Navbar bg="dark" variant="dark">
        <Navbar.Text>
          &copy; {new Date().getFullYear()} Copyright: Manuel Ignacio Rios
          <div>
            Estilo de títulos flotantes diseñados por{' '}
            <a href="https://github.com/georgewpark" title="georgewpark">
              George W. Park
            </a>
          </div>
          <div>
            Iconos diseñados por{' '}
            <a href="https://www.flaticon.es/autores/freepik" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.es/" title="Flaticon">
              www.flaticon.es
            </a>
          </div>
        </Navbar.Text>
      </Navbar>
    </FooterContainer>
  );
};

export default Footer;
