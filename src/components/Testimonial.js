import ReviewCarousel from "../components/ReviewCarousel";

function Testimonial() {
	return (
		<section className="testimonials">
	        <div className="container">
	          <div className="row justify-content-center">
	            <div className="col-md-10 col-lg-8">
	              <div className="reviews">
	                <p className="text-center text-uppercase secSubhead">Stitch Stories</p>
	                <p className="text-center text-capitalize secTitleNew">
	                  From fabric to fit, they're obsessed — and here's why. <br />Our
	                  pieces don't just look good. They live well.
	                </p>
	                <ReviewCarousel />
	              </div>
	            </div>
	          </div>
	        </div>
      	</section>
	);
}

export default Testimonial;
