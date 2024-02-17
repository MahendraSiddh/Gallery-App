import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import './CarouselImage.css'
function CarouselImage(props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className='carousel'>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        
        <div className="naturePhoto" >
          <img src={props.images[0]}></img>
        </div>
        <div className="naturePhoto" >
          <img src={props.images[1]}></img>
        </div>
        <div className="naturePhoto" >
          <img src={props.images[2]}></img>
        </div>
        <div className="naturePhoto" >
          <img src={props.images[3]}></img>
        </div>
        <div className="naturePhoto" >
          <img src={props.images[4]}></img>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default CarouselImage;