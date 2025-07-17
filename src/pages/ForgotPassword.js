import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

function ForgotPassword() {
  return (
    <main>
      <Header />
      <Breadcrumb
        currentPage="Account"
        items={[
          { label: "Home", path: "/" },
          { label: "Account" }
        ]}
      />
      <ForgotPasswordForm />
      <Footer />
    </main>
  );
}

export default ForgotPassword;
