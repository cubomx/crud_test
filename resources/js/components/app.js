import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;


