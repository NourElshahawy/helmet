import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Home/Hero";
import React from 'react';
import Warranty from '../../components/Sections/Warranty';
import ContactUs from '../../components/Sections/ContactUs';
import ProductSec from '../../components/Sections/ProductSec';

export default function Home() {
    const { hero } = useOutletContext();

    return <>
        <Hero hero={hero} />
        <ProductSec />
        <Warranty />
        <ContactUs />
    </>
}