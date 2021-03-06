import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import Signin from "../containers/Signin";
import PrivateRoute from "./PrivateRoute";

import Sidebar from "../components/Sidebar";

const PagesRoutes = () => (
  <BrowserRouter>
    <Sidebar />
    <Switch>
      <Route exact path="/" component={Signin} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default PagesRoutes;
