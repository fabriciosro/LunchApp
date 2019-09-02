import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import PollOk from './pages/PollOk';
import Admin from './pages/Admin';

export default function Routes() {
    return (
        <BrowserRouter>        
            <Route path="/" exact component={Login} />
            <Route path="/user/:id" component={Main} />
            <Route path="/pollok" component={PollOk} />
            <Route path="/admin/:id" component={Admin} />
        </BrowserRouter>
    );
}