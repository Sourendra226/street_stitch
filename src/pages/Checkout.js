import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderOnlyLogo from "../components/HeaderOnlyLogo";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import getColorName from "../utils/getColorName";

function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [useSameAddress, setUseSameAddress] = useState(true);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [couponCode, setCouponCode] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
  };

  const validateForm = () => {
    const requiredFields = [
      "shipping_firstName",
      "shipping_lastName",
      "shipping_country",
      "shipping_city",
      "shipping_state",
      "shipping_zipCode",
      "shipping_address",
      "shipping_phone",
      "shipping_email",
      "creditCardNumber",
      "cardExpiry",
      "cardCvv",
      "agreeTerms",
    ];

    const errors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = "This field is required.";
      }
    });

    if (
      formData.shipping_email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.shipping_email)
    ) {
      errors.shipping_email = "Invalid email address.";
    }

    if (formData.shipping_phone && !/^\d{10}$/.test(formData.shipping_phone)) {
      errors.shipping_phone = "Phone must be 10 digits.";
    }

    if (
      formData.creditCardNumber &&
      !/^\d{16}$/.test(formData.creditCardNumber)
    ) {
      errors.creditCardNumber = "Card number must be 16 digits.";
    }

    if (formData.cardCvv && !/^\d{3}$/.test(formData.cardCvv)) {
      errors.cardCvv = "CVV must be 3 digits.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Order placed:", { formData, cart });
      localStorage.removeItem("cart");
      navigate("/thank-you");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  let discount = 0;
  if (couponCode.trim().toUpperCase() === "SAVE10") {
    discount = totalPrice * 0.1;
  }

  const shippingHandling = totalPrice > 100 ? 0 : 5;
  const grandTotal = (
    Number(totalPrice) -
    discount +
    Number(shippingHandling)
  ).toFixed(2);

  return (
    <main>
      <HeaderOnlyLogo />
      <Breadcrumb
        currentPage="Checkout"
        items={[
          { label: "Home", path: "/" },
          { label: "Cart", path: "/cart" },
          { label: "Checkout" },
        ]}
      />
      <section className="checkout_content">
        <div className="container">
          <form id="checkoutForm" onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div className="col-md-6">
                <div className="shipping_details">
                  <p className="block_title">Shipping Details</p>
                  <div className="row formFields">
                    <div className="col-md-6 firstNameFld">
                      <label htmlFor="firstName" className="form-label">
                        First Name<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        className={`form-control rounded-0 ${
                          formErrors.shipping_firstName ? "is-invalid" : ""
                        }`}
                        id="firstName"
                        name="shipping_firstName"
                        value={formData.shipping_firstName || ""}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.shipping_firstName && (
                        <div className="invalid-feedback">
                          {formErrors.shipping_firstName}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 lastNameFld">
                      <label htmlFor="lastName" className="form-label">
                        Last Name<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        className={`form-control rounded-0 ${
                          formErrors.shipping_lastName ? "is-invalid" : ""
                        }`}
                        id="lastName"
                        name="shipping_lastName"
                        value={formData.shipping_lastName || ""}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.shipping_firstName && (
                        <div className="invalid-feedback">
                          {formErrors.shipping_lastName}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="formFields countryFld">
                    <label htmlFor="country" className="form-label">
                      Country<sup>*</sup>
                    </label>
                    <select
                      name="shipping_country"
                      id="country"
                      className={`form-select rounded-0 ${
                        formErrors.shipping_country ? "is-invalid" : ""
                      }`}
                      value={formData.shipping_country || ""}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Country
                      </option>
                      <option value="US">United States</option>
                    </select>
                    {formErrors.shipping_country && (
                      <div className="invalid-feedback">
                        {formErrors.shipping_country}
                      </div>
                    )}
                  </div>
                  <div className="formFields cityFld">
                    <label htmlFor="city" className="form-label">
                      City<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className={`form-control rounded-0 ${
                        formErrors.shipping_city ? "is-invalid" : ""
                      }`}
                      id="city"
                      name="shipping_city"
                      value={formData.shipping_city || ""}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.shipping_city && (
                      <div className="invalid-feedback">
                        {formErrors.shipping_city}
                      </div>
                    )}
                  </div>
                  <div className="formFields stateFld">
                    <label htmlFor="state" className="form-label">
                      State<sup>*</sup>
                    </label>
                    <select
                      name="shipping_state"
                      id="state"
                      className={`form-select rounded-0 ${
                        formErrors.shipping_state ? "is-invalid" : ""
                      }`}
                      value={formData.shipping_state || ""}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select State
                      </option>
                      <option value="AL">Alabama</option>
                    </select>
                    {formErrors.shipping_state && (
                      <div className="invalid-feedback">
                        {formErrors.shipping_state}
                      </div>
                    )}
                  </div>
                  <div className="formFields zipCodeFld">
                    <label htmlFor="zipCode" className="form-label">
                      Zip Code<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className={`form-control rounded-0 ${
                        formErrors.shipping_zipCode ? "is-invalid" : ""
                      }`}
                      id="zipCode"
                      name="shipping_zipCode"
                      maxLength="5"
                      value={formData.shipping_zipCode || ""}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.shipping_zipCode && (
                      <div className="invalid-feedback">
                        {formErrors.shipping_zipCode}
                      </div>
                    )}
                  </div>
                  <div className="formFields addressFld">
                    <label htmlFor="address" className="form-label">
                      Address<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className={`form-control rounded-0 ${
                        formErrors.shipping_address ? "is-invalid" : ""
                      }`}
                      id="address"
                      name="shipping_address"
                      value={formData.shipping_address || ""}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.shipping_address && (
                      <div className="invalid-feedback">
                        {formErrors.shipping_address}
                      </div>
                    )}
                  </div>
                  <div className="formFields address2Fld">
                    <label htmlFor="address2" className="form-label">
                      Address2 <span>(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      id="address2"
                      name="shipping_address2"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="formFields phoneFld">
                    <label htmlFor="phone" className="form-label">
                      Phone<sup>*</sup>
                    </label>
                    <input
                      type="tel"
                      className={`form-control rounded-0 ${
                        formErrors.shipping_phone ? "is-invalid" : ""
                      }`}
                      id="phone"
                      name="shipping_phone"
                      maxLength="10"
                      value={formData.shipping_phone || ""}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.shipping_phone && (
                      <div className="invalid-feedback">
                        {formErrors.shipping_phone}
                      </div>
                    )}
                  </div>
                  <div className="formFields emailFld">
                    <label htmlFor="email" className="form-label">
                      Email<sup>*</sup>
                    </label>
                    <input
                      type="email"
                      className={`form-control rounded-0 ${
                        formErrors.shipping_email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="shipping_email"
                      value={formData.shipping_email || ""}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.shipping_email && (
                      <div className="invalid-feedback">
                        {formErrors.shipping_email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-check address_checkbox">
                  <input
                    className="form-check-input rounded-0"
                    type="checkbox"
                    id="toggleBillingForm"
                    name="useSameAddress"
                    checked={useSameAddress}
                    onChange={() => setUseSameAddress((prev) => !prev)}
                  />
                  <label
                    htmlFor="toggleBillingForm"
                    className="form-check-label"
                  >
                    Use the Same Address as Billing
                  </label>
                </div>

                {!useSameAddress && (
                  <div className="billing_details">
                    <p className="block_title">Billing Details</p>
                    <div className="row formFields">
                      <div className="col-md-6 firstNameFld">
                        <label htmlFor="firstName" className="form-label">
                          Billing First Name<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          name="billing_firstName"
                          placeholder="Billing First Name"
                          className="form-control rounded-0"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 lastNameFld">
                        <label htmlFor="lastName" className="form-label">
                          Billing Last Name<sup>*</sup>
                        </label>
                        <input
                          type="text"
                          name="billing_lastName"
                          placeholder="Billing Last Name"
                          className="form-control rounded-0"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="formFields cityFld">
                      <label htmlFor="city" className="form-label">
                        Billing City<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        id="city"
                        placeholder="Billing City"
                        name="billing_city"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="formFields stateFld">
                      <label htmlFor="state" className="form-label">
                        Billing State<sup>*</sup>
                      </label>
                      <select
                        name="billing_state"
                        id="state"
                        className="form-select rounded-0"
                        value={formData.billing_state || ""}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          State
                        </option>
                        <option value="AL">Alabama</option>
                      </select>
                    </div>
                    <div className="formFields zipCodeFld">
                      <label htmlFor="zipCode" className="form-label">
                        Billing Zip Code<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        id="zipCode"
                        placeholder="Billing Zip Code"
                        maxLength="5"
                        name="billing_zipCode"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="formFields addressFld">
                      <label htmlFor="address" className="form-label">
                        Billing Address<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        id="address"
                        placeholder="Billing Address"
                        name="billing_address"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="formFields phoneFld">
                      <label htmlFor="phone" className="form-label">
                        Billing Phone<sup>*</sup>
                      </label>
                      <input
                        type="tel"
                        className="form-control rounded-0"
                        id="phone"
                        placeholder="Billing Phone Number"
                        maxLength="10"
                        name="billing_phone"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="formFields emailFld">
                      <label htmlFor="email" className="form-label">
                        Billing Email<sup>*</sup>
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-0"
                        id="email"
                        placeholder="Billing Email"
                        name="billing_email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <div className="order_summary">
                  <p className="block_title">Order Summary</p>
                  <div className="summaryBox">
                    <div className="prodSummaryBox">
                      {cart.map((item, index) => (
                        <div
                          key={index}
                          className="d-flex justify-content-between align-items-center orderItems"
                        >
                          <div className="d-flex align-items-center summaryProd">
                            <div className="imgBox">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="img-fluid w-100"
                              />
                            </div>
                            <div className="aboutProd">
                              <p className="prodName">{item.name}</p>
                              <p className="prodQty mb-0">
                                Size - {item.selectedSize},{" "}
                                <span className="text-capitalize">
                                  {item.selectedColor
                                    ? getColorName(item.selectedColor)
                                    : "N/A"}
                                </span>{" "}
                                ({item.quantity})
                              </p>
                            </div>
                          </div>
                          <p className="prodPrice mb-0">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="couponBox">
                      <p>Got a Code? Let's Stitch in the Savings</p>
                      <div className="input_box d-flex justify-content-center align-items-center">
                        <input
                          type="text"
                          name="couponCode"
                          placeholder="Coupon Code"
                          className="form-control"
                          autoComplete="on"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button
                          type="button"
                          className="text-uppercase"
                          onClick={() =>
                            alert(`Coupon "${couponCode}" Applied!`)
                          }
                        >
                          Apply
                        </button>
                      </div>
                      <p className="mt-2 mb-0">
                        <small>Use "SAVE10" Coupon Code for 10% off</small>
                      </p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center totalPrice">
                      <p className="mb-0">Total:</p>
                      <p className="mb-0 totalPriceAmt">${totalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center shipPrice">
                      <p className="mb-0">Shipping & Handling:</p>
                      <p className="mb-0 shipPriceAmt">
                        {shippingHandling === 0
                          ? "FREE"
                          : `$${shippingHandling.toFixed(2)}`}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center grandTotal">
                      <p className="mb-0">Grand Total:</p>
                      <p className="mb-0 grandTotalAmt">${grandTotal}</p>
                    </div>
                  </div>
                </div>

                <div className="payment_details">
                  <p className="block_title">Payment Details</p>
                  <div className="formFields cardNumberFld">
                    <label htmlFor="cardNumber" className="form-label">
                      Card Number<sup>*</sup>
                    </label>
                    <input
                      type="tel"
                      className={`form-control rounded-0 ${
                        formErrors.creditCardNumber ? "is-invalid" : ""
                      }`}
                      id="cardNumber"
                      name="creditCardNumber"
                      maxLength="16"
                      value={formData.creditCardNumber || ""}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.creditCardNumber && (
                      <div className="invalid-feedback">
                        {formErrors.creditCardNumber}
                      </div>
                    )}
                  </div>
                  <div className="row formFields">
                    <div className="col-md-6 expiryFld">
                      <label htmlFor="expiry" className="form-label">
                        Expiry Date/Month<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        className={`form-control rounded-0 ${
                          formErrors.cardExpiry ? "is-invalid" : ""
                        }`}
                        id="expiry"
                        name="cardExpiry"
                        value={formData.cardExpiry || ""}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.cardExpiry && (
                        <div className="invalid-feedback">
                          {formErrors.cardExpiry}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 cvvFld">
                      <label htmlFor="cvv" className="form-label">
                        CVV<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        className={`form-control rounded-0 ${
                          formErrors.cardCvv ? "is-invalid" : ""
                        }`}
                        id="cvv"
                        name="cardCvv"
                        maxLength="3"
                        value={formData.cardCvv || ""}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.cardCvv && (
                        <div className="invalid-feedback">
                          {formErrors.cardCvv}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-check consent_checkbox">
                  <input
                    className={`form-check-input rounded-0 ${
                      formErrors.agreeTerms ? "is-invalid" : ""
                    }`}
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms || false}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="agreeTerms" className="form-check-label">
                    I have read and agree to the website{" "}
                    <Link to="#" onClick={(e) => e.preventDefault()}>
                      terms and conditions
                    </Link>
                    .
                  </label>
                  {formErrors.agreeTerms && (
                    <div className="invalid-feedback d-block">
                      {formErrors.agreeTerms}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="text-decoration-none text-uppercase text-center common_btn"
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Checkout;
