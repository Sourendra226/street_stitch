import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ProductBreadcrumb({ productName = "Product Name" }) {
  return (
    <div className="prod_breadcrumb">
      <div className="container">
        <ul className="list-inline mb-0 d-flex align-items-center">
          <li className="list-inline-item">
            <Link to="/" className="text-decoration-none">Home</Link>
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li className="list-inline-item">
            <Link to="/products" className="text-decoration-none">Products</Link>
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
          <li className="list-inline-item active" id="prodNameBreadcrumb">
            {productName}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductBreadcrumb;
