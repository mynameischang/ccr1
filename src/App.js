import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import DeveloperPage from "./pages/DeveloperPage";
import ResultPage from "./pages/ResultPage";
import WarningPage from "./pages/WarningPage";

function App({ props }) {
  return (
    <Switch>
      <Route
        exact
        path="/CCR/"
        render={(props) => <LandingPage props={props} />}
      ></Route>
      <Route
        path="/public/result/:finalType"
        render={(props) => <ResultPage props={props} {...props} />}
      ></Route>


      <Route
        exact
        path="/public/makers"
        render={(props) => <DeveloperPage props={props} />}
      ></Route>
      <Route path="/public/*">
        <WarningPage />
      </Route>
    </Switch>
  );
}

export default App;
