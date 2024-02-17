import React, { useMemo } from 'react'
import axios from 'axios';
import './Images.css';
import { useState } from 'react';
export const Images = () => {

   const [images, setImages] = useState([]);

    const fetchAPI = async()=>{
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=YbnWcUQHyapMRVl5x8yCOn_I9inhl0dTOpCfNjy99no');
    const data = response.data;
    setImages(data);
    }
    useMemo(
      fetchAPI,[]
    )
  return (
        images.map((image)=>(
             <div className='photo'>
                <img  src={image.urls.small} alt='photo'></img>
              </div>
           ))
  )
}
