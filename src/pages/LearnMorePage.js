import React from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

const LearnMorePage = () => {
    useScrollToTop();
    return <Hero isDynamic={true}>Learn More</Hero>;
};

export default LearnMorePage;
