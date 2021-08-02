import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Locations from "../components/Locations/Locations";

const LocationsPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return <Locations page={true} />;
};

export default LocationsPage;
