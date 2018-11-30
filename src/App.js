import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Dictionary from './containers/RecentiaClinicalLibrary/Dictionary/Dictionary';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={Dictionary}/>
                </Switch>
            </div>
        );
    }
}

export default App;
