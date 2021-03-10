import React from 'react';

import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide1 from '../images/islide1.jpg'
import Slide2 from '../images/islide2.jpg'
import Slide3 from '../images/islide3.jpg'
import Slide4 from '../images/islide4.jpg'

const items = [
  {
    src: Slide1,
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: Slide2,
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: Slide3,
    altText: 'Slide 3',
    key: '3'
  },
  {
    src: Slide4,
    altText: 'Slide 4',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export { Carousel }

