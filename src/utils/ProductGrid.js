import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import PropTypes from "prop-types";

// Sorting logic
const sortProducts = (productsToSort, sortOption) => {
  switch (sortOption) {
    case "bestSelling":
      return [...productsToSort].sort((a, b) => b.sales - a.sales);
    case "newestFirst":
      return [...productsToSort].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    case "alphabeticalOrder":
      return [...productsToSort].sort((a, b) => a.name.localeCompare(b.name));
    case "priceLowtoHigh":
      return [...productsToSort].sort((a, b) => a.price - b.price);
    case "priceHightoLow":
      return [...productsToSort].sort((a, b) => b.price - a.price);
    default:
      return productsToSort;
  }
};

function ProductGrid({
  products = [],
  currentMinPrice,
  currentMaxPrice,
  sortOption,
  currentPage,
  setCurrentPage,
  setTotalPages,
  filters = {},
}) {
  const itemsPerPage = 9;
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.price >= currentMinPrice && product.price <= currentMaxPrice
    );

    // Filter by categories
    if (filters.categories?.length) {
      filtered = filtered.filter((product) => {
        const productCategories = Array.isArray(product.categories)
          ? product.categories
          : [product.categories];
        return productCategories.some((cat) =>
          filters.categories.includes(cat)
        );
      });
    }

    // Filter by brands
    if (filters.brands?.length) {
      filtered = filtered.filter((product) =>
        filters.brands.includes(product.brand)
      );
    }

    // Filter by gender
    if (filters.gender?.length) {
      filtered = filtered.filter((product) => {
        const genderValue = Array.isArray(product.gender)
          ? product.gender
          : [product.gender];
        return genderValue.some((g) => filters.gender.includes(g));
      });
    }

    // Filter by offers
    if (filters.offers?.length) {
      filtered = filtered.filter((product) =>
        (product.offers || []).some((offer) => filters.offers.includes(offer))
      );
    }

    // Filter by discount
    if (filters.discount?.length) {
      filtered = filtered.filter((product) =>
        filters.discount.includes(product.discount)
      );
    }

    // Filter by rating
    if (filters.rating?.length) {
      filtered = filtered.filter((product) =>
        filters.rating.some((rating) => {
          if (rating === "threeStar") return product.rating >= 3;
          if (rating === "fourStar") return product.rating >= 4;
          return true;
        })
      );
    }

    const sorted = sortProducts(filtered, sortOption);
    const newTotalPages = Math.ceil(sorted.length / itemsPerPage);
    if (currentPage > newTotalPages) {
      setCurrentPage(1);
    }
    setFilteredProducts(sorted);
    setTotalPages(newTotalPages);

    if (setTotalPages) {
      setTotalPages(Math.ceil(sorted.length / itemsPerPage));
    }
  }, [
    products,
    currentMinPrice,
    currentMaxPrice,
    sortOption,
    filters,
    currentPage,
    setCurrentPage,
    setTotalPages,
  ]);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="row prod_row" id="productList">
      {paginatedProducts.length > 0 ? (
        paginatedProducts.map((product) => (
          <div className="col-6 col-md-6 col-lg-4" key={product.id}>
            <ProductCard product={product} showBadge={false} />
          </div>
        ))
      ) : (
        <p className="h5 text-center text-capitalize mt-3">
          That's all! No more products.
        </p>
      )}
    </div>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      price: PropTypes.number,
      categories: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string,
      ]),
      brand: PropTypes.string,
      gender: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      offers: PropTypes.arrayOf(PropTypes.string),
      discount: PropTypes.string,
      rating: PropTypes.number,
      sales: PropTypes.number,
      date: PropTypes.string,
    })
  ).isRequired,
  currentMinPrice: PropTypes.number.isRequired,
  currentMaxPrice: PropTypes.number.isRequired,
  sortOption: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setTotalPages: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string),
    brands: PropTypes.arrayOf(PropTypes.string),
    gender: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    offers: PropTypes.arrayOf(PropTypes.string),
    discount: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ProductGrid;
