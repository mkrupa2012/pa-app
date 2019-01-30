import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Navigation from './Navigation';
import PayList from './Payments';
import ToDo from './Todo';
import Late from './Late';

import '../style.css';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/payments' component={PayList} />
                    <Route path='/todo' component={ToDo} />
                    <Route path='/late' component={Late} />
                </Switch>
            </div>
            </HashRouter>
        );
    };
};

export default App;