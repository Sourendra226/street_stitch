import { Link } from "react-router-dom";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import BestSellerSlider from "../components/BestSellerSlider";

function BestSeller() {
  const bestSellers = products.slice(0, 8);

  return (
    <section className="bestseller">
      <div className="container">
        <p className="text-center text-uppercase secSubhead">
          Street Favorites
        </p>
        <p className="text-center text-capitalize secTitleNew">
          The looks that define the movement
          <span className="d-none d-md-inline-block">—</span>
          <br className="d-block d-md-none" />
          stitched by demand.
        </p>
        <BestSellerSlider>
          {bestSellers.map((product) => (
            <div key={product.id} className="col-md-3">
              <ProductCard
                product={product}
                showBadge={false}
              />
            </div>
          ))}
        </BestSellerSlider>
        <Link
          to="/products"
          className="text-decoration-none text-uppercase d-block mx-auto text-center common_btn all_prod_btn"
        >
          All Products
        </Link>
      </div>
    </section>
  );
}

export default BestSeller;
