import { Link } from "react-router-dom";
import HeaderOnlyLogo from "../components/HeaderOnlyLogo";
import Footer from "../components/Footer";
import NewsletterForm from "../components/NewsletterForm";

function ThankYou() {
  return (
    <main>
      <HeaderOnlyLogo />
      <section className="breadcrumb mb-0 thanks_breadcrumb">
        <div className="container text-center">
          <p className="text-uppercase mb-0">Thank you</p>
        </div>
      </section>
      <section className="thankyou_content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7">
              <img
                src="/assets/images/check.svg"
                alt="CheckMark"
                className="img-fluid d-block mx-auto checkmark"
              />

              <p className="thanks_title text-center">
                Thank You for Your Order!
              </p>

              <p className="thanks_text text-center">
                Your style just leveled up. We're prepping your order and will
                keep you posted. Your order is on the way and we're hyped to see
                how you wear it. We'll notify you as soon as they're out for
                delivery. In the meantime, follow us on Instagram @streetstitch
                for early drops and style inspiration.
              </p>

              <p className="thanks_text text-center">
                You'll receive an email shortly with your order details and
                tracking information. If you have any questions, feel free to
                reach out at{" "}
                <a
                  className="text-decoration-none"
                  href="mailto:support@streetstitch.com"
                >
                  support@streetstitch.com
                </a>{" "}
                or call us at{" "}
                <a className="text-decoration-none" href="tel:559-555-3210">
                  +1 (559) 555-3210
                </a>
              </p>

              <div className="continue_shopBox text-center">
                <p>Let's Stitch Some More!!!</p>
                <Link
                  to="/products"
                  className="text-decoration-none text-uppercase common_btn"
                >
                  Explore More
                </Link>
              </div>

              <div className="newsletter_box">
                <img
                  src="/assets/images/envelope.svg"
                  className="img-fluid d-block mx-auto"
                  alt="Newsletter Icon"
                />
                <p className="newsletter_title text-center">
                  Stay sharp. Stay stitched.
                </p>
                <p className="newsletter_text text-center">
                  Join our newsletter to get exclusive drops, <br />
                  early access, and style inspiration.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default ThankYou;
