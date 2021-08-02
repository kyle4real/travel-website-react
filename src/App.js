import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import LocationsPage from "./pages/LocationsPage";
import PricingPage from "./pages/PricingPage";

function App() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/pricing">
                    <PricingPage />
                </Route>
                <Route path="/locations">
                    <LocationsPage />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Fragment>
    );
}

export default App;
