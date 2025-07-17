import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import Pagination from "../utils/Pagination";

const ITEMS_PER_PAGE = 8;

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const totalPages = Math.ceil(wishlist.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = wishlist.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <main>
      <AnnouncementBar />
      <Header />
      <Breadcrumb
        currentPage="Wishlist"
        items={[{ label: "Home", path: "/" }, { label: "Wishlist" }]}
      />
      <section className="products wishlistPage">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row prod_row" id="productList">
                {paginatedItems.length > 0 ? (
                  paginatedItems.map((product) => (
                    <div className="col-6 col-md-3" key={product.id}>
                      <ProductCard
                        product={product}
                        showBadge={false}
                        onRemove={removeFromWishlist}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <h4 className="text-capitalize mb-3">
                      Your Wishlist is Empty!
                    </h4>
                    <p className="text-muted">
                      Looks like you haven’t added anything yet.
                    </p>
                    <Link
                      to="/products"
                      className="text-decoration-none text-uppercase text-center common_btn continueShop_btn"
                    >
                      Start Shopping
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          {wishlist.length > ITEMS_PER_PAGE && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Wishlist;
