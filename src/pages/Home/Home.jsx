import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Home/Hero";
import Warranty from '../../components/Sections/Warranty';
import ProductSec from '../../components/Sections/ProductSec';
import ContactUsSec from "../../components/Sections/ContactUsSec";

export default function Home() {
    // const { hero } = useOutletContext();

    return <>
        <Hero />
        <ProductSec />
        <Warranty />
        <ContactUsSec />
    </>
}