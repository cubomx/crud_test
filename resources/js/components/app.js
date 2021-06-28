import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
// componets
import Layout from '../components/Layout';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;


