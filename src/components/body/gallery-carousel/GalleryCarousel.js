import {GalleryCarouselContainer} from "./style";
import Living2 from "../../../assets/img/Living-2.jpeg";
import Dormitorio2 from "../../../assets/img/Dormitorio-Doble-2.jpeg";
import DormitorioSimple1 from "../../../assets/img/Dormitorio-Simple-1.jpeg";

import ImageGallery from 'react-image-gallery';
 
const images = [
    {
        original: Living2,
        thumbnail: Living2,
    },
    {
        original: Dormitorio2,
        thumbnail: Dormitorio2,
    },
    {
        original: DormitorioSimple1,
        thumbnail: DormitorioSimple1,
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
  