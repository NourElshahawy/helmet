import HexPattern from "../../components/Home/HexPattern";
import Hero from "../../components/Home/Hero";
import ProductSec from '../../components/Sections/ProductSec';
import ContactUsSec from "../../components/Sections/ContactUsSec";

import About from "../../components/Sections/About";
import Provide from "../../components/Sections/Provide";
import { useHomeContent } from "../../hooks/useHomeContent";
import WarrantySec from "../../components/Sections/WarrantySec";



export default function Home() {
    const { data } = useHomeContent();
  return (
    <>
      <div className="hm-top-section">
        <HexPattern />
        <div className="hm-top-section__content">
          
          <Hero hero={data?.hero} />
        </div>
      </div>
      <About />
      <Provide />

      <ProductSec />
      <WarrantySec />
      <ContactUsSec />
    </>
  );
}
