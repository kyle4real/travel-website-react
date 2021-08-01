import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Locations from "../components/Locations/Locations";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <Locations />
        </Fragment>
    );
};

export default Home;
