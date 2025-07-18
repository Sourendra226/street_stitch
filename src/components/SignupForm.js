import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    signup_firstName: "",
    signup_lastName: "",
    signup_email: "",
    signup_password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateSignupForm = () => {
    const requiredFields = [
      "signup_firstName",
      "signup_lastName",
      "signup_email",
      "signup_password",
    ];

    const errors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = "This field is required.";
      }
    });

    if (
      formData.signup_email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.signup_email)
    ) {
      errors.signup_email = "Invalid email address.";
    }

    if (formData.signup_password && formData.signup_password.length < 6) {
      errors.signup_password = "Password must be at least 6 characters.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSignupForm()) {
      console.log("Form Submitted:", {
        name: `${formData.signup_firstName} ${formData.signup_lastName}`,
        email: formData.signup_email,
      });
      alert("Successfully Account Created!");
      setFormData({
        signup_firstName: "",
        signup_lastName: "",
        signup_email: "",
        signup_password: "",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="signup_content" id="signupPage">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <h3 className="text-center text-uppercase mb-4">
              Create New Account
            </h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="formFields firstNameFld mb-4">
                <label htmlFor="signup_firstName" className="form-label">
                  First Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  className={`form-control rounded-0 ${
                    formErrors.signup_firstName ? "is-invalid" : ""
                  }`}
                  id="signup_firstName"
                  placeholder="First Name"
                  name="signup_firstName"
                  value={formData.signup_firstName || ""}
                  onChange={handleChange}
                  required
                />
                {formErrors.signup_firstName && (
                  <div className="invalid-feedback">
                    {formErrors.signup_firstName}
                  </div>
                )}
              </div>

              <div className="formFields lastNameFld mb-4">
                <label htmlFor="signup_lastName" className="form-label">
                  Last Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  className={`form-control rounded-0 ${
                    formErrors.signup_lastName ? "is-invalid" : ""
                  }`}
                  id="signup_lastName"
                  placeholder="Last Name"
                  name="signup_lastName"
                  value={formData.signup_lastName || ""}
                  onChange={handleChange}
                  required
                />
                {formErrors.signup_lastName && (
                  <div className="invalid-feedback">
                    {formErrors.signup_lastName}
                  </div>
                )}
              </div>

              <div className="formFields emailFld mb-4">
                <label htmlFor="signup_email" className="form-label">
                  Email<sup>*</sup>
                </label>
                <input
                  type="email"
                  className={`form-control rounded-0 ${
                    formErrors.signup_email ? "is-invalid" : ""
                  }`}
                  id="signup_email"
                  placeholder="Email"
                  name="signup_email"
                  value={formData.signup_email || ""}
                  onChange={handleChange}
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  required
                />
                {formErrors.signup_email && (
                  <div className="invalid-feedback">
                    {formErrors.signup_email}
                  </div>
                )}
              </div>

              <div className="formFields passwordFld mb-5">
                <label htmlFor="signup_password" className="form-label">
                  Password<sup>*</sup>
                </label>
                <input
                  type="password"
                  className={`form-control rounded-0 ${
                    formErrors.signup_password ? "is-invalid" : ""
                  }`}
                  id="signup_password"
                  placeholder="Password"
                  name="signup_password"
                  value={formData.signup_password || ""}
                  onChange={handleChange}
                  required
                />
                {formErrors.signup_password && (
                  <div className="invalid-feedback">
                    {formErrors.signup_password}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="text-decoration-none text-uppercase text-center d-block mx-auto common_btn createAcntBtn"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;
