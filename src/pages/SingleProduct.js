import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StoreBenefits from "../components/StoreBenefits";
import RelatedProducts from "../components/RelatedProducts";
import products from "../data/products.json";
import ProductDetailsSection from "../utils/ProductDetailsSection";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  return (
    <main>
      <AnnouncementBar />
      <Header />
      <>
        {product ? (
          <ProductDetailsSection product={product} />
        ) : (
          <p className="h4 text-capitalize text-center py-5">
            No product selected! Please select a product to view.
          </p>
        )}
      </>
      <StoreBenefits />
      <RelatedProducts />
      <Footer />
    </main>
  );
}

export default SingleProduct;
