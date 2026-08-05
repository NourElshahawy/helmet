
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Home/Hero";
import Warranty from '../../components/Sections/Warranty';
import ContactUs from '../../components/Sections/ContactUs';
import ProductSec from '../../components/Sections/ProductSec';
import About from "./about-us/About";
import Provide from "./provide/Provide";

export default function Home() {
    const { hero } = useOutletContext();

    return <>
        <Hero hero={hero} />
        <ProductSec />
        <Warranty />
        <ContactUs />
        <About />
      <Provide />
    </>
}
