import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Home } from "pages";

//track page navigation
const history = createBrowserHistory({});
history.listen(location => {});

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;
