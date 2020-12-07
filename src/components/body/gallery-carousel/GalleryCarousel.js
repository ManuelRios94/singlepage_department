import {GalleryCarouselContainer} from "./style";
import Living1 from "../../../assets/img/Living-1.jpeg";
import Living2 from "../../../assets/img/Living-2.jpeg";
import Dormitorio1 from "../../../assets/img/Dormitorio-Doble-1.jpeg";
import Dormitorio2 from "../../../assets/img/Dormitorio-Doble-2.jpeg";
import DormitorioSimple1 from "../../../assets/img/Dormitorio-Simple-1.jpeg";
import Bano1 from "../../../assets/img/Bano-1.jpeg";
import Bano2 from "../../../assets/img/Bano-2.jpeg";
import Cocina1 from "../../../assets/img/Cocina-1.jpeg";
import Cocina2 from "../../../assets/img/Cocina-2.jpeg";
import Terraza1 from "../../../assets/img/Terraza-1.jpeg";
import Terraza2 from "../../../assets/img/Terraza-2.jpeg";
import Calle1 from "../../../assets/img/Calle-1.jpg";
import Calle2 from "../../../assets/img/Calle-2.jpg";

import ImageGallery from 'react-image-gallery';
 
const images = [
    {
      original: Living2,
      thumbnail: Living2,
    },
    {
      original: Living1,
      thumbnail: Living1,
    },
    {
      original: Dormitorio1,
      thumbnail: Dormitorio1,
    },
    {
      original: Dormitorio2,
      thumbnail: Dormitorio2,
    },
    {
      original: DormitorioSimple1,
      thumbnail: DormitorioSimple1,
    },
    {
      original: Cocina1,
      thumbnail: Cocina1,
    },
    {
      original: Cocina2,
      thumbnail: Cocina2,
    },
    {
      original: Bano1,
      thumbnail: Bano1,
    },
    {
      original: Bano2,
      thumbnail: Bano2,
    },
    {
      original: Terraza1,
      thumbnail: Terraza1,
    },
    {
      original: Terraza2,
      thumbnail: Terraza2,
    },
    {
      original: Calle1,
      thumbnail: Calle1,
    },
    {
      original: Calle2,
      thumbnail: Calle2,
    },
];

const GalleryCarousel = () => {
    return (
      <GalleryCarouselContainer>
        <ImageGallery items={images} />
      </GalleryCarouselContainer>
    );
  }
  
export default GalleryCarousel;
  