import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import { sliderImages } from "../../Constants/SliderImages";

function Slider() {
  return (
<UncontrolledCarousel className="container"
  items={sliderImages}
 />
  );
}

export default Slider;
