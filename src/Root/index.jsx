import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Root;
