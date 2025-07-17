import { useState } from "react";
import Slider from "react-slick";

function ProductGallery({ images = [], altText = "Product Image" }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const mainSettings = {
    asNavFor: nav2,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const thumbSettings = {
    asNavFor: nav1,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: false,
    arrows: false,
    dots: false,
    vertical: false,
    infinite: false,
  };

  return (
    <div className="productSliderBox">
      <Slider
        {...mainSettings}
        className="productSlider productSlider_slide"
        ref={(slider1) => setNav1(slider1)}
      >
        {images.map((img, index) => (
          <div key={`slide-${index}`}>
            <img
              src={`${img}`}
              alt={`${altText} Slide ${index + 1}`}
              className="img-fluid"
            />
          </div>
        ))}
      </Slider>
      <Slider
        {...thumbSettings}
        className="productSlider productSlider_thumb"
        ref={(slider2) => setNav2(slider2)}
      >
        {images.map((img, index) => (
          <div key={`thumb-${index}`}>
            <img
              src={`${img}`}
              alt={`${altText} Thumbnail ${index + 1}`}
              className="img-fluid"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductGallery;
