import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import getColorName from "../utils/getColorName";
import PropTypes from "prop-types";

function ProductCard({ product, showBadge = true, onRemove = null }) {
  const {
    id,
    name,
    price,
    oldPrice,
    image,
    images = [],
    badge = "",
    colors = [],
  } = product || {};

  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.find((item) => item.id === id);
    if (!exists) {
      wishlist.push({ id, name, price, image });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Added to Wishlist!");
    } else {
      alert("Already in Wishlist!");
    }
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ id, name, price, image, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert("Added to Cart!");
  };

  return (
    <div className="prod_card">
      <div className="prod_img_box position-relative">
        <img src={image} alt={name} className="img-fluid w-100" />

        {showBadge && badge && (
          <div className="newBadge">
            <p className="mb-0 text-center text-uppercase">{badge}</p>
          </div>
        )}

        <div className="prod_hover_box d-none d-md-flex flex-column justify-content-start align-items-end">
          <button
            type="button"
            className="text-decoration-none d-flex justify-content-center align-items-center prod_btn"
            onClick={handleView}
          >
            <FontAwesomeIcon icon={faEye} />
          </button>

          <button
            type="button"
            className="text-decoration-none d-flex justify-content-center align-items-center add_wishlist_btn"
            onClick={handleAddToWishlist}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>

          <button
            type="button"
            className="text-decoration-none d-flex justify-content-center align-items-center add_cart_btn"
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faBagShopping} />
          </button>
        </div>
      </div>

      <p className="prod_name text-start">
        <button
          type="button"
          className="text-decoration-none prod_btn"
          onClick={handleView}
        >
          {name}
        </button>
      </p>

      <p className="prod_prc text-start">
        <span className="nowPrice">${price}</span>
        {oldPrice && (
          <span className="text-decoration-line-through wasPrice">
            ${oldPrice}
          </span>
        )}
      </p>

      <ul className="d-flex align-items-center p-0 colorSwatch">
        {colors.map((hex, index) => (
          <li
            key={`${id}-color-${index}`}
            className={`d-flex justify-content-center align-items-center colorSwatch_box colorSwatch_box${
              index + 1
            }`}
          >
            <span
              className="colorBox"
              style={{ backgroundColor: hex }}
              title={getColorName(hex)}
            ></span>
          </li>
        ))}
      </ul>

      <div className="mob_btns d-flex align-items-center d-md-none">
        <button
          type="button"
          className="text-decoration-none text-uppercase me-3 common_btn add_cart_btn"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>

        <button
          type="button"
          className="text-decoration-none text-uppercase common_btn add_wishlist_btn"
          onClick={handleAddToWishlist}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>

      {onRemove && (
        <button
          className="btn btn-outline-danger btn-sm rounded-0 text-uppercase fw-medium w-100 mt-2"
          onClick={() => onRemove(id)}
        >
          Remove
        </button>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    oldPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string.isRequired,
    images: PropTypes.array,
    badge: PropTypes.string,
    colors: PropTypes.array,
  }).isRequired,
  showBadge: PropTypes.bool,
  onRemove: PropTypes.func,
};

export default ProductCard;
