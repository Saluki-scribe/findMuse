import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Container from '../containers/Container';
import Intake from '../containers/Intake';
import Search from '../containers/Search';
import Profile from '../containers/Profile';
import Likes from '../containers/Likes';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Container} />
            <Route path="/signin" exact component={Container} />
            <Route path="/intake" exact component={Intake} />
            <Route path="/search" exact component={Search} />
            <Route path="/likes" exact component={Likes} />
            <Route path="/profile" exact component={Profile} />
        </Switch>
    </BrowserRouter>
)