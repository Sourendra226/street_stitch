import { Link } from "react-router-dom";

function ShopCategories() {
  return (
    <section className="categories">
      <div className="container">
        <p className="text-center text-uppercase secSubhead">
          Threads to Explore
        </p>
        <p className="text-center text-capitalize secTitleNew">
          Organized by drop. <br className="d-block d-md-none" />
          Made to stand out.
        </p>
        <div className="row">
          <div className="col-md-4 pe-md-0 order-1 order-md-1">
            <Link
              to="/products"
              className="categoriesBox categoriesBox1"
              id="categoriesMen"
            >
              <img
                src="/assets/images/categories_men.jpg"
                alt="Categories Men"
                className="img-fluid w-100"
              />
              <div className="textOverlay d-flex justify-content-center align-items-center">
                <p className="text-uppercase mb-0">Men</p>
              </div>
            </Link>
          </div>
          <div className="col-md-4 px-md-0 order-3 order-md-2">
            <Link
              to="/products"
              className="categoriesBox categoriesBox2"
              id="categoriesAccessories"
            >
              <img
                src="/assets/images/categories_accessories.jpg"
                alt="Categories Accessories"
                className="img-fluid w-100"
              />
              <div className="textOverlay d-flex justify-content-center align-items-center">
                <p className="text-uppercase mb-0">Accessories</p>
              </div>
            </Link>
            <Link
              to="/products"
              className="categoriesBox categoriesBox3"
              id="categoriesFootwear"
            >
              <img
                src="/assets/images/categories_footwear.jpg"
                alt="Categories Footwear"
                className="img-fluid w-100"
              />
              <div className="textOverlay d-flex justify-content-center align-items-center">
                <p className="text-uppercase mb-0">Footwear</p>
              </div>
            </Link>
          </div>
          <div className="col-md-4 ps-md-0 order-2 order-md-3">
            <Link
              to="/products"
              className="categoriesBox categoriesBox4"
              id="categoriesWomen"
            >
              <img
                src="/assets/images/categories_women.jpg"
                alt="Categories Women"
                className="img-fluid w-100"
              />
              <div className="textOverlay d-flex justify-content-center align-items-center">
                <p className="text-uppercase mb-0">Women</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCategories;
