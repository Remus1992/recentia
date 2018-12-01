import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './containers/Home';
import RecentiaClinicalLibrary from "./containers/RecentiaClinicalLibrary/RecentiaClinicalLibrary";
import RecentiaClinicalVisitSupport from "./containers/RecentiaClinicalVisitSupport/RecentiaClinicalVisitSupport";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/clinical_library" component={RecentiaClinicalLibrary}/>
                    <Route path="/clinical_visit" component={RecentiaClinicalVisitSupport}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default App;
