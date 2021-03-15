import React from 'react';

import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide1 from '../images/hslide1.jpg'
import Slide2 from '../images/hslide2.jpg'
import Slide3 from '../images/eslide1.jpg'
import Slide4 from '../images/eslide2.jpg'
import Slide5 from '../images/islide3.jpg'
import Slide6 from '../images/islide4.jpg'
import Slide7 from '../images/explorePix.jpg'


const items = [
  {
    src: Slide1,
    altText: 'Slide 1',
    captionText: '',
    key: '1'
  },
  {
    src: Slide2,
    altText: 'Slide 2',
    captionText: '',
    key: '2'
  },
  {
    src: Slide3,
    altText: 'Slide 3',
    captionText: '',
    key: '3'
  },
  {
    src: Slide4,
    altText: 'Slide 4',
    captionText: '',
    key: '4'
  },
  {
    src: Slide5,
    altText: 'Slide 5',
    captionText: '',
    key: '5'
  },
  {
    src: Slide6,
    altText: 'Slide 6',
    captionText: '',
    key: '6'
  },
  {
    src: Slide7,
    altText: 'Slide 7',
    captionText: '',
    key: '7'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export { Carousel }

