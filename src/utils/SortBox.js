import PropTypes from "prop-types";

function SortBox({ sortOption, setSortOption }) {
  return (
    <div className="sortingBox d-flex align-items-center">
      <label htmlFor="productSort" className="form-label mb-0">
        Sort&nbsp;by:
      </label>
      <select
        name="productSort"
        id="productSort"
        className="form-select rounded-0"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="default">All Products</option>
        <option value="bestSelling">Best Selling</option>
        <option value="newestFirst">Newest First</option>
        <option value="alphabeticalOrder">Alphabetical Order</option>
        <option value="priceLowtoHigh">Price: Low to High</option>
        <option value="priceHightoLow">Price: High to Low</option>
      </select>
    </div>
  );
}

SortBox.propTypes = {
  sortOption: PropTypes.string.isRequired,
  setSortOption: PropTypes.func.isRequired,
};

export default SortBox;
