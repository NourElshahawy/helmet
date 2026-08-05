import ProductSec from "../../components/Sections/ProductSec";
import Warranty from "../../components/Sections/Warranty";
import ContactUs from "../../components/Sections/ContactUs";
import HexPattern from "../../components/Home/HexPattern";
import Navbar from "../../components/Layouts/Navbar/Navbar";
import Hero from "../../components/Home/Hero";
import About from "../../components/Sections/About";
import Provide from "../../components/Sections/Provide";
import { useHomeContent } from "../../hooks/useHomeContent";

export default function Home() {
    const { data } = useHomeContent();
  return (
    <>
      <div className="hm-top-section">
        <HexPattern />
        <div className="hm-top-section__content">
          <Navbar nav={data?.nav} />
          <Hero hero={data?.hero} />
        </div>
      </div>
      <ProductSec />
      <Warranty />
      <ContactUs />
      <About />
      <Provide />
    </>
  );
}
