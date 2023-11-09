'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function CarouselDefault() {
  return (
    <>
      <Carousel
        infiniteLoop={true}

        showStatus={false}
        showArrows={false}
        autoPlay={true}
        showIndicators={false}
        showThumbs={false}
        className="h-[60%] mx-auto rounded-xl py-5"
      >
        <div>
          <img src="/pic.jpg" className="h-[500px]" />

        </div>
        <div>
          <img src="/pic1.jpg" className="h-[500px]" />

        </div>
        <div>
          <img src="/pic2.jpg" className="h-[500px]" />

        </div>
      </Carousel>
    </>
  );
}

export default CarouselDefault