import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderOnlyLogo = () => {
  const location = useLocation();

  useEffect(() => {}, [location]);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isSticky ? "stickyHeader" : ""}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center position-relative header_content">
          <Link to="/" className="text-decoration-none d-block logo">
            <img
              src="/assets/images/logo.svg"
              alt="Street Stitch"
              className="img-fluid"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderOnlyLogo;
