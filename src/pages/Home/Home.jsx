import Warranty from "../../components/Sections/Warranty";
import HexPattern from "../../components/Home/HexPattern";
import Hero from "../../components/Home/Hero";
import ProductSec from "../../components/Sections/ProductSec";
import ContactUsSec from "../../components/Sections/ContactUsSec";
import About from "../../components/Sections/About";
import Provide from "../../components/Sections/Provide";
import { useHomeContent } from "../../hooks/useHomeContent";
import { useIsMobile } from "../../hooks/useIsMobile";
import Navbar from "../../components/Layouts/Navbar/Navbar";

export default function Home() {
  const { data } = useHomeContent();
  const isMobile = useIsMobile();

  return (
    <>
      <div className="hm-top-section">
        <HexPattern
          hexWidth={isMobile ? 90 : 280}
          hexHeight={isMobile ? 130 : 400}
          rows={isMobile ? 8 : 3}
          cols={isMobile ? 6 : 5}
        />
        <div className="hm-top-section__content">
          <Navbar nav={data?.nav} />
          <Hero hero={data?.hero} />
        </div>
      </div>
      <About />
      <Provide />
      <ProductSec />
      <Warranty />
      <ContactUsSec />
    </>
  );
}
