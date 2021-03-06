import React from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

const PricingPage = () => {
    useScrollToTop();
    return <Hero isDynamic={true}>Pricing</Hero>;
};

export default PricingPage;
