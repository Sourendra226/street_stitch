import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import ProductFAQs from "./ProductFAQs";

const ProductTabs = ({
  tabDescription = {},
  additionalInfo = {},
  productId,
}) => {
  const {
    specsTitle,
    specsText,
    specsList = [],
    materialTitle,
    materialText,
    materialList = [],
    washTitle,
    washList = [],
  } = tabDescription;

  return (
    <div className="otherInfos">
      <div className="row">
        <div className="col-12">
          <ul
            className="nav nav-tabs justify-content-center text-uppercase"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#description"
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#addtionalInfo"
              >
                Additional Info
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#faqs">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#reviews">
                Reviews
              </a>
            </li>
          </ul>

          <div className="tab-content">
            {/* DESCRIPTION TAB */}
            <div id="description" className="container tab-pane active">
              <div className="tabContentBox">
                <div className="row">
                  <div className="col-md-6">
                    <p className="descTab_title">{specsTitle}</p>
                    <p className="descTab_text">{specsText}</p>
                    <ul className="descTab_list marginMobile">
                      {specsList.map((item, index) => (
                        <li key={index}>
                          <span>{item.label}:</span> {item.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <p className="descTab_title">{materialTitle}</p>
                    <p className="descTab_text">{materialText}</p>
                    <ul className="descTab_list">
                      {materialList.map((item, index) => (
                        <li key={index}>
                          <span>{item.label}:</span> {item.value}
                        </li>
                      ))}
                    </ul>
                    <p className="descTab_title">{washTitle}</p>
                    <ul className="descTab_list">
                      {washList.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ADDITIONAL INFO TAB */}
            <div id="addtionalInfo" className="container tab-pane fade">
              <div className="tabContentBox">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <tbody>
                      {Object.entries(additionalInfo).map(([key, value]) => (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* FAQS TAB */}
            <div id="faqs" className="container tab-pane fade">
              <div className="tabContentBox">
                <ProductFAQs productId={productId} />
              </div>
            </div>

            {/* REVIEWS TAB */}
            <div id="reviews" className="container tab-pane fade">
              <div className="tabContentBox">
                <p className="reviewTitle text-center">Customer Reviews</p>
                <div className="d-flex justify-content-center align-items-center flex-column flex-md-row firstReview">
                  <p>
                    <span className="stars">
                      {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} />
                      ))}
                    </span>
                    <span className="text d-block">
                      Be the first to write a review
                    </span>
                  </p>
                  <Link
                    to="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-decoration-none text-center text-uppercase common_btn"
                  >
                    Write a review
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
