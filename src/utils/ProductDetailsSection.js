import ProductBreadcrumb from "./ProductBreadcrumb";
import ProductGallery from "./ProductGallery";
import ProductDetailsBox from "./ProductDetailsBox";
import ProductTabs from "./ProductTabs";

function ProductDetailsSection({ product }) {
  if (!product) return null;

  return (
    <section className="prod_dtls">
      <ProductBreadcrumb productName={product.name} />
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <ProductGallery images={product.images} />
          </div>
          <div className="col-md-7 col-lg-6">
            <ProductDetailsBox product={product} />
          </div>
        </div>
        {product && product.tabDescription && (
          <ProductTabs
            tabDescription={product.tabDescription}
            additionalInfo={product.additionalInfo}
            productId={product.id}
          />
        )}
      </div>
    </section>
  );
}

export default ProductDetailsSection;
