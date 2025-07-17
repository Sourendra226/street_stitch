import { useState, useEffect } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import FilterSidebar from "../utils/FilterSidebar";
import SortBox from "../utils/SortBox";
import ProductGrid from "../utils/ProductGrid";
import Pagination from "../utils/Pagination";
import PropTypes from "prop-types";

function Products({ allProducts = [], priceRange = { min: 0, max: 99999 } }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    gender: [],
    offers: [],
    discount: [],
    rating: [],
  });
  const [priceRangeState, setPriceRange] = useState(priceRange);
  const [sortOption, setSortOption] = useState(() => {
    return localStorage.getItem("sortOption") || "default";
  });

  const clearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      gender: [],
      offers: [],
      discount: [],
      rating: [],
    });
    setPriceRange(priceRange); // reset price range to default
  };

  // Save sort option to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("sortOption", sortOption);
  }, [sortOption]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortOption, priceRangeState]);

  return (
    <main>
      <AnnouncementBar />
      <Header />
      <Breadcrumb
        currentPage="Shop"
        items={[{ label: "Home", path: "/" }, { label: "Shop" }]}
      />
      <section className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                clearFilters={clearFilters}
                minPrice={priceRangeState.min}
                maxPrice={priceRangeState.max}
                setPriceRange={setPriceRange}
              />
            </div>
            <div className="col-md-8 col-lg-9">
              <div className="row">
                <div className="col-12">
                  <div className="productListHead d-flex justify-content-between align-items-center">
                    <p>All Products</p>
                    <SortBox
                      sortOption={sortOption}
                      setSortOption={setSortOption}
                    />
                  </div>
                </div>
              </div>
              <ProductGrid
                products={allProducts || []}
                currentMinPrice={priceRangeState.min}
                currentMaxPrice={priceRangeState.max}
                sortOption={sortOption}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setTotalPages={setTotalPages}
                filters={filters}
              />
            </div>
          </div>
          {totalPages > 1 && (
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

Products.propTypes = {
  allProducts: PropTypes.array,
  priceRange: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
};

export default Products;
