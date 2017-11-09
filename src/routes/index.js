import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Search from '../containers/Search';
import Container from '../containers/Container';

export default () => (
    <BrowserRouter>
        <Route path="/" component={Container} />
    </BrowserRouter>
)