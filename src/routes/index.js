import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Search from '../containers/Search';

export default () => (
    <BrowserRouter>
        <Route path="/" component={Search} />
    </BrowserRouter>
)