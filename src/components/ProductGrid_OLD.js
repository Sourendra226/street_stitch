import ProductCard from "./ProductCard";
import products from "../data/products.json";

function ProductGrid({
  startIndex = 0,
  endIndex = products.length,
  showBadge = true,
  columns = "col-md-3",
}) {
  return (
    <div className="row">
      {products.slice(startIndex, endIndex).map((product) => (
        <div key={product.id} className={`${columns} mb-4`}>
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            image={product.image}
            images={product.images}
            badge={product.badge}
            colors={product.colors}
            showBadge={showBadge}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
