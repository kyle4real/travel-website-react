import React from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

const BookNowPage = () => {
    useScrollToTop();
    return <Hero isDynamic={true}>Book Now</Hero>;
};

export default BookNowPage;
