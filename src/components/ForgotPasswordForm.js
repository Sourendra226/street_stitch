import { useState } from "react";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords Do Not Match!");
      return;
    }

    setError("");
    // Submit logic goes here
    console.log("Submitted:", { email, newPassword });
    alert("Password Reset Successfully!");
  };

  return (
    <section className="forgotPassword_content" id="forgotPasswordPage">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <h3 className="text-center text-uppercase mb-4">
              Reset Your Password
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="formFields emailFld mb-4">
                <label htmlFor="login_email" className="form-label">
                  Email<sup>*</sup>
                </label>
                <input
                  type="email"
                  className="form-control rounded-0"
                  id="login_email"
                  placeholder="Email"
                  name="login_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="formFields newPasswordFld mb-4">
                <label htmlFor="new_password" className="form-label">
                  New Password<sup>*</sup>
                </label>
                <input
                  type="password"
                  className="form-control rounded-0"
                  id="new_password"
                  placeholder="New Password"
                  name="new_password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>

              <div className="formFields confirmNewPasswordFld mb-5">
                <label htmlFor="confirm_new_password" className="form-label">
                  Confirm New Password<sup>*</sup>
                </label>
                <input
                  type="password"
                  className="form-control rounded-0"
                  id="confirm_new_password"
                  placeholder="Confirm New Password"
                  name="confirm_new_password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="alert alert-danger text-center py-2">
                  {error}
                </div>
              )}

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
