import { Link } from "react-router-dom";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import NewArrivalSlider from "../components/NewArrivalSlider";

function NewArrival() {
  const newArrivals = products.slice(0, 4);

  return (
    <section className="newArrival">
      <div className="container">
        <p className="text-center text-uppercase secSubhead">Fresh Threads</p>
        <p className="text-center text-capitalize secTitleNew">
          New textures. Clean cuts. <br className="d-block d-md-none" />
          Designed for daily moves.
        </p>
        <NewArrivalSlider>
          {newArrivals.map((product) => (
            <div key={product.id} className="col-md-3">
              <ProductCard
                product={product}
                showBadge={true}
              />
            </div>
          ))}
        </NewArrivalSlider>
        <Link
          to="/products"
          className="text-decoration-none text-uppercase d-block mx-auto text-center common_btn all_prod_btn"
        >
          Show More
        </Link>
      </div>
    </section>
  );
}

export default NewArrival;
