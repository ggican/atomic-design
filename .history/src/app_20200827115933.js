import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { RouteConfiguration, routesList } from "./routes";
import { useStore, servicesAction } from "./reducers";
import localStorage from "./utils/local-storage";

const App = props => {
    const [isDone, setDone] = useState(false);
    const { dispatch, state } = useStore();
    const { user } = state;

    // check have user or not
    useEffect(() => {
        // check have user in reducers
        const localStorageData = localStorage().get("auth");
    }, [user, dispatch]);
    if (!isDone) {
        return false;
    }
    return (
        <Router>
            <Switch>
                {routesList.map(item => {
                    return (
                        <RouteConfiguration
                            key={item.path}
                            {...props}
                            exact
                            authUser={user?.auth?.data}
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