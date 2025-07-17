import { Link } from "react-router-dom";

function SeasonalSale() {
  return (
    <section className="seasonalSale text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-md-0">
            <div className="seasonalSale_imgBox">
              <img
                src="/assets/images/sale_banner.jpg"
                alt="Seasonal Sale Banner"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 px-md-0">
            <div className="seasonalSale_content d-flex align-items-center justify-content-center">
              <div className="content_box text-center d-flex flex-column">
                <p className="subhead text-uppercase mb-0">
                  Exclusive sale with 40% Off
                </p>
                <p className="title text-capitalize mb-0">
                  Heat up your look: Summer sale is on
                </p>
                <p className="sale_text mb-0">
                  Up to 40% off sun-ready fits, accessories & more. <br />
                  Limited sizes. Fresh styles. Don't miss the drop.
                </p>
                <Link
                  to="/products"
                  className="text-decoration-none text-uppercase d-block mx-auto text-center common_btn sale_btn"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeasonalSale;
