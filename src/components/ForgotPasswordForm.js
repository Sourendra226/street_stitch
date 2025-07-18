import { useState } from "react";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForgotPasswordForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!newPassword) {
      newErrors.newPassword = "New password is required.";
    } else if (newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForgotPasswordForm()) {
      console.log("Submitted:", { email, newPassword });
      alert("Password Reset Successfully!");
      setEmail("");
      setNewPassword("");
      setConfirmPassword("");
      setErrors({});
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="forgotPassword_content" id="forgotPasswordPage">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <h3 className="text-center text-uppercase mb-4">
              Reset Your Password
            </h3>
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

              <div className="formFields newPasswordFld mb-4">
                <label htmlFor="new_password" className="form-label">
                  New Password<sup>*</sup>
                </label>
                <input
                  type="password"
                  className={`form-control rounded-0 ${
                    errors.newPassword ? "is-invalid" : ""
                  }`}
                  id="new_password"
                  placeholder="New Password"
                  name="new_password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                {errors.newPassword && (
                  <div className="invalid-feedback">{errors.newPassword}</div>
                )}
              </div>

              <div className="formFields confirmNewPasswordFld mb-5">
                <label htmlFor="confirm_new_password" className="form-label">
                  Confirm New Password<sup>*</sup>
                </label>
                <input
                  type="password"
                  className={`form-control rounded-0 ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  id="confirm_new_password"
                  placeholder="Confirm New Password"
                  name="confirm_new_password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="text-decoration-none text-uppercase text-center d-block mx-auto common_btn loginBtn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPasswordForm;
