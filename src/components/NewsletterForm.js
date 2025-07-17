import { useState } from "react";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      alert("Please Enter a Valid E-mail Address!");
      return;
    }

    console.log("Subscribed E-mail:", email);

    setSubmitted(true);
    setEmail("");
  };

  return (
    <>
      {submitted ? (
        <p className="text-success text-capitalize mt-3">
          Thank you for subscribing!
        </p>
      ) : (
        <form
          className="input_box d-flex justify-content-center align-items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="form-control"
            autoComplete="on"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="text-uppercase">
            Subscribe
          </button>
        </form>
      )}
    </>
  );
}

export default NewsletterForm;
