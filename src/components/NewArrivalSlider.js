import { useEffect } from "react";
import $ from "jquery";
import "slick-carousel";

function NewArrivalSlider({ children }) {
  useEffect(() => {
    function initSlickIfMobileNewArrival() {
      if (window.innerWidth < 768) {
        if (!$(".newArrival_slider").hasClass("slick-initialized")) {
          $(".newArrival_slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
          });
        }
      } else {
        if ($(".newArrival_slider").hasClass("slick-initialized")) {
          $(".newArrival_slider").slick("unslick");
        }
      }
    }

    initSlickIfMobileNewArrival();
    $(window).on("resize", initSlickIfMobileNewArrival);

    return () => {
      $(window).off("resize", initSlickIfMobileNewArrival);
    };
  }, []);

  return <div className="row prod_row newArrival_slider">{children}</div>;
}

export default NewArrivalSlider;
