import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="signup_content" id="signupPage">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <h3 className="text-center text-uppercase mb-4">
              Create New Account
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="formFields firstNameFld mb-4">
                <label htmlFor="signup_firstName" className="form-label">
                  First Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="signup_firstName"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formFields lastNameFld mb-4">
                <label htmlFor="signup_lastName" className="form-label">
                  Last Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="signup_lastName"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="formFields emailFld mb-4">
                <label htmlFor="email" className="form-label">
                  Email<sup>*</sup>
                </label>
                <input
                  type="email"
                  className="form-control rounded-0"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  required
                />
              </div>

              <div className="formFields passwordFld mb-5">
                <label htmlFor="password" className="form-label">
                  Password<sup>*</sup>
                </label>
                <input
                  type="password"
                  className="form-control rounded-0"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
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
