import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import LookBookSlider from "../components/LookBookSlider";

function LookBook() {
  const lookBook = products.slice(8, 11);

  return (
    <section className="lookbookSec text-center">
      <div className="container">
        <p className="text-center text-uppercase secSubhead">
          From Street to Stitch
        </p>
        <p className="text-center text-capitalize secTitleNew">
          Inspiration straight from the pavement. Get the look.
        </p>
        <div className="row align-items-center">
          <div className="col-md-8 order-2 order-md-1">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <LookBookSlider>
                  {lookBook.map((product) => (
                    <div key={product.id} className="col-md-3">
                      <ProductCard
                        product={product}
                        showBadge={false}
                      />
                    </div>
                  ))}
                </LookBookSlider>
              </div>
            </div>
          </div>
          <div className="col-md-4 order-1 order-md-2">
            <div className="lookbook_imgBox">
              <img
                src="/assets/images/lookbook_model.jpg"
                alt="LookBook Model"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LookBook;
