import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

function FilterSidebar({
  filters,
  setFilters,
  clearFilters,
  minPrice,
  maxPrice,
  setPriceRange,
}) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const sliderRef = useRef(null);

  const handleCheckboxChange = (section, value) => {
    setFilters((prev) => ({
      ...prev,
      [section]: prev[section].includes(value)
        ? prev[section].filter((v) => v !== value)
        : [...prev[section], value],
    }));
  };

  useEffect(() => {
    if (!sliderRef.current || sliderRef.current.noUiSlider) return;

    const slider = noUiSlider.create(sliderRef.current, {
      start: [minPrice, maxPrice],
      connect: true,
      range: {
        min: 0,
        max: 3000,
      },
      step: 50,
      tooltips: true,
      format: {
        to: (value) => `$${Math.round(value)}`,
        from: (value) => Number(value.replace("$", "")),
      },
    });

    slider.on("update", (values) => {
      const [min, max] = values.map((v) => Number(v.replace("$", "")));
      setPriceRange({ min, max });
    });

    return () => {
      slider.destroy();
    };
  }, [setPriceRange]);

  useEffect(() => {
    if (sliderRef.current?.noUiSlider) {
      sliderRef.current.noUiSlider.set([minPrice, maxPrice]);
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    if (isMobileFilterOpen) {
      document.body.classList.add("noScroll");
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [isMobileFilterOpen]);

  return (
    <div className="filterSec">
      <div className="filterTitle d-flex justify-content-between align-items-center">
        <p className="openFilter" onClick={() => setIsMobileFilterOpen(true)}>
          Filters <FontAwesomeIcon icon={faSliders} />
        </p>
        <button
          type="button"
          className="text-uppercase d-none d-md-block clearFilter clearFilterDesktop"
          onClick={clearFilters}
        >
          Clear all
        </button>
      </div>
      <hr />

      <div className={`filterBoxContainer ${isMobileFilterOpen ? "show" : ""}`}>
        <div className="filterBtns d-flex justify-content-between align-items-center">
          <button
            className="clearFilter d-block d-md-none text-uppercase"
            onClick={clearFilters}
          >
            Clear all
          </button>
          <button
            className="closeFilter d-block d-md-none text-uppercase"
            onClick={() => setIsMobileFilterOpen(false)}
          >
            Close Filter
          </button>
        </div>

        {/* Categories */}
        <div className="filterBox">
          <p className="filterHead text-uppercase d-flex justify-content-between align-items-center">
            <span>Categories</span> <i className="fa-solid fa-angle-down"></i>
          </p>
          {[
            "Topwear",
            "Bottomwear",
            "Accessories",
            "Winter Wear",
            "Raincoats",
            "Office Wear",
            "Ethnic Wear",
            "Clothing Accessories",
          ].map((category) => (
            <div className="form-check" key={`cat-${category}`}>
              <input
                type="checkbox"
                className="form-check-input rounded-0"
                id={`cat-${category}`}
                checked={filters.categories.includes(category)}
                onChange={() => handleCheckboxChange("categories", category)}
              />
              <label className="form-check-label" htmlFor={`cat-${category}`}>
                {category}
              </label>
            </div>
          ))}
        </div>

        <hr />

        {/* Price Range */}
        <div className="filterBox filterPriceRange">
          <p className="filterHead text-uppercase d-flex justify-content-between align-items-center">
            <span>Price Range</span>
            <i className="fa-solid fa-angle-down"></i>
          </p>
          <div id="priceSlider" ref={sliderRef} className="rounded-0"></div>
          <p className="selectedPrice">
            Selected Range:
            <span className="range-values">
              ${minPrice} - ${maxPrice}
            </span>
          </p>
        </div>

        <hr />

        {/* Brands */}
        <div className="filterBox">
          <p className="filterHead text-uppercase d-flex justify-content-between align-items-center">
            <span>Brands</span> <i className="fa-solid fa-angle-down"></i>
          </p>
          {[
            "Levis",
            "Pepe Jeans",
            "Peter England",
            "Louis Phillipe",
            "Highlander",
            "Sin Denim",
            "Tommy Hilfiger",
            "Turtle",
          ].map((brand) => (
            <div className="form-check" key={`brand-${brand}`}>
              <input
                type="checkbox"
                className="form-check-input rounded-0"
                id={`brand-${brand}`}
                checked={filters.brands.includes(brand)}
                onChange={() => handleCheckboxChange("brands", brand)}
              />
              <label className="form-check-label" htmlFor={`brand-${brand}`}>
                {brand}
              </label>
            </div>
          ))}
        </div>

        <hr />

        {/* Gender */}
        <div className="filterBox">
          <p className="filterHead text-uppercase d-flex justify-content-between align-items-center">
            <span>Gender</span> <i className="fa-solid fa-angle-down"></i>
          </p>
          {["Men", "Women", "Boys", "Girls", "Unisex"].map((gender) => (
            <div className="form-check" key={`gender-${gender}`}>
              <input
                type="checkbox"
                className="form-check-input rounded-0"
                id={`gender-${gender}`}
                checked={filters.gender.includes(gender)}
                onChange={() => handleCheckboxChange("gender", gender)}
              />
              <label className="form-check-label" htmlFor={`gender-${gender}`}>
                {gender}
              </label>
            </div>
          ))}
        </div>

        <hr />

        {/* Offers */}
        <div className="filterBox filterOffers">
          <p className="filterHead text-uppercase d-flex justify-content-between align-items-center">
            <span>Offers</span>
            <i className="fa-solid fa-angle-down"></i>
          </p>
          {["specialPrice", "buySaveMore", "noCostEMI"].map((offer) => (
            <div className="form-check" key={`offer-${offer}`}>
              <input
                type="checkbox"
                className="form-check-input rounded-0"
                id={`offer-${offer}`}
                checked={filters.offers.includes(offer)}
                onChange={() => handleCheckboxChange("offers", offer)}
              />
              <label className="form-check-label" htmlFor={`offer-${offer}`}>
                {
                  {
                    specialPrice: "Special Price",
                    buySaveMore: "Buy More, Save More",
                    noCostEMI: "No Cost EMI",
                  }[offer]
                }
              </label>
            </div>
          ))}
        </div>

        <hr />

        {/* Discount */}
        <div className="filterBox filterDiscount">
          <p className="filterHead text-uppercase d-flex justify-content-between align-items-center">
            <span>Discount</span>
            <i className="fa-solid fa-angle-down"></i>
          </p>
          {[
            ["thirtyPercent", "30% or More"],
            ["fortyPercent", "40% or More"],
            ["fiftyPercent", "50% or More"],
            ["sixtyPercent", "60% or More"],
            ["seventyPercent", "70% or More"],
          ].map(([disc, label]) => (
            <div className="form-check" key={`discount-${disc}`}>
              <input
                type="checkbox"
                className="form-check-input rounded-0"
                id={`discount-${disc}`}
                checked={filters.discount.includes(disc)}
                onChange={() => handleCheckboxChange("discount", disc)}
              />
              <label className="form-check-label" htmlFor={`discount-${disc}`}>
                {label}
              </label>
            </div>
          ))}
        </div>

        <hr />

        {/* Customer Rating */}
        <div className="filterBox filterRating">
          <p className="filterHead text-uppercase d-flex justify-content-between align-items-center">
            <span>Customer Rating</span>
            <i className="fa-solid fa-angle-down"></i>
          </p>
          {[
            ["threeStar", "3 star & above"],
            ["fourStar", "4 star & above"],
          ].map(([rating, label]) => (
            <div className="form-check" key={`rating-${rating}`}>
              <input
                type="checkbox"
                className="form-check-input rounded-0"
                id={`rating-${rating}`}
                checked={filters.rating.includes(rating)}
                onChange={() => handleCheckboxChange("rating", rating)}
              />
              <label className="form-check-label" htmlFor={`rating-${rating}`}>
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
