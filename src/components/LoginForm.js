import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email Is required!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid E-mail Address!";
    }

    if (!password) {
      newErrors.password = "Password Is Required!";
    } else if (password.length < 6) {
      newErrors.password = "Password Must Be At Least 6 Characters!";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", { email, password });
      alert("Successfully Signed In!");
      setEmail("");
      setPassword("");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="login_content" id="loginPage">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <h3 className="text-center text-uppercase mb-4">LogIn Account</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="formFields emailFld mb-4">
                <label htmlFor="login_email" className="form-label">
                  Email<sup>*</sup>
                </label>
                <input
                  type="email"
                  className={`form-control rounded-0 ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  id="login_email"
                  placeholder="Email"
                  name="login_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="formFields passwordFld mb-4">
                <label htmlFor="login_password" className="form-label">
                  Password<sup>*</sup>
                </label>
                <input
                  type="password"
                  className={`form-control rounded-0 ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="login_password"
                  placeholder="Password"
                  name="login_password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <Link
                  to="/signup"
                  className="text-decoration-none text-capitalize text-center signupBtn"
                >
                  Create new account
                </Link>
                <Link
                  to="/forgot-password"
                  className="text-decoration-none text-capitalize text-center forgotPasswordBtn"
                >
                  Forgot your password?
                </Link>
              </div>

              <button
                type="submit"
                className="text-decoration-none text-uppercase text-center d-block mx-auto common_btn loginBtn"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
