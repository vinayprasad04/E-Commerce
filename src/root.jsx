import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home';

class Root extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
            </Switch>
        );
    }
}

export default Root;