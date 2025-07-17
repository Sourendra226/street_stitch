import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const updateCounts = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
    setWishlistCount(wishlist.length);
  };

  useEffect(() => {
    updateCounts();
  }, [location]);

  useEffect(() => {
    updateCounts(); // initial

    const handleCartUpdate = () => updateCounts();
    const handleWishlistUpdate = () => updateCounts();

    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("wishlistUpdated", handleWishlistUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={isSticky ? "stickyHeader" : ""}>
      <div className="container">
        <div className="d-flex justify-content-md-between align-items-center position-relative header_content">
          <Link to="/" className="text-decoration-none d-block logo">
            <img
              src="/assets/images/logo.svg"
              alt="Street Stitch"
              className="img-fluid"
            />
          </Link>

          {/* Main Navigation */}
          <ul className="main_nav text-uppercase list-inline mb-0 d-none d-md-flex">
            <li className={`list-inline-item ${isActive("/") ? "active" : ""}`}>
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </li>
            <li
              className={`list-inline-item ${
                location.pathname.startsWith("/products") ? "active" : ""
              }`}
            >
              <Link to="/products" className="text-decoration-none">
                Shop
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className="text-decoration-none"
              >
                Categories
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className="text-decoration-none"
              >
                About
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className="text-decoration-none"
              >
                Contact
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className="text-decoration-none"
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Right Navigation */}
          <ul className="right_nav text-uppercase list-inline mb-0">
            <li className="list-inline-item">
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className="text-decoration-none search_btn"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="/login" className="text-decoration-none user_btn">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="/wishlist"
                className="text-decoration-none wishlist_btn"
              >
                <FontAwesomeIcon icon={faHeart} />
                {wishlistCount > 0 && (
                  <span className="d-flex justify-content-center align-items-center wishlistCount">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                to="/cart"
                className="text-decoration-none text-uppercase cart_btn"
              >
                <FontAwesomeIcon icon={faBagShopping} />
                {cartCount > 0 && (
                  <span className="d-flex justify-content-center align-items-center cartCount">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="border-0 d-block d-md-none menuOpenBtn"
            onClick={() => setIsSideNavOpen(true)}
          >
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
        </div>

        {/* Side Nav for Mobile */}
        <div
          className="sideNav"
          style={{ left: isSideNavOpen ? "0" : "-100%" }}
        >
          <ul className="text-uppercase list-unstyled mb-0">
            <li>
              <Link
                to="/"
                onClick={() => setIsSideNavOpen(false)}
                className="text-decoration-none"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={() => setIsSideNavOpen(false)}
                className="text-decoration-none"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className="text-decoration-none"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className="text-decoration-none"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className="text-decoration-none"
              >
                Contact
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
                Search
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => setIsSideNavOpen(false)}
                className="text-decoration-none"
              >
                User
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                onClick={() => setIsSideNavOpen(false)}
                className="text-decoration-none"
              >
                Wishlist
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="border-0 menuCloseBtn"
            onClick={() => setIsSideNavOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
