import React from 'react'
import { useState,useMemo } from 'react';
import CarouselImage from './CarouselImage'
import axios from 'axios';
import nature1 from '../images/nature1.jpg'
import nature2 from '../images/nature2.jpeg'
import nature3 from '../images/nature3.jpeg'
import nature4 from '../images/nature4.jpeg'
import nature5 from '../images/nature5.jpeg'
const Carouseler = () => {

    const images =[nature1,nature2,nature3,nature4,nature5]
  return (
    <div>
        <CarouselImage images={images}></CarouselImage>
    </div>
  )
}
export default Carouseler