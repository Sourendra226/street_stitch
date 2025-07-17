import Slider from "react-slick";
import reviews from "../data/reviewsData.json";
import ReviewSlide from "./ReviewSlide";

function ReviewCarousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="reviewSlider">
      <Slider {...settings}>
        {reviews.map((review) => (
          <ReviewSlide key={review.id} {...review} />
        ))}
      </Slider>
    </div>
  );
}

export default ReviewCarousel;
