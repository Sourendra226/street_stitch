import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import SignupForm from "../components/SignupForm";

function Signup() {
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
      <SignupForm />
      <Footer />
    </main>
  );
}

export default Signup;
