const benefits = [
  {
    id: 1,
    image: "/assets/images/delivery.svg",
    alt: "Free Shipping",
    title: "Free Shipping",
    text: "Free Shipping For All Orders Above $99",
    className: "benefitBox1",
  },
  {
    id: 2,
    image: "/assets/images/clock.svg",
    alt: "Delivery On Time",
    title: "Delivery On Time",
    text: "Definition and Measurement",
    className: "benefitBox2",
  },
  {
    id: 3,
    image: "/assets/images/credit-card.svg",
    alt: "Secure Payment",
    title: "Secure Payment",
    text: "100% Secure Payment",
    className: "benefitBox3",
  },
];

function StoreBenefits() {
  return (
    <section className="store_benefits">
      <div className="container">
        <div className="row">
          {benefits.map((benefit) => (
            <div className="col-md-4" key={benefit.id}>
              <div className={`benefitBox ${benefit.className} text-center`}>
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="img-fluid d-block mx-auto"
                />
                <p className="benefit_title text-uppercase">{benefit.title}</p>
                <p className="benefit_text mb-0">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StoreBenefits;
