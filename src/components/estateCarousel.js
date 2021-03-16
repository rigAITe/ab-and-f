import React from 'react';

import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide1 from '../images/eslide1.jpg'
import Slide2 from '../images/eslide2.jpg'

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
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export { Carousel }

