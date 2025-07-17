import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import getColorName from "../utils/getColorName";

function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setCart(parsed);
      } else {
        setCart([]);
      }
    } catch (error) {
      console.error("Invalid cart data in localStorage:", error);
      setCart([]);
    }
  }, []);

  const updateQuantity = (id, amount) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        const currentQty = parseInt(item.quantity) || 1;
        return { ...item, quantity: Math.max(1, currentQty + amount) };
      }
      return item;
    });
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const getTotal = () => {
    try {
      return cart
        .reduce((sum, item) => {
          const price = parseFloat(item.price) || 0;
          const qty = parseInt(item.quantity) || 0;
          return sum + price * qty;
        }, 0)
        .toFixed(2);
    } catch (err) {
      console.error("Error calculating total:", err);
      return "0.00";
    }
  };

  const proceedToCheckout = () => {
    navigate("/checkout");
  };

  if (!Array.isArray(cart) || cart.length === 0) {
    return (
      <main>
        <Header />
        <Breadcrumb
          currentPage="Cart"
          items={[{ label: "Home", path: "/" }, { label: "Cart" }]}
        />
        <section className="cart_content">
          <div className="container text-center">
            <div className="noCartContent">
              <p className="text-capitalize">Your bag is empty!</p>
              <Link
                to="/products"
                className="text-decoration-none text-uppercase text-center common_btn continueShop_btn"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <Breadcrumb
        currentPage="Cart"
        items={[{ label: "Home", path: "/" }, { label: "Cart" }]}
      />
      <section className="cart_content">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-bordered mb-0 cartData">
              <thead>
                <tr>
                  <th className="text-uppercase text-center">
                    Product{" "}
                    <span className="d-none d-md-inline-block">Name</span>
                  </th>
                  <th className="text-uppercase text-center">Price</th>
                  <th className="text-uppercase text-center">Quantity</th>
                  <th className="text-uppercase text-center">Total</th>
                  <th className="text-uppercase text-center">&nbsp;</th>
                </tr>
              </thead>
              <tbody className="cartTable">
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center flex-column flex-md-row cartProd">
                        <div className="imgBox">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid w-100"
                          />
                        </div>
                        <div className="aboutProd text-center text-md-start">
                          <p className="prodName">{item.name}</p>
                          <p className="prodQty mb-0">
                            Size - {item.selectedSize || "N/A"},{" "}
                            <span className="text-capitalize">
                              {getColorName(item.selectedColor)}
                            </span>{" "}
                            ({item.quantity || 1})
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center prodPrice">
                      ${Number(item.price || 0).toFixed(2)}
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center flex-column flex-md-row qty_box">
                        <button
                          type="button"
                          className="minus_btn"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          className="form-control rounded-0 text-center qty_fld"
                          name="Quantity"
                          readOnly
                        />
                        <button
                          type="button"
                          className="plus_btn"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td className="text-center totalPrice">
                      $
                      {(
                        Number(item.price || 0) * Number(item.quantity || 0)
                      ).toFixed(2)}
                    </td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="deleteProd_btn"
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex align-items-center justify-content-end flex-column flex-md-row btn_grp">
            <Link
              to="/products"
              className="text-decoration-none text-uppercase text-center order-2 order-md-1 common_btn continueShop_btn"
            >
              Continue Shopping
            </Link>
            <button
              className="text-decoration-none text-uppercase text-center order-1 order-md-2 common_btn checkout_btn"
              onClick={proceedToCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Cart;
