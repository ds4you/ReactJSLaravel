require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import IndexHome from './components/home/index';
import Master from './components/Master';
import AddItem from './components/item/add';
import IndexItem from './components/item/index';
import EditItem from './components/item/edit';

render(
    <Router history={browserHistory}>
        <Route component={Master} >
            <Route path="/" component={IndexHome} />
            <Route path="/items/add" component={AddItem} />
            <Route path="/items" component={IndexItem} />
            <Route path="/items/edit/:id" component={EditItem} />
        </Route>
    </Router>,
    document.getElementById('app')
);