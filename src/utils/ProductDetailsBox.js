import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faShare,
  faStar,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import getColorName from "./getColorName";

function ProductDetailsBox({ product }) {
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex(
      (item) =>
        item.id === product.id &&
        item.selectedSize === selectedSize &&
        item.selectedColor === selectedColor
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        ...product,
        selectedSize,
        selectedColor,
        quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert("Product added to cart!");
  };

  const handleBuyNow = () => {
    handleAddToCart(); // Add first
    navigate("/checkout"); // Then go to checkout
  };

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyExists = wishlist.some((item) => item.id === product.id);

    if (!alreadyExists) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Product added to wishlist!");
    } else {
      alert("Product is already in wishlist.");
    }
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <div className="prodDtls_box">
      <p className="prod_name">{product.name}</p>
      <p className="prod_rating">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} />
        ))}
        <span>({product.reviews || 0} Reviews)</span>
      </p>

      <p className="prod_price">
        <span className="nowPrice">${product.price.toFixed(2)}</span>
        {product.oldPrice && (
          <span className="wasPrice">${product.oldPrice.toFixed(2)}</span>
        )}
        <span className="tax_text d-block">
          Tax included. Shipping calculated at checkout.
        </span>
      </p>

      <hr />
      <p className="prod_desc">{product.description}</p>

      {/* Size Selector */}
      <div className="sizeSelector">
        <div className="d-flex justify-content-between align-items-center">
          <p className="sizeName">
            Size: <span className="sizeValue">{selectedSize}</span>
          </p>
          <p className="sizeGuide">
            <FontAwesomeIcon icon={faCircleQuestion} /> Size Guide
          </p>
        </div>
        <ul className="d-flex align-items-center px-0 sizeBtns">
          {product.sizes.map((size) => (
            <li
              key={size}
              className={`d-flex justify-content-center align-items-center ${
                selectedSize === size ? "active" : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              <p className="text-uppercase mb-0">{size}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Color Selector */}
      <div className="colorSelector">
        <p className="colorName">
          Color:{" "}
          <span className="colorValue text-capitalize">
            {getColorName(selectedColor)}
          </span>
        </p>
        <ul className="d-flex align-items-center p-0 colorSwatch">
          {product.colors.map((hex, index) => (
            <li
              key={index}
              className={`d-flex justify-content-center align-items-center colorSwatch_box colorSwatch_box${
                index + 1
              } ${selectedColor === hex ? "active" : ""}`}
              onClick={() => setSelectedColor(hex)}
            >
              <span
                className="colorBox"
                style={{ backgroundColor: hex }}
                title={getColorName(hex)}
              ></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quantity */}
      <div className="d-flex align-items-center qtyBox">
        <p className="mb-0">Quantity</p>
        <div className="d-flex align-items-center justify-content-center qty_box">
          <button type="button" className="minus_btn" onClick={decreaseQty}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="form-control rounded-0 text-center qty_fld"
            name="Quantity"
          />
          <button type="button" className="plus_btn" onClick={increaseQty}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="d-flex align-items-center flex-column flex-md-row btns_grp">
        <button
          onClick={handleAddToCart}
          className="text-decoration-none text-uppercase text-center common_btn addCart_btn"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="text-decoration-none text-uppercase text-center common_btn buy_btn"
        >
          Buy it Now
        </button>
      </div>

      <ul className="list-inline mb-0 other_btns">
        <li className="list-inline-item">
          <button onClick={handleAddToWishlist} className="wishlist_btn">
            <FontAwesomeIcon icon={faHeart} /> Wishlist
          </button>
        </li>
        <li className="list-inline-item">
          <Link
            to="#"
            onClick={(e) => e.preventDefault()}
            className="text-decoration-none share_btn"
          >
            <FontAwesomeIcon icon={faShare} /> Share
          </Link>
        </li>
      </ul>

      <hr />
      <p className="delivery_txt">
        <span>Delivery:</span> {product.deliveryText}
      </p>
      <p className="return_txt">
        <span>Returns:</span> {product.returnText}
      </p>
      <p className="sku_text">
        <span>SKU:</span> {product.sku}
      </p>
    </div>
  );
}

export default ProductDetailsBox;
