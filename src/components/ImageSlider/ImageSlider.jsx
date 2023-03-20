import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  {sliderData}  from './sliderData';
import './ImageSlider.scss';
import { Link } from 'react-router-dom';
export default function ImageSlider(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
  return(
    <Carousel responsive={responsive}>
        {sliderData.map((slide, index) => {
            return <div key={index} className='cardContainer'>
                <div>
                    <img src={slide.imgUrl} alt={slide.title} />
                </div>
                <div className='cardDescriptionContainer'>
                    <p className='cardTitle'>{slide.title}</p>
                    <p className='cardDesc'>{slide.description}</p>
                    <Link to={`/${slide.title.toLocaleLowerCase()}`} className='cardButton'>{slide.button}</Link>

                </div>
            </div>
        })}
        <div className='cardContainer'>
                <div>
                    <img src='./images/coming-soon-img.png' alt='coming soon card' />
                </div>
                <div className='cardDescriptionContainer'>
                    <p className='cardTitle'>12 Week Program</p>
                    <p className='cardDesc'>Discover Your True Self...</p>
                    <p className='comingSoonBtn'>Coming soon</p>
                </div>
            </div>
    </Carousel>
  )
};


