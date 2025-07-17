import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import RelatedProductsSlider from "../components/RelatedProductsSlider";

function RelatedProducts() {
  const relatedProducts = products.slice(1, 6);

  return (
    <section className="related_products">
      <div className="container">
        <p className="text-center text-uppercase sec_title">Related Products</p>
        <RelatedProductsSlider>
          {relatedProducts.map((product) => (
            <div key={product.id} className="col-md-3">
              <ProductCard product={product} showBadge={false} />
            </div>
          ))}
        </RelatedProductsSlider>
      </div>
    </section>
  );
}

export default RelatedProducts;
