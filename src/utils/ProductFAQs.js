import { useEffect, useState } from "react";
import faqsData from "../data/productFaqs.json";

const ProductFAQs = ({ productId }) => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    if (faqsData[productId]) {
      setFaqs(faqsData[productId]);
    } else {
      setFaqs([]);
    }
  }, [productId]);

  if (!faqs.length) {
    return (
      <p className="h6 text-capitalize text-center mb-0">
        No FAQs available for this product.
      </p>
    );
  }

  return (
    <div className="accordion accordion-flush" id="prodFAQs">
      {faqs.map((faq, index) => {
        const collapseId = `collapse${index}`;
        return (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={collapseId}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={collapseId}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              data-bs-parent="#prodFAQs"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductFAQs;
