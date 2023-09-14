import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import Banner from "./banner/Banner";

const Home = () => {
  return (
    <header className="relative">
      <Nav />
      <Banner />
      <Featured />
      <Footer />
    </header>
  );
};

export default Home;
