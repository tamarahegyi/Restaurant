import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Myimage from "../assets/bjorn-agerbeek-_KB_k0gZOfY-unsplash.jpg";
import Myimage2 from "../assets/isak-gundrosen-dVCivGs0bj0-unsplash.jpg";
import Myimage3 from "../assets/lisette-harzing-3TYEx3itURA-unsplash.jpg";
import Myimage6 from "../assets/sander-traa-Y9utJEN9Zm8-unsplash.jpg";
import "./LandingPage.css";
function carousel() {
  return (
    <div className="carousel-container">
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={4}
      visibleSlides={1}
    >
        <div className="carousel">
        <div className="back-next-button">
        <ButtonBack className="back-button-carousel">Back</ButtonBack>
        <ButtonNext className="next-button-carousel">Next</ButtonNext>
        </div>
      <Slider  className="photos">
        <Slide index={0}>
          <img src={Myimage} className="photo1" alt="spain" />
        </Slide>
        <Slide index={1}>
          <img src={Myimage2} className="photo1"alt="spain" />
        </Slide>
        <Slide index={2}>
          <img src={Myimage3}className="photo1" alt="spain" />
        </Slide>
        <Slide index={5}>
          <img src={Myimage6} className="photo1" alt="spain" />
        </Slide>
      </Slider>
      </div>
    </CarouselProvider>
    </div>
  );
}

export default carousel;
