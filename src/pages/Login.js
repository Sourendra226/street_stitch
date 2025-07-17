import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import LoginForm from "../components/LoginForm";

function Login() {
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
      <LoginForm />
      <Footer />
    </main>
  );
}

export default Login;
