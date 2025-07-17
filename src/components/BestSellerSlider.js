import { useEffect } from "react";
import $ from "jquery";
import "slick-carousel";

function BestSellerSlider({ children }) {
  useEffect(() => {
    function initSlickIfMobileBestSeller() {
      if (window.innerWidth < 768) {
        if (!$(".bestseller_slider").hasClass("slick-initialized")) {
          $(".bestseller_slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
          });
        }
      } else {
        if ($(".bestseller_slider").hasClass("slick-initialized")) {
          $(".bestseller_slider").slick("unslick");
        }
      }
    }

    initSlickIfMobileBestSeller();
    $(window).on("resize", initSlickIfMobileBestSeller);

    return () => {
      $(window).off("resize", initSlickIfMobileBestSeller);
    };
  }, []);

  return <div className="row prod_row bestseller_slider">{children}</div>;
}

export default BestSellerSlider;
