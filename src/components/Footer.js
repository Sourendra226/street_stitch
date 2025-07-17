import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const location = useLocation();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, [location]);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xl-5">
            <div className="footer_column footer_column1">
              <Link to="/" className="text-decoration-none d-block footer_logo">
                <img
                  src="/assets/images/logo.svg"
                  alt="Street Stitch"
                  className="img-fluid"
                />
              </Link>
              <p className="footer_text">
                Street Stitch is a modern unisex clothing and accessories brand
                rooted in style, simplicity, and self-expression. We believe
                fashion should be free of labels and full of personality —
                designed for every body, every day.
              </p>
              <ul className="list-inline mb-0 social_icons">
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none d-flex justify-content-center align-items-center"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none d-flex justify-content-center align-items-center"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none d-flex justify-content-center align-items-center"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none d-flex justify-content-center align-items-center"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-xl-2">
            <div className="footer_column footer_column2">
              <p className="footer_title">Quick Links</p>
              <ul className="list-unstyled mb-0 footer_list">
                <li>
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-decoration-none">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-xl-2">
            <div className="footer_column footer_column3">
              <p className="footer_title">Customer Service</p>
              <ul className="list-unstyled mb-0 footer_list">
                <li>
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none"
                  >
                    Track Your Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-xl-3">
            <div className="footer_column footer_column4">
              <p className="footer_title">Get In Touch</p>
              <p className="footer_text">
                Street Stitch HQ
                <br />
                2409 Green Market Blvd, Suite 102
                <br />
                Fresno, CA 93727
                <br />
                United States
              </p>
              <p className="footer_text support_phone">
                <a
                  href="tel:559-555-3210"
                  className="text-decoration-none d-flex align-items-center"
                >
                  <i className="fa-solid fa-phone"></i> +1 (559) 555-3210
                </a>
              </p>
              <p className="footer_text support_mail">
                <a
                  href="mailto:support@Street Stitch.com"
                  className="text-decoration-none d-flex align-items-center"
                >
                  <i className="fa-solid fa-envelope"></i>
                  support@streetstitch.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-center text-md-start copyright">
              Copyright &copy; {year} Street Stitch. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline mb-0 text-center text-md-end payment_icons">
              <li className="list-inline-item">
                <img
                  src="/assets/images/visa.svg"
                  alt="Visa"
                  className="img-fluid"
                />
              </li>
              <li className="list-inline-item">
                <img
                  src="/assets/images/mastercard.svg"
                  alt="MasterCard"
                  className="img-fluid"
                />
              </li>
              <li className="list-inline-item">
                <img
                  src="/assets/images/discover.svg"
                  alt="Discover"
                  className="img-fluid"
                />
              </li>
              <li className="list-inline-item">
                <img
                  src="/assets/images/amex.svg"
                  alt="American Express"
                  className="img-fluid"
                />
              </li>
              <li className="list-inline-item">
                <img
                  src="/assets/images/paypal.svg"
                  alt="PayPal"
                  className="img-fluid"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
