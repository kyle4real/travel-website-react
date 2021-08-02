import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/test">
          <div>test</div>
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
