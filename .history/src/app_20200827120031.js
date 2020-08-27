import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { RouteConfiguration, routesList } from "./routes";
import { useStore } from "./reducers";
import localStorage from "./utils/local-storage";

const App = props => {
    return (
        <Router>
            <Switch>
                {routesList.map(item => {
                    return (
                        <RouteConfiguration
                            key={item.path}
                            {...props}
                            exact
                            authUser={localStorage().get("auth")}
                            item={item}
                            path={item.path}
                            component={item.component}
                        />
                    );
                })}
                <Redirect to="/404" />
            </Switch>
        </Router>
    );
};

export default App;
