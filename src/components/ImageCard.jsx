import React from 'react'
import './ImageCard.css';
const ImageCard = (props) => {
  return (
    <div className='option'>
        <img src={props.image} alt="logo" />
        <h2>{props.title}</h2>
    </div>
  )
}

export default ImageCard